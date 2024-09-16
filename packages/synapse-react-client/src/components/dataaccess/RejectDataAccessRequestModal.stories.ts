import { Meta, StoryObj } from '@storybook/react'
import { getHandlersForTableQuery } from '../../mocks/msw/handlers/tableQueryHandlers'
import mockRejectionReasonsTableQueryResultBundle from '../../mocks/query/mockRejectionReasonsTableQueryResultBundle'
import { MOCK_REPO_ORIGIN } from '../../utils/functions/getEndpoint'
import RejectDataAccessRequestModal from './RejectDataAccessRequestModal'
import { fn } from '@storybook/test'
import { REJECT_SUBMISSION_CANNED_RESPONSES_TABLE } from '../../utils/SynapseConstants'
import { registerTableQueryResult } from '../../mocks/msw/handlers/tableQueryService'

const meta = {
  title: 'Governance/RejectDataAccessRequestModal',
  component: RejectDataAccessRequestModal,
  loaders: [
    () =>
      registerTableQueryResult(
        { sql: `SELECT * FROM ${REJECT_SUBMISSION_CANNED_RESPONSES_TABLE}` },
        mockRejectionReasonsTableQueryResultBundle,
      ),
  ],
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getHandlersForTableQuery(MOCK_REPO_ORIGIN)],
    },
  },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  name: 'RejectDataAccessRequestModal',
  args: { open: true, tableId: 'syn50683097', submissionId: '', onClose: fn() },
}
