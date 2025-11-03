import { SynapseErrorBoundary } from '@/components/error/ErrorBanner'
import { KeyFactory } from '@/synapse-queries/KeyFactory'
import { SynapseClient } from '@sage-bionetworks/synapse-client/SynapseClient'
import { createContext, PropsWithChildren, useContext, useMemo } from 'react'
import { BackendDestinationEnum, getEndpoint } from '../functions/getEndpoint'

export type SynapseContextType = {
  /** The user's access token. If undefined, the user is not logged in */
  accessToken: string | undefined
  /** Whether the user is authenticated. Derived from accessToken. */
  isAuthenticated: boolean
  /** If the user has enabled experimental mode */
  isInExperimentalMode: boolean
  /** If the user prefers time to be displayed in UTC format */
  utcTime: boolean
  /** Whether to wrap all children of this context in an error boundary. Useful if this context wraps just one component. */
  withErrorBoundary: boolean
  /** The URL of the download cart page in the current app. Used to properly link components */
  downloadCartPageUrl: string
  /** The key factory to use for react-query. Generated automatically. */
  keyFactory: KeyFactory
  /** The appId identifying the product. Used to brand the Synapse account management site, aka OneSage. */
  appId?: string
  /* API client objects for Synapse. Generated automatically. */
  synapseClient: SynapseClient
}

const defaultContext = {
  accessToken: undefined,
  isAuthenticated: false,
  isInExperimentalMode: false,
  utcTime: false,
  withErrorBoundary: false,
  keyFactory: new KeyFactory(undefined),
  downloadCartPageUrl: '/DownloadCart',
  appId: undefined,
  synapseClient: new SynapseClient(),
} satisfies SynapseContextType

/**
 * This must be exported to use the context in class components.
 */
export const SynapseContext = createContext<SynapseContextType>(defaultContext)

export type SynapseContextProviderProps = PropsWithChildren<{
  synapseContext?: Partial<SynapseContextType>
}>

/**
 * Provides context necessary for most components in SRC.
 *
 * The SynapseContextProvider must be wrapped in a react-query QueryClientProvider.
 * @returns
 */
export function SynapseContextProvider(props: SynapseContextProviderProps) {
  const { children, synapseContext: providedContext } = props
  const queryKeyFactory = useMemo(
    () => new KeyFactory(providedContext?.accessToken),
    [providedContext?.accessToken],
  )

  const basePath = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)

  const synapseApiClient = useMemo(() => {
    if (providedContext?.synapseClient) {
      return providedContext?.synapseClient
    }
    const configurationParameters = {
      accessToken: providedContext?.accessToken,
      basePath: basePath,
    }
    return new SynapseClient(configurationParameters)
  }, [providedContext?.synapseClient, providedContext?.accessToken, basePath])

  const synapseContext: SynapseContextType = useMemo(
    () => ({
      accessToken: providedContext?.accessToken,
      isAuthenticated: Boolean(providedContext?.accessToken),
      isInExperimentalMode: providedContext?.isInExperimentalMode ?? false,
      utcTime: providedContext?.utcTime ?? false,
      withErrorBoundary: providedContext?.withErrorBoundary ?? false,
      downloadCartPageUrl:
        providedContext?.downloadCartPageUrl ?? '/DownloadCart',
      keyFactory: providedContext?.keyFactory ?? queryKeyFactory,
      appId: providedContext?.appId,
      synapseClient: synapseApiClient,
    }),
    [
      providedContext?.accessToken,
      providedContext?.downloadCartPageUrl,
      providedContext?.isInExperimentalMode,
      providedContext?.keyFactory,
      providedContext?.utcTime,
      providedContext?.withErrorBoundary,
      providedContext?.appId,
      queryKeyFactory,
      synapseApiClient,
    ],
  )

  return (
    <SynapseContext.Provider value={synapseContext}>
      {synapseContext?.withErrorBoundary ? (
        <SynapseErrorBoundary>{children}</SynapseErrorBoundary>
      ) : (
        children
      )}
    </SynapseContext.Provider>
  )
}

export const SynapseContextConsumer = SynapseContext.Consumer

export function useSynapseContext(): SynapseContextType {
  const context = useContext(SynapseContext)
  if (context === undefined) {
    throw new Error(
      'useSynapseContext must be used within a SynapseContextProvider',
    )
  }
  return context
}
