import { getFileEntityData } from '../../../src/components/SynapseForm/SynapseFormUtils'
import SynapseClient from '../../../src/synapse-client'
import mockFileEntityData from '../../../src/mocks/entity/mockFileEntity'
import { mockFormSchema } from '../../../src/mocks/mock_drug_tool_data'
import { mockFileHandle } from '../../../src/mocks/mock_file_handle'
const mockFileEntity = mockFileEntityData.entity

const token: string = '123444'

describe('SynapseFormUtils', () => {
  test('getFileEntityData', async () => {
    jest.spyOn(SynapseClient, 'getEntity').mockResolvedValue(mockFileEntity)
    jest.spyOn(SynapseClient, 'getFileResult').mockResolvedValue(mockFileHandle)
    jest
      .spyOn(SynapseClient, 'getFileHandleContent')
      .mockResolvedValue(JSON.stringify(mockFormSchema))

    const result = await getFileEntityData(token, '123444')
    expect(result).toEqual({ content: mockFormSchema, version: 3 })
  })
})
