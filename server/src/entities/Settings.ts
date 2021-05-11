export interface ISettings {
    env: string,
    version: string,
    pkce: boolean,
}

export default class Settings implements ISettings {

    public env: string;
    public version: string;
    public pkce: boolean;

    constructor(settings: ISettings | undefined) {
        this.env = settings?.env || 'sandbox';
        this.version = settings?.version || 'v1';
        this.pkce = settings?.pkce != undefined ? settings.pkce : true;
    }
}