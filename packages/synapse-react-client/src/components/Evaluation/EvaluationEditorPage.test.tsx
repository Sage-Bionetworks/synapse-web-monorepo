import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { act, render, screen } from '@testing-library/react'
import { EvaluationEditor as mockEvaluationEditor } from './EvaluationEditor'
import {
  EvaluationEditorPage,
  EvaluationEditorPageProps,
} from './EvaluationEditorPage'

jest.mock(
  '../../../src/components/Evaluation/EvaluationRoundEditorList',
  () => ({
    EvaluationRoundEditorList: jest.fn(props => (
      <div data-testid="EvaluationRoundEditorList" />
    )),
  }),
)

jest.mock('../../../src/components/Evaluation/EvaluationEditor', () => ({
  EvaluationEditor: jest.fn(props => <div data-testid="EvaluationEditor" />),
}))

function renderComponent(props: EvaluationEditorPageProps) {
  return render(<EvaluationEditorPage {...props} />, {
    wrapper: createWrapper(),
  })
}

describe('test EvaluationEditorPage', () => {
  let mockOnDeleteSuccess: () => void

  beforeEach(() => {
    mockOnDeleteSuccess = jest.fn()
  })

  it('Test creating new Evaluation page -- no EvaluationRoundEditorList shown', () => {
    renderComponent({
      entityId: 'syn123',
      onDeleteSuccess: mockOnDeleteSuccess,
    })

    expect(
      screen.queryByTestId('EvaluationRoundEditorList'),
    ).not.toBeInTheDocument()
    expect(
      screen.queryByTestId('FakeEvaluationRoundEditorList'),
    ).toBeInTheDocument()

    //simulate a successful "save" (i.e. creation of Evaluation)
    const fakeEvaluationId = '123456'
    const onSaveSuccessCallback = (mockEvaluationEditor as jest.Mock).mock
      .calls[0][0].onSaveSuccess
    expect(onSaveSuccessCallback).not.toBeNull()
    act(() => {
      onSaveSuccessCallback(fakeEvaluationId)
    })

    // now that the Evaluation has been "saved", we should be able to edit its Evaluation Rounds
    expect(
      screen.queryByTestId('EvaluationRoundEditorList'),
    ).toBeInTheDocument()
    expect(
      screen.queryByTestId('FakeEvaluationRoundEditorList'),
    ).not.toBeInTheDocument()
  })

  it('Test editing existing Evaluation page -- EvaluationRoundEditorList is shown', () => {
    renderComponent({
      evaluationId: '1122334455',
      onDeleteSuccess: mockOnDeleteSuccess,
    })

    expect(
      screen.queryByTestId('EvaluationRoundEditorList'),
    ).toBeInTheDocument()
    expect(
      screen.queryByTestId('FakeEvaluationRoundEditorList'),
    ).not.toBeInTheDocument()
  })
})
