import React from 'react'
import { MOCK_CONTEXT_VALUE } from '@/mocks/MockSynapseContext'
import { MOCK_APPLICATION_SESSION_CONTEXT } from '@/mocks'
import FullContextProvider, {
  defaultQueryClientConfig,
} from '@/utils/context/FullContextProvider'
import { SynapseContextType } from '@/utils/context/SynapseContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'

type RtlWrapperProps = {
  children?: ReactNode
}

/**
 * Creates a test wrapper for components being tested with @testing-library/react. This wrapper
 * includes context and an isolated query cache. Returns the queryClient so it may be modified as needed
 */
export const createWrapperAndQueryClient = (
  props?: Partial<SynapseContextType>,
) => {
  // Creating a new query client for each rendering is important isolating tests, otherwise the
  // cache could be shared across tests.
  // This is also easier/more reliable than clearing the queryCache after each test.
  // See https://github.com/tannerlinsley/react-query/discussions/1441
  const queryClient = new QueryClient(defaultQueryClientConfig)
  const wrapperProps = { ...MOCK_CONTEXT_VALUE, ...props }
  return {
    wrapperFn: function RtlWrapper({ children }: RtlWrapperProps) {
      return (
        <FullContextProvider
          synapseContext={wrapperProps}
          queryClient={queryClient}
          applicationSessionContext={MOCK_APPLICATION_SESSION_CONTEXT}
        >
          {children}
        </FullContextProvider>
      )
    },
    queryClient: queryClient,
  }
}

/**
 * Creates a test wrapper for components being tested with @testing-library/react. This wrapper
 * includes context and an isolated query cache.
 */
export const createWrapper = (props?: Partial<SynapseContextType>) => {
  return createWrapperAndQueryClient(props).wrapperFn
}

/** Helper to get both a Wrapper and the QueryClient */
export function setupQueryClient() {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  })
  const Wrapper = ({
    children,
  }: {
    children: React.ReactNode
  }): React.ReactNode => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
  return { Wrapper, queryClient }
}
