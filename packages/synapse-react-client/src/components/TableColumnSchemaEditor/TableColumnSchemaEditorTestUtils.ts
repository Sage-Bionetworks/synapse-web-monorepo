import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

export async function addColumnModelToForm(
  columnName?: string,
  user: typeof userEvent | ReturnType<(typeof userEvent)['setup']> = userEvent,
) {
  const addColumnButton = await screen.findByRole('button', {
    name: 'Add Column',
  })
  await user.click(addColumnButton)
  if (columnName != null) {
    const nameFields = await screen.findAllByLabelText('Name')
    await user.type(nameFields[nameFields.length - 1], columnName)
  }
}

export async function modifyColumnModelInForm(
  index: number,
  data: { columnName: string },
  user: typeof userEvent | ReturnType<(typeof userEvent)['setup']> = userEvent,
) {
  if (data.columnName) {
    const nameField = (await screen.findAllByLabelText('Name'))[index]
    await user.clear(nameField)
    await user.type(nameField, data.columnName)
  }
}
