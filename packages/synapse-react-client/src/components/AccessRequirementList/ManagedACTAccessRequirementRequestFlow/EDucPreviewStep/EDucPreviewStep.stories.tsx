import { mockManagedACTAccessRequirement } from '@/mocks/accessRequirement/mockAccessRequirements'
import { MOCK_DATA_ACCESS_REQUEST } from '@/mocks/dataaccess/MockDataAccessRequest'
import { getAccessRequirementHandlers } from '@/mocks/msw/handlers/accessRequirementHandlers'
import { getDataAccessRequestHandlers } from '@/mocks/msw/handlers/dataAccessRequestHandlers'
import { getUserProfileHandlers } from '@/mocks/msw/handlers/userProfileHandlers'
import { getWikiHandlers } from '@/mocks/msw/handlers/wikiHandlers'
import {
  DATA_ACCESS_REQUEST_PREVIEW,
  DATA_ACCESS_REQUEST_SIGNATURE_QUOTA,
} from '@/utils/APIConstants'
import { MOCK_REPO_ORIGIN } from '@/utils/functions/getEndpoint'
import { Meta, StoryObj } from '@storybook/react-vite'
import { http, HttpResponse } from 'msw'
import EDucPreviewStep from './EDucPreviewStep'

const eDucManagedACTAccessRequirement = {
  ...mockManagedACTAccessRequirement,
  eDucTemplateId: 'template-abc-123',
}

// The story renders the chrome around the iframe; the iframe src is overridden via previewSrcOverride.
const previewHandler = http.get(
  `${MOCK_REPO_ORIGIN}${DATA_ACCESS_REQUEST_PREVIEW(MOCK_DATA_ACCESS_REQUEST.id)}`,
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
    // The real portal servlet is not served in Storybook, so point the iframe at a public
    // sample PDF that the browser can render directly.
    previewSrcOverride:
      'https://www.rd.usda.gov/sites/default/files/pdf-sample_0.pdf',
  },
}

export const PreviewError: Story = {
  name: 'eDUC preview — error state',
  parameters: {
    msw: {
      handlers: [
        http.get(
          `${MOCK_REPO_ORIGIN}${DATA_ACCESS_REQUEST_PREVIEW(MOCK_DATA_ACCESS_REQUEST.id)}`,
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

export const PreviewAtQuota: Story = {
  name: 'eDUC preview — user at signature quota',
  parameters: {
    msw: {
      handlers: [
        previewHandler,
        http.get(
          `${MOCK_REPO_ORIGIN}${DATA_ACCESS_REQUEST_SIGNATURE_QUOTA(MOCK_DATA_ACCESS_REQUEST.id)}`,
          () => HttpResponse.json({ quota: 3, remaining: 0 }, { status: 200 }),
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
    previewSrcOverride:
      'https://www.rd.usda.gov/sites/default/files/pdf-sample_0.pdf',
  },
}
