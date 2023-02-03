import React from 'react'
import { render, screen } from '@testing-library/react'
import {
  MetadataTable,
  MetadataTableProps,
} from '../../../../../src/lib/containers/entity/metadata/MetadataTable'
import { createWrapper } from '../../../../testutils/TestingLibraryUtils'
import { SynapseContextType } from '../../../../../src/lib/utils/SynapseContext'
import mockFileEntityData from '../../../../../mocks/entity/mockFileEntity'
import { server } from '../../../../../mocks/msw/server'
import { mockUserProfileData } from '../../../../../mocks/user/mock_user_profile'
import mockProjectEntityData from '../../../../../mocks/entity/mockProject'

const { id: MOCK_FILE_ENTITY_ID } = mockFileEntityData
const { id: MOCK_PROJECT_ID, bundle: mockProjectEntityBundle } =
  mockProjectEntityData
const defaultProps: MetadataTableProps = {
  entityId: MOCK_PROJECT_ID,
}

function renderComponent(
  props?: MetadataTableProps,
  wrapperProps?: SynapseContextType,
) {
  render(<MetadataTable {...(props ?? defaultProps)} />, {
    wrapper: createWrapper(wrapperProps),
  })
}

describe('MetadataTable tests', () => {
  // Handle the msw lifecycle:
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  it('Renders all rows for a project', async () => {
    renderComponent()
    await screen.findByText('Name')
    await screen.findByText(mockProjectEntityBundle.entity!.name)
    await screen.findByText('Type')
    await screen.findByText('Project')
    await screen.findByText('Synapse ID')
    await screen.findByText(mockProjectEntityBundle.entity!.id!)
    /* Not checking the values of dates, they are passed through a formatter. */
    await screen.findByText('Last Modified By')
    await screen.findByText('Created By')
    expect(
      (await screen.findAllByText(`@${mockUserProfileData.userName}`)).length,
    ).toBe(2)
  })

  it('Renders storage location for a file', async () => {
    renderComponent({ entityId: MOCK_FILE_ENTITY_ID })
    await screen.findByText('Storage')
    await screen.findByText('Synapse Storage')
  })
})
