import { server } from '@/mocks/msw/server'
import { KeyFactory } from '@/synapse-queries/KeyFactory'
import { TERMS_OF_USE, TERMS_OF_USE_STATUS } from '@/utils/APIConstants'
import { SynapseContextProvider } from '@/utils/context/SynapseContext'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import {
  TermsOfServiceState,
  TermsOfServiceStatus,
} from '@sage-bionetworks/synapse-types'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { renderHook, waitFor } from '@testing-library/react'
import { http, HttpResponse } from 'msw'
import { PropsWithChildren } from 'react'
import {
  useSignTermsOfService,
  useTermsOfServiceStatus,
} from './useTermsOfService'

const backendOrigin = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)
const ACCESS_TOKEN = 'user-access-token'

describe('useTermsOfService', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  let hasSigned: boolean
  beforeEach(() => {
    hasSigned = false
    server.use(
      http.get(`${backendOrigin}${TERMS_OF_USE_STATUS}`, () =>
        HttpResponse.json({
          userId: '100',
          userCurrentTermsOfServiceState: hasSigned
            ? TermsOfServiceState.UP_TO_DATE
            : TermsOfServiceState.MUST_AGREE_NOW,
          lastAgreementDate: '2024-01-01T00:00:00.000Z',
          lastAgreementVersion: '0.0.1',
        } satisfies TermsOfServiceStatus),
      ),
      http.post(`${backendOrigin}${TERMS_OF_USE}`, () => {
        hasSigned = true
        return HttpResponse.json({}, { status: 201 })
      }),
    )
  })

  it('refreshes the session-level status before onSuccess callers redirect', async () => {
    const queryClient = new QueryClient({
      defaultOptions: { queries: { retry: false } },
    })
    // ApplicationSessionManager fetches the status above its own SynapseContextProvider, so the
    // status hook is rendered without an authenticated SynapseContext and is given the token directly.
    const sessionStatus = renderHook(
      () => useTermsOfServiceStatus(ACCESS_TOKEN),
      {
        wrapper: ({ children }: PropsWithChildren) => (
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        ),
      },
    )
    const signTermsOfService = renderHook(() => useSignTermsOfService(), {
      wrapper: ({ children }: PropsWithChildren) => (
        <QueryClientProvider client={queryClient}>
          <SynapseContextProvider
            synapseContext={{ accessToken: ACCESS_TOKEN }}
          >
            {children}
          </SynapseContextProvider>
        </QueryClientProvider>
      ),
    })

    await waitFor(() =>
      expect(
        sessionStatus.result.current.data?.userCurrentTermsOfServiceState,
      ).toBe(TermsOfServiceState.MUST_AGREE_NOW),
    )

    const statusSeenInOnSuccess = vi.fn()
    signTermsOfService.result.current.mutate(
      { accessToken: ACCESS_TOKEN, termsOfServiceVersion: '1.0.0' },
      {
        onSuccess: () => {
          statusSeenInOnSuccess(
            queryClient.getQueryData<TermsOfServiceStatus>(
              new KeyFactory(ACCESS_TOKEN).getTermsOfServiceStatus(),
            )?.userCurrentTermsOfServiceState,
          )
        },
      },
    )

    await waitFor(() =>
      expect(statusSeenInOnSuccess).toHaveBeenCalledWith(
        TermsOfServiceState.UP_TO_DATE,
      ),
    )
    await waitFor(() =>
      expect(
        sessionStatus.result.current.data?.userCurrentTermsOfServiceState,
      ).toBe(TermsOfServiceState.UP_TO_DATE),
    )
  })
})
