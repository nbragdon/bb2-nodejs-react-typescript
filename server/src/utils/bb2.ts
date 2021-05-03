import axios from 'axios';
import FormData from 'form-data';

import db from './db';
import config from '../configs/config';
import type { CodeChallenge } from './generatePKCE';

const { generateCodeChallenge } = require('./generatePKCE');

export function generateAuthorizeUrl(codeChallenge: CodeChallenge): string {
    const envConfig = config[db.settings.env];

    const BB2_AUTH_URL = envConfig.bb2BaseUrl + '/' + db.settings.version + '/o/authorize';

    return BB2_AUTH_URL +
        '?client_id=' + envConfig.bb2ClientId + 
        '&redirect_uri=' + envConfig.bb2CallbackUrl + 
        '&code_challenge=' + codeChallenge.codeChallenge + 
        '&response_type=code' +
        '&code_challenge_method=S256';
}

export async function getAccessToken(code: string, codeChallenge: CodeChallenge) {
    const envConfig = config[db.settings.env];

    const BB2_ACCESS_TOKEN_URL = envConfig.bb2BaseUrl + '/' + db.settings.version + '/o/token/';

    const form = new FormData();
    form.append('client_id', envConfig.bb2ClientId);
    form.append('client_secret', envConfig.bb2ClientSecret);
    form.append('code', code);
    form.append('code_verifier', codeChallenge.verifier);
    form.append('code_challenge', codeChallenge.codeChallenge);
    form.append('grant_type', 'authorization_code');
    form.append('redirect_uri', envConfig.bb2CallbackUrl);
    return await axios.post(BB2_ACCESS_TOKEN_URL, form, { headers: form.getHeaders() });
}