import { KeyFactory } from '@/synapse-queries'
import FullContextProvider from '@/utils/context/FullContextProvider'
import { SynapseContextType } from '@/utils/context/SynapseContext'
import { SynapseClient } from '@sage-bionetworks/synapse-client/SynapseClient'
import { createContext } from 'react'

export const MOCK_ACCESS_TOKEN = 'mock-access-token'

export const MOCK_CONTEXT_VALUE: SynapseContextType = {
  accessToken: MOCK_ACCESS_TOKEN,
  utcTime: false,
  isInExperimentalMode: false,
  downloadCartPageUrl: '/DownloadCart',
  withErrorBoundary: false,
  keyFactory: new KeyFactory(MOCK_ACCESS_TOKEN),
  synapseClient: new SynapseClient({
    accessToken: MOCK_ACCESS_TOKEN,
  }),
}

export const MOCK_CONTEXT = createContext(MOCK_CONTEXT_VALUE)

/**
 * Full context object with default values for testing.
 *
 * If using @testing-library/react, see {@link TestingLibraryUtils#createWrapper}
 */
export const SynapseTestContext = jest
  .fn()
  .mockImplementation(({ children }) => {
    return (
      <FullContextProvider synapseContext={MOCK_CONTEXT_VALUE}>
        {children}
      </FullContextProvider>
    )
  })
