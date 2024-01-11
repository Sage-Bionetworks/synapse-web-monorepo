import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { UserEvent } from '@testing-library/user-event/dist/types/setup/setup'
import React from 'react'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import {
  AccountLevelBadge,
  AccountLevelBadgeType,
  accountLevelBadgeConfig,
} from './AccountLevelBadge'

describe('AccountLevelBadge', () => {
  function setUp(badgeType: AccountLevelBadgeType) {
    const component = render(<AccountLevelBadge badgeType={badgeType} />, {
      wrapper: createWrapper(),
    })
    const user = userEvent.setup()
    return { component, user }
  }

  async function confirmTooltipText(
    user: UserEvent,
    badgeType: AccountLevelBadgeType,
  ) {
    const iconDiv = document.querySelector('.AccountLevelBadge__iconContainer')
    expect(iconDiv).not.toBeNull()
    await user.hover(iconDiv!)

    const tooltip = await screen.findByRole('tooltip')
    expect(tooltip).toHaveTextContent(
      accountLevelBadgeConfig[badgeType].tooltipText,
    )
  }

  it('certified user', async () => {
    const { user } = setUp('certified')

    await screen.findByText(accountLevelBadgeConfig.certified.label)
    await screen.findByText(accountLevelBadgeConfig.certified.description)
    await confirmTooltipText(user, 'certified')
  })

  it('validated user', async () => {
    const { user } = setUp('validated')

    await screen.findByText(accountLevelBadgeConfig.validated.label)
    await screen.findByText(accountLevelBadgeConfig.validated.description)
    await confirmTooltipText(user, 'validated')
  })
})
