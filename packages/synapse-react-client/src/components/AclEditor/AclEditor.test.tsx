import { server } from '@/mocks/msw/server'
import {
  MOCK_TEAM_ID,
  MOCK_TEAM_ID_2,
  mockTeamData,
  mockTeamData2,
} from '@/mocks/team/mockTeam'
import {
  MOCK_USER_ID,
  mockUserData1,
  mockUserData2,
} from '@/mocks/user/mock_user_profile'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { PermissionLevel } from '@/utils/PermissionLevelToAccessType'
import {
  MOCK_ANONYMOUS_PRINCIPAL_ID as ANONYMOUS_PRINCIPAL_ID,
  MOCK_AUTHENTICATED_PRINCIPAL_ID as AUTHENTICATED_PRINCIPAL_ID,
  MOCK_PUBLIC_PRINCIPAL_ID as PUBLIC_PRINCIPAL_ID,
  MOCK_PUBLIC_PRINCIPAL_IDS as PUBLIC_PRINCIPAL_IDS,
} from '@/mocks/realm/mockRealmPrincipal'
import { ACCESS_TYPE, ResourceAccess } from '@sage-bionetworks/synapse-types'
import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  AclEditor,
  AclEditorProps,
  ADD_PUBLIC_PRINCIPALS_BUTTON_TEXT,
  NOTIFY_NEW_ACL_USERS_CHECKBOX_LABEL,
  REMOVE_PUBLIC_PRINCIPALS_BUTTON_TEXT,
} from './AclEditor'
import {
  addUserToAcl,
  confirmItem,
  queryForAddUserCombobox,
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

const mockAddResourceAccessItem = vi.fn()
const mockUpdateResourceAccessItem = vi.fn()
const mockRemoveResourceAccessItem = vi.fn()

const defaultProps: AclEditorProps = {
  resourceAccessList: DEFAULT_RESOURCE_ACCESS,
  availablePermissionLevels: DEFAULT_AVAILABLE_PERMISSION_LEVELS,
  isLoading: false,
  emptyText: DEFAULT_EMPTY_TEXT,
  canEdit: true,
  onAddPrincipalToAcl: mockAddResourceAccessItem,
  updateResourceAccessItem: mockUpdateResourceAccessItem,
  removeResourceAccessItem: mockRemoveResourceAccessItem,
  showNotifyCheckbox: false,
  showAddRemovePublicButton: false,
  isInherited: false,
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

  const numberOfPublicPrincipalsInResourceAccess =
    props.resourceAccessList.filter(ra =>
      PUBLIC_PRINCIPAL_IDS.includes(ra.principalId),
    ).length

  // wait for UserOrTeamBadge(s) to finish loading
  await waitFor(() => {
    expect(screen.queryAllByRole('link')).toHaveLength(
      // public principals do not get a link, so subtract that amount from the expected count
      expectedResourceAccessItems - numberOfPublicPrincipalsInResourceAccess,
    )
  })

  const itemRows = screen.queryAllByRole('row')
  expect(itemRows).toHaveLength(expectedResourceAccessItems)
  return { component, itemRows, user }
}

describe('AclEditor', () => {
  beforeEach(() => vi.clearAllMocks())
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

    await addUserToAcl(user, mockUserData2.userProfile!.userName!)

    expect(mockAddResourceAccessItem).toHaveBeenCalledWith(mockUserData2.id)
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

  it('does not show edit controls when canEdit is false', async () => {
    const { itemRows } = await setUp({ canEdit: false })

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

  it('allows customizing which entries are editable by passing a function to canEdit', async () => {
    function allowEditingOnlyTeam1(resourceAccess: ResourceAccess) {
      return resourceAccess.principalId === MOCK_TEAM_ID
    }

    const { itemRows } = await setUp({
      canEdit: allowEditingOnlyTeam1,
      canRemoveEntry: true,
    })

    // Data should still be present
    confirmItem(itemRows[0], mockTeamData.name, 'Can Review')
    confirmItem(itemRows[1], mockTeamData2.name, 'Exempt Eligible')
    confirmItem(
      itemRows[2],
      `@${mockUserData1.userProfile?.userName}`,
      'Can Review & Exempt Eligible',
    )

    // team 1 is editable and deletable
    within(itemRows[0]).getByRole('combobox')
    within(itemRows[0]).getByRole('button')
    // team2 and user1 are deletable but not editable
    expect(within(itemRows[1]).queryByRole('combobox')).not.toBeInTheDocument()
    within(itemRows[1]).getByRole('button')
    expect(within(itemRows[2]).queryByRole('combobox')).not.toBeInTheDocument()
    within(itemRows[2]).getByRole('button')

    // Users can still be added
    expect(queryForAddUserCombobox()).toBeInTheDocument()
  })

  it('respects the value of canRemoveEntry (boolean)', async () => {
    const { itemRows } = await setUp({
      canEdit: true,
      canRemoveEntry: false,
    })

    // Data should still be present
    confirmItem(itemRows[0], mockTeamData.name, 'Can Review')
    confirmItem(itemRows[1], mockTeamData2.name, 'Exempt Eligible')
    confirmItem(
      itemRows[2],
      `@${mockUserData1.userProfile?.userName}`,
      'Can Review & Exempt Eligible',
    )

    // all rows are editable but not deletable
    within(itemRows[0]).getByRole('combobox')
    expect(within(itemRows[0]).queryByRole('button')).not.toBeInTheDocument()
    within(itemRows[1]).getByRole('combobox')
    expect(within(itemRows[1]).queryByRole('button')).not.toBeInTheDocument()
    within(itemRows[2]).getByRole('combobox')
    expect(within(itemRows[2]).queryByRole('button')).not.toBeInTheDocument()

    // Users can still be added
    expect(queryForAddUserCombobox()).toBeInTheDocument()
  })

  it('respects the value of canRemoveEntry (function)', async () => {
    function allowRemovingOnlyTeam1(resourceAccess: ResourceAccess) {
      return resourceAccess.principalId === MOCK_TEAM_ID
    }

    const { itemRows } = await setUp({
      canEdit: true,
      canRemoveEntry: allowRemovingOnlyTeam1,
    })

    // Data should still be present
    confirmItem(itemRows[0], mockTeamData.name, 'Can Review')
    confirmItem(itemRows[1], mockTeamData2.name, 'Exempt Eligible')
    confirmItem(
      itemRows[2],
      `@${mockUserData1.userProfile?.userName}`,
      'Can Review & Exempt Eligible',
    )

    // team 1 is editable and deletable
    within(itemRows[0]).getByRole('combobox')
    within(itemRows[0]).getByRole('button')
    // team2 and user1 are editable but not deletable
    within(itemRows[1]).getByRole('combobox')
    expect(within(itemRows[1]).queryByRole('button')).not.toBeInTheDocument()
    within(itemRows[2]).getByRole('combobox')
    expect(within(itemRows[2]).queryByRole('button')).not.toBeInTheDocument()

    // Users can still be added
    expect(queryForAddUserCombobox()).toBeInTheDocument()
  })

  it('allows overriding a displayed permission value', async () => {
    const overrideText = 'Can take over the world'
    function displayedPermissionLevelOverride(resourceAccess: ResourceAccess) {
      if (resourceAccess.principalId === MOCK_TEAM_ID) {
        return overrideText
      }
      return undefined
    }
    const { itemRows } = await setUp({
      canEdit: false,
      displayedPermissionLevelOverride,
    })

    // Team 1 gets the override
    confirmItem(itemRows[0], mockTeamData.name, overrideText)

    // Remaining teams are unchanged
    confirmItem(itemRows[1], mockTeamData2.name, 'Exempt Eligible')
    confirmItem(
      itemRows[2],
      `@${mockUserData1.userProfile?.userName}`,
      'Can Review & Exempt Eligible',
    )
  })

  it('shows a checkbox to notify users', async () => {
    const onCheckboxChange = vi.fn()
    const { user } = await setUp({
      showNotifyCheckbox: true,
      notifyCheckboxValue: true,
      onNotifyCheckboxChange: onCheckboxChange,
    })

    const checkbox = screen.getByLabelText(NOTIFY_NEW_ACL_USERS_CHECKBOX_LABEL)
    expect(checkbox).toHaveAttribute('value', 'true')

    await user.click(checkbox)

    expect(onCheckboxChange).toHaveBeenLastCalledWith(false)
  })

  it('shows a button to add public', async () => {
    const { user } = await setUp({
      showAddRemovePublicButton: true,
    })

    const makePublicButton = screen.getByRole('button', {
      name: ADD_PUBLIC_PRINCIPALS_BUTTON_TEXT,
    })
    await user.click(makePublicButton)

    expect(mockAddResourceAccessItem).toHaveBeenCalledWith(PUBLIC_PRINCIPAL_ID)
    expect(mockAddResourceAccessItem).toHaveBeenCalledWith(
      AUTHENTICATED_PRINCIPAL_ID,
    )
  })

  it('shows a button to remove public if any public principals are in the ACL', async () => {
    const { user } = await setUp({
      resourceAccessList: [
        {
          principalId: PUBLIC_PRINCIPAL_ID,
          accessType: [ACCESS_TYPE.REVIEW_SUBMISSIONS],
        },
        {
          principalId: AUTHENTICATED_PRINCIPAL_ID,
          accessType: [ACCESS_TYPE.REVIEW_SUBMISSIONS],
        },
      ],
      showAddRemovePublicButton: true,
    })

    const removePublicAccessButton = screen.getByRole('button', {
      name: REMOVE_PUBLIC_PRINCIPALS_BUTTON_TEXT,
    })
    await user.click(removePublicAccessButton)

    expect(mockRemoveResourceAccessItem).toHaveBeenCalledWith(
      PUBLIC_PRINCIPAL_ID,
    )
    expect(mockRemoveResourceAccessItem).toHaveBeenCalledWith(
      AUTHENTICATED_PRINCIPAL_ID,
    )
    expect(mockRemoveResourceAccessItem).toHaveBeenCalledWith(
      ANONYMOUS_PRINCIPAL_ID,
    )
  })
})
