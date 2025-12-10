import { act, render, screen, waitFor, within } from '@testing-library/react'
import userEvent, { UserEvent } from '@testing-library/user-event'
import {
  QueryVisualizationContextType,
  useQueryVisualizationContext,
} from '../../QueryVisualizationWrapper/index'
import ExportToAnalysisPlatformDialog, {
  ExportToAnalysisPlatformDialogProps,
} from './ExportToAnalysisPlatformDialog'
import ExternalPlatformActionsRequiredPrecheck from './ExternalPlatformActionsRequiredPrecheck'

vi.mock('../../QueryVisualizationWrapper/QueryVisualizationContext')
vi.mock('./ExternalPlatformActionsRequiredPrecheck')

const mockSetIsShowingExportToAnalysisPlatformModal = vi.fn()
const mockExternalPlatformActionsRequiredPrecheck = vi
  .mocked(ExternalPlatformActionsRequiredPrecheck)
  .mockReturnValue(
    <div data-testid={'ExternalPlatformActionsRequiredPrecheck'} />,
  )

const mockQueryVisualizationContext: QueryVisualizationContextType = {
  isShowingExportToAnalysisPlatformModal: true,
  setIsShowingExportToAnalysisPlatformModal:
    mockSetIsShowingExportToAnalysisPlatformModal,
  enabledExternalAnalysisPlatforms: [
    'cavatica',
    'terra',
    'adworkbench',
    'plutodev',
    'pluto',
  ],
  // rest are unused
  NoContentPlaceholder: vi.fn(),
  columnsToShowInTable: [],
  getColumnDisplayName: vi.fn(),
  getDisplayValue: vi.fn(),
  getHelpText: vi.fn(),
  setColumnsToShowInTable: vi.fn(),
  setShowCopyToClipboard: vi.fn(),
  setShowDownloadConfirmation: vi.fn(),
  setShowFacetFilter: vi.fn(),
  setShowPlots: vi.fn(),
  setShowSearchBar: vi.fn(),
  setShowSqlEditor: vi.fn(),
  showCopyToClipboard: false,
  showDownloadConfirmation: false,
  showFacetFilter: false,
  showPlots: false,
  showSearchBar: false,
  showSqlEditor: false,
  unitDescription: '',
  hideSearchBarControl: false,
}

const mockUseQueryVisualizationContext = vi
  .mocked(useQueryVisualizationContext)
  .mockReturnValue(mockQueryVisualizationContext)

const props: ExportToAnalysisPlatformDialogProps = {
  platformInstructionProps: {
    cavaticaConnectAccountURL: 'https://my-instruction-url.gov/',
  },
}
let user = userEvent.setup()

describe('ExportToAnalysisPlatformDialog tests', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    user = userEvent.setup()
  })

  test.each([
    { platform: 'cavatica', name: 'CAVATICA' },
    { platform: 'terra', name: 'Terra' },
    { platform: 'adworkbench', name: 'AD Discovery Portal' },
  ])(
    'Walk through each step of the dialog for $platform',
    async platformCase => {
      render(<ExportToAnalysisPlatformDialog {...props} />)

      await acceptAndCloseDisclaimer(user)
      const dialog = await screen.findByRole('dialog')
      within(dialog).getByRole('heading', { name: 'Send to Analysis Platform' })
      await screen.findByText(
        /This portal supports sending data to third-party platforms for analysis/,
      )
      await user.click(await screen.findByRole('button', { name: 'Continue' }))

      // Verify all platforms are shown
      screen.getByRole('menuitem', { name: 'CAVATICA' })
      screen.getByRole('menuitem', { name: 'Terra' })
      screen.getByRole('menuitem', { name: 'AD Discovery Portal' })

      const continueButton = screen.getByRole('button', { name: 'Continue' })
      expect(continueButton).toBeDisabled()
      await user.click(
        await screen.findByRole('menuitem', { name: platformCase.name }),
      )
      await waitFor(() => expect(continueButton).not.toBeDisabled())
      await user.click(continueButton)

      // Review instructions for selected platform
      await screen.findByRole('heading', {
        name: `Send to ${platformCase.name}`,
      })
      await user.click(await screen.findByRole('button', { name: 'Continue' }))

      // Final screen is mocked
      await screen.findByTestId('ExternalPlatformActionsRequiredPrecheck')

      // Verify the mock component received the correct props and updates the confirm button
      expect(
        mockExternalPlatformActionsRequiredPrecheck,
      ).toHaveBeenRenderedWithProps({
        selectedPlatform: platformCase.platform,
        onConfirmButtonPropsChange: expect.any(Function),
        onSuccessfulExport: expect.any(Function),
      })

      const finalConfirmButtonText = 'mock confirm button text'
      const finalConfirmButtonClickHandler = vi.fn()

      act(() => {
        mockExternalPlatformActionsRequiredPrecheck.mock.lastCall![0].onConfirmButtonPropsChange(
          {
            onClick: finalConfirmButtonClickHandler,
            children: finalConfirmButtonText,
            disabled: false,
          },
        )
      })

      await user.click(
        screen.getByRole('button', { name: finalConfirmButtonText }),
      )

      expect(finalConfirmButtonClickHandler).toHaveBeenCalled()

      // Once the export completes, onSuccessfulExport is called which should trigger the callback to hide the modal.
      expect(
        mockSetIsShowingExportToAnalysisPlatformModal,
      ).not.toHaveBeenCalled()
      act(() => {
        mockExternalPlatformActionsRequiredPrecheck.mock.lastCall![0].onSuccessfulExport()
      })
      await waitFor(() =>
        expect(
          mockSetIsShowingExportToAnalysisPlatformModal,
        ).toHaveBeenCalledWith(false),
      )
    },
  )

  test("it shows only those platforms listed in 'enabledExternalAnalysisPlatforms'", async () => {
    mockUseQueryVisualizationContext.mockReturnValue({
      ...mockQueryVisualizationContext,
      enabledExternalAnalysisPlatforms: ['cavatica'],
    })
    render(<ExportToAnalysisPlatformDialog {...props} />)

    await acceptAndCloseDisclaimer(user)
    const dialog = await screen.findByRole('dialog')
    within(dialog).getByRole('heading', { name: 'Send to Analysis Platform' })
    await screen.findByText(
      /This portal supports sending data to third-party platforms for analysis/,
    )
    await user.click(await screen.findByRole('button', { name: 'Continue' }))

    // Verify only CAVATICA is shown
    screen.getByRole('menuitem', { name: 'CAVATICA' })
    expect(screen.getAllByRole('menuitem')).toHaveLength(1)
  })

  test('hides when clicking dialog close buttons', async () => {
    render(<ExportToAnalysisPlatformDialog {...props} />)

    const disclaimerDialog = await screen.findByRole('dialog')
    await user.click(
      within(disclaimerDialog).getByRole('button', { name: 'close' }),
    )
    expect(mockSetIsShowingExportToAnalysisPlatformModal).toHaveBeenCalledTimes(
      1,
    )
    expect(
      mockSetIsShowingExportToAnalysisPlatformModal,
    ).toHaveBeenLastCalledWith(false)

    await acceptAndCloseDisclaimer(user)

    const mainDialog = await screen.findByRole('dialog')
    await user.click(within(mainDialog).getByRole('button', { name: 'close' }))
    expect(mockSetIsShowingExportToAnalysisPlatformModal).toHaveBeenCalledTimes(
      2,
    )
    expect(
      mockSetIsShowingExportToAnalysisPlatformModal,
    ).toHaveBeenLastCalledWith(false)
  })

  test('is not shown when not opened via context', () => {
    mockUseQueryVisualizationContext.mockReturnValue({
      ...mockQueryVisualizationContext,
      isShowingExportToAnalysisPlatformModal: false,
    })

    render(<ExportToAnalysisPlatformDialog {...props} />)

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  async function acceptAndCloseDisclaimer(user: UserEvent) {
    const disclaimerDialog = await screen.findByRole('dialog')
    within(disclaimerDialog).getByRole('heading', { name: 'Disclaimer' })
    const input = within(disclaimerDialog).getByLabelText<HTMLInputElement>(
      'I acknowledge and accept these terms',
    )
    if (!input.checked) {
      await user.click(input)
    }
    await user.click(screen.getByRole('button', { name: 'Continue' }))
    await waitFor(() => expect(disclaimerDialog).not.toBeInTheDocument())
  }
})
