import { render } from '@testing-library/react'
import React from 'react'
import TermsAndConditions from '../../src/components/TermsAndConditions/TermsAndConditions'

describe('Terms And Conditions: basic functionality', () => {
  const props = {
    onFormChange: jest.fn(),
  }
  const checkboxCount = 8

  it('renders terms and condition without crashing', () => {
    const { container } = render(<TermsAndConditions {...props} />)
    expect(container).toBeDefined()
  })

  it('should render all checkboxes', () => {
    const { container } = render(<TermsAndConditions {...props} />)
    const li = container.querySelectorAll('.term-list > li')
    expect(li.length).toEqual(checkboxCount)
  })
})
