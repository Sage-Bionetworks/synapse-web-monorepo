import { StandaloneLoginForm } from '@/components/Authentication/index'
import SynapseClient from '@/synapse-client'
import {
  defaultQueryClientConfig,
  SynapseContextProvider,
  SynapseContextType,
} from '@/utils'
import { ApplicationSessionContextProvider } from '@/utils/AppUtils/session/ApplicationSessionContext'
import {
  SynapseSessionManager,
  type SessionState,
} from '@/utils/AppUtils/session/SynapseSessionManager'
import { STACK_MAP, SynapseStack } from '@/utils/functions/getEndpoint'
import useDetectSSOCode from '@/utils/hooks/useDetectSSOCode'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {
  ReactNode,
  Suspense,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useSyncExternalStore,
} from 'react'
import { createMemoryRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import { SynapseToastContainer } from './ToastMessage'

const storybookQueryClient = new QueryClient(defaultQueryClientConfig)

// Module-level session manager instance, stable across story switches (like the QueryClient above)
const sessionManager = new SynapseSessionManager({
  onSessionInvalid: () => {
    // In Storybook, just refresh the session instead of reloading the page
    sessionManager.refreshSession()
  },
})

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

  // Subscribe to the framework-agnostic SynapseSessionManager for token/auth state
  // These methods are bound in the SynapseSessionManager constructor, so they are safe to pass directly.
  const sessionState: SessionState = useSyncExternalStore(
    // eslint-disable-next-line @typescript-eslint/unbound-method
    sessionManager.subscribe,
    // eslint-disable-next-line @typescript-eslint/unbound-method
    sessionManager.getSnapshot,
  )

  // Track whether we've started the manager so we only start once (module-level instance persists across renders)
  const managerStartedRef = useRef(false)

  useEffect(() => {
    if (!managerStartedRef.current) {
      sessionManager.start()
      managerStartedRef.current = true
    }
    return () => {
      sessionManager.dispose()
      managerStartedRef.current = false
    }
  }, [])

  // When the stack changes, restart the session manager to pick up the new endpoint
  useEffect(() => {
    if (managerStartedRef.current) {
      sessionManager.dispose()
      sessionManager.start()
    }
  }, [currentStack])

  const shouldPromptForLogin =
    storybookContext.parameters.requireLogin &&
    currentStack !== 'mock' &&
    sessionState.hasInitializedSession &&
    !sessionState.isAuthenticated

  const { isLoading: isLoadingSSO } = useDetectSSOCode({
    onSignInComplete: () => {
      void sessionManager.refreshSession()
    },
    onError: (err: unknown) => {
      console.error('SSO error in Storybook:', err)
    },
    isInitializingSession: !sessionState.hasInitializedSession,
    isAuthenticated: sessionState.isAuthenticated,
  })

  useEffect(() => {
    async function resetCache() {
      await storybookQueryClient.cancelQueries()
      await storybookQueryClient.resetQueries()
    }

    void resetCache()
  }, [sessionState.token, currentStack])

  const effectiveToken = useMemo(() => {
    if (currentStack === 'mock') {
      return storybookContext.args.isAuthenticated ? 'fake token' : undefined
    }
    return sessionState.token
  }, [sessionState.token, currentStack, storybookContext.args.isAuthenticated])

  const effectiveIsAuthenticated = useMemo(() => {
    if (currentStack === 'mock') {
      return !!storybookContext.args.isAuthenticated
    }
    return sessionState.isAuthenticated
  }, [
    sessionState.isAuthenticated,
    currentStack,
    storybookContext.args.isAuthenticated,
  ])

  const refreshSession = useCallback(async () => {
    await sessionManager.refreshSession()
  }, [])

  const clearSession = useCallback(async () => {
    await sessionManager.clearSession()
  }, [])

  const applicationSessionContext = useMemo(
    () => ({
      token: effectiveToken,
      realmId: sessionState.realmId,
      userId: sessionState.userId,
      isAuthenticated: effectiveIsAuthenticated,
      hasInitializedSession: sessionState.hasInitializedSession,
      refreshSession,
      clearSession,
      isLoadingSSO,
      twoFactorAuthSSOErrorResponse: undefined,
      termsOfServiceStatus: undefined,
      twoFactorStatus: undefined,
    }),
    [
      effectiveToken,
      effectiveIsAuthenticated,
      sessionState.realmId,
      sessionState.userId,
      sessionState.hasInitializedSession,
      refreshSession,
      clearSession,
      isLoadingSSO,
    ],
  )

  const synapseContext: Partial<SynapseContextType> = useMemo(
    () => ({
      accessToken: effectiveToken,
      isAuthenticated: effectiveIsAuthenticated,
      isInExperimentalMode: SynapseClient.isInSynapseExperimentalMode(),
      utcTime: SynapseClient.getUseUtcTimeFromCookie(),
      withErrorBoundary: true,
      downloadCartPageUrl: '/?path=/story/download-downloadcartpage--demo',
    }),
    [effectiveToken, effectiveIsAuthenticated],
  )

  const wrappedStory = (
    <Suspense fallback={'global suspense loading...'}>
      <QueryClientProvider client={storybookQueryClient}>
        <ApplicationSessionContextProvider context={applicationSessionContext}>
          <SynapseContextProvider
            key={currentStack}
            synapseContext={synapseContext}
          >
            {storybookContext.globals.showReactQueryDevtools && (
              <ReactQueryDevtools />
            )}
            <SynapseToastContainer />
            <main>
              {shouldPromptForLogin ? (
                <StandaloneLoginForm
                  sessionCallback={() => {
                    void sessionManager.refreshSession()
                  }}
                />
              ) : (
                props.children
              )}
            </main>
          </SynapseContextProvider>
        </ApplicationSessionContextProvider>
      </QueryClientProvider>
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
