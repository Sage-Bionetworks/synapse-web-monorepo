import React from 'react'
import { act, render, screen, waitFor, within } from '@testing-library/react'
import {
  CreateChallengeTeam,
  CreateChallengeTeamHandle,
  TOO_MANY_INVITEES_ERROR,
} from './CreateChallengeTeam'
import {
  MOCK_CHALLENGE_ID,
  mockChallengeTeam,
} from '../../mocks/challenge/mockChallenge'
import userEvent from '@testing-library/user-event'
import { mockTeamData } from '../../mocks/team/mockTeam'
import {
  ChallengeTeam,
  MembershipInvitation,
  Team,
} from '@sage-bionetworks/synapse-types'
import { SynapseClientError } from '../../utils'
import useCreateAndRegisterChallengeTeam from './useCreateAndRegisterChallengeTeam'

jest.mock('./useCreateAndRegisterChallengeTeam')

const mockCreateAndRegisterTeam = jest.fn()
const mockUseCreateAndRegisterTeam = jest
  .mocked(useCreateAndRegisterChallengeTeam)
  .mockReturnValue({
    createAndRegisterTeam: mockCreateAndRegisterTeam,
    isPending: false,
    errors: undefined,
  })

function renderComponent() {
  const user = userEvent.setup()
  const ref = React.createRef<CreateChallengeTeamHandle>()
  const mockOnCanSubmitChange = jest.fn()
  const mockOnFinished = jest.fn()

  const component = render(
    <CreateChallengeTeam
      ref={ref}
      challengeId={MOCK_CHALLENGE_ID}
      onCanSubmitChange={mockOnCanSubmitChange}
      onFinished={mockOnFinished}
    />,
  )

  const nameField = screen.getByRole('textbox', { name: 'Team Name' })
  const descriptionField = screen.getByRole('textbox', {
    name: 'Team Description',
  })
  const messageField = screen.getByRole('textbox', {
    name: 'Recruitment Message',
  })
  const inviteeField = screen.getByRole('textbox', {
    name: /Emails/,
    exact: false,
  })

  return {
    user,
    ref,
    component,
    nameField,
    descriptionField,
    messageField,
    inviteeField,
    mockOnCanSubmitChange,
    mockOnFinished,
  }
}

const TEAM_NAME = 'My challenge submission team'
const TEAM_DESCRIPTION = 'The description for the new team'
const RECRUITMENT_MESSAGE = 'Come join my team!'
const EMAILS_TO_SEND = ['foo@bar.com', 'abc@xyz.com', 'qwerty@ui.op']

const MUTATION_SUCCESS_RESULT: [Team, ChallengeTeam, MembershipInvitation[]] = [
  mockTeamData,
  mockChallengeTeam(),
  [],
]

describe('CreateChallengeTeam', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('Successfully creates a team', async () => {
    mockCreateAndRegisterTeam.mockResolvedValue(MUTATION_SUCCESS_RESULT)

    const {
      ref,
      user,
      nameField,
      descriptionField,
      messageField,
      inviteeField,
      mockOnCanSubmitChange,
      mockOnFinished,
    } = renderComponent()

    await user.type(nameField, TEAM_NAME)
    await user.type(descriptionField, TEAM_DESCRIPTION)
    await user.type(messageField, RECRUITMENT_MESSAGE)
    await user.type(inviteeField, EMAILS_TO_SEND.join(', '))

    // Verify that we can submit the form
    expect(mockOnCanSubmitChange).toHaveBeenLastCalledWith(true)

    // Verify the form has not been submitted yet
    expect(mockCreateAndRegisterTeam).not.toHaveBeenCalled()
    expect(mockOnFinished).not.toHaveBeenCalled()

    // Submit the form
    act(() => {
      ref.current!.submit()
    })

    // Verify that the data was passed to the hook, and onFinished was called
    await waitFor(() => {
      expect(mockCreateAndRegisterTeam).toHaveBeenCalledTimes(1)
      expect(mockCreateAndRegisterTeam).toHaveBeenCalledWith(
        {
          name: TEAM_NAME,
          description: TEAM_DESCRIPTION,
        },
        MOCK_CHALLENGE_ID,
        EMAILS_TO_SEND,
        RECRUITMENT_MESSAGE,
      )
      expect(mockOnFinished).toHaveBeenCalledTimes(1)
    })
  })

  it('Prevents submitting the form before a team name is filled in', async () => {
    const { user, nameField, mockOnCanSubmitChange } = renderComponent()

    // Verify that the form cannot be submitted
    expect(mockOnCanSubmitChange).toHaveBeenLastCalledWith(false)

    await user.type(nameField, TEAM_NAME)

    // Verify that we can submit the form
    expect(mockOnCanSubmitChange).toHaveBeenLastCalledWith(true)
  })

  it('Does not permit inviting more than 3 email addresses', async () => {
    const { user, nameField, inviteeField, mockOnCanSubmitChange } =
      renderComponent()

    await user.type(nameField, TEAM_NAME)
    await user.type(inviteeField, EMAILS_TO_SEND.join(', '))

    // Verify that we can submit the form with 3 email addresses
    expect(mockOnCanSubmitChange).toHaveBeenLastCalledWith(true)

    // Add another and verify that an error appears
    await user.type(inviteeField, ', tooMany@emails.net')
    const alert = await screen.findByRole('alert')
    within(alert).getByText(TOO_MANY_INVITEES_ERROR)
  })

  it('Does not call onFinished when the mutation returns an error', async () => {
    const errorMessage = 'A team with that name already exists, so pick another'
    const error = new SynapseClientError(
      400,
      errorMessage,
      expect.getState().currentTestName!,
    )
    // TODO: Update the hook result to return an error AFTER mockCreateAndRegisterTeam is called
    mockUseCreateAndRegisterTeam.mockReturnValue({
      createAndRegisterTeam: mockCreateAndRegisterTeam,
      isPending: false,
      errors: [error],
    })
    mockCreateAndRegisterTeam.mockImplementation(() => {
      return Promise.reject(error)
    })

    const { ref, user, nameField, mockOnCanSubmitChange, mockOnFinished } =
      renderComponent()

    await user.type(nameField, TEAM_NAME)

    // Verify that we can submit the form
    expect(mockOnCanSubmitChange).toHaveBeenLastCalledWith(true)

    // Verify the form has not been submitted yet
    expect(mockCreateAndRegisterTeam).not.toHaveBeenCalled()
    expect(mockOnFinished).not.toHaveBeenCalled()

    // Submit the form
    act(() => {
      ref.current!.submit()
    })

    // Verify that the data was passed to the hook, and onFinished was NOT called
    await waitFor(() => {
      expect(mockCreateAndRegisterTeam).toHaveBeenCalledTimes(1)
      expect(mockCreateAndRegisterTeam).toHaveBeenCalledWith(
        {
          name: TEAM_NAME,
          description: '',
        },
        MOCK_CHALLENGE_ID,
        [],
        '',
      )
      expect(mockOnFinished).not.toHaveBeenCalled()
    })

    // Verify the error appears
    const alert = await screen.findByRole('alert')
    within(alert).getByText(errorMessage)
  })
})
