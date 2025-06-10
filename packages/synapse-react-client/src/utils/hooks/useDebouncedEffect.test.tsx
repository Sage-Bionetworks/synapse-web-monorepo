import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useState } from 'react'
import { useDebouncedEffect } from './useDebouncedEffect'

const onEffect = vi.fn()
const DEBOUNCE_TIME = 1000

function TestComponent() {
  const [counter, setCounter] = useState(0)
  useDebouncedEffect(
    () => {
      onEffect(counter)
    },
    [counter],
    DEBOUNCE_TIME,
  )

  return (
    <button
      onClick={() => {
        setCounter(counter => counter + 1)
      }}
    />
  )
}

// Specify no delay on userEvent actions so we can advance timers at will
const user = userEvent.setup({ delay: null })

describe('useDebouncedEffect tests', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.resetAllMocks()
  })

  it('Groups multiple clicks', async () => {
    render(<TestComponent />)
    const button = screen.getByRole('button')
    await user.click(button)

    vi.advanceTimersByTime(DEBOUNCE_TIME)
    expect(onEffect).toHaveBeenCalledTimes(1)
    expect(onEffect).toHaveBeenLastCalledWith(1)

    // Click the button 5 more times
    for (let i = 0; i < 5; i++) {
      await user.click(button)
    }

    vi.advanceTimersByTime(DEBOUNCE_TIME)

    // Should only be called one more time, with 6
    expect(onEffect).toHaveBeenCalledTimes(2)
    expect(onEffect).toHaveBeenLastCalledWith(6)
  })

  it('Resets the delay each time a dependency changes', async () => {
    render(<TestComponent />)
    const button = screen.getByRole('button')

    await user.click(button)
    vi.advanceTimersByTime(DEBOUNCE_TIME / 2)

    // Clicking again should restart the timer
    await user.click(button)
    vi.advanceTimersByTime(DEBOUNCE_TIME / 2)

    expect(onEffect).toHaveBeenCalledTimes(0)

    vi.advanceTimersByTime(DEBOUNCE_TIME / 2)

    expect(onEffect).toHaveBeenCalledTimes(1)
    expect(onEffect).toHaveBeenLastCalledWith(2)
  })
})
