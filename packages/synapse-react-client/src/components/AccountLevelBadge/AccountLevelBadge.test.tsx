import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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

  for (const badgeType in accountLevelBadgeConfig) {
    it(`${badgeType} badge`, async () => {
      const { user } = setUp(badgeType as AccountLevelBadgeType)

      const config = accountLevelBadgeConfig[badgeType as AccountLevelBadgeType]

      await screen.findByText(config.label)
      await screen.findByText(config.description)

      const icon = screen.getByLabelText(config.tooltipText)
      await user.hover(icon)

      const tooltip = await screen.findByRole('tooltip')
      expect(tooltip).toHaveTextContent(config.tooltipText)

      const link = await screen.findByRole('link')
      expect(link).toHaveAttribute('href', config.linkHref)
    })
  }
})
