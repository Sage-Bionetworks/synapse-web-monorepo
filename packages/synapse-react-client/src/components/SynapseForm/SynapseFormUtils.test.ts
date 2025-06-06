import mockFileEntityData from '@/mocks/entity/mockFileEntity'
import { mockFormSchema } from '@/mocks/mock_drug_tool_data'
import { mockFileHandle } from '@/mocks/mock_file_handle'
import SynapseClient from '@/synapse-client'
import { getFileEntityData } from './SynapseFormUtils'

const mockFileEntity = mockFileEntityData.entity

const token: string = '123444'

describe('SynapseFormUtils', () => {
  test('getFileEntityData', async () => {
    vi.spyOn(SynapseClient, 'getEntity').mockResolvedValue(mockFileEntity)
    vi.spyOn(SynapseClient, 'getFileResult').mockResolvedValue({
      fileHandleId: mockFileHandle.id,
      fileHandle: mockFileHandle,
    })
    vi.spyOn(SynapseClient, 'getFileHandleContent').mockResolvedValue(
      JSON.stringify(mockFormSchema),
    )

    const result = await getFileEntityData(token, '123444')
    expect(result).toEqual({ content: mockFormSchema, version: 3 })
  })
})
