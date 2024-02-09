import {
  EntityBundle,
  FileEntity,
  S3FileHandle,
} from '@sage-bionetworks/synapse-types'
import { render, screen } from '@testing-library/react'
import React from 'react'
import mockFileEntityData from '../../../mocks/entity/mockFileEntity'
import mockProjectEntityData from '../../../mocks/entity/mockProject'
import { mockFileHandle } from '../../../mocks/mock_file_handle'
import { mockExternalS3UploadDestination } from '../../../mocks/mock_upload_destination'
import { server } from '../../../mocks/msw/server'
import { mockUserProfileData } from '../../../mocks/user/mock_user_profile'
import { createWrapper } from '../../../testutils/TestingLibraryUtils'
import { SynapseContextType } from '../../../utils/context/SynapseContext'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../../utils/functions/getEndpoint'
import { MetadataTable, MetadataTableProps } from './MetadataTable'
import { getEntityBundleHandler } from '../../../mocks/msw/handlers/entityHandlers'

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
    await screen.findByText(mockProjectEntityBundle.entity.name)
    await screen.findByText('Type')
    await screen.findByText('Project')
    await screen.findByText('Synapse ID')
    await screen.findByText(mockProjectEntityBundle.entity.id!)
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

  it('Renders storage location bucket and baseKey for an external file', async () => {
    const bucket = mockExternalS3UploadDestination.bucket
    const baseKey = mockExternalS3UploadDestination.baseKey
    const bundle: EntityBundle = {
      ...mockFileEntityData.bundle,
      entity: {
        ...mockFileEntityData.entity,
        dataFileHandleId: mockFileHandle.id,
      } as FileEntity,
      fileHandles: [
        {
          ...mockFileHandle,
          bucketName: bucket,
          storageLocationId: mockExternalS3UploadDestination.storageLocationId,
        } as S3FileHandle,
      ],
    }
    server.use(
      getEntityBundleHandler(
        getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
        bundle,
      ),
    )

    renderComponent({ entityId: MOCK_FILE_ENTITY_ID })
    await screen.findByText('Storage')
    await screen.findByText(`s3://${bucket}/${baseKey}`)
  })
})
