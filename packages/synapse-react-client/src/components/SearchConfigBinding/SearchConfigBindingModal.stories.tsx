import mockProjectEntityData from '@/mocks/entity/mockProject'
import { getHandlersForStorybook } from '@/mocks/msw/handlers'
import { searchConfigBindingService } from '@/mocks/msw/handlers/searchManagementHandlers'
import { mockSearchManagementResources } from '@/mocks/searchmanagement/mockSearchManagementData'
import {
  MOCK_PORTAL_ORIGIN,
  MOCK_REPO_ORIGIN,
} from '@/utils/functions/getEndpoint'
import { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import SearchConfigBindingModal from './SearchConfigBindingModal'

const entityId = mockProjectEntityData.id

const meta = {
  title: 'Synapse/Search Index/SearchConfigBindingModal',
  component: SearchConfigBindingModal,
  parameters: {
    stack: 'mock',
    msw: {
      handlers: getHandlersForStorybook(MOCK_REPO_ORIGIN, MOCK_PORTAL_ORIGIN),
    },
  },
  args: {
    open: true,
    entityId,
    onClose: fn(),
  },
  beforeEach: () => {
    searchConfigBindingService.delete(entityId)
  },
} satisfies Meta<typeof SearchConfigBindingModal>
export default meta
type Story = StoryObj<typeof meta>

export const NoBinding: Story = {}

export const ExistingBinding: Story = {
  beforeEach: () => {
    searchConfigBindingService.create({
      bindId: 'mock-bind-id',
      objectId: entityId,
      objectType: 'entity',
      searchConfigurationId:
        mockSearchManagementResources.SEARCH_CONFIGURATION[0].id,
    })
  },
}
