import { act, renderHook } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { useGridAutocompleteState } from './useGridAutocompleteState'

describe('useGridAutocompleteState', () => {
  it('menuIsOpen starts as false', () => {
    const { result } = renderHook(() =>
      useGridAutocompleteState({ active: false }),
    )
    expect(result.current.menuIsOpen).toBe(false)
  })

  it('focuses the input when active becomes true', () => {
    const { result, rerender } = renderHook(
      ({ active }) => useGridAutocompleteState({ active }),
      { initialProps: { active: false } },
    )

    // Attach a mock input element to the ref
    const focusMock = vi.fn()
    const blurMock = vi.fn()
    Object.defineProperty(result.current.inputRef, 'current', {
      value: { focus: focusMock, blur: blurMock },
      writable: true,
    })

    act(() => {
      rerender({ active: true })
    })

    expect(focusMock).toHaveBeenCalledTimes(1)
    expect(blurMock).not.toHaveBeenCalled()
  })

  it('blurs the input and closes the menu when active becomes false', () => {
    const { result, rerender } = renderHook(
      ({ active }) => useGridAutocompleteState({ active }),
      { initialProps: { active: true } },
    )

    const focusMock = vi.fn()
    const blurMock = vi.fn()
    Object.defineProperty(result.current.inputRef, 'current', {
      value: { focus: focusMock, blur: blurMock },
      writable: true,
    })

    act(() => {
      result.current.setMenuIsOpen(true)
    })
    expect(result.current.menuIsOpen).toBe(true)

    act(() => {
      rerender({ active: false })
    })

    expect(blurMock).toHaveBeenCalledTimes(1)
    expect(result.current.menuIsOpen).toBe(false)
  })

  it('calls onDeactivate when active becomes false with no pending click', () => {
    const onDeactivate = vi.fn()
    const { rerender } = renderHook(
      ({ active }) => useGridAutocompleteState({ active, onDeactivate }),
      { initialProps: { active: true } },
    )

    act(() => {
      rerender({ active: false })
    })

    expect(onDeactivate).toHaveBeenCalledTimes(1)
  })

  it('does NOT call onDeactivate when a portal click is in progress', () => {
    const onDeactivate = vi.fn()
    const { result, rerender } = renderHook(
      ({ active }) => useGridAutocompleteState({ active, onDeactivate }),
      { initialProps: { active: true } },
    )

    // Simulate listbox mousedown (portal click in progress)
    act(() => {
      const mockEvent = {
        preventDefault: vi.fn(),
      } as unknown as React.MouseEvent
      result.current.handleListboxMouseDown(mockEvent)
    })
    expect(result.current.optionMouseDownRef.current).toBe(true)

    // Cell deactivates before onChange fires
    act(() => {
      rerender({ active: false })
    })

    // onDeactivate must NOT be called while the click is still in progress
    expect(onDeactivate).not.toHaveBeenCalled()
  })

  it('always calls the latest onDeactivate (no stale closure)', () => {
    const firstCallback = vi.fn()
    const secondCallback = vi.fn()

    const { rerender } = renderHook(
      ({ active, onDeactivate }) =>
        useGridAutocompleteState({ active, onDeactivate }),
      { initialProps: { active: true, onDeactivate: firstCallback } },
    )

    // Swap the callback before deactivation
    act(() => {
      rerender({ active: true, onDeactivate: secondCallback })
    })

    act(() => {
      rerender({ active: false, onDeactivate: secondCallback })
    })

    expect(firstCallback).not.toHaveBeenCalled()
    expect(secondCallback).toHaveBeenCalledTimes(1)
  })

  it('handleListboxMouseDown calls preventDefault and sets optionMouseDownRef', () => {
    const { result } = renderHook(() =>
      useGridAutocompleteState({ active: true }),
    )

    const preventDefault = vi.fn()
    const mockEvent = { preventDefault } as unknown as React.MouseEvent

    act(() => {
      result.current.handleListboxMouseDown(mockEvent)
    })

    expect(preventDefault).toHaveBeenCalledTimes(1)
    expect(result.current.optionMouseDownRef.current).toBe(true)
  })

  it('handleListboxMouseDown is stable across re-renders', () => {
    const { result, rerender } = renderHook(
      ({ active }) => useGridAutocompleteState({ active }),
      { initialProps: { active: false } },
    )

    const firstRef = result.current.handleListboxMouseDown

    act(() => {
      rerender({ active: true })
    })

    expect(result.current.handleListboxMouseDown).toBe(firstRef)
  })

  it('activeRef always reflects the current active value', () => {
    const { result, rerender } = renderHook(
      ({ active }) => useGridAutocompleteState({ active }),
      { initialProps: { active: false } },
    )

    expect(result.current.activeRef.current).toBe(false)

    act(() => {
      rerender({ active: true })
    })
    expect(result.current.activeRef.current).toBe(true)

    act(() => {
      rerender({ active: false })
    })
    expect(result.current.activeRef.current).toBe(false)
  })

  it('does not close menu when active becomes false due to portal click, but does close after onChange resets the ref', () => {
    const { result, rerender } = renderHook(
      ({ active }) => useGridAutocompleteState({ active }),
      { initialProps: { active: true } },
    )

    act(() => {
      result.current.setMenuIsOpen(true)
    })

    // Portal mousedown begins
    act(() => {
      result.current.handleListboxMouseDown({
        preventDefault: vi.fn(),
      } as unknown as React.MouseEvent)
    })

    // Cell deactivates (portal outside-click)
    act(() => {
      rerender({ active: false })
    })
    // Menu must still be open so onChange can fire
    expect(result.current.menuIsOpen).toBe(true)

    // Simulate onChange resetting the ref and closing the menu
    act(() => {
      result.current.optionMouseDownRef.current = false
      result.current.setMenuIsOpen(false)
    })
    expect(result.current.menuIsOpen).toBe(false)
  })
})
