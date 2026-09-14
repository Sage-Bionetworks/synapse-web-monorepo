import { useEffect, useRef } from 'react'
import { useApplicationSessionContext } from 'synapse-react-client'
import { consumePortalChatReopenIntent } from 'synapse-react-client/components/SynapseChat/portalChatSessionStorage'
import { useChatDialogContext } from './ChatDialogContext'

/**
 * Reopens the portal chat dialog after an anonymous user completes the login round-trip.
 *
 * The reopen intent is stored just before the login redirect (see SynapsePortalChatDialog); here it
 * is consumed once the session has initialized, and the chat is reopened only if the user returned
 * authenticated (otherwise reopening would immediately redirect again).
 */
export function ChatReopenAfterLogin() {
  const { hasInitializedSession, isAuthenticated } =
    useApplicationSessionContext()
  const chatDialogContext = useChatDialogContext()
  const hasHandledRef = useRef(false)

  useEffect(() => {
    if (!hasInitializedSession || hasHandledRef.current) {
      return
    }
    hasHandledRef.current = true
    const intent = consumePortalChatReopenIntent()
    if (intent && isAuthenticated && chatDialogContext?.isChatAvailable) {
      chatDialogContext.openChat(intent.initialMessage ?? '', {
        variant: intent.variant,
      })
    }
  }, [hasInitializedSession, isAuthenticated, chatDialogContext])

  return null
}

export default ChatReopenAfterLogin
