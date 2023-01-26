import React, { useContext } from 'react'
import {
  QueryClient,
  QueryClientConfig,
  QueryClientProvider,
} from 'react-query'
import { SynapseErrorBoundary } from '../containers/error/ErrorBanner'
import { ThemeProvider } from './theme/useTheme'
import { ThemeOptions } from '@mui/material'

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
  accessToken?: string
  /** If the user has enabled experimental mode */
  isInExperimentalMode: boolean
  /** If the user prefers time to be displayed in UTC format */
  utcTime: boolean
  /** Whether to wrap all children of this context in an error boundary. Useful if this context wraps just one component. */
  withErrorBoundary?: boolean
  /** The URL of the download cart page in the current app. Used to properly link components */
  downloadCartPageUrl: string
}

/**
 * This must be exported to use the context in class components.
 */
export const SynapseContext = React.createContext<
  SynapseContextType | undefined
>(undefined)

export type SynapseContextProviderProps = {
  synapseContext: SynapseContextType
  queryClient?: QueryClient
  theme?: ThemeOptions
  children?: React.ReactNode
}

/**
 * Provides context necessary for most components in SRC
 * @param param0
 * @returns
 */
export const SynapseContextProvider: React.FunctionComponent<
  SynapseContextProviderProps
> = ({ children, synapseContext, queryClient, theme }) => {
  synapseContext.downloadCartPageUrl ??= '/DownloadCart'

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
