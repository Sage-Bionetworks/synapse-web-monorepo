import { ACCESS_TYPE, ResourceAccess } from '@sage-bionetworks/synapse-types'
import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { UserEvent } from '@testing-library/user-event/dist/types/setup/setup'
import React from 'react'
import { server } from '../../mocks/msw/server'
import {
  MOCK_TEAM_ID,
  MOCK_TEAM_ID_2,
  mockTeamData,
  mockTeamData2,
} from '../../mocks/team/mockTeam'
import {
  MOCK_USER_ID,
  MOCK_USER_ID_2,
  MOCK_USER_NAME,
  MOCK_USER_NAME_2,
} from '../../mocks/user/mock_user_profile'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import {
  PermissionLevelEnum,
  getAccessTypeFromPermissionLevel,
} from '../../utils/PermissionLevelToAccessType'
import {
  EMPTY_RESOURCE_ACCESS_LIST_TEXT,
  REVIEWER_ALREADY_ADDED_ERROR_MESSAGE,
  ResourceAccessEditor,
  ResourceAccessEditorProps,
} from './ResourceAccessEditor'

const resourceAccessList: ResourceAccess[] = [
  {
    principalId: MOCK_TEAM_ID,
    accessType: getAccessTypeFromPermissionLevel(
      PermissionLevelEnum.CAN_REVIEW_SUBMISSIONS,
    ),
  },
  {
    principalId: MOCK_TEAM_ID_2,
    accessType: getAccessTypeFromPermissionLevel(
      PermissionLevelEnum.EXEMPTION_ELIGIBLE,
    ),
  },
  {
    principalId: MOCK_USER_ID,
    accessType: getAccessTypeFromPermissionLevel(
      PermissionLevelEnum.CAN_REVIEW_AND_EXEMPTION_ELIGIBLE,
    ),
  },
]

const onChange = jest.fn()

function renderComponent(props: ResourceAccessEditorProps) {
  render(<ResourceAccessEditor {...props} />, {
    wrapper: createWrapper(),
  })
}

async function setUp(props: ResourceAccessEditorProps) {
  const user = userEvent.setup()
  const component = renderComponent(props)

  const { resourceAccessList } = props

  // wait for UserOrTeamBadge(s) to finish loading
  await waitFor(() => {
    expect(screen.queryAllByRole('link')).toHaveLength(
      resourceAccessList.length,
    )
  })

  const itemRows = screen.queryAllByRole('row')
  expect(itemRows).toHaveLength(resourceAccessList.length)

  return { component, itemRows, user }
}

const confirmItem = (
  row: HTMLElement,
  principalName: string,
  accessTypeLabel: string,
) => {
  expect(within(row).getByRole('link')).toHaveTextContent(principalName)
  expect(within(row).getByRole('combobox')).toHaveTextContent(accessTypeLabel)
}

const selectReviewerUser = async (
  user: UserEvent,
  principalUserName: string,
) => {
  const userInput = await screen.findByRole('combobox', {
    name: 'Select a reviewer',
  })
  await user.type(userInput, principalUserName)

  const text = await screen.findByText(
    new RegExp(`\\(@${principalUserName}\\)`),
  )
  await user.click(text)

  await waitFor(() => expect(text).not.toBeInTheDocument())
}

describe('ResourceAccessEditor', () => {
  beforeEach(() => jest.clearAllMocks())
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  test('displays an initially populated resource access list', async () => {
    const { itemRows } = await setUp({ resourceAccessList, onChange })

    confirmItem(
      itemRows[0],
      mockTeamData.name,
      PermissionLevelEnum.CAN_REVIEW_SUBMISSIONS,
    )
    confirmItem(
      itemRows[1],
      mockTeamData2.name,
      PermissionLevelEnum.EXEMPTION_ELIGIBLE,
    )
    confirmItem(
      itemRows[2],
      `@${MOCK_USER_NAME}`,
      PermissionLevelEnum.CAN_REVIEW_AND_EXEMPTION_ELIGIBLE,
    )
    expect(onChange).not.toHaveBeenCalled()
  })

  test('displays an initially empty resource access list', async () => {
    const emptyResourceAccessList: ResourceAccess[] = []
    await setUp({
      resourceAccessList: emptyResourceAccessList,
      onChange,
    })

    expect(screen.getByText(EMPTY_RESOURCE_ACCESS_LIST_TEXT)).toBeVisible()
    expect(onChange).not.toHaveBeenCalled()
  })

  test('updates access types for an existing resource access item', async () => {
    const updatedPermissionsLevel =
      PermissionLevelEnum.CAN_REVIEW_AND_EXEMPTION_ELIGIBLE
    const updatedResourceAccessList = [
      { ...resourceAccessList[0] },
      {
        ...resourceAccessList[1],
        accessType: getAccessTypeFromPermissionLevel(updatedPermissionsLevel),
      },
      { ...resourceAccessList[2] },
    ]

    const { itemRows, user } = await setUp({ resourceAccessList, onChange })
    const row = itemRows[1]
    confirmItem(row, mockTeamData2.name, PermissionLevelEnum.EXEMPTION_ELIGIBLE)

    const menu = within(row).getByRole('combobox')
    await user.click(menu)

    const option = screen.getByRole('option', {
      name: updatedPermissionsLevel,
    })
    await user.click(option)

    await waitFor(() => {
      expect(option).not.toBeInTheDocument()
    })

    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenLastCalledWith(updatedResourceAccessList)
  })

  test('removes a resource access items', async () => {
    const { itemRows, user } = await setUp({ resourceAccessList, onChange })

    const row = itemRows[0]
    await user.click(within(row).getByRole('button'))

    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenLastCalledWith(resourceAccessList.slice(1, 3))
  })

  test('adds a new principalId', async () => {
    const newResourceAccess: ResourceAccess = {
      principalId: MOCK_USER_ID_2,
      accessType: [ACCESS_TYPE.REVIEW_SUBMISSIONS],
    }

    const { user } = await setUp({ resourceAccessList, onChange })

    await selectReviewerUser(user, MOCK_USER_NAME_2)

    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenLastCalledWith([
      ...resourceAccessList,
      newResourceAccess,
    ])
  })

  test('displays an error when attempting to add an existing principalId', async () => {
    const { user } = await setUp({ resourceAccessList, onChange })

    await selectReviewerUser(user, MOCK_USER_NAME)

    const alert = screen.getByRole('alert')
    expect(alert).toHaveTextContent(REVIEWER_ALREADY_ADDED_ERROR_MESSAGE)

    expect(onChange).toHaveBeenCalledTimes(0)
  })
})
