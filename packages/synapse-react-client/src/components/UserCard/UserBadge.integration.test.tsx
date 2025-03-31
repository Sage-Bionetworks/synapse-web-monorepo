import { server } from '@/mocks/msw/server'
import {
  MOCK_USER_NAME,
  mockUserProfileData,
} from '@/mocks/user/mock_user_profile'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { act, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { UserBadge, UserBadgeProps } from './UserBadge'

const renderComponent = (props: UserBadgeProps) => {
  return render(<UserBadge {...props} />, {
    wrapper: createWrapper(),
  })
}

describe('UserBadge tests', () => {
  // Handle the msw lifecycle:
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  beforeEach(() => {
    jest.useRealTimers()
  })

  it('renders the badge', async () => {
    renderComponent(props)
    await screen.findByText('@' + MOCK_USER_NAME)
  })

  const props: UserBadgeProps = {
    userId: mockUserProfileData.ownerId,
    showCardOnHover: true,
  }

  it('displays a anchor with text for a user without an img', async () => {
    const { container } = renderComponent({ ...props })
    expect(container.querySelector('a.UserBadge')).not.toBeNull()

    await screen.findByText(`@${mockUserProfileData.userName}`)
    expect(screen.queryByRole('img')).not.toBeInTheDocument()
  })

  it('shows a medium user card when mouse enters', async () => {
    jest.useFakeTimers()
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime })

    renderComponent(props)

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
    renderComponent({
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
    const { container } = renderComponent({
      ...props,
      showCardOnHover: false,
      disableLink: true,
    })

    await screen.findByText(`@${mockUserProfileData.userName}`)
    expect(container.querySelector('span.UserBadge')).not.toBeNull()
  })

  test('showFullName', async () => {
    renderComponent({
      ...props,
      showFullName: true,
    })
    await screen.findByText(
      `${mockUserProfileData.firstName} ${mockUserProfileData.lastName}`,
    )
    await screen.findByText(`(@${mockUserProfileData.userName})`)
  })
})
