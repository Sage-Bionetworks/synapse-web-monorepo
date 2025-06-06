import { MOCK_FILE_ENTITY_ID } from '@/mocks/entity/mockFileEntity'
import { server } from '@/mocks/msw/server'
import {
  MOCK_TEAM_ID,
  MOCK_TEAM_ID_2,
  MOCK_TEAM_ID_3,
  mockTeamData,
} from '@/mocks/team/mockTeam'
import { MOCK_USER_ID } from '@/mocks/user/mock_user_profile'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import {
  RestrictableObjectDescriptor,
  RestrictableObjectType,
} from '@sage-bionetworks/synapse-types'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TeamSubjectsSelector, {
  HELP_TEXT,
  NO_TEAMS_SELECTED,
  REMOVE_TEXT,
  TEAM_ALREADY_SELECTED,
  TEAM_PARSING_ERROR,
  TeamSubjectsSelectorProps,
} from './TeamSubjectsSelector'

const onUpdate = vi.fn()
const onUpdateTeamIDsTextbox = vi.fn()

const teamSubject: RestrictableObjectDescriptor = {
  id: MOCK_TEAM_ID.toString(),
  type: RestrictableObjectType.TEAM,
}
const entitySubject: RestrictableObjectDescriptor = {
  id: MOCK_FILE_ENTITY_ID.toString(),
  type: RestrictableObjectType.ENTITY,
}

const defaultProps: TeamSubjectsSelectorProps = {
  subjects: [entitySubject, teamSubject],
  onUpdate,
  onUpdateTeamIDsTextbox,
}
const defaultTeamCount = 1

function renderComponent(props: TeamSubjectsSelectorProps) {
  return render(<TeamSubjectsSelector {...props} />, {
    wrapper: createWrapper(),
  })
}

async function setUp(
  props: TeamSubjectsSelectorProps = defaultProps,
  expectedTeamCount: number = defaultTeamCount,
) {
  const user = userEvent.setup()
  const component = renderComponent(props)

  // wait for team badge(s) to finish loading
  await waitFor(() => {
    expect(screen.queryAllByRole('link')).toHaveLength(expectedTeamCount)
  })

  const items = screen.queryAllByTestId('selected-team')
  expect(items).toHaveLength(expectedTeamCount)

  return { component, items, user }
}

async function addTeams(
  teamIdsString: string,
  user: ReturnType<(typeof userEvent)['setup']>,
) {
  const input = screen.getByPlaceholderText(HELP_TEXT)
  await user.type(input, teamIdsString)
  expect(onUpdateTeamIDsTextbox).toHaveBeenLastCalledWith(teamIdsString)

  expect(input).toHaveValue(teamIdsString)

  const addButton = screen.getByRole('button', { name: 'Add Teams' })
  await user.click(addButton)
}

describe('TeamSubjectsSelector', () => {
  beforeEach(() => vi.clearAllMocks())
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  test('displays selected teams', async () => {
    await setUp()

    expect(screen.getByRole('link', { name: mockTeamData.name })).toBeVisible()
    expect(onUpdate).not.toHaveBeenCalled()
  })

  test('displays placeholder when no teams are selected', () => {
    renderComponent({
      ...defaultProps,
      subjects: [],
    })
    expect(screen.getByText(NO_TEAMS_SELECTED)).toBeVisible()
  })

  test('removes a team and drops any entity subjects', async () => {
    const { user } = await setUp()

    const removeButton = screen.getByRole('button', { name: REMOVE_TEXT })
    await user.click(removeButton)

    // entity subject is not included
    expect(onUpdate).toHaveBeenCalledTimes(1)
    expect(onUpdate).toHaveBeenCalledWith([])
  })

  test('adds teams and drops any entity subjects', async () => {
    const { user } = await setUp()

    const newTeamIds = `${MOCK_TEAM_ID_2}, ${MOCK_TEAM_ID_3}`
    await addTeams(newTeamIds, user)

    expect(onUpdate).toHaveBeenCalledTimes(1)
    expect(onUpdate).toHaveBeenCalledWith([
      teamSubject,
      { id: MOCK_TEAM_ID_2.toString(), type: RestrictableObjectType.TEAM },
      { id: MOCK_TEAM_ID_3.toString(), type: RestrictableObjectType.TEAM },
    ])

    const input = screen.getByPlaceholderText(HELP_TEXT)
    expect(input).toHaveValue('')
    expect(onUpdateTeamIDsTextbox).toHaveBeenLastCalledWith('')
  })

  test('drops duplicates when adding new teams', async () => {
    const { user } = await setUp()

    // add 2 new IDs, 1 duplicate of a new ID
    const newTeamIds = `${MOCK_TEAM_ID_2}, ${MOCK_TEAM_ID_3}, ${MOCK_TEAM_ID_2}`
    await addTeams(newTeamIds, user)

    expect(onUpdate).toHaveBeenCalledTimes(1)
    expect(onUpdate).toHaveBeenCalledWith([
      teamSubject,
      { id: MOCK_TEAM_ID_2.toString(), type: RestrictableObjectType.TEAM },
      { id: MOCK_TEAM_ID_3.toString(), type: RestrictableObjectType.TEAM },
    ])

    const input = screen.getByPlaceholderText(HELP_TEXT)
    expect(input).toHaveValue('')
    expect(onUpdateTeamIDsTextbox).toHaveBeenLastCalledWith('')
  })

  test('displays an error when attempting to add a team that was previously added', async () => {
    const { user } = await setUp()

    const newTeamIds = `${MOCK_TEAM_ID_2}, ${MOCK_TEAM_ID}`
    await addTeams(newTeamIds, user)

    const alert = await screen.findByRole('alert')
    expect(alert).toHaveTextContent(
      TEAM_ALREADY_SELECTED(MOCK_TEAM_ID.toString()),
    )

    expect(onUpdate).not.toHaveBeenCalled()
    expect(onUpdateTeamIDsTextbox).toHaveBeenLastCalledWith(newTeamIds)
  })

  test('displays an error when error parsing team ids', async () => {
    const { user } = await setUp()

    const invalidTeamId = 'abc'
    const newTeamIds = `${MOCK_TEAM_ID_2}, ${invalidTeamId}`
    await addTeams(newTeamIds, user)

    const alert = await screen.findByRole('alert')
    expect(alert).toHaveTextContent(TEAM_PARSING_ERROR(invalidTeamId))

    expect(onUpdate).not.toHaveBeenCalled()
    expect(onUpdateTeamIDsTextbox).toHaveBeenLastCalledWith(newTeamIds)
  })

  test('displays an error when team is not found', async () => {
    const nonTeamSubject: RestrictableObjectDescriptor = {
      id: MOCK_USER_ID.toString(),
      type: RestrictableObjectType.TEAM,
    }
    renderComponent({
      ...defaultProps,
      subjects: [teamSubject, nonTeamSubject],
    })

    await screen.findByRole('link', { name: mockTeamData.name })

    const alert = await screen.findByRole('alert')
    expect(alert).toHaveTextContent(
      `Team id: '${nonTeamSubject.id}' does not exist`,
    )
  })
})
