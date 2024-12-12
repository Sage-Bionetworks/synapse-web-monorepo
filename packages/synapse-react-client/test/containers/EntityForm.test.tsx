import { render, screen } from '@testing-library/react'
import EntityForm, {
  EntityFormProps,
} from '../../src/components/EntityForm/EntityForm'
import { createWrapper } from '../../src/testutils/TestingLibraryUtils'
import { mockFileEntity } from '../../src/mocks/entity/mockEntity'
import { mockUserProfileData } from '../../src/mocks/user/mock_user_profile'

describe('EntityForm', () => {
  // Test setup
  const SynapseClient = require('../../src/synapse-client/SynapseClient')
  SynapseClient.getUserProfile = jest.fn(() =>
    Promise.resolve(mockUserProfileData),
  )
  const targetFolderId = 'syn9988882982'
  SynapseClient.lookupChildEntity = jest.fn(() =>
    Promise.resolve({ id: targetFolderId }),
  )
  SynapseClient.getFileResult = jest.fn(() =>
    Promise.resolve({ presignedUrl: 'presigned-url' }),
  )

  SynapseClient.getFileHandleContent = jest.fn(() => Promise.resolve('{}'))

  SynapseClient.getEntity = jest.fn(() => Promise.resolve(mockFileEntity))
  const parentContainerId: string = 'syn20355732'
  const formSchemaEntityId: string = 'syn20184776'
  const formUiSchemaEntityId: string = 'syn20184771'
  const initFormData: boolean = false
  const synIdCallback = jest.fn()
  const props: EntityFormProps = {
    parentContainerId,
    formSchemaEntityId,
    formUiSchemaEntityId,
    initFormData,
    synIdCallback,
  }

  it('renders Form', () => {
    const { container } = render(<EntityForm {...props} />, {
      wrapper: createWrapper(),
    })
    const form = container.querySelector('form')
    expect(form).toBeDefined()
  })
})
