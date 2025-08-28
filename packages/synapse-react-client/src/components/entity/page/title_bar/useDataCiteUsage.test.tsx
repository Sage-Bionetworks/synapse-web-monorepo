import React from 'react'
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { renderHook, waitFor } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import {
  useDataCiteUsage,
  getDataCiteUsageQueryKey,
  maxCitationCount,
} from './useDataCiteUsage'

/** Helper to get both a Wrapper and the QueryClient */
function setupClient() {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  })
  const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
  return { Wrapper, queryClient }
}

const mockJsonResponse = (nodes: any[]) => ({
  data: {
    work: {
      citations: { nodes },
    },
  },
})

describe('getDataCiteUsageQueryKey', () => {
  it('returns the stable query key tuple', () => {
    expect(getDataCiteUsageQueryKey('10.1234/abcd')).toEqual([
      'datacite-usage',
      '10.1234/abcd',
    ])
    expect(getDataCiteUsageQueryKey(undefined)).toEqual([
      'datacite-usage',
      undefined,
    ])
  })
})

describe('useDataCiteUsage', () => {
  let fetchSpy: ReturnType<typeof vi.spyOn>

  beforeEach(() => {
    fetchSpy = vi.spyOn(global, 'fetch' as any)
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('fetches and maps citations correctly for a valid DOI', async () => {
    const doi = '10.1111/xyz'
    const apiNodes = [
      {
        id: `https://doi.org/${doi}`,
        titles: [{ title: 'A???B??C' }], // '?' stripped by code
        publisher: { name: 'ACME Publishing' },
        publicationYear: 2020,
        container: { title: 'Great Journal' },
      },
      {
        id: 'https://doi.org/10.9999/empty-fields',
        titles: [], // -> title undefined
        publisher: null,
        publicationYear: null,
        container: null,
      },
    ]

    fetchSpy.mockResolvedValue({
      ok: true,
      status: 200,
      json: () => mockJsonResponse(apiNodes),
    } as any)

    const { Wrapper } = setupClient()
    const { result } = renderHook(() => useDataCiteUsage(doi), {
      wrapper: Wrapper,
    })

    await waitFor(() => expect(result.current.isSuccess).toBe(true))
    const data = result.current.data

    expect(data).toBeTruthy()
    expect(data?.citationCount).toBe(2)
    expect(Array.isArray(data?.citations)).toBe(true)

    const first = data!.citations[0]
    expect(first.id).toBe(doi) // bare DOI extracted
    expect(first.doi).toBe(doi)
    expect(first.title).toBe('ABC') // '?'s removed
    expect(first.publisher).toBe('ACME Publishing')
    expect(first.publicationYear).toBe(2020)
    expect(first.containerTitle).toBe('Great Journal')

    const second = data!.citations[1]
    expect(second.id).toBe('10.9999/empty-fields')
    expect(second.title).toBeUndefined()
    expect(second.publisher).toBeUndefined()
    expect(second.publicationYear).toBeUndefined()
    expect(second.containerTitle).toBeUndefined()

    // Validate GraphQL body used the configured limit + DOI URL var
    const bodyJson = JSON.parse((fetchSpy.mock.calls[0][1] as any).body)
    expect(bodyJson.query).toContain(`first: ${maxCitationCount}`)
    expect(bodyJson.variables.id).toBe(`https://doi.org/${doi}`)
  })

  it('surfaces an error when the DataCite request fails', async () => {
    const doi = '10.0000/bad'
    fetchSpy.mockResolvedValue({
      ok: false,
      status: 500,
      json: () => ({}),
    })

    const { Wrapper } = setupClient()
    const { result } = renderHook(() => useDataCiteUsage(doi), {
      wrapper: Wrapper,
    })

    await waitFor(() => expect(result.current.isError).toBe(true))
    expect(result.current.error).toBeInstanceOf(Error)
    expect(result.current.error?.message).toContain('DataCite GraphQL 500')
  })

  it('registers queries under a stable key derived from the DOI (via cache)', async () => {
    const doi1 = '10.4242/abcd'
    const doi2 = '10.4242/efgh'
    const key1 = ['datacite-usage', doi1]
    const key2 = ['datacite-usage', doi2]

    fetchSpy.mockResolvedValue({
      ok: true,
      status: 200,
      json: () => mockJsonResponse([]),
    } as any)

    const { Wrapper, queryClient } = setupClient()

    const { rerender } = renderHook(({ d }) => useDataCiteUsage(d), {
      initialProps: { d: doi1 },
      wrapper: Wrapper,
    })

    await waitFor(() =>
      expect(queryClient.getQueryState(key1)?.status).toBeDefined(),
    )
    expect(queryClient.getQueryState(key1)).toBeTruthy()

    rerender({ d: doi2 })

    await waitFor(() =>
      expect(queryClient.getQueryState(key2)?.status).toBeDefined(),
    )
    expect(queryClient.getQueryState(key2)).toBeTruthy()
  })
})
