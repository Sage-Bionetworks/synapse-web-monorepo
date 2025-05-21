import { createWrapper } from '@/testutils/TestingLibraryUtils'
import SynapseImage from './SynapseImage'
import { render } from '@testing-library/react'

it('renders without failing', () => {
  const { container } = render(
    <SynapseImage
      params={{
        align: '',
        altText: '',
        scale: '',
        responsive: '',
      }}
    />,
    { wrapper: createWrapper() },
  )
  expect(container).toBeDefined()
})
