import { UserProfile } from '@sage-bionetworks/synapse-types'

function getUserName(userName: string, inParens: boolean): string {
  if (userName != null) {
    if (inParens) {
      // if the name is filled in, then put the username in parens
      return ` (${userName})`
    }
    return userName
  }

  return ''
}

export function getDisplayName(
  firstName: string,
  lastName: string,
  userName: string,
): string {
  let displayName = ''
  let hasDisplayName = false
  if (firstName != null && firstName.length > 0) {
    displayName += firstName.trim()
    hasDisplayName = true
  }
  if (lastName != null && lastName.length > 0) {
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
