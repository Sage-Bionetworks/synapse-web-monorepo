import React from 'react'
import { render, screen } from '@testing-library/react'
import SpinnerButton, {
  SpinnerButtonProps,
} from '../../../src/components/widgets/SpinnerButton'
import { SRC_SIGN_IN_CLASS } from '../../../src/utils/SynapseConstants'
import {
  ApplicationSessionManager,
  useApplicationSessionContext,
} from '../../../src/utils'
import { MemoryRouter } from 'react-router-dom'
import SynapseClient from '../../../src/synapse-client'
import { MOCK_ACCESS_TOKEN } from '../../../mocks/MockSynapseContext'

const defaultProps: SpinnerButtonProps = {
  children: 'Submit',
  showSpinner: false,
}

function renderComponent(showSpinner: boolean = false) {
  render(
    <SpinnerButton showSpinner={showSpinner}>
      {defaultProps.children}
    </SpinnerButton>,
  )
}

describe('SpinnerButton tests', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('Renders as a button with correct properties', async () => {
    renderComponent()

    const btn = screen.getByTestId('SpinnerButton')
    expect(btn).toHaveTextContent(defaultProps.children as string)
    expect(btn).not.toHaveAttribute('disabled')
  })

  it('Button does not have spinner span when ShowSpinner is false', async () => {
    renderComponent(false)
    const spinner = () => {
      screen.getByTestId('SpinnerButton-spinner')
    }
    expect(spinner).toThrow(Error)
  })

  it('Button is disabled when ShowSpinner is true', async () => {
    renderComponent(true)

    const btn = screen.getByRole<HTMLButtonElement>('button')
    expect(btn).toHaveAttribute('disabled')
  })

  it('Button has spinner span when ShowSpinner is true', async () => {
    renderComponent(true)
    const spinner = screen.getByTestId('SpinnerButton-spinner')
    expect(spinner).toHaveAttribute('class', 'spinner')
  })
})
