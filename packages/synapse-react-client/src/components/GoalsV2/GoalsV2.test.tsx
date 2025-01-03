import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { server } from '../../mocks/msw/server'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import GoalsV2 from './GoalsV2'
import {
  SynapseContextProvider,
  SynapseContextType,
} from '../../utils/context/SynapseContext'

const mockSynapseContext: Partial<SynapseContextType> = {
  isInExperimentalMode: false,
  utcTime: false,
  withErrorBoundary: false,
  downloadCartPageUrl: '/DownloadCart',
  appId: undefined,
}

const queryClient = new QueryClient()

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('GoalsV2', () => {
  test('renders the component with provided props', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <SynapseContextProvider synapseContext={mockSynapseContext}>
          <GoalsV2 entityId="syn22315959" />
        </SynapseContextProvider>
      </QueryClientProvider>,
    )

    await waitFor(() => {
      expect(screen.getByText("What's in the Portal?")).toBeInTheDocument()
    })
  })

  test('displays assets when fetch is successful', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <SynapseContextProvider synapseContext={mockSynapseContext}>
          <GoalsV2 entityId="syn22315959" />
        </SynapseContextProvider>
      </QueryClientProvider>,
    )

    await waitFor(() => {
      expect(screen.getByText("What's in the Portal?")).toBeInTheDocument()
    })
  })
})
