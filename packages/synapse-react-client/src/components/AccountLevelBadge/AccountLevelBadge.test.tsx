import { render, screen } from '@testing-library/react'
import React from 'react'
import {
  AccountLevelBadge,
  accountLevelCertifiedLabel,
  accountLevelRegisteredLabel,
  accountLevelVerifiedLabel,
} from './AccountLevelBadge'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import { UserBundle } from '@sage-bionetworks/synapse-types'
import SynapseClient from '../../synapse-client'

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
  isCertified: true,
  isVerified: true,
}

describe('basic functionality', () => {
  const props = {
    userId: '1234',
  }

  function renderComponent() {
    return render(<AccountLevelBadge {...props} />, {
      wrapper: createWrapper(),
    })
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('registered user', async () => {
    mockGetUserBundle.mockResolvedValueOnce(mockRegistered)

    renderComponent()

    // find account level label
    await screen.findByText(accountLevelRegisteredLabel)
    expect(SynapseClient.getUserBundle).toHaveBeenCalledTimes(1)
  })

  it('certified user', async () => {
    mockGetUserBundle.mockResolvedValueOnce(mockCertified)

    renderComponent()

    // find account level label
    await screen.findByText(accountLevelCertifiedLabel)
    expect(SynapseClient.getUserBundle).toHaveBeenCalledTimes(1)
  })

  it('verified user', async () => {
    mockGetUserBundle.mockResolvedValueOnce(mockVerified)

    renderComponent()

    // find account level label
    await screen.findByText(accountLevelVerifiedLabel)
    expect(SynapseClient.getUserBundle).toHaveBeenCalledTimes(1)
  })
})
