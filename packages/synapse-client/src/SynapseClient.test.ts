import { http, HttpResponse } from 'msw'
import { ErrorResponse } from './generated/index'
import { FileEntity } from './generated/models/FileEntity'
import { server } from './mocks/node'
import { SynapseClient } from './SynapseClient'
import { synapseFetchWithRetry } from './util/synapseClientFetch'
import { SynapseClientError } from './util/SynapseClientError'

vi.mock('./util/synapseClientFetch', async importOriginal => {
  const original = await importOriginal<
    typeof import('./util/synapseClientFetch')
  >()
  return {
    ...original,
    synapseFetchWithRetry: vi
      .fn()
      .mockImplementation(original.synapseFetchWithRetry),
  }
})

const synapseFetchWithRetrySpy = vi.mocked(synapseFetchWithRetry)

describe('SynapseClient', () => {
  it('Should use synapseFetchWithRetry as the default fetchApi', async () => {
    // Set up mock service worker
    const expectedResponse: FileEntity = {
      id: 'syn123',
      concreteType: 'org.sagebionetworks.repo.model.FileEntity',
    }
    server.use(
      http.get('https://repo-prod.prod.sagebase.org/repo/v1/entity/:id', () => {
        return HttpResponse.json(expectedResponse)
      }),
    )

    const client = new SynapseClient()
    const actual = await client.entityServicesClient.getRepoV1EntityId({
      id: 'syn123',
    })

    expect(actual).toEqual(expectedResponse)

    // verify fetchApi is used
    expect(synapseFetchWithRetrySpy).toHaveBeenCalled()
  })

  it('allows overriding the base path', async () => {
    const mockBasePath = 'https://repo-mock.mock.sagebase.org'
    // Set up mock service worker
    const expectedResponse: FileEntity = {
      id: 'syn456',
      concreteType: 'org.sagebionetworks.repo.model.FileEntity',
    }
    server.use(
      http.get(`${mockBasePath}/repo/v1/entity/:id`, () => {
        return HttpResponse.json(expectedResponse)
      }),
    )

    const client = new SynapseClient({ basePath: mockBasePath })
    const actual = await client.entityServicesClient.getRepoV1EntityId({
      id: 'syn456',
    })

    expect(actual).toEqual(expectedResponse)

    // verify fetchApi is used
    expect(synapseFetchWithRetrySpy).toHaveBeenCalled()
  })

  it('Should throw SynapseClientError on a 400-level error', async () => {
    const response: ErrorResponse = {
      reason: 'Not found!',
      concreteType: 'org.sagebionetworks.repo.model.ErrorResponse',
    }
    server.use(
      http.get('https://repo-prod.prod.sagebase.org/repo/v1/entity/:id', () => {
        return HttpResponse.json(response, { status: 404 })
      }),
    )
    const client = new SynapseClient()

    let error: SynapseClientError = new SynapseClientError(500, '', '')
    try {
      await client.entityServicesClient.getRepoV1EntityId({
        id: 'syn123',
      })
    } catch (e) {
      error = e as SynapseClientError
    }

    expect(error).toBeInstanceOf(SynapseClientError)
    expect(error.status).toBe(404)
    expect(error.reason).toBe('Not found!')
    expect(error.errorResponse).toEqual(response)
    expect(error.url).toBe(
      'https://repo-prod.prod.sagebase.org/repo/v1/entity/syn123',
    )
  })
})
