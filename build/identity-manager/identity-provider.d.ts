import { IIdentity, IKey, IService, IAgentContext, IKeyManager } from 'daf-core';
import { AbstractIdentityProvider } from 'daf-identity-manager';
declare type IContext = IAgentContext<IKeyManager>;
export declare class IdentityProvider extends AbstractIdentityProvider {
    private defaultKms;
    constructor(options: {
        defaultKms: string;
    });
    createIdentity({ kms, alias }: {
        kms?: string;
        alias?: string;
    }, context: IContext): Promise<Omit<IIdentity, 'provider'>>;
    deleteIdentity(identity: IIdentity, context: IContext): Promise<boolean>;
    addKey({ identity, key, options }: {
        identity: IIdentity;
        key: IKey;
        options?: any;
    }, context: IContext): Promise<any>;
    addService({ identity, service, options }: {
        identity: IIdentity;
        service: IService;
        options?: any;
    }, context: IContext): Promise<any>;
    removeKey(args: {
        identity: IIdentity;
        kid: string;
        options?: any;
    }, context: IContext): Promise<any>;
    removeService(args: {
        identity: IIdentity;
        id: string;
        options?: any;
    }, context: IContext): Promise<any>;
}
export {};
