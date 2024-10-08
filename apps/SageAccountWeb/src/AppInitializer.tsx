import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
import { getSearchParam } from './URLUtils'
import {
  SignedTokenInterface,
  TermsOfServiceState,
} from '@sage-bionetworks/synapse-types'
import {
  SynapseUtilityFunctions,
  useApplicationSessionContext,
  useFramebuster,
} from 'synapse-react-client'
import { AppContextProvider } from './AppContext'
import { useSourceApp } from './components/useSourceApp'

function AppInitializer(props: { children?: React.ReactNode }) {
  const [signedToken, setSignedToken] = useState<
    SignedTokenInterface | undefined
  >()
  const [skippedSigningUpdatedToS, setSkippedSigningUpdatedToS] = useState<
    boolean | undefined
  >()
  const isFramed = useFramebuster()
  const { appId, appURL } = useSourceApp()

  useEffect(() => {
    // PORTALS-3138: override endpoints if staging or dev are inthe hostname
    const isStaging: boolean = window.location.hostname.includes('staging')
    const isDev: boolean = window.location.hostname.includes('dev')

    const stagingConfig = {
      REPO: 'https://repo-staging.prod.sagebase.org',
      PORTAL: 'https://staging.synapse.org/',
    }

    const devConfig = {
      REPO: 'https://repo-dev.dev.sagebase.org',
      PORTAL: 'https://portal-dev.dev.sagebase.org/',
    }

    if (isStaging || isDev) {
      if (!(window as any).SRC) {
        ;(window as any).SRC = {}
      }

      ;(window as any).SRC.OVERRIDE_ENDPOINT_CONFIG = isStaging
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
        SynapseUtilityFunctions.hex2ascii(searchParamSignedToken),
      ) as SignedTokenInterface
      setSignedToken(searchParamToken)
    } else if (localStorageSignedToken) {
      const localStorageParamToken = JSON.parse(
        SynapseUtilityFunctions.hex2ascii(localStorageSignedToken),
      ) as SignedTokenInterface
      setSignedToken(localStorageParamToken)
    }

    const searchParamSkippedToS = getSearchParam('skippedSigningToS')
    const sessionStorageSkippedToS = sessionStorage.getItem('skippedSigningToS')
    if (searchParamSkippedToS) {
      sessionStorage.setItem('skippedSigningToS', searchParamSkippedToS)
      setSkippedSigningUpdatedToS(searchParamSkippedToS == 'true')
    } else if (sessionStorageSkippedToS) {
      setSkippedSigningUpdatedToS(sessionStorageSkippedToS == 'true')
    } else {
      setSkippedSigningUpdatedToS(false)
    }
  }, [])

  // Detect if terms of service are up to date.  If not, route to either the Pledge or a page where the user can sign the updated terms.
  // Note, if the status is "MUST_AGREE_SOON", then the new page will offer a "Skip" button
  const { termsOfServiceStatus } = useApplicationSessionContext()
  let redirectRoute = undefined
  if (termsOfServiceStatus) {
    if (
      termsOfServiceStatus.usersCurrentTermsOfServiceState !=
        TermsOfServiceState.UP_TO_DATE &&
      skippedSigningUpdatedToS === false
    ) {
      if (termsOfServiceStatus.lastAgreementDate == undefined) {
        redirectRoute = '/authenticated/signTermsOfUse'
      } else {
        redirectRoute = '/authenticated/signUpdatedTermsOfUse'
      }
    }
  }
  return (
    <AppContextProvider
      appContext={{
        appId,
        redirectURL: appURL,
        signedToken,
      }}
    >
      {!!redirectRoute && location.pathname != redirectRoute && (
        <Redirect to={redirectRoute} />
      )}
      {!isFramed && props.children}
    </AppContextProvider>
  )
}

export default AppInitializer
