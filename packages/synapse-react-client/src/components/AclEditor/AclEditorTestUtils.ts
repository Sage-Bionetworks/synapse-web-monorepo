import userEvent from '@testing-library/user-event'
import { screen, waitFor, within } from '@testing-library/react'
import { REMOVE_BUTTON_LABEL } from './ResourceAccessItem'
import {
  AUTHENTICATED_GROUP_DISPLAY_TEXT,
  PUBLIC_GROUP_DISPLAY_TEXT,
} from '../TeamBadge'
import {
  ADD_PRINCIPAL_TO_ACL_COMBOBOX_LABEL,
  ADD_PUBLIC_PRINCIPALS_BUTTON_TEXT,
} from './AclEditor'

/**
 * Find a row in the ACL editor that contains the specified principal name.
 * @param rows
 * @param principalName
 */
export function queryForRowWithPrincipalName(
  rows: HTMLElement[],
  principalName: string,
) {
  return rows.find(row => {
    return within(row).queryByText(principalName, { exact: false })
  })
}

/**
 * Verify that a row in the ACL editor contains the expected principal name and access type.
 * @param rows
 * @param principalName
 * @param accessTypeLabel
 */
export async function confirmItemViaQuery(
  rows: HTMLElement[],
  principalName: string,
  accessTypeLabel: string,
) {
  let row: HTMLElement | undefined
  try {
    await waitFor(() => {
      row = queryForRowWithPrincipalName(rows, principalName)!
      expect(row).toBeInTheDocument()
    })
  } catch (e) {
    screen.debug()
    throw new Error(`Principal ${principalName} not found in ACL`, { cause: e })
  }

  const editorCombobox = within(row!).queryByRole('combobox')
  if (editorCombobox) {
    expect(editorCombobox).toHaveTextContent(accessTypeLabel)
  } else {
    within(row!).getByText(accessTypeLabel)
  }
  return row!
}

/**
 * Verify that a row in the ACL editor contains the expected principal name and access type.
 * @param row
 * @param principalName
 * @param accessTypeLabel
 */
export function confirmItem(
  row: HTMLElement,
  principalName: string,
  accessTypeLabel: string,
) {
  expect(within(row).queryByRole('link') ?? row).toHaveTextContent(
    principalName,
  )
  const editorCombobox = within(row).queryByRole('combobox')
  if (editorCombobox) {
    expect(editorCombobox).toHaveTextContent(accessTypeLabel)
  } else {
    within(row).getByText(accessTypeLabel)
  }
}

/**
 * Remove a particular row from the HTML editor.
 * @param row
 * @param user
 * @param verifyRemoval
 */
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

/**
 * Updates the permission level of a particular row in the ACL editor.
 * @param row
 * @param user
 * @param updatedPermissionLevelLabel
 */
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

export function queryForAddUserCombobox() {
  return screen.queryByRole('combobox', {
    name: ADD_PRINCIPAL_TO_ACL_COMBOBOX_LABEL,
  })
}

/**
 * Adds a user to the ACL editor.
 * @param user
 * @param userName
 */
export async function addUserToAcl(
  user: ReturnType<(typeof userEvent)['setup']>,
  userName: string,
) {
  const userInput = queryForAddUserCombobox()!
  expect(userInput).toBeInTheDocument()
  await user.type(userInput, userName)

  const option = await screen.findByText(new RegExp(`\\(@${userName}\\)`))
  await user.click(option)

  await waitFor(() => expect(option).not.toBeInTheDocument())
  const rows = screen.getAllByRole('row')
  return rows[rows.length - 1]
}

/**
 * Adds public / authenticated groups to the ACL editor.
 * @param user
 */
export async function addPublicToAcl(
  user: ReturnType<(typeof userEvent)['setup']>,
) {
  const makePublicButton = screen.getByRole('button', {
    name: ADD_PUBLIC_PRINCIPALS_BUTTON_TEXT,
  })
  await user.click(makePublicButton)

  let rows: HTMLElement[] = []
  let publicRow: HTMLElement | undefined = undefined
  let authenticatedUsersRow: HTMLElement | undefined = undefined
  await waitFor(() => {
    rows = screen.getAllByRole('row')
    publicRow = queryForRowWithPrincipalName(rows, PUBLIC_GROUP_DISPLAY_TEXT)
    authenticatedUsersRow = queryForRowWithPrincipalName(
      rows,
      AUTHENTICATED_GROUP_DISPLAY_TEXT,
    )
    expect(publicRow).toBeInTheDocument()
    expect(authenticatedUsersRow).toBeInTheDocument()
  })

  return {
    publicRow: rows[rows.length - 2],
    authenticatedUsersRow: rows[rows.length - 1],
  }
}
