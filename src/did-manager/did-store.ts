import { IIdentifier } from '@veramo/core'
import { AbstractDIDStore } from '@veramo/did-manager'

/**
 * This type of class would allow you to define your own storage for the DIDs that a Veramo agent manages.
 * `@veramo/did-manager` can be configured with a class like this to customize DID storage.
 *
 * If you don't want to customize this, then it is safe to remove from the template.
 *
 * @alpha
 */
export class DIDStore extends AbstractDIDStore {
  async get({ did, alias, provider }: { did: string; alias: string; provider: string }): Promise<IIdentifier> {
    throw Error('IdentityStore get not implemented')
  }

  async delete({ did }: { did: string }) {
    throw Error('IdentityStore delete not implemented')
    return true
  }

  async import(args: IIdentifier) {
    throw Error('IdentityStore import not implemented')
    return true
  }

  async list(args: { alias?: string; provider?: string }): Promise<IIdentifier[]> {
    throw Error('IdentityStore list not implemented')
  }
}
