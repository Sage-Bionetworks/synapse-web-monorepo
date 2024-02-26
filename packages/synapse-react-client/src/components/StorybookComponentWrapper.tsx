import React, { useEffect, useMemo } from 'react'
import { MemoryRouter } from 'react-router-dom'
import {
  SynapseContextProvider,
  SynapseContextType,
} from '../utils/context/SynapseContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import SynapseClient from '../synapse-client'
import { SynapseToastContainer } from './ToastMessage/ToastMessage'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import dayjs from 'dayjs'
import {
  getAccessTokenFromCookie,
  getAuthenticatedOn,
  getUserProfile,
  signOut,
} from '../synapse-client/SynapseClient'
import { SynapseClientError } from '../utils/SynapseClientError'
import { STACK_MAP, SynapseStack } from '../utils/functions/getEndpoint'
import useDetectSSOCode from '../utils/hooks/useDetectSSOCode'
import { defaultQueryClientConfig } from '../utils/context/FullContextProvider'

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
  ;(window as any)['SRC'] = {
    OVERRIDE_ENDPOINT_CONFIG: endpointConfig,
  }
  storybookQueryClient.resetQueries()
}

/**
 * Wraps storybook story components to ensure that all components receive required context.
 * @param props
 * @returns
 */
export function StorybookComponentWrapper(props: {
  children: React.ReactNode
  /* This will match the `globalTypes` object in preview.tsx. */
  storybookContext: {
    globals: {
      stack?: SynapseStack
      showReactQueryDevtools?: boolean
    }
    parameters: {
      stack?: SynapseStack
    }
  }
}) {
  const { storybookContext } = props

  const currentStack: SynapseStack = (storybookContext.globals.stack ||
    storybookContext.parameters.stack) as SynapseStack

  useEffect(() => {
    overrideEndpoint(currentStack)
  }, [currentStack])

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

  return (
    <QueryClientProvider client={storybookQueryClient}>
      <SynapseContextProvider synapseContext={synapseContext}>
        {storybookContext.globals.showReactQueryDevtools && (
          <ReactQueryDevtools />
        )}
        <MemoryRouter>
          <SynapseToastContainer />
          <main>{props.children}</main>
        </MemoryRouter>
      </SynapseContextProvider>
    </QueryClientProvider>
  )
}

export default StorybookComponentWrapper
