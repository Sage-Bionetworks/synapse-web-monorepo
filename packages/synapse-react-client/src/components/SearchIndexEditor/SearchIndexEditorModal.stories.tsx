import { getHandlersForStorybook } from '@/mocks/msw/handlers'
import { MOCK_SEARCH_INDEX_ENTITY_ID } from '@/mocks/mockSearchQueryData'
import { ENTITY_ID } from '@/utils/APIConstants'
import {
  MOCK_PORTAL_ORIGIN,
  MOCK_REPO_ORIGIN,
} from '@/utils/functions/getEndpoint'
import { Meta, StoryObj } from '@storybook/react-vite'
import { http, HttpResponse } from 'msw'
import { fn } from 'storybook/test'
import SearchIndexEditorModal from './SearchIndexEditorModal'

const meta = {
  title: 'Synapse/Search Index/SearchIndexEditorModal',
  component: SearchIndexEditorModal,
  parameters: {
    stack: 'mock',
    msw: {
      handlers: {
        ...getHandlersForStorybook(MOCK_REPO_ORIGIN, MOCK_PORTAL_ORIGIN),
        entityUpdate: [
          http.put(
            `${MOCK_REPO_ORIGIN}${ENTITY_ID(':entityId')}`,
            async ({ request }) =>
              HttpResponse.json(await request.json(), { status: 200 }),
          ),
        ],
      },
    },
  },
  args: {
    open: true,
    entityId: MOCK_SEARCH_INDEX_ENTITY_ID,
    onComplete: fn(),
    onCancel: fn(),
  },
} satisfies Meta<typeof SearchIndexEditorModal>
export default meta
type Story = StoryObj<typeof meta>

export const Edit: Story = {}
