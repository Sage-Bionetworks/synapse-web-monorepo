import * as React from 'react'
import SynapseImage from '../../../../src/lib/containers/widgets/SynapseImage'
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
  )
  expect(container).toBeDefined()
})
