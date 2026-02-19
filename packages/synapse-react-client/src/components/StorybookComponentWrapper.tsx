import { StandaloneLoginForm } from '@/components/Authentication/index'
import {
  getAccessTokenFromCookie,
  getAuthenticatedOn,
  getUserProfile,
  signOut,
} from '@/synapse-client'
import {
  ApplicationSessionManager,
  defaultQueryClientConfig,
  SynapseClientError,
} from '@/utils'
import { STACK_MAP, SynapseStack } from '@/utils/functions/getEndpoint'
import useDetectSSOCode from '@/utils/hooks/useDetectSSOCode'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import dayjs from 'dayjs'
import { atom, createStore, useAtom } from 'jotai'
import { ReactNode, Suspense, useEffect } from 'react'
import { createMemoryRouter, MemoryRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import { BlockingLoader } from './LoadingScreen/LoadingScreen'
import { SynapseToastContainer } from './ToastMessage'
import { SynapseErrorBoundary } from './error'

// Store auth token in global atom to avoid race conditions where the Story component
// may not get the login token right away
const authTokenAtom = atom<string | undefined>(undefined)
const store = createStore()

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

  store.set(authTokenAtom, accessToken)

  return { accessToken, profile, authenticatedOn: date }
}

const storybookQueryClient = new QueryClient(defaultQueryClientConfig)

function overrideEndpoint(stack: SynapseStack) {
  const endpointConfig = STACK_MAP[stack]
  ;(window as any)['SRC_OVERRIDE_ENDPOINT_CONFIG'] = endpointConfig
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
      withRouter?: boolean
      requireLogin?: boolean
    }
  }
}) {
  const { storybookContext } = props

  const currentStack: SynapseStack = (storybookContext.globals.stack ||
    storybookContext.parameters.stack) as SynapseStack

  useEffect(() => {
    overrideEndpoint(currentStack)
  }, [currentStack])

  const [accessToken] = useAtom(authTokenAtom, { store })

  const shouldPromptForLogin =
    storybookContext.parameters.requireLogin &&
    currentStack !== 'mock' &&
    !accessToken

  useDetectSSOCode()

  useEffect(() => {
    sessionChangeHandler()
  })

  useEffect(() => {
    async function resetCache() {
      await storybookQueryClient.cancelQueries()
      await storybookQueryClient.resetQueries()
    }

    void resetCache()
  }, [accessToken, currentStack])

  const wrappedStory = (
    <Suspense fallback={<BlockingLoader show hintText="Loading Story..." />}>
      <SynapseErrorBoundary>
        <MemoryRouter>
          <QueryClientProvider client={storybookQueryClient}>
            <ApplicationSessionManager
              key={currentStack}
              downloadCartPageUrl="/?path=/story/download-downloadcartpage--demo"
            >
              {storybookContext.globals.showReactQueryDevtools && (
                <ReactQueryDevtools />
              )}
              <SynapseToastContainer />
              <main>
                {shouldPromptForLogin ? (
                  <StandaloneLoginForm
                    sessionCallback={() => {
                      void sessionChangeHandler()
                    }}
                  />
                ) : (
                  props.children
                )}
              </main>
            </ApplicationSessionManager>
          </QueryClientProvider>
        </MemoryRouter>
      </SynapseErrorBoundary>
    </Suspense>
  )

  if (!storybookContext.parameters.withRouter) {
    return wrappedStory
  }

  const router = createMemoryRouter([
    {
      path: '/',
      element: wrappedStory,
    },
  ])

  return <RouterProvider router={router} />
}

export default StorybookComponentWrapper
