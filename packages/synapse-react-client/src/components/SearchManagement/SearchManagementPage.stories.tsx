import { getHandlersForStorybook } from '@/mocks/msw/handlers'
import { getFeatureFlagsOverride } from '@/mocks/msw/handlers/featureFlagHandlers'
import { FeatureFlagEnum } from '@/utils/featureflag/FeatureFlags'
import {
  MOCK_PORTAL_ORIGIN,
  MOCK_REPO_ORIGIN,
} from '@/utils/functions/getEndpoint'
import { Meta, StoryObj } from '@storybook/react-vite'
import SearchManagementPage from './SearchManagementPage'

const meta = {
  title: 'Synapse/Search Management',
  component: SearchManagementPage,
  parameters: {
    stack: 'mock',
    msw: {
      handlers: {
        ...getHandlersForStorybook(MOCK_REPO_ORIGIN, MOCK_PORTAL_ORIGIN),
        featureFlags: [
          getFeatureFlagsOverride({
            portalOrigin: MOCK_PORTAL_ORIGIN,
            overrides: { [FeatureFlagEnum.SEARCH_INDEX_MANAGEMENT]: true },
          }),
        ],
      },
    },
  },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {}

export const FeatureDisabled: Story = {
  parameters: {
    msw: {
      handlers: {
        featureFlags: [
          getFeatureFlagsOverride({ portalOrigin: MOCK_PORTAL_ORIGIN }),
        ],
      },
    },
  },
}
