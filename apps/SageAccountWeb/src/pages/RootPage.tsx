import { useAppContext } from '@/AppContext'
import useMaybePromptToSignTermsOfService from '@/hooks/useMaybePromptToSignTermsOfService'
import { getSearchParam } from '@/URLUtils'
import { useEffect } from 'react'
import { useSynapseContext } from 'synapse-react-client/utils/context/SynapseContext'
import { processRedirectURLInOneSage } from 'synapse-react-client/utils/AppUtils'
import LoginPage from '@/pages/LoginPage'
import useMaybeForceEnable2FA from '@/hooks/useMaybeForceEnable2FA'

function LoggedInRedirector() {
  const { accessToken } = useSynapseContext()
  const appContext = useAppContext()

  const isCodeSearchParam = getSearchParam('code') !== undefined
  const isProviderSearchParam = getSearchParam('provider') !== undefined
  const isInSSOFlow = isCodeSearchParam && isProviderSearchParam

  const { mayPromptTermsOfUse } = useMaybePromptToSignTermsOfService()
  const { mayForceEnable2FA } = useMaybeForceEnable2FA()

  useEffect(() => {
    // User is on the root page (implied by route), logged in, not in the SSO Flow, and does not need to sign the ToS, and has enabled 2FA
    // then redirect!
    if (
      accessToken &&
      !isInSSOFlow &&
      !mayPromptTermsOfUse &&
      !mayForceEnable2FA
    ) {
      // take user back to page they came from in the source app, if stored in a cookie
      const isProcessed = processRedirectURLInOneSage()
      if (!isProcessed && appContext?.redirectURL) {
        // if not in the cookie, take them to the app redirect URL
        window.location.replace(appContext?.redirectURL)
      }
    }
  }, [
    accessToken,
    appContext?.redirectURL,
    isInSSOFlow,
    mayPromptTermsOfUse,
    mayForceEnable2FA,
  ])
  return <></>
}

function RootPage() {
  const { isAuthenticated } = useSynapseContext()
  if (isAuthenticated) {
    return <LoggedInRedirector />
  }
  return <LoginPage returnToUrl={'/'} />
}

export default RootPage
