import { mockUserProfileData } from '@/mocks/user/mock_user_profile'
import SynapseClient from '@/synapse-client/index'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { render } from '@testing-library/react'
import EntityForm, { EntityFormProps } from './EntityForm'

const targetFolderId = 'syn9988882982'

vi.spyOn(SynapseClient, 'getUserProfile').mockResolvedValue(mockUserProfileData)
vi.spyOn(SynapseClient, 'lookupChildEntity').mockResolvedValue({
  id: targetFolderId,
})

vi.spyOn(SynapseClient, 'getFileHandleContent').mockResolvedValue('{}')

describe('EntityForm', () => {
  const parentContainerId: string = 'syn20355732'
  const formSchemaEntityId: string = 'syn20184776'
  const formUiSchemaEntityId: string = 'syn20184771'
  const initFormData: boolean = false
  const synIdCallback = vi.fn()
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
