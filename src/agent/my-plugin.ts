import { IAgentPlugin } from 'daf-core'
import { IMyAgentPlugin, IMyAgentPluginFooArgs, IContext } from '../types/IMyAgentPlugin'

const schema = { 
  components: { 
    schemas: {
      IMyAgentPluginFooArgs: {
        type: "object",
        properties: {
          did: {
            type: "string",
            description: "Decentralized identifier"
          },
          bar: {
            type: "string",
            description: "bar"
          },
        }
      }
    }, 
    methods: {
      myPluginFoo: {
        description: "Does foo",
        arguments: {
          "$ref": "#/components/schemas/IMyAgentPluginFooArgs"
        },
        returnType: {
          type: "string"
        }
      }
    } 
  }
}

export class MyAgentPlugin implements IAgentPlugin {
  
  readonly schema = schema
  
  readonly methods: IMyAgentPlugin = {
    myPluginFoo: this.myPluginFoo.bind(this)
  }

  private async myPluginFoo(args: IMyAgentPluginFooArgs, context: IContext): Promise<string> {
    const didDoc = await context.agent.resolveDid({ didUrl: args.did })
    console.log(didDoc)
    return args.bar
  }
}