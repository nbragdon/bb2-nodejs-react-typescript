import AuthorizationToken from '../entities/AuthorizationToken';
import Settings from '../entities/Settings';
import { CodeChallenge } from './generatePKCE'

export interface DB {
    patients: object,
    authTokens: {
        [key: string]: AuthorizationToken
    },
    codeChallenges: {
        [key: string]: CodeChallenge
    },
    codeChallenge: CodeChallenge,
    settings: Settings
}

const db: DB = {
    patients: {},
    authTokens: {},
    codeChallenges: {},
    codeChallenge: {
        codeChallenge: '',
        verifier: ''
    },
    settings: new Settings(undefined)
}

export default db;