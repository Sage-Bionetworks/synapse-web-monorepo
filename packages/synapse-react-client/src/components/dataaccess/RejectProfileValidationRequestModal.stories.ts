import { Meta, StoryObj } from '@storybook/react'
import { getHandlersForTableQuery } from '../../mocks/msw/handlers/tableQueryHandlers'
import mockRejectionReasonsTableQueryResultBundle from '../../mocks/query/mockRejectionReasonsTableQueryResultBundle'
import { MOCK_REPO_ORIGIN } from '../../utils/functions/getEndpoint'
import { fn } from '@storybook/test'
import { REJECT_VALIDATION_CANNED_RESPONSES_TABLE } from '../../utils/SynapseConstants'
import { registerTableQueryResult } from '../../mocks/msw/handlers/tableQueryService'
import { RejectProfileValidationRequestModal } from './RejectProfileValidationRequestModal'

const meta = {
  title: 'Governance/RejectProfileValidationRequestModal',
  component: RejectProfileValidationRequestModal,
  loaders: [
    () =>
      registerTableQueryResult(
        { sql: `SELECT * FROM ${REJECT_VALIDATION_CANNED_RESPONSES_TABLE}` },
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
  name: 'RejectProfileValidationRequestModal',
  args: {
    open: true,
    tableId: REJECT_VALIDATION_CANNED_RESPONSES_TABLE,
    verificationSubmissionId: '',
    onClose: fn(),
  },
}
