import { mockEvaluationQueue } from '@/mocks/entity/mockEvaluationQueue'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AvailableEvaluationQueueList, {
  AvailableEvaluationQueueListProps,
} from './AvailableEvaluationQueueList'

const onChangeSelectedEvaluation = vi.fn()
const secondEvaluation = {
  ...mockEvaluationQueue,
  id: '12345',
  name: 'another evaluation queue',
}
const eightEvaluationQueues: any[] = Array.from({ length: 8 }, (_, index) => ({
  ...mockEvaluationQueue,
  id: `${index + 1}`,
  name: `Evaluation Queue ${index + 1}`,
}))

async function chooseAutocompleteOption(
  el: HTMLElement,
  option: string,
  user: ReturnType<(typeof userEvent)['setup']>,
) {
  await user.clear(el)
  await user.type(el, option)
  await user.click(screen.getByRole('option', { name: option }))
}

const defaultProps: AvailableEvaluationQueueListProps = {
  evaluations: [],
  isSelectable: true,
  onChangeSelectedEvaluation: onChangeSelectedEvaluation,
}

function renderComponent(props: AvailableEvaluationQueueListProps) {
  return render(<AvailableEvaluationQueueList {...props} />, {
    wrapper: createWrapper(),
  })
}

function setUp(props: AvailableEvaluationQueueListProps) {
  const user = userEvent.setup()
  const component = renderComponent(props)
  const selectInput = screen.queryByLabelText('Selected Evaluation Queue')
  const showStaticListButton = screen.queryByRole('button', {
    name: /all available evaluation queues/i,
  })
  const staticListHeading = screen.queryByText('Available Evaluation Queues:')
  return {
    component,
    user,
    selectInput,
    showStaticListButton,
    staticListHeading,
  }
}

describe('AvailableEvaluationQueueList', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('handles 0 available evaluations', () => {
    const { selectInput, showStaticListButton } = setUp(defaultProps)

    screen.getByText('No evaluations found')
    expect(selectInput).toBeNull()
    expect(showStaticListButton).toBeNull()
  })

  it('handles 1 available evaluation', () => {
    const { selectInput, staticListHeading, showStaticListButton } = setUp({
      ...defaultProps,
      evaluations: [mockEvaluationQueue],
    })

    screen.getByText(mockEvaluationQueue.name!)
    expect(selectInput).toBeNull()
    expect(staticListHeading).toBeNull()
    expect(showStaticListButton).toBeNull()

    expect(onChangeSelectedEvaluation).toHaveBeenCalledTimes(1)
    expect(onChangeSelectedEvaluation).toHaveBeenCalledWith(mockEvaluationQueue)
  })

  it('handles 1 available evaluation that is not selectable', () => {
    const { selectInput, staticListHeading, showStaticListButton } = setUp({
      ...defaultProps,
      evaluations: [mockEvaluationQueue],
      isSelectable: false,
    })

    screen.getByText(mockEvaluationQueue.name!)
    expect(staticListHeading).toBeNull()
    expect(showStaticListButton).toBeNull()
    expect(selectInput).toBeNull()
    expect(onChangeSelectedEvaluation).not.toHaveBeenCalled()
  })

  it('displays collapsed list for <8 selectable available evaluations', async () => {
    const { selectInput, staticListHeading, showStaticListButton, user } =
      setUp({
        ...defaultProps,
        evaluations: [mockEvaluationQueue, secondEvaluation],
      })

    expect(selectInput).not.toBeNull()
    expect(staticListHeading).not.toBeNull()
    expect(showStaticListButton).not.toBeNull()
    expect(showStaticListButton?.textContent).toContain('Show')
    expect(staticListHeading).not.toBeVisible()

    await user.click(showStaticListButton!)

    expect(showStaticListButton?.textContent).toContain('Hide')
    expect(staticListHeading).toBeVisible()
    expect(screen.getByText(mockEvaluationQueue.name!)).toBeVisible()
    expect(screen.getByText(secondEvaluation.name)).toBeVisible()

    await chooseAutocompleteOption(selectInput!, secondEvaluation.name, user)

    expect(selectInput).toHaveValue(secondEvaluation.name)
    expect(onChangeSelectedEvaluation).toHaveBeenCalledTimes(1)
    expect(onChangeSelectedEvaluation).toHaveBeenCalledWith(secondEvaluation)
  })

  it('displays static list for <8 available evaluations that are not selectable', () => {
    const { selectInput, staticListHeading, showStaticListButton } = setUp({
      ...defaultProps,
      evaluations: [mockEvaluationQueue, secondEvaluation],
      isSelectable: false,
    })

    expect(selectInput).toBeNull()
    expect(staticListHeading).toBeVisible()
    expect(showStaticListButton).toBeNull()
    expect(screen.getByText(mockEvaluationQueue.name!)).toBeVisible()
    expect(screen.getByText(secondEvaluation.name)).toBeVisible()

    expect(onChangeSelectedEvaluation).not.toHaveBeenCalled()
  })

  it('displays collapsed list for >8 selectable available evaluations', async () => {
    const { selectInput, showStaticListButton, staticListHeading, user } =
      setUp({
        ...defaultProps,
        evaluations: eightEvaluationQueues,
      })

    expect(selectInput).not.toBeNull()
    expect(showStaticListButton).not.toBeNull()
    expect(showStaticListButton?.textContent).toContain('Show')
    expect(staticListHeading).not.toBeVisible()

    await user.click(showStaticListButton!)

    expect(showStaticListButton?.textContent).toContain('Hide')
    expect(staticListHeading).toBeVisible()
    eightEvaluationQueues.forEach((queue, index) => {
      expect(screen.getByText(queue.name)).toBeVisible()
    })

    await chooseAutocompleteOption(
      selectInput!,
      eightEvaluationQueues[1].name,
      user,
    )

    expect(selectInput).toHaveValue(eightEvaluationQueues[1].name)
    expect(onChangeSelectedEvaluation).toHaveBeenCalledTimes(1)
    expect(onChangeSelectedEvaluation).toHaveBeenCalledWith(
      expect.objectContaining({
        name: eightEvaluationQueues[1].name,
      }),
    )
  })

  it('displays collapsed list for >8 available evaluations that are not selectable', async () => {
    const { selectInput, showStaticListButton, staticListHeading, user } =
      setUp({
        ...defaultProps,
        evaluations: eightEvaluationQueues,
        isSelectable: false,
      })

    expect(selectInput).toBeNull()
    expect(showStaticListButton).not.toBeNull()
    expect(showStaticListButton?.textContent).toContain('Show')
    expect(staticListHeading).not.toBeVisible()

    await user.click(showStaticListButton!)

    expect(showStaticListButton?.textContent).toContain('Hide')
    expect(staticListHeading).toBeVisible()
    eightEvaluationQueues.forEach((queue, index) => {
      expect(screen.getByText(queue.name)).toBeVisible()
    })

    expect(onChangeSelectedEvaluation).not.toHaveBeenCalled()
  })
})
