import { createContext, useContext } from 'react'

export type ChatDialogVariant = 'default' | 'curie'

export type OpenChatOptions = {
  variant?: ChatDialogVariant
}

export type ChatDialogContextType = {
  openChat: (initialMessage: string, options?: OpenChatOptions) => void
  isChatAvailable: boolean
}

export const ChatDialogContext = createContext<
  ChatDialogContextType | undefined
>(undefined)

export function useChatDialogContext(): ChatDialogContextType | undefined {
  return useContext(ChatDialogContext)
}
