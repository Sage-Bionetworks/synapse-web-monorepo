import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SizeMe from 'react-sizeme'
import Carousel from './Carousel'

SizeMe.noPlaceholders = true

describe('basic functionality', () => {
  test('renders a loading spinner when isLoading is true', () => {
    const { container } = render(<Carousel isLoading={true}>{[]}</Carousel>, {
      wrapper: createWrapper(),
    })
    expect(container.querySelectorAll('div.spinner')).toHaveLength(1)
  })

  test('does not render a loading spinner when isLoading is false', () => {
    const { container } = render(<Carousel isLoading={false}>{[]}</Carousel>, {
      wrapper: createWrapper(),
    })
    expect(container.querySelectorAll('div.spinner')).toHaveLength(0)
  })

  test('applies the correct classes to components based on index', async () => {
    const children = [
      <div className="child0" key={0} />,
      <div className="child1" key={1} />,
      <div className="child2" key={2} />,
    ]
    const { container } = render(
      <Carousel isLoading={false}>{children}</Carousel>,
      { wrapper: createWrapper() },
    )

    // Cards that map to the first child should have the 'Selected' class
    let child0 = container.querySelectorAll('div.child0')
    expect(child0.length).toBeGreaterThan(0)
    child0.forEach(element => {
      expect(element.classList.contains('SRC-Carousel__SelectedCard')).toBe(
        true,
      )
    })
    let child1 = container.querySelectorAll('div.child1')
    expect(child1.length).toBeGreaterThan(0)
    child1.forEach(element => {
      expect(element.classList.contains('SRC-Carousel__UnselectedCard')).toBe(
        true,
      )
    })
    let child2 = container.querySelectorAll('div.child2')
    expect(child2.length).toBeGreaterThan(0)
    child2.forEach(element => {
      expect(element.classList.contains('SRC-Carousel__UnselectedCard')).toBe(
        true,
      )
    })

    // Click the right arrow
    const rightButton = container.querySelector(
      'div.BrainhubCarousel__custom-arrowRight',
    )!
    await userEvent.click(rightButton)

    // Cards that map to the second child should have the 'Selected' class
    child0 = container.querySelectorAll('div.child0')
    expect(child0.length).toBeGreaterThan(0)
    child0.forEach(element => {
      expect(element.classList.contains('SRC-Carousel__UnselectedCard')).toBe(
        true,
      )
    })
    child1 = container.querySelectorAll('div.child1')
    expect(child1.length).toBeGreaterThan(0)
    child1.forEach(element => {
      expect(element.classList.contains('SRC-Carousel__SelectedCard')).toBe(
        true,
      )
    })
    child2 = container.querySelectorAll('div.child2')
    expect(child2.length).toBeGreaterThan(0)
    child2.forEach(element => {
      expect(element.classList.contains('SRC-Carousel__UnselectedCard')).toBe(
        true,
      )
    })
  })
})
