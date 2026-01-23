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
import { DocumentMetadataProvider } from './DocumentMetadataContext'
import {
  ApplicationSessionContextProvider,
  ApplicationSessionContextType,
} from '../AppUtils/session/ApplicationSessionContext'

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
  applicationSessionContext?: ApplicationSessionContextType
}>

/**
 * Provides all context necessary for components in SRC.
 * Contexts include
 * - SynapseContext
 * - QueryClientContext (react-query)
 * - ThemeContext (@mui)
 * - DocumentMetadataContext - for managing page title and meta descriptions
 * - ApplicationSessionContext - for managing user session state
 * - isEditingStore - used to sync editing state across the application
 */
export function FullContextProvider(props: FullContextProviderProps) {
  const {
    children,
    synapseContext,
    queryClient,
    theme,
    isEditingStore: isEditingStoreFromProps,
    applicationSessionContext,
  } = props
  const isEditingStore = isEditingStoreFromProps || {
    subscribe: () => () => {},
    getSnapshot: () => false,
    setIsEditing: () => {},
  }

  const defaultApplicationSessionContext: ApplicationSessionContextType =
    applicationSessionContext || {
      hasInitializedSession: true,
      refreshSession: async () => {},
      clearSession: async () => {},
      isLoadingSSO: false,
    }

  return (
    <QueryClientProvider client={queryClient ?? defaultQueryClient}>
      <ThemeProvider theme={theme}>
        <SynapseContextProvider synapseContext={synapseContext}>
          <ApplicationSessionContextProvider
            context={defaultApplicationSessionContext}
          >
            <DocumentMetadataProvider>
              <GlobalIsEditingContextProvider
                subscribe={isEditingStore.subscribe}
                getSnapshot={isEditingStore.getSnapshot}
                setIsEditing={isEditingStore.setIsEditing}
              >
                <Suspense fallback={null}>{children}</Suspense>
              </GlobalIsEditingContextProvider>
            </DocumentMetadataProvider>
          </ApplicationSessionContextProvider>
        </SynapseContextProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default FullContextProvider
