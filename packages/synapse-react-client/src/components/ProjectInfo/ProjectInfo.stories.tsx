import { Meta, StoryObj } from '@storybook/react-vite'
import ProjectInfo from './ProjectInfo'
import { getEntityHandlers } from '@/mocks/msw/handlers/entityHandlers'
import { getProjectStorageHandlers } from '@/mocks/msw/handlers/projectStorageHandlers'
import { getUserProfileHandlers } from '@/mocks/msw/handlers/userProfileHandlers'
import { UNDER_LIMIT_PROJECT_ID } from '@/mocks/projectStorage/mockProjectStorageLimits'
import { MOCK_REPO_ORIGIN } from '@/utils/functions/getEndpoint'

const meta = {
  title: 'Synapse/EntityPage/ProjectInfo',
  component: ProjectInfo,
  parameters: {
    chromatic: { viewports: [600, 1200] },
  },
  argTypes: {
    isAuthenticated: {
      type: 'boolean',
    },
  },
  args: {
    isAuthenticated: true,
  },
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

const PROJECT_ID = 'syn68244561'

export const Default: Story = {
  args: {
    projectId: UNDER_LIMIT_PROJECT_ID,
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [
        ...getUserProfileHandlers(MOCK_REPO_ORIGIN),
        ...getEntityHandlers(MOCK_REPO_ORIGIN),
        ...getProjectStorageHandlers(MOCK_REPO_ORIGIN),
      ],
    },
  },
}

export const WithDoi: Story = {
  args: {
    projectId: PROJECT_ID,
  },
}
