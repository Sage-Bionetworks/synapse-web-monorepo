import { render, screen, within } from '@testing-library/react'
import React from 'react'
import FileEntityPreview, {
  FileEntityPreviewProps,
} from '../../../../../src/lib/containers/FilePreview/FileEntityPreview'
import * as FileHandleContentRendererModule from '../../../../../src/lib/containers/FilePreview/FileHandleContentRenderer'
import { PreviewRendererType } from '../../../../../src/lib/containers/FilePreview/PreviewRendererType'
import { createWrapper } from '../../../../testutils/TestingLibraryUtils'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../../../../src/lib/utils/functions/getEndpoint'
import {
  BatchFileResult,
  EntityBundle,
  FileHandleAssociateType,
  FileHandleAssociation,
  S3FileHandle,
} from '../../../../../src/lib/utils/synapseTypes'
import mockFileEntityData from '../../../../../mocks/entity/mockFileEntity'
import { MOCK_FILE_HANDLE_ID } from '../../../../../mocks/mock_file_handle'
import { rest, server } from '../../../../../mocks/msw/server'
import mockDatasetData from '../../../../../mocks/entity/mockDataset'
import { SynapseContextType } from '../../../../../src/lib/utils/SynapseContext'
import { MOCK_CONTEXT_VALUE } from '../../../../../mocks/MockSynapseContext'

jest
  .spyOn(FileHandleContentRendererModule, 'default')
  .mockImplementation(() => {
    return <div data-testid="FileHandleContentRenderer"></div>
  })

const defaultWrapperProps: SynapseContextType = {
  ...MOCK_CONTEXT_VALUE,
  // Component is always wrapped in an error boundary
  withErrorBoundary: true,
}

function renderComponent(
  props: FileEntityPreviewProps,
  wrapperProps: SynapseContextType = defaultWrapperProps,
) {
  return render(<FileEntityPreview {...props} />, {
    wrapper: createWrapper(wrapperProps),
  })
}

const PRESIGNED_URL = 'https://fake-presigned-url.not-real.gov/file'

const MOCK_PREVIEW_FILE_HANDLE_ID = '1234'

const htmlFileHandle: S3FileHandle = {
  id: MOCK_FILE_HANDLE_ID,
  fileName: 'test.html',
  contentSize: 100,
  contentType: 'text/html',
  etag: '',
  createdBy: '',
  createdOn: '',
  concreteType: 'org.sagebionetworks.repo.model.file.S3FileHandle',
  storageLocationId: 0,
  isPreview: false,
}

const zipFileHandle: S3FileHandle = {
  id: MOCK_FILE_HANDLE_ID,
  fileName: 'test.zip',
  contentSize: 100,
  contentType: 'application/zip',
  etag: '',
  createdBy: '',
  createdOn: '',
  concreteType: 'org.sagebionetworks.repo.model.file.S3FileHandle',
  storageLocationId: 0,
  isPreview: false,
}

const previewFileHandle: S3FileHandle = {
  id: MOCK_PREVIEW_FILE_HANDLE_ID,
  fileName: 'test_preview.csv',
  contentSize: 100,
  contentType: 'text/csv',
  etag: '',
  createdBy: '',
  createdOn: '',
  concreteType: 'org.sagebionetworks.repo.model.file.S3FileHandle',
  storageLocationId: 0,
  isPreview: true,
}

const entityBundle: EntityBundle = {
  ...mockFileEntityData.bundle!,
  entity: {
    ...mockFileEntityData.entity,
    dataFileHandleId: MOCK_FILE_HANDLE_ID,
  },
  fileHandles: [htmlFileHandle, previewFileHandle],
}

describe('FileHandleContentRenderer tests', () => {
  beforeAll(() => server.listen())
  beforeEach(() => {
    server.use(
      // Handler to return the presigned URL for the requested file
      rest.post(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}/file/v1/fileHandle/batch`,
        (req, res, ctx) => {
          const result: BatchFileResult = {
            requestedFiles: [
              {
                fileHandleId: MOCK_FILE_HANDLE_ID,
                preSignedURL: PRESIGNED_URL,
              },
            ],
          }
          return res(ctx.status(200), ctx.json(result))
        },
      ),
      // Handler for the presigned URL to return the file contents
      rest.get(PRESIGNED_URL, (req, res, ctx) => {
        return res(ctx.status(200), ctx.text('file contents here'))
      }),
    )
  })
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  it('Will render the original file handle HTML content', async () => {
    const fileHandleAssociation: FileHandleAssociation = {
      fileHandleId: htmlFileHandle.id,
      associateObjectId: mockFileEntityData.id,
      associateObjectType: FileHandleAssociateType.FileEntity,
    }
    renderComponent({
      bundle: entityBundle,
    })

    await screen.findByTestId('FileHandleContentRenderer')

    expect(FileHandleContentRendererModule.default).toHaveBeenCalledWith(
      expect.objectContaining({
        fileHandleAssociation,
        previewType: PreviewRendererType.HTML,
      }),
      expect.anything(),
    )
  })

  it('Throws an error if the entity is not a FileEntity', async () => {
    jest.spyOn(console, 'error').mockImplementation(() => {})

    renderComponent({
      bundle: mockDatasetData.bundle,
    })
    const errorBoundary = await screen.findByRole('alert')
    await within(errorBoundary).findByText(/Entity syn\d+ is not a FileEntity/)
  })

  it('Will render nothing if the entity cannot be previewed', async () => {
    renderComponent(
      {
        bundle: { ...entityBundle, fileHandles: [] },
      },
      { ...defaultWrapperProps },
    )
    const alert = await screen.findByRole('alert')
    within(alert).getByText(
      'Could not render a preview for entity: ' + mockFileEntityData.id,
    )
  })

  it('Will render the preview file handle for ZIP content', async () => {
    /**
     * This case captures the scenario where the dataFileHandle cannot be rendered, but Synapse created a preview
     * that we can render
     */
    const fileHandleAssociation: FileHandleAssociation = {
      fileHandleId: MOCK_PREVIEW_FILE_HANDLE_ID,
      associateObjectId: mockFileEntityData.id,
      associateObjectType: FileHandleAssociateType.FileEntity,
    }
    renderComponent({
      bundle: {
        ...entityBundle,
        fileHandles: [zipFileHandle, previewFileHandle],
      },
    })

    await screen.findByTestId('FileHandleContentRenderer')

    expect(FileHandleContentRendererModule.default).toHaveBeenCalledWith(
      expect.objectContaining({
        fileHandleAssociation,
        previewType: PreviewRendererType.ZIP,
      }),
      expect.anything(),
    )
  })

  it('Prompts to sign in if the user is not signed in and the data file handle is not surfaced', async () => {
    renderComponent(
      {
        bundle: {
          ...entityBundle,
          fileHandles: [],
        },
      },
      {
        ...defaultWrapperProps,
        accessToken: undefined, // unauthenticated
      },
    )

    await screen.findByText('Sign In')
  })
})
