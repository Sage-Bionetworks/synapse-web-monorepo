import { UserPreference } from './UserPreference'

export type Settings = {
  sendEmailNotifications: boolean // Should the user receive email notifications? Default true.
  markEmailedMessagesAsRead: boolean // Should messages that are emailed to the user be marked as READ in Synapse? Default false.
}

// Information about the notification email of the user, including its quarantined status if the email address is currently in quarantine
export type NotificationEmail = {
  email: string
  quarantineStatus?: {
    reason: 'PERMANENT_BOUNCE' | 'TRANSIENT_BOUNCE' | 'COMPLAINT' | 'OTHER'
    reasonDetails: string
    expiration: string
  }
}

export type UserProfile = {
  ownerId: string // A foreign key to the ID of the 'principal' object for the user
  uri?: string // The Uniform Resource Identifier (URI) for this entity
  etag?: string // Synapse employs an Optimistic Concurrency Control (OCC) scheme to handle concurrent updates Since the E-Tag changes every time an entity is updated it is used to detect when a client's current representation of an entity is out-of-date
  firstName: string // This person's given name (forename)
  lastName: string // This person's family name (surname)
  email?: string // This is deprecated as users can have more than one email See emails
  emails?: string[] // The list of user email addresses registered to this user
  openIds?: string[] // The list of OpenIds bound to this user's account
  userName: string // A name chosen by the user that uniquely identifies them
  displayName?: string // This field is deprecated and will always be null
  rStudioUrl?: string // URL for RStudio server assigned to the user
  summary?: string // A summary description about this person
  position?: string // This person's current position title
  location?: string // This person's location
  industry?: string // The industry/discipline that this person is associated with
  company?: string // This person's current affiliation
  profilePicureFileHandleId?: string // The FileHandleid of the user's profile picture
  url?: string // A link to more information about this person
  teamName?: string // This person's default team name
  notificationSettings?: Settings // Settings Contains a user's notification settings
  preferences?: UserPreference[]
  createdOn?: string // The date this profile was created
  twoFactorAuthEnabled?: boolean // Flag that indicates if the user has two factor authentication enabled.
  clientPreSignedURL?: string // NOTE - this is an added property, it does not come from the backend for free
}
