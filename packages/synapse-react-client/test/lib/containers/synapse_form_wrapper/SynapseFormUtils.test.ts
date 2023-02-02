import { getFileEntityData } from '../../../../src/lib/containers/synapse_form_wrapper/SynapseFormUtils'
import { SynapseClient } from '../../../../src/lib/utils'
import mockFileEntityData from '../../../../mocks/entity/mockFileEntity'
import { mockFormSchema } from '../../../../mocks/mock_drug_tool_data'
import { mockFileHandle } from '../../../../mocks/mock_file_handle'
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
