import { UserBundle } from '@sage-bionetworks/synapse-types'
import { render, screen, waitFor } from '@testing-library/react'
import React from 'react'
import { mockUserProfileData } from '../../mocks/user/mock_user_profile'
import SynapseClient from '../../synapse-client'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import {
  AccountLevelBadgeType,
  accountLevelBadgeConfig,
} from '../AccountLevelBadge/AccountLevelBadge'
import { AccountLevelBadges } from './AccountLevelBadges'

jest.mock('../../synapse-client', () => ({
  getUserBundle: jest.fn(),
}))

const mockGetUserBundle = jest.mocked(SynapseClient.getUserBundle)

const getMockUserBundle = (
  isCertified: boolean,
  isVerified: boolean,
  twoFactorAuthEnabled?: boolean,
) => {
  const bundle: UserBundle = {
    userId: '345424',
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

describe('AccountLevelBadges', () => {
  const props = {
    userId: '1234',
  }

  function renderComponent() {
    return render(<AccountLevelBadges {...props} />, {
      wrapper: createWrapper(),
    })
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('registered user', () => {
    mockGetUserBundle.mockResolvedValueOnce(getMockUserBundle(false, false))

    renderComponent()

    expect(queryForBadgeLabel('certified')).toBeNull()
    expect(queryForBadgeLabel('validated')).toBeNull()
    expect(queryForBadgeLabel('enabledMFA')).toBeNull()

    expect(SynapseClient.getUserBundle).toHaveBeenCalledTimes(1)
  })

  it('certified user', async () => {
    mockGetUserBundle.mockResolvedValueOnce(getMockUserBundle(true, false))

    renderComponent()

    await waitFor(() => {
      expect(queryForBadgeLabel('certified')).not.toBeNull()
    })
    expect(queryForBadgeLabel('validated')).toBeNull()
    expect(queryForBadgeLabel('enabledMFA')).toBeNull()

    expect(SynapseClient.getUserBundle).toHaveBeenCalledTimes(1)
  })

  it('verified user', async () => {
    mockGetUserBundle.mockResolvedValueOnce(getMockUserBundle(false, true))

    renderComponent()

    await waitFor(() => {
      expect(queryForBadgeLabel('validated')).not.toBeNull()
    })
    expect(queryForBadgeLabel('certified')).toBeNull()
    expect(queryForBadgeLabel('enabledMFA')).toBeNull()

    expect(SynapseClient.getUserBundle).toHaveBeenCalledTimes(1)
  })

  it('enabled mfa user', async () => {
    mockGetUserBundle.mockResolvedValueOnce(
      getMockUserBundle(false, false, true),
    )

    renderComponent()

    await waitFor(() => {
      expect(queryForBadgeLabel('enabledMFA')).not.toBeNull()
    })
    expect(queryForBadgeLabel('certified')).toBeNull()
    expect(queryForBadgeLabel('validated')).toBeNull()

    expect(SynapseClient.getUserBundle).toHaveBeenCalledTimes(1)
  })

  it('certified and verified user', async () => {
    mockGetUserBundle.mockResolvedValueOnce(
      getMockUserBundle(true, true, false),
    )

    renderComponent()

    await waitFor(() => {
      expect(queryForBadgeLabel('certified')).not.toBeNull()
      expect(queryForBadgeLabel('validated')).not.toBeNull()
    })
    expect(queryForBadgeLabel('enabledMFA')).toBeNull()

    expect(SynapseClient.getUserBundle).toHaveBeenCalledTimes(1)
  })

  it('certified, verified, and enabled mfa user', async () => {
    mockGetUserBundle.mockResolvedValueOnce(getMockUserBundle(true, true, true))

    renderComponent()

    await waitFor(() => {
      expect(queryForBadgeLabel('certified')).not.toBeNull()
      expect(queryForBadgeLabel('validated')).not.toBeNull()
      expect(queryForBadgeLabel('enabledMFA')).not.toBeNull()
    })

    expect(SynapseClient.getUserBundle).toHaveBeenCalledTimes(1)
  })
})
