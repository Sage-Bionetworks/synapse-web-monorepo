import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { WidgetProps } from '@rjsf/utils'
import { DateWidget } from './DateWidget'

const FIELD_ID = 'root_project_end_date'
const FIELD_LABEL = 'Project end date'

function renderWidget(props: Partial<WidgetProps> = {}) {
  const onChange = vi.fn()
  render(
    <DateWidget
      {...({
        id: FIELD_ID,
        label: FIELD_LABEL,
        onChange,
        onBlur: vi.fn(),
        options: {},
        ...props,
      } as WidgetProps)}
    />,
  )
  return { onChange }
}

function getField() {
  return screen.getByRole('group', { name: FIELD_LABEL })
}

describe('DateWidget', () => {
  it('renders a single date-only field with no time-of-day sections', () => {
    renderWidget({ value: '2027-03-05T00:00:00.000Z' })

    const sections = within(getField()).getAllByRole('spinbutton')
    expect(sections.map(section => section.getAttribute('aria-label'))).toEqual(
      ['Month', 'Day', 'Year'],
    )
    // The hidden input carries RJSF's field id, so the form's `<label for>` applies
    expect(document.getElementById(FIELD_ID)).toHaveValue('03/05/2027')
  })

  it('reports the selected day as a UTC-midnight ISO date-time string', async () => {
    const user = userEvent.setup()
    const { onChange } = renderWidget({ value: null })

    await user.click(
      within(getField()).getByRole('spinbutton', { name: 'Month' }),
    )
    // Pasting into the field while all of its sections are selected fills every section
    await user.keyboard('{Control>}a{/Control}')
    await user.paste('03/05/2027')

    expect(onChange).toHaveBeenLastCalledWith('2027-03-05T00:00:00.000Z')
  })

  it('clears the value when the field is emptied', async () => {
    const user = userEvent.setup()
    const { onChange } = renderWidget({ value: '2027-03-05T00:00:00.000Z' })

    await user.click(
      within(getField()).getByRole('spinbutton', { name: 'Month' }),
    )
    await user.keyboard('{Control>}a{/Control}{Backspace}')

    expect(onChange).toHaveBeenLastCalledWith(null)
  })

  it('disables picking a day before the minDate option', async () => {
    const user = userEvent.setup()
    renderWidget({
      value: '2027-03-10T00:00:00.000Z',
      options: { minDate: '2027-03-05' },
    })

    await user.click(screen.getByRole('button', { name: /choose date/i }))

    expect(await screen.findByRole('gridcell', { name: '4' })).toBeDisabled()
    expect(screen.getByRole('gridcell', { name: '5' })).toBeEnabled()
  })
})
