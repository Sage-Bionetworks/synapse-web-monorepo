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
import {
  DATA_ACCESS_REQUEST,
  ACCESS_REQUIREMENT_DATA_ACCESS_REQUEST_FOR_UPDATE,
} from '@/utils/APIConstants'
import { MOCK_REPO_ORIGIN } from '@/utils/functions/getEndpoint'
import { IdentityProviderName } from '@sage-bionetworks/synapse-client'
import { RestrictableObjectType } from '@sage-bionetworks/synapse-types'
import { Meta, StoryObj } from '@storybook/react-vite'
import { http, HttpResponse } from 'msw'
import DataAccessRequestAccessorsFilesForm, {
  DataAccessRequestAccessorsFilesFormProps,
} from './DataAccessRequestAccessorsFilesForm'

const defaultHandlers = [
  ...getUserProfileHandlers(MOCK_REPO_ORIGIN),
  ...getFileHandlers(MOCK_REPO_ORIGIN),
  ...getWikiHandlers(MOCK_REPO_ORIGIN),
  ...getAccessRequirementHandlers(MOCK_REPO_ORIGIN),
  ...getDataAccessRequestHandlers(MOCK_REPO_ORIGIN),
]

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
      handlers: defaultHandlers,
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
export const Step2EDucEnabled: Story = {
  args: {
    subjectId: MOCK_FOLDER_ID,
    subjectType: RestrictableObjectType.ENTITY,
    managedACTAccessRequirement: {
      ...mockManagedACTAccessRequirement,
      eDucTemplateId: 'educ-template-123',
    },
    researchProjectId: MOCK_RESEARCH_PROJECT_ID,
  },
}
export const IdentityProviderNotAccepted: Story = {
  args: {
    subjectId: MOCK_FOLDER_ID,
    subjectType: RestrictableObjectType.ENTITY,
    managedACTAccessRequirement: {
      ...mockManagedACTAccessRequirement,
      identityProviders: [IdentityProviderName.NIH_RESEARCHER_AUTH_SERVICE],
    },
    researchProjectId: MOCK_RESEARCH_PROJECT_ID,
  },
  parameters: {
    msw: {
      handlers: [
        // The user has no request yet, and Synapse rejects creating one because of how they signed in
        http.get(
          `${MOCK_REPO_ORIGIN}${ACCESS_REQUIREMENT_DATA_ACCESS_REQUEST_FOR_UPDATE(':id')}`,
          ({ params }) =>
            HttpResponse.json({
              concreteType: 'org.sagebionetworks.repo.model.dataaccess.Request',
              accessRequirementId: params.id,
            }),
        ),
        http.post(`${MOCK_REPO_ORIGIN}${DATA_ACCESS_REQUEST}`, () =>
          HttpResponse.json(
            {
              reason:
                'A data access request for this access requirement can only be created after signing in through one of the identity providers it accepts.',
            },
            { status: 403 },
          ),
        ),
        ...defaultHandlers,
      ],
    },
  },
}
