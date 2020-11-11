import { IKey } from 'daf-core';
import { AbstractKeyStore } from 'daf-key-manager';
export declare class KeyStore extends AbstractKeyStore {
    get({ kid }: {
        kid: string;
    }): Promise<IKey>;
    delete({ kid }: {
        kid: string;
    }): Promise<boolean>;
    import(args: IKey): Promise<boolean>;
}
