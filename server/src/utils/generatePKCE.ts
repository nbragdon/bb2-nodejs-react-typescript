import crypto from "crypto";

export type CodeChallenge = {
    codeChallenge: string,
    verifier: string
}

function base64URLEncode(str: Buffer): string {
    return str.toString('base64')
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=/g, '');
}

function sha256(buffer: string): Buffer {
    return crypto.createHash('sha256').update(buffer).digest();
}

export function generateCodeChallenge(): CodeChallenge {
    var verifier = base64URLEncode(crypto.randomBytes(32));
    return {
        codeChallenge: base64URLEncode(sha256(verifier)),
        verifier: verifier
    };
}