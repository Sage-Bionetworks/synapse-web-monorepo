import {
  createMockExecutableTaskBundle,
  MOCK_CURATION_TASK_DESTINATION_TASK_ID,
} from '@/mocks/curation/mockCurationTask'
import { getExecuteCurationTaskHandlers } from '@/mocks/msw/handlers/curationTaskExecutionHandlers'
import { server } from '@/mocks/msw/server'
import useGetEntityBundle from '@/synapse-queries/entity/useEntityBundle'
import { useGetCurrentUserProfile } from '@/synapse-queries/user/useUserBundle'
import { useGetIsPrincipalIdUserOrMemberOfTeam } from '@/synapse-queries/team/useTeamMembers'
import { GRID_PAGE_TASK_ID_QUERY_PARAM } from '@/utils/SynapseConstants'
import { TaskBundle } from '@sage-bionetworks/synapse-client'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter, useSearchParams } from 'react-router'
import { http, HttpResponse } from 'msw'
import { BackendDestinationEnum, getEndpoint } from '@/utils/functions'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import {
  DESTINATION_TASK_MISSING_MESSAGE,
  EXECUTABLE_TASK_NO_PERMISSION_MESSAGE,
  RUN_AGENT_BUTTON_TEXT,
  RUNNING_BUTTON_TEXT,
  VIEW_RESULT_BUTTON_TEXT,
} from './getExecutableTaskButtonState'
import ExecutableTaskCard from './ExecutableTaskCard'

// Matches a button by its visible label as a substring, escaping regex-special characters
// (RUN_AGENT_BUTTON_TEXT contains parentheses).
function buttonByLabel(label: string) {
  const escaped = label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  return { name: new RegExp(escaped) }
}

vi.mock('@/synapse-queries/entity/useEntityBundle', () => ({
  default: vi.fn(),
}))
vi.mock('@/synapse-queries/user/useUserBundle', () => ({
  useGetCurrentUserProfile: vi.fn(),
}))
vi.mock('@/synapse-queries/team/useTeamMembers', () => ({
  useGetIsPrincipalIdUserOrMemberOfTeam: vi.fn(),
}))
vi.mock('./UserOrTeamChip', () => ({ default: () => null }))

const mockUseGetEntityBundle = vi.mocked(useGetEntityBundle)
const mockUseGetCurrentUserProfile = vi.mocked(useGetCurrentUserProfile)
const mockUseIsUserOrTeamMember = vi.mocked(
  useGetIsPrincipalIdUserOrMemberOfTeam,
)

function setCanEdit(canEdit: boolean) {
  mockUseGetEntityBundle.mockReturnValue({
    data: { entity: { name: 'Project' }, permissions: { canEdit } },
  } as unknown as ReturnType<typeof useGetEntityBundle>)
}

function setIsAssigneeOrTeamMember(value: boolean) {
  mockUseIsUserOrTeamMember.mockReturnValue({
    data: value,
  } as unknown as ReturnType<typeof useGetIsPrincipalIdUserOrMemberOfTeam>)
}

// Renders the card and exposes the current taskIds search param via a probe.
let lastTaskIdsParam: string | null = null
function SearchParamProbe() {
  const [searchParams] = useSearchParams()
  lastTaskIdsParam = searchParams.get(GRID_PAGE_TASK_ID_QUERY_PARAM)
  return null
}

function renderCard(taskBundle: TaskBundle) {
  return render(
    <MemoryRouter>
      <ExecutableTaskCard taskBundle={taskBundle} />
      <SearchParamProbe />
    </MemoryRouter>,
    { wrapper: createWrapper({ accessToken: 'fake-token' }) },
  )
}

beforeEach(() => {
  vi.clearAllMocks()
  lastTaskIdsParam = null
  setCanEdit(true)
  setIsAssigneeOrTeamMember(false)
  mockUseGetCurrentUserProfile.mockReturnValue({
    data: { ownerId: '999' },
  } as unknown as ReturnType<typeof useGetCurrentUserProfile>)
})

describe('ExecutableTaskCard', () => {
  describe('button state machine', () => {
    it('offers to start the task when NOT_STARTED and the user can execute', () => {
      renderCard(
        createMockExecutableTaskBundle(
          { projectId: 'syn1' },
          { state: 'NOT_STARTED' },
        ),
      )
      expect(
        screen.getByRole('button', buttonByLabel(RUN_AGENT_BUTTON_TEXT)),
      ).toBeEnabled()
    })

    it('shows a disabled Running button when EXECUTING', () => {
      renderCard(
        createMockExecutableTaskBundle(
          { projectId: 'syn1' },
          { state: 'EXECUTING' },
        ),
      )
      expect(
        screen.getByRole('button', buttonByLabel(RUNNING_BUTTON_TEXT)),
      ).toBeDisabled()
    })

    it('offers to view the result when COMPLETED', () => {
      renderCard(
        createMockExecutableTaskBundle(
          { projectId: 'syn1' },
          { state: 'COMPLETED' },
        ),
      )
      expect(
        screen.getByRole('button', buttonByLabel(VIEW_RESULT_BUTTON_TEXT)),
      ).toBeEnabled()
    })
  })

  describe('permissions', () => {
    it('disables Start with a tooltip when the user cannot execute', async () => {
      const user = userEvent.setup()
      setCanEdit(false)
      setIsAssigneeOrTeamMember(false)
      renderCard(
        createMockExecutableTaskBundle(
          { projectId: 'syn1' },
          { state: 'NOT_STARTED' },
        ),
      )

      const button = screen.getByRole(
        'button',
        buttonByLabel(RUN_AGENT_BUTTON_TEXT),
      )
      expect(button).toBeDisabled()

      await user.hover(button)
      expect(
        await screen.findByRole('tooltip', {
          name: EXECUTABLE_TASK_NO_PERMISSION_MESSAGE,
        }),
      ).toBeInTheDocument()
    })

    it('enables Start when the user is the assignee or a team member', () => {
      setCanEdit(false)
      setIsAssigneeOrTeamMember(true)
      renderCard(
        createMockExecutableTaskBundle(
          { projectId: 'syn1' },
          { state: 'NOT_STARTED' },
        ),
      )
      expect(
        screen.getByRole('button', buttonByLabel(RUN_AGENT_BUTTON_TEXT)),
      ).toBeEnabled()
    })
  })

  describe('destination task', () => {
    it('sets the taskIds search param to the destination task when View Result is clicked', async () => {
      const user = userEvent.setup()
      renderCard(
        createMockExecutableTaskBundle(
          { projectId: 'syn1' },
          { state: 'COMPLETED' },
        ),
      )

      await user.click(
        screen.getByRole('button', buttonByLabel(VIEW_RESULT_BUTTON_TEXT)),
      )

      expect(lastTaskIdsParam).toBe(
        String(MOCK_CURATION_TASK_DESTINATION_TASK_ID),
      )
    })

    it('disables View Result with a tooltip when the destination task is missing', async () => {
      const user = userEvent.setup()
      renderCard(
        createMockExecutableTaskBundle(
          {
            projectId: 'syn1',
            taskProperties: {
              concreteType:
                'org.sagebionetworks.repo.model.curation.execution.SampleSheetGenerationExecutionProperties',
            } as never,
          },
          { state: 'COMPLETED' },
        ),
      )

      const button = screen.getByRole(
        'button',
        buttonByLabel(VIEW_RESULT_BUTTON_TEXT),
      )
      expect(button).toBeDisabled()

      await user.hover(button)
      expect(
        await screen.findByRole('tooltip', {
          name: DESTINATION_TASK_MISSING_MESSAGE,
        }),
      ).toBeInTheDocument()
    })
  })

  describe('starting the task', () => {
    beforeAll(() => server.listen())
    afterAll(() => server.close())

    it('calls the execute endpoint when Start is clicked', async () => {
      const user = userEvent.setup()
      let startCalled = false
      server.use(
        http.post(
          `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}/repo/v1/curation/task/:taskId/execute/async/start`,
          () => {
            startCalled = true
            return HttpResponse.json({ token: 'tok' }, { status: 201 })
          },
        ),
        ...getExecuteCurationTaskHandlers(),
      )
      renderCard(
        createMockExecutableTaskBundle(
          { projectId: 'syn1' },
          { state: 'NOT_STARTED' },
        ),
      )

      await user.click(
        screen.getByRole('button', buttonByLabel(RUN_AGENT_BUTTON_TEXT)),
      )

      await waitFor(() => expect(startCalled).toBe(true))
    })
  })
})
