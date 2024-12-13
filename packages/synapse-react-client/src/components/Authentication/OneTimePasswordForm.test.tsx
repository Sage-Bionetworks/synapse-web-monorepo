import { SynapseContextType } from '../../utils'
import { render, screen } from '@testing-library/react'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import userEvent from '@testing-library/user-event'
import OneTimePasswordForm, {
  BEGIN_RESET_2FA_BUTTON_TEXT,
  OneTimePasswordFormProps,
  SEND_RESET_2FA_EMAIL_BUTTON_TEXT,
  SHOW_RECOVERY_CODE_FORM_BUTTON_TEXT,
  SHOW_TOTP_FORM_BUTTON_TEXT,
} from './OneTimePasswordForm'
import { MOCK_CONTEXT_VALUE } from '../../mocks/MockSynapseContext'

const defaultProps = {
  step: 'VERIFICATION_CODE',
  hideReset2FA: false,
  loginIsPending: false,
  onClickPromptReset2FA: jest.fn(),
  onClickReset2FA: jest.fn(),
  onClickUseBackupCode: jest.fn(),
  onClickUseTOTP: jest.fn(),
  onSubmit: jest.fn(),
  twoFactorAuthResetIsPending: false,
  twoFactorAuthResetIsSuccess: false,
} satisfies OneTimePasswordFormProps

function renderComponent(
  props: OneTimePasswordFormProps,
  wrapperPropOverrides?: Partial<SynapseContextType>,
) {
  return render(<OneTimePasswordForm {...props} />, {
    wrapper: createWrapper({ ...MOCK_CONTEXT_VALUE, ...wrapperPropOverrides }),
  })
}

function setUp(
  props: OneTimePasswordFormProps = defaultProps,
  wrapperPropOverrides?: Partial<SynapseContextType>,
) {
  const user = userEvent.setup()
  const component = renderComponent(props, wrapperPropOverrides)
  return { component, user }
}
describe('OneTimePasswordForm', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('shows the TOTP form when the step is VERIFICATION_CODE', async () => {
    const props = {
      ...defaultProps,
      step: 'VERIFICATION_CODE',
    } satisfies OneTimePasswordFormProps
    setUp(props)

    // TOTP, so there will be 6 input fields
    const inputs = await screen.findAllByRole('textbox')
    expect(inputs.length).toBe(6)

    // A button exists to switch to entering a recovery code
    const switchToRecoveryCodeFormButton = await screen.findByText(
      SHOW_RECOVERY_CODE_FORM_BUTTON_TEXT,
    )
    await userEvent.click(switchToRecoveryCodeFormButton)
    expect(props.onClickUseBackupCode).toHaveBeenCalled()

    // A button is shown to reset 2FA
    await screen.findByText(BEGIN_RESET_2FA_BUTTON_TEXT)
  })

  it('shows the RecoveryCodeForm when the step is RECOVERY_CODE', async () => {
    const props = {
      ...defaultProps,
      step: 'RECOVERY_CODE',
    } satisfies OneTimePasswordFormProps
    setUp(props)

    // recovery code, so there will be 1 input field
    const inputs = await screen.findAllByRole('textbox')
    expect(inputs.length).toBe(1)

    // A button exists to switch to entering a TOTP
    const switchToTotpFormButton = await screen.findByText(
      SHOW_TOTP_FORM_BUTTON_TEXT,
    )
    await userEvent.click(switchToTotpFormButton)
    expect(props.onClickUseTOTP).toHaveBeenCalled()

    // A button is shown to reset 2FA
    await screen.findByText(BEGIN_RESET_2FA_BUTTON_TEXT)
  })

  it('shows a prompt to send the reset 2FA email when the step is DISABLE_2FA_PROMPT', async () => {
    const props = {
      ...defaultProps,
      step: 'DISABLE_2FA_PROMPT',
    } satisfies OneTimePasswordFormProps
    setUp(props)

    // A button is shown to reset 2FA
    const reset2FAButton = await screen.findByText(
      SEND_RESET_2FA_EMAIL_BUTTON_TEXT,
    )
    await userEvent.click(reset2FAButton)
    expect(props.onClickReset2FA).toHaveBeenCalled()
  })

  it('disables the reset 2FA button when the request to reset is pending', async () => {
    const props = {
      ...defaultProps,
      step: 'DISABLE_2FA_PROMPT',
      twoFactorAuthResetIsPending: true,
    } satisfies OneTimePasswordFormProps
    setUp(props)

    const reset2FAButton = await screen.findByText(
      SEND_RESET_2FA_EMAIL_BUTTON_TEXT,
    )
    // Prevent sending multiple requests to reset when waiting for one to go through
    expect(reset2FAButton).toBeDisabled()
  })

  it('disables the reset 2FA button when the request to reset is successful', async () => {
    const props = {
      ...defaultProps,
      step: 'DISABLE_2FA_PROMPT',
      twoFactorAuthResetIsSuccess: true,
    } satisfies OneTimePasswordFormProps
    setUp(props)

    const reset2FAButton = await screen.findByText(
      SEND_RESET_2FA_EMAIL_BUTTON_TEXT,
    )
    // Prevent sending multiple requests to reset when one has already succeeded
    expect(reset2FAButton).toBeDisabled()
  })

  it('shows a button to re-prompt for a 2FA code when the step is DISABLE_2FA_PROMPT', async () => {
    const props = {
      ...defaultProps,
      step: 'DISABLE_2FA_PROMPT',
      twoFactorAuthResetIsSuccess: true,
    } satisfies OneTimePasswordFormProps
    setUp(props)

    const useTwoFaButton = await screen.findByText('Go back')
    await userEvent.click(useTwoFaButton)
    expect(props.onClickUseTOTP).toHaveBeenCalled()
  })
})
