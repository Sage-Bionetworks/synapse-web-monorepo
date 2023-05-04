import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import DataAccessRequestAccessorsFilesForm from '../../src/lib/containers/AccessRequirementList/ManagedACTAccessRequirementRequestFlow/DataAccessRequestAccessorsFilesForm'
import { mockManagedACTAccessRequirement } from '../../mocks/mockAccessRequirements'
import { MOCK_FOLDER_ID } from '../../mocks/entity/mockEntity'
import { MOCK_RESEARCH_PROJECT_ID } from '../../mocks/dataaccess/MockResearchProject'
import {
  MOCK_DATA_ACCESS_RENEWAL,
  MOCK_DATA_ACCESS_REQUEST,
} from '../../mocks/dataaccess/MockDataAccessRequest'
import { MOCK_REPO_ORIGIN } from '../../src/lib/utils/functions/getEndpoint'
import { getDataAccessRequestHandlers } from '../../mocks/msw/handlers/dataAccessRequestHandlers'
import { getUserProfileHandlers } from '../../mocks/msw/handlers/userProfileHandlers'
import { getFileHandlers } from '../../mocks/msw/handlers/fileHandlers'

const meta: Meta = {
  title:
    'Governance/Data Access Request Flow/Managed Access Requirement/Step 2 - Accessors and Documentation',
  component: DataAccessRequestAccessorsFilesForm,
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Request: Story = {
  args: {
    entityId: MOCK_FOLDER_ID,
    managedACTAccessRequirement: mockManagedACTAccessRequirement,
    researchProjectId: MOCK_RESEARCH_PROJECT_ID,
  },
  parameters: {
    msw: {
      handlers: [
        ...getUserProfileHandlers(MOCK_REPO_ORIGIN),
        ...getFileHandlers(MOCK_REPO_ORIGIN),
        ...getDataAccessRequestHandlers(
          MOCK_REPO_ORIGIN,
          MOCK_DATA_ACCESS_REQUEST,
        ),
      ],
    },
  },
}
export const Renewal: Story = {
  args: {
    entityId: MOCK_FOLDER_ID,
    managedACTAccessRequirement: mockManagedACTAccessRequirement,
    researchProjectId: MOCK_RESEARCH_PROJECT_ID,
  },
  parameters: {
    msw: {
      handlers: [
        ...getUserProfileHandlers(MOCK_REPO_ORIGIN),
        ...getFileHandlers(MOCK_REPO_ORIGIN),
        ...getDataAccessRequestHandlers(
          MOCK_REPO_ORIGIN,
          MOCK_DATA_ACCESS_RENEWAL,
        ),
      ],
    },
  },
}
