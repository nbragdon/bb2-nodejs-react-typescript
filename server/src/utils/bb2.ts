import axios from 'axios';
import FormData from 'form-data';
import type { CodeChallenge } from './generatePKCE';

const { generateCodeChallenge } = require('./generatePKCE');

const BB2_BASE_URL = process.env.BB2_BASE_URL;
const BB2_AUTH_URL = BB2_BASE_URL + '/v1/o/authorize';
const BB2_ACCESS_TOKEN_URL = BB2_BASE_URL + '/v1/o/token/';
const APP_SPECIFIC_CLIENT_ID = process.env.BB2_CLIENT_ID;
const APP_SPECIFIC_CLIENT_SECRET = process.env.BB2_CLIENT_SECRET;
const APP_SPECIFIC_REDIRECT_URI = process.env.BB2_CALLBACK_URL;

export function generateAuthorizeUrl(codeChallenge: CodeChallenge): string {
    return BB2_AUTH_URL +
        '?client_id=' + APP_SPECIFIC_CLIENT_ID + 
        '&redirect_uri=' + APP_SPECIFIC_REDIRECT_URI + 
        '&code_challenge=' + codeChallenge.codeChallenge + 
        '&response_type=code' +
        '&code_challenge_method=S256';
}

export async function getAccessToken(code: string, codeChallenge: CodeChallenge) {
    const form = new FormData();
    form.append('client_id', APP_SPECIFIC_CLIENT_ID);
    form.append('client_secret', APP_SPECIFIC_CLIENT_SECRET);
    form.append('code', code);
    form.append('code_verifier', codeChallenge.verifier);
    form.append('code_challenge', codeChallenge.codeChallenge);
    form.append('grant_type', 'authorization_code');
    form.append('redirect_uri', APP_SPECIFIC_REDIRECT_URI);
    return await axios.post(BB2_ACCESS_TOKEN_URL, form, { headers: form.getHeaders() });
}