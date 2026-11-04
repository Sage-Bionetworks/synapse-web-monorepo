import { Meta, StoryObj } from '@storybook/react-vite'
import { AggregateQueryErrorNotice } from './AggregateQueryErrorNotice'

const meta = {
  title: 'Explore/AggregateQueryErrorNotice',
  component: AggregateQueryErrorNotice,
} satisfies Meta<typeof AggregateQueryErrorNotice>

export default meta
type Story = StoryObj<typeof meta>

export const BelowThreshold: Story = {
  args: {
    error: {
      concreteType:
        'org.sagebionetworks.repo.model.table.BelowThresholdErrorResponse',
      reason:
        'The number of records matched by this query is below the minimum threshold of 20 required to return a result.',
      errorCode: 'BELOW_THRESHOLD',
      suppressionThreshold: 20,
    },
  },
}

export const RowSuppressed: Story = {
  args: {
    error: {
      concreteType:
        'org.sagebionetworks.repo.model.table.RowSuppressionErrorResponse',
      reason:
        'Row results are withheld because the query projects a quasi-identifier column. Re-run the query without requesting row results.',
      errorCode: 'ROW_SUPPRESSED',
      rowSuppressionReasonCode: 'QID_PROJECTED',
    },
  },
}
