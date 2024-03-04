import React from 'react'
import { act, render, screen, waitFor, within } from '@testing-library/react'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import ChallengeTeamWizard from './index'
import userEvent from '@testing-library/user-event'
import { server } from '../../mocks/msw/server'
import mockProject from '../../mocks/entity/mockProject'
import {
  mockTeamData2,
  mockTeamData3,
  mockTeamData4,
  mockTeamData5,
} from '../../mocks/team/mockTeam'
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'
import SynapseClient from '../../synapse-client'

const createTeamSpy = jest.spyOn(SynapseClient, 'createTeam')
const registerChallengeTeamSpy = jest.spyOn(
  SynapseClient,
  'registerChallengeTeam',
)
const addUserToTeamSpy = jest.spyOn(
  SynapseClient,
  'addTeamMemberAsAuthenticatedUserOrAdmin',
)
const createMembershipRequestSpy = jest.spyOn(
  SynapseClient,
  'createMembershipRequest',
)

function renderComponent() {
  const props = {
    projectId: mockProject.id,
    isShowingModal: true,
    onClose: jest.fn(),
  }

  const user = userEvent.setup()
  const component = render(<ChallengeTeamWizard {...props} />, {
    wrapper: createWrapper(),
  })

  act(() => {
    mockAllIsIntersecting(true)
  })

  const dialog = screen.getByRole('dialog')

  return { user, component, dialog }
}

describe('ChallengeTeamWizard tests', () => {
  beforeAll(() => server.listen())
  beforeEach(() => {
    jest.clearAllMocks()
  })
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  it('Shows the modal and starts on the "select team" step', async () => {
    const { dialog } = renderComponent()
    await within(dialog).findByRole('heading', {
      name: 'Select Your Challenge Team',
    })
  })

  it('handles joining a team where canPublicJoin is true', async () => {
    const teamToSelect = mockTeamData2

    const { user, dialog } = renderComponent()

    const teamsTable = await within(dialog).findByRole('grid')

    // Select the team
    const radioButton = await within(teamsTable).findByLabelText(
      `Select ${teamToSelect.name}`,
    )
    await user.click(radioButton)

    const joinTeamButton = await within(dialog).findByRole('button', {
      name: 'Join Team',
    })
    await waitFor(() => expect(joinTeamButton).not.toBeDisabled())
    await user.click(joinTeamButton)

    await within(dialog).findByRole('heading', {
      name: 'Registration Successful!',
    })

    await within(dialog).findByText(`You have successfully joined team`, {
      exact: false,
    })
    await within(dialog).findByText(teamToSelect.name, { exact: false })
    await within(dialog).findByText(`and have been added to this challenge.`, {
      exact: false,
    })

    expect(addUserToTeamSpy).toHaveBeenCalled()
  })

  it('handles submitting a request to a team where the current user can request membership', async () => {
    const teamToSelect = mockTeamData3

    const { user, dialog } = renderComponent()

    const teamsTable = await within(dialog).findByRole('grid')

    // Select the team
    const radioButton = await within(teamsTable).findByLabelText(
      `Select ${teamToSelect.name}`,
    )
    await user.click(radioButton)

    const requestToJoinTeamButton = await within(dialog).findByRole('button', {
      name: 'Request to Join Team',
    })
    await waitFor(() => expect(requestToJoinTeamButton).not.toBeDisabled())
    await user.click(requestToJoinTeamButton)

    await within(dialog).findByRole('heading', {
      name: 'Request Team Membership',
    })
    await within(dialog).findByText(
      'The following message will be sent to the Team Manager(s)',
      { exact: false },
    )
    const messageField = await within(dialog).findByRole('textbox')

    await user.type(messageField, 'Please let me join')

    const sendRequestButton = await within(dialog).findByRole('button', {
      name: 'Send Request',
    })
    await waitFor(() => expect(sendRequestButton).not.toBeDisabled())
    await user.click(sendRequestButton)

    await within(dialog).findByRole('heading', {
      name: 'Request Sent',
    })

    await within(dialog).findByText(
      `Team Manager(s) have received your request. Check your Synapse email address for status of your request.`,
    )

    expect(createMembershipRequestSpy).toHaveBeenCalled()
  })

  it('handles joining a team where the current user has an open invitation', async () => {
    const teamToSelect = mockTeamData4

    const { user, dialog } = renderComponent()

    const teamsTable = await within(dialog).findByRole('grid')

    // Verify that the table indicates that the user was invited to one of the teams
    await within(teamsTable).findByLabelText(
      'You have been invited to join this team',
    )

    // Select the team
    const radioButton = await within(teamsTable).findByLabelText(
      `Select ${teamToSelect.name}`,
    )
    await user.click(radioButton)

    const viewInvitationButton = await within(dialog).findByRole('button', {
      name: 'View Invitation to Join Team',
    })
    await waitFor(() => expect(viewInvitationButton).not.toBeDisabled())
    await user.click(viewInvitationButton)

    await within(dialog).findByRole('heading', {
      name: 'Invitation to Join Team',
    })
    await within(dialog).findByText('Do you want to accept this invitation?')

    const acceptInvitationButton = await within(dialog).findByRole('button', {
      name: 'Accept Invitation',
    })
    await waitFor(() => expect(acceptInvitationButton).not.toBeDisabled())
    await user.click(acceptInvitationButton)

    await within(dialog).findByRole('heading', {
      name: 'Registration Successful!',
    })

    await within(dialog).findByText(`You have successfully joined team`, {
      exact: false,
    })
    await within(dialog).findByText(teamToSelect.name, { exact: false })
    await within(dialog).findByText(`and have been added to this challenge.`, {
      exact: false,
    })

    expect(addUserToTeamSpy).toHaveBeenCalled()
    expect(createMembershipRequestSpy).not.toHaveBeenCalled()
  })

  it('prevents submitting a request to a team where an open request already exists', async () => {
    const teamToSelect = mockTeamData5

    const { user, dialog } = renderComponent()

    const teamsTable = await within(dialog).findByRole('grid')

    // Select the team
    const radioButton = await within(teamsTable).findByLabelText(
      `Select ${teamToSelect.name}`,
    )
    await user.click(radioButton)

    const joinRequestPendingButton = await within(dialog).findByRole('button', {
      name: 'Join Request Pending',
    })
    expect(joinRequestPendingButton).toBeDisabled()

    expect(createMembershipRequestSpy).not.toHaveBeenCalled()
    expect(addUserToTeamSpy).not.toHaveBeenCalled()
  })

  it('allows creating a new submission team', async () => {
    const newTeamName = 'My New Team'
    const { user, dialog } = renderComponent()

    const createNewTeamButton = await within(dialog).findByRole('button', {
      name: 'Create New Team',
    })

    await user.click(createNewTeamButton)
    await within(dialog).findByRole('heading', {
      name: 'Create Team',
    })
    const teamNameField = await within(dialog).findByRole('textbox', {
      name: 'Team Name',
    })
    await user.type(teamNameField, newTeamName)

    const finishCreatingTeamButton = await within(dialog).findByRole('button', {
      name: 'Create Team',
    })

    await user.click(finishCreatingTeamButton)

    await within(dialog).findByRole('heading', {
      name: 'Registration Successful!',
    })

    await within(dialog).findByText(`You have successfully created team`, {
      exact: false,
    })
    await within(dialog).findByText(newTeamName, { exact: false })
    await within(dialog).findByText(`and have been added to this challenge.`, {
      exact: false,
    })

    expect(createTeamSpy).toHaveBeenCalled()
    expect(registerChallengeTeamSpy).toHaveBeenCalled()
  })
})
