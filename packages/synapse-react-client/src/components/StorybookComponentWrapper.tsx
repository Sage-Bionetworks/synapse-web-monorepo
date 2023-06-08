import React, { useEffect, useMemo } from 'react'
import { MemoryRouter } from 'react-router-dom'
import { SynapseContextType } from '../utils/context/SynapseContext'
import { QueryClient } from 'react-query'
import SynapseClient from '../synapse-client'
import { SynapseToastContainer } from './ToastMessage/ToastMessage'
import { ReactQueryDevtools } from 'react-query/devtools'
import dayjs from 'dayjs'
import {
  getAccessTokenFromCookie,
  getAuthenticatedOn,
  getUserProfile,
  signOut,
} from '../synapse-client/SynapseClient'
import { SynapseClientError } from '../utils/SynapseClientError'
import { STACK_MAP, SynapseStack } from '../utils/functions/getEndpoint'
import defaultMuiThemeOptions from '../theme/DefaultTheme'
import {
  adKnowledgePortalPalette,
  arkPortalPalette,
  bsmnPortalPalette,
  cancerComplexityPortalPalette,
  crcResearcherPortalPalette,
  digitalHealthPortalPalette,
  elPortalPalette,
  mtbPalette,
  nfPortalPalette,
  palette,
  psychEncodePortalPalette,
  sageBionetworksPalette,
  stopAdPortalPalette,
} from '../theme/palette/Palettes'
import useDetectSSOCode from '../utils/hooks/useDetectSSOCode'
import {
  defaultQueryClientConfig,
  FullContextProvider,
} from '../utils/context/FullContextProvider'
import { createTheme } from '@mui/material/styles'

export async function sessionChangeHandler() {
  let accessToken: string | undefined = await getAccessTokenFromCookie()
  let profile
  try {
    profile = await getUserProfile(accessToken)
  } catch (err) {
    if (err instanceof SynapseClientError && err.status === 401) {
      console.error(
        'Encountered error fetching profile: ',
        err,
        'Signing out...',
      )
      await signOut()
      accessToken = undefined
    }
    // Otherwise rethrow
    throw err
  }
  let date
  if (accessToken) {
    getAuthenticatedOn(accessToken).then(authenticatedOn => {
      date = dayjs(authenticatedOn.authenticatedOn).format('L LT')
    })
  }
  return { accessToken, profile, authenticatedOn: date }
}
const storybookQueryClient = new QueryClient(defaultQueryClientConfig)

function overrideEndpoint(stack: SynapseStack) {
  const endpointConfig = STACK_MAP[stack]
  window['SRC'] = {
    OVERRIDE_ENDPOINT_CONFIG: endpointConfig,
  }
  storybookQueryClient.resetQueries()
}

const paletteMap = {
  default: palette,
  sageBionetworks: sageBionetworksPalette,
  mtb: mtbPalette,
  arkPortal: arkPortalPalette,
  adKnowledgePortal: adKnowledgePortalPalette,
  nfPortal: nfPortalPalette,
  bsmnPortal: bsmnPortalPalette,
  psychEncodePortal: psychEncodePortalPalette,
  stopAdPortal: stopAdPortalPalette,
  digitalHealthPortal: digitalHealthPortalPalette,
  crcResearcherPortal: crcResearcherPortalPalette,
  cancerComplexityPortal: cancerComplexityPortalPalette,
  elPortal: elPortalPalette,
}

/**
 * Wraps storybook story components to ensure that all components receive required context.
 * @param props
 * @returns
 */
export function StorybookComponentWrapper(props: {
  children: React.ReactNode
  /* This will match the `globalTypes` object in preview.jsx. */
  storybookContext: any
}) {
  const { storybookContext } = props

  useEffect(() => {
    overrideEndpoint(
      (storybookContext.globals.stack as SynapseStack) ||
        (storybookContext.parameters.stack as SynapseStack),
    )
  }, [storybookContext.globals.stack])

  const [accessToken, setAccessToken] = React.useState<string | undefined>(
    undefined,
  )

  useDetectSSOCode()

  useEffect(() => {
    sessionChangeHandler().then(data => {
      setAccessToken(data.accessToken)
    })
  })

  useEffect(() => {
    async function resetCache() {
      await storybookQueryClient.cancelQueries()
      storybookQueryClient.removeQueries()
      await storybookQueryClient.invalidateQueries()
    }
    resetCache()
  }, [accessToken])

  const synapseContext: Partial<SynapseContextType> = useMemo(
    () => ({
      accessToken: accessToken,
      isInExperimentalMode: SynapseClient.isInSynapseExperimentalMode(),
      utcTime: SynapseClient.getUseUtcTimeFromCookie(),
      withErrorBoundary: true,
      downloadCartPageUrl: '/?path=/story/download-downloadcartpage--demo',
    }),
    [accessToken],
  )

  const theme = createTheme(defaultMuiThemeOptions, {
    palette: paletteMap[storybookContext.globals.palette],
  })

  return (
    <FullContextProvider
      queryClient={storybookQueryClient}
      key={accessToken}
      synapseContext={synapseContext}
      theme={theme}
    >
      {storybookContext.globals.showReactQueryDevtools && (
        <ReactQueryDevtools />
      )}
      <MemoryRouter>
        <SynapseToastContainer />
        <main>{props.children}</main>
      </MemoryRouter>
    </FullContextProvider>
  )
}

export default StorybookComponentWrapper
