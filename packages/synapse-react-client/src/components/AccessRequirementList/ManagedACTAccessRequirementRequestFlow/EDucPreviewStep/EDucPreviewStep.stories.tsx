import { mockManagedACTAccessRequirement } from '@/mocks/accessRequirement/mockAccessRequirements'
import { MOCK_DATA_ACCESS_REQUEST } from '@/mocks/dataaccess/MockDataAccessRequest'
import { getAccessRequirementHandlers } from '@/mocks/msw/handlers/accessRequirementHandlers'
import { getDataAccessRequestHandlers } from '@/mocks/msw/handlers/dataAccessRequestHandlers'
import { getUserProfileHandlers } from '@/mocks/msw/handlers/userProfileHandlers'
import { getWikiHandlers } from '@/mocks/msw/handlers/wikiHandlers'
import { MOCK_REPO_ORIGIN } from '@/utils/functions/getEndpoint'
import { Meta, StoryObj } from '@storybook/react-vite'
import { http, HttpResponse } from 'msw'
import EDucPreviewStep from './EDucPreviewStep'

const eDucManagedACTAccessRequirement = {
  ...mockManagedACTAccessRequirement,
  eDucTemplateId: 'template-abc-123',
}

// pdf.js will attempt to load a file from Synapse; the story renders the chrome around it.
const previewHandler = http.get(
  `${MOCK_REPO_ORIGIN}/repo/v1/dataAccessRequest/${MOCK_DATA_ACCESS_REQUEST.id}/preview`,
  () =>
    HttpResponse.json(
      { fileHandleId: 'mock-preview-file-handle-123' },
      { status: 200 },
    ),
)

const meta: Meta<typeof EDucPreviewStep> = {
  title:
    'Governance/Data Access Request Flow/Managed Access Requirement/Step 2c - eDUC Preview',
  component: EDucPreviewStep,
  parameters: {
    stack: 'mock',
    chromatic: { viewports: [600, 1200] },
    msw: {
      handlers: [
        previewHandler,
        ...getUserProfileHandlers(MOCK_REPO_ORIGIN),
        ...getWikiHandlers(MOCK_REPO_ORIGIN),
        ...getAccessRequirementHandlers(MOCK_REPO_ORIGIN),
        ...getDataAccessRequestHandlers(MOCK_REPO_ORIGIN),
      ],
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Preview: Story = {
  name: 'eDUC preview step',
  args: {
    managedACTAccessRequirement: eDucManagedACTAccessRequirement,
  },
}

export const PreviewError: Story = {
  name: 'eDUC preview — error state',
  parameters: {
    msw: {
      handlers: [
        http.get(
          `${MOCK_REPO_ORIGIN}/repo/v1/dataAccessRequest/${MOCK_DATA_ACCESS_REQUEST.id}/preview`,
          () =>
            HttpResponse.json(
              { reason: 'Preview could not be generated at this time.' },
              { status: 500 },
            ),
        ),
        ...getUserProfileHandlers(MOCK_REPO_ORIGIN),
        ...getWikiHandlers(MOCK_REPO_ORIGIN),
        ...getAccessRequirementHandlers(MOCK_REPO_ORIGIN),
        ...getDataAccessRequestHandlers(MOCK_REPO_ORIGIN),
      ],
    },
  },
  args: {
    managedACTAccessRequirement: eDucManagedACTAccessRequirement,
  },
}
