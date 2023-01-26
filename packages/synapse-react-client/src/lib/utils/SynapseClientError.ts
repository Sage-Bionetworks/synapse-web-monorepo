/**
 * Error message returned by the Synapse backend joined with the
 * HTTP status code.
 */

export class SynapseClientError extends Error {
  public status: number
  public reason: string
  public url: string

  constructor(status: number, reason: string, url: string) {
    super(reason)
    this.status = status
    this.reason = reason
    this.url = url
    // See https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-2.html#support-for-newtarget
    Object.setPrototypeOf(this, new.target.prototype)
  }
}
