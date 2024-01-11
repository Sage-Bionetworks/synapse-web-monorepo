import { UserBundle } from '@sage-bionetworks/synapse-types'
import { render, screen } from '@testing-library/react'
import React from 'react'
import SynapseClient from '../../synapse-client'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import { accountLevelBadgeConfig } from '../AccountLevelBadge/AccountLevelBadge'
import { AccountLevelBadges } from './AccountLevelBadges'

jest.mock('../../synapse-client', () => ({
  getUserBundle: jest.fn(),
}))

const mockGetUserBundle = jest.mocked(SynapseClient.getUserBundle)

const mockRegistered: UserBundle = {
  userId: '345424',
  isCertified: false,
  isVerified: false,
}
const mockCertified: UserBundle = {
  userId: '345424',
  isCertified: true,
  isVerified: false,
}
const mockVerified: UserBundle = {
  userId: '345424',
  isCertified: false,
  isVerified: true,
}
const mockCertifiedAndVerified: UserBundle = {
  userId: '345424',
  isCertified: true,
  isVerified: true,
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
    mockGetUserBundle.mockResolvedValueOnce(mockRegistered)

    renderComponent()

    expect(
      screen.queryByText(accountLevelBadgeConfig.certified.label),
    ).toBeNull()
    expect(
      screen.queryByText(accountLevelBadgeConfig.validated.label),
    ).toBeNull()
    expect(SynapseClient.getUserBundle).toHaveBeenCalledTimes(1)
  })

  it('certified user', async () => {
    mockGetUserBundle.mockResolvedValueOnce(mockCertified)

    renderComponent()

    await screen.findByText(accountLevelBadgeConfig.certified.label)
    expect(SynapseClient.getUserBundle).toHaveBeenCalledTimes(1)
  })

  it('verified user', async () => {
    mockGetUserBundle.mockResolvedValueOnce(mockVerified)

    renderComponent()

    await screen.findByText(accountLevelBadgeConfig.validated.label)
    expect(SynapseClient.getUserBundle).toHaveBeenCalledTimes(1)
  })

  it('certified and verified user', async () => {
    mockGetUserBundle.mockResolvedValueOnce(mockCertifiedAndVerified)

    renderComponent()

    await screen.findByText(accountLevelBadgeConfig.certified.label)
    await screen.findByText(accountLevelBadgeConfig.validated.label)
    expect(SynapseClient.getUserBundle).toHaveBeenCalledTimes(1)
  })
})
