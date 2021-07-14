import { IAgentPlugin } from '@veramo/core'
import { IMyAgentPlugin, IMyAgentPluginFooArgs, IContext, IMyAgentPluginFooResult } from '../types/IMyAgentPlugin'
import { schema } from '../index'

/**
 * {@inheritDoc IMyAgentPlugin}
 * @beta
 */
export class MyAgentPlugin implements IAgentPlugin {
  readonly schema = schema.IMyAgentPlugin

  // map the methods your plugin is declaring to their implementation
  readonly methods: IMyAgentPlugin = {
    myPluginFoo: this.myPluginFoo.bind(this),
  }

  // list the event types that this plugin cares about.
  // When the agent emits an event of these types, `this.onEvent()` will get called.
  readonly eventTypes = ['validatedMessage']

  // the event handler for the types listed in `eventTypes`
  public async onEvent(event: { type: string; data: any }, context: IContext) {
    // you can emit other events
    await context.agent.emit('my-event', { foo: event.data.id })
    // or call other agent methods that are declared in the context
    const allDIDs = await context.agent.didManagerFind()
  }

  /** {@inheritDoc IMyAgentPlugin.myPluginFoo} */
  private async myPluginFoo(args: IMyAgentPluginFooArgs, context: IContext): Promise<IMyAgentPluginFooResult> {
    // you can call other agent methods (that are declared in the context)
    const didDoc = await context.agent.resolveDid({ didUrl: args.did })
    // or emit some events
    await context.agent.emit('my-other-event', { foo: 'hello' })
    return { foobar: args.bar }
  }
}
