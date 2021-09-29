import { TKeyType, IKey, RequireOnly } from '@veramo/core'
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
  importKey(args: RequireOnly<IKey, 'privateKeyHex' | 'type' | 'kms'>): Promise<Pick<IKey, 'type' | 'kms' | 'kid' | 'publicKeyHex' | 'meta'>> {
    throw new Error('Method not implemented.')
  }
  listKeys(): Promise<Pick<IKey, 'type' | 'kms' | 'kid' | 'publicKeyHex' | 'meta'>[]> {
    throw new Error('Method not implemented.')
  }
  createKey(args: { type: TKeyType; meta?: any }): Promise<Pick<IKey, 'type' | 'kms' | 'kid' | 'publicKeyHex' | 'meta'>> {
    throw new Error('Method not implemented.')
  }
  deleteKey(args: { kid: string }): Promise<boolean> {
    throw new Error('Method not implemented.')
  }
  sign(args: { [x: string]: any; keyRef: Pick<IKey, 'kid'>; algorithm?: string | undefined; data: Uint8Array }): Promise<string> {
    throw new Error('Method not implemented.')
  }
  sharedSecret(args: { myKeyRef: Pick<IKey, 'kid'>; theirKey: Pick<IKey, 'type' | 'publicKeyHex'> }): Promise<string> {
    throw new Error('Method not implemented.')
  }
  
  
}
