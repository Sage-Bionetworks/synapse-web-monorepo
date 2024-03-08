import React from 'react'
import DefaultValueField, { DefaultValueFieldProps } from './DefaultValueField'
import { createWrapper } from '../../../testutils/TestingLibraryUtils'
import { render, screen, within } from '@testing-library/react'
import { ColumnTypeEnum } from '@sage-bionetworks/synapse-types'
import userEvent from '@testing-library/user-event'
import { formatDate } from '../../../utils/functions/DateFormatter'
import dayjs from 'dayjs'

function renderComponent<T>(props: DefaultValueFieldProps<T>) {
  return render(<DefaultValueField<T> {...props} />, {
    wrapper: createWrapper(),
  })
}

describe('DefaultValueField', () => {
  describe('STRING columnType', () => {
    it('shows an initial value', () => {
      const onChange = jest.fn()
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
      const onChange = jest.fn()
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
    const onChange = jest.fn()
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
    const onChange = jest.fn()
    renderComponent<string | undefined>({
      columnModel: {
        name: 'foo',
        columnType: ColumnTypeEnum.DATE,
        isSelected: false,
        isOriginallyDefaultColumn: false,
      },
      onChange,
      value: '2021-01-15T00:00:00.000Z',
    })

    // The actual value shown can vary based on localization
    // So we will just test for the presence of a value and successful onChange call
    const datePicker = screen.getByRole('textbox')
    expect(datePicker.getAttribute('value')).not.toBeNull()

    await userEvent.type(datePicker, '2')
    expect(onChange).toHaveBeenCalled()
  })

  it('handles a STRING_LIST column type', async () => {
    const onChange = jest.fn()
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
    const onChange = jest.fn()
    renderComponent<Array<number> | undefined>({
      columnModel: {
        name: 'foo',
        columnType: ColumnTypeEnum.DATE_LIST,
        isSelected: false,
        isOriginallyDefaultColumn: false,
      },
      onChange,
      // Default value is an array of unix timestamps (milliseconds)
      value: [
        // datetime in 2023
        1678852800000,
        // datetime in 2024
        1710475200000,
      ],
    })

    const textField = screen.getByRole('textbox')
    expect(textField).toHaveValue(
      formatDate(dayjs(1678852800000)) +
        ', ' +
        formatDate(dayjs(1710475200000)),
    )
    // Sanity check the date formatter--check that the years appear in order
    expect(textField.getAttribute('value')).toMatch(/.*2023.*2024/)

    await userEvent.click(textField)

    const multiValueDialog = await screen.findByRole('dialog')

    const itemTextFields = await within(multiValueDialog).findAllByRole(
      'textbox',
    )

    expect(itemTextFields).toHaveLength(2)
    expect(itemTextFields[0].getAttribute('value')).toMatch(/2023/)
    expect(itemTextFields[1].getAttribute('value')).toMatch(/2024/)

    await userEvent.click(screen.getByRole('button', { name: 'OK' }))

    // Saving will convert these to ISO strings
    expect(onChange).toHaveBeenCalledWith([
      dayjs(1678852800000).toISOString(),
      dayjs(1710475200000).toISOString(),
    ])
  })
})
