import { displayToast } from '@/components/ToastMessage/ToastMessage'
import { server } from '@/mocks/msw/server'
import { MOCK_TEAM_ID, MOCK_TEAM_ID_2 } from '@/mocks/team/mockTeam'
import { MOCK_USER_ID, MOCK_USER_ID_2 } from '@/mocks/user/mock_user_profile'
import { createWrapperAndQueryClient } from '@/testutils/TestingLibraryUtils'
import { BackendDestinationEnum, getEndpoint } from '@/utils/functions'
import {
  MembershipInvitation,
  PaginatedResults,
} from '@sage-bionetworks/synapse-types'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { delay, http, HttpResponse } from 'msw'
import {
  ACCEPT_TEAM_INVITATION_ERROR_MESSAGE,
  ACCEPT_TEAM_INVITATION_SUCCESS_MESSAGE,
  DECLINE_TEAM_INVITATION_ERROR_MESSAGE,
} from '../utils/constants'
import OpenInvitationsToUserCard from './OpenInvitationsToUserCard'

vi.mock('@/components/ToastMessage/ToastMessage')
vi.mock('@/components/UserOrTeamBadge/UserOrTeamBadge', () => ({
  default: () => <span data-testid="UserOrTeamBadge" />,
}))
vi.mock('@/components/UserCard/UserBadge', () => ({
  UserBadge: () => <span data-testid="UserBadge" />,
}))

const mockDisplayToast = vi.mocked(displayToast)

const REPO_ORIGIN = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)

const OPEN_INVITATIONS_URL = `${REPO_ORIGIN}/repo/v1/user/:userId/openInvitation`
const ADD_MEMBER_URL = `${REPO_ORIGIN}/repo/v1/team/:teamId/member/:memberId`
const DELETE_INVITATION_URL = `${REPO_ORIGIN}/repo/v1/membershipInvitation/:invitationId`

const MOCK_INVITATION_WITH_MESSAGE: MembershipInvitation = {
  id: 'inv-1',
  teamId: String(MOCK_TEAM_ID),
  inviteeId: String(MOCK_USER_ID),
  createdBy: String(MOCK_USER_ID_2),
  createdOn: '2024-01-01T00:00:00.000Z',
  message: 'Please join our team!',
}

const MOCK_INVITATION_2: MembershipInvitation = {
  id: 'inv-2',
  teamId: String(MOCK_TEAM_ID_2),
  inviteeId: String(MOCK_USER_ID),
  createdBy: String(MOCK_USER_ID_2),
  createdOn: '2024-01-02T00:00:00.000Z',
  message: 'We would love to have you.',
}

const MOCK_INVITATION_NO_MESSAGE: MembershipInvitation = {
  id: 'inv-3',
  teamId: String(MOCK_TEAM_ID),
  inviteeId: String(MOCK_USER_ID),
  createdBy: String(MOCK_USER_ID_2),
  createdOn: '2024-01-03T00:00:00.000Z',
}

/** Invitations returned by the mocked open invitations endpoint */
let currentInvitations: MembershipInvitation[]
const onOpenInvitationsRequest = vi.fn()

function useOpenInvitationsHandler() {
  server.use(
    http.get(OPEN_INVITATIONS_URL, () => {
      onOpenInvitationsRequest()
      const response: PaginatedResults<MembershipInvitation> = {
        results: currentInvitations,
        totalNumberOfResults: currentInvitations.length,
      }
      return HttpResponse.json(response, { status: 200 })
    }),
  )
}

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

beforeEach(() => {
  vi.clearAllMocks()
  currentInvitations = [MOCK_INVITATION_WITH_MESSAGE, MOCK_INVITATION_2]
  useOpenInvitationsHandler()
})

function renderComponent() {
  const { wrapperFn, queryClient } = createWrapperAndQueryClient()
  const result = render(<OpenInvitationsToUserCard />, { wrapper: wrapperFn })
  return { ...result, queryClient }
}

/**
 * Waits until the request for the user's open invitations has been made and all queries have settled.
 */
async function waitForInvitationsToLoad(
  queryClient: ReturnType<typeof renderComponent>['queryClient'],
) {
  await waitFor(() => expect(onOpenInvitationsRequest).toHaveBeenCalled())
  await waitFor(() => expect(queryClient.isFetching()).toBe(0))
}

describe('OpenInvitationsToUserCard', () => {
  describe('visibility', () => {
    it('renders nothing while loading when no invitations have been seen yet', async () => {
      server.use(
        http.get(OPEN_INVITATIONS_URL, async () => {
          onOpenInvitationsRequest()
          await delay('infinite')
        }),
      )

      const { container } = renderComponent()

      await waitFor(() => expect(onOpenInvitationsRequest).toHaveBeenCalled())
      expect(container).toBeEmptyDOMElement()
    })

    it('renders nothing when there are no invitations and none have ever been seen', async () => {
      currentInvitations = []

      const { container, queryClient } = renderComponent()

      await waitForInvitationsToLoad(queryClient)
      expect(container).toBeEmptyDOMElement()
    })
  })

  describe('card content', () => {
    it('shows the "Pending Team Invitations" heading', async () => {
      renderComponent()

      expect(
        await screen.findByText(/pending team invitations/i),
      ).toBeInTheDocument()
    })

    it('shows a description about new content being visible after accepting', async () => {
      renderComponent()

      expect(
        await screen.findByText(
          /new content may be visible to you after you accept/i,
        ),
      ).toBeInTheDocument()
    })

    it('renders one Join and one Decline button per invitation', async () => {
      renderComponent()

      expect(
        await screen.findAllByRole('button', { name: /join/i }),
      ).toHaveLength(2)
      expect(screen.getAllByRole('button', { name: /decline/i })).toHaveLength(
        2,
      )
    })

    it('shows the message text when an invitation has a message', async () => {
      currentInvitations = [MOCK_INVITATION_WITH_MESSAGE]

      renderComponent()

      expect(
        await screen.findByText('Please join our team!'),
      ).toBeInTheDocument()
    })

    it('does not show a message when an invitation has no message', async () => {
      currentInvitations = [MOCK_INVITATION_NO_MESSAGE]

      renderComponent()

      await screen.findByRole('button', { name: /join/i })
      expect(
        screen.queryByText(/please join|would love/i),
      ).not.toBeInTheDocument()
    })
  })

  describe('accepting an invitation', () => {
    it('sends a request with the correct teamId and userId when Join is clicked', async () => {
      const user = userEvent.setup()
      currentInvitations = [MOCK_INVITATION_WITH_MESSAGE]
      const onAddMemberRequest = vi.fn()
      server.use(
        http.put(ADD_MEMBER_URL, ({ params }) => {
          onAddMemberRequest(params.teamId, params.memberId)
          return new HttpResponse(null, { status: 200 })
        }),
      )

      renderComponent()

      await user.click(await screen.findByRole('button', { name: /join/i }))

      await waitFor(() =>
        expect(onAddMemberRequest).toHaveBeenCalledWith(
          MOCK_INVITATION_WITH_MESSAGE.teamId,
          MOCK_INVITATION_WITH_MESSAGE.inviteeId,
        ),
      )
    })

    it('shows a success toast after accepting an invitation', async () => {
      const user = userEvent.setup()
      currentInvitations = [MOCK_INVITATION_WITH_MESSAGE]
      server.use(
        http.put(ADD_MEMBER_URL, () => new HttpResponse(null, { status: 200 })),
      )

      renderComponent()

      await user.click(await screen.findByRole('button', { name: /join/i }))

      await waitFor(() =>
        expect(mockDisplayToast).toHaveBeenCalledWith(
          ACCEPT_TEAM_INVITATION_SUCCESS_MESSAGE,
          'success',
        ),
      )
    })

    it('shows an error toast when accepting an invitation fails', async () => {
      const user = userEvent.setup()
      currentInvitations = [MOCK_INVITATION_WITH_MESSAGE]
      server.use(
        http.put(ADD_MEMBER_URL, () =>
          HttpResponse.json({ reason: 'Some error reason' }, { status: 400 }),
        ),
      )

      renderComponent()

      await user.click(await screen.findByRole('button', { name: /join/i }))

      await waitFor(() =>
        expect(mockDisplayToast).toHaveBeenCalledWith(
          'Some error reason',
          'danger',
          { title: ACCEPT_TEAM_INVITATION_ERROR_MESSAGE },
        ),
      )
    })

    it('disables the Decline button while accept is pending', async () => {
      const user = userEvent.setup()
      currentInvitations = [MOCK_INVITATION_WITH_MESSAGE]
      server.use(http.put(ADD_MEMBER_URL, () => delay('infinite')))

      renderComponent()

      await user.click(await screen.findByRole('button', { name: /join/i }))

      await waitFor(() =>
        expect(screen.getByRole('button', { name: /decline/i })).toBeDisabled(),
      )
    })
  })

  describe('declining an invitation', () => {
    it('sends a request with the correct invitationId when Decline is clicked', async () => {
      const user = userEvent.setup()
      currentInvitations = [MOCK_INVITATION_WITH_MESSAGE]
      const onDeleteInvitationRequest = vi.fn()
      server.use(
        http.delete(DELETE_INVITATION_URL, ({ params }) => {
          onDeleteInvitationRequest(params.invitationId)
          return new HttpResponse(null, { status: 204 })
        }),
      )

      renderComponent()

      await user.click(await screen.findByRole('button', { name: /decline/i }))

      await waitFor(() =>
        expect(onDeleteInvitationRequest).toHaveBeenCalledWith(
          MOCK_INVITATION_WITH_MESSAGE.id,
        ),
      )
    })

    it('shows a success toast after declining an invitation', async () => {
      const user = userEvent.setup()
      currentInvitations = [MOCK_INVITATION_WITH_MESSAGE]
      server.use(
        http.delete(
          DELETE_INVITATION_URL,
          () => new HttpResponse(null, { status: 204 }),
        ),
      )

      renderComponent()

      await user.click(await screen.findByRole('button', { name: /decline/i }))

      await waitFor(() =>
        expect(mockDisplayToast).toHaveBeenCalledWith(
          'Invitation dismissed.',
          'info',
        ),
      )
    })

    it('shows an error toast when declining an invitation fails', async () => {
      const user = userEvent.setup()
      currentInvitations = [MOCK_INVITATION_WITH_MESSAGE]
      server.use(
        http.delete(DELETE_INVITATION_URL, () =>
          HttpResponse.json({ reason: 'Some error reason' }, { status: 400 }),
        ),
      )

      renderComponent()

      await user.click(await screen.findByRole('button', { name: /decline/i }))

      await waitFor(() =>
        expect(mockDisplayToast).toHaveBeenCalledWith(
          'Some error reason',
          'danger',
          { title: DECLINE_TEAM_INVITATION_ERROR_MESSAGE },
        ),
      )
    })

    it('disables the Join button while delete is pending', async () => {
      const user = userEvent.setup()
      currentInvitations = [MOCK_INVITATION_WITH_MESSAGE]
      server.use(http.delete(DELETE_INVITATION_URL, () => delay('infinite')))

      renderComponent()

      await user.click(await screen.findByRole('button', { name: /decline/i }))

      await waitFor(() =>
        expect(screen.getByRole('button', { name: /join/i })).toBeDisabled(),
      )
    })
  })

  describe('persistence after invitations are cleared', () => {
    it('shows "no pending invitations" instead of hiding the card when the list empties after being non-empty', async () => {
      const { queryClient } = renderComponent()

      // Initially there are invitations — the card and buttons are visible.
      expect(
        await screen.findByText(/pending team invitations/i),
      ).toBeInTheDocument()

      // Simulate all invitations being accepted or declined.
      currentInvitations = []
      await queryClient.invalidateQueries()

      expect(
        await screen.findByText(/you have no pending team invitations/i),
      ).toBeInTheDocument()
      expect(
        screen.queryByRole('button', { name: /join/i }),
      ).not.toBeInTheDocument()
    })
  })
})
