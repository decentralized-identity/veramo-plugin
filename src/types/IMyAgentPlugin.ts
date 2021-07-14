import { IPluginMethodMap, IAgentContext, IDIDManager, IResolver } from '@veramo/core'

/**
 * My Agent Plugin description.
 *
 * This is the interface that describes what your plugin can do.
 * The methods listed here, will be directly available to the veramo agent where your plugin is going to be used.
 * Depending on the agent configuration, other agent plugins, as well as the application where the agent is used
 * will be able to call these methods.
 *
 * To build a schema for your plugin using standard tools, you must link to this file in package.json.
 * Example:
 * ```
 * "veramo": {
 *    "pluginInterfaces": {
 *      "IMyAgentPlugin": "./src/types/IMyAgentPlugin.ts"
 *    }
 *  },
 * ```
 *
 * @beta
 */
export interface IMyAgentPlugin extends IPluginMethodMap {
  /**
   * Your plugin method description
   *
   * @param args - Input parameters for this method
   * @param context - The required context where this method can run.
   *   Declaring a context type here lets other developers know which other plugins
   *   need to also be installed for this method to work.
   */
  myPluginFoo(args: IMyAgentPluginFooArgs, context: IContext): Promise<IMyAgentPluginFooResult>
}

/**
 * Arguments needed for {@link MyAgentPlugin.myPluginFoo}
 * To be able to export a plugin schema, your plugin methods should use an `args` parameter of a
 * named type or interface.
 *
 * @beta
 */
export interface IMyAgentPluginFooArgs {
  /**
   * Decentralized identifier
   */
  did: string

  /**
   * Lorem ipsum
   */
  bar: string

  /**
   * Dolorem
   */
  foo: string
}

/**
 * Result of {@link MyAgentPlugin.myPluginFoo}
 * To be able to export a plugin schema, your plugin return types need to be Promises of a
 * named type or interface.
 *
 * @beta
 */
export type IMyAgentPluginFooResult = {
  foobar?: string
  baz?: any
}

/**
 * This context describes the requirements of this plugin.
 * The agent needs to also use some plugins that implement the interfaces listed here.
 * You can also define requirements on a more granular level, for each plugin method or event handler of your plugin.
 * @beta
 */
export type IContext = IAgentContext<IResolver & IDIDManager>
