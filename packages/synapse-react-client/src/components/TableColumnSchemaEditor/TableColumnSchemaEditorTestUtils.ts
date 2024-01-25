import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { UserEvent } from '@testing-library/user-event/dist/types/setup/setup'

export async function addColumnModelToForm(
  columnName?: string,
  user: UserEvent | typeof userEvent = userEvent,
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
  user: UserEvent | typeof userEvent = userEvent,
) {
  if (data.columnName) {
    const nameField = (await screen.findAllByLabelText('Name'))[index]
    await user.clear(nameField)
    await user.type(nameField, data.columnName)
  }
}
