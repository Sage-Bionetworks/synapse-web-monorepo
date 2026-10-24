import { getEndpoint, BackendDestinationEnum } from '@/utils/functions'
import { Box } from '@mui/material'
import { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import ExperimentalFeatures from './ExperimentalFeatures'
import { getFeatureFlagsOverride } from '@/mocks/msw/handlers/featureFlagHandlers'
import { FeatureFlagEnum } from '@/utils/featureflag/FeatureFlags'

const portalOrigin = getEndpoint(BackendDestinationEnum.PORTAL_ENDPOINT)

const meta = {
  title: 'Synapse/ExperimentalFeatures',
  component: ExperimentalFeatures,
  args: { scope: 'SYNAPSE', onSave: fn() },
  decorators: [
    Story => (
      <Box sx={{ backgroundColor: 'primary.main', color: 'white', p: 3 }}>
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof ExperimentalFeatures>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  parameters: {
    msw: {
      handlers: {
        featureFlags: [
          getFeatureFlagsOverride({
            portalOrigin,
            overrides: {
              [FeatureFlagEnum.CURATION_TASK_PAGE_SHOW_NEW_TASK_BUTTON]:
                undefined,
              [FeatureFlagEnum.ACT_DASHBOARD_FORM_TEMPLATES]: undefined,
            },
          }),
        ],
      },
    },
  },
}
