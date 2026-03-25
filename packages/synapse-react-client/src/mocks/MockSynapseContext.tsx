import { KeyFactory } from '@/synapse-queries'
import FullContextProvider from '@/utils/context/FullContextProvider'
import { SynapseContextType } from '@/utils/context/SynapseContext'
import { SynapseClient } from '@sage-bionetworks/synapse-client/SynapseClient'
import { createContext, PropsWithChildren } from 'react'
import { MOCK_APPLICATION_SESSION_CONTEXT } from './applicationSessionContext/MockApplicationSessionContext'
import { SYNAPSE_REALM } from '@/utils/SynapseConstants'

export const MOCK_ACCESS_TOKEN = 'mock-access-token'

export const MOCK_CONTEXT_VALUE: SynapseContextType = {
  accessToken: MOCK_ACCESS_TOKEN,
  isAuthenticated: true,
  utcTime: false,
  isInExperimentalMode: false,
  downloadCartPageUrl: '/DownloadCart',
  withErrorBoundary: false,
  keyFactory: new KeyFactory(SYNAPSE_REALM, MOCK_ACCESS_TOKEN, true),
  synapseClient: new SynapseClient({
    accessToken: MOCK_ACCESS_TOKEN,
  }),
  realmId: SYNAPSE_REALM,
}

export const MOCK_CONTEXT = createContext(MOCK_CONTEXT_VALUE)

/**
 * Full context object with default values for testing.
 *
 * If using @testing-library/react, see {@link TestingLibraryUtils#createWrapper}
 */
export function SynapseTestContext({ children }: PropsWithChildren) {
  return (
    <FullContextProvider
      synapseContext={MOCK_CONTEXT_VALUE}
      applicationSessionContext={MOCK_APPLICATION_SESSION_CONTEXT}
    >
      {children}
    </FullContextProvider>
  )
}
