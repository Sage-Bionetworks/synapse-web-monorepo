import userEvent from '@testing-library/user-event'
import { screen, waitFor, within } from '@testing-library/react'
import { REMOVE_BUTTON_LABEL } from './ResourceAccessItem'

export function confirmItem(
  row: HTMLElement,
  principalName: string,
  accessTypeLabel: string,
) {
  expect(within(row).getByRole('link')).toHaveTextContent(principalName)
  const editorCombobox = within(row).queryByRole('combobox')
  if (editorCombobox) {
    expect(editorCombobox).toHaveTextContent(accessTypeLabel)
  } else {
    within(row).getByText(accessTypeLabel)
  }
}

export async function removeItem(
  row: HTMLElement,
  user: ReturnType<(typeof userEvent)['setup']>,
  verifyRemoval = true,
) {
  const removeButton = within(row).getByRole('button', {
    name: REMOVE_BUTTON_LABEL,
  })
  await user.click(removeButton)
  if (verifyRemoval) {
    await waitFor(() => {
      expect(removeButton).not.toBeInTheDocument()
      expect(row).not.toBeInTheDocument()
    })
  }
}

export async function updatePermissionLevel(
  row: HTMLElement,
  user: ReturnType<(typeof userEvent)['setup']>,
  updatedPermissionLevelLabel: string,
) {
  const menu = within(row).getByRole('combobox')
  await user.click(menu)

  const option = screen.getByRole('option', {
    name: updatedPermissionLevelLabel,
  })
  await user.click(option)

  await waitFor(() => {
    expect(option).not.toBeInTheDocument()
  })
}

export async function addUserToAcl(
  user: ReturnType<(typeof userEvent)['setup']>,
  userName: string,
) {
  const userInput = await screen.findByRole('combobox', {
    name: 'Add a user or team',
  })
  await user.type(userInput, userName)

  const option = await screen.findByText(new RegExp(`\\(@${userName}\\)`))
  await user.click(option)

  await waitFor(() => expect(option).not.toBeInTheDocument())
  const rows = screen.getAllByRole('row')
  return rows[rows.length - 1]
}
