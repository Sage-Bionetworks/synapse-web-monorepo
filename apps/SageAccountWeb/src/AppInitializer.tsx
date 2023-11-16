import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
import { getSearchParam } from './URLUtils'
import { SignedTokenInterface } from '@sage-bionetworks/synapse-types'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { sageAccountWebThemeOverrides } from './style/theme'
import { Theme } from '@mui/material'
import {
  useLastLoginInfoState,
  SynapseTheme,
  SynapseUtilityFunctions,
  useApplicationSessionContext,
} from 'synapse-react-client'
import { AppContextProvider } from './AppContext'
import { useSourceApp } from './components/useSourceApp'

function AppInitializer(props: { children?: React.ReactNode }) {
  const [isFramed, setIsFramed] = useState(false)
  const [appId, setAppId] = useState<string>()
  const [redirectURL, setRedirectURL] = useState<string>()
  const [theme, setTheme] = useState<Theme>(
    createTheme(
      SynapseTheme.defaultMuiThemeOptions,
      sageAccountWebThemeOverrides,
    ),
  )
  const [signedToken, setSignedToken] = useState<
    SignedTokenInterface | undefined
  >()
  const { currentSourceAppNameState } = useLastLoginInfoState()
  useEffect(() => {
    // SWC-6294: on mount, detect and attempt a client-side framebuster (mitigation only, easily bypassed by attacker)
    if (window.top && window.top !== window) {
      // If not sandboxed, make sure not to show any portal content (in case they block window unload via onbeforeunload)
      setIsFramed(true)
      // If sandboxed, this call will cause an uncaught js exception and portal will not load.
      window.top.location = window.location
    }
  }, [])

  useEffect(() => {
    const searchParamAppId = getSearchParam('appId')
    const localStorageAppId = localStorage.getItem('sourceAppId')
    if (searchParamAppId) {
      localStorage.setItem('sourceAppId', searchParamAppId)
      setAppId(searchParamAppId)
    } else if (localStorageAppId) {
      setAppId(localStorageAppId)
    } else {
      // fallback to Sage Bionetworks
      localStorage.setItem('sourceAppId', 'SAGE')
      setAppId('SAGE')
    }
  }, [])

  const sourceApp = useSourceApp(appId)

  useEffect(() => {
    if (sourceApp?.friendlyName) {
      currentSourceAppNameState.set(sourceApp.friendlyName)
    }
  }, [currentSourceAppNameState, sourceApp?.friendlyName])

  useEffect(() => {
    if (sourceApp?.palette) {
      setTheme(
        createTheme(
          SynapseTheme.defaultMuiThemeOptions,
          sageAccountWebThemeOverrides,
          {
            palette: sourceApp.palette,
          },
        ),
      )
    }
  }, [sourceApp?.appId])

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
      <ThemeProvider theme={theme}>
        {acceptsTermsOfUse === false &&
          location.pathname != '/authenticated/signTermsOfUse' && (
            <Redirect to="/authenticated/signTermsOfUse" />
          )}
        {!isFramed && props.children}
      </ThemeProvider>
    </AppContextProvider>
  )
}

export default AppInitializer
