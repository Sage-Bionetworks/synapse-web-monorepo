import { uploadFile } from '@/synapse-client/SynapseClient'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FileUpload } from './FileUpload'

vi.mock('@/synapse-client/SynapseClient', () => ({
  uploadFile: vi.fn(),
}))

describe('FileUpload', () => {
  it('uploads the same file again when it is chosen again, so a failed upload can be retried', async () => {
    vi.mocked(uploadFile).mockRejectedValue(new Error('Network error'))
    const onComplete = vi.fn()
    const user = userEvent.setup()
    render(<FileUpload onComplete={onComplete} />, {
      wrapper: createWrapper(),
    })
    const input = screen.getByTestId<HTMLInputElement>('file-input')
    const file = new File(['data'], 'agreement.pdf')

    await user.upload(input, file)
    await waitFor(() => expect(onComplete).toHaveBeenCalledTimes(1))
    await user.upload(input, file)

    await waitFor(() => expect(onComplete).toHaveBeenCalledTimes(2))
    expect(uploadFile).toHaveBeenCalledTimes(2)
  })
})
