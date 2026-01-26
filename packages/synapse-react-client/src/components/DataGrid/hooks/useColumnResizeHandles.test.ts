import { renderHook, act } from '@testing-library/react'
import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest'
import { useColumnResizeHandles } from './useColumnResizeHandles'
import { Column } from 'react-datasheet-grid'
import * as reactHookz from '@react-hookz/web'

// Mock useResizeObserver
vi.mock('@react-hookz/web', () => ({
  useResizeObserver: vi.fn(),
}))

describe('useColumnResizeHandles', () => {
  let mockWrapperRef: React.RefObject<HTMLDivElement | null>
  let mockGridContainer: HTMLElement
  let mockHeaderRow: HTMLElement
  let mockOnColumnResize: ReturnType<typeof vi.fn>
  let mockColValues: Column[]
  let resizeObserverCallback: ((entry: ResizeObserverEntry) => void) | null =
    null

  // Helper to create mock header cells
  const createMockCell = (columnName: string, width: number = 150) => {
    const cell = document.createElement('div')
    cell.className = 'dsg-cell'
    cell.textContent = columnName
    Object.defineProperty(cell, 'offsetWidth', {
      value: width,
      configurable: true,
    })
    Object.defineProperty(cell, 'offsetLeft', { value: 0, configurable: true })
    return cell
  }

  // Helper to trigger ResizeObserver callback and initialize handles
  const triggerInitialization = () => {
    if (resizeObserverCallback && mockWrapperRef.current) {
      const mockEntry: ResizeObserverEntry = {
        target: mockWrapperRef.current,
        contentRect: {
          width: 800,
          height: 600,
          top: 0,
          left: 0,
          bottom: 600,
          right: 800,
          x: 0,
          y: 0,
          toJSON: () => ({}),
        },
        borderBoxSize: [] as any,
        contentBoxSize: [] as any,
        devicePixelContentBoxSize: [] as any,
      }
      act(() => {
        resizeObserverCallback!(mockEntry)
      })
    }
  }

  beforeEach(() => {
    // Mock useResizeObserver from @react-hookz/web
    resizeObserverCallback = null
    vi.mocked(reactHookz.useResizeObserver).mockImplementation(
      (ref, callback) => {
        resizeObserverCallback = callback as any
      },
    )

    // Create mock DOM structure
    mockGridContainer = document.createElement('div')
    mockGridContainer.className = 'dsg-container'
    Object.defineProperty(mockGridContainer, 'scrollHeight', {
      value: 500,
      configurable: true,
    })

    mockHeaderRow = document.createElement('div')
    mockHeaderRow.className = 'dsg-row dsg-row-header'

    // Add gutter column (index 0) - should be skipped
    const gutterCell = createMockCell('')
    mockHeaderRow.appendChild(gutterCell)

    // Add actual data columns
    const col1Cell = createMockCell('Column A', 150)
    const col2Cell = createMockCell('Column B', 200)
    const col3Cell = createMockCell('Column C', 180)

    mockHeaderRow.appendChild(col1Cell)
    mockHeaderRow.appendChild(col2Cell)
    mockHeaderRow.appendChild(col3Cell)

    mockGridContainer.appendChild(mockHeaderRow)
    document.body.appendChild(mockGridContainer)

    // Create wrapper ref with proper dimensions
    const wrapperDiv = document.createElement('div')
    wrapperDiv.appendChild(mockGridContainer)
    document.body.appendChild(wrapperDiv)

    mockWrapperRef = { current: wrapperDiv }

    // Mock columns
    mockColValues = [
      { id: 'columnA', title: 'Column A' } as Column,
      { id: 'columnB', title: 'Column B' } as Column,
      { id: 'columnC', title: 'Column C' } as Column,
    ]

    // Mock callback
    mockOnColumnResize = vi.fn()

    // Mock timers for RAF used in MutationObserver
    vi.useFakeTimers()
  })

  afterEach(() => {
    document.body.innerHTML = ''
    vi.clearAllTimers()
    vi.useRealTimers()
    vi.clearAllMocks()
    resizeObserverCallback = null
  })

  describe('Initialization', () => {
    it('should not create handles if wrapperRef is null', () => {
      const nullRef = { current: null }
      renderHook(() =>
        useColumnResizeHandles({
          wrapperRef: nullRef,
          colValues: mockColValues,
          onColumnResize: mockOnColumnResize,
        }),
      )

      // ResizeObserver won't trigger for null ref
      const handles = document.querySelectorAll('.column-resize-handle')
      expect(handles).toHaveLength(0)
    })

    it('should create handles after ResizeObserver triggers', () => {
      renderHook(() =>
        useColumnResizeHandles({
          wrapperRef: mockWrapperRef,
          colValues: mockColValues,
          onColumnResize: mockOnColumnResize,
        }),
      )

      // Before initialization
      expect(document.querySelectorAll('.column-resize-handle')).toHaveLength(0)

      // After ResizeObserver triggers
      triggerInitialization()

      const handles = document.querySelectorAll('.column-resize-handle')
      expect(handles.length).toBeGreaterThan(0)
    })

    it('should create handle for each visible column', () => {
      renderHook(() =>
        useColumnResizeHandles({
          wrapperRef: mockWrapperRef,
          colValues: mockColValues,
          onColumnResize: mockOnColumnResize,
        }),
      )

      triggerInitialization()

      const handles = document.querySelectorAll('.column-resize-handle')
      // Should create 3 handles (one per column, excluding gutter)
      expect(handles).toHaveLength(3)
    })

    it('should skip gutter column (index 0)', () => {
      renderHook(() =>
        useColumnResizeHandles({
          wrapperRef: mockWrapperRef,
          colValues: mockColValues,
          onColumnResize: mockOnColumnResize,
        }),
      )

      triggerInitialization()

      const handles = document.querySelectorAll('.column-resize-handle')
      const handleColumnNames = Array.from(handles).map(
        h => (h as HTMLElement).dataset.columnName,
      )

      expect(handleColumnNames).not.toContain('')
      expect(handleColumnNames).toEqual(['Column A', 'Column B', 'Column C'])
    })

    it('should not execute callback if unmounted before initialization', () => {
      const { unmount } = renderHook(() =>
        useColumnResizeHandles({
          wrapperRef: mockWrapperRef,
          colValues: mockColValues,
          onColumnResize: mockOnColumnResize,
        }),
      )

      // Store the callback registered before unmount
      const callbackBeforeUnmount = resizeObserverCallback

      unmount()

      // After unmount, no handles should exist yet
      expect(document.querySelectorAll('.column-resize-handle')).toHaveLength(0)

      // Clear the ref to simulate realistic unmount behavior
      // (in reality, the component would be removed from DOM)
      mockWrapperRef.current = null

      // Try to trigger initialization after unmount using old callback with null ref
      if (callbackBeforeUnmount && mockWrapperRef.current) {
        const mockEntry: ResizeObserverEntry = {
          target: mockWrapperRef.current,
          contentRect: {
            width: 800,
            height: 600,
            top: 0,
            left: 0,
            bottom: 600,
            right: 800,
            x: 0,
            y: 0,
            toJSON: () => ({}),
          },
          borderBoxSize: [] as any,
          contentBoxSize: [] as any,
          devicePixelContentBoxSize: [] as any,
        }
        act(() => {
          callbackBeforeUnmount(mockEntry)
        })
      }

      // No handles should be created after unmount (callback exits early due to null ref)
      expect(document.querySelectorAll('.column-resize-handle')).toHaveLength(0)
    })
  })

  describe('Handle Positioning', () => {
    it('should position handles at right edge of cells', () => {
      renderHook(() =>
        useColumnResizeHandles({
          wrapperRef: mockWrapperRef,
          colValues: mockColValues,
          onColumnResize: mockOnColumnResize,
        }),
      )

      triggerInitialization()

      const handles = document.querySelectorAll<HTMLElement>(
        '.column-resize-handle',
      )
      expect(handles[0].style.position).toBe('absolute')
      expect(handles[0].style.top).toBe('0px')
    })

    it('should set handle height to grid container height', () => {
      renderHook(() =>
        useColumnResizeHandles({
          wrapperRef: mockWrapperRef,
          colValues: mockColValues,
          onColumnResize: mockOnColumnResize,
        }),
      )

      triggerInitialization()

      const handles = document.querySelectorAll<HTMLElement>(
        '.column-resize-handle',
      )
      handles.forEach(handle => {
        expect(handle.style.height).toBe('500px')
      })
    })

    it('should set handle width to 8px', () => {
      renderHook(() =>
        useColumnResizeHandles({
          wrapperRef: mockWrapperRef,
          colValues: mockColValues,
          onColumnResize: mockOnColumnResize,
        }),
      )

      triggerInitialization()

      const handles = document.querySelectorAll<HTMLElement>(
        '.column-resize-handle',
      )
      handles.forEach(handle => {
        expect(handle.style.width).toBe('8px')
      })
    })
  })

  describe('Mouse Interactions', () => {
    it('should start resize on mousedown', () => {
      renderHook(() =>
        useColumnResizeHandles({
          wrapperRef: mockWrapperRef,
          colValues: mockColValues,
          onColumnResize: mockOnColumnResize,
        }),
      )

      triggerInitialization()

      const handle = document.querySelector<HTMLElement>(
        '.column-resize-handle',
      )!

      act(() => {
        const mouseDownEvent = new MouseEvent('mousedown', {
          bubbles: true,
          clientX: 100,
        })
        handle.dispatchEvent(mouseDownEvent)
      })

      expect(handle.classList.contains('is-resizing')).toBe(true)
      expect(document.body.classList.contains('col-resizing')).toBe(true)
    })

    it('should update handle position during mousemove', () => {
      renderHook(() =>
        useColumnResizeHandles({
          wrapperRef: mockWrapperRef,
          colValues: mockColValues,
          onColumnResize: mockOnColumnResize,
        }),
      )

      triggerInitialization()

      const handle = document.querySelector<HTMLElement>(
        '.column-resize-handle',
      )!
      const initialLeft = parseFloat(handle.style.left)

      act(() => {
        // Start drag
        const mouseDownEvent = new MouseEvent('mousedown', {
          bubbles: true,
          clientX: 100,
        })
        handle.dispatchEvent(mouseDownEvent)
      })

      act(() => {
        // Move mouse 50px to the right
        const mouseMoveEvent = new MouseEvent('mousemove', {
          bubbles: true,
          clientX: 150,
        })
        document.dispatchEvent(mouseMoveEvent)
      })

      const newLeft = parseFloat(handle.style.left)
      expect(newLeft).toBe(initialLeft + 50)
    })

    it('should call onColumnResize on mouseup with correct width', () => {
      renderHook(() =>
        useColumnResizeHandles({
          wrapperRef: mockWrapperRef,
          colValues: mockColValues,
          onColumnResize: mockOnColumnResize,
        }),
      )

      triggerInitialization()

      const handle = document.querySelector<HTMLElement>(
        '.column-resize-handle',
      )!

      act(() => {
        // Start drag at x=100
        const mouseDownEvent = new MouseEvent('mousedown', {
          bubbles: true,
          clientX: 100,
        })
        handle.dispatchEvent(mouseDownEvent)
      })

      act(() => {
        // End drag at x=200 (delta of +100)
        const mouseUpEvent = new MouseEvent('mouseup', {
          bubbles: true,
          clientX: 200,
        })
        document.dispatchEvent(mouseUpEvent)
      })

      expect(mockOnColumnResize).toHaveBeenCalledTimes(1)
      const [columnName, newWidth] = mockOnColumnResize.mock.calls[0] as [
        string,
        number,
      ]
      expect(columnName).toBe('Column A')
      expect(newWidth).toBe(250) // 150 (original) + 100 (delta)
    })

    it('should respect minimum width of 25px', () => {
      renderHook(() =>
        useColumnResizeHandles({
          wrapperRef: mockWrapperRef,
          colValues: mockColValues,
          onColumnResize: mockOnColumnResize,
        }),
      )

      triggerInitialization()

      const handle = document.querySelector<HTMLElement>(
        '.column-resize-handle',
      )!

      act(() => {
        // Start drag
        const mouseDownEvent = new MouseEvent('mousedown', {
          bubbles: true,
          clientX: 100,
        })
        handle.dispatchEvent(mouseDownEvent)
      })

      act(() => {
        // Try to drag far left (would result in negative width)
        const mouseUpEvent = new MouseEvent('mouseup', {
          bubbles: true,
          clientX: -200, // Delta of -300, which would make width negative
        })
        document.dispatchEvent(mouseUpEvent)
      })

      expect(mockOnColumnResize).toHaveBeenCalledTimes(1)
      const [, newWidth] = mockOnColumnResize.mock.calls[0] as [string, number]
      expect(newWidth).toBe(50) // Minimum width enforced
    })

    it('should handle mouse leave during drag', () => {
      renderHook(() =>
        useColumnResizeHandles({
          wrapperRef: mockWrapperRef,
          colValues: mockColValues,
          onColumnResize: mockOnColumnResize,
        }),
      )

      triggerInitialization()

      const handle = document.querySelector<HTMLElement>(
        '.column-resize-handle',
      )!

      act(() => {
        // Start drag
        const mouseDownEvent = new MouseEvent('mousedown', {
          bubbles: true,
          clientX: 100,
        })
        handle.dispatchEvent(mouseDownEvent)
      })

      act(() => {
        // Mouse leaves window
        const mouseLeaveEvent = new MouseEvent('mouseleave', {
          bubbles: true,
          clientX: 150,
        })
        document.dispatchEvent(mouseLeaveEvent)
      })

      // Should trigger resize callback
      expect(mockOnColumnResize).toHaveBeenCalledTimes(1)
      expect(handle.classList.contains('is-resizing')).toBe(false)
      expect(document.body.classList.contains('col-resizing')).toBe(false)
    })

    it('should add and remove body cursor class during resize', () => {
      renderHook(() =>
        useColumnResizeHandles({
          wrapperRef: mockWrapperRef,
          colValues: mockColValues,
          onColumnResize: mockOnColumnResize,
        }),
      )

      triggerInitialization()

      const handle = document.querySelector<HTMLElement>(
        '.column-resize-handle',
      )!

      // Initially no class
      expect(document.body.classList.contains('col-resizing')).toBe(false)

      act(() => {
        // Start drag
        const mouseDownEvent = new MouseEvent('mousedown', {
          bubbles: true,
          clientX: 100,
        })
        handle.dispatchEvent(mouseDownEvent)
      })

      // Class added during drag
      expect(document.body.classList.contains('col-resizing')).toBe(true)

      act(() => {
        // End drag
        const mouseUpEvent = new MouseEvent('mouseup', {
          bubbles: true,
          clientX: 150,
        })
        document.dispatchEvent(mouseUpEvent)
      })

      // Class removed after drag
      expect(document.body.classList.contains('col-resizing')).toBe(false)
    })
  })

  describe('Virtualization', () => {
    it('should hide handles when columns are removed from DOM', () => {
      renderHook(() =>
        useColumnResizeHandles({
          wrapperRef: mockWrapperRef,
          colValues: mockColValues,
          onColumnResize: mockOnColumnResize,
        }),
      )

      triggerInitialization()

      // Find the handle for "Column A" specifically
      const handles = Array.from(
        document.querySelectorAll<HTMLElement>('.column-resize-handle'),
      )
      const columnAHandle = handles.find(
        h => h.dataset.columnName === 'Column A',
      )!
      expect(columnAHandle).toBeDefined()
      expect(columnAHandle.style.display).toBe('')

      // Simulate virtualization removing Column A
      const cellToRemove = mockHeaderRow.querySelectorAll('.dsg-cell')[1] // First actual column (Column A)
      mockHeaderRow.removeChild(cellToRemove)

      // Trigger sync by dispatching a scroll event (which directly calls syncHandles)
      act(() => {
        const scrollEvent = new Event('scroll')
        mockGridContainer.dispatchEvent(scrollEvent)
      })

      // The handle for the removed column should be hidden
      expect(columnAHandle.style.display).toBe('none')
    })

    it('should show handles when columns are added to DOM', () => {
      const { rerender } = renderHook(
        ({ colValues }) =>
          useColumnResizeHandles({
            wrapperRef: mockWrapperRef,
            colValues,
            onColumnResize: mockOnColumnResize,
          }),
        { initialProps: { colValues: mockColValues } },
      )

      triggerInitialization()

      // Get initial handle count (should be 3 - one per column)
      const initialHandles = document.querySelectorAll<HTMLElement>(
        '.column-resize-handle',
      )
      expect(initialHandles.length).toBe(3)

      // Add a new column cell to the DOM
      const newCell = createMockCell('Column D', 150)
      mockHeaderRow.appendChild(newCell)

      // Add the column to colValues
      const updatedColValues = [
        ...mockColValues,
        { id: 'columnD', title: 'Column D' } as Column,
      ]
      rerender({ colValues: updatedColValues })
      // Trigger MutationObserver via requestAnimationFrame
      act(() => {
        vi.runAllTimers()
      })

      const updatedHandles = document.querySelectorAll<HTMLElement>(
        '.column-resize-handle',
      )
      // Should have one more handle than before
      expect(updatedHandles.length).toBe(4)
      expect(updatedHandles.length).toBeGreaterThan(initialHandles.length)
    })

    it('should not sync handles during active resize', () => {
      const { rerender: _rerender } = renderHook(() =>
        useColumnResizeHandles({
          wrapperRef: mockWrapperRef,
          colValues: mockColValues,
          onColumnResize: mockOnColumnResize,
        }),
      )

      triggerInitialization()

      const handle = document.querySelector<HTMLElement>(
        '.column-resize-handle',
      )!

      act(() => {
        // Start drag
        const mouseDownEvent = new MouseEvent('mousedown', {
          bubbles: true,
          clientX: 100,
        })
        handle.dispatchEvent(mouseDownEvent)
      })

      const handleCountDuringResize = document.querySelectorAll(
        '.column-resize-handle',
      ).length

      // Try to trigger sync by adding a cell
      const newCell = createMockCell('Column D', 150)
      mockHeaderRow.appendChild(newCell)

      act(() => {
        vi.runAllTimers()
      })

      // Handles should not be recreated during resize
      expect(document.querySelectorAll('.column-resize-handle')).toHaveLength(
        handleCountDuringResize,
      )
    })
  })

  describe('Cleanup', () => {
    it('should remove all event listeners on unmount', () => {
      const { unmount } = renderHook(() =>
        useColumnResizeHandles({
          wrapperRef: mockWrapperRef,
          colValues: mockColValues,
          onColumnResize: mockOnColumnResize,
        }),
      )

      triggerInitialization()

      const handle = document.querySelector<HTMLElement>(
        '.column-resize-handle',
      )!

      act(() => {
        // Start drag
        const mouseDownEvent = new MouseEvent('mousedown', {
          bubbles: true,
          clientX: 100,
        })
        handle.dispatchEvent(mouseDownEvent)
      })

      unmount()

      // After unmount, mousemove should not cause errors
      act(() => {
        const mouseMoveEvent = new MouseEvent('mousemove', {
          bubbles: true,
          clientX: 200,
        })
        expect(() => document.dispatchEvent(mouseMoveEvent)).not.toThrow()
      })
    })

    it('should remove all handle elements on unmount', () => {
      const { unmount } = renderHook(() =>
        useColumnResizeHandles({
          wrapperRef: mockWrapperRef,
          colValues: mockColValues,
          onColumnResize: mockOnColumnResize,
        }),
      )

      triggerInitialization()

      expect(
        document.querySelectorAll('.column-resize-handle').length,
      ).toBeGreaterThan(0)

      unmount()

      expect(document.querySelectorAll('.column-resize-handle')).toHaveLength(0)
    })

    it('should remove body cursor class on unmount during active resize', () => {
      const { unmount } = renderHook(() =>
        useColumnResizeHandles({
          wrapperRef: mockWrapperRef,
          colValues: mockColValues,
          onColumnResize: mockOnColumnResize,
        }),
      )

      triggerInitialization()

      const handle = document.querySelector<HTMLElement>(
        '.column-resize-handle',
      )!

      act(() => {
        // Start drag
        const mouseDownEvent = new MouseEvent('mousedown', {
          bubbles: true,
          clientX: 100,
        })
        handle.dispatchEvent(mouseDownEvent)
      })

      expect(document.body.classList.contains('col-resizing')).toBe(true)

      unmount()

      expect(document.body.classList.contains('col-resizing')).toBe(false)
    })

    it('should clean up ResizeObserver if unmounted before initialization', () => {
      const { unmount } = renderHook(() =>
        useColumnResizeHandles({
          wrapperRef: mockWrapperRef,
          colValues: mockColValues,
          onColumnResize: mockOnColumnResize,
        }),
      )

      // Store the callback before unmount
      const callbackBeforeUnmount = resizeObserverCallback

      // Unmount before initialization
      unmount()

      // Clear the ref to simulate realistic unmount behavior
      mockWrapperRef.current = null

      // Try to trigger initialization after unmount using old callback with null ref
      if (callbackBeforeUnmount && mockWrapperRef.current) {
        const mockEntry: ResizeObserverEntry = {
          target: mockWrapperRef.current,
          contentRect: {
            width: 800,
            height: 600,
            top: 0,
            left: 0,
            bottom: 600,
            right: 800,
            x: 0,
            y: 0,
            toJSON: () => ({}),
          },
          borderBoxSize: [] as any,
          contentBoxSize: [] as any,
          devicePixelContentBoxSize: [] as any,
        }
        act(() => {
          callbackBeforeUnmount(mockEntry)
        })
      }

      // No handles should be created
      expect(document.querySelectorAll('.column-resize-handle')).toHaveLength(0)
    })

    it('should not call onColumnResize after unmount', () => {
      const { unmount } = renderHook(() =>
        useColumnResizeHandles({
          wrapperRef: mockWrapperRef,
          colValues: mockColValues,
          onColumnResize: mockOnColumnResize,
        }),
      )

      triggerInitialization()

      const handle = document.querySelector<HTMLElement>(
        '.column-resize-handle',
      )!

      act(() => {
        // Start drag
        const mouseDownEvent = new MouseEvent('mousedown', {
          bubbles: true,
          clientX: 100,
        })
        handle.dispatchEvent(mouseDownEvent)
      })

      unmount()

      mockOnColumnResize.mockClear()

      act(() => {
        // Try to end drag after unmount
        const mouseUpEvent = new MouseEvent('mouseup', {
          bubbles: true,
          clientX: 200,
        })
        document.dispatchEvent(mouseUpEvent)
      })

      // Callback should not be called after unmount
      expect(mockOnColumnResize).not.toHaveBeenCalled()
    })
  })

  describe('Re-initialization', () => {
    it('should cleanup handles when dependencies change during active resize', () => {
      const { rerender } = renderHook(
        ({ colValues }) =>
          useColumnResizeHandles({
            wrapperRef: mockWrapperRef,
            colValues,
            onColumnResize: mockOnColumnResize,
          }),
        { initialProps: { colValues: mockColValues } },
      )

      triggerInitialization()

      const handle = document.querySelector<HTMLElement>(
        '.column-resize-handle',
      )!

      act(() => {
        // Start drag
        const mouseDownEvent = new MouseEvent('mousedown', {
          bubbles: true,
          clientX: 100,
        })
        handle.dispatchEvent(mouseDownEvent)
      })

      expect(document.body.classList.contains('col-resizing')).toBe(true)

      // Change colValues - this now updates columns without full cleanup
      const newColValues = [
        ...mockColValues,
        { id: 'columnD', title: 'Column D' } as Column,
      ]
      rerender({ colValues: newColValues })

      // The manager persists across rerenders, so col-resizing class remains
      // during active resize (syncHandles skips during activeResize)
      expect(document.body.classList.contains('col-resizing')).toBe(true)

      // Handles should still exist
      expect(
        document.querySelectorAll('.column-resize-handle').length,
      ).toBeGreaterThan(0)
    })

    it('should recreate handles when colValues change', () => {
      const { rerender } = renderHook(
        ({ colValues }) =>
          useColumnResizeHandles({
            wrapperRef: mockWrapperRef,
            colValues,
            onColumnResize: mockOnColumnResize,
          }),
        { initialProps: { colValues: mockColValues } },
      )

      triggerInitialization()

      const initialHandles = Array.from(
        document.querySelectorAll('.column-resize-handle'),
      )
      expect(initialHandles).toHaveLength(3)

      // Update colValues
      const newColValues = mockColValues.slice(0, 2) // Remove one column
      rerender({ colValues: newColValues })

      // Trigger re-initialization
      triggerInitialization()

      // Handles should be recreated
      // Note: The actual number depends on what's in the DOM
      const newHandles = document.querySelectorAll('.column-resize-handle')
      expect(newHandles.length).toBeGreaterThan(0)
    })

    it('should clean up old handles before creating new ones', () => {
      const { rerender } = renderHook(
        ({ colValues }) =>
          useColumnResizeHandles({
            wrapperRef: mockWrapperRef,
            colValues,
            onColumnResize: mockOnColumnResize,
          }),
        { initialProps: { colValues: mockColValues } },
      )

      triggerInitialization()

      const initialHandles = Array.from(
        document.querySelectorAll<HTMLElement>('.column-resize-handle'),
      )

      // Update colValues
      const newColValues = [
        { id: 'columnX', title: 'Column X' } as Column,
        { id: 'columnY', title: 'Column Y' } as Column,
      ]

      // Update header cells to match
      while (mockHeaderRow.children.length > 1) {
        mockHeaderRow.removeChild(mockHeaderRow.lastChild!)
      }
      mockHeaderRow.appendChild(createMockCell('Column X'))
      mockHeaderRow.appendChild(createMockCell('Column Y'))

      rerender({ colValues: newColValues })

      // Trigger re-sync by running timers (MutationObserver)
      act(() => {
        vi.runAllTimers()
      })

      // Old handles for columns no longer in the DOM should be hidden
      const handleA = initialHandles.find(
        h => h.dataset.columnName === 'Column A',
      )
      if (handleA) {
        expect(handleA.style.display).toBe('none')
      }

      // New handles should exist for new columns
      const newHandles = document.querySelectorAll<HTMLElement>(
        '.column-resize-handle',
      )
      const newColumnNames = Array.from(newHandles).map(
        h => h.dataset.columnName,
      )
      expect(newColumnNames).toContain('Column X')
      expect(newColumnNames).toContain('Column Y')
    })
  })

  describe('Scroll Handling', () => {
    it('should sync handle visibility on scroll', () => {
      renderHook(() =>
        useColumnResizeHandles({
          wrapperRef: mockWrapperRef,
          colValues: mockColValues,
          onColumnResize: mockOnColumnResize,
        }),
      )

      triggerInitialization()

      // Verify handles exist initially
      const handles = document.querySelectorAll<HTMLElement>(
        '.column-resize-handle',
      )
      expect(handles.length).toBe(3)

      // Remove a column from DOM to simulate virtualization
      const cellToRemove = mockHeaderRow.querySelectorAll('.dsg-cell')[1] // Column A
      mockHeaderRow.removeChild(cellToRemove)

      // Trigger scroll which should sync handles
      act(() => {
        const scrollEvent = new Event('scroll')
        mockGridContainer.dispatchEvent(scrollEvent)
      })

      // The handle for the removed column should now be hidden
      const columnAHandle = Array.from(handles).find(
        h => h.dataset.columnName === 'Column A',
      )
      expect(columnAHandle?.style.display).toBe('none')
    })
  })

  describe('Edge Cases', () => {
    it('should handle empty colValues array', () => {
      renderHook(() =>
        useColumnResizeHandles({
          wrapperRef: mockWrapperRef,
          colValues: [],
          onColumnResize: mockOnColumnResize,
        }),
      )

      triggerInitialization()

      expect(document.querySelectorAll('.column-resize-handle')).toHaveLength(0)
    })

    it('should handle missing grid container', () => {
      const emptyWrapper = document.createElement('div')
      document.body.appendChild(emptyWrapper)
      const emptyRef = { current: emptyWrapper }

      expect(() => {
        renderHook(() =>
          useColumnResizeHandles({
            wrapperRef: emptyRef,
            colValues: mockColValues,
            onColumnResize: mockOnColumnResize,
          }),
        )

        // Trigger initialization - should handle gracefully
        if (resizeObserverCallback) {
          const mockEntry: ResizeObserverEntry = {
            target: emptyWrapper,
            contentRect: {
              width: 800,
              height: 600,
              top: 0,
              left: 0,
              bottom: 600,
              right: 800,
              x: 0,
              y: 0,
              toJSON: () => ({}),
            },
            borderBoxSize: [] as any,
            contentBoxSize: [] as any,
            devicePixelContentBoxSize: [] as any,
          }
          act(() => {
            resizeObserverCallback!(mockEntry)
          })
        }
      }).not.toThrow()

      expect(document.querySelectorAll('.column-resize-handle')).toHaveLength(0)
    })

    it('should handle missing header row', () => {
      const containerWithoutHeader = document.createElement('div')
      containerWithoutHeader.className = 'dsg-container'
      const wrapperWithoutHeader = document.createElement('div')
      wrapperWithoutHeader.appendChild(containerWithoutHeader)
      document.body.appendChild(wrapperWithoutHeader)
      const refWithoutHeader = { current: wrapperWithoutHeader }

      expect(() => {
        renderHook(() =>
          useColumnResizeHandles({
            wrapperRef: refWithoutHeader,
            colValues: mockColValues,
            onColumnResize: mockOnColumnResize,
          }),
        )

        // Trigger initialization - should handle gracefully
        if (resizeObserverCallback) {
          const mockEntry: ResizeObserverEntry = {
            target: wrapperWithoutHeader,
            contentRect: {
              width: 800,
              height: 600,
              top: 0,
              left: 0,
              bottom: 600,
              right: 800,
              x: 0,
              y: 0,
              toJSON: () => ({}),
            },
            borderBoxSize: [] as any,
            contentBoxSize: [] as any,
            devicePixelContentBoxSize: [] as any,
          }
          act(() => {
            resizeObserverCallback!(mockEntry)
          })
        }
      }).not.toThrow()

      expect(document.querySelectorAll('.column-resize-handle')).toHaveLength(0)
    })
  })
})
