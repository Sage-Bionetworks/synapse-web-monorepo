import { useEffect, useRef } from 'react'
import { useApplicationSessionContext } from 'synapse-react-client'
import { consumePortalChatReopenIntent } from 'synapse-react-client/components/SynapseChat/portalChatSessionStorage'
import type { ChatDialogContextType } from './ChatDialogContext'

/**
 * Reopens the portal chat dialog after an anonymous user completes the login round-trip.
 *
 * The reopen intent is stored just before the login redirect (see SynapsePortalChatDialog); here it
 * is consumed once the session has initialized, and the chat is reopened only if the user returned
 * authenticated (otherwise reopening would immediately redirect again).
 */
export function useReopenChatAfterLogin(
  openChat: ChatDialogContextType['openChat'],
  isChatAvailable: boolean,
) {
  const { hasInitializedSession, isAuthenticated } =
    useApplicationSessionContext()
  const hasHandledRef = useRef(false)

  useEffect(() => {
    if (!hasInitializedSession || hasHandledRef.current) {
      return
    }
    hasHandledRef.current = true
    const intent = consumePortalChatReopenIntent()
    if (intent && isAuthenticated && isChatAvailable) {
      openChat(intent.initialMessage ?? '', { variant: intent.variant })
    }
  }, [hasInitializedSession, isAuthenticated, isChatAvailable, openChat])
}
