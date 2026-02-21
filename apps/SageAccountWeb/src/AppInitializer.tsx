import { SignedTokenInterface } from '@sage-bionetworks/synapse-types'
import { ReactNode, useEffect, useState } from 'react'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import { AppContextProvider } from './AppContext'
import { useSourceApp } from './components/useSourceApp'
import useMaybePromptToSignTermsOfService from './hooks/useMaybePromptToSignTermsOfService'
import { getSearchParam } from './URLUtils'
import { hex2ascii } from 'synapse-react-client/utils/functions/StringUtils'
import { useFramebuster } from 'synapse-react-client/utils/AppUtils/AppUtils'
import useMaybeForceEnable2FA from './hooks/useMaybeForceEnable2FA'
import useGoogleAnalytics from 'synapse-react-client/utils/analytics/useGoogleAnalytics'

function AppInitializer(props: { children?: ReactNode }) {
  const [signedToken, setSignedToken] = useState<
    SignedTokenInterface | undefined
  >()

  const isFramed = useFramebuster()
  const { appId, appURL } = useSourceApp()
  useGoogleAnalytics()

  useEffect(() => {
    // PORTALS-3138: override endpoints if staging or dev are inthe hostname
    const isStaging: boolean = window.location.hostname.includes('staging')
    const isDev: boolean = window.location.hostname.includes('dev')

    const stagingConfig = {
      REPO: SynapseConstants.SYNAPSE_BACKEND_STAGING_URL,
      PORTAL: 'https://staging.synapse.org/',
    }

    const devConfig = {
      REPO: SynapseConstants.SYNAPSE_BACKEND_DEV_URL,
      PORTAL: 'https://dev.synapse.org/',
    }

    if (isStaging || isDev) {
      if (!(window as any).SRC) {
        ;(window as any).SRC = {}
      }

      ;(window as any).SRC_OVERRIDE_ENDPOINT_CONFIG = isStaging
        ? stagingConfig
        : devConfig
    }
  }, [])
  useEffect(() => {
    const searchParamSignedToken = getSearchParam('signedToken')
    const localStorageSignedToken = localStorage.getItem('signedToken')
    if (searchParamSignedToken) {
      localStorage.setItem('signedToken', searchParamSignedToken)
      const searchParamToken = JSON.parse(
        hex2ascii(searchParamSignedToken),
      ) as SignedTokenInterface
      setSignedToken(searchParamToken)
    } else if (localStorageSignedToken) {
      const localStorageParamToken = JSON.parse(
        hex2ascii(localStorageSignedToken),
      ) as SignedTokenInterface
      setSignedToken(localStorageParamToken)
    }
  }, [])

  // Anywhere in the app, redirect the user to sign the ToS if required
  useMaybePromptToSignTermsOfService()
  // Anywhere in the app, redirect the user to enable 2FA if required
  useMaybeForceEnable2FA()

  return (
    <AppContextProvider
      appContext={{
        appId,
        redirectURL: appURL,
        signedToken,
      }}
    >
      {!isFramed && props.children}
    </AppContextProvider>
  )
}

export default AppInitializer
