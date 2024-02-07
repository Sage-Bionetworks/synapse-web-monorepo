import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
import { getSearchParam } from './URLUtils'
import { SignedTokenInterface } from '@sage-bionetworks/synapse-types'
import {
  SynapseUtilityFunctions,
  useApplicationSessionContext,
  useFramebuster,
} from 'synapse-react-client'
import { AppContextProvider } from './AppContext'
import { useSourceApp } from './components/useSourceApp'

function AppInitializer(props: { children?: React.ReactNode }) {
  const [redirectURL, setRedirectURL] = useState<string>()

  const [signedToken, setSignedToken] = useState<
    SignedTokenInterface | undefined
  >()
  const isFramed = useFramebuster()
  const { appId } = useSourceApp()

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
  }, [])

  useEffect(() => {
    const searchParamRedirectURL = getSearchParam('redirectURL')
    const localStorageRedirectURL = localStorage.getItem('sourceAppRedirectURL')
    if (searchParamRedirectURL) {
      const hostName = new URL(searchParamRedirectURL).hostname
      if (hostName.toLowerCase().endsWith('.synapse.org')) {
        localStorage.setItem('sourceAppRedirectURL', searchParamRedirectURL)
        setRedirectURL(searchParamRedirectURL)
      } else {
        console.error(
          `Invalid redirectURL (${searchParamRedirectURL}) - Must be a subdomain of .synapse.org`,
        )
      }
    } else if (localStorageRedirectURL) {
      setRedirectURL(localStorageRedirectURL)
    } else {
      // fallback to Synapse.org
      setRedirectURL('https://www.synapse.org/#!Profile:v/projects/all')
    }
  }, [appId])

  const { acceptsTermsOfUse } = useApplicationSessionContext()

  return (
    <AppContextProvider
      appContext={{
        appId,
        redirectURL,
        signedToken,
      }}
    >
      {acceptsTermsOfUse === false &&
        location.pathname != '/authenticated/signTermsOfUse' && (
          <Redirect to="/authenticated/signTermsOfUse" />
        )}
      {!isFramed && props.children}
    </AppContextProvider>
  )
}

export default AppInitializer
