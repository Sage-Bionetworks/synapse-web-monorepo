import { MessageToUser } from './MessageToUser'

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/message/MessageStatusType.html
type MessageStatusType = 'READ' | 'UNREAD' | 'ARCHIVED'

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/message/MessageStatus.html
type MessageStatus = {
  messageId: string //	The unique identifier of the message.
  recipientId: string // The unique identifier of the recipient of this message.
  status: MessageStatusType // The status of the message, from the RECIPIENT'S standpoint
}

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/message/MessageBundle.html
export type MessageBundle = {
  message: MessageToUser // JSON schema for a message to another user
  status: MessageStatus // JSON schema for message status from the RECIPIENT'S standpoint
}
