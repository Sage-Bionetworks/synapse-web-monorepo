// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/auth/LoginRequest.html
// Used to login via username, password, and previous authentication receipt.
export type LoginRequest = {
  username: string // The user's username
  password: string // The user's password
  authenticationReceipt: string // Optional, but highly recommended. The most recent authentication receipt given to the last success login from this machine, using this client. Having this allows you to bypass throttling on consecutive authentication attempts with a wrong password.
}
