import { mockFileHandle } from '@/mocks/mock_file_handle'
import SynapseClient from '@/synapse-client'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import {
  FileHandleAssociateType,
  FileHandleAssociation,
} from '@sage-bionetworks/synapse-types'
import { render, screen, waitFor } from '@testing-library/react'
import PdfPreview, { maxPdfSize, PdfPreviewProps } from './PdfPreview'

function renderComponent(props: PdfPreviewProps) {
  return render(<PdfPreview {...props} />, { wrapper: createWrapper() })
}

const mockFHA: FileHandleAssociation = {
  associateObjectId: 'syn135',
  associateObjectType: FileHandleAssociateType.FileEntity,
  fileHandleId: mockFileHandle.id,
}

const expectedEncodedFhaUrl = encodeURIComponent(
  SynapseClient.getPortalFileHandleServletUrl(
    mockFHA.fileHandleId,
    mockFHA.associateObjectId,
    mockFHA.associateObjectType,
  ),
)
const expectedIFrameSource = `${getEndpoint(
  BackendDestinationEnum.PORTAL_ENDPOINT,
)}pdf.js/web/viewer.html?file=${expectedEncodedFhaUrl}`

describe('PDF Preview tests', () => {
  it('PDF is rendered', async () => {
    const { container } = renderComponent({
      fileHandle: mockFileHandle,
      fileHandleAssociation: mockFHA,
    })

    let frame: HTMLIFrameElement | null = null
    await waitFor(() => {
      frame = container.querySelector('iframe')
      expect(frame).toBeDefined()
      expect(frame).toHaveAttribute('src', expectedIFrameSource)
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
  })
})
