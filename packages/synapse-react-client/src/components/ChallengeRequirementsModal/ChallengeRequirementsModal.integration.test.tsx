import React from 'react'
import { render, screen, waitFor, within } from '@testing-library/react'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import ChallengeRequirementsModal, {
  ChallengeRequirementsModalProps,
} from './ChallengeRequirementsModal'
import { server } from '../../mocks/msw/server'
import userEvent from '@testing-library/user-event'
import SynapseClient from '../../synapse-client'
import { MOCK_USER_ID } from '../../mocks/user/mock_user_profile'
import mockProject from '../../mocks/entity/mockProject'
import { MOCK_CHALLENGE_PARTICIPANT_TEAM_ID } from '../../mocks/team/mockTeam'
import { getAccessRequirementStatusHandlers } from '../../mocks/msw/handlers/accessRequirementHandlers'
import { BackendDestinationEnum } from '../../utils/functions'
import { getEndpoint } from '../../utils/functions/getEndpoint'
import { mockSelfSignAccessRequirement } from '../../mocks/mockAccessRequirements'
import { MOCK_ACCESS_TOKEN } from '../../mocks/MockSynapseContext'

async function renderComponent(props: ChallengeRequirementsModalProps) {
  const user = userEvent.setup()
  const component = render(<ChallengeRequirementsModal {...props} />, {
    wrapper: createWrapper(),
  })

  const dialog = await screen.findByRole('dialog')
  await within(dialog).findByRole('heading', {
    name: 'Challenge Terms and Conditions',
  })
  const registerButton = await within(dialog).findByRole('button', {
    name: 'Register',
  })
  const cancelButton = await within(dialog).findByRole('button', {
    name: 'Cancel',
  })
  const closeModalButton = await within(dialog).findByRole('button', {
    name: 'close',
  })
  return {
    user,
    component,
    dialog,
    registerButton,
    cancelButton,
    closeModalButton,
  }
}

const mockOnRegisterComplete = jest.fn()
const mockOnCancel = jest.fn()

const addTeamMemberSpy = jest.spyOn(
  SynapseClient,
  'addTeamMemberAsAuthenticatedUserOrAdmin',
)

describe('ChallengeRequirementsModal', () => {
  beforeAll(() => server.listen())
  beforeEach(() => {
    server.use(
      ...getAccessRequirementStatusHandlers(
        getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
        [
          {
            accessRequirementId: String(mockSelfSignAccessRequirement.id),
            concreteType:
              'org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus',
            isApproved: false,
          },
        ],
      ),
    )
  })
  afterEach(() => {
    server.restoreHandlers()
    jest.clearAllMocks()
  })
  afterAll(() => server.close())

  it("Shows a set of requirements. Once the user fulfills those requirements, they can click 'Register' to join the participant team.", async () => {
    const { user, dialog, registerButton } = await renderComponent({
      open: true,
      projectId: mockProject.id,
      onRegisterComplete: mockOnRegisterComplete,
      onCancel: mockOnCancel,
    })

    // The button should be disabled because we do not meet the access requirements to join the team.
    expect(registerButton).toBeDisabled()

    // Accept the click-wrap access requirement
    const acceptClickWrapButton = await within(dialog).findByRole('button', {
      name: 'I Accept Terms of Use',
    })
    await user.click(acceptClickWrapButton)

    // Now the button should be enabled
    await waitFor(() => expect(registerButton).toBeEnabled())

    // Click the register button and verify that we joined the team
    await user.click(registerButton)
    await waitFor(() => {
      expect(addTeamMemberSpy).toHaveBeenCalledWith(
        String(MOCK_CHALLENGE_PARTICIPANT_TEAM_ID),
        String(MOCK_USER_ID),
        MOCK_ACCESS_TOKEN,
      )
      expect(mockOnRegisterComplete).toHaveBeenCalled()
      expect(mockOnRegisterComplete).toHaveBeenCalled()
    })
    expect(mockOnCancel).not.toHaveBeenCalled()
  })

  it('Calls onCancel when the user clicks the cancel button', async () => {
    const { user, cancelButton } = await renderComponent({
      open: true,
      projectId: mockProject.id,
      onRegisterComplete: mockOnRegisterComplete,
      onCancel: mockOnCancel,
    })

    await user.click(cancelButton)

    expect(mockOnCancel).toHaveBeenCalled()
    expect(mockOnRegisterComplete).not.toHaveBeenCalled()
  })

  it('Calls onCancel when the user clicks the close button', async () => {
    const { user, closeModalButton } = await renderComponent({
      open: true,
      projectId: mockProject.id,
      onRegisterComplete: mockOnRegisterComplete,
      onCancel: mockOnCancel,
    })

    await user.click(closeModalButton)

    expect(mockOnCancel).toHaveBeenCalled()
    expect(mockOnRegisterComplete).not.toHaveBeenCalled()
  })

  it('Calls onCancel when the user rejects AR terms', async () => {
    const { user } = await renderComponent({
      open: true,
      projectId: mockProject.id,
      onRegisterComplete: mockOnRegisterComplete,
      onCancel: mockOnCancel,
    })

    const rejectTermsButton = await screen.findByRole('button', {
      name: 'I do not accept',
    })
    await user.click(rejectTermsButton)

    expect(mockOnCancel).toHaveBeenCalled()
    expect(mockOnRegisterComplete).not.toHaveBeenCalled()
  })
})
