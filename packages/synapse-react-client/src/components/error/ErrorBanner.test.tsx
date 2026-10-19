import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import { render, screen } from '@testing-library/react'
import { ErrorBanner, YOU_ARE_NOT_AUTHORIZED_MESSAGE } from './ErrorBanner'

describe('ErrorBanner', () => {
  it('shows a notice, not the not-authorized message, when row results were withheld from an aggregate-only caller', () => {
    const error = new SynapseClientError(
      403,
      'Row results are withheld because the query projects a quasi-identifier column.',
      'https://repo-prod.prod.sagebase.org/repo/v1/entity/syn1/table/query/async/get/1',
      {
        concreteType:
          'org.sagebionetworks.repo.model.table.RowSuppressionErrorResponse',
        reason:
          'Row results are withheld because the query projects a quasi-identifier column.',
        errorCode: 'ROW_SUPPRESSED',
        rowSuppressionReasonCode: 'QID_PROJECTED',
      },
    )

    render(<ErrorBanner error={error} />, { wrapper: createWrapper() })

    expect(screen.getByRole('status')).toHaveTextContent(
      'Individual records are not available',
    )
    expect(
      screen.queryByText(YOU_ARE_NOT_AUTHORIZED_MESSAGE),
    ).not.toBeInTheDocument()
  })
})
