import { Meta, StoryObj } from '@storybook/react-vite'
import AccessIcon, { RestrictionUiType } from './AccessIcon'

const meta = {
  title: 'Components/HasAccess/AccessIcon',
  component: AccessIcon,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Accessible: Story = {
  args: {
    restrictionUiType: RestrictionUiType.Accessible,
  },
}

export const AccessibleWithTerms: Story = {
  args: {
    restrictionUiType: RestrictionUiType.AccessibleWithTerms,
  },
}

export const AccessBlockedByRestriction: Story = {
  args: {
    restrictionUiType: RestrictionUiType.AccessBlockedByRestriction,
  },
}

export const AccessBlockedByRestrictionWithPendingRequest: Story = {
  args: {
    restrictionUiType:
      RestrictionUiType.AccessBlockedByRestrictionWithPendingRequest,
  },
}

export const AccessBlockedByRestrictionWithPendingExternalRequest: Story = {
  args: {
    restrictionUiType:
      RestrictionUiType.AccessBlockedByRestrictionWithPendingExternalRequest,
  },
}

export const AccessBlockedByACL: Story = {
  args: {
    restrictionUiType: RestrictionUiType.AccessBlockedByACL,
  },
}

export const AccessBlockedToAnonymous: Story = {
  args: {
    restrictionUiType: RestrictionUiType.AccessBlockedToAnonymous,
  },
}

export const AccessibleExternalFileHandle: Story = {
  args: {
    restrictionUiType: RestrictionUiType.AccessibleExternalFileHandle,
  },
}
