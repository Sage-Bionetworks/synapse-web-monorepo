import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CreateTaskCategoryPicker from './CreateTaskCategoryPicker'

describe('CreateTaskCategoryPicker', () => {
  it('calls onSelectCompute when the Compute Data card is clicked', async () => {
    const onSelectCompute = vi.fn()
    const user = userEvent.setup()
    render(
      <CreateTaskCategoryPicker
        onSelectCompute={onSelectCompute}
        onSelectCurate={vi.fn()}
      />,
    )

    await user.click(screen.getByRole('button', { name: /compute data/i }))

    expect(onSelectCompute).toHaveBeenCalled()
  })

  it('calls onSelectCurate when the Curate Data card is clicked', async () => {
    const onSelectCurate = vi.fn()
    const user = userEvent.setup()
    render(
      <CreateTaskCategoryPicker
        onSelectCompute={vi.fn()}
        onSelectCurate={onSelectCurate}
      />,
    )

    await user.click(screen.getByRole('button', { name: /curate data/i }))

    expect(onSelectCurate).toHaveBeenCalled()
  })

  it('renders the Curate Data card before the Compute Data card', () => {
    render(
      <CreateTaskCategoryPicker
        onSelectCompute={vi.fn()}
        onSelectCurate={vi.fn()}
      />,
    )

    const cards = screen.getAllByRole('button')
    expect(cards[0]).toHaveAccessibleName(/curate data/i)
    expect(cards[1]).toHaveAccessibleName(/compute data/i)
  })
})
