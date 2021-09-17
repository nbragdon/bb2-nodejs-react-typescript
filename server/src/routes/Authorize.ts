import StatusCodes from 'http-status-codes';
import { Router, Request, Response } from 'express';
import AuthorizationToken from '../entities/AuthorizationToken';
import Settings from '../entities/Settings';
import db from '../utils/db';
import { getAccessToken, generateAuthorizeUrl } from '../utils/bb2';
import axios from 'axios';
import { getBenefitData } from './Data';
import { getLoggedInUser } from 'src/utils/user';

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
        
        /* DEVELOPER NOTES:
        * This is where you would most likely place some type of
        * persistence service/functionality to store the token along with
        * the user identifiers
        * Of course after ensuring there is a proper token response
         */
        const authToken = new AuthorizationToken(response.data);
    
        const loggedInUser = getLoggedInUser(db);
        loggedInUser.authToken = authToken;
        //db.authTokens[authToken.patient] = authToken;

        /* DEVELOPER NOTES:
        * Here we will use the token to get the EoB data
        * for the patient
        */
        const eobData = await getBenefitData( req, res);
        loggedInUser.eobData = eobData;
        

    } catch (e) {
        /* DEVELOPER NOTES:
        * This is where you could also use a data service or other exception handling
        * to display or store the error
         */
        console.log(e);
    }
        /* DEVELOPER NOTE:
         * This is a hardcoded redirect, but this should be used from settings stored in a conf file
         * or other mechanism
         */
    res.redirect(`http://localhost:3000`);
}

export async function getAuthUrl(req: Request, res: Response) {
    console.log('req.query', req.query);

    /* DEVELOPER NOTE:
    * to utilize the latest security features/best practices
    * it is recommended to utilize pkce
    */
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
    const loggedInUser = getLoggedInUser(db);
    res.send(loggedInUser.authToken);
}

const router = Router();

router.get('/bluebutton/callback', authorizationCallback);
router.get('/authorize/authurl', getAuthUrl);
router.get('/authorize/currentAuthToken', getCurrentAuthToken);
    
export default router;