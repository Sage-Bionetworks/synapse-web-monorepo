import { displayToast } from '@/components/ToastMessage/ToastMessage'
import { MOCK_TEAM_ID, MOCK_TEAM_ID_2 } from '@/mocks/team/mockTeam'
import {
  MOCK_USER_ID,
  MOCK_USER_ID_2,
  mockUserProfileData,
} from '@/mocks/user/mock_user_profile'
import { useAddMemberToTeam, useGetCurrentUserProfile } from '@/synapse-queries'
import {
  useDeleteMembershipInvitation,
  useGetAllOpenMembershipInvitations,
} from '@/synapse-queries/team/useTeamMembers'
import {
  getUseMutationIdleMock,
  getUseMutationPendingMock,
  getUseQuerySuccessMock,
} from '@/testutils/ReactQueryMockUtils'
import { MembershipInvitation } from '@sage-bionetworks/synapse-client'
import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import OpenInvitationsToUserCard from './OpenInvitationsToUserCard'

// The component imports useAddMemberToTeam and useGetCurrentUserProfile from the
// @/synapse-queries barrel, so we partially mock the barrel to override only those two.
vi.mock('@/synapse-queries/user/useUserBundle')
vi.mock('@/synapse-queries/team/useTeamMembers')
vi.mock('@/components/ToastMessage/ToastMessage')
vi.mock('@/components/UserOrTeamBadge/UserOrTeamBadge', () => ({
  default: () => <span data-testid="UserOrTeamBadge" />,
}))
vi.mock('@/components/UserCard/UserBadge', () => ({
  UserBadge: () => <span data-testid="UserBadge" />,
}))

const mockUseGetCurrentUserProfile = vi.mocked(useGetCurrentUserProfile)
const mockUseGetAllOpenMembershipInvitations = vi.mocked(
  useGetAllOpenMembershipInvitations,
)
const mockUseAddMemberToTeam = vi.mocked(useAddMemberToTeam)
const mockUseDeleteMembershipInvitation = vi.mocked(
  useDeleteMembershipInvitation,
)
const mockDisplayToast = vi.mocked(displayToast)

const mockAcceptMutate = vi.fn()
const mockDeclineMutate = vi.fn()

// Captured options so tests can invoke onSuccess/onError callbacks directly.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let capturedAddMemberOptions: any
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let capturedDeleteInvitationOptions: any

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

beforeEach(() => {
  vi.clearAllMocks()

  mockUseGetCurrentUserProfile.mockReturnValue(
    getUseQuerySuccessMock(mockUserProfileData),
  )
  mockUseGetAllOpenMembershipInvitations.mockReturnValue({
    data: [MOCK_INVITATION_WITH_MESSAGE, MOCK_INVITATION_2],
    isLoading: false,
  } as any)
  mockUseAddMemberToTeam.mockImplementation(options => {
    capturedAddMemberOptions = options
    return { ...getUseMutationIdleMock(), mutate: mockAcceptMutate }
  })
  mockUseDeleteMembershipInvitation.mockImplementation(options => {
    capturedDeleteInvitationOptions = options
    return { ...getUseMutationIdleMock(), mutate: mockDeclineMutate }
  })
})

function renderComponent() {
  return render(<OpenInvitationsToUserCard />)
}

describe('OpenInvitationsToUserCard', () => {
  describe('visibility', () => {
    it('renders nothing while loading when no invitations have been seen yet', () => {
      mockUseGetAllOpenMembershipInvitations.mockReturnValue({
        data: undefined,
        isLoading: true,
      } as any)

      const { container } = renderComponent()

      expect(container).toBeEmptyDOMElement()
    })

    it('renders nothing when there are no invitations and none have ever been seen', () => {
      mockUseGetAllOpenMembershipInvitations.mockReturnValue({
        data: [],
        isLoading: false,
      } as any)

      const { container } = renderComponent()

      expect(container).toBeEmptyDOMElement()
    })
  })

  describe('card content', () => {
    it('shows the "Pending Team Invitations" heading', () => {
      renderComponent()

      expect(screen.getByText(/pending team invitations/i)).toBeInTheDocument()
    })

    it('shows a description about new content being visible after accepting', () => {
      renderComponent()

      expect(
        screen.getByText(/new content may be visible to you after you accept/i),
      ).toBeInTheDocument()
    })

    it('renders one Join and one Decline button per invitation', () => {
      renderComponent()

      expect(screen.getAllByRole('button', { name: /join/i })).toHaveLength(2)
      expect(screen.getAllByRole('button', { name: /decline/i })).toHaveLength(
        2,
      )
    })

    it('shows the message text when an invitation has a message', () => {
      mockUseGetAllOpenMembershipInvitations.mockReturnValue({
        data: [MOCK_INVITATION_WITH_MESSAGE],
        isLoading: false,
      } as any)

      renderComponent()

      expect(screen.getByText('Please join our team!')).toBeInTheDocument()
    })

    it('does not show a message when an invitation has no message', () => {
      mockUseGetAllOpenMembershipInvitations.mockReturnValue({
        data: [MOCK_INVITATION_NO_MESSAGE],
        isLoading: false,
      } as any)

      renderComponent()

      expect(
        screen.queryByText(/please join|would love/i),
      ).not.toBeInTheDocument()
    })
  })

  describe('accepting an invitation', () => {
    it('calls mutate with the correct teamId and userId when Join is clicked', async () => {
      const user = userEvent.setup()
      mockUseGetAllOpenMembershipInvitations.mockReturnValue({
        data: [MOCK_INVITATION_WITH_MESSAGE],
        isLoading: false,
      } as any)

      renderComponent()

      await user.click(screen.getByRole('button', { name: /join/i }))

      expect(mockAcceptMutate).toHaveBeenCalledWith({
        teamId: MOCK_INVITATION_WITH_MESSAGE.teamId,
        userId: MOCK_INVITATION_WITH_MESSAGE.inviteeId,
      })
    })

    it('shows a success toast after accepting an invitation', () => {
      renderComponent()

      act(() => {
        capturedAddMemberOptions?.onSuccess?.()
      })

      expect(mockDisplayToast).toHaveBeenCalledWith(
        'You have successfully joined the team.',
        'success',
      )
    })

    it('shows an error toast when accepting an invitation fails', () => {
      renderComponent()

      act(() => {
        capturedAddMemberOptions?.onError?.()
      })

      expect(mockDisplayToast).toHaveBeenCalledWith(
        'An error occurred while trying to join the team.',
        'danger',
      )
    })

    it('disables the Decline button while accept is pending', () => {
      mockUseAddMemberToTeam.mockImplementation(options => {
        capturedAddMemberOptions = options
        return { ...getUseMutationPendingMock(), mutate: mockAcceptMutate }
      })
      mockUseGetAllOpenMembershipInvitations.mockReturnValue({
        data: [MOCK_INVITATION_WITH_MESSAGE],
        isLoading: false,
      } as any)

      renderComponent()

      expect(screen.getByRole('button', { name: /decline/i })).toBeDisabled()
    })
  })

  describe('declining an invitation', () => {
    it('calls mutate with the correct invitationId when Decline is clicked', async () => {
      const user = userEvent.setup()
      mockUseGetAllOpenMembershipInvitations.mockReturnValue({
        data: [MOCK_INVITATION_WITH_MESSAGE],
        isLoading: false,
      } as any)

      renderComponent()

      await user.click(screen.getByRole('button', { name: /decline/i }))

      expect(mockDeclineMutate).toHaveBeenCalledWith({
        invitationId: MOCK_INVITATION_WITH_MESSAGE.id,
      })
    })

    it('shows a success toast after declining an invitation', () => {
      renderComponent()

      act(() => {
        capturedDeleteInvitationOptions?.onSuccess?.()
      })

      expect(mockDisplayToast).toHaveBeenCalledWith(
        'Invitation dismissed.',
        'info',
      )
    })

    it('shows an error toast when declining an invitation fails', () => {
      renderComponent()

      act(() => {
        capturedDeleteInvitationOptions?.onError?.()
      })

      expect(mockDisplayToast).toHaveBeenCalledWith(
        'An error occurred while trying to decline the invitation.',
        'danger',
      )
    })

    it('disables the Join button while delete is pending', () => {
      mockUseDeleteMembershipInvitation.mockImplementation(options => {
        capturedDeleteInvitationOptions = options
        return { ...getUseMutationPendingMock(), mutate: mockDeclineMutate }
      })
      mockUseGetAllOpenMembershipInvitations.mockReturnValue({
        data: [MOCK_INVITATION_WITH_MESSAGE],
        isLoading: false,
      } as any)

      renderComponent()

      expect(screen.getByRole('button', { name: /join/i })).toBeDisabled()
    })
  })

  describe('persistence after invitations are cleared', () => {
    it('shows "no pending invitations" instead of hiding the card when the list empties after being non-empty', () => {
      const { rerender } = renderComponent()

      // Initially there are invitations — the card and buttons are visible.
      expect(screen.getByText(/pending team invitations/i)).toBeInTheDocument()

      // Simulate all invitations being accepted or declined.
      mockUseGetAllOpenMembershipInvitations.mockReturnValue({
        data: [],
        isLoading: false,
      } as any)
      rerender(<OpenInvitationsToUserCard />)

      expect(
        screen.getByText(/you have no pending team invitations/i),
      ).toBeInTheDocument()
      expect(
        screen.queryByRole('button', { name: /join/i }),
      ).not.toBeInTheDocument()
    })
  })
})
