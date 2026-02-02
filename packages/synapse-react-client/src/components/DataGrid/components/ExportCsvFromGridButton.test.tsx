import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach, Mock } from 'vitest'
import userEvent from '@testing-library/user-event'
import ExportCsvFromGridButton from './ExportCsvFromGridButton'
import { useExportDataGridToCsv } from '@/components/DataGrid/hooks/useExportDataGridToCsv'

vi.mock('@/components/DataGrid/hooks/useExportDataGridToCsv')

describe('ExportCsvFromGridButton', () => {
  const mockExportToCsv = vi.fn()
  const defaultProps = {
    gridSessionId: 'test-session-123',
    filename: 'test-export',
  }

  beforeEach(() => {
    vi.clearAllMocks()

    // Default mock: not exporting
    ;(useExportDataGridToCsv as Mock).mockReturnValue({
      exportToCsv: mockExportToCsv,
      isExporting: false,
    })
  })

  it('should render with "Export CSV" text when not exporting', () => {
    render(<ExportCsvFromGridButton {...defaultProps} />)

    expect(
      screen.getByRole('button', { name: /export csv/i }),
    ).toBeInTheDocument()
  })

  it('should pass gridSessionId and filename to useExportDataGridToCsv hook', () => {
    render(
      <ExportCsvFromGridButton
        gridSessionId="my-session-456"
        filename="my-export-file"
      />,
    )

    expect(useExportDataGridToCsv).toHaveBeenCalledWith({
      gridSessionId: 'my-session-456',
      filename: 'my-export-file',
    })
  })

  it('should call exportToCsv when button is clicked', async () => {
    const user = userEvent.setup()
    render(<ExportCsvFromGridButton {...defaultProps} />)

    const button = screen.getByRole('button', { name: /export csv/i })
    await user.click(button)

    expect(mockExportToCsv).toHaveBeenCalledTimes(1)
  })

  it('should disable button when isExporting is true', () => {
    ;(useExportDataGridToCsv as Mock).mockReturnValue({
      exportToCsv: mockExportToCsv,
      isExporting: true,
    })

    render(<ExportCsvFromGridButton {...defaultProps} />)

    const button = screen.getByRole('button', { name: /export csv/i })
    expect(button).toBeDisabled()
  })

  it('should not disable button when isExporting is false', () => {
    render(<ExportCsvFromGridButton {...defaultProps} />)

    const button = screen.getByRole('button', { name: /export csv/i })
    expect(button).not.toBeDisabled()
  })

  it('should show loading indicator when isExporting is true', () => {
    ;(useExportDataGridToCsv as Mock).mockReturnValue({
      exportToCsv: mockExportToCsv,
      isExporting: true,
    })

    render(<ExportCsvFromGridButton {...defaultProps} />)

    // CircularProgress has role="progressbar"
    expect(screen.getByRole('progressbar')).toBeInTheDocument()
  })

  it('should not show loading indicator when isExporting is false', () => {
    render(<ExportCsvFromGridButton {...defaultProps} />)

    expect(screen.queryByRole('progressbar')).not.toBeInTheDocument()
  })

  it('should render with outlined variant', () => {
    render(<ExportCsvFromGridButton {...defaultProps} />)

    const button = screen.getByRole('button', { name: /export csv/i })
    expect(button).toHaveClass('MuiButton-outlined')
  })
})
