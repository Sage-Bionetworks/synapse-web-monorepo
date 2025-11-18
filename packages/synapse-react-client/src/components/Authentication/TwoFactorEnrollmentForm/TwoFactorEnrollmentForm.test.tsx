import { MOCK_CONTEXT_VALUE } from '@/mocks/MockSynapseContext'
import SynapseClient from '@/synapse-client/index'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import { TotpSecret } from '@sage-bionetworks/synapse-types'
import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TwoFactorEnrollmentForm, {
  EXPORTED_FOR_UNIT_TESTING,
  TwoFactorEnrollmentFormProps,
} from './TwoFactorEnrollmentForm'
import { MOCK_USER_NAME } from '@/mocks/user/mock_user_profile'

const totpSecret: TotpSecret = {
  secretId: '1234',
  secret: 'ABCDEF12345',
  alg: 'SHA1',
  digits: 6,
  period: 30,
  username: MOCK_USER_NAME,
}

vi.mock('qrcode', () => ({
  // JSDOM doesn't fully support this, so mock it
  toCanvas: vi.fn(),
}))

const mockComplete2FAEnrollment = vi.spyOn(
  SynapseClient,
  'complete2FAEnrollment',
)

const onSuccessFn = vi.fn()
const onBackClickedFn = vi.fn()

function renderComponent(props: TwoFactorEnrollmentFormProps) {
  return render(<TwoFactorEnrollmentForm {...props} />, {
    wrapper: createWrapper(),
  })
}

describe('TwoFactorEnrollmentForm', () => {
  it("Bind a 2FA secret to a user's account", async () => {
    renderComponent({
      totpSecret,
      onTwoFactorEnrollmentSuccess: onSuccessFn,
      onBackClicked: onBackClickedFn,
    })

    // Once the component mounts, the secret should be fetched and displayed
    await waitFor(
      () => {
        const qrCodeNode = document.querySelector('canvas')
        expect(qrCodeNode).toBeDefined()
        expect(qrCodeNode).toBeVisible()
      },
      { timeout: 10000 },
    )

    // View the secret in a modal
    const showSecret = await screen.findByText("Can't use your camera?")
    await userEvent.click(showSecret)

    // Secret should be visible
    await screen.findByText(totpSecret.secret)

    // Close the modal
    const closeModalButton = await screen.findByRole('button', {
      name: 'Close',
    })
    await userEvent.click(closeModalButton)

    await waitFor(() => {
      expect(screen.queryByText(totpSecret.secret)).not.toBeInTheDocument()
    })

    // Enter an incorrect TOTP code
    mockComplete2FAEnrollment.mockRejectedValue(
      new SynapseClientError(
        400,
        'Invalid TOTP code',
        expect.getState().currentTestName!,
      ),
    )
    const totpInput = await screen.findByRole('textbox')
    const submitButton = await screen.findByRole('button', { name: 'Activate' })
    expect(submitButton).toBeDisabled()
    await userEvent.type(totpInput, '123456')
    expect(submitButton).not.toBeDisabled()
    const consoleErrorSpy = vi
      .spyOn(console, 'error')
      .mockImplementation(() => {})

    await userEvent.click(submitButton)

    const errorAlert = await screen.findByRole('alert')
    within(errorAlert).getByText('Invalid TOTP code')
    expect(mockComplete2FAEnrollment).toHaveBeenCalledTimes(1)

    consoleErrorSpy.mockRestore()

    // Enter the correct code
    mockComplete2FAEnrollment.mockResolvedValue({ status: 'ENABLED' })
    await userEvent.clear(totpInput)
    await userEvent.type(totpInput, '654321')
    await userEvent.click(submitButton)

    await waitFor(() => {
      expect(mockComplete2FAEnrollment).toHaveBeenCalledTimes(2)
      expect(mockComplete2FAEnrollment).toHaveBeenLastCalledWith(
        {
          secretId: totpSecret.secretId,
          totp: '654321',
        },
        MOCK_CONTEXT_VALUE.accessToken,
      )
      expect(onSuccessFn).toHaveBeenCalledTimes(1)
    })
  })

  it('toOtpAuthUrl', () => {
    const expected =
      'otpauth://totp/Synapse:' +
      MOCK_USER_NAME +
      '?secret=' +
      totpSecret.secret +
      '&issuer=Sage%20Bionetworks&algorithm=' +
      totpSecret.alg +
      '&digits=' +
      String(totpSecret.digits) +
      '&period=' +
      String(totpSecret.period)
    expect(EXPORTED_FOR_UNIT_TESTING.toOtpAuthUrl(totpSecret)).toEqual(expected)
  })
})
