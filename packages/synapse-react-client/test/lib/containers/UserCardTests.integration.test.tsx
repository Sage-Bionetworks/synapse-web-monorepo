import { render, screen, waitFor, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { cloneDeep } from 'lodash-es'
import React from 'react'
import UserCard, { UserCardProps } from '../../../src/lib/containers/UserCard'
import UserCardContextMenu, {
  MenuAction,
  UserCardContextMenuProps,
} from '../../../src/lib/containers/UserCardContextMenu'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import { SynapseConstants } from '../../../src/lib/utils'
import { PROFILE_IMAGE_PREVIEW } from '../../../src/lib/utils/APIConstants'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../../src/lib/utils/functions/getEndpoint'
import {
  AVATAR,
  LARGE_USER_CARD,
  MEDIUM_USER_CARD,
  SEPERATOR,
  SMALL_USER_CARD,
} from '../../../src/lib/utils/SynapseConstants'
import { rest, server } from '../../../mocks/msw/server'
import {
  MOCK_USER_NAME,
  mockUserProfileData,
} from '../../../mocks/user/mock_user_profile'

const { firstName } = mockUserProfileData

const renderUserCard = (props: UserCardProps) => {
  return render(<UserCard {...props} />, {
    wrapper: createWrapper(),
  })
}

const renderUserCardContextMenu = (props: UserCardContextMenuProps) => {
  return render(<UserCardContextMenu {...props} />, {
    wrapper: createWrapper(),
  })
}

const renderSmallUserCard = (props: Omit<UserCardProps, 'size'>) => {
  return renderUserCard({ ...props, size: SMALL_USER_CARD })
}

const renderMediumUserCard = (props: Omit<UserCardProps, 'size'>) => {
  return renderUserCard({ ...props, size: MEDIUM_USER_CARD })
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
    jest.useRealTimers()
  })

  describe('it renders the different sized cards without failing', () => {
    const props: Omit<UserCardProps, 'size'> = {
      userProfile: mockUserProfileData,
    }

    it('renders an avatar', async () => {
      renderAvatar(props)
      await screen.findByRole('img')
    })

    it('renders a small card', async () => {
      renderSmallUserCard(props)
      await screen.findByText('@' + MOCK_USER_NAME)
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
      expect(imageElement.classList.contains('SRC-userImgSmall')).toBe(true)
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
      expect(imageElement.classList.contains('SRC-userImgSmall')).toBe(true)
      expect(imageElement.style.backgroundImage).toBe('')
    })

    it('creates a large avatar', async () => {
      renderAvatar({ ...props, avatarSize: 'LARGE' })
      const imageElement = await screen.findByRole('img')
      // No profile pic fetched, so the avatar should have the first initial
      await screen.findByText(firstName[0])
      expect(imageElement.classList.contains('SRC-userImg')).toBe(true)
      expect(imageElement.style.backgroundImage).toBe('')
    })

    it('displays an img for a user with an img set', async () => {
      const IMAGE_URL = 'http://some-image-url.notarealurl/image.jpg'
      server.use(
        // Synapse provides the presigned URL for the profile image
        rest.get(
          `${getEndpoint(
            BackendDestinationEnum.REPO_ENDPOINT,
          )}${PROFILE_IMAGE_PREVIEW(':userId')}`,
          async (req, res, ctx) => {
            return res(
              ctx.status(200),
              ctx.set('Content-Type', 'text/plain'),
              ctx.text(IMAGE_URL),
            )
          },
        ),
        // Handler for the "presigned" URL itself:
        rest.get(IMAGE_URL, async (req, res, ctx) => {
          return res(
            ctx.status(200),
            ctx.set('Content-Type', 'image/jpeg'),
            ctx.body('abcdef'),
          )
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

  describe('it creates the correct UI for the small card', () => {
    const props: Omit<UserCardProps, 'size'> = {
      userProfile: mockUserProfileData,
      showCardOnHover: true,
    }

    it('displays a anchor with text for a user without an img', async () => {
      const { container } = renderSmallUserCard({ ...props })
      expect(container.querySelector('a.UserCardSmall')).not.toBeNull()

      await screen.findByText(`@${mockUserProfileData.userName}`)
      expect(screen.queryByRole('img')).not.toBeInTheDocument()
    })

    it('shows a medium user card when mouse enters', async () => {
      jest.useFakeTimers()
      const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime })

      renderSmallUserCard(props)

      const smallUserCard = await screen.findByText(
        `@${mockUserProfileData.userName}`,
      )

      // There is no medium user card, so we shouldn't be able to find the full name anywhere
      await waitFor(() => {
        expect(
          screen.queryByText(
            `${mockUserProfileData.firstName} ${mockUserProfileData.lastName}`,
          ),
        ).not.toBeInTheDocument()
      })

      // Hover over the username
      await user.hover(smallUserCard)
      act(() => {
        jest.advanceTimersByTime(1000)
      })

      // The card should appear, which would let us see first/last name
      await screen.findByText(
        `${mockUserProfileData.firstName} ${mockUserProfileData.lastName}`,
      )

      // Unhover and confirm that the card disappears (we will no longer see a full name anywhere)
      await user.unhover(smallUserCard)
      act(() => {
        jest.advanceTimersByTime(1000)
      })

      await waitFor(() =>
        expect(
          screen.queryByText(
            `${mockUserProfileData.firstName} ${mockUserProfileData.lastName}`,
          ),
        ).not.toBeInTheDocument(),
      )
    })

    it('creates an anchor link when showCardOnHover is false', async () => {
      const link = 'someweblink.domain'
      renderSmallUserCard({
        ...props,
        showCardOnHover: false,
        link,
      })
      const smallUserCard = await screen.findByText(
        `@${mockUserProfileData.userName}`,
      )
      expect(smallUserCard.getAttribute('href')).toEqual(link)
    })

    it('just shows the username when showCardOnHover is false and disableLink is true', async () => {
      const { container } = renderSmallUserCard({
        ...props,
        showCardOnHover: false,
        disableLink: true,
      })

      await screen.findByText(`@${mockUserProfileData.userName}`)
      expect(container.querySelector('span.UserCardSmall')).not.toBeNull()
    })

    test('showFullName', async () => {
      renderSmallUserCard({
        ...props,
        showFullName: true,
      })
      await screen.findByText(
        `${mockUserProfileData.firstName} ${mockUserProfileData.lastName}`,
      )
      await screen.findByText(`(@${mockUserProfileData.userName})`)
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

    it.skip('displays the context menu on toggle', async () => {
      const menuActions = [
        {
          field: 'text',
          callback: () => {},
        },
      ] as MenuAction[]
      renderMediumUserCard({ ...props, menuActions })
      await screen.findByText('ORCID', { exact: false })
      const menuButton = await screen.findByRole('menu')
      await userEvent.click(menuButton)
      await screen.findByRole('menuitem')
    })
  })

  describe('it creates the correct UI for the UserCardContextMenu', () => {
    const props = {
      userProfile: mockUserProfileData,
    }

    it('renders without crashing', () => {
      const menuActions = [
        {
          field: 'text',
          callback: () => {},
        },
      ] as MenuAction[]
      const { container } = renderUserCardContextMenu({ ...props, menuActions })
      // one svg is for the clipboard icon, one for the ellipsis,
      // and one is for the user svg
      expect(container).toBeDefined()
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
      const { container } = renderUserCardContextMenu({ ...props, menuActions })
      expect(container.querySelector('hr.SRC-break')).not.toBeNull()
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
})
