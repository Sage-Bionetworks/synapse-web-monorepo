import { server } from '@/mocks/msw/server'
import { getRealmHandlers } from '@/mocks/msw/handlers/realmHandlers'
import { getUserProfileHandlers } from '@/mocks/msw/handlers/userProfileHandlers'
import { getTeamHandler } from '@/mocks/msw/handlers/teamHandlers'
import {
  MOCK_AUTHENTICATED_PRINCIPAL_ID,
  MOCK_PUBLIC_PRINCIPAL_ID,
} from '@/mocks/realm/mockRealmPrincipal'
import { MOCK_TEAM_ID, mockTeamData } from '@/mocks/team/mockTeam'
import {
  MOCK_USER_ID,
  MOCK_USER_NAME,
  mockUserGroupHeader,
} from '@/mocks/user/mock_user_profile'
import {
  mockAuthenticatedGroupData,
  mockPublicGroupData,
} from '@/mocks/usergroup/mockUserGroup'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { BackendDestinationEnum, getEndpoint } from '@/utils/functions'
import { UserGroupHeader } from '@sage-bionetworks/synapse-types'
import { render, renderHook, screen, waitFor } from '@testing-library/react'
import { useUserOrTeam } from './useUserOrTeam'

// Mock leaf icon/avatar components so tests are not sensitive to their
// internal implementation — we just verify which one is rendered.
vi.mock('../UserCard/Avatar', () => ({
  Avatar: vi.fn(
    ({
      userProfile,
      avatarSize,
    }: {
      userProfile: { ownerId: string }
      avatarSize?: string
    }) => (
      <span
        data-testid="avatar"
        data-owner-id={userProfile.ownerId}
        data-avatar-size={avatarSize ?? 'SMALL'}
      />
    ),
  ),
}))

vi.mock('../IconSvg/IconSvg', () => ({
  default: vi.fn(({ icon }: { icon: string }) => (
    <span data-testid={`icon-svg-${icon}`} />
  )),
}))

// Suppress network-level image fetching — we test the hook logic, not presigned URLs.
vi.mock('@/synapse-queries/file/useFiles', () => ({
  useGetProfileImage: vi
    .fn()
    .mockReturnValue({ data: undefined, isLoading: false }),
  useGetStablePresignedUrl: vi.fn().mockReturnValue({ dataUrl: undefined }),
}))

vi.mock('@/utils/hooks/usePreFetchResource', () => ({
  useCreateUrlForData: vi.fn().mockReturnValue(undefined),
}))

const REPO_ENDPOINT = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)

describe('useUserOrTeam', () => {
  beforeAll(() => server.listen())
  beforeEach(() => {
    server.use(
      ...getUserProfileHandlers(REPO_ENDPOINT),
      getTeamHandler(REPO_ENDPOINT),
      ...getRealmHandlers(REPO_ENDPOINT),
    )
  })
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  describe('when given an individual user ID', () => {
    it('resolves and returns the userGroupHeader', async () => {
      const { result } = renderHook(() => useUserOrTeam(MOCK_USER_ID), {
        wrapper: createWrapper(),
      })

      expect(result.current.isLoading).toBe(true)
      expect(result.current.userGroupHeader).toBeUndefined()

      await waitFor(() =>
        expect(result.current.userGroupHeader).toEqual(mockUserGroupHeader),
      )
      expect(result.current.isLoading).toBe(false)
    })

    it('returns specialGroupType null for a regular user', async () => {
      const { result } = renderHook(() => useUserOrTeam(MOCK_USER_ID), {
        wrapper: createWrapper(),
      })

      await waitFor(() => expect(result.current.userGroupHeader).toBeDefined())

      expect(result.current.specialGroupType).toBe(null)
    })

    it('renders a user Avatar in the IconComponent', async () => {
      const wrapper = createWrapper()
      const { result } = renderHook(() => useUserOrTeam(MOCK_USER_ID), {
        wrapper,
      })

      await waitFor(() => expect(result.current.userGroupHeader).toBeDefined())

      const { IconComponent } = result.current
      render(<IconComponent />, { wrapper })

      const avatar = await screen.findByTestId('avatar')
      expect(avatar).toHaveAttribute('data-owner-id', String(MOCK_USER_ID))
    })

    it('passes the avatarSize prop through to the Avatar', async () => {
      const wrapper = createWrapper()
      const { result } = renderHook(() => useUserOrTeam(MOCK_USER_ID), {
        wrapper,
      })

      await waitFor(() => expect(result.current.userGroupHeader).toBeDefined())

      const { IconComponent } = result.current
      render(<IconComponent avatarSize="LARGE" />, { wrapper })

      const avatar = await screen.findByTestId('avatar')
      expect(avatar).toHaveAttribute('data-avatar-size', 'LARGE')
    })
  })

  describe('when given a team ID', () => {
    it('resolves and returns the team userGroupHeader', async () => {
      const { result } = renderHook(() => useUserOrTeam(MOCK_TEAM_ID), {
        wrapper: createWrapper(),
      })

      await waitFor(() => expect(result.current.userGroupHeader).toBeDefined())

      expect(result.current.userGroupHeader?.ownerId).toBe(String(MOCK_TEAM_ID))
      expect(result.current.userGroupHeader?.isIndividual).toBe(false)
    })

    it('returns specialGroupType null for a regular team', async () => {
      const { result } = renderHook(() => useUserOrTeam(MOCK_TEAM_ID), {
        wrapper: createWrapper(),
      })

      await waitFor(() => expect(result.current.userGroupHeader).toBeDefined())

      expect(result.current.specialGroupType).toBe(null)
    })

    it('renders a team icon in the IconComponent when no team image is set', async () => {
      const wrapper = createWrapper()
      const { result } = renderHook(() => useUserOrTeam(MOCK_TEAM_ID), {
        wrapper,
      })

      await waitFor(() => expect(result.current.userGroupHeader).toBeDefined())

      const { IconComponent } = result.current
      render(<IconComponent />, { wrapper })

      expect(await screen.findByTestId('icon-svg-team')).toBeInTheDocument()
    })
  })

  describe('when given the authenticated-users group ID', () => {
    it('returns specialGroupType "authenticatedUsers"', async () => {
      const { result } = renderHook(
        () => useUserOrTeam(MOCK_AUTHENTICATED_PRINCIPAL_ID),
        { wrapper: createWrapper() },
      )

      await waitFor(() =>
        expect(result.current.specialGroupType).toBe('authenticatedUsers'),
      )

      expect(result.current.userGroupHeader?.ownerId).toBe(
        String(MOCK_AUTHENTICATED_PRINCIPAL_ID),
      )
    })

    it('renders a public icon in the IconComponent', async () => {
      const wrapper = createWrapper()
      const { result } = renderHook(
        () => useUserOrTeam(MOCK_AUTHENTICATED_PRINCIPAL_ID),
        { wrapper },
      )

      await waitFor(() =>
        expect(result.current.specialGroupType).toBe('authenticatedUsers'),
      )

      const { IconComponent } = result.current
      render(<IconComponent />, { wrapper })

      expect(await screen.findByTestId('icon-svg-public')).toBeInTheDocument()
    })
  })

  describe('when given the public group ID', () => {
    it('returns specialGroupType "publicGroup"', async () => {
      const { result } = renderHook(
        () => useUserOrTeam(MOCK_PUBLIC_PRINCIPAL_ID),
        { wrapper: createWrapper() },
      )

      await waitFor(() =>
        expect(result.current.specialGroupType).toBe('publicGroup'),
      )

      expect(result.current.userGroupHeader?.ownerId).toBe(
        String(MOCK_PUBLIC_PRINCIPAL_ID),
      )
    })

    it('renders a public icon in the IconComponent', async () => {
      const wrapper = createWrapper()
      const { result } = renderHook(
        () => useUserOrTeam(MOCK_PUBLIC_PRINCIPAL_ID),
        { wrapper },
      )

      await waitFor(() =>
        expect(result.current.specialGroupType).toBe('publicGroup'),
      )

      const { IconComponent } = result.current
      render(<IconComponent />, { wrapper })

      expect(await screen.findByTestId('icon-svg-public')).toBeInTheDocument()
    })
  })

  describe('when a userGroupHeader is provided directly', () => {
    it('uses the provided header without fetching', () => {
      const provided: UserGroupHeader = {
        ownerId: String(MOCK_USER_ID),
        userName: MOCK_USER_NAME,
        isIndividual: true,
      }

      const { result } = renderHook(() => useUserOrTeam(undefined, provided), {
        wrapper: createWrapper(),
      })

      // Synchronously available — no loading state
      expect(result.current.isLoading).toBe(false)
      expect(result.current.userGroupHeader).toBe(provided)
    })

    it('renders user Avatar when providedUserGroupHeader is for an individual', () => {
      const provided: UserGroupHeader = {
        ownerId: String(MOCK_USER_ID),
        userName: MOCK_USER_NAME,
        isIndividual: true,
      }

      const wrapper = createWrapper()
      const { result } = renderHook(() => useUserOrTeam(undefined, provided), {
        wrapper,
      })

      const { IconComponent } = result.current
      render(<IconComponent />, { wrapper })

      const avatar = screen.getByTestId('avatar')
      expect(avatar).toHaveAttribute('data-owner-id', String(MOCK_USER_ID))
    })

    it('renders team icon when providedUserGroupHeader is for a team', () => {
      const provided: UserGroupHeader = {
        ownerId: String(MOCK_TEAM_ID),
        userName: mockTeamData.name,
        isIndividual: false,
      }

      const wrapper = createWrapper()
      const { result } = renderHook(() => useUserOrTeam(undefined, provided), {
        wrapper,
      })

      const { IconComponent } = result.current
      render(<IconComponent />, { wrapper })

      // Team icon renders after realm principals resolve
      expect(screen.queryByTestId('avatar')).not.toBeInTheDocument()
    })
  })

  describe('when no principalId is given', () => {
    it('does not start loading and returns undefined header', () => {
      const { result } = renderHook(() => useUserOrTeam(), {
        wrapper: createWrapper(),
      })

      expect(result.current.isLoading).toBe(false)
      expect(result.current.userGroupHeader).toBeUndefined()
      expect(result.current.specialGroupType).toBe(null)
    })

    it('renders null from the IconComponent', () => {
      const wrapper = createWrapper()
      const { result } = renderHook(() => useUserOrTeam(), { wrapper })

      const { IconComponent } = result.current
      const { container } = render(<IconComponent />, { wrapper })
      expect(container).toBeEmptyDOMElement()
    })
  })
})
