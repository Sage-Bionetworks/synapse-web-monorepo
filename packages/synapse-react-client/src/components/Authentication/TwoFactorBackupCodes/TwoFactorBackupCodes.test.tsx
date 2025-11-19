import SynapseClient from '@/synapse-client/index'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { TwoFactorAuthRecoveryCodes } from '@sage-bionetworks/synapse-types'
import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TwoFactorBackupCodes, {
  TwoFactorBackupCodesProps,
} from './TwoFactorBackupCodes'

const newCodes: TwoFactorAuthRecoveryCodes = {
  codes: [
    '5zss-sj07-lohm-torh',
    '7nt6-g7vw-rm0o-d1a3',
    'i8lb-e5ki-icmp-0ov2',
    'o4zr-b4vv-j9mi-ufcd',
    'a4vx-uogv-0gki-zoeg',
    'x166-90z6-dtc4-tyiw',
    'gma3-a08u-tise-tpl0',
    'j04k-7sqz-zk94-zd8a',
    'ok11-rp7p-0xvs-637q',
    '88fk-jky5-jsp8-r8rq',
  ],
}

const mockCreateRecoveryCodes = vi
  .spyOn(SynapseClient, 'createRecoveryCodes')
  .mockResolvedValue(newCodes)

function renderComponent(props: TwoFactorBackupCodesProps) {
  return render(<TwoFactorBackupCodes {...props} />, {
    wrapper: createWrapper(),
  })
}

const onClose = vi.fn()

describe('TwoFactorBackupCodes', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    // Replace clipboard.writeText with a mock
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn().mockImplementation(() => Promise.resolve()),
      },
    })
  })

  it('Generates codes on mount if no warning is shown', async () => {
    renderComponent({ showReplaceOldCodesWarning: false, onClose })
    await waitFor(() =>
      expect(mockCreateRecoveryCodes).toHaveBeenCalledTimes(1),
    )
    for (const code of newCodes.codes) {
      await screen.findByText(code)
    }

    expect(screen.queryByRole('alert')).not.toBeInTheDocument()

    await userEvent.click(screen.getByRole('button', { name: 'Copy Codes' }))
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(
      newCodes.codes.join('\n'),
    )

    await userEvent.click(screen.getByRole('button', { name: 'Done' }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('Generates codes on after clicking through warning specified by props', async () => {
    renderComponent({ showReplaceOldCodesWarning: true, onClose })
    await screen.findByText('Really regenerate backup codes?')
    expect(mockCreateRecoveryCodes).not.toHaveBeenCalled()

    await userEvent.click(
      screen.getByRole('button', { name: 'Yes, regenerate backup codes' }),
    )

    await waitFor(() =>
      expect(mockCreateRecoveryCodes).toHaveBeenCalledTimes(1),
    )

    for (const code of newCodes.codes) {
      await screen.findByText(code)
    }

    await within(await screen.findByRole('alert')).findByText(
      'These new codes have replaced your old codes.',
      { exact: false },
    )

    await userEvent.click(screen.getByRole('button', { name: 'Copy Codes' }))
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(
      newCodes.codes.join('\n'),
    )

    await userEvent.click(screen.getByRole('button', { name: 'Done' }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('Does not generate codes if no warning is shown and the component is closed', async () => {
    renderComponent({ showReplaceOldCodesWarning: true, onClose })
    await screen.findByText('Really regenerate backup codes?')

    await userEvent.click(screen.getByRole('button', { name: 'Nevermind' }))
    expect(onClose).toHaveBeenCalledTimes(1)

    expect(mockCreateRecoveryCodes).not.toHaveBeenCalled()
  })
})
