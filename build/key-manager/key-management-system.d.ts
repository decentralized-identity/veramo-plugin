import { TKeyType, IKey, EcdsaSignature } from 'daf-core';
import { AbstractKeyManagementSystem } from 'daf-key-manager';
export declare class KeyManagementSystem extends AbstractKeyManagementSystem {
    createKey({ type }: {
        type: TKeyType;
    }): Promise<Omit<IKey, 'kms'>>;
    deleteKey(args: {
        kid: string;
    }): Promise<boolean>;
    encryptJWE({ key, to, data }: {
        key: IKey;
        to: IKey;
        data: string;
    }): Promise<string>;
    decryptJWE({ key, data }: {
        key: IKey;
        data: string;
    }): Promise<string>;
    signEthTX({ key, transaction }: {
        key: IKey;
        transaction: object;
    }): Promise<string>;
    signJWT({ key, data }: {
        key: IKey;
        data: string;
    }): Promise<EcdsaSignature>;
}
