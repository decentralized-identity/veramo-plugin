import { IIdentity } from 'daf-core';
import { AbstractIdentityStore } from 'daf-identity-manager';
export declare class IdentityStore extends AbstractIdentityStore {
    get({ did, alias, provider }: {
        did: string;
        alias: string;
        provider: string;
    }): Promise<IIdentity>;
    delete({ did }: {
        did: string;
    }): Promise<boolean>;
    import(args: IIdentity): Promise<boolean>;
    list(args: {
        alias?: string;
        provider?: string;
    }): Promise<IIdentity[]>;
}
