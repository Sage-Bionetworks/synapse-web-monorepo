import * as React from 'react'
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'
import EvaluationIdRenderer, {
  EvaluationIdRendererProps,
} from '../../../src/lib/containers/EvaluationIdRenderer'
import { act } from '@testing-library/react'
import {
  MOCK_CONTEXT_VALUE,
  SynapseTestContext,
} from '../../../mocks/MockSynapseContext'
import { render, screen, waitFor } from '@testing-library/react'
import { mockEvaluationQueue } from '../../../mocks/entity/mockEvaluationQueue'
import { SynapseClient } from '../../../src/lib/utils'

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
      expect(SynapseClient.getEvaluation).toBeCalledWith(
        props.evaluationId,
        MOCK_CONTEXT_VALUE.accessToken,
      ),
    )
    await screen.findByText(mockEvaluationQueue.name!)
  })
})
