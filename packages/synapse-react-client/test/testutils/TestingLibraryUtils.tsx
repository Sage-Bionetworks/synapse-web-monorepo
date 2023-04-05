import React, { ReactNode } from 'react'
import { QueryClient } from 'react-query'
import { MOCK_CONTEXT_VALUE } from '../../mocks/MockSynapseContext'
import { SynapseContextType } from '../../src/lib/utils/SynapseContext'
import FullContextProvider, {
  defaultQueryClientConfig,
} from '../../src/lib/utils/FullContextProvider'

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
  const wrapperProps = props ?? MOCK_CONTEXT_VALUE
  return {
    wrapperFn: function RtlWrapper({ children }: RtlWrapperProps) {
      return (
        <FullContextProvider
          synapseContext={wrapperProps}
          queryClient={queryClient}
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
