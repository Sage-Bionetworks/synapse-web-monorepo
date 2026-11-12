import SynapseClient from '@/synapse-client'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { UploadDocumentField } from './UploadDocumentField'

describe('UploadDocumentField', () => {
  it('shows the progress of the upload until it completes', async () => {
    let reportProgress: (progress: {
      value: number
      total: number
    }) => void = () => {}
    let finishUpload: (file: {
      fileHandleId: string
      fileName: string
    }) => void = () => {}
    vi.spyOn(SynapseClient, 'uploadFile').mockImplementation(
      (_token, _name, _file, _location, _type, onProgress) => {
        reportProgress = onProgress!
        return new Promise(resolve => {
          finishUpload = resolve
        })
      },
    )
    const uploadCallback = vi.fn()
    const user = userEvent.setup()
    render(
      <UploadDocumentField
        id="doc"
        documentName="Agreement"
        uploadCallback={uploadCallback}
      />,
      { wrapper: createWrapper() },
    )

    await user.upload(
      screen.getByTestId('file-input'),
      new File(['contents'], 'agreement.pdf'),
    )
    await screen.findByText('Uploading...')
    expect(screen.queryByRole('progressbar')).not.toBeInTheDocument()

    reportProgress({ value: 25, total: 100 })
    const progressBar = await screen.findByRole('progressbar', {
      name: 'Upload progress',
    })
    expect(progressBar).toHaveAttribute('aria-valuenow', '25')

    finishUpload({ fileHandleId: '1', fileName: 'agreement.pdf' })
    await vi.waitFor(() =>
      expect(screen.queryByRole('progressbar')).not.toBeInTheDocument(),
    )
    expect(uploadCallback).toHaveBeenCalledWith({
      success: true,
      resp: { fileHandleId: '1', fileName: 'agreement.pdf' },
    })
  })
})
