import { CANCEL_BUTTON_TEXT } from '@/components/ConfirmationDialog/ConfirmationDialog'
import { mockSchemaBinding } from '@/mocks/mockSchema'
import {
  dispatchEntry,
  generateAsyncJobHandlers,
} from '@/mocks/msw/handlers/asyncJobHandlers'
import { ENTITY_ID, ENTITY_SCHEMA_BINDING } from '@/utils/APIConstants'
import { MOCK_REPO_ORIGIN } from '@/utils/functions/getEndpoint'
import { Box } from '@mui/material'
import { GridSession, RecordSet } from '@sage-bionetworks/synapse-client'
import { Meta, StoryObj } from '@storybook/react-vite'
import { http, HttpResponse } from 'msw'
import { userEvent, within } from 'storybook/test'
import GridSourceUpdatedNotification from './GridSourceUpdatedNotification'

const SOURCE_ENTITY_ID = 'syn123'

const mockRecordSet: RecordSet = {
  concreteType: 'org.sagebionetworks.repo.model.RecordSet',
  id: SOURCE_ENTITY_ID,
  name: 'Biospecimen Metadata',
  versionNumber: 4,
}

const gridSession: GridSession = {
  sessionId: 'grid-session-1',
  sourceEntityId: SOURCE_ENTITY_ID,
  // Older than the source entity's version, so the source reads as updated
  sourceEntityVersionNumber: 3,
  gridJsonSchema$Id: mockSchemaBinding.jsonSchemaVersionInfo.$id,
}

const handlers = {
  sourceEntity: [
    http.get(`${MOCK_REPO_ORIGIN}${ENTITY_ID(SOURCE_ENTITY_ID)}`, () =>
      HttpResponse.json(mockRecordSet, { status: 200 }),
    ),
  ],
  schemaBinding: [
    http.get(
      `${MOCK_REPO_ORIGIN}${ENTITY_SCHEMA_BINDING(SOURCE_ENTITY_ID)}`,
      () => HttpResponse.json(mockSchemaBinding, { status: 200 }),
    ),
  ],
  synchronize: generateAsyncJobHandlers(
    dispatchEntry(
      'org.sagebionetworks.repo.model.grid.SynchronizeGridRequest',
      () => ({
        concreteType:
          'org.sagebionetworks.repo.model.grid.SynchronizeGridResponse',
        errorMessages: [],
      }),
    ),
    {
      asyncTypeServicePaths: {
        requestPath: '/repo/v1/grid/synchronize/async/start',
        responsePath: token => `/repo/v1/grid/synchronize/async/get/${token}`,
      },
      backendOrigin: MOCK_REPO_ORIGIN,
    },
  ),
}

const meta = {
  title: 'Components/DataGrid/GridSourceUpdatedNotification',
  component: GridSourceUpdatedNotification,
  args: {
    gridSession,
  },
  parameters: {
    stack: 'mock',
    msw: { handlers },
  },
  decorators: [
    // Stands in for the grid the banner anchors itself to
    Story => (
      <Box
        sx={{
          position: 'relative',
          height: '320px',
          border: '1px solid',
          borderColor: 'grey.400',
        }}
      >
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof GridSourceUpdatedNotification>
export default meta

type Story = StoryObj<typeof meta>

/** The prompt shown when the source has been updated since the session was created. */
export const Dialog: Story = {}

/** The persistent reminder shown after the user declines the dialog. */
export const Banner: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.ownerDocument.body)
    await userEvent.click(
      await canvas.findByRole('button', { name: CANCEL_BUTTON_TEXT }),
    )
  },
}

/** Nothing renders when the source has not changed since the session was created. */
export const SourceUpToDate: Story = {
  args: {
    gridSession: {
      ...gridSession,
      sourceEntityVersionNumber: mockRecordSet.versionNumber,
    },
  },
}
