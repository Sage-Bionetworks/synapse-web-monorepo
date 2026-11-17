import { getHandlersForStorybook } from '@/mocks/msw/handlers'
import { getFeatureFlagsOverride } from '@/mocks/msw/handlers/featureFlagHandlers'
import { FeatureFlagEnum } from '@/utils/featureflag/FeatureFlags'
import {
  MOCK_PORTAL_ORIGIN,
  MOCK_REPO_ORIGIN,
} from '@/utils/functions/getEndpoint'
import { Meta, StoryObj } from '@storybook/react-vite'
import CreateTableViewWizard from './CreateTableViewWizard'
import { displayToast } from '../ToastMessage'
import { fn } from 'storybook/test'

const meta = {
  title: 'Synapse/Create Table Wizard',
  component: CreateTableViewWizard,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/vLusb6uSfhx45OyFx5IHwy/(XDM)-Extensible-Data-Management-Comps?type=design&node-id=7108-22337&mode=design&t=acwaLAqUDge5p8eQ-4',
    },
  },
  tags: ['autodocs'],
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    open: true,
    parentId: 'syn23567475',
    onComplete: newId => {
      displayToast(`Successfully created ${newId}`)
    },
    onCancel: fn(),
  },
}

/** Mock backend with SEARCH_INDEX_MANAGEMENT enabled, so "View" offers a Search Index. */
export const WithSearchIndex: Story = {
  args: {
    ...Demo.args,
    parentId: 'syn12345',
  },
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
}
