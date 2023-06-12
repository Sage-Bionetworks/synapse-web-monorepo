import { UserGroupHeader } from './UserGroupHeader'

export type TeamMember = {
  /** The id of the Team. */
  teamId: string
  /** JSON schema for UserHeader POJO. */
  member: UserGroupHeader
  /** True iff the user is an administrator in the Team. */
  isAdmin: boolean
}
