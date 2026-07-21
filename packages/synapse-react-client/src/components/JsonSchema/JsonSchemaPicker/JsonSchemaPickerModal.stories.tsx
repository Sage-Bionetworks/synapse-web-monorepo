import { getJsonSchemaListingHandlers } from '@/mocks/msw/handlers/jsonSchemaListingHandlers'
import {
  MOCK_ORGANIZATION_SAGEBIONETWORKS_NAME,
  mockJsonSchemaVersionsPageTwoForMultiVersionSchema,
} from '@/mocks/jsonschema/mockJsonSchemaListing'
import { MOCK_REPO_ORIGIN } from '@/utils/functions/getEndpoint'
import { Meta, StoryObj } from '@storybook/react-vite'
import { http, HttpResponse } from 'msw'
import { JsonSchemaPickerModal } from './JsonSchemaPickerModal'
import { VersionSelectionType } from './VersionSelectionType'

const meta = {
  title: 'Synapse/JsonSchema/JsonSchemaPickerModal',
  component: JsonSchemaPickerModal,
  args: {
    open: true,
    onConfirm: () => {},
    onCancel: () => {},
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: getJsonSchemaListingHandlers(MOCK_REPO_ORIGIN),
    },
  },
} satisfies Meta<typeof JsonSchemaPickerModal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const EmptyOrganizationPlaceholder: Story = {
  name: 'No Organization Selected (Placeholder)',
  args: {},
}

export const Loading: Story = {
  parameters: {
    msw: {
      handlers: [
        http.post(
          `${MOCK_REPO_ORIGIN}/repo/v1/schema/organization/list`,
          () => new Promise<never>(() => {}),
        ),
      ],
    },
  },
}

export const ErrorState: Story = {
  parameters: {
    msw: {
      handlers: [
        http.post(`${MOCK_REPO_ORIGIN}/repo/v1/schema/organization/list`, () =>
          HttpResponse.json(
            { reason: 'Unable to load organizations' },
            { status: 500 },
          ),
        ),
      ],
    },
  },
}

export const WithDefaultOrganization: Story = {
  args: {
    defaultOrganizationName: MOCK_ORGANIZATION_SAGEBIONETWORKS_NAME,
  },
}

export const RequiredVersion: Story = {
  name: 'Version Selection: REQUIRED',
  args: {
    defaultOrganizationName: MOCK_ORGANIZATION_SAGEBIONETWORKS_NAME,
    versionSelectionType: VersionSelectionType.REQUIRED,
  },
}

export const LatestAllowedVersion: Story = {
  name: 'Version Selection: LATEST_ALLOWED',
  args: {
    defaultOrganizationName: MOCK_ORGANIZATION_SAGEBIONETWORKS_NAME,
    versionSelectionType: VersionSelectionType.LATEST_ALLOWED,
  },
}

export const WithInitialSelected: Story = {
  name: 'With Initial Selection (e.g. Editing an Existing Binding)',
  args: {
    defaultOrganizationName: MOCK_ORGANIZATION_SAGEBIONETWORKS_NAME,
    versionSelectionType: VersionSelectionType.REQUIRED,
    initialSelected: {
      // Preselects the MultiVersionSchema row, with its 2.0.0 version already chosen.
      versionInfo: mockJsonSchemaVersionsPageTwoForMultiVersionSchema.page![0],
    },
  },
}
