import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { WidgetProps } from '@rjsf/utils'
import { PhoneWidget } from './PhoneWidget'

function renderWidget(props: Partial<WidgetProps> = {}) {
  const onChange = vi.fn()
  render(
    <PhoneWidget
      {...({
        id: 'root_phone',
        onChange,
        onBlur: vi.fn(),
        onFocus: vi.fn(),
        ...props,
      } as WidgetProps)}
    />,
  )
  return { onChange }
}

describe('PhoneWidget', () => {
  it('drops non-numeric characters as the user types', async () => {
    const user = userEvent.setup()
    const { onChange } = renderWidget({ value: '' })

    await user.type(screen.getByRole('textbox'), 'abc2025550123')

    const emitted = onChange.mock.calls.map(c => c[0]).filter(Boolean)
    expect(emitted.length).toBeGreaterThan(0)
    for (const v of emitted) {
      expect(v).toMatch(/^\+[\d ]*$/)
    }
  })

  it('lists countries with calling codes, preferred countries first', async () => {
    const user = userEvent.setup()
    renderWidget({ value: '' })

    await user.click(screen.getByRole('button'))

    const uk = await screen.findByText('United Kingdom')
    const us = screen.getByText('United States')
    expect(uk.closest('li')).toHaveTextContent('+44')
    expect(us.closest('li')).toHaveTextContent('+1')
    expect(
      uk.compareDocumentPosition(us) & Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy()
  })
})
