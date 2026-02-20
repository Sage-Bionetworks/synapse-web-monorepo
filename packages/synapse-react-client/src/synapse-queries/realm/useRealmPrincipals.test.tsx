import {
  MOCK_REALM,
  MOCK_REALM_PRINCIPAL,
} from '@/mocks/realm/mockRealmPrincipal'
import { server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { BackendDestinationEnum, getEndpoint } from '@/utils/functions'
import { renderHook, waitFor } from '@testing-library/react'
import { http, HttpResponse } from 'msw'
import { useGetCurrentRealm, useGetRealmPrincipals } from './useRealmPrincipals'
import { getRealmHandlers } from '@/mocks/msw/handlers/realmHandlers'

const REPO_ENDPOINT = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)

describe('useRealm', () => {
  beforeAll(() => server.listen())
  beforeEach(() => {
    server.use(
      ...getRealmHandlers(getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)),
    )
  })
  afterAll(() => server.close())

  describe('useGetCurrentRealm', () => {
    it('fetches realm endpoint', async () => {
      const { result } = renderHook(() => useGetCurrentRealm(), {
        wrapper: createWrapper({ accessToken: 'fake-token' }),
      })

      await waitFor(() => expect(result.current.isSuccess).toBe(true))

      expect(result.current.data).toEqual(MOCK_REALM)
      expect(result.current.isLoading).toBe(false)
      expect(result.current.error).toBe(null)
    })

    it('handles error state when authenticated', async () => {
      const errorMessage = 'Failed to fetch realm'
      server.use(
        http.get(`${REPO_ENDPOINT}/repo/v1/realm/:id`, () => {
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
    it('fetches realm principals', async () => {
      const { result } = renderHook(() => useGetRealmPrincipals(), {
        wrapper: createWrapper({ accessToken: 'fake-token' }),
      })

      await waitFor(() => {
        expect(result.current.isSuccess).toBe(true)
        expect(result.current.data).toEqual({
          authenticatedUsersId: MOCK_REALM_PRINCIPAL.authenticatedUsers,
          publicGroupId: MOCK_REALM_PRINCIPAL.publicGroup,
          anonymousUserId: MOCK_REALM_PRINCIPAL.anonymousUser,
        })

        expect(result.current.isLoading).toBe(false)
        expect(result.current.error).toBe(null)
      })
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
        http.get(
          `${getEndpoint(
            BackendDestinationEnum.REPO_ENDPOINT,
          )}/repo/v1/realm/principals`,
          () => {
            return HttpResponse.json({ reason: errorMessage }, { status: 500 })
          },
        ),
      )

      const { result } = renderHook(() => useGetRealmPrincipals(), {
        wrapper: createWrapper({ accessToken: 'fake-token' }),
      })

      await waitFor(() => expect(result.current.isError).toBe(true))

      expect(result.current.error).toBeDefined()
      expect(result.current.data).toBeUndefined()
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
})
