import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { EvaluationRoundLimitInput } from '../input_models/models'
import { EvaluationRoundLimitOptionsProps } from './EvaluationRoundLimitOptions'
import { EvaluationRoundLimitOptionsList } from './EvaluationRoundLimitOptionsList'

jest.mock(
  '../../../../src/components/Evaluation/round_limits/EvaluationRoundLimitOptions',
  () => ({
    EvaluationRoundLimitOptions: jest.fn(
      (props: EvaluationRoundLimitOptionsProps) => {
        return (
          <div data-testid="MockEvaluationRoundLimitOptions">
            <input
              onChange={e => {
                // For this mock, we'll just parse a passed object.
                props.onChange(JSON.parse(e.target.value))
              }}
            ></input>
          </div>
        )
      },
    ),
    LIMIT_TYPE_DISPLAY_NAME: jest.requireActual(
      '../../../../src/components/Evaluation/round_limits/EvaluationRoundLimitOptions',
    ).LIMIT_TYPE_DISPLAY_NAME,
  }),
)

describe('test EvaluationRoundLimitOptionsList', () => {
  let mockHandleChange: jest.Mock<any, any>
  let mockHandleDeleteLimit: jest.Mock<any, any>
  let mockOnAddNewLimit: jest.Mock<any, any>

  // any of the mockHandle__ functions will "generate" this function
  let mockGeneratedFunction: jest.Mock<any, any>

  let limitInputs: EvaluationRoundLimitInput[]

  beforeEach(() => {
    mockGeneratedFunction = jest.fn()
    mockHandleChange = jest.fn(() => mockGeneratedFunction)
    mockHandleDeleteLimit = jest.fn(() => mockGeneratedFunction)
    mockOnAddNewLimit = jest.fn()

    limitInputs = [
      { type: 'MONTHLY', maxSubmissionString: '42' },
      { type: 'DAILY', maxSubmissionString: '86' },
    ]
  })

  function renderComponent(limitInputs: EvaluationRoundLimitInput[]) {
    return render(
      <EvaluationRoundLimitOptionsList
        limitInputs={limitInputs}
        onAddNewLimit={mockOnAddNewLimit}
        handleDeleteLimit={mockHandleDeleteLimit}
        handleChange={mockHandleChange}
      />,
    )
  }

  it('test "add" Button only created on last value in list', () => {
    const { container } = renderComponent(limitInputs)
    const gridDiv = container.querySelector('.advanced-limits-grid')!

    // since we use CSS grid system to style this, all elements are held in the same parent
    // 2 elements for each Evaluation Round (EvaluationRoundLimitOptions and "remove" button)
    // and a single "add" button for the last element
    expect(gridDiv.children).toHaveLength(5)

    expect(screen.getAllByRole('button', { name: 'Remove' })).toHaveLength(2)
    screen.getByRole('button', { name: 'Add' })
  })

  it('test "add" Button not created when all limit types are used', () => {
    //add another limit to the list
    limitInputs.push({ type: 'WEEKLY', maxSubmissionString: '84' })
    const { container } = renderComponent(limitInputs)
    const gridDiv = container.querySelector('.advanced-limits-grid')!

    // since we use CSS grid system to style this, all elements are held in the same parent
    // 2 elements for each Evaluation Round (EvaluationRoundLimitOptions and "remove" button)
    // the "add" button should not exist in this case
    expect(gridDiv.children).toHaveLength(6)

    expect(
      screen.queryByRole('button', { name: 'Add' }),
    ).not.toBeInTheDocument()
  })

  it('test "remove" Button click', async () => {
    const { container } = renderComponent(limitInputs)
    const gridDiv = container.querySelector('.advanced-limits-grid')!

    // since we use CSS grid system to style this, all elements are held in the same parent
    // 2 elements for each Evaluation Round (EvaluationRoundLimitOptions and "remove" button)
    // and a single "add" button for the last element
    expect(gridDiv.children).toHaveLength(5)

    const removeButtons = screen.getAllByRole('button', { name: 'Remove' })

    expect(removeButtons).toHaveLength(2)
    await userEvent.click(removeButtons[0])

    expect(mockHandleDeleteLimit).toHaveBeenCalledWith(0)
    expect(mockGeneratedFunction).toHaveBeenCalled()
  })

  it('test "add" Button click', async () => {
    const { container } = renderComponent(limitInputs)
    const gridDiv = container.querySelector('.advanced-limits-grid')!

    // since we use CSS grid system to style this, all elements are held in the same parent
    // 2 elements for each Evaluation Round (EvaluationRoundLimitOptions and "remove" button)
    // and a single "add" button for the last element
    expect(gridDiv.children).toHaveLength(5)

    await userEvent.click(screen.getByRole('button', { name: 'Add' }))

    //a unused limit type was chosen and added
    expect(mockOnAddNewLimit).toHaveBeenCalledWith({
      type: 'WEEKLY',
      maxSubmissionString: '',
    })
    //nothing was generated from the mockOnAddNewLimit
    expect(mockGeneratedFunction).not.toHaveBeenCalled()
  })

  it('test EvaluationRoundLimitOptions change', async () => {
    const { container } = renderComponent(limitInputs)
    const gridDiv = container.querySelector('.advanced-limits-grid')!

    // since we use CSS grid system to style this, all elements are held in the same parent
    // 2 elements for each Evaluation Round (EvaluationRoundLimitOptions and "remove" button)
    // and a single "add" button for the last element
    expect(gridDiv.children).toHaveLength(5)

    const changedLimit = { type: 'DAILY', maxSubmissionString: '789' }

    const roundLimitOptions = screen.getAllByTestId(
      'MockEvaluationRoundLimitOptions',
    )
    expect(roundLimitOptions).toHaveLength(2)

    const input = screen.getAllByRole('textbox')[1]
    await userEvent.click(input)
    await userEvent.paste(JSON.stringify(changedLimit))

    //a unused limit type was chosen and added
    expect(mockHandleChange).toHaveBeenCalledWith(1)
    //nothing was generated from the mockOnAddNewLimit
    expect(mockGeneratedFunction).toHaveBeenCalledWith(changedLimit)
  })
})
