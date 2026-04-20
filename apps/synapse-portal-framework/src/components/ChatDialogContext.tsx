import { createContext, useContext } from 'react'

export type ChatDialogContextType = {
  openChat: (initialMessage: string) => void
  isChatAvailable: boolean
}

export const ChatDialogContext = createContext<
  ChatDialogContextType | undefined
>(undefined)

export function useChatDialogContext(): ChatDialogContextType | undefined {
  return useContext(ChatDialogContext)
}
