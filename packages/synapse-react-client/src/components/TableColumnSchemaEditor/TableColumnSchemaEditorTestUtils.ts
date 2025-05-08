import { ColumnType } from '@sage-bionetworks/synapse-types'
import { ByRoleOptions, screen } from '@testing-library/react'
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
  data: { columnName?: string; columnType?: ColumnType; maximumSize?: number },
  user: typeof userEvent | ReturnType<(typeof userEvent)['setup']> = userEvent,
) {
  if (data.columnName) {
    const nameField = (await screen.findAllByLabelText('Name'))[index]
    await user.clear(nameField)
    await user.type(nameField, data.columnName)
  }
  if (data.columnType) {
    const columnTypeField = (await screen.findAllByLabelText('Column Type'))[
      index
    ]
    await user.selectOptions(columnTypeField, data.columnType)
  }
  if (data.maximumSize) {
    const maxSizeField = (await screen.findAllByLabelText('Maximum Size'))[
      index
    ]
    await user.clear(maxSizeField)
    await user.type(maxSizeField, String(data.maximumSize))
  }
}

export async function verifyTooltipText(
  element: Element,
  text: ByRoleOptions['name'],
  user: typeof userEvent | ReturnType<(typeof userEvent)['setup']> = userEvent,
  timeout?: number,
) {
  await user.hover(element)
  await screen.findByRole('tooltip', { name: text }, { timeout })
  await user.unhover(element)
}
