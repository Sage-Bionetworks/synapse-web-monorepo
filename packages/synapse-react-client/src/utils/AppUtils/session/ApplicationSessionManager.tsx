import SynapseClient from '@/synapse-client'
import { TwoFactorAuthErrorResponse } from '@sage-bionetworks/synapse-client/generated/models/TwoFactorAuthErrorResponse'
import { PropsWithChildren } from 'react'
import { SynapseContextProvider, SynapseContextType } from '../../context'
import { ApplicationSessionContextProvider } from './ApplicationSessionContext'
import { AuthenticationGuard } from './AuthenticationGuard'
import { useApplicationSession } from './useApplicationSession'

export type ApplicationSessionManagerProps = PropsWithChildren<{
  /** The realm that an unauthenticated user should be signed in to. Defaults to "0", the public Synapse realm */
  defaultRealm?: string
  downloadCartPageUrl?: string
  /* If defined, specifies the allowable elapsed time in seconds since the last time the End-User was actively authenticated. If the elapsed time is greater than this value, the session will be cleared and the user will have to re-authenticate. */
  maxAge?: number
  /** Called if the user is not authenticated when the session is initialized. Can be used to trigger an error if authentication is expected. */
  onMissingExpectedAuthentication?: () => void
  /*
   * Callback invoked after the user has successfully signed in through SSO when the purpose of signing in is to disable 2FA on the account.
   * The twoFactorAuthSSOError and twoFaResetToken are passed in the callback and can be used to complete the 2FA reset process.
   * This only needs to be implemented if the app implements the workflow to disable 2FA (i.e. only if the app supports account management).
   */
  onTwoFactorAuthResetThroughSSO?: (
    twoFactorAuthSSOError: TwoFactorAuthErrorResponse,
    twoFaResetToken: string,
  ) => void
  appId?: SynapseContextType['appId']
  /* If true, redirects unauthenticated users to OneSage login after session initialization */
  requireAuthentication?: boolean
}>

/**
 * The ApplicationSessionManager will manage Synapse user session in an app. The goal is that any custom app should
 * just be able to add this component near the top of its component tree and have the full Synapse login lifecycle managed
 * while exposing minimal complexity to the app itself.
 *
 * Custom per-app behavior should be customized with generalizable props to this component.
 *
 * The session data can be accessed with useApplicationSessionContext.
 *
 * This component must be called within a react-router Router. ApplicationSessionManager also wraps all of its children
 * in a SynapseContextProvider.
 * @param props
 * @constructor
 */
export function ApplicationSessionManager(
  props: ApplicationSessionManagerProps,
) {
  const {
    children,
    downloadCartPageUrl,
    appId,
    requireAuthentication,
    ...hookOptions
  } = props

  const { sessionContext, token } = useApplicationSession(hookOptions)

  return (
    <ApplicationSessionContextProvider context={sessionContext}>
      <SynapseContextProvider
        synapseContext={{
          accessToken: token,
          isAuthenticated: sessionContext.isAuthenticated,
          isInExperimentalMode: SynapseClient.isInSynapseExperimentalMode(),
          utcTime: SynapseClient.getUseUtcTimeFromCookie(),
          downloadCartPageUrl,
          appId: appId,
        }}
      >
        {requireAuthentication ? (
          <AuthenticationGuard>{children}</AuthenticationGuard>
        ) : (
          children
        )}
      </SynapseContextProvider>
    </ApplicationSessionContextProvider>
  )
}

export default ApplicationSessionManager
