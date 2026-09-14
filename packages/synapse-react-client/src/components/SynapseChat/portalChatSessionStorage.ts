/**
 * Persists, across an OAuth login round-trip, the intent to reopen the portal chat dialog.
 *
 * When an anonymous user opens the chat and is redirected to log in, the full-page navigation
 * discards the dialog's open state. Storing the intent before the redirect lets the app reopen the
 * dialog when the user returns authenticated. sessionStorage is used so the intent is scoped to the
 * browser tab and clears itself when the tab closes.
 */

export type PortalChatReopenIntent = {
  variant?: 'default' | 'curie'
  initialMessage?: string
}

const STORAGE_KEY = 'portalChat.reopenAfterLogin'

export function persistPortalChatReopenIntent(intent: PortalChatReopenIntent) {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(intent))
  } catch {
    // Storage may be unavailable (e.g. private browsing); reopening is best-effort.
  }
}

/**
 * Returns the stored reopen intent and removes it, so a given intent is only ever acted on once.
 */
export function consumePortalChatReopenIntent():
  | PortalChatReopenIntent
  | undefined {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY)
    if (!raw) {
      return undefined
    }
    sessionStorage.removeItem(STORAGE_KEY)
    return JSON.parse(raw) as PortalChatReopenIntent
  } catch {
    return undefined
  }
}
