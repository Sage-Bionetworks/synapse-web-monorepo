import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { WidgetProps } from '@rjsf/utils'
import { DateWidget } from './DateWidget'

function renderWidget(props: Partial<WidgetProps> = {}) {
  const onChange = vi.fn()
  render(
    <DateWidget
      {...({ id: 'root_project_end_date', onChange, ...props } as WidgetProps)}
    />,
  )
  return { onChange }
}

describe('DateWidget', () => {
  it('renders a single date-only input with no time-of-day text', () => {
    renderWidget({ value: '2027-03-05T00:00:00.000Z' })

    // A time picker would render "AM"/"PM" text and a colon-separated time in its value.
    expect(screen.queryByText(/\bAM\b|\bPM\b/)).not.toBeInTheDocument()
    const input = screen.getByRole('textbox') as HTMLInputElement
    expect(input.value).not.toContain(':')
  })

  it('reports the selected day as a UTC-midnight ISO date-time string', async () => {
    const user = userEvent.setup()
    const { onChange } = renderWidget({ value: null })

    const input = screen.getByRole('textbox')
    await user.click(input)
    await user.paste('03/05/2027')

    expect(onChange).toHaveBeenLastCalledWith('2027-03-05T00:00:00.000Z')
  })

  it('clears the value when the input is emptied', async () => {
    const user = userEvent.setup()
    const { onChange } = renderWidget({ value: '2027-03-05T00:00:00.000Z' })

    const input = screen.getByRole('textbox')
    await user.clear(input)

    expect(onChange).toHaveBeenLastCalledWith(null)
  })
})
