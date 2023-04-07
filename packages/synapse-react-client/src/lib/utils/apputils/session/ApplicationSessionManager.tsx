import React, { useCallback, useEffect, useState } from 'react'
import { SynapseClient } from '../../index'
import useDetectSSOCode from '../../hooks/useDetectSSOCode'
import { redirectAfterSSO } from '../../AppUtils'
import { useHistory } from 'react-router-dom'
import { TwoFactorAuthErrorResponse } from '../../synapseTypes/ErrorResponse'
import { ApplicationSessionContextProvider } from './ApplicationSessionContext'
import { SynapseContextProvider } from '../../SynapseContext'
import dayjs from 'dayjs'

export type ApplicationSessionManagerProps = React.PropsWithChildren<{
  downloadCartPageUrl?: string
  /* If defined, specifies the allowable elapsed time in seconds since the last time the End-User was actively authenticated. If the elapsed time is greater than this value, the session will be cleared and the user will have to re-authenticate. */
  maxAge?: number
  /* Called when the session is reset, i.e. the user has signed out.*/
  onResetSessionComplete?: () => void
  onError?: (e: unknown) => void
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
export default function ApplicationSessionManager(
  props: ApplicationSessionManagerProps,
) {
  const {
    children,
    downloadCartPageUrl,
    onResetSessionComplete,
    maxAge,
    onError,
  } = props
  const history = useHistory()

  const [token, setToken] = useState<string | undefined>(undefined)
  const [acceptsTermsOfUse, setAcceptsTermsOfUse] = useState<
    boolean | undefined
  >(undefined)
  const [hasInitializedSession, setHasInitializedSession] = useState(false)
  const [twoFactorAuthSSOError, setTwoFactorAuthSSOError] = useState<
    TwoFactorAuthErrorResponse | undefined
  >(undefined)
  const initAnonymousUserState = useCallback(() => {
    SynapseClient.signOut().then(() => {
      // reset token
      setToken(undefined)
      setAcceptsTermsOfUse(undefined)
      setHasInitializedSession(true)
    })
  }, [])

  const refreshSession = useCallback(async () => {
    setTwoFactorAuthSSOError(undefined)
    let token
    try {
      token = await SynapseClient.getAccessTokenFromCookie()
      if (!token) {
        initAnonymousUserState()
        return
      }
    } catch (e) {
      console.error('Unable to get the access token: ', e)
      if (onError) {
        onError(e)
      }
      initAnonymousUserState()
      return
    }
    if (maxAge) {
      // SWC-5597: if max_age is defined, then return if the user last authenticated more than max_age seconds ago
      const authenticatedOnResponse = await SynapseClient.getAuthenticatedOn(
        token,
      )
      const lastAuthenticatedOn = dayjs.utc(
        authenticatedOnResponse.authenticatedOn,
      )
      const now = dayjs.utc()
      if (now.diff(lastAuthenticatedOn, 'seconds') > maxAge) {
        // Don't set the token so the user must re-authenticate to use this app
        setHasInitializedSession(true)
        return
      }
    }
    setToken(token)
    setHasInitializedSession(true)

    try {
      // get the user profile just to check if the terms of use have been agreed to
      // an error will be thrown if the terms of use have not been signed.
      await SynapseClient.getUserProfile(token)
      setAcceptsTermsOfUse(true)
    } catch (e) {
      if (e && e.reason == 'Terms of use have not been signed.') {
        setAcceptsTermsOfUse(false)
      } else {
        console.error('Error on refreshSession: ', e)
        // intentionally calling sign out because the token could be stale so we want
        // the stored session to be cleared out.
        SynapseClient.signOut().then(() => {
          // PORTALS-2293: if the token was invalid (caused an error), reload the app to ensure all children
          // are loading as the anonymous user
          window.location.reload()
        })
      }
    }
  }, [initAnonymousUserState, maxAge, onError])

  const clearSession = useCallback(async () => {
    await SynapseClient.signOut()
    await refreshSession()
    if (onResetSessionComplete) {
      onResetSessionComplete()
    }
  }, [refreshSession, onResetSessionComplete])

  /** Call refreshSession on mount */
  useEffect(() => {
    refreshSession()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const { isLoading: isLoadingSSO } = useDetectSSOCode({
    onSignInComplete: () => {
      redirectAfterSSO(history)
      refreshSession()
    },
    onTwoFactorAuthRequired: twoFactorAuthError => {
      setTwoFactorAuthSSOError(twoFactorAuthError)
    },
  })

  return (
    <ApplicationSessionContextProvider
      context={{
        token,
        acceptsTermsOfUse,
        refreshSession,
        clearSession,
        isLoadingSSO,
        twoFactorAuthSSOErrorResponse: twoFactorAuthSSOError,
        hasInitializedSession,
      }}
    >
      <SynapseContextProvider
        synapseContext={{
          accessToken: token,
          isInExperimentalMode: SynapseClient.isInSynapseExperimentalMode(),
          utcTime: SynapseClient.getUseUtcTimeFromCookie(),
          downloadCartPageUrl,
        }}
      >
        {children}
      </SynapseContextProvider>
    </ApplicationSessionContextProvider>
  )
}
