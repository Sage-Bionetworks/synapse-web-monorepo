import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MOCK_CONTEXT_VALUE } from '../../mocks/MockSynapseContext'
import SynapseClient from '../../synapse-client'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import ModalDownload, { ModalDownloadProps } from './ModalDownload'
import {
  csvOption,
  tsvOption,
  writeHeaderOption,
} from './ModalDownload.FormSchema'

const renderComponent = (props: ModalDownloadProps) => {
  return render(<ModalDownload {...props} />, {
    wrapper: createWrapper(),
  })
}

describe('it performs the expected functionality', () => {
  const mockClose = jest.fn()
  const mockGetDownloadFromTableRequest = jest
    .spyOn(SynapseClient, 'getDownloadFromTableRequest')
    .mockResolvedValue({
      tableId: 'syn123',
      resultsFileHandleId: 'hello',
      etag: '00000000-0000-0000-0000-000000000000',
      concreteType: '',
      headers: [],
    })
  const mockGetFile = jest
    .spyOn(SynapseClient, 'getFileHandleByIdURL')
    .mockResolvedValue('testurl')
  const props: ModalDownloadProps = {
    queryBundleRequest: {
      concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
      entityId: 'syn',
      partMask: 1,
      query: {
        sql: 'syn',
      },
    },
    onClose: mockClose,
  }

  test('generates a csv file', async () => {
    renderComponent(props)
    // step 1 - select csv option
    const csvOptionElement = screen.getByLabelText(csvOption)
    await userEvent.click(csvOptionElement)

    await userEvent.click(screen.getByRole('button', { name: 'Next' }))

    // step 2 - verify UI has download button showing
    const downloadButton = await screen.findByRole('button', {
      name: 'Download',
    })
    expect(mockGetDownloadFromTableRequest).toHaveBeenCalledWith(
      expect.objectContaining({
        csvTableDescriptor: { separator: ',' },
        writeHeader: true,
        includeRowIdAndRowVersion: true,
      }),
      MOCK_CONTEXT_VALUE.accessToken,
    )

    await userEvent.click(downloadButton)
    await waitFor(() => expect(mockGetFile).toHaveBeenCalled())
    await waitFor(() => expect(mockClose).toHaveBeenCalled())
  })

  test('generates a tsv file without header', async () => {
    renderComponent(props)

    // step 1 - select tsv option
    const tsvOptionElement = screen.getByLabelText(tsvOption)
    await userEvent.click(tsvOptionElement)

    // step 2 - de-select write header option
    const writeHeaderOptionElement =
      screen.getByLabelText<HTMLInputElement>(writeHeaderOption)
    expect(writeHeaderOptionElement.checked).toBe(true)
    await userEvent.click(writeHeaderOptionElement)
    expect(writeHeaderOptionElement.checked).toBe(false)
    await userEvent.click(screen.getByRole('button', { name: 'Next' }))

    // step 3 - verify UI has download button showing
    const downloadButton = await screen.findByRole('button', {
      name: 'Download',
    })
    expect(mockGetDownloadFromTableRequest).toHaveBeenCalledWith(
      expect.objectContaining({
        csvTableDescriptor: { separator: '\t' },
        writeHeader: false,
        includeRowIdAndRowVersion: true,
      }),
      MOCK_CONTEXT_VALUE.accessToken,
    )
    await userEvent.click(downloadButton)
    await waitFor(() => expect(mockGetFile).toHaveBeenCalled())
    await waitFor(() => expect(mockClose).toHaveBeenCalled())
  })
})
