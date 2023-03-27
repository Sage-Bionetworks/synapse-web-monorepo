import React, { useContext } from 'react'
import { TwoFactorAuthErrorResponse } from 'synapse-react-client/dist/utils/synapseTypes/ErrorResponse'

export type TwoFactorAuthSSOContextType = {
  /* Error object that is required to sign in with two-factor authentication. */
  twoFactorAuthErrorResponse?: TwoFactorAuthErrorResponse
}

/*
 * A twoFactorAuthErrorResponse is required to complete a sign in with 2FA. If signing in with SSO (e.g. Google), then
 *  the error object would be returned out-of-band and can be passed back into the Login component through context.
 */
const TwoFactorAuthSSOContext = React.createContext<
  TwoFactorAuthSSOContextType | undefined
>(undefined)

export type TwoFactorAuthSSOContextProviderProps = React.PropsWithChildren<{
  context: TwoFactorAuthSSOContextType
}>

export function TwoFactorAuthSSOContextProvider(
  props: TwoFactorAuthSSOContextProviderProps,
) {
  const { context, children } = props
  return (
    <TwoFactorAuthSSOContext.Provider value={context}>
      {children}
    </TwoFactorAuthSSOContext.Provider>
  )
}

export const TwoFactorAuthSSOContextConsumer = TwoFactorAuthSSOContext.Consumer

/*
 * A twoFactorAuthErrorResponse is required to complete a sign in with 2FA. If signing in with SSO (e.g. Google), then
 *  the error object would be returned out-of-band and can be passed back into the Login component through this context hook.
 */
export function useTwoFactorAuthSSOContext(): TwoFactorAuthSSOContextType {
  const context = useContext(TwoFactorAuthSSOContext)
  if (context === undefined) {
    throw new Error(
      'useTwoFactorAuthSSOContext must be used within a TwoFactorAuthSSOContextProvider',
    )
  }
  return context
}
