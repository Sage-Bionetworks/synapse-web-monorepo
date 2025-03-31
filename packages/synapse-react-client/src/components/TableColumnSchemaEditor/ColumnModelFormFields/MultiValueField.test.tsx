import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { ColumnTypeEnum } from '@sage-bionetworks/synapse-types'
import { act, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { JSONSchema7Definition } from 'json-schema'
import JSONArrayEditorModal from '../../JSONArrayEditor/JSONArrayEditorModal'
import { getJsonSchemaItemDefinitionForColumnType } from '../TableColumnSchemaEditorUtils'
import MultiValueField, { MultiValueFieldProps } from './MultiValueField'

const stringDefinition: JSONSchema7Definition = {
  type: 'string',
}
jest.mock('../TableColumnSchemaEditorUtils', () => {
  return {
    getJsonSchemaItemDefinitionForColumnType: jest.fn(),
  }
})

jest.mock('../../JSONArrayEditor/JSONArrayEditorModal', () => {
  return {
    __esModule: true,
    default: jest.fn(),
  }
})

const mockGetJsonSchemaDefinition = jest.mocked(
  getJsonSchemaItemDefinitionForColumnType,
)
const mockJsonArrayEditorModal = jest.mocked(JSONArrayEditorModal)
mockJsonArrayEditorModal.mockImplementation(() => (
  <div data-testid={'JSONArrayEditorModal'} />
))

function renderComponent(props: MultiValueFieldProps) {
  return render(<MultiValueField {...props} />, {
    wrapper: createWrapper(),
  })
}

describe('MultiValueField', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })
  test('interactions and calls to dependencies', async () => {
    mockGetJsonSchemaDefinition.mockReturnValue(stringDefinition)
    const onChange = jest.fn()
    renderComponent({
      columnType: ColumnTypeEnum.STRING,
      onChange,
      value: ['foo', 'bar'],
    })

    await screen.findByTestId('JSONArrayEditorModal')
    const textField = await screen.findByRole('textbox')
    expect(textField).toHaveValue('foo, bar')

    expect(mockGetJsonSchemaDefinition).toHaveBeenCalledWith(
      ColumnTypeEnum.STRING,
    )
    await waitFor(() =>
      expect(mockJsonArrayEditorModal).toHaveBeenCalledWith(
        expect.objectContaining({
          arrayItemDefinition: stringDefinition,
          value: ['foo', 'bar'],
          isShowingModal: false,
        }),
        expect.anything(),
      ),
    )

    // Click the text field and the modal will be shown
    await userEvent.click(textField)

    await waitFor(() =>
      expect(mockJsonArrayEditorModal).toHaveBeenCalledWith(
        expect.objectContaining({
          isShowingModal: true,
        }),
        expect.anything(),
      ),
    )

    // Invoke the modal's onCancel and the modal will be hidden
    act(() => {
      mockJsonArrayEditorModal.mock.lastCall![0].onCancel()
    })
    await waitFor(() =>
      expect(mockJsonArrayEditorModal).toHaveBeenCalledWith(
        expect.objectContaining({
          isShowingModal: false,
        }),
        expect.anything(),
      ),
    )

    // Show the modal one more time so we can call onChange
    await userEvent.click(textField)

    await waitFor(() =>
      expect(mockJsonArrayEditorModal).toHaveBeenCalledWith(
        expect.objectContaining({
          isShowingModal: true,
        }),
        expect.anything(),
      ),
    )

    // Invoke onConfirm. Verify the callback is called and the modal is hidden
    act(() => {
      mockJsonArrayEditorModal.mock.lastCall![0].onConfirm(['baz', 'qux'])
    })
    await waitFor(() => {
      expect(mockJsonArrayEditorModal).toHaveBeenCalledWith(
        expect.objectContaining({
          isShowingModal: false,
        }),
        expect.anything(),
      )

      expect(onChange).toHaveBeenCalledWith(['baz', 'qux'])
    })
  })
})
