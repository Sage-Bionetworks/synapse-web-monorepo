import { MOCK_INVALID_PROJECT_NAME } from '@/mocks/entity/mockEntity'
import mockProjectEntityData from '@/mocks/entity/mockProject'
import {
  MOCK_AUTHENTICATED_PRINCIPAL_ID,
  MOCK_PUBLIC_PRINCIPAL_ID,
} from '@/mocks/realm/mockRealmPrincipal'
import { server } from '@/mocks/msw/server'
import SynapseClient from '@/synapse-client'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { SynapseContextType } from '@/utils/context/SynapseContext'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ACCESS_TYPE } from '@sage-bionetworks/synapse-types'
import { CANCEL_BUTTON_TEXT } from '../ConfirmationDialog/ConfirmationDialog'
import { CLOSE_BUTTON_LABEL } from '../DialogBase'
import {
  CreateProjectModal,
  CreateProjectModalProps,
} from './CreateProjectModal'

const MOCK_PROJECT_NAME = mockProjectEntityData.name

const defaultProps: CreateProjectModalProps = {
  isShowingModal: true,
  onClose: vi.fn(),
}

function renderComponent(wrapperProps?: SynapseContextType) {
  render(<CreateProjectModal {...defaultProps} />, {
    wrapper: createWrapper(wrapperProps),
  })
}

function setUp(wrapperProps?: SynapseContextType) {
  const user = userEvent.setup()
  const component = renderComponent(wrapperProps)
  const input = screen.getByRole<HTMLInputElement>('textbox', {
    name: /project name/i,
  })
  const saveButton = screen.getByRole('button', { name: /save/i })
  return { component, user, input, saveButton }
}

describe('CreateProjectModal tests', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  it('Shows the modal', async () => {
    renderComponent()
    await screen.findByText('Create a new Project')
  })

  it('Creates project on submit', async () => {
    const { user, input, saveButton } = setUp()

    await user.type(input, MOCK_PROJECT_NAME)
    expect(input.value).toBe(MOCK_PROJECT_NAME)
    await user.click(saveButton)

    // should show success alert
    await screen.findByText('Project created')
  })

  it('Creates project on enter', async () => {
    const { user, input } = setUp()

    await user.type(input, MOCK_PROJECT_NAME)
    expect(input.value).toBe(MOCK_PROJECT_NAME)
    await user.keyboard('{ENTER}')

    // should show success alert
    await screen.findByText('Project created')
  })

  it('Shows error if creation fails', async () => {
    const { user, input, saveButton } = setUp()

    await user.type(input, MOCK_INVALID_PROJECT_NAME)
    expect(input.value).toBe(MOCK_INVALID_PROJECT_NAME)
    await user.click(saveButton)

    // should show error alert
    await screen.findByText('Invalid project name')
  })

  it('Clears alert and project name on cancel', async () => {
    const { user, input, saveButton } = setUp()

    await user.type(input, MOCK_INVALID_PROJECT_NAME)
    await user.click(saveButton)

    const errorMessage = await screen.findByText('Invalid project name')

    const cancelButton = screen.getByRole('button', {
      name: CANCEL_BUTTON_TEXT,
    })
    await user.click(cancelButton)

    expect(errorMessage).not.toBeInTheDocument()
    expect(input.value).toBe('')
  })

  it('Clears alert and project name on closing dialog', async () => {
    const { user, input, saveButton } = setUp()

    await user.type(input, MOCK_INVALID_PROJECT_NAME)
    await user.click(saveButton)

    const errorMessage = await screen.findByText('Invalid project name')

    const closeButton = screen.getByRole('button', { name: CLOSE_BUTTON_LABEL })
    await user.click(closeButton)

    expect(errorMessage).not.toBeInTheDocument()
    expect(input.value).toBe('')
  })

  describe('ACL visibility', () => {
    const mockInitialAcl = {
      id: 'syn123',
      etag: 'initial-etag',
      creationDate: '2020-01-01T00:00:00.000Z',
      resourceAccess: [
        {
          principalId: 999,
          accessType: [
            ACCESS_TYPE.READ,
            ACCESS_TYPE.UPDATE,
            ACCESS_TYPE.DELETE,
          ],
        },
      ],
    }

    let mockGetEntityACL: ReturnType<typeof vi.spyOn>
    let mockUpdateEntityACL: ReturnType<typeof vi.spyOn>

    beforeEach(() => {
      mockGetEntityACL = vi
        .spyOn(SynapseClient, 'getEntityACL')
        .mockResolvedValue(mockInitialAcl)
      mockUpdateEntityACL = vi
        .spyOn(SynapseClient, 'updateEntityACL')
        .mockResolvedValue(mockInitialAcl)
    })

    afterEach(() => {
      vi.restoreAllMocks()
    })

    it('does not call getEntityACL or updateEntityACL when visibility is PRIVATE', async () => {
      const { user, input, saveButton } = setUp()

      const privateRadio = screen.getByRole('radio', { name: /private/i })
      await user.click(privateRadio)

      await user.type(input, MOCK_PROJECT_NAME)
      await user.click(saveButton)

      await screen.findByText('Project created')

      expect(mockGetEntityACL).not.toHaveBeenCalled()
      expect(mockUpdateEntityACL).not.toHaveBeenCalled()
    })

    it('grants READ access to public and authenticated groups when visibility is DISCOVERABLE', async () => {
      const { user, input, saveButton } = setUp()

      const discoverableRadio = screen.getByRole('radio', {
        name: /discoverable/i,
      })
      await user.click(discoverableRadio)

      await user.type(input, MOCK_PROJECT_NAME)
      await user.click(saveButton)

      await screen.findByText('Project created')

      expect(mockUpdateEntityACL).toHaveBeenCalledWith(
        expect.objectContaining({
          resourceAccess: expect.arrayContaining([
            expect.objectContaining({
              principalId: MOCK_PUBLIC_PRINCIPAL_ID,
              accessType: [ACCESS_TYPE.READ],
            }),
            expect.objectContaining({
              principalId: MOCK_AUTHENTICATED_PRINCIPAL_ID,
              accessType: [ACCESS_TYPE.READ],
            }),
          ]),
        }),
        expect.anything(),
      )
    })

    it('grants READ to public group and READ+DOWNLOAD to authenticated users when visibility is PUBLIC', async () => {
      const { user, input, saveButton } = setUp()

      const publicRadio = screen.getByRole('radio', { name: /^public/i })
      await user.click(publicRadio)

      await user.type(input, MOCK_PROJECT_NAME)
      await user.click(saveButton)

      await screen.findByText('Project created')

      expect(mockUpdateEntityACL).toHaveBeenCalledWith(
        expect.objectContaining({
          resourceAccess: expect.arrayContaining([
            expect.objectContaining({
              principalId: MOCK_PUBLIC_PRINCIPAL_ID,
              accessType: [ACCESS_TYPE.READ],
            }),
            expect.objectContaining({
              principalId: MOCK_AUTHENTICATED_PRINCIPAL_ID,
              accessType: [ACCESS_TYPE.READ, ACCESS_TYPE.DOWNLOAD],
            }),
          ]),
        }),
        expect.anything(),
      )
    })

    it('still creates the project successfully when the ACL update fails', async () => {
      mockUpdateEntityACL.mockRejectedValue(
        Object.assign(new Error(), { reason: 'ACL update failed' }),
      )

      const { user, input, saveButton } = setUp()

      await user.type(input, MOCK_PROJECT_NAME)
      await user.click(saveButton)

      await screen.findByText('Project created')
    })
  })
})
