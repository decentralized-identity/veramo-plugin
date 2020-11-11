import { IPluginMethodMap, IAgentContext, IIdentityManager, IResolver} from 'daf-core'

export type IContext = IAgentContext<IResolver & IIdentityManager>

export interface IMyAgentPluginFooArgs {
  did: string
  bar: string
}

export interface IMyAgentPlugin extends IPluginMethodMap {
  myPluginFoo(
    args: IMyAgentPluginFooArgs,
    context: IContext,
  ): Promise<string>
}
