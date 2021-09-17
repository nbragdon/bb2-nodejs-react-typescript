import { Router, Request, Response } from 'express';
import axios from 'axios';
import config from '../configs/config';
import db from '../utils/db';
import { getLoggedInUser } from 'src/utils/user';

export async function getBenefitData(req: Request, res: Response) {
    const loggedInUser = getLoggedInUser(db);
    const envConfig = config[db.settings.env];
    const BB2_BENEFIT_URL = envConfig.bb2BaseUrl + '/' + db.settings.version + '/fhir/ExplanationOfBenefit/';
    
    const response = await axios.get(BB2_BENEFIT_URL, { 
        params: req.query,
        headers: {
            'Authorization': `Bearer ${loggedInUser.authToken?.access_token}`
        }
    });

    //res.json(response.data);
    return response.data;
}

export async function getBenefitDataEndPoint(req: Request, res: Response) {
    const loggedInUser = getLoggedInUser(db);
    const data = loggedInUser.eobData
    res.json(data);
}

export async function getPatientData(req: Request, res: Response) {
    const loggedInUser = getLoggedInUser(db);
    const envConfig = config[db.settings.env];
    const BB2_PATIENT_URL = envConfig.bb2BaseUrl + '/' + db.settings.version + '/fhir/Patient/';
    
    const response = await axios.get(BB2_PATIENT_URL, { 
        params: req.query,
        headers: {
            'Authorization': `Bearer ${loggedInUser.authToken?.access_token}`
        }
    });

    res.json(response.data);
}

export async function getCoverageData(req: Request, res: Response) {
    const loggedInUser = getLoggedInUser(db);
    const envConfig = config[db.settings.env];
    const BB2_COVERAGE_URL = envConfig.bb2BaseUrl + '/' + db.settings.version + '/fhir/Coverage/';
    
    const response = await axios.get(BB2_COVERAGE_URL, { 
        params: req.query,
        headers: {
            'Authorization': `Bearer ${loggedInUser.authToken?.access_token}`
        }
    });

    res.json(response.data);
}

export async function getUserProfileData(req: Request, res: Response) {
    const loggedInUser = getLoggedInUser(db);
    const envConfig = config[db.settings.env];
    const BB2_BENEFIT_URL = envConfig.bb2BaseUrl + '/' + db.settings.version + '/connect/userinfo';
    
    const response = await axios.get(BB2_BENEFIT_URL, { 
        params: req.query,
        headers: {
            'Authorization': `Bearer ${loggedInUser.authToken?.access_token}`
        }
    });

    res.json(response.data);
}

const router = Router();

router.get('/benefit', getBenefitDataEndPoint);
router.get('/patient', getPatientData);
router.get('/coverage', getCoverageData);
router.get('/userprofile', getUserProfileData);

export default router;