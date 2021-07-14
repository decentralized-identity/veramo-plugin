import { TKeyType, IKey } from '@veramo/core'
import { AbstractKeyManagementSystem } from '@veramo/key-manager'

/**
 * You can use this template for a Key Management System implementation.
 * Key Management Systems define the way some common cryptographic operations that require key
 * material are performed.
 *
 * This interface is used by `@veramo/key-manager` to implement support for key management.
 * Veramo can use multiple key management systems at the same time, and if you wish to ad your own
 * please implement a class like this.
 *
 * If you don't want to customize this, then it is safe to remove from the template.
 *
 * @alpha
 */
export class KeyManagementSystem extends AbstractKeyManagementSystem {
  sign(args: { key: IKey; algorithm?: string; data: Uint8Array }): Promise<string> {
    throw new Error('Method not implemented.')
  }

  sharedSecret(args: { myKey: IKey; theirKey: Pick<IKey, 'type' | 'publicKeyHex'> }): Promise<string> {
    throw new Error('Method not implemented.')
  }

  async createKey({ type, meta }: { type: TKeyType; meta: any }): Promise<Omit<IKey, 'kms'>> {
    let key: Omit<IKey, 'kms'>

    switch (type) {
      case 'Ed25519':
        throw Error('KeyManagementSystem createKey Ed25519 not implemented')
        break
      case 'Secp256k1':
        throw Error('KeyManagementSystem createKey Secp256k1 not implemented')
        break
      case 'X25519':
        throw Error('KeyManagementSystem createKey X25519 not implemented')
        break
      default:
        throw Error('Key type not supported by this KMS: ' + type)
    }
    return key
  }

  async deleteKey(args: { kid: string }) {
    throw Error('KeyManagementSystem deleteKey not implemented')
    return true
  }
}
