import { Router, Request, Response } from 'express';
import axios from 'axios';

import config from '../configs/config';
import db from '../utils/db';

export async function getBenefitData(req: Request, res: Response) {
    const envConfig = config[db.settings.env];
    const BB2_BENEFIT_URL = envConfig.bb2BaseUrl + '/' + db.settings.version + '/fhir/ExplanationOfBenefit/';
    const firstAuthTokenKey = Object.keys(db.authTokens)[0];
    const firstAuthToken = db.authTokens[firstAuthTokenKey];

    const response = await axios.get(BB2_BENEFIT_URL, { 
        params: req.query,
        headers: {
            'Authorization': `Bearer ${firstAuthToken.access_token}`
        }
    });

    res.json(response.data);
}

export async function getPatientData(req: Request, res: Response) {
    const envConfig = config[db.settings.env];
    const BB2_PATIENT_URL = envConfig.bb2BaseUrl + '/' + db.settings.version + '/fhir/Patient/';
    const firstAuthTokenKey = Object.keys(db.authTokens)[0];
    const firstAuthToken = db.authTokens[firstAuthTokenKey];

    const response = await axios.get(BB2_PATIENT_URL, { 
        params: req.query,
        headers: {
            'Authorization': `Bearer ${firstAuthToken.access_token}`
        }
    });

    res.json(response.data);
}

export async function getCoverageData(req: Request, res: Response) {
    const envConfig = config[db.settings.env];
    const BB2_COVERAGE_URL = envConfig.bb2BaseUrl + '/' + db.settings.version + '/fhir/Coverage/';
    const firstAuthTokenKey = Object.keys(db.authTokens)[0];
    const firstAuthToken = db.authTokens[firstAuthTokenKey];

    const response = await axios.get(BB2_COVERAGE_URL, { 
        params: req.query,
        headers: {
            'Authorization': `Bearer ${firstAuthToken.access_token}`
        }
    });

    res.json(response.data);
}

export async function getUserProfileData(req: Request, res: Response) {
    const envConfig = config[db.settings.env];
    const BB2_BENEFIT_URL = envConfig.bb2BaseUrl + '/' + db.settings.version + '/connect/userinfo';
    const firstAuthTokenKey = Object.keys(db.authTokens)[0];
    const firstAuthToken = db.authTokens[firstAuthTokenKey];

    const response = await axios.get(BB2_BENEFIT_URL, { 
        params: req.query,
        headers: {
            'Authorization': `Bearer ${firstAuthToken.access_token}`
        }
    });

    res.json(response.data);
}

const router = Router();

router.get('/benefit', getBenefitData);
router.get('/patient', getPatientData);
router.get('/coverage', getCoverageData);
router.get('/userprofile', getUserProfileData);

export default router;