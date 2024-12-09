import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import ExploreWrapper from './ExploreWrapper'
import { ExploreWrapperProps } from './ExploreWrapperProps'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'

describe('ExploreWrapper', () => {
  const props = {
    explorePaths: [
      {
        path: 'Programs',
      },
      {
        path: 'Data',
      },
    ],
  } satisfies ExploreWrapperProps
  const router = createMemoryRouter([
    {
      path: '/',
      element: <ExploreWrapper {...props} />,
    },
  ])

  it('renders tabs', async () => {
    render(<RouterProvider router={router} />)
    const tabs = await screen.findAllByRole('tab')
    expect(tabs).toHaveLength(2)
    screen.getByText(props.explorePaths[0].path)
    screen.getByText(props.explorePaths[1].path)
  })
})
