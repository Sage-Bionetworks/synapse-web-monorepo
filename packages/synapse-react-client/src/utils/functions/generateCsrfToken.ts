/**
 * Generates a cryptographically secure random CSRF token.
 *
 * @returns A cryptographically secure random token string
 */
export function generateCsrfToken(): string {
  // Use globalThis.crypto which works in both browsers and Node.js 19+.
  // Avoids a direct `window` reference so this function is safe to call during SSR.
  const crypto =
    typeof globalThis !== 'undefined' ? globalThis.crypto : undefined
  if (crypto?.getRandomValues) {
    const bytes = new Uint8Array(32)
    crypto.getRandomValues(bytes)
    return Array.from(bytes, byte => byte.toString(16).padStart(2, '0')).join(
      '',
    )
  }

  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`
}
