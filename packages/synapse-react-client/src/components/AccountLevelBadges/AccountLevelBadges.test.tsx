import { MOCK_ACCESS_TOKEN } from '@/mocks/MockSynapseContext'
import {
  mockUserBundle,
  mockUserProfileData,
} from '@/mocks/user/mock_user_profile'
import SynapseClient from '@/synapse-client'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { UserBundle } from '@sage-bionetworks/synapse-types'
import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  accountLevelBadgeConfig,
  AccountLevelBadgeType,
} from '../AccountLevelBadge/AccountLevelBadge'
import { AccountLevelBadges } from './AccountLevelBadges'

const USER_ID = '345424'

vi.mock('../../synapse-client/SynapseClient', () => ({
  getMyUserBundle: vi.fn(),
  getUserBundle: vi.fn(),
  revokeCertification: vi.fn(),
}))

const mockGetMyUserBundle = vi.mocked(SynapseClient.getMyUserBundle)
const mockGetUserBundle = vi.mocked(SynapseClient.getUserBundle)
const mockRevokeCertification = vi
  .mocked(SynapseClient.revokeCertification)
  .mockResolvedValue({
    userId: USER_ID,
    quizId: 1,
    responseId: 1,
    passed: true,
    revokedOn: new Date().toISOString(),
    score: 10,
    passedOn: new Date().toISOString(),
  })

const getMockUserBundle = (
  isCertified: boolean,
  isVerified: boolean,
  twoFactorAuthEnabled?: boolean,
) => {
  const bundle: UserBundle = {
    userId: USER_ID,
    isCertified: isCertified,
    isVerified: isVerified,
  }
  bundle.userProfile =
    twoFactorAuthEnabled === undefined
      ? undefined
      : {
          ...mockUserProfileData,
          twoFactorAuthEnabled: twoFactorAuthEnabled,
        }
  return bundle
}

const queryForBadgeLabel = (badgeType: AccountLevelBadgeType) => {
  return screen.queryByText(accountLevelBadgeConfig[badgeType].label)
}
const props = {
  userId: USER_ID,
}

function renderComponent() {
  const component = render(<AccountLevelBadges {...props} />, {
    wrapper: createWrapper(),
  })

  const user = userEvent.setup()

  return { component, user }
}

describe('AccountLevelBadges', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockGetMyUserBundle.mockResolvedValue(mockUserBundle)
  })

  it('registered user', () => {
    mockGetUserBundle.mockResolvedValue(getMockUserBundle(false, false))

    renderComponent()

    expect(queryForBadgeLabel('certified')).not.toBeInTheDocument()
    expect(queryForBadgeLabel('validated')).not.toBeInTheDocument()
    expect(queryForBadgeLabel('enabledMFA')).not.toBeInTheDocument()

    expect(mockGetUserBundle).toHaveBeenCalledTimes(1)
  })

  it('certified user', async () => {
    mockGetUserBundle.mockResolvedValue(getMockUserBundle(true, false))

    renderComponent()

    await waitFor(() => {
      expect(queryForBadgeLabel('certified')).toBeInTheDocument()
    })
    expect(queryForBadgeLabel('validated')).not.toBeInTheDocument()
    expect(queryForBadgeLabel('enabledMFA')).not.toBeInTheDocument()

    expect(mockGetUserBundle).toHaveBeenCalledTimes(1)
  })

  it('verified user', async () => {
    mockGetUserBundle.mockResolvedValue(getMockUserBundle(false, true))

    renderComponent()

    await waitFor(() => {
      expect(queryForBadgeLabel('validated')).toBeInTheDocument()
      expect(queryForBadgeLabel('certified')).not.toBeInTheDocument()
      expect(queryForBadgeLabel('enabledMFA')).not.toBeInTheDocument()
    })

    expect(mockGetUserBundle).toHaveBeenCalledTimes(1)
  })

  it('enabled mfa user', async () => {
    mockGetUserBundle.mockResolvedValue(getMockUserBundle(false, false, true))

    renderComponent()

    await waitFor(() => {
      expect(queryForBadgeLabel('enabledMFA')).toBeInTheDocument()
      expect(queryForBadgeLabel('certified')).not.toBeInTheDocument()
      expect(queryForBadgeLabel('validated')).not.toBeInTheDocument()
    })

    expect(mockGetUserBundle).toHaveBeenCalledTimes(1)
  })

  it('certified and verified user', async () => {
    mockGetUserBundle.mockResolvedValue(getMockUserBundle(true, true, false))

    renderComponent()

    await waitFor(() => {
      expect(queryForBadgeLabel('certified')).toBeInTheDocument()
      expect(queryForBadgeLabel('validated')).toBeInTheDocument()
      expect(queryForBadgeLabel('enabledMFA')).not.toBeInTheDocument()
    })

    expect(mockGetUserBundle).toHaveBeenCalledTimes(1)
  })

  it('certified, verified, and enabled mfa user', async () => {
    mockGetUserBundle.mockResolvedValue(getMockUserBundle(true, true, true))

    renderComponent()

    await waitFor(() => {
      expect(queryForBadgeLabel('certified')).toBeInTheDocument()
      expect(queryForBadgeLabel('validated')).toBeInTheDocument()
      expect(queryForBadgeLabel('enabledMFA')).toBeInTheDocument()
    })

    expect(mockGetUserBundle).toHaveBeenCalledTimes(1)
  })

  it('ACT can revoke certification', async () => {
    // Current user must be ACT to see the button
    mockGetMyUserBundle.mockResolvedValue({
      ...mockUserBundle,
      isACTMember: true,
    })
    mockGetUserBundle.mockResolvedValue(getMockUserBundle(true, false))

    const { user } = renderComponent()

    await waitFor(() => {
      expect(queryForBadgeLabel('certified')).toBeInTheDocument()
    })

    const revokeButton = await screen.findByRole('button', {
      name: 'Revoke Certification',
    })

    await user.click(revokeButton)

    const confirmationDialog = await screen.findByRole('dialog')
    within(confirmationDialog).getByText('Revoke user certification?')
    const confirmButton = within(confirmationDialog).getByRole('button', {
      name: 'Revoke',
    })

    await user.click(confirmButton)

    expect(mockRevokeCertification).toHaveBeenCalledWith(
      USER_ID,
      MOCK_ACCESS_TOKEN,
    )
    // Get bundle should have been called twice. Revoking certification will invalidate the cache
    expect(mockGetUserBundle).toHaveBeenCalledTimes(2)
  })
})
