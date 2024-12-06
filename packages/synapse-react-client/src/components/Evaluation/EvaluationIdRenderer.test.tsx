import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'
import EvaluationIdRenderer, {
  EvaluationIdRendererProps,
} from '../SynapseTable/SynapseTableCell/EvaluationIdRenderer'
import { act } from '@testing-library/react'
import {
  MOCK_CONTEXT_VALUE,
  SynapseTestContext,
} from '../../mocks/MockSynapseContext'
import { render, screen, waitFor } from '@testing-library/react'
import { mockEvaluationQueue } from '../../mocks/entity/mockEvaluationQueue'
import SynapseClient from '../../synapse-client'

jest
  .spyOn(SynapseClient, 'getEvaluation')
  .mockResolvedValue(mockEvaluationQueue)

describe('EvaluationIdRenderer: basic functionality', () => {
  const props: EvaluationIdRendererProps = {
    evaluationId: '1234',
  }

  it('renders and retrieves data without crashing', async () => {
    render(<EvaluationIdRenderer {...props} />, {
      wrapper: SynapseTestContext,
    })
    act(() => {
      mockAllIsIntersecting(true)
    })
    await waitFor(() =>
      expect(SynapseClient.getEvaluation).toHaveBeenCalledWith(
        props.evaluationId,
        MOCK_CONTEXT_VALUE.accessToken,
      ),
    )
    await screen.findByText(mockEvaluationQueue.name!)
  })
})
