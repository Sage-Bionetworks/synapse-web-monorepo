import React, { useContext } from 'react'
import { TwoFactorAuthErrorResponse } from 'synapse-react-client/dist/utils/synapseTypes/ErrorResponse'

type OAuthAppContextType = {
  accessToken: string | undefined
  setAccessToken: (accessToken: string | undefined) => void
  twoFactorAuthErrorResponse?: TwoFactorAuthErrorResponse
}
export const OAuthAppContext = React.createContext<OAuthAppContextType>({
  accessToken: undefined,
  setAccessToken: () => {
    console.error('OAuthAppContext not initialized')
  },
  twoFactorAuthErrorResponse: undefined,
})

export function useOAuthAppContext(): OAuthAppContextType {
  const context = useContext(OAuthAppContext)
  if (context === undefined) {
    throw new Error(
      'useOAuthAppContext must be used within a OAuthAppContextProvider',
    )
  }
  return context
}
