import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { renderHook, waitFor } from '@testing-library/react'
import {
  useGetMentions,
  getMentionsQueryKey,
  EuropePMCResult,
  EuropePMCResponse,
  mapEuropePMCResponseToCitingWorks,
} from './useGetMentions'
import { CitingWork } from './useDataCiteUsage'

// Mock fetch for Europe PMC
const mockEuropePMCResponse = (
  results: EuropePMCResult[],
): EuropePMCResponse => ({
  resultList: { result: results },
})

import { setupQueryClient } from '@/testutils/TestingLibraryUtils'

vi.mock('@/synapse-queries', async () => {
  const actual = await import('@/synapse-queries')
  return {
    ...actual,
    useGetQueryResultBundleWithAsyncStatus: vi.fn(),
  }
})

import { useGetQueryResultBundleWithAsyncStatus } from '@/synapse-queries'

describe('getMentionsQueryKey', () => {
  it('returns the stable query key tuple', () => {
    expect(getMentionsQueryKey('syn123')).toEqual(['europepmc', 'syn123'])
  })
})

describe('useGetMentions', () => {
  let fetchSpy: ReturnType<typeof vi.spyOn>
  const entityId = 'syn123'
  const pmcidRows = [
    { values: ['pmc:PMC111'] },
    { values: ['PMC222'] },
    { values: [null] }, // Should be filtered out
  ]

  beforeEach(() => {
    fetchSpy = vi.spyOn(global, 'fetch' as any)
    vi.mocked(useGetQueryResultBundleWithAsyncStatus).mockReturnValue({
      data: {
        responseBody: { queryResult: { queryResults: { rows: pmcidRows } } },
      },
    } as any)
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('fetches and maps mentions correctly for valid pmcids', async () => {
    // Europe PMC returns two results
    const europePMCResults: EuropePMCResult[] = [
      {
        pmcid: 'PMC111',
        title: 'First Mention',
        doi: '10.1234/pmc111',
        journalTitle: 'Journal A',
        pubYear: '2021',
      },
      {
        pmcid: 'PMC222',
        title: 'Second Mention',
        doi: '10.5678/pmc222',
        journalTitle: 'Journal B',
        pubYear: '2022',
      },
    ]
    fetchSpy.mockResolvedValue({
      ok: true,
      status: 200,
      json: () => mockEuropePMCResponse(europePMCResults),
    } as any)

    const { Wrapper } = setupQueryClient()
    const { result } = renderHook(() => useGetMentions(entityId), {
      wrapper: Wrapper,
    })

    await waitFor(() => expect(result.current.isSuccess).toBe(true))
    const data = result.current.data as CitingWork[]

    expect(data).toBeTruthy()
    expect(Array.isArray(data)).toBe(true)
    expect(data).toHaveLength(2)

    const first = data[0]
    expect(first.id).toBe('PMC111')
    expect(first.title).toBe('First Mention')
    expect(first.doi).toBe('10.1234/pmc111')
    expect(first.publisher).toBe('Journal A')
    expect(first.publicationYear).toBe(2021)

    const second = data[1]
    expect(second.id).toBe('PMC222')
    expect(second.title).toBe('Second Mention')
    expect(second.doi).toBe('10.5678/pmc222')
    expect(second.publisher).toBe('Journal B')
    expect(second.publicationYear).toBe(2022)

    // Validate fetch URL and query params
    const fetchUrl = fetchSpy.mock.calls[0][0] as string
    expect(fetchUrl).toContain('ebi.ac.uk/europepmc/webservices/rest/search')
    expect(fetchUrl).toContain('PMCID%3APMC111')
    expect(fetchUrl).toContain('PMCID%3APMC222')
  })

  it('returns an empty array if there are no pmcids', async () => {
    vi.mocked(useGetQueryResultBundleWithAsyncStatus).mockReturnValue({
      data: { responseBody: { queryResult: { queryResults: { rows: [] } } } },
    } as any)

    const { Wrapper } = setupQueryClient()
    const { result } = renderHook(() => useGetMentions(entityId), {
      wrapper: Wrapper,
    })

    await waitFor(() => expect(result.current.isSuccess).toBe(true))
    expect(result.current.data).toEqual([])
    expect(fetchSpy).not.toHaveBeenCalled()
  })

  it('surfaces an error when the Europe PMC request fails', async () => {
    fetchSpy.mockResolvedValue({
      ok: false,
      status: 500,
      text: () => Promise.resolve('Internal Server Error'),
    })

    const { Wrapper } = setupQueryClient()
    const { result } = renderHook(() => useGetMentions(entityId), {
      wrapper: Wrapper,
    })

    await waitFor(() => expect(result.current.isError).toBe(true))
    expect(result.current.error).toBeInstanceOf(Error)
    expect(result.current.error?.message).toContain('Europe PMC error 500')
  })

  it('registers queries under a stable key derived from the entityId (via cache)', async () => {
    fetchSpy.mockResolvedValue({
      ok: true,
      status: 200,
      json: () => mockEuropePMCResponse([]),
    } as any)

    const { Wrapper, queryClient } = setupQueryClient()
    const { rerender } = renderHook(({ id }) => useGetMentions(id), {
      initialProps: { id: 'synA' },
      wrapper: Wrapper,
    })

    await waitFor(() =>
      expect(
        queryClient.getQueryState(['europepmc', 'synA'])?.status,
      ).toBeDefined(),
    )
    expect(queryClient.getQueryState(['europepmc', 'synA'])).toBeTruthy()

    rerender({ id: 'synB' })

    await waitFor(() =>
      expect(
        queryClient.getQueryState(['europepmc', 'synB'])?.status,
      ).toBeDefined(),
    )
    expect(queryClient.getQueryState(['europepmc', 'synB'])).toBeTruthy()
  })

  // test mapEuropePMCResponseToCitingWorks
  it('maps Europe PMC response to CitingWork correctly', () => {
    const europePMCResponse: EuropePMCResponse = {
      resultList: {
        result: [
          {
            pmcid: 'PMC123',
            title: 'Sample Title',
            doi: '10.1000/xyz123',
            journalTitle: 'Sample Journal',
            pubYear: '2020',
            authorList: { author: [{ fullName: 'John Doe' }] },
          },
          {
            pmcid: 'PMC456',
            // Missing title and doi
            journalTitle: 'Another Journal',
            pubYear: '2019',
            authorList: { author: [] }, // No authors
          },
        ],
      },
    }

    const citingWorks = mapEuropePMCResponseToCitingWorks(europePMCResponse)
    expect(citingWorks).toHaveLength(2)

    const first = citingWorks[0]
    expect(first.id).toBe('PMC123')
    expect(first.doi).toBe('10.1000/xyz123')
    expect(first.title).toBe('Sample Title')
    expect(first.publisher).toBe('Sample Journal')
    expect(first.publicationYear).toBe(2020)
    // expect(first.authors).toEqual(['John Doe'])

    const second = citingWorks[1]
    expect(second.id).toBe('PMC456')
    expect(second.doi).toBeUndefined()
    expect(second.title).toBe('(Untitled)')
    expect(second.publisher).toBe('Another Journal')
    expect(second.publicationYear).toBe(2019)
    // expect(second.authors).toEqual([])
  })
})
