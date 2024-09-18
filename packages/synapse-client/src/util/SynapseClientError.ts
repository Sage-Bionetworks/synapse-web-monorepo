import {
  BaseError,
  DrsErrorResponse,
  OAuthErrorResponse,
  TwoFactorAuthErrorResponse,
} from '../generated'

type SynapseError =
  | BaseError
  | DrsErrorResponse
  | OAuthErrorResponse
  | TwoFactorAuthErrorResponse

/**
 * Error message returned by the Synapse backend joined with the
 * HTTP status code.
 */
export class SynapseClientError extends Error {
  public status: number
  public reason: string
  public errorResponse?: SynapseError
  public url: string

  constructor(
    status: number,
    reason: string,
    url: string,
    errorResponse?: SynapseError,
  ) {
    super(reason)
    this.status = status
    this.reason = reason
    this.url = url
    this.errorResponse = errorResponse
    // See https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-2.html#support-for-newtarget
    Object.setPrototypeOf(this, new.target.prototype)
  }
}
