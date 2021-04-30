import AuthorizationToken from '../entities/AuthorizationToken';
import { CodeChallenge } from './generatePKCE'

export interface DB {
    patients: object,
    authTokens: {
        [key: string]: AuthorizationToken
    },
    codeChallenges: {
        [key: string]: CodeChallenge
    },
    codeChallenge: CodeChallenge
}

const db: DB = {
    patients: {},
    authTokens: {},
    codeChallenges: {},
    codeChallenge: {
        codeChallenge: '',
        verifier: ''
    }
}

export default db;