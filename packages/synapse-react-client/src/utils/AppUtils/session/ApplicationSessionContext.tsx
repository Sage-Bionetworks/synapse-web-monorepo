import { createContext, PropsWithChildren, useContext } from 'react'
import { TwoFactorAuthErrorResponse } from '@sage-bionetworks/synapse-client/generated/models/TwoFactorAuthErrorResponse'
import {
  TermsOfServiceStatus,
  TwoFactorAuthStatus,
} from '@sage-bionetworks/synapse-types'

export type ApplicationSessionContextType = {
  /* The Synapse access token. */
  token?: string
  /** The realm ID of the current user. */
  realmId?: string
  /** The user ID of the current user. */
  userId?: string
  /* Whether the current user is authenticated (as opposed to anonymous). */
  isAuthenticated: boolean
  /* Whether the current user accepts the terms of use. May be undefined while status is fetched. Will always be undefined for the anonymous user. */
  termsOfServiceStatus?: TermsOfServiceStatus
  /* Whether 2FA has been enabled on the user account */
  twoFactorStatus?: TwoFactorAuthStatus
  /* Whether the session has been initialized */
  hasInitializedSession: boolean
  /* Updates this context based on the current token cookie. Should typically be called when the user has signed in or signed out. */
  refreshSession: () => Promise<void>
  /* Error object encountered when a Synapse user signs in with SSO and has 2FA enabled. A code within this error object is required to complete sign-in. */
  twoFactorAuthSSOErrorResponse?: TwoFactorAuthErrorResponse
  /**
   * Signs the user out and updates this context. After clearing the session, the page will be reloaded.
   * @param onBeforeReload Optionally synchronous callback that will be executed just before reloading.
   */
  clearSession: (onBeforeReload?: () => void) => Promise<void>
  /** Whether detection of a single-sign-on (SSO) event is pending.
   * For example, detecting an authorization code passed by an external identity provider via the user's browser.
   * A reload may be forced before this completes.
   */
  isLoadingSSO: boolean
}

const ApplicationSessionContext = createContext<
  ApplicationSessionContextType | undefined
>(undefined)

export type ApplicationSessionContextProviderProps = PropsWithChildren<{
  context: ApplicationSessionContextType
}>

export function ApplicationSessionContextProvider(
  props: ApplicationSessionContextProviderProps,
) {
  const { context, children } = props
  return (
    <ApplicationSessionContext.Provider value={context}>
      {children}
    </ApplicationSessionContext.Provider>
  )
}

export const ApplicationSessionContextConsumer =
  ApplicationSessionContext.Consumer

/*
 * Retrieves the context provided by the ApplicationSessionContextProvider. The context is often created by the
 * ApplicationSessionManager
 */
export function useApplicationSessionContext(): ApplicationSessionContextType {
  const context = useContext(ApplicationSessionContext)
  if (context === undefined) {
    throw new Error(
      'useApplicationSessionContext must be used within an ApplicationSessionContextProvider',
    )
  }
  return context
}
