import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CopyToClipboardString from './CopyToClipboardString'

describe('CopyToClipboardString', () => {
  const props = {
    value: 'some value to be copied',
    inputWidth: '500px',
  }

  it('copies to clipboard when icon is clicked', async () => {
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn().mockImplementation(() => Promise.resolve()),
      },
    })
    render(<CopyToClipboardString {...props} />)
    screen.getByText(props.value)
    const button = screen.getByRole('button')
    await userEvent.click(button)
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(props.value)
  })
})
