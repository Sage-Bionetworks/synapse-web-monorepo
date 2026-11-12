import { mockFileHandle } from '@/mocks/mock_file_handle'
import { server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { FILE_HANDLE_BATCH } from '@/utils/APIConstants'
import { BackendDestinationEnum, getEndpoint } from '@/utils/functions'
import {
  BatchFileResult,
  FileHandleAssociateType,
} from '@sage-bionetworks/synapse-types'
import { render, screen } from '@testing-library/react'
import { http, HttpResponse } from 'msw'
import { FileHandleLink } from './FileHandleLink'

describe('FileHandleLink', () => {
  it('renders a text link by default', () => {
    render(
      <FileHandleLink
        creatorFileHandleId="1234"
        displayValue="report.pdf"
        showDownloadIcon={false}
      />,
      { wrapper: createWrapper() },
    )

    const link = screen.getByRole('button', { name: 'report.pdf' })
    expect(link).not.toHaveClass('MuiButton-root')
  })

  it('renders an MUI button of the given variant', () => {
    render(
      <FileHandleLink
        creatorFileHandleId="1234"
        displayValue="Download Template"
        buttonVariant="outlined"
        showDownloadIcon
      />,
      { wrapper: createWrapper() },
    )

    expect(
      screen.getByRole('button', { name: 'Download Template' }),
    ).toHaveClass('MuiButton-root', 'MuiButton-outlined')
  })

  it('shows the looked-up file name on a button when no display value is given', async () => {
    server.use(
      http.post(
        `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${FILE_HANDLE_BATCH}`,
        () => {
          const result: BatchFileResult = {
            requestedFiles: [
              {
                fileHandleId: '1234',
                fileHandle: { ...mockFileHandle, fileName: 'template.docx' },
              },
            ],
          }
          return HttpResponse.json(result)
        },
      ),
    )
    render(
      <FileHandleLink
        fileHandleAssociation={{
          fileHandleId: '1234',
          associateObjectType: FileHandleAssociateType.FormTemplateAttachment,
          associateObjectId: '42',
        }}
        buttonVariant="outlined"
        showDownloadIcon
      />,
      { wrapper: createWrapper() },
    )

    expect(
      await screen.findByRole('button', { name: /template\.docx/ }),
    ).toHaveClass('MuiButton-outlined')
  })

  it('falls back to the file handle ID when the file batch returns no entry for the file', async () => {
    let batchRequested = false
    server.use(
      http.post(
        `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${FILE_HANDLE_BATCH}`,
        () => {
          batchRequested = true
          const result: BatchFileResult = { requestedFiles: [] }
          return HttpResponse.json(result)
        },
      ),
    )
    render(
      <FileHandleLink
        fileHandleAssociation={{
          fileHandleId: '1234',
          associateObjectType:
            FileHandleAssociateType.DataAccessRequestAttachment,
          associateObjectId: '9100',
        }}
        showDownloadIcon={false}
      />,
      { wrapper: createWrapper() },
    )

    await vi.waitFor(() => expect(batchRequested).toBe(true))
    expect(
      await screen.findByRole('button', { name: '1234' }),
    ).toBeInTheDocument()
  })
})
