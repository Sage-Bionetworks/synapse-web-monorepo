import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ELContributeYourData from './ELContributeYourData'
import { describe, expect, test } from 'vitest'

describe('ELContributeYourData', () => {
  test('renders the heading', () => {
    render(<ELContributeYourData />)
    const heading = screen.getByText('Contribute Your Data')
    expect(heading).toBeInTheDocument()
  })

  test('renders the description text', () => {
    render(<ELContributeYourData />)
    const description = screen.getByText(
      /If you are a funded portal contributor and ready to upload data/i,
    )
    expect(description).toBeInTheDocument()
  })

  test('renders the service desk link', () => {
    render(<ELContributeYourData />)
    const link = screen.getByRole('link', { name: /start contributing/i })
    expect(link).toHaveAttribute(
      'href',
      'https://sagebionetworks.jira.com/servicedesk/customer/portal/12',
    )
  })
})
