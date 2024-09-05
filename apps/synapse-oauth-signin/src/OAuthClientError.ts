/**
 * Error type used to handle specific OAuth error cases.
 */
export class OAuthClientError extends Error {
  public error: string
  public error_description: string | undefined

  constructor(error: string, error_description?: string) {
    super(error)
    this.error = error
    this.error_description = error_description
    // See https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-2.html#support-for-newtarget
    Object.setPrototypeOf(this, new.target.prototype)
  }
}
