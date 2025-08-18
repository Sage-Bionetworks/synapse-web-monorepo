import { server } from '@/mocks/msw/server'
import { mockUserProfileData } from '@/mocks/user/mock_user_profile'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { SynapseConstants } from '@/utils'
import { PROFILE_IMAGE_PREVIEW } from '@/utils/APIConstants'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import {
  AVATAR,
  LARGE_USER_CARD,
  MEDIUM_USER_CARD,
  SEPERATOR,
} from '@/utils/SynapseConstants'
import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { cloneDeep } from 'lodash-es'
import { http } from 'msw'
import UserCard, { UserCardProps } from './UserCard'
import UserCardContextMenu, {
  MenuAction,
  UserCardContextMenuProps,
} from './UserCardContextMenu'

const { firstName } = mockUserProfileData

const renderUserCard = (props: UserCardProps) => {
  return render(<UserCard {...props} />, {
    wrapper: createWrapper(),
  })
}

const renderUserCardContextMenu = (props: UserCardContextMenuProps) => {
  const user = userEvent.setup()
  const component = render(<UserCardContextMenu {...props} />, {
    wrapper: createWrapper(),
  })
  return { user, component }
}

const renderMediumUserCard = (props: Omit<UserCardProps, 'size'>) => {
  const user = userEvent.setup()
  const component = renderUserCard({ ...props, size: MEDIUM_USER_CARD })
  return { user, component }
}

const renderLargeUserCard = (props: Omit<UserCardProps, 'size'>) => {
  return renderUserCard({ ...props, size: LARGE_USER_CARD })
}

const renderAvatar = (props: Omit<UserCardProps, 'size'>) => {
  return renderUserCard({ ...props, size: AVATAR })
}

describe('UserCard tests', () => {
  // Handle the msw lifecycle:
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  beforeEach(() => {
    vi.useRealTimers()
  })

  describe('it renders the different sized cards without failing', () => {
    const props: Omit<UserCardProps, 'size'> = {
      userProfile: mockUserProfileData,
    }

    it('renders an avatar', async () => {
      renderAvatar(props)
      await screen.findByRole('img')
    })

    it('renders a medium card', async () => {
      renderMediumUserCard(props)
      await screen.findByText(
        mockUserProfileData.firstName + ' ' + mockUserProfileData.lastName,
        { exact: false },
      )
      await screen.findByText('ORCID', { exact: false })
    })

    it('renders a large card', async () => {
      renderLargeUserCard(props)
      await screen.findByText(
        mockUserProfileData.firstName + ' ' + mockUserProfileData.lastName,
        { exact: false },
      )
      await screen.findByText('ORCID', { exact: false })
    })
  })

  describe('it creates the correct UI for the avatar', () => {
    const props: Omit<UserCardProps, 'size'> = {
      userProfile: mockUserProfileData,
    }

    it('creates a small avatar', async () => {
      renderAvatar({ ...props, avatarSize: 'SMALL' })
      const imageElement = await screen.findByRole('img')
      // No profile pic fetched, so the avatar should have the first initial
      await screen.findByText(firstName[0])
      expect(getComputedStyle(imageElement).width).toBe('20px')
      expect(imageElement.style.backgroundImage).toBe('')
    })

    it('avatar text pulls from username if no first name', async () => {
      const userWithNoFirstName = cloneDeep(mockUserProfileData)
      userWithNoFirstName.firstName = ''
      renderAvatar({
        ...props,
        userProfile: userWithNoFirstName,
        avatarSize: 'SMALL',
      })
      const imageElement = await screen.findByRole('img')
      // No profile pic fetched, so the avatar should have the first initial
      await screen.findByText(mockUserProfileData.userName[0])
      expect(getComputedStyle(imageElement).width).toBe('20px')
      expect(imageElement.style.backgroundImage).toBe('')
    })

    it('creates a large avatar', async () => {
      renderAvatar({ ...props, avatarSize: 'LARGE' })
      const imageElement = await screen.findByRole('img')
      // No profile pic fetched, so the avatar should have the first initial
      await screen.findByText(firstName[0])
      expect(getComputedStyle(imageElement).width).toBe('80px')
      expect(imageElement.style.backgroundImage).toBe('')
    })

    it('displays an img for a user with an img set', async () => {
      const IMAGE_URL = 'http://some-image-url.notarealurl/image.jpg'
      server.use(
        // Synapse provides the presigned URL for the profile image
        http.get(
          `${getEndpoint(
            BackendDestinationEnum.REPO_ENDPOINT,
          )}${PROFILE_IMAGE_PREVIEW(':userId')}`,
          () => {
            return new Response(IMAGE_URL, {
              status: 200,
              headers: {
                'Content-Type': 'text/plain',
              },
            })
          },
        ),
        // Handler for the "presigned" URL itself:
        http.get(IMAGE_URL, () => {
          return new Response('abcdef', {
            status: 200,
            headers: {
              'Content-Type': 'image/jpeg',
            },
          })
        }),
      )
      renderAvatar({
        ...props,
      })

      const imageElement = await screen.findByRole('img')

      // No first initial when profile pic exists
      await waitFor(() =>
        expect(screen.queryByText(firstName[0])).not.toBeInTheDocument(),
      )

      await waitFor(() =>
        expect(getComputedStyle(imageElement).backgroundImage).toBeTruthy(),
      )
    })
  })

  describe('it creates the correct UI for the medium card', () => {
    const props = {
      userProfile: mockUserProfileData,
      size: SynapseConstants.MEDIUM_USER_CARD,
    }

    it('shows an avatar', async () => {
      renderMediumUserCard({ ...props })
      await screen.findByRole('img')
    })

    it("doesn't hide user email by default", async () => {
      renderMediumUserCard({ ...props })
      await screen.findByText(mockUserProfileData.userName + '@synapse.org')
    })

    it("hide's user email by when hideEmail set", async () => {
      renderMediumUserCard({ ...props, hideEmail: true })
      await waitFor(() => {
        expect(
          screen.queryByText(mockUserProfileData.userName + '@synapse.org'),
        ).not.toBeInTheDocument()
      })
    })

    it('does not show a menu with empty menuActions', async () => {
      const menuActions: MenuAction[] = []
      renderMediumUserCard({ ...props, menuActions })
      await screen.findByText('ORCID', { exact: false })
      expect(screen.queryByRole('menu')).not.toBeInTheDocument()
    })

    it('displays the context menu on toggle', async () => {
      const menuActions = [
        {
          field: 'text',
          callback: () => {},
        },
      ] as MenuAction[]
      const { user } = renderMediumUserCard({ ...props, menuActions })
      await screen.findByText('ORCID', { exact: false })
      const menuButton = await screen.findByRole('menu')
      await user.click(menuButton)
      await screen.findByRole('menuitem')
    })
  })

  describe('it creates the correct UI for the UserCardContextMenu', () => {
    const props = {
      userProfile: mockUserProfileData,
    }

    it('renders without crashing', async () => {
      const menuActionCallback = vi.fn()
      const menuActions = [
        {
          field: 'text',
          callback: menuActionCallback,
        },
      ] as MenuAction[]
      const { user } = renderUserCardContextMenu({
        ...props,
        menuActions,
        open: true,
      })
      const menu = screen.getByRole('menu')
      const menuItem = within(menu).getByRole('menuitem')

      await user.click(menuItem)

      expect(menuActionCallback).toHaveBeenCalled()
    })

    it('renders a break with SEPERATOR in menuActions', () => {
      const menuActions = [
        {
          field: 'text',
          callback: () => {},
        },
        {
          field: SEPERATOR,
          callback: () => {},
        },
        {
          field: 'other text',
          callback: () => {},
        },
      ] as MenuAction[]
      renderUserCardContextMenu({
        ...props,
        menuActions,
        open: true,
      })
      const menu = screen.getByRole('menu')
      const menuItems = within(menu).getAllByRole('menuitem')
      expect(menuItems).toHaveLength(2)
      const separators = within(menu).getAllByRole('separator')
      expect(separators).toHaveLength(1)
    })
  })

  describe('it creates the correct UI for the large card', () => {
    const props = {
      userProfile: {
        ...mockUserProfileData,
        industry: undefined,
        position: undefined,
        url: undefined,
      },
      size: SynapseConstants.LARGE_USER_CARD,
    }

    it("displays the user's information", () => {
      const { container } = renderLargeUserCard({ ...props })
      expect(container.querySelector('div.SRC-cardMetaData')).not.toBeNull()
      // only two fields are set for the mock profile, so there should only be two
      // fields shown
      expect(
        container.querySelector('div.SRC-cardMetaData-scroll')!.children,
      ).toHaveLength(2)
    })
  })
  describe('it creates the correct UI for a user with no username', () => {
    const props = {
      userProfile: { ...mockUserProfileData, userName: undefined },
      size: SynapseConstants.MEDIUM_USER_CARD,
    }

    it('shows an avatar', async () => {
      renderMediumUserCard({ ...props })
      await screen.findByRole('img')
    })
  })
})
