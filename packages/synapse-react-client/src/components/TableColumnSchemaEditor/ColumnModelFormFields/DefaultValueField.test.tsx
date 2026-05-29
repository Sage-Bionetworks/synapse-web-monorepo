import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { formatDate } from '@/utils/functions/DateFormatter'
import { ColumnTypeEnum } from '@sage-bionetworks/synapse-types'
import { act, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import dayjs, { isDayjs } from 'dayjs'
import DateTimePicker from '../../DateTimePicker/DateTimePicker'
import DefaultValueField, { DefaultValueFieldProps } from './DefaultValueField'

const MOCK_DATETIME_PICKER_TEST_ID = 'MockDateTimePicker'

// Mock the DateTimePicker because how the date renders can vary based on time zone and localization, making it hard to test
vi.mock('../../DateTimePicker/DateTimePicker', () => ({
  __esModule: true,
  default: vi.fn(() => <div data-testid={MOCK_DATETIME_PICKER_TEST_ID} />),
}))

const mockDateTimePicker = vi.mocked(DateTimePicker)

function renderComponent<T>(props: DefaultValueFieldProps<T>) {
  return render(<DefaultValueField<T> {...props} />, {
    wrapper: createWrapper(),
  })
}

describe('DefaultValueField', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })
  describe('STRING columnType', () => {
    it('shows an initial value', () => {
      const onChange = vi.fn()
      renderComponent<string>({
        columnModel: {
          name: 'foo',
          columnType: ColumnTypeEnum.STRING,
          isSelected: false,
          isOriginallyDefaultColumn: false,
        },
        onChange,
        value: 'bar',
      })

      const textField = screen.getByRole('textbox')
      expect(textField).toHaveValue('bar')
      expect(textField.getAttribute('type')).toBe('text')
    })
    it('calls onChange', async () => {
      const onChange = vi.fn()
      renderComponent<string>({
        columnModel: {
          name: 'foo',
          columnType: ColumnTypeEnum.STRING,
          isSelected: false,
          isOriginallyDefaultColumn: false,
        },
        onChange,
        value: undefined,
      })

      const textField = screen.getByRole('textbox')
      expect(textField.getAttribute('type')).toBe('text')
      await userEvent.type(textField, 'baz')

      expect(onChange).toHaveBeenLastCalledWith('baz')
    })
  })

  it('shows a dropdown select for BOOLEAN columnType', async () => {
    const onChange = vi.fn()
    renderComponent<boolean | undefined>({
      columnModel: {
        name: 'foo',
        columnType: ColumnTypeEnum.BOOLEAN,
        isSelected: false,
        isOriginallyDefaultColumn: false,
      },
      onChange,
      value: undefined,
    })

    const booleanField = screen.getByRole('combobox')
    expect(booleanField.getAttribute('value')).toBeNull()
    await userEvent.click(booleanField)
    await userEvent.click(await screen.findByRole('option', { name: 'true' }))
    expect(onChange).toHaveBeenCalledWith('true')

    await userEvent.click(booleanField)
    await userEvent.click(await screen.findByRole('option', { name: 'false' }))
    expect(onChange).toHaveBeenCalledWith('false')

    await userEvent.click(booleanField)
    await userEvent.click(await screen.findByRole('option', { name: '' }))
    expect(onChange).toHaveBeenCalledWith(undefined)
  })

  it('shows a date picker for DATE column type', async () => {
    const onChange = vi.fn()
    renderComponent<string | undefined>({
      columnModel: {
        name: 'foo',
        columnType: ColumnTypeEnum.DATE,
        isSelected: false,
        isOriginallyDefaultColumn: false,
      },
      onChange,
      value: '1710388800000',
    })

    await screen.findByTestId(MOCK_DATETIME_PICKER_TEST_ID)
    const mockDateTimePickerPassedProps = mockDateTimePicker.mock.lastCall![0]
    // Verify that we pass the correct Dayjs value to the mock
    expect(isDayjs(mockDateTimePickerPassedProps.value)).toBe(true)
    expect(mockDateTimePickerPassedProps.value!.valueOf()).toBe(1710388800000)

    // Simulate changing the date
    act(() => {
      mockDateTimePickerPassedProps.onChange!(dayjs(1710399900000), {
        validationError: null,
      })
    })

    // Verify that `onChange` gets a millisecond timestamp encoded in a string
    expect(onChange).toHaveBeenLastCalledWith('1710399900000')
  })

  it('handles a STRING_LIST column type', async () => {
    const onChange = vi.fn()
    renderComponent<Array<string> | undefined>({
      columnModel: {
        name: 'foo',
        columnType: ColumnTypeEnum.STRING_LIST,
        isSelected: false,
        isOriginallyDefaultColumn: false,
      },
      onChange,
      value: ['bar', 'baz'],
    })

    const textField = screen.getByRole('textbox')
    expect(textField.getAttribute('value')).toBe('bar, baz')

    await userEvent.click(textField)

    const multiValueDialog = await screen.findByRole('dialog')

    const itemTextFields = await within(multiValueDialog).findAllByRole(
      'textbox',
    )
    expect(itemTextFields).toHaveLength(2)
    expect(itemTextFields[0]).toHaveValue('bar')
    expect(itemTextFields[1]).toHaveValue('baz')

    await userEvent.clear(itemTextFields[0])
    await userEvent.type(itemTextFields[0], 'qux')
    await userEvent.click(screen.getByRole('button', { name: 'OK' }))
    expect(onChange).toHaveBeenCalledWith(['qux', 'baz'])
  })

  it('handles a DATE_LIST column type', async () => {
    const onChange = vi.fn()
    // datetime in 2023
    const DATE_ONE = 1678852800000
    // datetime in 2024
    const DATE_TWO = 1710475200000
    renderComponent<Array<number> | undefined>({
      columnModel: {
        name: 'foo',
        columnType: ColumnTypeEnum.DATE_LIST,
        isSelected: false,
        isOriginallyDefaultColumn: false,
      },
      onChange,
      // Default value is an array of unix timestamps (milliseconds)
      value: [DATE_ONE, DATE_TWO],
    })

    const textField = screen.getByRole('textbox')
    expect(textField).toHaveValue(
      formatDate(dayjs(DATE_ONE)) + ', ' + formatDate(dayjs(DATE_TWO)),
    )
    // Sanity check the date formatter--check that the years appear in order
    expect(textField.getAttribute('value')).toMatch(/.*2023.*2024/)

    await userEvent.click(textField)

    const multiValueDialog = await screen.findByRole('dialog')

    const datePickerFields = await within(multiValueDialog).findAllByTestId(
      MOCK_DATETIME_PICKER_TEST_ID,
    )
    expect(datePickerFields).toHaveLength(2)

    expect(mockDateTimePicker).toHaveBeenRenderedWithProps(
      expect.objectContaining({
        value: dayjs(DATE_ONE),
      }),
    )
    expect(mockDateTimePicker).toHaveBeenRenderedWithProps(
      expect.objectContaining({
        value: dayjs(DATE_TWO),
      }),
    )

    await userEvent.click(screen.getByRole('button', { name: 'OK' }))

    // Saving should invoke onChange, which should return the original type, millisecond timestamps
    expect(onChange).toHaveBeenCalledWith([DATE_ONE, DATE_TWO])
  })
})
