import { IAgentPlugin } from 'daf-core';
import { IMyAgentPlugin } from './types/IMyAgentPlugin';
export declare class MyAgentPlugin implements IAgentPlugin {
    readonly schema: {
        components: {
            schemas: {
                IMyAgentPluginFooArgs: {
                    type: string;
                    properties: {
                        did: {
                            type: string;
                            description: string;
                        };
                        bar: {
                            type: string;
                            description: string;
                        };
                    };
                };
            };
            methods: {
                myPluginFoo: {
                    description: string;
                    arguments: {
                        $ref: string;
                    };
                    returnType: {
                        type: string;
                    };
                };
            };
        };
    };
    readonly methods: IMyAgentPlugin;
    private myPluginFoo;
}
