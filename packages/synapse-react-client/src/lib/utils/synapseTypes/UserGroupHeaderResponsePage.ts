import { UserGroupHeader } from './UserGroupHeader'

export type UserGroupHeaderResponsePage = {
  children: UserGroupHeader[] //	ARRAY<UserGroupHeader>	The list of children that match the requested concept.
  prefixFilter?: string //	STRING	The prefix filter used to generate this result.
  totalNumberOfResults?: number //	INTEGER	This field is deprecated.
}
