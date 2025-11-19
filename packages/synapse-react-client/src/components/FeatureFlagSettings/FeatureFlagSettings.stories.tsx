import { Meta, StoryObj } from '@storybook/react-vite'
import { FeatureFlagEnum } from '@sage-bionetworks/synapse-types'
import { FeatureFlagSettings } from './FeatureFlagSettings'

const meta = {
  title: 'Authentication/FeatureFlagSettings',
  component: FeatureFlagSettings,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const AllDisabled: Story = {
  args: {
    globalFeatureFlags: {
      [FeatureFlagEnum.PORTAL_SEARCH_HEADER]: false,
      [FeatureFlagEnum.DESCRIPTION_FIELD]: false,
      [FeatureFlagEnum.VIRTUALTABLE_SUPPORT]: false,
      [FeatureFlagEnum.REACT_ENTITY_ACL_EDITOR]: false,
      [FeatureFlagEnum.HOMEPAGE_CHATBOT]: false,
      [FeatureFlagEnum.WEBHOOKS_UI]: false,
      [FeatureFlagEnum.CRISP_CHAT]: false,
    },
  },
}

export const SomeEnabled: Story = {
  args: {
    globalFeatureFlags: {
      [FeatureFlagEnum.PORTAL_SEARCH_HEADER]: true,
      [FeatureFlagEnum.DESCRIPTION_FIELD]: true,
      [FeatureFlagEnum.VIRTUALTABLE_SUPPORT]: false,
      [FeatureFlagEnum.REACT_ENTITY_ACL_EDITOR]: false,
      [FeatureFlagEnum.HOMEPAGE_CHATBOT]: false,
      [FeatureFlagEnum.WEBHOOKS_UI]: false,
      [FeatureFlagEnum.CRISP_CHAT]: false,
    },
  },
}
