import { ThemeProvider } from '@/theme/ThemeProvider'
import {
  GlobalIsEditingContextProvider,
  IsEditingStore,
} from '@/utils/context/GlobalIsEditingContext'
import { ThemeOptions } from '@mui/material'
import {
  QueryClient,
  QueryClientConfig,
  QueryClientProvider,
} from '@tanstack/react-query'
import { PropsWithChildren, Suspense } from 'react'
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

export type FullContextProviderProps = PropsWithChildren<{
  isEditingStore?: IsEditingStore
  synapseContext: Partial<SynapseContextType>
  queryClient?: QueryClient
  theme?: ThemeOptions
  navigate?: (to: string) => void | Promise<void>
}>

/**
 * Provides all context necessary for components in SRC.
 * Contexts include
 * - SynapseContext
 * - QueryClientContext (react-query)
 * - ThemeContext (@mui)
 * - isEditingStore - used to sync editing state across the application
 */
export function FullContextProvider(props: FullContextProviderProps) {
  const {
    children,
    synapseContext,
    queryClient,
    theme,
    isEditingStore: isEditingStoreFromProps,
    navigate,
  } = props
  const isEditingStore = isEditingStoreFromProps || {
    subscribe: () => () => {},
    getSnapshot: () => false,
    setIsEditing: () => {},
  }

  return (
    <QueryClientProvider client={queryClient ?? defaultQueryClient}>
      <ThemeProvider theme={theme}>
        <SynapseContextProvider
          synapseContext={{ ...synapseContext, navigate }}
        >
          <GlobalIsEditingContextProvider
            subscribe={isEditingStore.subscribe}
            getSnapshot={isEditingStore.getSnapshot}
            setIsEditing={isEditingStore.setIsEditing}
          >
            <Suspense fallback={null}>{children}</Suspense>
          </GlobalIsEditingContextProvider>
        </SynapseContextProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default FullContextProvider
