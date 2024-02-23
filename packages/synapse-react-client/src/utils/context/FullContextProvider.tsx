import React from 'react'
import {
  QueryClient,
  QueryClientConfig,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ThemeProvider } from '../../theme'
import { ThemeOptions } from '@mui/material'
import { SynapseContextProvider, SynapseContextType } from './SynapseContext'

export const defaultQueryClientConfig = {
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 min
      gcTime: 1000 * 60 * 30, // 30 min
      retry: false, // SynapseClient knows which queries to retry
      refetchOnWindowFocus: false,
    },
  },
} satisfies QueryClientConfig

const defaultQueryClient = new QueryClient(defaultQueryClientConfig)

export type FullContextProviderProps = React.PropsWithChildren<{
  synapseContext: Partial<SynapseContextType>
  queryClient?: QueryClient
  theme?: ThemeOptions
}>

/**
 * Provides all context necessary for components in SRC.
 * Contexts include
 * - SynapseContext
 * - QueryClientContext (react-query)
 * - ThemeContext (@mui)
 */
export function FullContextProvider(props: FullContextProviderProps) {
  const { children, synapseContext, queryClient, theme } = props

  return (
    <QueryClientProvider client={queryClient ?? defaultQueryClient}>
      <ThemeProvider theme={theme}>
        <SynapseContextProvider synapseContext={synapseContext}>
          {children}
        </SynapseContextProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default FullContextProvider
