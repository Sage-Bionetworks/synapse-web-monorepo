import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { describe, expect, test } from 'vitest'
import HowToAccessData from './HowToAccessData'

const MORE_INFO_PATH = '/How to Access Data'

function renderComponent() {
  return render(
    <MemoryRouter>
      <HowToAccessData moreInfoPath={MORE_INFO_PATH} />
    </MemoryRouter>,
  )
}

describe('HowToAccessData', () => {
  test('summarizes each access route', () => {
    renderComponent()
    expect(screen.getByText('Open access')).toBeInTheDocument()
    expect(screen.getByText('Controlled access')).toBeInTheDocument()
    expect(screen.getByText('External application')).toBeInTheDocument()
  })

  test('links to the full instructions page', () => {
    renderComponent()
    expect(
      screen.getByRole('link', { name: 'More about accessing data' }),
    ).toHaveAttribute('href', MORE_INFO_PATH)
    expect(
      screen.getByRole('link', {
        name: 'Learn more about accessing data from the ALS Knowledge Portal',
      }),
    ).toHaveAttribute('href', MORE_INFO_PATH)
  })
})
