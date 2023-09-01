import React from 'react'
import { render } from '@testing-library/react'
import SynapseImage from './SynapseImage'

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
