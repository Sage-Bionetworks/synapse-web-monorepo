import React, { useContext, useState } from 'react'

export type LogInDialogContextType = {
  setShowLoginDialog: (showLoginDialog: boolean) => void
  showLoginDialog: boolean
}

/*
 * Stores global state for the "Sign in" dialog in the portals
 */
const LogInDialogContext = React.createContext<
  LogInDialogContextType | undefined
>(undefined)

/*
 * Stores global state for the "Sign in" dialog in the portals
 */
export function LogInDialogContextProvider(
  props: React.PropsWithChildren<Record<never, never>>,
) {
  const { children } = props
  const [showLoginDialog, setShowLoginDialog] = useState(false)
  return (
    <LogInDialogContext.Provider
      value={{
        showLoginDialog,
        setShowLoginDialog,
      }}
    >
      {children}
    </LogInDialogContext.Provider>
  )
}

export const LogInDialogContextConsumer = LogInDialogContext.Consumer

export function useLogInDialogContext(): LogInDialogContextType {
  const context = useContext(LogInDialogContext)
  if (context === undefined) {
    throw new Error(
      'useLogInDialogContext must be used within an LogInDialogContextProvider',
    )
  }
  return context
}
