/**
 * Generates a cryptographically secure random CSRF token.
 *
 * @returns A cryptographically secure random token string
 */
export function generateCsrfToken(): string {
  const { crypto } = window
  if (crypto?.getRandomValues) {
    const bytes = new Uint8Array(32)
    crypto.getRandomValues(bytes)
    return Array.from(bytes, byte => byte.toString(16).padStart(2, '0')).join(
      '',
    )
  }

  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`
}
