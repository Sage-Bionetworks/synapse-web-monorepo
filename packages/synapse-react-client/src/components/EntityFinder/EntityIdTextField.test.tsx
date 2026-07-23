import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import EntityIdTextField, { EntityIdTextFieldProps } from './EntityIdTextField'
import { FinderScope } from './tree/EntityTree'
import { VersionSelectionType } from './VersionSelectionType'

vi.mock('./EntityFinderModal', () => ({
  EntityFinderModal: ({
    show,
    onConfirm,
    onCancel,
    title,
  }: {
    show: boolean
    onConfirm: (selected: { targetId: string }[]) => void
    onCancel: () => void
    title: string
  }) =>
    show ? (
      <div data-testid="entity-finder-modal" data-title={title}>
        <button
          onClick={() => onConfirm([{ targetId: 'syn42' }])}
          data-testid="entity-finder-confirm"
        >
          Select
        </button>
        <button onClick={onCancel} data-testid="entity-finder-cancel">
          Cancel
        </button>
      </div>
    ) : null,
}))

const mockEntityFinderModalProps: EntityIdTextFieldProps['entityFinderModalProps'] =
  {
    title: 'Select an Entity',
    promptCopy: 'Pick something.',
    confirmButtonCopy: 'Select',
    configuration: {
      initialScope: FinderScope.CURRENT_PROJECT,
      initialContainer: 'root',
      selectMultiple: false,
      treeOnly: false,
      versionSelection: VersionSelectionType.DISALLOWED,
      selectableTypes: [],
    },
  }

const mockOnChange = vi.fn()

const defaultProps: EntityIdTextFieldProps = {
  label: 'Upload Folder ID',
  value: '',
  onChange: mockOnChange,
  entityFinderModalProps: mockEntityFinderModalProps,
}

function renderComponent(props: Partial<EntityIdTextFieldProps> = {}) {
  return render(<EntityIdTextField {...defaultProps} {...props} />)
}

beforeEach(() => {
  vi.clearAllMocks()
})

describe('EntityIdTextField', () => {
  it('renders text field with the correct label', () => {
    renderComponent()
    expect(screen.getByLabelText(/Upload Folder ID/i)).toBeInTheDocument()
  })

  it('renders with the provided value', () => {
    renderComponent({ value: 'syn123' })
    expect(
      screen.getByLabelText<HTMLInputElement>(/Upload Folder ID/i).value,
    ).toBe('syn123')
  })

  it('calls onChange when user types directly', async () => {
    renderComponent()
    await userEvent.type(screen.getByLabelText(/Upload Folder ID/i), 'syn99')
    expect(mockOnChange).toHaveBeenCalled()
  })

  it('shows the search button when not disabled', () => {
    renderComponent()
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('marks the field as required when required is true', () => {
    renderComponent({ required: true })
    expect(screen.getByLabelText(/Upload Folder ID/i)).toBeRequired()
  })

  it('does not mark the field as required by default', () => {
    renderComponent()
    expect(screen.getByLabelText(/Upload Folder ID/i)).not.toBeRequired()
  })

  it('does not show the search button when disabled', () => {
    renderComponent({ disabled: true })
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })

  it('opens the EntityFinderModal when search button is clicked', async () => {
    renderComponent()
    expect(screen.queryByTestId('entity-finder-modal')).not.toBeInTheDocument()
    await userEvent.click(screen.getByRole('button'))
    expect(screen.getByTestId('entity-finder-modal')).toBeInTheDocument()
  })

  it('calls onChange with the selected entity ID and closes modal on confirm', async () => {
    renderComponent()
    await userEvent.click(screen.getByRole('button'))
    await userEvent.click(screen.getByTestId('entity-finder-confirm'))
    await waitFor(() => {
      expect(mockOnChange).toHaveBeenCalledWith('syn42')
      expect(
        screen.queryByTestId('entity-finder-modal'),
      ).not.toBeInTheDocument()
    })
  })

  it('closes the modal without calling onChange when cancelled', async () => {
    renderComponent()
    await userEvent.click(screen.getByRole('button'))
    await userEvent.click(screen.getByTestId('entity-finder-cancel'))
    await waitFor(() => {
      expect(
        screen.queryByTestId('entity-finder-modal'),
      ).not.toBeInTheDocument()
    })
    expect(mockOnChange).not.toHaveBeenCalled()
  })

  it('passes the modal title to EntityFinderModal', async () => {
    renderComponent()
    await userEvent.click(screen.getByRole('button'))
    expect(screen.getByTestId('entity-finder-modal')).toHaveAttribute(
      'data-title',
      'Select an Entity',
    )
  })
})
