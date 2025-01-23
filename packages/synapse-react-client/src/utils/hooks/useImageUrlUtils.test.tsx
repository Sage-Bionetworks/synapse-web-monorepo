import { useImageUrl } from './useImageUrlUtils'
import { useGetStablePresignedUrl } from '../../synapse-queries'
import { FileHandleAssociateType } from '@sage-bionetworks/synapse-types'

jest.mock('../../synapse-queries', () => ({
  useGetStablePresignedUrl: jest.fn(),
}))

const mockUseGetStablePresignedUrl = useGetStablePresignedUrl as jest.Mock

describe('useImageUrl tests', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('returns the dataUrl', () => {
    const fileId = 'file123'
    const entityId = 'entity123'
    const response = { dataUrl: 'https://somewebsite.com/imageofacat' }

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

  it('returns undefined if no dataUrl', () => {
    const fileId = 'file123'
    const entityId = 'entity123'

    mockUseGetStablePresignedUrl.mockReturnValue({})

    const result = useImageUrl(fileId, entityId)
    expect(result).toBeUndefined()
  })
})
