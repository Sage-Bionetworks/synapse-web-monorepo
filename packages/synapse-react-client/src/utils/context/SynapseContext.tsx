import React, { useContext, useMemo } from 'react'
import { SynapseErrorBoundary } from '../../components/error/ErrorBanner'
import { KeyFactory } from '../../synapse-queries'
import { Configuration, SynapseClient } from 'synapse-client'
import { fetchWithExponentialTimeout } from '../../synapse-client/HttpClient'

export type SynapseContextType = {
  /** The user's access token. If undefined, the user is not logged in */
  accessToken: string | undefined
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
export const SynapseContext =
  React.createContext<SynapseContextType>(defaultContext)

export type SynapseContextProviderProps = React.PropsWithChildren<{
  synapseContext: Partial<SynapseContextType>
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
    () => new KeyFactory(providedContext.accessToken),
    [providedContext.accessToken],
  )

  const synapseApiClient = useMemo(() => {
    const configuration = new Configuration({
      // TODO: Extract fetchWithExponentialTimeout so it can be used in `synapse-client` by default
      fetchApi: fetchWithExponentialTimeout,
      apiKey: providedContext.accessToken
        ? `Bearer ${providedContext.accessToken}`
        : undefined,
    })
    return new SynapseClient(configuration)
  }, [providedContext.accessToken])

  const synapseContext: SynapseContextType = useMemo(
    () => ({
      accessToken: providedContext.accessToken,
      isInExperimentalMode: providedContext.isInExperimentalMode ?? false,
      utcTime: providedContext.utcTime ?? false,
      withErrorBoundary: providedContext.withErrorBoundary ?? false,
      downloadCartPageUrl:
        providedContext.downloadCartPageUrl ?? '/DownloadCart',
      keyFactory: providedContext.keyFactory ?? queryKeyFactory,
      appId: providedContext.appId,
      synapseClient: synapseApiClient,
    }),
    [
      providedContext.accessToken,
      providedContext.downloadCartPageUrl,
      providedContext.isInExperimentalMode,
      providedContext.keyFactory,
      providedContext.utcTime,
      providedContext.withErrorBoundary,
      providedContext.appId,
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
