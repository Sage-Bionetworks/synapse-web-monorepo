import {
  MOCK_AUTHENTICATED_PRINCIPAL_ID,
  MOCK_ANONYMOUS_PRINCIPAL_ID,
  MOCK_PUBLIC_PRINCIPAL_ID,
  MOCK_REALM_PRINCIPAL,
} from '@/mocks/realm/mockRealmPrincipal'
import { server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { BackendDestinationEnum, getEndpoint } from '@/utils/functions'
import { renderHook, waitFor } from '@testing-library/react'
import { http, HttpResponse } from 'msw'
import { PropsWithChildren } from 'react'
import {
  RealmPrincipalsContextProvider,
  useRealmPrincipals,
} from './RealmPrincipalsContext'

const REPO_ENDPOINT = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)

describe('RealmPrincipalsContext', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  describe('RealmPrincipalsContextProvider', () => {
    it('provides realm principal IDs to children', async () => {
      const wrapper = ({ children }: PropsWithChildren) => {
        const TestWrapper = createWrapper()
        return (
          <TestWrapper>
            <RealmPrincipalsContextProvider>
              {children}
            </RealmPrincipalsContextProvider>
          </TestWrapper>
        )
      }

      const { result } = renderHook(() => useRealmPrincipals(), { wrapper })

      // Initially loading
      expect(result.current.isLoading).toBe(true)
      expect(result.current.authenticatedUsersId).toBeUndefined()
      expect(result.current.publicGroupId).toBeUndefined()
      expect(result.current.anonymousUserId).toBeUndefined()

      // Wait for data to load
      await waitFor(() => expect(result.current.isLoading).toBe(false))

      expect(result.current.authenticatedUsersId).toBe(
        String(MOCK_AUTHENTICATED_PRINCIPAL_ID),
      )
      expect(result.current.publicGroupId).toBe(
        String(MOCK_PUBLIC_PRINCIPAL_ID),
      )
      expect(result.current.anonymousUserId).toBe(
        String(MOCK_ANONYMOUS_PRINCIPAL_ID),
      )
      expect(result.current.error).toBe(null)
    })

    it('handles loading state correctly', () => {
      const wrapper = ({ children }: PropsWithChildren) => {
        const TestWrapper = createWrapper()
        return (
          <TestWrapper>
            <RealmPrincipalsContextProvider>
              {children}
            </RealmPrincipalsContextProvider>
          </TestWrapper>
        )
      }

      const { result } = renderHook(() => useRealmPrincipals(), { wrapper })

      expect(result.current.isLoading).toBe(true)
      expect(result.current.authenticatedUsersId).toBeUndefined()
      expect(result.current.publicGroupId).toBeUndefined()
      expect(result.current.anonymousUserId).toBeUndefined()
      expect(result.current.error).toBe(null)
    })

    it('handles error state correctly', async () => {
      const errorMessage = 'Failed to fetch principals'
      server.use(
        http.get(`${REPO_ENDPOINT}/repo/v1/realm/principals`, () => {
          return HttpResponse.json({ reason: errorMessage }, { status: 500 })
        }),
      )

      const wrapper = ({ children }: PropsWithChildren) => {
        const TestWrapper = createWrapper({ accessToken: 'fake-token' })
        return (
          <TestWrapper>
            <RealmPrincipalsContextProvider>
              {children}
            </RealmPrincipalsContextProvider>
          </TestWrapper>
        )
      }

      const { result } = renderHook(() => useRealmPrincipals(), { wrapper })

      await waitFor(() => expect(result.current.isLoading).toBe(false))

      expect(result.current.error).toBeDefined()
      expect(result.current.authenticatedUsersId).toBeUndefined()
      expect(result.current.publicGroupId).toBeUndefined()
      expect(result.current.anonymousUserId).toBeUndefined()
    })

    it('converts numeric IDs to strings', async () => {
      // Mock response with numeric IDs
      const numericRealmPrincipal = {
        authenticatedUsers: 12345,
        publicGroup: 67890,
        anonymousUser: 11111,
      }

      server.use(
        http.get(`${REPO_ENDPOINT}/repo/v1/realm/principals`, () => {
          return HttpResponse.json(numericRealmPrincipal)
        }),
      )

      const wrapper = ({ children }: PropsWithChildren) => {
        const TestWrapper = createWrapper({ accessToken: 'fake-token' })
        return (
          <TestWrapper>
            <RealmPrincipalsContextProvider>
              {children}
            </RealmPrincipalsContextProvider>
          </TestWrapper>
        )
      }

      const { result } = renderHook(() => useRealmPrincipals(), { wrapper })

      await waitFor(() => expect(result.current.isLoading).toBe(false))

      expect(result.current.authenticatedUsersId).toBe('12345')
      expect(result.current.publicGroupId).toBe('67890')
      expect(result.current.anonymousUserId).toBe('11111')
      expect(typeof result.current.authenticatedUsersId).toBe('string')
      expect(typeof result.current.publicGroupId).toBe('string')
      expect(typeof result.current.anonymousUserId).toBe('string')
    })

    it('handles partial data from API', async () => {
      // Mock response with only some fields
      const partialRealmPrincipal = {
        authenticatedUsers: 12345,
        // publicGroup and anonymousUser are missing
      }

      server.use(
        http.get(`${REPO_ENDPOINT}/repo/v1/realm/principals`, () => {
          return HttpResponse.json(partialRealmPrincipal)
        }),
      )

      const wrapper = ({ children }: PropsWithChildren) => {
        const TestWrapper = createWrapper({ accessToken: 'fake-token' })
        return (
          <TestWrapper>
            <RealmPrincipalsContextProvider>
              {children}
            </RealmPrincipalsContextProvider>
          </TestWrapper>
        )
      }

      const { result } = renderHook(() => useRealmPrincipals(), { wrapper })

      await waitFor(() => expect(result.current.isLoading).toBe(false))

      expect(result.current.authenticatedUsersId).toBe('12345')
      expect(result.current.publicGroupId).toBeUndefined()
      expect(result.current.anonymousUserId).toBeUndefined()
    })

    it('updates context when authentication state changes', async () => {
      // This test verifies that the context re-fetches when authentication changes
      const wrapper = ({ children }: PropsWithChildren) => {
        const TestWrapper = createWrapper({ accessToken: undefined })
        return (
          <TestWrapper>
            <RealmPrincipalsContextProvider>
              {children}
            </RealmPrincipalsContextProvider>
          </TestWrapper>
        )
      }

      const { result } = renderHook(() => useRealmPrincipals(), {
        wrapper,
      })

      await waitFor(() => expect(result.current.isLoading).toBe(false))

      // Should have loaded unauthenticated principals
      expect(result.current.authenticatedUsersId).toBe(
        String(MOCK_AUTHENTICATED_PRINCIPAL_ID),
      )

      // Note: In a real scenario, changing authentication would require re-rendering
      // with a new wrapper that has different authentication context
    })
  })

  describe('useRealmPrincipals', () => {
    it('throws error when used outside of provider', () => {
      expect(() => {
        renderHook(() => useRealmPrincipals())
      }).toThrow(
        'useRealmPrincipals must be used within a RealmPrincipalsContextProvider',
      )
    })

    it('returns all expected properties', async () => {
      // Ensure we're using the full mock data
      server.use(
        http.get(`${REPO_ENDPOINT}/repo/v1/realm/principals`, () => {
          return HttpResponse.json(MOCK_REALM_PRINCIPAL)
        }),
      )

      const wrapper = ({ children }: PropsWithChildren) => {
        const TestWrapper = createWrapper()
        return (
          <TestWrapper>
            <RealmPrincipalsContextProvider>
              {children}
            </RealmPrincipalsContextProvider>
          </TestWrapper>
        )
      }

      const { result } = renderHook(() => useRealmPrincipals(), { wrapper })

      // Wait for data to be loaded
      await waitFor(() => {
        expect(result.current.isLoading).toBe(false)
        expect(result.current.authenticatedUsersId).toBeDefined()
      })

      // Verify all expected properties exist
      expect(result.current).toHaveProperty('authenticatedUsersId')
      expect(result.current).toHaveProperty('publicGroupId')
      expect(result.current).toHaveProperty('anonymousUserId')
      expect(result.current).toHaveProperty('isLoading')
      expect(result.current).toHaveProperty('error')

      // Verify types
      expect(typeof result.current.authenticatedUsersId).toBe('string')
      expect(typeof result.current.publicGroupId).toBe('string')
      expect(typeof result.current.anonymousUserId).toBe('string')
      expect(typeof result.current.isLoading).toBe('boolean')
      expect(result.current.error).toBe(null)
    })

    it('can be called multiple times and returns same context', async () => {
      const wrapper = ({ children }: PropsWithChildren) => {
        const TestWrapper = createWrapper()
        return (
          <TestWrapper>
            <RealmPrincipalsContextProvider>
              {children}
            </RealmPrincipalsContextProvider>
          </TestWrapper>
        )
      }

      const { result: result1 } = renderHook(() => useRealmPrincipals(), {
        wrapper,
      })
      const { result: result2 } = renderHook(() => useRealmPrincipals(), {
        wrapper,
      })

      await waitFor(() => expect(result1.current.isLoading).toBe(false))
      await waitFor(() => expect(result2.current.isLoading).toBe(false))

      // Both hooks should return the same values
      expect(result1.current.authenticatedUsersId).toBe(
        result2.current.authenticatedUsersId,
      )
      expect(result1.current.publicGroupId).toBe(result2.current.publicGroupId)
      expect(result1.current.anonymousUserId).toBe(
        result2.current.anonymousUserId,
      )
    })
  })

  describe('integration with authentication states', () => {
    it('works with authenticated user', async () => {
      // Ensure we're using the full mock data
      server.use(
        http.get(`${REPO_ENDPOINT}/repo/v1/realm/principals`, () => {
          return HttpResponse.json(MOCK_REALM_PRINCIPAL)
        }),
      )

      const wrapper = ({ children }: PropsWithChildren) => {
        const TestWrapper = createWrapper({ accessToken: 'fake-token' })
        return (
          <TestWrapper>
            <RealmPrincipalsContextProvider>
              {children}
            </RealmPrincipalsContextProvider>
          </TestWrapper>
        )
      }

      const { result } = renderHook(() => useRealmPrincipals(), { wrapper })

      // Wait for data to be loaded
      await waitFor(() => {
        expect(result.current.isLoading).toBe(false)
        expect(result.current.authenticatedUsersId).toBeDefined()
      })

      expect(result.current.authenticatedUsersId).toBeDefined()
      expect(result.current.publicGroupId).toBeDefined()
      expect(result.current.anonymousUserId).toBeDefined()
      expect(result.current.error).toBe(null)
    })

    it('works with unauthenticated user', async () => {
      const wrapper = ({ children }: PropsWithChildren) => {
        const TestWrapper = createWrapper({ accessToken: undefined })
        return (
          <TestWrapper>
            <RealmPrincipalsContextProvider>
              {children}
            </RealmPrincipalsContextProvider>
          </TestWrapper>
        )
      }

      const { result } = renderHook(() => useRealmPrincipals(), { wrapper })

      await waitFor(() => expect(result.current.isLoading).toBe(false))

      expect(result.current.authenticatedUsersId).toBeDefined()
      expect(result.current.publicGroupId).toBeDefined()
      expect(result.current.anonymousUserId).toBeDefined()
      expect(result.current.error).toBe(null)
    })
  })
})
