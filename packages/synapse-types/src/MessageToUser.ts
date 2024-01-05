// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/message/MessageToUser.html
export type MessageToUser = {
  id: string //	The unique identifier of the message or comment
  createdBy: string //	The unique identifier of the sender of this message
  fileHandleId: string //	The S3 file handle storing the body of this message. Note: The file's mime type should be 'text/plain' or 'text/html'. If no character encoding is specified, then UTF-8 is assumed.
  createdOn: string // When this message was created
  recipients: string[] //	The unique identifiers of the intended recipients of a message
  subject: string //	Topic of this message. Optional
  inReplyTo: string //	The unique identifier of the message being replied to. Can be null
  inReplyToRoot: string //	The unique identifier of the root message being replied to
  notificationUnsubscribeEndpoint: string //	the portal prefix for one-click email unsubscription. A signed, serialized token is appended to create the complete URL. If omitted, the default endpoint will be used.
  userProfileSettingEndpoint: string //	the portal link to user profile setting page. If omitted, the default endpoint will be used.
  withUnsubscribeLink: boolean //	should the unsubscribe link be included in the email?
  withProfileSettingLink: boolean //	should the user profile setting link be included in the email?
  isNotificationMessage: boolean // A notification message is sent from a noreply email address, delivery failures are not sent back to the sender
  to: string // The email addresses in the 'to' field of the email message
  cc: string //	The email addresses in the 'cc' field of the email message
  bcc: string //	The email addresses in the 'bcc' field of the email message
}
