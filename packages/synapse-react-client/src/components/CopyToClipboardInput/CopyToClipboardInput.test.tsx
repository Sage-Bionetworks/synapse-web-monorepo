import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CopyToClipboardInput from './CopyToClipboardInput'

describe('CopyToClipboardInput', () => {
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
    render(<CopyToClipboardInput {...props} />)
    const button = screen.getByRole('button')
    await userEvent.click(button)
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(
      'some value to be copied',
    )
  })

  it('copies to clipboard when input field is clicked', async () => {
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn().mockImplementation(() => Promise.resolve()),
      },
    })
    render(<CopyToClipboardInput {...props} />)
    const inputField = screen.getByRole('textbox')
    await userEvent.click(inputField)
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(
      'some value to be copied',
    )
  })
})
