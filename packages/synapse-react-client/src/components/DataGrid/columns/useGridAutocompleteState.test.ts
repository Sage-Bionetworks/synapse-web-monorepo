import { act, renderHook } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { useGridAutocompleteState } from './useGridAutocompleteState'

describe('useGridAutocompleteState', () => {
  it('menuIsOpen starts as false', () => {
    const { result } = renderHook(() =>
      useGridAutocompleteState({ active: false, focus: false }),
    )
    expect(result.current.menuIsOpen).toBe(false)
  })

  it('focuses the input and opens the menu when focus becomes true', () => {
    const { result, rerender } = renderHook(
      ({ active, focus }) => useGridAutocompleteState({ active, focus }),
      { initialProps: { active: true, focus: false } },
    )

    // Attach a mock input element to the ref
    const focusMock = vi.fn()
    const blurMock = vi.fn()
    Object.defineProperty(result.current.inputRef, 'current', {
      value: {
        focus: focusMock,
        blur: blurMock,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
      },
      writable: true,
    })

    act(() => {
      rerender({ active: true, focus: true })
    })

    expect(focusMock).toHaveBeenCalledTimes(1)
    expect(blurMock).not.toHaveBeenCalled()
    expect(result.current.menuIsOpen).toBe(true)
  })

  it('does NOT focus the input when only active becomes true', () => {
    const { result, rerender } = renderHook(
      ({ active, focus }) => useGridAutocompleteState({ active, focus }),
      { initialProps: { active: false, focus: false } },
    )

    const focusMock = vi.fn()
    const blurMock = vi.fn()
    Object.defineProperty(result.current.inputRef, 'current', {
      value: {
        focus: focusMock,
        blur: blurMock,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
      },
      writable: true,
    })

    act(() => {
      rerender({ active: true, focus: false })
    })

    expect(focusMock).not.toHaveBeenCalled()
    expect(result.current.menuIsOpen).toBe(false)
  })

  it('blurs the input and closes the menu when focus becomes false', () => {
    const { result, rerender } = renderHook(
      ({ active, focus }) => useGridAutocompleteState({ active, focus }),
      { initialProps: { active: true, focus: true } },
    )

    const focusMock = vi.fn()
    const blurMock = vi.fn()
    Object.defineProperty(result.current.inputRef, 'current', {
      value: {
        focus: focusMock,
        blur: blurMock,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
      },
      writable: true,
    })

    act(() => {
      result.current.setMenuIsOpen(true)
    })
    expect(result.current.menuIsOpen).toBe(true)

    act(() => {
      rerender({ active: true, focus: false })
    })

    expect(blurMock).toHaveBeenCalledTimes(1)
    expect(result.current.menuIsOpen).toBe(false)
  })

  it('calls onDeactivate when active becomes false with no pending click', () => {
    const onDeactivate = vi.fn()
    const { rerender } = renderHook(
      ({ active, focus }) =>
        useGridAutocompleteState({ active, focus, onDeactivate }),
      { initialProps: { active: true, focus: true } },
    )

    act(() => {
      rerender({ active: false, focus: false })
    })

    expect(onDeactivate).toHaveBeenCalledTimes(1)
  })

  it('does NOT call onDeactivate when focus drops but active stays (Escape)', () => {
    const onDeactivate = vi.fn()
    const { rerender } = renderHook(
      ({ active, focus }) =>
        useGridAutocompleteState({ active, focus, onDeactivate }),
      { initialProps: { active: true, focus: true } },
    )

    act(() => {
      rerender({ active: true, focus: false })
    })

    expect(onDeactivate).not.toHaveBeenCalled()
  })

  it('does NOT call onDeactivate when a portal click is in progress', () => {
    const onDeactivate = vi.fn()
    const { result, rerender } = renderHook(
      ({ active, focus }) =>
        useGridAutocompleteState({ active, focus, onDeactivate }),
      { initialProps: { active: true, focus: true } },
    )

    // Simulate mousedown on an option element (portal click in progress)
    act(() => {
      const optionEl = document.createElement('li')
      optionEl.setAttribute('role', 'option')
      const mockEvent = {
        preventDefault: vi.fn(),
        target: optionEl,
      } as unknown as React.MouseEvent
      result.current.handleListboxMouseDown(mockEvent)
    })

    // Cell deactivates before onChange fires
    act(() => {
      rerender({ active: false, focus: false })
    })

    // onDeactivate must NOT be called while the click is still in progress
    expect(onDeactivate).not.toHaveBeenCalled()
  })

  it('always calls the latest onDeactivate (no stale closure)', () => {
    const firstCallback = vi.fn()
    const secondCallback = vi.fn()

    const { rerender } = renderHook(
      ({ active, focus, onDeactivate }) =>
        useGridAutocompleteState({ active, focus, onDeactivate }),
      {
        initialProps: {
          active: true,
          focus: true,
          onDeactivate: firstCallback,
        },
      },
    )

    // Swap the callback before deactivation
    act(() => {
      rerender({ active: true, focus: true, onDeactivate: secondCallback })
    })

    act(() => {
      rerender({ active: false, focus: false, onDeactivate: secondCallback })
    })

    expect(firstCallback).not.toHaveBeenCalled()
    expect(secondCallback).toHaveBeenCalledTimes(1)
  })

  it('handleListboxMouseDown calls preventDefault and defers deactivation when target is an option', () => {
    const onDeactivate = vi.fn()
    const { result, rerender } = renderHook(
      ({ active, focus }) =>
        useGridAutocompleteState({ active, focus, onDeactivate }),
      { initialProps: { active: true, focus: true } },
    )

    const preventDefault = vi.fn()
    const optionEl = document.createElement('li')
    optionEl.setAttribute('role', 'option')
    const mockEvent = {
      preventDefault,
      target: optionEl,
    } as unknown as React.MouseEvent

    act(() => {
      result.current.handleListboxMouseDown(mockEvent)
    })

    expect(preventDefault).toHaveBeenCalledTimes(1)

    // Deactivating while the guard is set must NOT trigger onDeactivate
    act(() => {
      rerender({ active: false, focus: false })
    })
    expect(onDeactivate).not.toHaveBeenCalled()
  })

  it('handleListboxMouseDown calls preventDefault but does NOT defer deactivation when target is not an option', () => {
    const onDeactivate = vi.fn()
    const { result, rerender } = renderHook(
      ({ active, focus }) =>
        useGridAutocompleteState({ active, focus, onDeactivate }),
      { initialProps: { active: true, focus: true } },
    )

    const preventDefault = vi.fn()
    // Simulate a mousedown on the listbox container (e.g. scrollbar area)
    const listboxEl = document.createElement('ul')
    listboxEl.setAttribute('role', 'listbox')
    const mockEvent = {
      preventDefault,
      target: listboxEl,
    } as unknown as React.MouseEvent

    act(() => {
      result.current.handleListboxMouseDown(mockEvent)
    })

    expect(preventDefault).toHaveBeenCalledTimes(1)

    // Guard was not set, so deactivation should proceed normally
    act(() => {
      rerender({ active: false, focus: false })
    })
    expect(onDeactivate).toHaveBeenCalledTimes(1)
  })

  it('handleListboxMouseDown is stable across re-renders', () => {
    const { result, rerender } = renderHook(
      ({ active, focus }) => useGridAutocompleteState({ active, focus }),
      { initialProps: { active: false, focus: false } },
    )

    const firstRef = result.current.handleListboxMouseDown

    act(() => {
      rerender({ active: true, focus: true })
    })

    expect(result.current.handleListboxMouseDown).toBe(firstRef)
  })

  it('activeRef always reflects the current active value', () => {
    const { result, rerender } = renderHook(
      ({ active, focus }) => useGridAutocompleteState({ active, focus }),
      { initialProps: { active: false, focus: false } },
    )

    expect(result.current.activeRef.current).toBe(false)

    act(() => {
      rerender({ active: true, focus: true })
    })
    expect(result.current.activeRef.current).toBe(true)

    act(() => {
      rerender({ active: false, focus: false })
    })
    expect(result.current.activeRef.current).toBe(false)
  })

  it('does not close menu when focus becomes false due to portal click, but does close after onChange resets the ref', () => {
    const { result, rerender } = renderHook(
      ({ active, focus }) => useGridAutocompleteState({ active, focus }),
      { initialProps: { active: true, focus: true } },
    )

    act(() => {
      result.current.setMenuIsOpen(true)
    })

    // Portal mousedown begins — simulate mousedown on an option element
    act(() => {
      const optionEl = document.createElement('li')
      optionEl.setAttribute('role', 'option')
      result.current.handleListboxMouseDown({
        preventDefault: vi.fn(),
        target: optionEl,
      } as unknown as React.MouseEvent)
    })

    // Focus drops (e.g. cell deactivates as portal outside-click)
    act(() => {
      rerender({ active: false, focus: false })
    })
    // Menu must still be open so onChange can fire
    expect(result.current.menuIsOpen).toBe(true)

    // Simulate onChange committing the selection, then onClose closing the menu
    act(() => {
      result.current.notifyOptionCommitted()
      result.current.handleClose()
    })
    expect(result.current.menuIsOpen).toBe(false)
  })
})
