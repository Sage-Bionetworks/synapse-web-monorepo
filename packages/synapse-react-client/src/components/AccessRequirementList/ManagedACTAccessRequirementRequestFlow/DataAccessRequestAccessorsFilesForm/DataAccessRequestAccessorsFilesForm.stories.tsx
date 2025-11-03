import {
  mockManagedAccessRequirementWithNoACL,
  mockManagedACTAccessRequirement,
} from '@/mocks/accessRequirement/mockAccessRequirements'
import { MOCK_RESEARCH_PROJECT_ID } from '@/mocks/dataaccess/MockResearchProject'
import { MOCK_FOLDER_ID } from '@/mocks/entity/mockEntity'
import { getAccessRequirementHandlers } from '@/mocks/msw/handlers/accessRequirementHandlers'
import { getDataAccessRequestHandlers } from '@/mocks/msw/handlers/dataAccessRequestHandlers'
import { getFileHandlers } from '@/mocks/msw/handlers/fileHandlers'
import { getUserProfileHandlers } from '@/mocks/msw/handlers/userProfileHandlers'
import { getWikiHandlers } from '@/mocks/msw/handlers/wikiHandlers'
import { MOCK_REPO_ORIGIN } from '@/utils/functions/getEndpoint'
import { RestrictableObjectType } from '@sage-bionetworks/synapse-types'
import { Meta, StoryObj } from '@storybook/react-vite'
import DataAccessRequestAccessorsFilesForm, {
  DataAccessRequestAccessorsFilesFormProps,
} from './DataAccessRequestAccessorsFilesForm'

const meta: Meta<
  DataAccessRequestAccessorsFilesFormProps & { isAuthenticated: boolean }
> = {
  title:
    'Governance/Data Access Request Flow/Managed Access Requirement/Step 2 - Accessors and Documentation',
  component: DataAccessRequestAccessorsFilesForm,
  parameters: {
    stack: 'mock',
    chromatic: { viewports: [600, 1200] },
    msw: {
      handlers: [
        ...getUserProfileHandlers(MOCK_REPO_ORIGIN),
        ...getFileHandlers(MOCK_REPO_ORIGIN),
        ...getWikiHandlers(MOCK_REPO_ORIGIN),
        ...getAccessRequirementHandlers(MOCK_REPO_ORIGIN),
        ...getDataAccessRequestHandlers(MOCK_REPO_ORIGIN),
      ],
    },
  },
  argTypes: {
    isAuthenticated: {
      type: 'boolean',
    },
  },
  args: {
    isAuthenticated: true,
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Request: Story = {
  args: {
    subjectId: MOCK_FOLDER_ID,
    subjectType: RestrictableObjectType.ENTITY,
    managedACTAccessRequirement: mockManagedACTAccessRequirement,
    researchProjectId: MOCK_RESEARCH_PROJECT_ID,
  },
}
export const Renewal: Story = {
  args: {
    subjectId: MOCK_FOLDER_ID,
    subjectType: RestrictableObjectType.ENTITY,
    managedACTAccessRequirement: mockManagedAccessRequirementWithNoACL,
    researchProjectId: MOCK_RESEARCH_PROJECT_ID,
  },
}
