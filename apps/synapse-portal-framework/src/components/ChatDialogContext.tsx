import { createContext, useContext } from 'react'

export type ChatDialogContextType = {
  openChat: (initialMessage: string) => void
}

export const ChatDialogContext = createContext<
  ChatDialogContextType | undefined
>(undefined)

export function useChatDialogContext(): ChatDialogContextType | undefined {
  return useContext(ChatDialogContext)
}
