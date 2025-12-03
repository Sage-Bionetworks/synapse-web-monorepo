import { describe, expect, it, vi, beforeEach } from 'vitest'
import {
  extractEntityIdFromSql,
  fetchResourceIds,
} from './queryTableForSitemap'
import type { DetailPageConfig } from './types'
import {
  AsynchronousJobStatus,
  SynapseClient,
  waitForAsyncResult,
} from '@sage-bionetworks/synapse-client'

// Mock the synapse-client module
vi.mock('@sage-bionetworks/synapse-client', () => {
  return {
    SynapseClient: vi.fn().mockImplementation(() => ({
      tableServicesClient: {
        postRepoV1EntityIdTableQueryAsyncStart: vi.fn(),
      },
      asynchronousJobServicesClient: {
        getRepoV1AsynchronousJobJobId: vi.fn(),
      },
    })),
    waitForAsyncResult: vi.fn(),
  }
})

const mockSynapseClient = vi.mocked(SynapseClient)
const mockWaitForAsyncResult = vi.mocked(waitForAsyncResult)

describe('extractEntityIdFromSql', () => {
  it('extracts entity ID from simple SELECT query', () => {
    expect(extractEntityIdFromSql('SELECT * FROM syn12345')).toBe('syn12345')
  })

  it('extracts entity ID case-insensitively', () => {
    expect(extractEntityIdFromSql('select * from SYN12345')).toBe('SYN12345')
  })

  it('extracts entity ID with version', () => {
    expect(extractEntityIdFromSql('SELECT * FROM syn12345.1')).toBe('syn12345')
  })

  it('extracts entity ID with WHERE clause', () => {
    expect(
      extractEntityIdFromSql("SELECT id FROM syn99999 WHERE status = 'active'"),
    ).toBe('syn99999')
  })

  it('extracts entity ID with quoted column names', () => {
    expect(extractEntityIdFromSql('SELECT "Grant Number" FROM syn12345')).toBe(
      'syn12345',
    )
  })

  it('returns null for invalid SQL', () => {
    expect(extractEntityIdFromSql('invalid sql')).toBeNull()
  })

  it('returns null for empty string', () => {
    expect(extractEntityIdFromSql('')).toBeNull()
  })
})

describe('fetchResourceIds', () => {
  const mockConfig: DetailPageConfig = {
    path: 'Explore/Studies/DetailsPage',
    sql: 'SELECT studyId FROM syn12345',
    primaryKeyColumn: 'studyId',
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('returns error when entity ID cannot be extracted', async () => {
    const config: DetailPageConfig = {
      path: 'Test',
      sql: 'invalid sql',
      primaryKeyColumn: 'id',
    }

    const result = await fetchResourceIds(config)

    expect(result.success).toBe(false)
    expect(result.error).toContain('Could not extract entity ID')
    expect(result.ids).toEqual([])
  })

  it('extracts IDs from query results', async () => {
    const mockQueryResult = {
      jobState: 'COMPLETE',
      responseBody: {
        queryResult: {
          queryResults: {
            headers: [{ name: 'studyId' }],
            rows: [
              { values: ['syn111'] },
              { values: ['syn222'] },
              { values: ['syn333'] },
            ],
          },
        },
      },
    } as AsynchronousJobStatus

    mockWaitForAsyncResult.mockResolvedValueOnce(mockQueryResult)
    // Second call returns empty to stop pagination
    mockWaitForAsyncResult.mockResolvedValueOnce({
      jobState: 'COMPLETE',
      responseBody: {
        queryResult: {
          queryResults: {
            headers: [{ name: 'studyId' }],
            rows: [],
          },
        },
      },
    } as unknown as AsynchronousJobStatus)

    const mockClient = {
      tableServicesClient: {
        postRepoV1EntityIdTableQueryAsyncStart: vi
          .fn()
          .mockResolvedValue({ token: 'job123' }),
      },
      asynchronousJobServicesClient: {
        getRepoV1AsynchronousJobJobId: vi.fn(),
      },
    }
    mockSynapseClient.mockImplementation(
      () => mockClient as unknown as SynapseClient,
    )

    const result = await fetchResourceIds(mockConfig)

    expect(result.success).toBe(true)
    expect(result.ids).toEqual(['syn111', 'syn222', 'syn333'])
  })

  it('handles pagination with multiple pages', async () => {
    const mockClient = {
      tableServicesClient: {
        postRepoV1EntityIdTableQueryAsyncStart: vi
          .fn()
          .mockResolvedValue({ token: 'job123' }),
      },
      asynchronousJobServicesClient: {
        getRepoV1AsynchronousJobJobId: vi.fn(),
      },
    }
    mockSynapseClient.mockImplementation(
      () => mockClient as unknown as SynapseClient,
    )

    // First page
    mockWaitForAsyncResult.mockResolvedValueOnce({
      jobState: 'COMPLETE',
      responseBody: {
        queryResult: {
          queryResults: {
            headers: [{ name: 'studyId' }],
            rows: [{ values: ['id1'] }, { values: ['id2'] }],
          },
        },
      },
    } as AsynchronousJobStatus)
    // Second page
    mockWaitForAsyncResult.mockResolvedValueOnce({
      jobState: 'COMPLETE',
      responseBody: {
        queryResult: {
          queryResults: {
            headers: [{ name: 'studyId' }],
            rows: [{ values: ['id3'] }],
          },
        },
      },
    } as AsynchronousJobStatus)
    // Third call returns empty (no more results)
    mockWaitForAsyncResult.mockResolvedValueOnce({
      jobState: 'COMPLETE',
      responseBody: {
        queryResult: {
          queryResults: {
            headers: [{ name: 'studyId' }],
            rows: [],
          },
        },
      },
    } as unknown as AsynchronousJobStatus)

    const result = await fetchResourceIds(mockConfig)

    expect(result.success).toBe(true)
    expect(result.ids).toEqual(['id1', 'id2', 'id3'])
    // Verify pagination happened (3 calls total)
    expect(waitForAsyncResult).toHaveBeenCalledTimes(3)
  })

  it('handles case-insensitive column matching', async () => {
    const config: DetailPageConfig = {
      path: 'Test',
      sql: 'SELECT StudyId FROM syn12345',
      primaryKeyColumn: 'studyid', // lowercase
    }

    const mockClient = {
      tableServicesClient: {
        postRepoV1EntityIdTableQueryAsyncStart: vi
          .fn()
          .mockResolvedValue({ token: 'job123' }),
      },
      asynchronousJobServicesClient: {
        getRepoV1AsynchronousJobJobId: vi.fn(),
      },
    }
    mockSynapseClient.mockImplementation(
      () => mockClient as unknown as SynapseClient,
    )
    mockWaitForAsyncResult.mockResolvedValueOnce({
      jobState: 'COMPLETE',
      responseBody: {
        queryResult: {
          queryResults: {
            headers: [{ name: 'StudyId' }], // Different case
            rows: [{ values: ['syn123'] }],
          },
        },
      },
    } as AsynchronousJobStatus)
    mockWaitForAsyncResult.mockResolvedValueOnce({
      jobState: 'COMPLETE',
      responseBody: {
        queryResult: {
          queryResults: {
            headers: [{ name: 'StudyId' }],
            rows: [],
          },
        },
      },
    } as unknown as AsynchronousJobStatus)

    const result = await fetchResourceIds(config)

    expect(result.success).toBe(true)
    expect(result.ids).toEqual(['syn123'])
  })

  it('returns error when primary key column not found', async () => {
    const mockClient = {
      tableServicesClient: {
        postRepoV1EntityIdTableQueryAsyncStart: vi
          .fn()
          .mockResolvedValue({ token: 'job123' }),
      },
      asynchronousJobServicesClient: {
        getRepoV1AsynchronousJobJobId: vi.fn(),
      },
    }
    mockSynapseClient.mockImplementation(
      () => mockClient as unknown as SynapseClient,
    )
    mockWaitForAsyncResult.mockResolvedValueOnce({
      jobState: 'COMPLETE',
      responseBody: {
        queryResult: {
          queryResults: {
            headers: [{ name: 'differentColumn' }],
            rows: [{ values: ['value'] }],
          },
        },
      },
    }) as AsynchronousJobStatus

    const result = await fetchResourceIds(mockConfig)

    expect(result.success).toBe(false)
    expect(result.error).toContain('Column "studyId" not found')
    expect(result.error).toContain('differentColumn')
  })

  it('skips null and empty values', async () => {
    const mockClient = {
      tableServicesClient: {
        postRepoV1EntityIdTableQueryAsyncStart: vi
          .fn()
          .mockResolvedValue({ token: 'job123' }),
      },
      asynchronousJobServicesClient: {
        getRepoV1AsynchronousJobJobId: vi.fn(),
      },
    }
    mockSynapseClient.mockImplementation(
      () => mockClient as unknown as SynapseClient,
    )
    mockWaitForAsyncResult.mockResolvedValueOnce({
      jobState: 'COMPLETE',
      responseBody: {
        queryResult: {
          queryResults: {
            headers: [{ name: 'studyId' }],
            rows: [
              { values: ['valid1'] },
              { values: [null] },
              { values: [''] },
              { values: ['valid2'] },
            ],
          },
        },
      },
    } as AsynchronousJobStatus)
    mockWaitForAsyncResult.mockResolvedValueOnce({
      jobState: 'COMPLETE',
      responseBody: {
        queryResult: {
          queryResults: {
            headers: [{ name: 'studyId' }],
            rows: [],
          },
        },
      },
    } as unknown as AsynchronousJobStatus)

    const result = await fetchResourceIds(mockConfig)

    expect(result.success).toBe(true)
    expect(result.ids).toEqual(['valid1', 'valid2'])
  })

  it('uses maxRowsPerPage from first response as limit for subsequent queries', async () => {
    const mockClient = {
      tableServicesClient: {
        postRepoV1EntityIdTableQueryAsyncStart: vi
          .fn()
          .mockResolvedValue({ token: 'job123' }),
      },
      asynchronousJobServicesClient: {
        getRepoV1AsynchronousJobJobId: vi.fn(),
      },
    }
    mockSynapseClient.mockImplementation(
      () => mockClient as unknown as SynapseClient,
    )

    // First page - includes maxRowsPerPage in response
    mockWaitForAsyncResult.mockResolvedValueOnce({
      jobState: 'COMPLETE',
      responseBody: {
        maxRowsPerPage: 25,
        queryResult: {
          queryResults: {
            headers: [{ name: 'studyId' }],
            rows: Array(25)
              .fill(null)
              .map((_, i) => ({ values: [`id${i}`] })),
          },
        },
      },
    } as unknown as AsynchronousJobStatus)
    // Second page - fewer rows than limit means we're done
    mockWaitForAsyncResult.mockResolvedValueOnce({
      jobState: 'COMPLETE',
      responseBody: {
        queryResult: {
          queryResults: {
            headers: [{ name: 'studyId' }],
            rows: [{ values: ['id25'] }, { values: ['id26'] }],
          },
        },
      },
    } as unknown as AsynchronousJobStatus)

    const result = await fetchResourceIds(mockConfig)

    expect(result.success).toBe(true)
    // 25 from first page + 2 from second page
    expect(result.ids).toHaveLength(27)
    // Only 2 calls - second page had fewer than limit so pagination stopped
    expect(waitForAsyncResult).toHaveBeenCalledTimes(2)

    // Verify first query includes partMask for maxRowsPerPage (0x1 | 0x8 = 0x9)
    const firstCallArgs =
      mockClient.tableServicesClient.postRepoV1EntityIdTableQueryAsyncStart.mock
        .calls[0][0]
    expect(firstCallArgs.queryBundleRequest.partMask).toBe(0x9)
    expect(firstCallArgs.queryBundleRequest.query.limit).toBeUndefined()

    // Verify second query uses limit and only requests query results (0x1)
    const secondCallArgs =
      mockClient.tableServicesClient.postRepoV1EntityIdTableQueryAsyncStart.mock
        .calls[1][0]
    expect(secondCallArgs.queryBundleRequest.partMask).toBe(0x1)
    expect(secondCallArgs.queryBundleRequest.query.limit).toBe(25)
    expect(secondCallArgs.queryBundleRequest.query.offset).toBe(25)
  })

  it('stops pagination when receiving fewer rows than limit', async () => {
    const mockClient = {
      tableServicesClient: {
        postRepoV1EntityIdTableQueryAsyncStart: vi
          .fn()
          .mockResolvedValue({ token: 'job123' }),
      },
      asynchronousJobServicesClient: {
        getRepoV1AsynchronousJobJobId: vi.fn(),
      },
    }
    mockSynapseClient.mockImplementation(
      () => mockClient as unknown as SynapseClient,
    )

    // First and only page - fewer rows than maxRowsPerPage means we're done
    mockWaitForAsyncResult.mockResolvedValueOnce({
      jobState: 'COMPLETE',
      responseBody: {
        maxRowsPerPage: 100,
        queryResult: {
          queryResults: {
            headers: [{ name: 'studyId' }],
            rows: [
              { values: ['id1'] },
              { values: ['id2'] },
              { values: ['id3'] },
            ],
          },
        },
      },
    } as unknown as AsynchronousJobStatus)

    const result = await fetchResourceIds(mockConfig)

    expect(result.success).toBe(true)
    expect(result.ids).toEqual(['id1', 'id2', 'id3'])
    // Only 1 call - first page had fewer than maxRowsPerPage (3 < 100)
    expect(waitForAsyncResult).toHaveBeenCalledTimes(1)
  })

  it('first query requests maxRowsPerPage in partMask', async () => {
    const mockClient = {
      tableServicesClient: {
        postRepoV1EntityIdTableQueryAsyncStart: vi
          .fn()
          .mockResolvedValue({ token: 'job123' }),
      },
      asynchronousJobServicesClient: {
        getRepoV1AsynchronousJobJobId: vi.fn(),
      },
    }
    mockSynapseClient.mockImplementation(
      () => mockClient as unknown as SynapseClient,
    )
    mockWaitForAsyncResult.mockResolvedValueOnce({
      jobState: 'COMPLETE',
      responseBody: {
        maxRowsPerPage: 50,
        queryResult: {
          queryResults: {
            headers: [{ name: 'studyId' }],
            rows: [],
          },
        },
      },
    } as unknown as AsynchronousJobStatus)

    await fetchResourceIds(mockConfig)

    // Verify the query was called with partMask including maxRowsPerPage (0x1 | 0x8 = 0x9)
    const callArgs =
      mockClient.tableServicesClient.postRepoV1EntityIdTableQueryAsyncStart.mock
        .calls[0][0]
    expect(callArgs.queryBundleRequest.partMask).toBe(0x9)
    expect(callArgs.queryBundleRequest.query.limit).toBeUndefined()
    expect(callArgs.queryBundleRequest.query.offset).toBe(0)
  })
})
