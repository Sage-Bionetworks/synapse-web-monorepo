import { createContext, PropsWithChildren, useContext } from 'react'
import { useReopenChatAfterLogin } from './useReopenChatAfterLogin'

export type ChatDialogVariant = 'default' | 'curie'

export type OpenChatOptions = {
  variant?: ChatDialogVariant
}

export type ChatDialogContextType = {
  openChat: (initialMessage: string, options?: OpenChatOptions) => void
  isChatAvailable: boolean
}

// Do not consume this raw context directly; use ChatDialogContextProvider (which also wires up
// side effects like post-login chat reopen). Exported only so tests can provide a value in isolation.
export const ChatDialogContext = createContext<
  ChatDialogContextType | undefined
>(undefined)

/**
 * Provides the chat dialog context and wires up behavior that needs to run alongside it, such as
 * reopening the chat after a login round-trip.
 */
export function ChatDialogContextProvider({
  value,
  children,
}: PropsWithChildren<{ value: ChatDialogContextType }>) {
  useReopenChatAfterLogin(value.openChat, value.isChatAvailable)
  return (
    <ChatDialogContext.Provider value={value}>
      {children}
    </ChatDialogContext.Provider>
  )
}

export function useChatDialogContext(): ChatDialogContextType | undefined {
  return useContext(ChatDialogContext)
}
