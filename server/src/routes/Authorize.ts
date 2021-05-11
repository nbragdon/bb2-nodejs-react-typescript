import StatusCodes from 'http-status-codes';
import { Router, Request, Response } from 'express';
import AuthorizationToken from '../entities/AuthorizationToken';
import Settings from '../entities/Settings';
import db from '../utils/db';
import { getAccessToken, generateAuthorizeUrl } from '../utils/bb2';

const { BAD_REQUEST, CREATED, OK } = StatusCodes;

export async function authorizationCallback(req: Request, res: Response) {
    try {
        console.log('req.query', req.query);
        if (!req.query.code) {
            throw new Error('Response was missing access code');
        }
        if (db.settings.pkce && !req.query.state) {
            throw new Error('State is required when using PKCE');
        }

        const response = await getAccessToken(req.query.code?.toString(), req.query.state?.toString());
    
        console.log(response);
        console.log(response.data);

        const authToken = new AuthorizationToken(response.data);
    
        db.authTokens[authToken.patient] = authToken;
    } catch (e) {
        console.log(e);
    }
    
    res.redirect(`http://localhost:3000`);
}

export async function getAuthUrl(req: Request, res: Response) {
    console.log('req.query', req.query);
    const pkce = req.params.pkce === 'true';
    db.settings = new Settings({
        version: req.query?.version?.toString() || db.settings.version,
        env: req.query?.env?.toString() || db.settings.env,
        pkce: req.query?.pkce?.toString() ? pkce : db.settings.pkce
    });
    console.log('db.settings', db.settings);
    res.send(generateAuthorizeUrl());
}

export async function getCurrentAuthToken(req: Request, res: Response) {
    const firstAuthTokenKey = Object.keys(db.authTokens)[0];
    res.send(db.authTokens[firstAuthTokenKey]);
}

const router = Router();

router.get('/bluebutton/callback', authorizationCallback);
router.get('/authorize/authurl', getAuthUrl);
router.get('/authorize/currentAuthToken', getCurrentAuthToken);
    
export default router;