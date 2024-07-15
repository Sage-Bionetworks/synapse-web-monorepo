import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { server } from '../../mocks/msw/server'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import { AclEditor, AclEditorProps } from './AclEditor'
import {
  MOCK_TEAM_ID,
  MOCK_TEAM_ID_2,
  mockTeamData,
  mockTeamData2,
} from '../../mocks/team/mockTeam'
import { ACCESS_TYPE, ResourceAccess } from '@sage-bionetworks/synapse-types'
import {
  MOCK_USER_ID,
  mockUserData1,
  mockUserData2,
} from '../../mocks/user/mock_user_profile'
import { PermissionLevel } from '../../utils/PermissionLevelToAccessType'
import {
  addUserToAcl,
  confirmItem,
  removeItem,
  updatePermissionLevel,
} from './AclEditorTestUtils'

const DEFAULT_RESOURCE_ACCESS: ResourceAccess[] = [
  {
    principalId: MOCK_TEAM_ID,
    accessType: [ACCESS_TYPE.REVIEW_SUBMISSIONS],
  },
  {
    principalId: MOCK_TEAM_ID_2,
    accessType: [ACCESS_TYPE.EXEMPTION_ELIGIBLE],
  },
  {
    principalId: MOCK_USER_ID,
    accessType: [
      ACCESS_TYPE.EXEMPTION_ELIGIBLE,
      ACCESS_TYPE.REVIEW_SUBMISSIONS,
    ],
  },
]

const DEFAULT_AVAILABLE_PERMISSION_LEVELS: PermissionLevel[] = [
  'CAN_REVIEW_SUBMISSIONS',
  'IS_EXEMPTION_ELIGIBLE',
  'CAN_REVIEW_SUBMISSIONS_AND_IS_EXEMPTION_ELIGIBLE',
]

const DEFAULT_EMPTY_TEXT = 'Empty'

const mockAddResourceAccessItem = jest.fn()
const mockUpdateResourceAccessItem = jest.fn()
const mockRemoveResourceAccessItem = jest.fn()

const defaultProps: AclEditorProps = {
  resourceAccessList: DEFAULT_RESOURCE_ACCESS,
  availablePermissionLevels: DEFAULT_AVAILABLE_PERMISSION_LEVELS,
  isLoading: false,
  emptyText: DEFAULT_EMPTY_TEXT,
  isInEditMode: true,
  addResourceAccessItem: mockAddResourceAccessItem,
  updateResourceAccessItem: mockUpdateResourceAccessItem,
  removeResourceAccessItem: mockRemoveResourceAccessItem,
}

function renderComponent(props: AclEditorProps) {
  const component = render(<AclEditor {...props} />, {
    wrapper: createWrapper(),
  })
  return { component }
}

async function setUp(
  propOverrides: Partial<AclEditorProps> = defaultProps,
  expectedResourceAccessItems: number = propOverrides.resourceAccessList
    ?.length ?? DEFAULT_RESOURCE_ACCESS.length,
) {
  const props = { ...defaultProps, ...propOverrides }
  const user = userEvent.setup()
  const { component } = renderComponent(props)

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

describe('AclEditor', () => {
  beforeEach(() => jest.clearAllMocks())
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  it('Shows loading UI', async () => {
    await setUp({ isLoading: true }, 0)
    screen.getByRole('progressbar')
  })

  it('Shows empty text', async () => {
    await setUp({ resourceAccessList: [] })
    screen.getByText(DEFAULT_EMPTY_TEXT)
  })

  it('Shows existing data', async () => {
    const { itemRows } = await setUp()

    confirmItem(itemRows[0], mockTeamData.name, 'Can Review')
    confirmItem(itemRows[1], mockTeamData2.name, 'Exempt Eligible')
    confirmItem(
      itemRows[2],
      `@${mockUserData1.userProfile?.userName}`,
      'Can Review & Exempt Eligible',
    )
  })

  it('Shows available permission levels', async () => {
    await setUp()

    const permissionsMenu = screen.getAllByRole('combobox')[0]
    await userEvent.click(permissionsMenu)
    expect(screen.getAllByRole('option')).toHaveLength(3)
    screen.getByRole('option', { name: 'Can Review' })
    screen.getByRole('option', { name: 'Exempt Eligible' })
    screen.getByRole('option', { name: 'Can Review & Exempt Eligible' })
  })

  it('Handles adding a user or team', async () => {
    const { user } = await setUp()

    await addUserToAcl(user, mockUserData2.userProfile!.userName)

    expect(mockAddResourceAccessItem).toHaveBeenCalledWith(
      String(mockUserData2.id),
    )
  })

  it('Handles updating the permissions of a user or team', async () => {
    const { user, itemRows } = await setUp()

    await updatePermissionLevel(itemRows[0], user, 'Exempt Eligible')
    expect(mockUpdateResourceAccessItem).toHaveBeenCalledWith(MOCK_TEAM_ID, [
      ACCESS_TYPE.EXEMPTION_ELIGIBLE,
    ])
  })

  it('Handles removing a user or team', async () => {
    const { user, itemRows } = await setUp()
    const verifyRemoval = false // these tests do not track state, so do not verify that the item was removed from the UI
    await removeItem(itemRows[0], user, verifyRemoval)
    expect(mockRemoveResourceAccessItem).toHaveBeenCalledWith(MOCK_TEAM_ID)
  })

  it('does not show edit controls when isInEditMode is false', async () => {
    const { itemRows } = await setUp({ isInEditMode: false })

    // Data should still be present
    confirmItem(itemRows[0], mockTeamData.name, 'Can Review')
    confirmItem(itemRows[1], mockTeamData2.name, 'Exempt Eligible')
    confirmItem(
      itemRows[2],
      `@${mockUserData1.userProfile?.userName}`,
      'Can Review & Exempt Eligible',
    )

    // No menus or buttons should be shown
    expect(screen.queryByRole('combobox')).not.toBeInTheDocument()
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })
})
