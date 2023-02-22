import React, { useContext, useMemo } from 'react'
import {
  QueryClient,
  QueryClientConfig,
  QueryClientProvider,
} from 'react-query'
import { SynapseErrorBoundary } from '../containers/error/ErrorBanner'
import { ThemeProvider } from './theme/useTheme'
import { ThemeOptions } from '@mui/material'
import { KeyFactory } from './hooks/SynapseAPI/KeyFactory'

export const defaultQueryClientConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 min
      cacheTime: 1000 * 60 * 30, // 30 min
      retry: false, // SynapseClient knows which queries to retry
      refetchOnWindowFocus: false,
    },
  },
}

const defaultQueryClient = new QueryClient(defaultQueryClientConfig)

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
  /* The key factory to use for react-query. Generated automatically. */
  keyFactory: KeyFactory
}

const defaultContext = {
  accessToken: undefined,
  isInExperimentalMode: false,
  utcTime: false,
  withErrorBoundary: false,
  keyFactory: new KeyFactory(undefined),
  downloadCartPageUrl: '/DownloadCart',
} satisfies SynapseContextType

/**
 * This must be exported to use the context in class components.
 */
export const SynapseContext =
  React.createContext<SynapseContextType>(defaultContext)

export type SynapseContextProviderProps = {
  synapseContext: Partial<SynapseContextType>
  queryClient?: QueryClient
  theme?: ThemeOptions
  children?: React.ReactNode
}

/**
 * Provides context necessary for most components in SRC
 * @param param0
 * @returns
 */
export function SynapseContextProvider(props: SynapseContextProviderProps) {
  const {
    children,
    synapseContext: providedContext,
    queryClient,
    theme,
  } = props
  const queryKeyFactory = useMemo(
    () => new KeyFactory(providedContext.accessToken),
    [providedContext.accessToken],
  )

  const synapseContext: SynapseContextType = useMemo(
    () => ({
      accessToken: providedContext.accessToken,
      isInExperimentalMode: providedContext.isInExperimentalMode ?? false,
      utcTime: providedContext.utcTime ?? false,
      withErrorBoundary: providedContext.withErrorBoundary ?? false,
      downloadCartPageUrl:
        providedContext.downloadCartPageUrl ?? '/DownloadCart',
      keyFactory: providedContext.keyFactory ?? queryKeyFactory,
    }),
    [
      providedContext.accessToken,
      providedContext.downloadCartPageUrl,
      providedContext.isInExperimentalMode,
      providedContext.keyFactory,
      providedContext.utcTime,
      providedContext.withErrorBoundary,
      queryKeyFactory,
    ],
  )

  return (
    <SynapseContext.Provider value={synapseContext}>
      <QueryClientProvider client={queryClient ?? defaultQueryClient}>
        <ThemeProvider theme={theme}>
          {synapseContext?.withErrorBoundary ? (
            <SynapseErrorBoundary>{children}</SynapseErrorBoundary>
          ) : (
            children
          )}
        </ThemeProvider>
      </QueryClientProvider>
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
