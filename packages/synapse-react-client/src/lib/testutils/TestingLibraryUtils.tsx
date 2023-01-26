import React, { ReactNode } from 'react'
import { QueryClient } from 'react-query'
import { MOCK_CONTEXT_VALUE } from '../../mocks/MockSynapseContext'
import {
  defaultQueryClientConfig,
  SynapseContextProvider,
  SynapseContextType,
} from '../utils/SynapseContext'

type RtlWrapperProps = {
  children?: ReactNode
}

/**
 * Creates a test wrapper for components being tested with @testing-library/react. This wrapper
 * includes context and an isolated query cache. Returns the queryClient so it may be modified as needed
 */
export const createWrapperAndQueryClient = (props?: SynapseContextType) => {
  // Creating a new query client for each rendering is important isolating tests, otherwise the
  // cache could be shared across tests.
  // This is also easier/more reliable than clearing the queryCache after each test.
  // See https://github.com/tannerlinsley/react-query/discussions/1441
  const queryClient = new QueryClient(defaultQueryClientConfig)
  const wrapperProps = props ?? MOCK_CONTEXT_VALUE
  return {
    wrapperFn: function RtlWrapper({ children }: RtlWrapperProps) {
      return (
        <SynapseContextProvider
          synapseContext={wrapperProps}
          queryClient={queryClient}
        >
          {children}
        </SynapseContextProvider>
      )
    },
    queryClient: queryClient,
  }
}

/**
 * Creates a test wrapper for components being tested with @testing-library/react. This wrapper
 * includes context and an isolated query cache.
 */
export const createWrapper = (props?: SynapseContextType) => {
  return createWrapperAndQueryClient(props).wrapperFn
}
