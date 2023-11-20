import React from 'react'
import DefaultValueField, { DefaultValueFieldProps } from './DefaultValueField'
import { createWrapper } from '../../../testutils/TestingLibraryUtils'
import { render, screen } from '@testing-library/react'
import { ColumnTypeEnum } from '@sage-bionetworks/synapse-types'
import userEvent from '@testing-library/user-event'

function renderComponent<T>(props: DefaultValueFieldProps<T>) {
  return render(<DefaultValueField<T> {...props} />, {
    wrapper: createWrapper(),
  })
}

describe('DefaultValueField', () => {
  it('shows a text field for STRING columnType', async () => {
    const onChange = jest.fn()
    renderComponent<string>({
      columnType: ColumnTypeEnum.STRING,
      onChange,
      value: 'foo',
    })

    const textField = screen.getByRole('textbox')
    expect(textField).toHaveValue('foo')
    expect(textField.getAttribute('type')).toBe('text')
    await userEvent.click(textField)
    await userEvent.paste('bar')

    expect(onChange).toHaveBeenCalledWith('foobar')
  })

  it('shows a dropdown select for BOOLEAN columnType', async () => {
    const onChange = jest.fn()
    renderComponent<boolean | undefined>({
      columnType: ColumnTypeEnum.BOOLEAN,
      onChange,
      value: undefined,
    })

    const booleanField = screen.getByRole('combobox')
    expect(booleanField.getAttribute('value')).toBeNull()
    await userEvent.click(booleanField)
    await userEvent.click(await screen.findByRole('option', { name: 'true' }))
    expect(onChange).toHaveBeenCalledWith(true)

    await userEvent.click(booleanField)
    await userEvent.click(await screen.findByRole('option', { name: 'false' }))
    expect(onChange).toHaveBeenCalledWith(false)

    await userEvent.click(booleanField)
    await userEvent.click(await screen.findByRole('option', { name: '' }))
    expect(onChange).toHaveBeenCalledWith(undefined)
  })
})
