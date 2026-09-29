import { mockFileHandle, MOCK_FILE_HANDLE_ID } from '@/mocks/mock_file_handle'
import { server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import {
  BatchFileResult,
  FileHandleAssociateType,
  FileHandleAssociation,
} from '@sage-bionetworks/synapse-types'
import { render, screen, waitFor } from '@testing-library/react'
import { http, HttpResponse } from 'msw'
import PdfPreview, { maxPdfSize, PdfPreviewProps } from './PdfPreview'

const PRESIGNED_URL = 'https://fake-presigned-url.not-real.gov/file.pdf'
const FILE_HANDLE_BATCH_URL = `${getEndpoint(
  BackendDestinationEnum.REPO_ENDPOINT,
)}/file/v1/fileHandle/batch`

// URL.createObjectURL is shimmed in the test setup to always return this value.
const MOCK_OBJECT_URL = 'blob:mockBlobUrlConfiguredInTestSetup'

function renderComponent(props: PdfPreviewProps) {
  return render(<PdfPreview {...props} />, { wrapper: createWrapper() })
}

const mockFHA: FileHandleAssociation = {
  associateObjectId: 'syn135',
  associateObjectType: FileHandleAssociateType.FileEntity,
  fileHandleId: mockFileHandle.id,
}

describe('PDF Preview tests', () => {
  const onGetPresignedUrl = vi.fn<() => void>()

  beforeAll(() => server.listen())
  beforeEach(() => {
    onGetPresignedUrl.mockClear()
    server.use(
      http.post(FILE_HANDLE_BATCH_URL, () => {
        onGetPresignedUrl()
        const result: BatchFileResult = {
          requestedFiles: [
            {
              fileHandleId: MOCK_FILE_HANDLE_ID,
              preSignedURL: PRESIGNED_URL,
            },
          ],
        }
        return HttpResponse.json(result, { status: 200 })
      }),
      http.get(PRESIGNED_URL, () => {
        return new Response('%PDF-1.4 file contents here', {
          status: 200,
          headers: { 'Content-Type': 'application/pdf' },
        })
      }),
    )
  })
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  it('PDF is rendered', async () => {
    const { container } = renderComponent({
      fileHandle: mockFileHandle,
      fileHandleAssociation: mockFHA,
    })

    // The presigned URL is fetched into a blob so the iframe isn't pointed at a URL signed with an `attachment`
    // content disposition, which the browser would download rather than render.
    await waitFor(() => {
      const frame = container.querySelector('iframe')
      expect(frame).toBeInTheDocument()
      expect(frame).toHaveAttribute('src', MOCK_OBJECT_URL)
    })
  })

  it('PDF is not rendered if too large', async () => {
    renderComponent({
      fileHandle: { ...mockFileHandle, contentSize: maxPdfSize + 100 },
      fileHandleAssociation: mockFHA,
    })
    const alertElement = await screen.findByRole('alert')
    expect(alertElement).toBeInTheDocument()
    expect(
      screen.getByText(/The PDF preview was not shown because the file size/),
    ).toBeInTheDocument()

    // An oversized file should never be requested from the backend.
    expect(onGetPresignedUrl).not.toHaveBeenCalled()
  })

  it('An error is shown if the file data could not be fetched', async () => {
    vi.spyOn(console, 'error').mockImplementation(() => {})
    server.use(
      http.post(FILE_HANDLE_BATCH_URL, () => {
        return HttpResponse.json(
          { reason: 'You do not have permission to access this file.' },
          { status: 403 },
        )
      }),
    )

    renderComponent({
      fileHandle: mockFileHandle,
      fileHandleAssociation: mockFHA,
    })

    const alertElement = await screen.findByRole('alert')
    expect(alertElement).toHaveTextContent(
      /The PDF preview could not be loaded/,
    )
  })
})
