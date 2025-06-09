import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { fireEvent, render, screen } from '@testing-library/react'
import { FacetChip, FacetChipProps } from './FacetChip'

const mockOnClick = vi.fn()

const props: FacetChipProps = {
  children: 'Make',
  isChecked: true,
  onClick: mockOnClick,
}

function renderComponent(props: FacetChipProps) {
  vi.clearAllMocks()
  return render(<FacetChip {...props} />, {
    wrapper: createWrapper(),
  })
}

describe('FacetChip tests', () => {
  it('should render a single chip correctly', async () => {
    renderComponent(props)
    await screen.findByRole('button', { name: 'Make' })
  })

  it('calls onClick when clicking chip', async () => {
    renderComponent(props)
    const chip = await screen.findByRole('button', { name: 'Make' })
    fireEvent.click(chip)
    expect(mockOnClick).toHaveBeenCalled()
  })
})
