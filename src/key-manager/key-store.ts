import { IKey } from '@veramo/core'
import { AbstractKeyStore } from '@veramo/key-manager'

/**
 * This type of class would allow you to define your own storage for the key mappings that a Veramo agent manages.
 * `@veramo/key-manager` can be configured with a class like this to customize the way it stores key metadata.
 *
 * If you don't want to customize this, then it is safe to remove from the template.
 *
 * @alpha
 */
export class KeyStore extends AbstractKeyStore {
  async get({ kid }: { kid: string }): Promise<IKey> {
    throw Error('KeyStore get not implemented')
  }

  async delete({ kid }: { kid: string }) {
    throw Error('KeyStore delete not implemented')
    return true
  }

  async import(args: IKey) {
    throw Error('KeyStore import not implemented')
    return true
  }
}
