import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import * as React from 'react'
import {
  CONFIRM_BUTTON_TEXT,
  DownloadLoginModal,
  DownloadLoginModalProps,
} from '../../../src/lib/containers/table/table-top/DownloadLoginModal'
import { SRC_SIGN_IN_CLASS } from '../../../src/lib/utils/SynapseConstants'
import { CANCEL_BUTTON_TEXT } from '../../../src/lib/containers/ConfirmationDialog'

const mockCallback = jest.fn()

function createTestProps(
  overrides?: DownloadLoginModalProps,
): DownloadLoginModalProps {
  return {
    showModal: true,
    onHide: mockCallback,
    ...overrides,
  }
}

let props: DownloadLoginModalProps

function renderComponent(overrides?: DownloadLoginModalProps) {
  props = createTestProps(overrides)
  return render(<DownloadLoginModal {...props} />)
}

describe('DownloadLoginModal tests', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('Has cancel button', async () => {
    renderComponent()
    const cancelButton = screen.getByRole('button', {
      name: CANCEL_BUTTON_TEXT,
    })

    await userEvent.click(cancelButton)

    expect(mockCallback).toHaveBeenCalledTimes(1)
  })
  it('Has sign in button', async () => {
    renderComponent()
    const signInButton = screen.getByRole('button', {
      name: CONFIRM_BUTTON_TEXT,
    })
    expect(signInButton.classList.contains(SRC_SIGN_IN_CLASS)).toBe(true)
    await userEvent.click(signInButton)

    expect(mockCallback).toHaveBeenCalledTimes(1)
  })
})
