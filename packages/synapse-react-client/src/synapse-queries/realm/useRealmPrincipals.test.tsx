import { MOCK_REALM_PRINCIPAL } from '@/mocks/realm/mockRealmPrincipal'
import { server } from '@/mocks/msw/server'
import {
  getRealmPrincipalsHandler,
  getRealmPrincipalsByIdHandler,
} from '@/mocks/msw/handlers/realmHandlers'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { BackendDestinationEnum, getEndpoint } from '@/utils/functions'
import { renderHook, waitFor } from '@testing-library/react'
import { http, HttpResponse } from 'msw'
import { useGetCurrentRealm, useGetRealmPrincipals } from './useRealmPrincipals'

const REPO_ENDPOINT = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)

describe('useGetCurrentRealm', () => {
  beforeAll(() => server.listen())
  afterEach(() => {
    server.resetHandlers(
      getRealmPrincipalsHandler(),
      getRealmPrincipalsByIdHandler(),
    )
  })
  afterAll(() => server.close())

  describe('when authenticated', () => {
    it('fetches realm ID from authenticated endpoint', async () => {
      const { result } = renderHook(() => useGetCurrentRealm(), {
        wrapper: createWrapper({ accessToken: 'fake-token' }),
      })

      await waitFor(() => expect(result.current.isSuccess).toBe(true))

      expect(result.current.data).toBe('0')
      expect(result.current.isLoading).toBe(false)
      expect(result.current.error).toBe(null)
    })

    it('handles error state when authenticated', async () => {
      const errorMessage = 'Failed to fetch realm principals'
      server.use(
        http.get(`${REPO_ENDPOINT}/repo/v1/realm/principals`, () => {
          return HttpResponse.json({ reason: errorMessage }, { status: 500 })
        }),
      )

      const { result } = renderHook(() => useGetCurrentRealm(), {
        wrapper: createWrapper({ accessToken: 'fake-token' }),
      })

      await waitFor(() => expect(result.current.isError).toBe(true))

      expect(result.current.error).toBeDefined()
      expect(result.current.data).toBeUndefined()
    })
  })

  describe('when not authenticated', () => {
    it('returns default Synapse realm ID', async () => {
      const { result } = renderHook(() => useGetCurrentRealm(), {
        wrapper: createWrapper({ accessToken: undefined }),
      })

      await waitFor(() => expect(result.current.isSuccess).toBe(true))

      expect(result.current.data).toBe('0')
      expect(result.current.isLoading).toBe(false)
      expect(result.current.error).toBe(null)
    })
  })

  describe('query options', () => {
    it('can be disabled via enabled option', () => {
      const { result } = renderHook(
        () =>
          useGetCurrentRealm({
            enabled: false,
          }),
        {
          wrapper: createWrapper({ accessToken: 'fake-token' }),
        },
      )

      expect(result.current.isLoading).toBe(false)
      expect(result.current.data).toBeUndefined()
    })
  })
})

describe('useGetRealmPrincipals', () => {
  beforeAll(() => server.listen())
  afterEach(() => {
    // Reset handlers to original state after each test to prevent pollution
    server.resetHandlers(
      getRealmPrincipalsHandler(),
      getRealmPrincipalsByIdHandler(),
    )
  })
  afterAll(() => server.close())

  describe('when authenticated', () => {
    it('fetches realm principals from authenticated endpoint', async () => {
      const { result } = renderHook(() => useGetRealmPrincipals(), {
        wrapper: createWrapper({ accessToken: 'fake-token' }),
      })

      await waitFor(() => expect(result.current.isSuccess).toBe(true))

      expect(result.current.data).toEqual({
        authenticatedUsersId: MOCK_REALM_PRINCIPAL.authenticatedUsers,
        publicGroupId: MOCK_REALM_PRINCIPAL.publicGroup,
        anonymousUserId: MOCK_REALM_PRINCIPAL.anonymousUser,
      })
      expect(result.current.isLoading).toBe(false)
      expect(result.current.error).toBe(null)
    })

    it('handles loading state', () => {
      const { result } = renderHook(() => useGetRealmPrincipals(), {
        wrapper: createWrapper({ accessToken: 'fake-token' }),
      })

      expect(result.current.isLoading).toBe(true)
      expect(result.current.data).toBeUndefined()
    })

    it('handles error state', async () => {
      const errorMessage = 'Failed to fetch realm principals'
      server.use(
        http.get(`${REPO_ENDPOINT}/repo/v1/realm/principals`, () => {
          return HttpResponse.json({ reason: errorMessage }, { status: 500 })
        }),
      )

      const { result } = renderHook(() => useGetRealmPrincipals(), {
        wrapper: createWrapper({ accessToken: 'fake-token' }),
      })

      await waitFor(() => expect(result.current.isError).toBe(true))

      expect(result.current.error).toBeDefined()
      expect(result.current.data).toBeUndefined()
    })
  })

  describe('when not authenticated', () => {
    it('fetches realm principals from unauthenticated endpoint with realm ID 0', async () => {
      let unauthenticatedEndpointCalled = false
      let capturedRealmId: string | undefined

      server.use(
        http.get(
          `${REPO_ENDPOINT}/repo/v1/realm/:id/principals`,
          ({ params }) => {
            unauthenticatedEndpointCalled = true
            capturedRealmId = params.id as string
            return HttpResponse.json(MOCK_REALM_PRINCIPAL)
          },
        ),
      )

      const { result } = renderHook(() => useGetRealmPrincipals(), {
        wrapper: createWrapper({ accessToken: undefined }),
      })

      await waitFor(() => expect(result.current.isSuccess).toBe(true))

      expect(unauthenticatedEndpointCalled).toBe(true)
      expect(capturedRealmId).toBe('0')
      expect(result.current.data).toEqual({
        authenticatedUsersId: MOCK_REALM_PRINCIPAL.authenticatedUsers,
        publicGroupId: MOCK_REALM_PRINCIPAL.publicGroup,
        anonymousUserId: MOCK_REALM_PRINCIPAL.anonymousUser,
      })
    })

    it('handles loading state when not authenticated', () => {
      const { result } = renderHook(() => useGetRealmPrincipals(), {
        wrapper: createWrapper({ accessToken: undefined }),
      })

      expect(result.current.isLoading).toBe(true)
      expect(result.current.data).toBeUndefined()
    })

    it('handles error state when not authenticated', async () => {
      const errorMessage = 'Realm not found'
      server.use(
        http.get(`${REPO_ENDPOINT}/repo/v1/realm/:id/principals`, () => {
          return HttpResponse.json({ reason: errorMessage }, { status: 404 })
        }),
      )

      const { result } = renderHook(() => useGetRealmPrincipals(), {
        wrapper: createWrapper({ accessToken: undefined }),
      })

      await waitFor(() => expect(result.current.isError).toBe(true))

      expect(result.current.error).toBeDefined()
      expect(result.current.data).toBeUndefined()
    })
  })

  describe('query options', () => {
    it('can be disabled via enabled option', () => {
      const { result } = renderHook(
        () =>
          useGetRealmPrincipals({
            enabled: false,
          }),
        {
          wrapper: createWrapper({ accessToken: 'fake-token' }),
        },
      )

      // Should not start loading
      expect(result.current.isLoading).toBe(false)
      expect(result.current.data).toBeUndefined()
    })
  })
})
