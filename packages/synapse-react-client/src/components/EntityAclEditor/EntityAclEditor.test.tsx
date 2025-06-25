import mockFileEntity from '@/mocks/entity/mockFileEntity'
import mockFileEntityData from '@/mocks/entity/mockFileEntity'
import {
  mockFileEntityCurrentUserCannotEdit,
  mockFileEntityWithLocalSharingSettingsData,
  mockFileOpenDataWithNoPublicRead,
  mockFileOpenDataWithPublicRead,
  mockFilePublicReadNoOpenData,
} from '@/mocks/entity/mockFileEntityACLVariants'
import mockProjectEntityData from '@/mocks/entity/mockProject'
import mockProject from '@/mocks/entity/mockProject'
import { MOCK_ACCESS_TOKEN } from '@/mocks/MockSynapseContext'
import { SynapseApiResponse } from '@/mocks/msw/handlers'
import { server } from '@/mocks/msw/server'
import {
  MOCK_USER_ID_2,
  MOCK_USER_NAME,
  MOCK_USER_NAME_2,
} from '@/mocks/user/mock_user_profile'
import SynapseClient from '@/synapse-client'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { ENTITY_ID } from '@/utils/APIConstants'
import { BackendDestinationEnum, getEndpoint } from '@/utils/functions'
import { AccessControlList } from '@sage-bionetworks/synapse-types'
import { act, render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { http, HttpResponse } from 'msw'
import { createRef } from 'react'
import {
  ADD_PUBLIC_PRINCIPALS_BUTTON_TEXT,
  NOTIFY_NEW_ACL_USERS_CHECKBOX_LABEL,
  REMOVE_PUBLIC_PRINCIPALS_BUTTON_TEXT,
} from '../AclEditor/AclEditor'
import {
  addPublicToAcl,
  addUserToAcl,
  confirmItem,
  confirmItemViaQuery,
  queryForAddUserCombobox,
  updatePermissionLevel,
} from '../AclEditor/AclEditorTestUtils'
import {
  AUTHENTICATED_GROUP_DISPLAY_TEXT,
  PUBLIC_GROUP_DISPLAY_TEXT,
} from '../TeamBadge'
import {
  CREATE_LOCAL_SHARING_SETTINGS,
  DELETE_LOCAL_SHARING_SETTINGS,
} from './CreateOrDeleteLocalSharingSettingsButton'
import EntityAclEditor, {
  EntityAclEditorHandle,
  EntityAclEditorProps,
} from './EntityAclEditor'

const onUpdateSuccess = vi.fn()
const onCanSaveChange = vi.fn()
const createAclSpy = vi.spyOn(SynapseClient, 'createEntityACL')
const updateAclSpy = vi.spyOn(SynapseClient, 'updateEntityACL')
const deleteAclSpy = vi.spyOn(SynapseClient, 'deleteEntityACL')
const sendMessageSpy = vi.spyOn(SynapseClient, 'sendMessage')

function renderComponent(props: EntityAclEditorProps) {
  const ref = createRef<EntityAclEditorHandle>()
  const component = render(<EntityAclEditor ref={ref} {...props} />, {
    wrapper: createWrapper(),
  })
  return { ref, component }
}

async function setUp(
  props: EntityAclEditorProps,
  expectedResourceAccessItems: number,
) {
  const user = userEvent.setup()
  const { ref, component } = renderComponent(props)

  let itemRows: HTMLElement[] = []
  await waitFor(() => {
    itemRows = screen.getAllByRole('row')
    expect(itemRows).toHaveLength(expectedResourceAccessItems)
  })

  return { ref, component, itemRows, user }
}

async function checkNotifyUsers(user: ReturnType<(typeof userEvent)['setup']>) {
  const notifyCheckbox = screen.getByLabelText(
    NOTIFY_NEW_ACL_USERS_CHECKBOX_LABEL,
  )
  await user.click(notifyCheckbox)
}

function verifyHasLocalSharingSettingsMessage() {
  const localSharingSettingsAlert = screen.getByText(
    /The local sharing settings/,
    { exact: false },
  )
  expect(localSharingSettingsAlert.textContent).toEqual(
    'The local sharing settings shown below are not being inherited from a parent resource.',
  )
}

function verifyHasProjectMessage() {
  screen.getByText(/The sharing settings shown below apply to this project/)
}

function verifyInheritsSharingSettingsFromBenefactorMessage() {
  screen.getByText(
    /The sharing settings shown below are currently being inherited/,
    { exact: false },
  )
}

function verifyInheritsSharingSettingsPostUploadMessage() {
  screen.getByText(
    /Currently, the sharing settings are inherited from the \w+ named/,
    { exact: false },
  )
}

describe('EntityAclEditor', () => {
  beforeEach(() => vi.clearAllMocks())
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  it('can update an ACL', async () => {
    const { ref, user } = await setUp(
      {
        entityId: mockFileEntityWithLocalSharingSettingsData.id,
        onCanSaveChange,
        onUpdateSuccess,
      },
      mockFileEntityWithLocalSharingSettingsData.bundle!.benefactorAcl
        .resourceAccess.length,
    )
    verifyHasLocalSharingSettingsMessage()

    // Add a user to the ACL
    const newUserRow = await addUserToAcl(user, MOCK_USER_NAME_2)
    confirmItem(newUserRow, MOCK_USER_NAME_2, 'Can download')

    // Update the permission level of the new user
    await updatePermissionLevel(newUserRow, user, 'Can edit & delete')

    await waitFor(() => expect(onCanSaveChange).toHaveBeenLastCalledWith(true))

    act(() => {
      ref.current!.save()
    })

    await waitFor(() => {
      expect(updateAclSpy).toHaveBeenCalledWith(
        {
          ...mockFileEntityWithLocalSharingSettingsData.bundle!
            .accessControlList,
          resourceAccess: [
            ...mockFileEntityWithLocalSharingSettingsData.bundle!
              .accessControlList!.resourceAccess,
            {
              principalId: MOCK_USER_ID_2,
              accessType: expect.arrayContaining([
                'READ',
                'DOWNLOAD',
                'UPDATE',
                'DELETE',
              ]),
            },
          ],
        },
        MOCK_ACCESS_TOKEN,
      )
      expect(onUpdateSuccess).toHaveBeenCalled()
      expect(sendMessageSpy).not.toHaveBeenCalled()
    })
  })
  it('can create an ACL on an entity that inherits from a benefactor', async () => {
    const { ref, user } = await setUp(
      {
        entityId: mockFileEntity.id,
        onCanSaveChange,
        onUpdateSuccess,
      },
      mockFileEntityData.bundle.benefactorAcl.resourceAccess.length,
    )
    verifyInheritsSharingSettingsFromBenefactorMessage()

    expect(
      screen.queryByText(
        'You do not have sufficient privileges to modify the sharing settings.',
      ),
    ).not.toBeInTheDocument()
    // None of the ACL items should be editable since they are inherited
    expect(screen.queryByRole('combobox')).not.toBeInTheDocument()
    const createLocalSharingSettingsButton = screen.getByRole('button', {
      name: CREATE_LOCAL_SHARING_SETTINGS,
    })

    await user.click(createLocalSharingSettingsButton)

    // Message about local sharing settings should change
    verifyHasLocalSharingSettingsMessage()

    // The shown sharing settings should not change, but should now be editable
    expect(screen.getAllByRole('row')).toHaveLength(
      mockFileEntityData.bundle.benefactorAcl.resourceAccess.length,
    )
    expect(screen.queryAllByRole('combobox')).toHaveLength(
      mockFileEntityData.bundle.benefactorAcl.resourceAccess.length,
    )

    // Add a user to the ACL
    const newUserRow = await addUserToAcl(user, MOCK_USER_NAME_2)
    confirmItem(newUserRow, MOCK_USER_NAME_2, 'Can download')

    await waitFor(() => expect(onCanSaveChange).toHaveBeenLastCalledWith(true))

    act(() => {
      ref.current!.save()
    })

    await waitFor(() => {
      expect(createAclSpy).toHaveBeenCalledWith(
        {
          id: mockFileEntityData.id,
          resourceAccess: expect.arrayContaining([
            ...mockFileEntityData.bundle.benefactorAcl.resourceAccess.map(
              ra => {
                return {
                  ...ra,
                  accessType: expect.arrayContaining(ra.accessType),
                }
              },
            ),
            {
              principalId: MOCK_USER_ID_2,
              accessType: expect.arrayContaining(['READ', 'DOWNLOAD']),
            },
          ]),
        },
        MOCK_ACCESS_TOKEN,
      )
      expect(onUpdateSuccess).toHaveBeenCalled()
      expect(sendMessageSpy).not.toHaveBeenCalled()
    })
  })
  it('can delete an ACL on an entity that can inherit from a benefactor', async () => {
    const { ref, user } = await setUp(
      {
        entityId: mockFileEntityWithLocalSharingSettingsData.id,
        onCanSaveChange,
        onUpdateSuccess,
      },
      mockFileEntityWithLocalSharingSettingsData.bundle!.benefactorAcl
        .resourceAccess.length,
    )
    verifyHasLocalSharingSettingsMessage()

    // None of the ACL items should be editable since they are inherited
    const deleteLocalSharingSettingsButton = screen.getByRole('button', {
      name: /Delete local sharing settings/,
    })
    await user.click(deleteLocalSharingSettingsButton)

    // The shown items should now match the parent benefactor's ACL
    expect(screen.getAllByRole('row')).toHaveLength(
      mockProjectEntityData.bundle.benefactorAcl.resourceAccess.length,
    )

    // The items should not be editable
    expect(screen.queryByRole('combobox')).not.toBeInTheDocument()

    // Message about local sharing settings should change
    verifyInheritsSharingSettingsFromBenefactorMessage()

    act(() => {
      ref.current!.save()
    })

    await waitFor(() => {
      expect(deleteAclSpy).toHaveBeenCalledWith(
        mockFileEntityWithLocalSharingSettingsData.id,
        MOCK_ACCESS_TOKEN,
      )
      expect(onUpdateSuccess).toHaveBeenCalled()
      expect(sendMessageSpy).not.toHaveBeenCalled()
    })
  })

  it('cannot delete an ACL if permissions do not allow', async () => {
    // The mock project has the permission `canEnableInheritance: false`
    await setUp(
      {
        entityId: mockProject.id,
        onCanSaveChange,
        onUpdateSuccess,
      },
      mockProject.bundle.benefactorAcl.resourceAccess.length,
    )
    verifyHasProjectMessage()

    expect(
      screen.queryByRole('button', {
        name: /Delete local sharing settings/,
      }),
    ).not.toBeInTheDocument()
  })

  it('can send messages to users added to an updated ACL', async () => {
    const { ref, user } = await setUp(
      {
        entityId: mockFileEntityWithLocalSharingSettingsData.id,
        onCanSaveChange,
        onUpdateSuccess,
      },
      mockFileEntityWithLocalSharingSettingsData.bundle!.benefactorAcl
        .resourceAccess.length,
    )

    await checkNotifyUsers(user)

    // Add a user to the ACL
    const newUserRow = await addUserToAcl(user, MOCK_USER_NAME_2)
    confirmItem(newUserRow, MOCK_USER_NAME_2, 'Can download')

    // Update the permission level of the new user
    await updatePermissionLevel(newUserRow, user, 'Can edit & delete')

    await waitFor(() => expect(onCanSaveChange).toHaveBeenLastCalledWith(true))

    act(() => {
      ref.current!.save()
    })

    await waitFor(() => {
      expect(updateAclSpy).toHaveBeenCalledWith(
        {
          ...mockFileEntityWithLocalSharingSettingsData.bundle!
            .accessControlList,
          resourceAccess: [
            ...mockFileEntityWithLocalSharingSettingsData.bundle!
              .accessControlList!.resourceAccess,
            {
              principalId: MOCK_USER_ID_2,
              accessType: expect.arrayContaining([
                'READ',
                'DOWNLOAD',
                'UPDATE',
                'DELETE',
              ]),
            },
          ],
        },
        MOCK_ACCESS_TOKEN,
      )
      expect(onUpdateSuccess).toHaveBeenCalled()
      expect(sendMessageSpy).toHaveBeenCalledWith(
        [String(MOCK_USER_ID_2)],
        `${mockFileEntityWithLocalSharingSettingsData.name} (shared on Synapse)`,
        expect.stringMatching(
          /[\w\s]+has shared an item with you on Synapse:\s.+Synapse:\w+\d+/,
        ),
        MOCK_ACCESS_TOKEN,
      )
    })
  })
  it('can send messages to users added a new ACL', async () => {
    const { ref, user } = await setUp(
      {
        entityId: mockFileEntity.id,
        onCanSaveChange,
        onUpdateSuccess,
      },
      mockFileEntityData.bundle.benefactorAcl.resourceAccess.length,
    )
    verifyInheritsSharingSettingsFromBenefactorMessage()

    // None of the ACL items should be editable since they are inherited
    const createLocalSharingSettingsButton = screen.getByRole('button', {
      name: CREATE_LOCAL_SHARING_SETTINGS,
    })

    await user.click(createLocalSharingSettingsButton)

    // Message about local sharing settings should change
    verifyHasLocalSharingSettingsMessage()

    await checkNotifyUsers(user)

    // Add a user to the ACL
    const newUserRow = await addUserToAcl(user, MOCK_USER_NAME_2)
    confirmItem(newUserRow, MOCK_USER_NAME_2, 'Can download')

    await waitFor(() => expect(onCanSaveChange).toHaveBeenLastCalledWith(true))

    act(() => {
      ref.current!.save()
    })

    await waitFor(() => {
      expect(createAclSpy).toHaveBeenCalledWith(
        {
          id: mockFileEntityData.id,
          resourceAccess: expect.arrayContaining([
            ...mockFileEntityData.bundle.benefactorAcl.resourceAccess.map(
              ra => {
                return {
                  ...ra,
                  accessType: expect.arrayContaining(ra.accessType),
                }
              },
            ),
            {
              principalId: MOCK_USER_ID_2,
              accessType: expect.arrayContaining(['READ', 'DOWNLOAD']),
            },
          ]),
        },
        MOCK_ACCESS_TOKEN,
      )
      expect(onUpdateSuccess).toHaveBeenCalled()
      expect(sendMessageSpy).toHaveBeenCalledWith(
        [String(MOCK_USER_ID_2)],
        `${mockFileEntityData.name} (shared on Synapse)`,
        expect.stringMatching(
          /[\w\s]+has shared an item with you on Synapse:\s.+Synapse:\w+\d+/,
        ),
        MOCK_ACCESS_TOKEN,
      )
    })
  })
  it('displays information when the entity is OPEN_DATA and allows public to download', async () => {
    const { itemRows } = await setUp(
      {
        entityId: mockFileOpenDataWithPublicRead.id,
        onCanSaveChange,
        onUpdateSuccess,
      },
      mockFileOpenDataWithPublicRead.bundle!.benefactorAcl.resourceAccess
        .length,
    )
    await screen.findByText('This is anonymous access data.')
    await screen.findByText(
      'Anyone can download it, even if they aren’t logged in to Synapse.',
    )

    // Verify that the public and authenticated are displayed as 'Can download'
    await confirmItemViaQuery(
      itemRows,
      PUBLIC_GROUP_DISPLAY_TEXT,
      'Can download',
    )
    await confirmItemViaQuery(
      itemRows,
      AUTHENTICATED_GROUP_DISPLAY_TEXT,
      'Can download',
    )
  })
  it('displays information when the entity is OPEN_DATA and does not allow public to view', async () => {
    await setUp(
      {
        entityId: mockFileOpenDataWithNoPublicRead.id,
        onCanSaveChange,
        onUpdateSuccess,
      },
      mockFileOpenDataWithNoPublicRead.bundle!.benefactorAcl.resourceAccess
        .length,
    )
    await screen.findByText('This is not anonymous access data.')
    await screen.findByText(
      'You must grant public access for all users to be able to anonymously download it.',
    )
  })

  it('displays information when the entity not OPEN_DATA and allows public to view', async () => {
    await setUp(
      {
        entityId: mockFilePublicReadNoOpenData.id,
        onCanSaveChange,
        onUpdateSuccess,
      },
      mockFilePublicReadNoOpenData.bundle!.benefactorAcl.resourceAccess.length,
    )
    await screen.findByText(
      'Users must be logged in to download public access data.',
    )
    await screen.findByText(
      'This data is publicly viewable, but only registered and logged-in users can download it.',
    )
  })

  it('adding the PUBLIC group assigns the correct permissions', async () => {
    const initialNumberOfAccessors =
      mockFileEntityWithLocalSharingSettingsData.bundle!.benefactorAcl
        .resourceAccess.length
    const { user } = await setUp(
      {
        entityId: mockFileEntityWithLocalSharingSettingsData.id,
        onCanSaveChange,
        onUpdateSuccess,
      },
      initialNumberOfAccessors,
    )

    verifyHasLocalSharingSettingsMessage()

    // Add public to the ACL
    const { publicRow, authenticatedUsersRow } = await addPublicToAcl(user)

    // Verify the initial permissions
    confirmItem(publicRow, PUBLIC_GROUP_DISPLAY_TEXT, 'Can view')
    confirmItem(
      authenticatedUsersRow,
      AUTHENTICATED_GROUP_DISPLAY_TEXT,
      'Can download',
    )

    // Verify that the public permissions are not editable
    expect(within(publicRow).queryByRole('combobox')).not.toBeInTheDocument()
    // Verify that the authenticated group permissions are editable
    expect(
      within(authenticatedUsersRow).queryByRole('combobox'),
    ).toBeInTheDocument()
  })

  it('current user cannot remove themselves', async () => {
    const { itemRows } = await setUp(
      {
        entityId: mockFileEntityWithLocalSharingSettingsData.id,
        onCanSaveChange,
        onUpdateSuccess,
      },
      mockFileEntityWithLocalSharingSettingsData.bundle!.benefactorAcl
        .resourceAccess.length,
    )

    const currentUserRow = await confirmItemViaQuery(
      itemRows,
      MOCK_USER_NAME,
      'Administrator',
    )

    expect(within(currentUserRow).queryByRole('button')).not.toBeInTheDocument()
  })

  it('is not editable if the current user does not have permission', async () => {
    const { itemRows } = await setUp(
      {
        entityId: mockFileEntityCurrentUserCannotEdit.id,
        onCanSaveChange,
        onUpdateSuccess,
      },
      mockFileEntityCurrentUserCannotEdit.bundle!.benefactorAcl.resourceAccess
        .length,
    )

    verifyHasLocalSharingSettingsMessage()

    // Verify there are no edit controls on any item
    itemRows.forEach(row => {
      expect(within(row).queryByRole('combobox')).not.toBeInTheDocument()
      expect(within(row).queryByRole('button')).not.toBeInTheDocument()
    })

    // No controls to toggle inheritance
    expect(
      screen.queryByRole('button', { name: CREATE_LOCAL_SHARING_SETTINGS }),
    ).not.toBeInTheDocument()
    expect(
      screen.queryByRole('button', { name: DELETE_LOCAL_SHARING_SETTINGS }),
    ).not.toBeInTheDocument()

    // No controls to add to the ACL
    expect(queryForAddUserCombobox()).not.toBeInTheDocument()
    expect(
      screen.queryByLabelText(NOTIFY_NEW_ACL_USERS_CHECKBOX_LABEL),
    ).not.toBeInTheDocument()

    // No controls to toggle public access
    expect(
      screen.queryByRole('button', {
        name: REMOVE_PUBLIC_PRINCIPALS_BUTTON_TEXT,
      }),
    ).not.toBeInTheDocument()
    expect(
      screen.queryByRole('button', { name: ADD_PUBLIC_PRINCIPALS_BUTTON_TEXT }),
    ).not.toBeInTheDocument()

    screen.getByText(
      'You do not have sufficient privileges to modify the sharing settings.',
    )
  })

  it('shows appropriate UI in the post-upload scenario', async () => {
    const { ref, user } = await setUp(
      {
        entityId: mockProject.id,
        onCanSaveChange,
        onUpdateSuccess,
        isAfterUpload: true,
      },
      mockProjectEntityData.bundle.accessControlList!.resourceAccess.length,
    )
    verifyInheritsSharingSettingsPostUploadMessage()

    // Verify no alert appears (yet)
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()

    // Add a user to the ACL
    const newUserRow = await addUserToAcl(user, MOCK_USER_NAME_2)
    confirmItem(newUserRow, MOCK_USER_NAME_2, 'Can download')
    await waitFor(() => expect(onCanSaveChange).toHaveBeenLastCalledWith(true))

    // Verify that an alert appears that indicates that the entire project will be updated
    const alert = await screen.findByRole('alert')
    within(alert).getByText(/Edits will affect settings of entire project/)

    // Save the project
    act(() => {
      ref.current!.save()
    })

    await waitFor(() => {
      expect(updateAclSpy).toHaveBeenCalledWith(
        {
          ...mockProject.bundle.accessControlList,
          resourceAccess: expect.any(Array),
        },
        MOCK_ACCESS_TOKEN,
      )
      expect(onUpdateSuccess).toHaveBeenCalled()
      expect(sendMessageSpy).not.toHaveBeenCalled()
    })
  })
  it('displays an error on mutate failure', async () => {
    const errorReason = 'Something was invalid'
    server.use(
      http.put(
        `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${ENTITY_ID(
          ':entityId',
        )}/acl`,
        () => {
          const status = 400
          const response: SynapseApiResponse<AccessControlList> = {
            concreteType: 'org.sagebionetworks.repo.model.ErrorResponse',
            reason: errorReason,
          }

          return HttpResponse.json(response, { status })
        },
      ),
    )

    const { ref, user } = await setUp(
      {
        entityId: mockFileEntityWithLocalSharingSettingsData.id,
        onCanSaveChange,
        onUpdateSuccess,
      },
      mockFileEntityWithLocalSharingSettingsData.bundle!.benefactorAcl
        .resourceAccess.length,
    )

    // Enable sending a message, so we can verify that it is not sent when the update fails
    await checkNotifyUsers(user)

    // Add a user to the ACL
    const newUserRow = await addUserToAcl(user, MOCK_USER_NAME_2)
    confirmItem(newUserRow, MOCK_USER_NAME_2, 'Can download')

    await waitFor(() => expect(onCanSaveChange).toHaveBeenLastCalledWith(true))

    act(() => {
      ref.current!.save()
    })

    const alert = await screen.findByRole('alert')
    within(alert).getByText(errorReason)

    await waitFor(() => {
      expect(updateAclSpy).toHaveBeenCalled()
      // Verify callback and sendMessage were not called
      expect(onUpdateSuccess).not.toHaveBeenCalled()
      expect(sendMessageSpy).not.toHaveBeenCalled()
    })
  })
})
