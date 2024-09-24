import { SynapseClient } from './SynapseClient'
import { fetchResponseWithExponentialTimeout } from './util/fetchWithExponentialTimeout'
import { SynapseClientError } from './util/SynapseClientError'

vi.mock('./util/fetchWithExponentialTimeout', () => {
  return { fetchResponseWithExponentialTimeout: vi.fn() }
})
const mockFetchResponseWithExponentialTimeout = vi.mocked(
  fetchResponseWithExponentialTimeout,
)

describe('SynapseClient', () => {
  it('Should set fetchWithExponentialTimeout as the default fetchApi', async () => {
    mockFetchResponseWithExponentialTimeout.mockResolvedValue({
      status: 200,
      json: vi.fn().mockResolvedValue({
        id: '123',
        concreteType: 'org.sagebionetworks.repo.model.FileEntity',
      }),
    } as unknown as Response)
    const client = new SynapseClient()
    await client.entityServicesClient.getRepoV1EntityId({
      id: '123',
    })
    expect(mockFetchResponseWithExponentialTimeout).toHaveBeenCalled()
  })
  it('Should re-throw SynapseClientError thrown by fetchWithExponentialTimeout', async () => {
    const error = new SynapseClientError(404, 'Not found!', 'some-url')
    mockFetchResponseWithExponentialTimeout.mockRejectedValue(error)
    const client = new SynapseClient()
    await expect(
      client.entityServicesClient.getRepoV1EntityId({ id: '123' }),
    ).rejects.toThrow(error)
  })
})
