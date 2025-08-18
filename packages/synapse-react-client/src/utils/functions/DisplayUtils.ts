import { UserProfile } from '@sage-bionetworks/synapse-types'

function getUserName(userName?: string, inParens?: boolean): string {
  if (userName) {
    if (inParens) {
      // if the name is filled in, then put the username in parens
      return ` (${userName})`
    }
    return userName
  }

  return ''
}

export function getDisplayName(
  firstName: string | null,
  lastName: string | null,
  userName?: string,
): string {
  let displayName = ''
  let hasDisplayName = false
  if (firstName) {
    displayName += firstName.trim()
    hasDisplayName = true
  }
  if (lastName) {
    displayName += ' ' + lastName.trim()
    hasDisplayName = true
  }

  displayName += getUserName(userName, hasDisplayName)

  return displayName
}

export function getDisplayNameFromProfile(userProfile: UserProfile) {
  return getDisplayName(
    userProfile.firstName,
    userProfile.lastName,
    userProfile.userName,
  )
}
