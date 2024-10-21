import { Meta, StoryObj } from '@storybook/react'
import ProjectDataAvailability from './ProjectDataAvailability'
import { MOCK_REPO_ORIGIN } from 'src/utils/functions/getEndpoint'
import { getUserProfileHandlers } from 'src/mocks/msw/handlers/userProfileHandlers'
import { getEntityHandlers } from 'src/mocks/msw/handlers/entityHandlers'
import { getProjectStorageHandlers } from 'src/mocks/msw/handlers/projectStorageHandlers'
import {
  OVER_LIMIT_PROJECT_ID,
  UNDER_LIMIT_PROJECT_ID,
} from 'src/mocks/projectStorage/mockProjectStorageLimits'

const meta = {
  title: 'Synapse/ProjectStorage',
  component: ProjectDataAvailability,
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
