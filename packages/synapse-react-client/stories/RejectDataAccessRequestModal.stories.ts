import { Meta, StoryObj } from '@storybook/react'
import { getHandlersForTableQuery } from '../mocks/msw/handlers/tableQueryHandlers'
import mockRejectionReasonsTableQueryResultBundle from '../mocks/query/mockRejectionReasonsTableQueryResultBundle'
import { MOCK_REPO_ORIGIN } from '../src/lib/utils/functions/getEndpoint'
import RejectDataAccessRequestModal from '../src/lib/containers/dataaccess/RejectDataAccessRequestModal'

const meta = {
  title: 'Governance/RejectDataAccessRequestModal',
  component: RejectDataAccessRequestModal,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  parameters: {
    msw: {
      handlers: [
        ...getHandlersForTableQuery(
          mockRejectionReasonsTableQueryResultBundle,
          MOCK_REPO_ORIGIN,
        ),
      ],
    },
  },
  args: { open: true, tableId: 'syn50683097' },
}
