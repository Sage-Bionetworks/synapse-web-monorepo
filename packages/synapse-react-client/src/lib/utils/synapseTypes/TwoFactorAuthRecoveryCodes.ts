/**
 * A list of recovery codes that can be used as a backup in place of TOTPs when performing two factor authentication.
 *
 * https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/auth/TwoFactorAuthRecoveryCodes.html
 */
export type TwoFactorAuthRecoveryCodes = {
  codes: string[]
}
