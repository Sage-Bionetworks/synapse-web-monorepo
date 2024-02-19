import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import DataAccessRequestAccessorsFilesForm, {
  DataAccessRequestAccessorsFilesFormProps,
} from './DataAccessRequestAccessorsFilesForm'
import { mockManagedACTAccessRequirement } from '../../../../mocks/mockAccessRequirements'
import { MOCK_FOLDER_ID } from '../../../../mocks/entity/mockEntity'
import { MOCK_RESEARCH_PROJECT_ID } from '../../../../mocks/dataaccess/MockResearchProject'
import { MOCK_DATA_ACCESS_REQUEST } from '../../../../mocks/dataaccess/MockDataAccessRequest'
import { MOCK_REPO_ORIGIN } from '../../../../utils/functions/getEndpoint'
import { getDataAccessRequestHandlers } from '../../../../mocks/msw/handlers/dataAccessRequestHandlers'
import { getUserProfileHandlers } from '../../../../mocks/msw/handlers/userProfileHandlers'
import { getFileHandlers } from '../../../../mocks/msw/handlers/fileHandlers'
import { getWikiHandlers } from '../../../../mocks/msw/handlers/wikiHandlers'
import { getAccessRequirementHandlers } from '../../../../mocks/msw/handlers/accessRequirementHandlers'
import {
  SynapseContextConsumer,
  SynapseContextProvider,
} from '../../../../index'
import { RestrictableObjectType } from '@sage-bionetworks/synapse-types'

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
        ...getDataAccessRequestHandlers(
          MOCK_REPO_ORIGIN,
          MOCK_DATA_ACCESS_REQUEST,
        ),
      ],
    },
  },
  argTypes: {
    isAuthenticated: {
      control: { type: 'boolean' },
      defaultValue: true,
    },
  },
  decorators: [
    (Story, args) => (
      <SynapseContextConsumer>
        {context => (
          <SynapseContextProvider
            synapseContext={{
              ...context,
              accessToken: args.isAuthenticated
                ? context.accessToken ?? 'fake token'
                : undefined,
            }}
          >
            <Story />
          </SynapseContextProvider>
        )}
      </SynapseContextConsumer>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof meta>

export const Request: Story = {
  args: {
    isAuthenticated: true,
    subjectId: MOCK_FOLDER_ID,
    subjectType: RestrictableObjectType.ENTITY,
    managedACTAccessRequirement: mockManagedACTAccessRequirement,
    researchProjectId: MOCK_RESEARCH_PROJECT_ID,
  },
}
export const Renewal: Story = {
  args: {
    isAuthenticated: true,
    subjectId: MOCK_FOLDER_ID,
    subjectType: RestrictableObjectType.ENTITY,
    managedACTAccessRequirement: mockManagedACTAccessRequirement,
    researchProjectId: MOCK_RESEARCH_PROJECT_ID,
  },
}
