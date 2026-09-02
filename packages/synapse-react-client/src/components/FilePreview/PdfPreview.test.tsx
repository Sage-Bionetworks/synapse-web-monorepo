import { mockFileHandle } from '@/mocks/mock_file_handle'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import {
  FileHandleAssociateType,
  FileHandleAssociation,
} from '@sage-bionetworks/synapse-types'
import { render, screen } from '@testing-library/react'
import PdfPreview, { maxPdfSize, PdfPreviewProps } from './PdfPreview'

vi.mock('@/utils/hooks/useFetchBlobUrl', () => ({
  useFetchBlobUrl: vi.fn().mockReturnValue({
    blobUrl: 'blob:mockBlobUrl',
    error: undefined,
  }),
}))

function renderComponent(props: PdfPreviewProps) {
  return render(<PdfPreview {...props} />, { wrapper: createWrapper() })
}

const mockFHA: FileHandleAssociation = {
  associateObjectId: 'syn135',
  associateObjectType: FileHandleAssociateType.FileEntity,
  fileHandleId: mockFileHandle.id,
}

describe('PDF Preview tests', () => {
  it('PDF is rendered', () => {
    const { container } = renderComponent({
      fileHandle: mockFileHandle,
      fileHandleAssociation: mockFHA,
    })

    const frame = container.querySelector('iframe')
    expect(frame).toBeInTheDocument()
    expect(frame).toHaveAttribute('src', 'blob:mockBlobUrl')
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
  })
})
