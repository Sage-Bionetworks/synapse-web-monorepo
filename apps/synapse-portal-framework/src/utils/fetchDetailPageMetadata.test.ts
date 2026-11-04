import { beforeEach, describe, expect, it, vi } from 'vitest'
import {
  type DetailPageMetadataConfig,
  fetchDetailPageMetadata,
  preloadDetailPageMetadata,
} from './fetchDetailPageMetadata'

const { mockQueryAsyncStart, mockWaitForAsyncResult } = vi.hoisted(() => ({
  mockQueryAsyncStart: vi.fn(),
  mockWaitForAsyncResult: vi.fn(),
}))

vi.mock('@sage-bionetworks/synapse-client', function () {
  return {
    SynapseClient: vi.fn().mockImplementation(function () {
      return {
        tableServicesClient: {
          postRepoV1EntityIdTableQueryAsyncStart: mockQueryAsyncStart,
        },
        asynchronousJobServicesClient: {
          getRepoV1AsynchronousJobJobId: vi.fn(),
        },
      }
    }),
    waitForAsyncResult: mockWaitForAsyncResult,
  }
})

// The metadata cache is process-wide, so each test uses its own table to keep cache entries independent.
function configForTable(entityId: string): DetailPageMetadataConfig {
  return {
    sql: `SELECT * FROM ${entityId}`,
    titleColumn: 'title',
    descriptionColumn: 'description',
    paramName: 'id',
  }
}

describe('fetchDetailPageMetadata', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockQueryAsyncStart.mockResolvedValue({ token: 'job-token' })
    mockWaitForAsyncResult.mockResolvedValue({
      responseBody: {
        maxRowsPerPage: 100,
        queryResult: {
          queryResults: {
            headers: [
              { name: 'id' },
              { name: 'title' },
              { name: 'description' },
            ],
            rows: [{ values: ['syn1', 'Title 1', 'Description 1'] }],
          },
        },
      },
    })
  })

  it('queries Synapse for a record that was not preloaded', async () => {
    const metadata = await fetchDetailPageMetadata(
      configForTable('syn100'),
      'syn1',
    )

    expect(metadata).toEqual({ title: 'Title 1', description: 'Description 1' })
    expect(mockQueryAsyncStart).toHaveBeenCalledOnce()
  })

  it('serves preloaded records without querying Synapse again', async () => {
    const config = configForTable('syn200')
    await preloadDetailPageMetadata(config)
    mockQueryAsyncStart.mockClear()

    const metadata = await fetchDetailPageMetadata(config, 'syn1')

    expect(metadata).toEqual({ title: 'Title 1', description: 'Description 1' })
    expect(mockQueryAsyncStart).not.toHaveBeenCalled()
  })

  it('serves records preloaded by a separately loaded copy of the module', async () => {
    // During an SSG build the preload runs in the react-router.config.ts module graph, while route loaders run
    // in the bundled server build, so each side loads its own copy of this module.
    const config = configForTable('syn300')
    const configCopy = await import('./fetchDetailPageMetadata')
    await configCopy.preloadDetailPageMetadata(config)
    mockQueryAsyncStart.mockClear()

    vi.resetModules()
    const loaderCopy = await import('./fetchDetailPageMetadata')
    expect(loaderCopy.fetchDetailPageMetadata).not.toBe(
      configCopy.fetchDetailPageMetadata,
    )

    const metadata = await loaderCopy.fetchDetailPageMetadata(config, 'syn1')

    expect(metadata).toEqual({ title: 'Title 1', description: 'Description 1' })
    expect(mockQueryAsyncStart).not.toHaveBeenCalled()
  })
})
