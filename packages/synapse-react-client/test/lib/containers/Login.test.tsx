import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import * as React from 'react'
import StandaloneLoginForm from '../../../src/lib/containers/auth/StandaloneLoginForm'

const SynapseClient = require('../../../src/lib/utils/SynapseClient')
SynapseClient.login = jest.fn().mockResolvedValue({
  accessToken: 'abc-123',
  acceptsTermsOfUse: true,
  authenticationReceipt: 'xyz-456',
})

describe('Functionality of Login Component', () => {
  const callback = jest.fn()

  it('renders', () => {
    render(<StandaloneLoginForm sessionCallback={callback} />)
    screen.getByLabelText('Username or Email Address')
    screen.getByLabelText('Password')
  })

  it('Makes a login request and invokes the callback when clicking Sign In', async () => {
    render(<StandaloneLoginForm sessionCallback={callback} />)

    await userEvent.click(screen.getByRole('button', { name: 'Sign in' }))

    await waitFor(() => expect(SynapseClient.login).toHaveBeenCalled())
    await waitFor(() => expect(callback).toHaveBeenCalled())
  })
})
