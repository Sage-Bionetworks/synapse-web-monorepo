import { mockFileHandle } from '@/mocks/mock_file_handle'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { BatchFileResult, FileResult } from '@sage-bionetworks/synapse-types'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SynapseClient, SynapseContextType } from '../../index'
import TermsAndConditionsItem, {
  tcItem,
  TermsAndConditionsItemProps,
} from './TermsAndConditionsItem'

function renderComponent(
  itemProps: TermsAndConditionsItemProps,
  wrapperProps?: SynapseContextType,
) {
  return render(<TermsAndConditionsItem {...itemProps} />, {
    wrapper: createWrapper(wrapperProps),
  })
}

describe('Terms and Conditions Item: basic functionality', () => {
  const mockIconSvg = '<svg>definition</svg>'
  const mockItem: tcItem = {
    iconFileHandleId: '123',
    label: 'Item 1',
    description: 'Item 1 desc',
  }
  const mockFileResult: FileResult = {
    fileHandleId: '123',
    fileHandle: mockFileHandle,
  }
  const mockBatchFileResult: BatchFileResult = {
    requestedFiles: [mockFileResult],
  }

  const onChange = vi.fn()

  beforeEach(() => {
    vi.clearAllMocks()
    vi.spyOn(SynapseClient, 'getFiles').mockResolvedValue(mockBatchFileResult)
    vi.spyOn(SynapseClient, 'getFileHandleContent').mockResolvedValue(
      mockIconSvg,
    )
  })
  it('render component without crashing', () => {
    const container = renderComponent({
      id: 1,
      enabled: true,
      checked: false,
      item: mockItem,
      onChange: onChange,
      termsAndConditionsTableID: 'syn51718002',
    })

    expect(container).toBeDefined()
  })

  it('should populate the right content', () => {
    renderComponent({
      id: 1,
      enabled: true,
      checked: false,
      item: mockItem,
      onChange: onChange,
      termsAndConditionsTableID: 'syn51718002',
    })

    screen.getByLabelText(mockItem.label)
  })

  it('should display show more link when there is description', () => {
    renderComponent({
      id: 1,
      enabled: true,
      checked: false,
      item: mockItem,
      onChange: onChange,
      termsAndConditionsTableID: 'syn51718002',
    })

    screen.getByText('Show More')
  })

  it('should display show less link when show more link is clicked', async () => {
    renderComponent({
      id: 1,
      enabled: true,
      checked: false,
      item: mockItem,
      onChange: onChange,
      termsAndConditionsTableID: 'syn51718002',
    })

    await userEvent.click(screen.getByText('Show More'))
    await userEvent.click(screen.getByText('Show Less'))
    screen.getByText('Show More')
  })

  it('should call event handler when checkbox is checked', async () => {
    renderComponent({
      id: 1,
      enabled: true,
      checked: false,
      item: mockItem,
      onChange: onChange,
      termsAndConditionsTableID: 'syn51718002',
    })

    await userEvent.click(screen.getByLabelText(mockItem.label))
    expect(onChange).toHaveBeenCalledTimes(1)
  })
})
