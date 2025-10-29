import { useMemo } from 'react'

function generateCsrfToken(): string {
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

/**
 * Hook that generates a stable CSRF token for the lifetime of the component.
 * The token is memoized and will not change across re-renders.
 *
 * @returns A cryptographically secure random token string
 */
export function useCsrfToken(): string {
  const csrfToken = useMemo(() => generateCsrfToken(), [])
  return csrfToken
}
