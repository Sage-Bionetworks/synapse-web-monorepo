import { getEntityHandlers } from '@/mocks/msw/handlers/entityHandlers'
import { getProjectStorageHandlers } from '@/mocks/msw/handlers/projectStorageHandlers'
import { getUserProfileHandlers } from '@/mocks/msw/handlers/userProfileHandlers'
import {
  OVER_LIMIT_PROJECT_ID,
  UNDER_LIMIT_PROJECT_ID,
} from '@/mocks/projectStorage/mockProjectStorageLimits'
import { MOCK_REPO_ORIGIN } from '@/utils/functions/getEndpoint'
import { Meta, StoryObj } from '@storybook/react-vite'
import ProjectDataAvailability from './ProjectDataAvailability'

const meta = {
  title: 'Synapse/ProjectStorage',
  component: ProjectDataAvailability,
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

export const ProjectDataUnderLimit: Story = {
  args: {
    projectId: UNDER_LIMIT_PROJECT_ID,
    sx: { backgroundColor: '#375574' },
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

export const ProjectDataOverLimit: Story = {
  args: {
    projectId: OVER_LIMIT_PROJECT_ID,
    sx: { backgroundColor: '#375574' },
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

export const ProjectDataStorageNotSet: Story = {
  args: { projectId: 'syn31415123' },
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
