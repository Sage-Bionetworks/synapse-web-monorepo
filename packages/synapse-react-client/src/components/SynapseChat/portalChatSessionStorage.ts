/**
 * Persists, across an OAuth login round-trip, the intent to reopen the portal chat dialog.
 *
 * When an anonymous user opens the chat and is redirected to log in, the full-page navigation
 * discards the dialog's open state. Storing the intent before the redirect lets the app reopen the
 * dialog when the user returns authenticated.
 *
 * localStorage (not sessionStorage) is used because the login flow returns to the portal origin in a
 * way that may not preserve the original tab's session (e.g. a fresh tab), and localStorage is shared
 * across tabs of the same origin. The intent is consumed once and carries a short TTL so it can only
 * reopen the chat as part of the immediate round-trip.
 */

export type PortalChatReopenIntent = {
  variant?: 'default' | 'curie'
  initialMessage?: string
}

const STORAGE_KEY = 'portalChat.reopenAfterLogin'
const MAX_AGE_MS = 60 * 60 * 1000 // 1 hour, generous enough to cover login (incl. 2FA)

type StoredIntent = PortalChatReopenIntent & { savedAt: number }

export function persistPortalChatReopenIntent(intent: PortalChatReopenIntent) {
  try {
    const stored: StoredIntent = { ...intent, savedAt: Date.now() }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stored))
  } catch {
    // Storage may be unavailable (e.g. private browsing); reopening is best-effort.
  }
}

/**
 * Returns the stored reopen intent and removes it, so a given intent is only ever acted on once.
 * Intents older than the TTL are discarded.
 */
export function consumePortalChatReopenIntent():
  | PortalChatReopenIntent
  | undefined {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) {
      return undefined
    }
    localStorage.removeItem(STORAGE_KEY)
    const stored = JSON.parse(raw) as StoredIntent
    if (
      typeof stored.savedAt !== 'number' ||
      Date.now() - stored.savedAt > MAX_AGE_MS
    ) {
      return undefined
    }
    return { variant: stored.variant, initialMessage: stored.initialMessage }
  } catch {
    return undefined
  }
}
