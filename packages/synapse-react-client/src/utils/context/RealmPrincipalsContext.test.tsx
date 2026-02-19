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
import { useGetRealmPrincipals } from '@/synapse-queries/realm/useRealmPrincipals'

const REPO_ENDPOINT = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)

describe('useGetRealmPrincipals', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  it('fetches and returns realm principal data', async () => {
    const wrapper = createWrapper()

    const { result } = renderHook(() => useGetRealmPrincipals(), { wrapper })

    // Initially loading with undefined values
    expect(result.current.isLoading).toBe(true)
    expect(result.current.data).toBeDefined()
    expect(result.current.data.authenticatedUsersId).toBeUndefined()
    expect(result.current.data.publicGroupId).toBeUndefined()
    expect(result.current.data.anonymousUserId).toBeUndefined()

    // Wait for data to load
    await waitFor(() => expect(result.current.isLoading).toBe(false))

    expect(result.current.data.authenticatedUsersId).toBe(
      String(MOCK_AUTHENTICATED_PRINCIPAL_ID),
    )
    expect(result.current.data.publicGroupId).toBe(
      String(MOCK_PUBLIC_PRINCIPAL_ID),
    )
    expect(result.current.data.anonymousUserId).toBe(
      String(MOCK_ANONYMOUS_PRINCIPAL_ID),
    )
    expect(result.current.error).toBe(null)
  })

  it('handles loading state correctly', () => {
    const wrapper = createWrapper()

    const { result } = renderHook(() => useGetRealmPrincipals(), { wrapper })

    expect(result.current.isLoading).toBe(true)
    expect(result.current.data).toBeDefined()
    expect(result.current.data.authenticatedUsersId).toBeUndefined()
    expect(result.current.data.publicGroupId).toBeUndefined()
    expect(result.current.data.anonymousUserId).toBeUndefined()
    expect(result.current.error).toBe(null)
  })

  it('handles error state correctly', async () => {
    const errorMessage = 'Failed to fetch principals'
    server.use(
      http.get(`${REPO_ENDPOINT}/repo/v1/realm/principals`, () => {
        return HttpResponse.json({ reason: errorMessage }, { status: 500 })
      }),
    )

    const wrapper = createWrapper({ accessToken: 'fake-token' })

    const { result } = renderHook(() => useGetRealmPrincipals(), { wrapper })

    await waitFor(() => expect(result.current.isLoading).toBe(false))

    expect(result.current.error).toBeDefined()
    expect(result.current.data.authenticatedUsersId).toBeUndefined()
    expect(result.current.data.publicGroupId).toBeUndefined()
    expect(result.current.data.anonymousUserId).toBeUndefined()
  })

  it('returns numeric IDs from API', async () => {
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

    const wrapper = createWrapper({ accessToken: 'fake-token' })

    const { result } = renderHook(() => useGetRealmPrincipals(), { wrapper })

    await waitFor(() => expect(result.current.isLoading).toBe(false))

    expect(result.current.data.authenticatedUsersId).toBe('12345')
    expect(result.current.data.publicGroupId).toBe('67890')
    expect(result.current.data.anonymousUserId).toBe('11111')
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

    const wrapper = createWrapper({ accessToken: 'fake-token' })

    const { result } = renderHook(() => useGetRealmPrincipals(), { wrapper })

    await waitFor(() => expect(result.current.isLoading).toBe(false))

    expect(result.current.data.authenticatedUsersId).toBe('12345')
    expect(result.current.data.publicGroupId).toBeUndefined()
    expect(result.current.data.anonymousUserId).toBeUndefined()
  })

  it('works with authenticated user', async () => {
    server.use(
      http.get(`${REPO_ENDPOINT}/repo/v1/realm/principals`, () => {
        return HttpResponse.json(MOCK_REALM_PRINCIPAL)
      }),
    )

    const wrapper = createWrapper({ accessToken: 'fake-token' })

    const { result } = renderHook(() => useGetRealmPrincipals(), { wrapper })

    await waitFor(() => expect(result.current.isLoading).toBe(false))

    expect(result.current.data.authenticatedUsersId).toBeDefined()
    expect(result.current.data.publicGroupId).toBeDefined()
    expect(result.current.data.anonymousUserId).toBeDefined()
    expect(result.current.error).toBe(null)
  })

  it('works with unauthenticated user', async () => {
    const wrapper = createWrapper({ accessToken: undefined })

    const { result } = renderHook(() => useGetRealmPrincipals(), { wrapper })

    await waitFor(() => expect(result.current.isLoading).toBe(false))

    expect(result.current.data.authenticatedUsersId).toBeDefined()
    expect(result.current.data.publicGroupId).toBeDefined()
    expect(result.current.data.anonymousUserId).toBeDefined()
    expect(result.current.error).toBe(null)
  })
})
