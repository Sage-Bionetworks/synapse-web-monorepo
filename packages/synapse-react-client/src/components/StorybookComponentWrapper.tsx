import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import dayjs from 'dayjs'
import { ReactNode, Suspense, useEffect, useMemo, useState } from 'react'
import SynapseClient, {
  getAccessTokenFromCookie,
  getAuthenticatedOn,
  getUserProfile,
  signOut,
} from '../synapse-client'
import { defaultQueryClientConfig } from '../utils/context/index'
import {
  SynapseContextProvider,
  SynapseContextType,
} from '../utils/context/SynapseContext'
import { STACK_MAP, SynapseStack } from '../utils/functions/getEndpoint'
import useDetectSSOCode from '../utils/hooks/useDetectSSOCode'
import { SynapseToastContainer } from './ToastMessage'

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
}

/**
 * Wraps storybook story components to ensure that all components receive required context.
 * @param props
 * @returns
 */
export function StorybookComponentWrapper(props: {
  children: ReactNode
  /* This will match the `globalTypes` object in preview.tsx. */
  storybookContext: {
    args: {
      isAuthenticated?: boolean
    }
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

  const [accessToken, setAccessToken] = useState<string | undefined>(undefined)

  useDetectSSOCode()

  useEffect(() => {
    sessionChangeHandler().then(data => {
      setAccessToken(data.accessToken)
    })
  })

  useEffect(() => {
    async function resetCache() {
      await storybookQueryClient.cancelQueries()
      await storybookQueryClient.resetQueries()
    }

    void resetCache()
  }, [accessToken, currentStack])

  const synapseContext: Partial<SynapseContextType> = useMemo(
    () => ({
      accessToken:
        storybookContext.args.isAuthenticated && currentStack === 'mock'
          ? 'fake token'
          : !storybookContext.args.isAuthenticated && currentStack === 'mock'
          ? undefined
          : accessToken,
      isInExperimentalMode: SynapseClient.isInSynapseExperimentalMode(),
      utcTime: SynapseClient.getUseUtcTimeFromCookie(),
      withErrorBoundary: true,
      downloadCartPageUrl: '/?path=/story/download-downloadcartpage--demo',
    }),
    [accessToken, currentStack, storybookContext.args.isAuthenticated],
  )

  return (
    <Suspense fallback={'global suspense loading...'}>
      <QueryClientProvider client={storybookQueryClient}>
        <SynapseContextProvider
          key={currentStack}
          synapseContext={synapseContext}
        >
          {storybookContext.globals.showReactQueryDevtools && (
            <ReactQueryDevtools />
          )}
          <SynapseToastContainer />
          <main>{props.children}</main>
        </SynapseContextProvider>
      </QueryClientProvider>
    </Suspense>
  )
}

export default StorybookComponentWrapper
