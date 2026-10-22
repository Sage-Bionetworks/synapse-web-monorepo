import { FeatureFlagEnum } from '@/utils/featureflag/FeatureFlags'
import { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import ExperimentalFeaturesDialog from './ExperimentalFeaturesDialog'

const meta = {
  title: 'Synapse/ExperimentalFeaturesDialog',
  component: ExperimentalFeaturesDialog,
  args: {
    open: true,
    onCancel: fn(),
    onSave: fn(),
    isLoading: false,
    features: [
      FeatureFlagEnum.CURATION_TASK_PAGE_SHOW_NEW_TASK_BUTTON,
      FeatureFlagEnum.ACT_DASHBOARD_FORM_TEMPLATES,
    ],
    initialEnableAll: false,
    initialEnabledFlags: [],
  },
} satisfies Meta<typeof ExperimentalFeaturesDialog>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const SomeEnabled: Story = {
  args: {
    initialEnabledFlags: [
      FeatureFlagEnum.CURATION_TASK_PAGE_SHOW_NEW_TASK_BUTTON,
    ],
  },
}

export const EnableAll: Story = {
  args: { initialEnableAll: true },
}

export const Loading: Story = {
  args: { isLoading: true },
}

export const NoFeaturesAvailable: Story = {
  args: { features: [] },
}
