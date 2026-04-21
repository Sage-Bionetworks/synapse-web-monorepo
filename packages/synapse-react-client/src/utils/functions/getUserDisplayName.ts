import { UserGroupHeader } from '@sage-bionetworks/synapse-types'

const NONBREAKING_SPACE = '\u00A0'

export type UserDisplayName = {
  /** Full name (e.g. "Jane Doe") when showFullName is true and name fields are present; null otherwise */
  fullName: string | null
  /** @-prefixed username (e.g. "@jdoe") */
  userName: string
}

/**
 * Computes display name parts for a user given their UserGroupHeader.
 *
 * Display rules:
 * - fullName is non-null only when showFullName is true and at least one of
 *   firstName / lastName is present on the header.
 * - When both names are present they are joined with a non-breaking space.
 */
export function getUserDisplayName(
  userGroupHeader: Pick<UserGroupHeader, 'userName' | 'firstName' | 'lastName'>,
  showFullName = false,
): UserDisplayName {
  const firstName = userGroupHeader.firstName ?? ''
  const lastName = userGroupHeader.lastName ?? ''
  const hasName = !!(userGroupHeader.firstName || userGroupHeader.lastName)

  let fullName: string | null = null
  if (showFullName && hasName) {
    const separator =
      userGroupHeader.firstName && userGroupHeader.lastName
        ? NONBREAKING_SPACE
        : ''
    fullName = `${firstName}${separator}${lastName}`
  }

  return { fullName, userName: `@${userGroupHeader.userName}` }
}
