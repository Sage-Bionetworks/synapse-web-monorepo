import { MOCK_MANAGED_ACCESS_REQUIREMENT_ACL } from '@/mocks/accessRequirement/mockAccessRequirementAcls'
import { MOCK_ACCESS_REQUIREMENT_WITHOUT_ACL_ID } from '@/mocks/accessRequirement/mockAccessRequirements'
import { MOCK_ACCESS_TOKEN } from '@/mocks/MockSynapseContext'
import { server } from '@/mocks/msw/server'
import { mockTeamData, mockTeamData2 } from '@/mocks/team/mockTeam'
import {
  MOCK_USER_ID_2,
  MOCK_USER_NAME,
  MOCK_USER_NAME_2,
} from '@/mocks/user/mock_user_profile'
import SynapseClient from '@/synapse-client'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { BackendDestinationEnum, getEndpoint } from '@/utils/functions'
import {
  ACCESS_TYPE,
  AccessControlList,
  ResourceAccess,
} from '@sage-bionetworks/synapse-types'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { http, HttpResponse } from 'msw'
import { createRef } from 'react'
import {
  addUserToAcl,
  confirmItem,
  removeItem,
  updatePermissionLevel,
} from '../AclEditor/AclEditorTestUtils'
import { PRINCIPAL_ALREADY_ADDED_ERROR_MESSAGE } from '../AclEditor/useUpdateAcl'
import {
  AccessRequirementAclEditor,
  AccessRequirementAclEditorHandle,
  AccessRequirementAclEditorProps,
  EMPTY_RESOURCE_ACCESS_LIST_TEXT,
} from './AccessRequirementAclEditor'

const onSaveComplete = vi.fn()
const deleteAccessRequirementAclSpy = vi.spyOn(
  SynapseClient,
  'deleteAccessRequirementAcl',
)
const createAccessRequirementAclSpy = vi.spyOn(
  SynapseClient,
  'createAccessRequirementAcl',
)
const updateAccessRequirementAclSpy = vi.spyOn(
  SynapseClient,
  'updateAccessRequirementAcl',
)

const defaultAccessRequirementId = MOCK_MANAGED_ACCESS_REQUIREMENT_ACL.id
const defaultResourceAccessItemsCount =
  MOCK_MANAGED_ACCESS_REQUIREMENT_ACL.resourceAccess.length
const defaultResourceAccessList =
  MOCK_MANAGED_ACCESS_REQUIREMENT_ACL.resourceAccess

const defaultProps: AccessRequirementAclEditorProps = {
  accessRequirementId: defaultAccessRequirementId,
  onSaveComplete,
}

function renderComponent(props: AccessRequirementAclEditorProps) {
  const ref = createRef<AccessRequirementAclEditorHandle>()
  const component = render(
    <AccessRequirementAclEditor ref={ref} {...props} />,
    {
      wrapper: createWrapper(),
    },
  )
  return { ref, component }
}

async function setUp(
  props: AccessRequirementAclEditorProps = defaultProps,
  expectedResourceAccessItems: number = defaultResourceAccessItemsCount,
) {
  const user = userEvent.setup()
  const { ref, component } = renderComponent(props)

  // wait for UserOrTeamBadge(s) to finish loading
  await waitFor(() => {
    expect(screen.queryAllByRole('link')).toHaveLength(
      expectedResourceAccessItems,
    )
  })

  const itemRows = screen.queryAllByRole('row')
  expect(itemRows).toHaveLength(expectedResourceAccessItems)

  return { ref, component, itemRows, user }
}

describe('AccessRequirementAclEditor', () => {
  beforeEach(() => vi.clearAllMocks())
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
      expect(onSaveComplete).not.toHaveBeenCalled()
    })

    test('updates permission level for principal in an existing acl', async () => {
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

      const { itemRows, user, ref } = await setUp()
      const row = itemRows[1]
      confirmItem(row, mockTeamData2.name, 'Exempt Eligible')

      await updatePermissionLevel(row, user, updatedPermissionLevelLabel)
      confirmItem(row, mockTeamData2.name, updatedPermissionLevelLabel)
      expect(onSaveComplete).not.toHaveBeenCalled()

      // parent calls save
      ref.current?.save()

      await waitFor(() => {
        expect(onSaveComplete).toHaveBeenCalledTimes(1)
        expect(updateAccessRequirementAclSpy).toHaveBeenCalledWith(
          MOCK_ACCESS_TOKEN,
          updatedAcl,
        )
      })
    })

    test('updates an existing acl to add a principal', async () => {
      const newResourceAccess: ResourceAccess = {
        principalId: MOCK_USER_ID_2,
        accessType: [ACCESS_TYPE.REVIEW_SUBMISSIONS],
      }
      const updatedAcl: AccessControlList = {
        id: defaultAccessRequirementId,
        resourceAccess: [...defaultResourceAccessList, newResourceAccess],
      }

      const { user, ref } = await setUp()
      expect(onSaveComplete).not.toHaveBeenCalled()

      const newUserRow = await addUserToAcl(user, MOCK_USER_NAME_2)
      confirmItem(newUserRow, MOCK_USER_NAME_2, 'Can Review')

      // parent calls save
      ref.current?.save()

      await waitFor(() => {
        expect(onSaveComplete).toHaveBeenCalledTimes(1)
        expect(updateAccessRequirementAclSpy).toHaveBeenCalledWith(
          MOCK_ACCESS_TOKEN,
          updatedAcl,
        )
      })
    })

    test('updates an existing acl to remove a principal', async () => {
      const updatedResourceAccessList = defaultResourceAccessList.slice(1, 3)
      const updatedAcl: AccessControlList = {
        id: defaultAccessRequirementId,
        resourceAccess: updatedResourceAccessList,
      }

      const { itemRows, user, ref } = await setUp()

      await removeItem(itemRows[0], user)
      expect(onSaveComplete).not.toHaveBeenCalled()

      // parent calls save
      ref.current?.save()

      await waitFor(() => {
        expect(onSaveComplete).toHaveBeenCalledTimes(1)
        expect(updateAccessRequirementAclSpy).toHaveBeenCalledWith(
          MOCK_ACCESS_TOKEN,
          updatedAcl,
        )
      })
    })

    test('deletes existing acl when last principal is removed', async () => {
      const accessRequirementId = '1234'
      const aclWithOneResourceAccessItem: AccessControlList = {
        id: accessRequirementId,
        resourceAccess: defaultResourceAccessList.slice(0, 1),
      }
      server.use(
        http.get(
          `${getEndpoint(
            BackendDestinationEnum.REPO_ENDPOINT,
          )}/repo/v1/accessRequirement/${accessRequirementId}/acl`,
          () => {
            return HttpResponse.json(aclWithOneResourceAccessItem, {
              status: 200,
            })
          },
        ),
      )

      const props: AccessRequirementAclEditorProps = {
        accessRequirementId,
        onSaveComplete,
      }

      const { user, ref } = await setUp({ ...props }, 1)

      await removeItem(screen.getByRole('row'), user)
      expect(onSaveComplete).not.toHaveBeenCalled()
      expect(screen.getByText(EMPTY_RESOURCE_ACCESS_LIST_TEXT)).toBeVisible()

      // parent calls save
      ref.current?.save()

      await waitFor(() => {
        expect(onSaveComplete).toHaveBeenCalledTimes(1)
        expect(deleteAccessRequirementAclSpy).toHaveBeenCalledWith(
          MOCK_ACCESS_TOKEN,
          accessRequirementId,
        )
      })
    })

    test('does not update an unchanged ACL', async () => {
      const { user, ref, itemRows } = await setUp()

      // remove last principal
      const index = itemRows.length - 1
      await removeItem(itemRows[index], user)

      // add back principal with same permissions
      const newUserRow = await addUserToAcl(user, MOCK_USER_NAME)
      confirmItem(newUserRow, MOCK_USER_NAME, 'Can Review')

      const row = screen.getAllByRole('row')[index]
      const permissionLevelLabel = 'Can Review & Exempt Eligible'
      await updatePermissionLevel(row, user, permissionLevelLabel)

      confirmItem(row, MOCK_USER_NAME, permissionLevelLabel)
      expect(onSaveComplete).not.toHaveBeenCalled()

      // parent calls save
      ref.current?.save()

      // noop
      await waitFor(() => {
        expect(onSaveComplete).toHaveBeenCalledTimes(1)
        expect(createAccessRequirementAclSpy).not.toHaveBeenCalled()
        expect(updateAccessRequirementAclSpy).not.toHaveBeenCalled()
        expect(deleteAccessRequirementAclSpy).not.toHaveBeenCalled()
      })
    })
  })

  describe('AR without existing ACL', () => {
    const noExistingAclProps: AccessRequirementAclEditorProps = {
      accessRequirementId: String(MOCK_ACCESS_REQUIREMENT_WITHOUT_ACL_ID),
      onSaveComplete,
    }

    test('displays empty resource access list when there is no existing acl', async () => {
      await setUp(noExistingAclProps, 0)

      await screen.findByText(EMPTY_RESOURCE_ACCESS_LIST_TEXT)
      expect(onSaveComplete).not.toHaveBeenCalled()
    })

    test('creates new acl when a principal is added to AR without existing ACL', async () => {
      const newResourceAccess: ResourceAccess = {
        principalId: MOCK_USER_ID_2,
        accessType: [ACCESS_TYPE.REVIEW_SUBMISSIONS],
      }
      const newAcl: AccessControlList = {
        id: String(MOCK_ACCESS_REQUIREMENT_WITHOUT_ACL_ID),
        resourceAccess: [newResourceAccess],
      }

      const { user, ref } = await setUp(noExistingAclProps, 0)

      await screen.findByText(EMPTY_RESOURCE_ACCESS_LIST_TEXT)
      const newUserRow = await addUserToAcl(user, MOCK_USER_NAME_2)
      confirmItem(newUserRow, MOCK_USER_NAME_2, 'Can Review')
      expect(onSaveComplete).not.toHaveBeenCalled()

      // parent calls save
      ref.current?.save()

      await waitFor(() => {
        expect(onSaveComplete).toHaveBeenCalledTimes(1)
        expect(createAccessRequirementAclSpy).toHaveBeenCalledWith(
          MOCK_ACCESS_TOKEN,
          newAcl,
        )
      })
    })

    test('does not create a new acl when principal is added and removed before clicking save', async () => {
      const { user, ref } = await setUp(noExistingAclProps, 0)

      await screen.findByText(EMPTY_RESOURCE_ACCESS_LIST_TEXT)
      const newUserRow = await addUserToAcl(user, MOCK_USER_NAME_2)
      confirmItem(newUserRow, MOCK_USER_NAME_2, 'Can Review')

      await removeItem(screen.getByRole('row'), user)

      expect(screen.getByText(EMPTY_RESOURCE_ACCESS_LIST_TEXT)).toBeVisible()
      expect(onSaveComplete).not.toHaveBeenCalled()

      // parent calls save
      ref.current?.save()

      // noop
      await waitFor(() => {
        expect(onSaveComplete).toHaveBeenCalledTimes(1)
        expect(createAccessRequirementAclSpy).not.toHaveBeenCalled()
        expect(updateAccessRequirementAclSpy).not.toHaveBeenCalled()
        expect(deleteAccessRequirementAclSpy).not.toHaveBeenCalled()
      })
    })
  })

  test('displays an error when attempting to add an existing principalId', async () => {
    const { user } = await setUp()

    await addUserToAcl(user, MOCK_USER_NAME)

    const alert = screen.getByRole('alert')
    expect(alert).toHaveTextContent(PRINCIPAL_ALREADY_ADDED_ERROR_MESSAGE)

    // Verify the error goes away when a successful change is made
    const newUserRow = await addUserToAcl(user, MOCK_USER_NAME_2)
    confirmItem(newUserRow, MOCK_USER_NAME_2, 'Can Review')

    expect(alert).not.toBeInTheDocument()
  })
})
