import { StablePresignedUrl, useGetStablePresignedUrl } from '@/synapse-queries'
import {
  getUseQueryIdleMock,
  getUseQuerySuccessMock,
} from '@/testutils/ReactQueryMockUtils'
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
    const response: StablePresignedUrl = {
      dataUrl: 'https://somewebsite.com/imageofacat',
      queryResult: getUseQuerySuccessMock(
        new Blob(['image data'], { type: 'image/jpeg' }),
      ),
    }

    mockUseGetStablePresignedUrl.mockReturnValue(response)

    const result = useImageUrl(fileId, entityId)

    expect(result).toBe('https://somewebsite.com/imageofacat')
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

    mockUseGetStablePresignedUrl.mockReturnValue({
      dataUrl: undefined,
      queryResult: getUseQueryIdleMock(),
    })

    const result = useImageUrl(fileId, entityId)
    expect(result).toBeUndefined()
  })

  it('returns undefined if fileId is not provided', () => {
    const fileId = ''
    const entityId = 'entity123'

    const result = useImageUrl(fileId, entityId)
    expect(result).toBeUndefined()

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
