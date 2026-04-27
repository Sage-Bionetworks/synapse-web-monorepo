const NONBREAKING_SPACE = '\u00A0'

export type GetPrincipalDisplayNameOptions = {
  /**
   * When true and the user has firstName/lastName fields, the full name is included
   * in the result. Default false.
   */
  showFullName?: boolean
  /**
   * When showFullName is true and a full name is available, append the @username
   * in parentheses (e.g. "Jane Doe (@jdoe)"). Default true.
   * Set to false when username context would be redundant (e.g. email body text).
   */
  showUsername?: boolean
}

/**
 * Returns a display string for any Synapse principal (user or team).
 *
 * - **Team** (`isIndividual === false`): returns the team name directly (no `@` prefix).
 * - **User, default**: returns `"@username"`.
 * - **User, `showFullName: true`** and name fields present:
 *   - `showUsername: true` (default): `"First\u00A0Last (@username)"`
 *   - `showUsername: false`: `"First\u00A0Last"`
 * - Falls back to `"@username"` when `showFullName` is true but no name fields exist.
 */
export function getPrincipalDisplayName(
  header: {
    userName: string
    firstName?: string | null
    lastName?: string | null
    isIndividual?: boolean
  },
  options: GetPrincipalDisplayNameOptions = {},
): string {
  const { showFullName = false, showUsername = true } = options

  if (header.isIndividual === false) {
    return header.userName
  }

  const hasName = !!(header.firstName || header.lastName)

  if (showFullName && hasName) {
    const firstName = header.firstName ?? ''
    const lastName = header.lastName ?? ''
    const separator =
      header.firstName && header.lastName ? NONBREAKING_SPACE : ''
    const fullName = `${firstName}${separator}${lastName}`

    return showUsername
      ? `${fullName}${NONBREAKING_SPACE}(@${header.userName})`
      : fullName
  }

  return `@${header.userName}`
}
