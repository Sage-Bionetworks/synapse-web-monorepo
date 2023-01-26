import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import * as React from 'react'
import {
  DownloadLoginModal,
  DownloadLoginModalProps,
} from '../../../lib/containers/table/table-top/DownloadLoginModal'
import { SRC_SIGN_IN_CLASS } from '../../../lib/utils/SynapseConstants'

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
    const cancelButton = screen.getByRole('button', { name: 'CANCEL' })

    await userEvent.click(cancelButton)

    expect(mockCallback).toHaveBeenCalledTimes(1)
  })
  it('Has sign in button', async () => {
    renderComponent()
    const signInButton = screen.getByRole('button', { name: 'Sign in' })
    expect(signInButton.classList.contains(SRC_SIGN_IN_CLASS)).toBe(true)
    await userEvent.click(signInButton)

    expect(mockCallback).toHaveBeenCalledTimes(1)
  })
})
