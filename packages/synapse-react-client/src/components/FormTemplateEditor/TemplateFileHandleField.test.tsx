import {
  BasicFileHandleUpload,
  BasicFileHandleUploadProps,
} from '@/components/file/upload/BasicFileHandleUpload'
import { MOCK_FILE_HANDLE_ID } from '@/mocks/mock_file_handle'
import { server } from '@/mocks/msw/server'
import SynapseClient from '@/synapse-client'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { BackendDestinationEnum, getEndpoint } from '@/utils/functions'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { http, HttpResponse } from 'msw'
import {
  TemplateFileHandleField,
  TemplateFileHandleFieldProps,
} from './TemplateFileHandleField'

vi.mock('@/components/file/upload/BasicFileHandleUpload', () => ({
  BasicFileHandleUpload: vi.fn(),
}))

const REPO_ENDPOINT = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)
const DOWNLOAD_URL = 'https://example.com/download/template.docx'
const UPLOADED_FILE_HANDLE_ID = '9999999'
const VALIDATION_ERROR = 'File is too large.'

vi.mocked(BasicFileHandleUpload).mockImplementation(
  (props: BasicFileHandleUploadProps) => (
    <div>
      <button
        onClick={() =>
          props.onFileUploadComplete?.(
            UPLOADED_FILE_HANDLE_ID,
            new File(['contents'], 'template.docx'),
          )
        }
      >
        Simulate upload complete
      </button>
      <button onClick={() => props.onValidationError?.(VALIDATION_ERROR)}>
        Simulate validation error
      </button>
    </div>
  ),
)

function renderField(overrides: Partial<TemplateFileHandleFieldProps> = {}) {
  const props: TemplateFileHandleFieldProps = {
    fileHandleId: undefined,
    formTemplateId: undefined,
    onChange: vi.fn(),
    ...overrides,
  }
  const result = render(<TemplateFileHandleField {...props} />, {
    wrapper: createWrapper(),
  })
  return { ...result, props }
}

// Pass-through spy: MSW serves the batch-file response; the spy records each call synchronously.
const getFilesSpy = vi.spyOn(SynapseClient, 'getFiles')

describe('TemplateFileHandleField', () => {
  beforeAll(() => server.listen())
  afterEach(() => {
    getFilesSpy.mockClear()
    server.resetHandlers()
  })
  afterAll(() => server.close())

  it('offers Upload when no file is attached', () => {
    renderField()
    expect(screen.getByText('None')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Upload' })).toBeInTheDocument()
  })

  it('reports the uploaded file handle id and closes the dialog when an upload completes', async () => {
    const user = userEvent.setup()
    const { props } = renderField()
    await user.click(screen.getByRole('button', { name: 'Upload' }))
    await user.click(
      screen.getByRole('button', { name: 'Simulate upload complete' }),
    )
    expect(props.onChange).toHaveBeenCalledWith(UPLOADED_FILE_HANDLE_ID)
    await waitFor(() =>
      expect(
        screen.queryByRole('dialog', { name: 'Upload template file' }),
      ).not.toBeInTheDocument(),
    )
  })

  it('shows the uploader validation error in the dialog', async () => {
    const user = userEvent.setup()
    renderField()
    await user.click(screen.getByRole('button', { name: 'Upload' }))
    await user.click(
      screen.getByRole('button', { name: 'Simulate validation error' }),
    )
    expect(screen.getByRole('alert')).toHaveTextContent(VALIDATION_ERROR)
  })

  it('links an unsaved template to the file handle directly, without an association', async () => {
    renderField({ fileHandleId: MOCK_FILE_HANDLE_ID })
    expect(
      await screen.findByRole('button', { name: /mock-file\.raw/ }),
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Replace' })).toBeInTheDocument()
    expect(getFilesSpy).not.toHaveBeenCalled()
  })

  it('downloads a saved template file through an association with the form template', async () => {
    renderField({ fileHandleId: MOCK_FILE_HANDLE_ID, formTemplateId: '42' })
    expect(
      await screen.findByRole('button', { name: /mock-file\.raw/ }),
    ).toBeInTheDocument()
    expect(getFilesSpy).toHaveBeenCalledTimes(1)
    expect(getFilesSpy.mock.calls[0][0].requestedFiles).toEqual([
      expect.objectContaining({
        fileHandleId: MOCK_FILE_HANDLE_ID,
        associateObjectId: '42',
      }),
    ])
  })

  it('opens the file handle download URL for an unsaved template', async () => {
    server.use(
      http.get(`${REPO_ENDPOINT}/file/v1/fileHandle/:id/url`, ({ params }) =>
        params.id === MOCK_FILE_HANDLE_ID
          ? HttpResponse.json(DOWNLOAD_URL)
          : new HttpResponse(null, { status: 404 }),
      ),
    )
    const openSpy = vi.spyOn(window, 'open').mockReturnValue(null)
    const user = userEvent.setup()
    renderField({ fileHandleId: MOCK_FILE_HANDLE_ID })
    await user.click(
      await screen.findByRole('button', { name: /mock-file\.raw/ }),
    )
    await waitFor(() =>
      expect(openSpy).toHaveBeenCalledWith(DOWNLOAD_URL, '_blank'),
    )
    openSpy.mockRestore()
  })

  it('opens the associated file download URL for a saved template', async () => {
    server.use(
      http.get(`${REPO_ENDPOINT}/file/v1/file/:id`, ({ request, params }) => {
        const url = new URL(request.url)
        return params.id === MOCK_FILE_HANDLE_ID &&
          url.searchParams.get('fileAssociateId') === '42'
          ? HttpResponse.json(DOWNLOAD_URL)
          : new HttpResponse(null, { status: 404 })
      }),
    )
    const openSpy = vi.spyOn(window, 'open').mockReturnValue(null)
    const user = userEvent.setup()
    renderField({ fileHandleId: MOCK_FILE_HANDLE_ID, formTemplateId: '42' })
    await user.click(
      await screen.findByRole('button', { name: /mock-file\.raw/ }),
    )
    await waitFor(() =>
      expect(openSpy).toHaveBeenCalledWith(DOWNLOAD_URL, '_blank'),
    )
    openSpy.mockRestore()
  })

  it('does not refetch the file when re-rendered with the same ids', async () => {
    const { rerender, props } = renderField({
      fileHandleId: MOCK_FILE_HANDLE_ID,
      formTemplateId: '42',
    })
    await screen.findByRole('button', { name: /mock-file\.raw/ })
    rerender(<TemplateFileHandleField {...props} onChange={vi.fn()} />)
    await screen.findByRole('button', { name: /mock-file\.raw/ })
    expect(getFilesSpy).toHaveBeenCalledTimes(1)
  })
})
