import { server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import { OAuthProvider } from '@sage-bionetworks/synapse-client'
import { renderHook, waitFor } from '@testing-library/react'
import { http, HttpResponse } from 'msw'
import { useUnbindOAuthProviderIdentity } from './useUnbindOAuthProviderIdentity'

const backendOrigin = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)

describe('useUnbindOAuthProviderIdentity', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  it('passes the provider to the identity endpoint', async () => {
    const onRequest = vi.fn()
    server.use(
      http.delete(`${backendOrigin}/auth/v1/oauth2/identity`, ({ request }) => {
        onRequest(new URL(request.url).searchParams.get('provider'))
        return new HttpResponse(null, { status: 200 })
      }),
    )

    const { result } = renderHook(() => useUnbindOAuthProviderIdentity(), {
      wrapper: createWrapper({ accessToken: 'fake-token' }),
    })

    result.current.mutate(OAuthProvider.NIH_RESEARCHER_AUTH_SERVICE)

    await waitFor(() => expect(result.current.isSuccess).toBe(true))
    expect(onRequest).toHaveBeenCalledWith(
      OAuthProvider.NIH_RESEARCHER_AUTH_SERVICE,
    )
  })

  it('surfaces an error when the service rejects the request', async () => {
    server.use(
      http.delete(`${backendOrigin}/auth/v1/oauth2/identity`, () => {
        return HttpResponse.json(
          { reason: 'You cannot unlink this provider' },
          { status: 403 },
        )
      }),
    )

    const { result } = renderHook(() => useUnbindOAuthProviderIdentity(), {
      wrapper: createWrapper({ accessToken: 'fake-token' }),
    })

    result.current.mutate(OAuthProvider.NIH_RESEARCHER_AUTH_SERVICE)

    await waitFor(() => expect(result.current.isError).toBe(true))
    expect(result.current.error?.reason).toEqual(
      'You cannot unlink this provider',
    )
  })
})
