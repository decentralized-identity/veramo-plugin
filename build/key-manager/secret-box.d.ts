import { AbstractSecretBox } from 'daf-key-manager';
export declare class SecretBox extends AbstractSecretBox {
    private secretKey;
    constructor(secretKey: string);
    encrypt(message: string): Promise<string>;
    decrypt(encryptedMessageHex: string): Promise<string>;
}
