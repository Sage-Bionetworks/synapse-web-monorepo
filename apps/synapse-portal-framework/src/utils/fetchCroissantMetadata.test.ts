import { createServer, type Server } from 'node:http'
import type { AddressInfo } from 'node:net'
import {
  afterAll,
  afterEach,
  beforeAll,
  describe,
  expect,
  it,
  vi,
} from 'vitest'
import {
  CROISSANT_FETCH_TIMEOUT_MS,
  fetchCroissantMetadata,
  preloadAllCroissantMetadata,
} from './fetchCroissantMetadata'

const { mockWaitForAsyncResult } = vi.hoisted(() => ({
  mockWaitForAsyncResult: vi.fn(),
}))

vi.mock('@sage-bionetworks/synapse-client', function () {
  return {
    SynapseClient: vi.fn().mockImplementation(function () {
      return {
        tableServicesClient: {
          postRepoV1EntityIdTableQueryAsyncStart: vi
            .fn()
            .mockResolvedValue({ token: 'job-token' }),
        },
        asynchronousJobServicesClient: {
          getRepoV1AsynchronousJobJobId: vi.fn(),
        },
      }
    }),
    waitForAsyncResult: mockWaitForAsyncResult,
  }
})

const RESPONSIVE_FILE = { name: 'Responsive dataset' }

describe('preloadAllCroissantMetadata', () => {
  let server: Server
  let baseUrl: string

  beforeAll(async () => {
    server = createServer((request, response) => {
      // Never respond, like a stalled S3 request
      if (request.url === '/stalled.json') return
      response.setHeader('Content-Type', 'application/json')
      response.end(JSON.stringify(RESPONSIVE_FILE))
    })
    await new Promise<void>(resolve => server.listen(0, '127.0.0.1', resolve))
    baseUrl = `http://127.0.0.1:${(server.address() as AddressInfo).port}`
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  afterAll(() => {
    server.closeAllConnections()
    server.close()
  })

  it('abandons a stalled file instead of waiting for it', async () => {
    mockWaitForAsyncResult.mockResolvedValue({
      responseBody: {
        queryResult: {
          queryResults: {
            headers: [
              { name: 'dataset' },
              { name: 'croissant_file_s3_object' },
            ],
            rows: [
              { values: ['syn1', `${baseUrl}/responsive.json`] },
              { values: ['syn2', `${baseUrl}/stalled.json`] },
            ],
          },
        },
      },
    })
    // Shorten the timeout so the stalled request gives up within the test's own timeout
    const realTimeout = AbortSignal.timeout.bind(AbortSignal)
    const timeoutSpy = vi
      .spyOn(AbortSignal, 'timeout')
      .mockImplementation(() => realTimeout(250))

    await preloadAllCroissantMetadata()

    expect(timeoutSpy).toHaveBeenCalledWith(CROISSANT_FETCH_TIMEOUT_MS)
    await expect(fetchCroissantMetadata('syn1')).resolves.toEqual(
      RESPONSIVE_FILE,
    )
    await expect(fetchCroissantMetadata('syn2')).resolves.toBeNull()
  })
})
