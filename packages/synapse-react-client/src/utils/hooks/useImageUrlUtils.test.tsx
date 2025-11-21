import { useGetStablePresignedUrl } from '@/synapse-queries'
import { getUseQueryMock } from '@/testutils/ReactQueryMockUtils'
import { renderHook } from '@testing-library/react'
import { SynapseClientError } from '@sage-bionetworks/synapse-client'
import { FileHandleAssociateType } from '@sage-bionetworks/synapse-types'
import { useImageUrl } from './useImageUrlUtils'

vi.mock('../../synapse-queries', () => ({
  useGetStablePresignedUrl: vi.fn(),
}))

const mockUseGetStablePresignedUrl = vi.mocked(useGetStablePresignedUrl)

describe('useImageUrl tests', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  it('returns dataUrl when fileId and entityId are provided and dataUrl is available', () => {
    const fileId = 'file123'
    const entityId = 'entity123'
    const expectedDataUrl = 'https://somewebsite.com/imageofacat'
    const { mock: mockQueryResult } = getUseQueryMock<
      Blob,
      SynapseClientError
    >()

    mockUseGetStablePresignedUrl.mockImplementation(() => ({
      dataUrl: expectedDataUrl,
      queryResult: mockQueryResult(),
    }))

    const { result } = renderHook(() => useImageUrl(fileId, entityId))

    expect(result.current).toBe(expectedDataUrl)
    expect(mockUseGetStablePresignedUrl).toHaveBeenCalledWith(
      {
        associateObjectId: entityId,
        associateObjectType: FileHandleAssociateType.TableEntity,
        fileHandleId: fileId,
      },
      false,
      { enabled: true },
    )
  })

  it('returns undefined if no dataUrl is available', () => {
    const fileId = 'file123'
    const entityId = 'entity123'

    const { mock: mockQueryResult } = getUseQueryMock<
      Blob,
      SynapseClientError
    >()

    mockUseGetStablePresignedUrl.mockImplementation(() => ({
      dataUrl: undefined,
      queryResult: mockQueryResult(),
    }))

    const { result } = renderHook(() => useImageUrl(fileId, entityId))
    expect(result.current).toBeUndefined()
  })

  it('returns undefined if fileId is not provided', () => {
    const fileId = ''
    const entityId = 'entity123'

    const { mock: mockQueryResult } = getUseQueryMock<
      Blob,
      SynapseClientError
    >()

    mockUseGetStablePresignedUrl.mockImplementation(() => ({
      dataUrl: undefined,
      queryResult: mockQueryResult(),
    }))

    const { result } = renderHook(() => useImageUrl(fileId, entityId))
    expect(result.current).toBeUndefined()

    expect(mockUseGetStablePresignedUrl).toHaveBeenCalledWith(
      {
        associateObjectId: entityId,
        associateObjectType: FileHandleAssociateType.TableEntity,
        fileHandleId: '',
      },
      false,
      { enabled: false },
    )
  })
})
