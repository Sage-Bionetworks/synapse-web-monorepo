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
  const [signedToken, setSignedToken] = useState<
    SignedTokenInterface | undefined
  >()
  const isFramed = useFramebuster()
  const { appId, appURL } = useSourceApp()

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

  const { acceptsTermsOfUse } = useApplicationSessionContext()

  return (
    <AppContextProvider
      appContext={{
        appId,
        redirectURL: appURL,
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
