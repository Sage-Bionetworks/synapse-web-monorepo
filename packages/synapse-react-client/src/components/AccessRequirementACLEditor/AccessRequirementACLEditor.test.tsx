import {
  ACCESS_TYPE,
  AccessControlList,
  ResourceAccess,
} from '@sage-bionetworks/synapse-types'
import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { rest, server } from '../../mocks/msw/server'
import { mockTeamData, mockTeamData2 } from '../../mocks/team/mockTeam'
import {
  MOCK_USER_ID_2,
  MOCK_USER_NAME,
  MOCK_USER_NAME_2,
} from '../../mocks/user/mock_user_profile'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import {
  EMPTY_RESOURCE_ACCESS_LIST_TEXT,
  REVIEWER_ALREADY_ADDED_ERROR_MESSAGE,
  AccessRequirementAclEditor,
  AccessRequirementAclEditorProps,
} from './AccessRequirementAclEditor'
import {
  MOCK_ACCESS_REQUIREMENT_WITHOUT_ACL_ID,
  MOCK_MANAGED_ACCESS_REQUIREMENT_ACL,
} from '../../mocks/mockAccessRequirementAcls'
import { BackendDestinationEnum, getEndpoint } from '../../utils/functions'
import { REMOVE_BUTTON_LABEL } from './ResourceAccessItem'

const onUpdate = jest.fn()

const defaultAccessRequirementId = MOCK_MANAGED_ACCESS_REQUIREMENT_ACL.id
const defaultResourceAccessItemsCount =
  MOCK_MANAGED_ACCESS_REQUIREMENT_ACL.resourceAccess.length
const defaultResourceAccessList =
  MOCK_MANAGED_ACCESS_REQUIREMENT_ACL.resourceAccess

const defaultProps: AccessRequirementAclEditorProps = {
  accessRequirementId: defaultAccessRequirementId,
  onUpdate,
}

function renderComponent(props: AccessRequirementAclEditorProps) {
  render(<AccessRequirementAclEditor {...props} />, {
    wrapper: createWrapper(),
  })
}

async function setUp(
  props: AccessRequirementAclEditorProps = defaultProps,
  expectedResourceAccessItems: number = defaultResourceAccessItemsCount,
) {
  const user = userEvent.setup()
  const component = renderComponent(props)

  // wait for UserOrTeamBadge(s) to finish loading
  await waitFor(() => {
    expect(screen.queryAllByRole('link')).toHaveLength(
      expectedResourceAccessItems,
    )
  })

  const itemRows = screen.queryAllByRole('row')
  expect(itemRows).toHaveLength(expectedResourceAccessItems)

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
  user: ReturnType<(typeof userEvent)['setup']>,
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

  describe('AR with existing ACL', () => {
    test('displays resource access list for an existing acl', async () => {
      const { itemRows } = await setUp()

      confirmItem(itemRows[0], mockTeamData.name, 'Can Review')
      confirmItem(itemRows[1], mockTeamData2.name, 'Exempt Eligible')
      confirmItem(
        itemRows[2],
        `@${MOCK_USER_NAME}`,
        'Can Review & Exempt Eligible',
      )
      expect(onUpdate).not.toHaveBeenCalled()
    })

    test('updates access types for resource access item in existing acl', async () => {
      const updatedPermissionLevelLabel = 'Can Review & Exempt Eligible'
      const updatedResourceAccessList: ResourceAccess[] = [
        { ...defaultResourceAccessList[0] },
        {
          ...defaultResourceAccessList[1],
          accessType: [
            ACCESS_TYPE.EXEMPTION_ELIGIBLE,
            ACCESS_TYPE.REVIEW_SUBMISSIONS,
          ],
        },
        { ...defaultResourceAccessList[2] },
      ]
      const updatedAcl: AccessControlList = {
        id: defaultAccessRequirementId,
        resourceAccess: updatedResourceAccessList,
      }

      const { itemRows, user } = await setUp()
      const row = itemRows[1]
      confirmItem(row, mockTeamData2.name, 'Exempt Eligible')

      const menu = within(row).getByRole('combobox')
      await user.click(menu)

      const option = screen.getByRole('option', {
        name: updatedPermissionLevelLabel,
      })
      await user.click(option)
      await waitFor(() => {
        expect(option).not.toBeInTheDocument()
      })

      expect(onUpdate).toHaveBeenCalledTimes(1)
      expect(onUpdate).toHaveBeenLastCalledWith(updatedAcl, 'UPDATE')

      confirmItem(row, mockTeamData2.name, updatedPermissionLevelLabel)
    })

    test('adds a new principalId to existing acl', async () => {
      const newResourceAccess: ResourceAccess = {
        principalId: MOCK_USER_ID_2,
        accessType: [ACCESS_TYPE.REVIEW_SUBMISSIONS],
      }
      const updatedAcl: AccessControlList = {
        id: defaultAccessRequirementId,
        resourceAccess: [...defaultResourceAccessList, newResourceAccess],
      }

      const { user } = await setUp()

      await selectReviewerUser(user, MOCK_USER_NAME_2)
      expect(onUpdate).toHaveBeenCalledTimes(1)
      expect(onUpdate).toHaveBeenLastCalledWith(updatedAcl, 'UPDATE')

      const rows = screen.getAllByRole('row')
      confirmItem(rows[rows.length - 1], MOCK_USER_NAME_2, 'Can Review')
    })

    test('removes a resource access item from existing acl', async () => {
      const updatedResourceAccessList = defaultResourceAccessList.slice(1, 3)
      const updatedAcl: AccessControlList = {
        id: defaultAccessRequirementId,
        resourceAccess: updatedResourceAccessList,
      }

      const { itemRows, user } = await setUp()

      const row = itemRows[0]
      await user.click(
        within(row).getByRole('button', { name: REMOVE_BUTTON_LABEL }),
      )

      expect(onUpdate).toHaveBeenCalledTimes(1)
      expect(onUpdate).toHaveBeenLastCalledWith(updatedAcl, 'UPDATE')

      expect(row).not.toBeVisible()
    })

    test('removes last resource access item from existing acl', async () => {
      const accessRequirementId = '1234'
      const aclWithOneResourceAccessItem: AccessControlList = {
        id: accessRequirementId,
        resourceAccess: defaultResourceAccessList.slice(0, 1),
      }
      server.use(
        rest.get(
          `${getEndpoint(
            BackendDestinationEnum.REPO_ENDPOINT,
          )}/repo/v1/accessRequirement/${accessRequirementId}/acl`,
          async (req, res, ctx) => {
            return res(ctx.status(200), ctx.json(aclWithOneResourceAccessItem))
          },
        ),
      )

      const { user } = await setUp({ accessRequirementId, onUpdate }, 1)

      const removeButton = screen.getByRole('button', {
        name: REMOVE_BUTTON_LABEL,
      })
      await user.click(removeButton)

      expect(onUpdate).toHaveBeenCalledTimes(1)
      expect(onUpdate).toHaveBeenLastCalledWith(null, 'DELETE')

      expect(removeButton).not.toBeInTheDocument()
      expect(screen.getByText(EMPTY_RESOURCE_ACCESS_LIST_TEXT)).toBeVisible()
    })
  })

  describe('AR without existing ACL', () => {
    const noExistingAclProps: AccessRequirementAclEditorProps = {
      accessRequirementId: MOCK_ACCESS_REQUIREMENT_WITHOUT_ACL_ID,
      onUpdate,
    }

    test('displays empty resource access list when there is no existing acl', async () => {
      await setUp(noExistingAclProps, 0)

      await screen.findByText(EMPTY_RESOURCE_ACCESS_LIST_TEXT)
      expect(onUpdate).not.toHaveBeenCalled()
    })

    test('adds a new principalId to new acl', async () => {
      const newResourceAccess: ResourceAccess = {
        principalId: MOCK_USER_ID_2,
        accessType: [ACCESS_TYPE.REVIEW_SUBMISSIONS],
      }
      const newAcl: AccessControlList = {
        id: MOCK_ACCESS_REQUIREMENT_WITHOUT_ACL_ID,
        resourceAccess: [newResourceAccess],
      }

      const { user } = await setUp(noExistingAclProps, 0)

      await screen.findByText(EMPTY_RESOURCE_ACCESS_LIST_TEXT)
      await selectReviewerUser(user, MOCK_USER_NAME_2)

      expect(onUpdate).toHaveBeenCalledTimes(1)
      expect(onUpdate).toHaveBeenLastCalledWith(newAcl, 'CREATE')

      confirmItem(screen.getByRole('row'), MOCK_USER_NAME_2, 'Can Review')
    })

    test('removes last resource access item from new acl', async () => {
      const { user } = await setUp(noExistingAclProps, 0)

      await screen.findByText(EMPTY_RESOURCE_ACCESS_LIST_TEXT)
      await selectReviewerUser(user, MOCK_USER_NAME_2)
      expect(onUpdate).toHaveBeenCalledTimes(1)

      await user.click(
        screen.getByRole('button', { name: REMOVE_BUTTON_LABEL }),
      )

      expect(onUpdate).toHaveBeenCalledTimes(2)
      expect(onUpdate).toHaveBeenLastCalledWith(null, 'NOOP')
      expect(screen.getByText(EMPTY_RESOURCE_ACCESS_LIST_TEXT)).toBeVisible()
    })
  })

  test('displays an error when attempting to add an existing principalId', async () => {
    const { user } = await setUp()

    await selectReviewerUser(user, MOCK_USER_NAME)

    const alert = screen.getByRole('alert')
    expect(alert).toHaveTextContent(REVIEWER_ALREADY_ADDED_ERROR_MESSAGE)

    expect(onUpdate).toHaveBeenCalledTimes(0)
  })
})
