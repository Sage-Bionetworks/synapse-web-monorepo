import { Meta, StoryObj } from '@storybook/react'
import { getHandlersForTableQuery } from '../../mocks/msw/handlers/tableQueryHandlers'
import mockRejectionReasonsTableQueryResultBundle from '../../mocks/query/mockRejectionReasonsTableQueryResultBundle'
import { MOCK_REPO_ORIGIN } from '../../utils/functions/getEndpoint'
import RejectDataAccessRequestModal from './RejectDataAccessRequestModal'

const meta = {
  title: 'Governance/RejectDataAccessRequestModal',
  component: RejectDataAccessRequestModal,
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [
        ...getHandlersForTableQuery(
          mockRejectionReasonsTableQueryResultBundle,
          MOCK_REPO_ORIGIN,
        ),
      ],
    },
  },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  name: 'RejectDataAccessRequestModal',
  args: { open: true, tableId: 'syn50683097', submissionId: '' },
}
