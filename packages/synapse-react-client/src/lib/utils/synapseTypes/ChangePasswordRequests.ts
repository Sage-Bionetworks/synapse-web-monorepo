// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/auth/ChangePasswordInterface.html
export type ChangePasswordInterface = {
  newPassword: string // The new password,
  concreteType: string
}

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/auth/ChangePasswordWithCurrentPassword.html
// Change user account's password by verifying the current password
export type ChangePasswordWithCurrentPassword = {
  newPassword: string // The new password
  concreteType: string
  username: string // The user's username
  currentPassword: string // The user's password
  authenticationReceipt?: string // Optional, but highly recommended. The most recent authentication receipt given to the last success login from this machine, using this client. Having this allows you to bypass throttling on consecutive authentication attempts with a wrong password.
}

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/auth/ChangePasswordWithToken.html
// Change user account's password by providing a token issued by the server
export type ChangePasswordWithToken = {
  newPassword: string
  concreteType: string
  passwordChangeToken: PasswordResetSignedToken
}

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/auth/PasswordResetSignedToken.html
// Signed token containing the the information necessary to reset the password for a user.
export type PasswordResetSignedToken = {
  concreteType: string
  hmac: string // The hash message authentication code for the message.
  version: number // The version of the key used to generate the HMAC.
  expiresOn: string // The date-time when this token expires.
  createdOn: string // The date-time the token was generated.
  userId: string // The ID of the user account.
  validity: string // Used to check if this token is valid
}
