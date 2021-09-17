import AuthorizationToken from '../entities/AuthorizationToken';
import Settings from '../entities/Settings';
import { CodeChallenge } from './generatePKCE'

export interface User {
    authToken?: AuthorizationToken,
    name: string,
    userName: string,
    eobData?: any
}
export interface DB {
    patients: object,
    users: User[],
    codeChallenges: {
        [key: string]: CodeChallenge
    },
    codeChallenge: CodeChallenge,
    settings: Settings
}

const db: DB = {
    patients: {},
    users: [{
        name: 'hard code name',
        userName: 'hard coded'
    }],
    codeChallenges: {},
    codeChallenge: {
        codeChallenge: '',
        verifier: ''
    },
    settings: new Settings(undefined)
}

export default db;