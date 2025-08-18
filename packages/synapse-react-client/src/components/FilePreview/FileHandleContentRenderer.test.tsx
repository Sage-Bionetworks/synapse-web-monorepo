import mockFileEntityData from '@/mocks/entity/mockFileEntity'
import { MOCK_FILE_HANDLE_ID } from '@/mocks/mock_file_handle'
import { server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import { MB } from '@/utils/SynapseConstants'
import {
  BatchFileResult,
  FileHandle,
  FileHandleAssociateType,
  FileHandleAssociation,
} from '@sage-bionetworks/synapse-types'
import { render, screen, waitFor, within } from '@testing-library/react'
import { http, HttpResponse } from 'msw'
import FileHandleContentRenderer, {
  FileHandleContentRendererProps,
} from './FileHandleContentRenderer'
import * as HtmlPreviewModule from './HtmlPreview/HtmlPreview'
import { PreviewRendererType } from './PreviewRendererType'

vi.spyOn(HtmlPreviewModule, 'default').mockImplementation(() => {
  return <div data-testid="HtmlPreview"></div>
})

function renderComponent(props: FileHandleContentRendererProps) {
  return render(<FileHandleContentRenderer {...props} />, {
    wrapper: createWrapper({
      // Need to wrap in an error boundary
      withErrorBoundary: true,
      isInExperimentalMode: false,
      utcTime: false,
      downloadCartPageUrl: '/DownloadCart:0',
    }),
  })
}

const PRESIGNED_URL = 'https://fake-presigned-url.not-real.gov/file'

describe('FileHandleContentRenderer tests', () => {
  beforeAll(() => server.listen())
  beforeEach(() => {
    server.use(
      // Handler to return the presigned URL for the requested file
      http.post(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}/file/v1/fileHandle/batch`,
        () => {
          const result: BatchFileResult = {
            requestedFiles: [
              {
                fileHandleId: MOCK_FILE_HANDLE_ID,
                preSignedURL: PRESIGNED_URL,
              },
            ],
          }
          return HttpResponse.json(result, { status: 200 })
        },
      ),
      // Handler for the presigned URL to return the file contents
      http.get(PRESIGNED_URL, () => {
        return new Response('file contents here', {
          status: 200,
          headers: { 'Content-Type': 'text/plain' },
        })
      }),
    )
  })
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  it('Will render HTML content', async () => {
    const fileHandle: FileHandle = {
      id: MOCK_FILE_HANDLE_ID,
      fileName: 'test.html',
      contentSize: 100,
      contentType: 'text/html',
      etag: '',
      createdBy: '',
      createdOn: '',
      concreteType: 'org.sagebionetworks.repo.model.file.S3FileHandle',
      storageLocationId: 0,
      modifiedOn: '',
      status: 'AVAILABLE',
    }
    const fileHandleAssociation: FileHandleAssociation = {
      fileHandleId: fileHandle.id,
      associateObjectId: mockFileEntityData.id,
      associateObjectType: FileHandleAssociateType.FileEntity,
    }
    renderComponent({
      fileHandle,
      fileHandleAssociation,
      previewType: PreviewRendererType.HTML,
    })

    await screen.findByTestId('HtmlPreview')
  })
  it('Throws an error if the file content size is > 30MB', async () => {
    vi.spyOn(console, 'error').mockImplementation(() => {})
    const fileSize = 100 * MB
    const fileHandle: FileHandle = {
      id: MOCK_FILE_HANDLE_ID,
      fileName: 'test.html',
      contentSize: fileSize,
      contentType: 'text/html',
      etag: '',
      createdBy: '',
      createdOn: '',
      concreteType: 'org.sagebionetworks.repo.model.file.S3FileHandle',
      storageLocationId: 0,
      modifiedOn: '',
      status: 'AVAILABLE',
    }
    const fileHandleAssociation: FileHandleAssociation = {
      fileHandleId: fileHandle.id,
      associateObjectId: mockFileEntityData.id,
      associateObjectType: FileHandleAssociateType.FileEntity,
    }

    renderComponent({
      fileHandle,
      fileHandleAssociation,
      previewType: PreviewRendererType.HTML,
    })
    const errorBoundary = await screen.findByRole('alert')
    await within(errorBoundary).findByText(
      /File size \(100.00 MB\) exceeds the maximum size that can be downloaded \(30.00 MB\)/,
    )
  })

  it('Renders nothing if the preview type is NONE', async () => {
    const fileHandle: FileHandle = {
      id: MOCK_FILE_HANDLE_ID,
      fileName: 'test.html',
      contentSize: 100,
      contentType: 'text/html',
      etag: '',
      createdBy: '',
      createdOn: '',
      concreteType: 'org.sagebionetworks.repo.model.file.S3FileHandle',
      storageLocationId: 0,
      modifiedOn: '',
      status: 'AVAILABLE',
    }
    const fileHandleAssociation: FileHandleAssociation = {
      fileHandleId: fileHandle.id,
      associateObjectId: mockFileEntityData.id,
      associateObjectType: FileHandleAssociateType.FileEntity,
    }

    const { container } = renderComponent({
      fileHandle,
      fileHandleAssociation,
      previewType: PreviewRendererType.NONE, // !
    })

    await waitFor(() => {
      expect(container).toBeEmptyDOMElement()
    })
  })
  it('Renders nothing for unsupported render types', async () => {
    vi.spyOn(console, 'warn').mockImplementation(() => {})
    const fileHandle: FileHandle = {
      id: MOCK_FILE_HANDLE_ID,
      fileName: 'test.html',
      contentSize: 100,
      contentType: 'text/html',
      etag: '',
      createdBy: '',
      createdOn: '',
      concreteType: 'org.sagebionetworks.repo.model.file.S3FileHandle',
      storageLocationId: 0,
      modifiedOn: '',
      status: 'AVAILABLE',
    }
    const fileHandleAssociation: FileHandleAssociation = {
      fileHandleId: fileHandle.id,
      associateObjectId: mockFileEntityData.id,
      associateObjectType: FileHandleAssociateType.FileEntity,
    }

    const { container } = renderComponent({
      fileHandle,
      fileHandleAssociation,
      previewType: PreviewRendererType.IMAGE, // !
    })

    await waitFor(() => {
      expect(container).toBeEmptyDOMElement()
    })

    expect(console.warn).toHaveBeenCalledWith(
      'Rendering a preview of type IMAGE is not supported in Portals',
    )
  })
})
