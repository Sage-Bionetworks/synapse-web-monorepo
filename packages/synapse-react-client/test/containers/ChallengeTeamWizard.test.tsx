import React from 'react'
import { FullContextProviderProps } from '../../src/utils/context/FullContextProvider'
import { act, render, screen, waitFor, within } from '@testing-library/react'
import { createWrapper } from '../testutils/TestingLibraryUtils'
import { SynapseClient } from '../../src'
import ChallengeTeamWizard from '../../src/components/ChallengeTeamWizard'
import {
  MOCK_CHALLENGE_PROJECT_ID,
  mockChallenge,
  mockChallengeTeamMember,
  mockChallengeTeamMembershipStatus,
  mockChallengeTeamResults,
  mockTeamList,
} from '../../mocks/mockChallenge'
import { mockUserProfileData } from '../../mocks/user/mock_user_profile'
import { ChallengeTeamWizardProps } from '../../src/components/ChallengeTeamWizard/ChallengeTeamWizard'
import userEvent from '@testing-library/user-event'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../src/utils/functions/getEndpoint'

const challengeTeamResults = mockChallengeTeamResults()
const challengeTeams = mockTeamList(challengeTeamResults.results)
const team1 = challengeTeams.list[0]

// console.log(challengeTeams)

jest
  .spyOn(SynapseClient, 'getUserProfile')
  .mockResolvedValue(mockUserProfileData)

jest.spyOn(SynapseClient, 'getEntityChallenge').mockResolvedValue(mockChallenge)

jest
  .spyOn(SynapseClient, 'getAllChallengeTeams')
  .mockResolvedValue(challengeTeamResults.results)

jest.spyOn(SynapseClient, 'getTeamList').mockResolvedValue(challengeTeams)

jest
  .spyOn(SynapseClient, 'getIsUserMemberOfTeam')
  .mockResolvedValue(mockChallengeTeamMember)

jest
  .spyOn(SynapseClient, 'getSubmissionTeams')
  .mockResolvedValue({ results: [], totalNumberOfResults: 0 })

jest
  .spyOn(SynapseClient, 'getMembershipStatus')
  .mockResolvedValue(mockChallengeTeamMembershipStatus())

const defaultProps = {
  projectId: MOCK_CHALLENGE_PROJECT_ID,
  isShowingModal: true,
  onClose: jest.fn(),
}

async function renderComponent(
  props: ChallengeTeamWizardProps,
  wrapperProps?: FullContextProviderProps,
) {
  let renderReturn
  await act(async () => {
    renderReturn = render(
      <Router history={createMemoryHistory()}>
        <ChallengeTeamWizard {...props} />
      </Router>,
      {
        wrapper: createWrapper(wrapperProps),
      },
    )
  })
  return renderReturn
}

describe('ChallengeTeamWizard tests', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('Shows the modal', async () => {
    await renderComponent(defaultProps)
    await screen.findByText('Select Your Challenge Team')
  })

  it('Renders a Datagrid', async () => {
    await renderComponent(defaultProps)
    const grid = await screen.findByRole('grid')
    expect(grid).toBeInTheDocument()
  })

  it('Renders a list of Teams that have joined the challenge', async () => {
    await renderComponent(defaultProps)
    const rows = await screen.findAllByRole('row')
    expect(rows.length).toBeGreaterThan(0)
  })

  it('Renders Team names as links to the Team page', async () => {
    await renderComponent(defaultProps)
    const teamLink = await screen.findByRole('link', { name: team1.name })
    expect(teamLink).toHaveAttribute(
      'href',
      `${getEndpoint(BackendDestinationEnum.PORTAL_ENDPOINT)}/#!Team:${
        team1.id
      }`,
    )
  })

  it('Selects the Team', async () => {
    const { container } = await renderComponent(defaultProps)
    console.log({ container })
    const btn = await screen.findByRole('button', { name: 'Next' })
    expect(btn).toHaveAttribute('disabled')
    const rows = await screen.findAllByRole('row')
    const row = rows[1]
    expect(row).toHaveAttribute('aria-selected', 'false')
    // const radio = container.querySelector('#src-radio-1')
    const radio = within(row).getByRole('radio')
    expect(radio).toHaveAttribute('value', team1.id)
    const ele = radio.parentElement!
    console.log({ ele })
    await userEvent.click(ele)
    console.log({ radio })
    expect(row).toHaveAttribute('aria-selected', 'true')
  })

  it('shows Create Team form on button click', async () => {
    await renderComponent(defaultProps)
    const btn = await screen.findByRole('button', { name: 'Create New Team' })
    await userEvent.click(btn)
    await screen.findByText('Create Team')
  })
})
