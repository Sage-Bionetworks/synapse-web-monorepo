import { useEffect, useRef } from 'react'
import { Column } from '@sage-bionetworks/react-datasheet-grid'
import { useResizeObserver } from '@react-hookz/web'

// Extended HTMLDivElement with custom properties for resize handles
interface ResizeHandleElement extends HTMLDivElement {
  __cellElement?: HTMLElement
  __columnName?: string
}

type UseColumnResizeHandlesProps = {
  wrapperRef: React.RefObject<HTMLDivElement | null>
  colValues: Column[]
  onColumnResize: (columnName: string, newWidth: number) => void
}

interface ResizeState {
  columnName: string
  startX: number
  startWidth: number
  handle: HTMLDivElement
  initialLeft: number
}

/**
 * Encapsulates all column resize handle logic and state management.
 * Manages handle creation, positioning, mouse interactions, and cleanup.
 */
class ColumnResizeManager {
  private static readonly COLUMN_MIN_WIDTH_PX = 50

  private handlesMap = new Map<string, ResizeHandleElement>()
  private cleanupFunctions: Array<(() => void) | HTMLDivElement> = []
  private activeResize: ResizeState | null = null
  private gridContainer: HTMLElement | null = null
  private headerRow: Element | null = null
  private observer: MutationObserver | null = null

  constructor(
    private colValues: Column[],
    private onColumnResize: (name: string, width: number) => void,
  ) {}

  /**
   * Update the column values and callback without reinitializing.
   */
  updateColumns(
    colValues: Column[],
    onColumnResize: (name: string, width: number) => void,
  ): void {
    this.colValues = colValues
    this.onColumnResize = onColumnResize
    // Resync handles with new column data
    this.syncHandles()
  }

  /**
   * Initialize the manager by finding grid elements and setting up event listeners.
   * Returns true if initialization was successful, false otherwise.
   */
  initialize(wrapperRef: HTMLDivElement): boolean {
    const gridContainer = wrapperRef.querySelector(
      '.dsg-container',
    ) as HTMLElement

    if (!gridContainer) {
      return false
    }

    const headerRow = gridContainer.querySelector('.dsg-row.dsg-row-header')

    if (!headerRow) {
      return false
    }

    this.gridContainer = gridContainer
    this.headerRow = headerRow

    this.setupEventListeners()
    this.syncHandles()

    return true
  }

  /**
   * Creates a new resize handle element with mousedown listener.
   */
  private createNewHandle(columnName: string): ResizeHandleElement {
    if (!this.gridContainer) {
      throw new Error('Cannot create handle without grid container')
    }

    const handle = document.createElement('div') as ResizeHandleElement
    handle.className = 'column-resize-handle'
    handle.dataset.columnName = columnName
    handle.style.position = 'absolute'
    handle.style.top = '0'
    handle.style.width = '8px'
    handle.style.cursor = 'col-resize'
    handle.style.pointerEvents = 'auto'
    handle.style.zIndex = '1000'

    const onMouseDown = (e: MouseEvent) => this.handleMouseDown(e, handle)
    handle.addEventListener('mousedown', onMouseDown)

    this.cleanupFunctions.push(() =>
      handle.removeEventListener('mousedown', onMouseDown),
    )

    this.gridContainer.appendChild(handle)
    this.cleanupFunctions.push(handle)
    this.handlesMap.set(columnName, handle)

    return handle
  }

  /**
   * Creates or updates a handle for a given cell element.
   */
  private createOrUpdateHandle(
    cellElement: HTMLElement,
    columnIndex: number,
  ): void {
    const columnName = this.colValues[columnIndex]?.title as string
    if (!columnName || !this.gridContainer) return

    let handle = this.handlesMap.get(columnName)

    if (!handle) {
      handle = this.createNewHandle(columnName)
    }

    this.updateHandlePosition(handle, cellElement)
  }

  /**
   * Updates the position and size of a handle based on its cell element.
   */
  private updateHandlePosition(
    handle: ResizeHandleElement,
    cellElement: HTMLElement,
  ): void {
    if (!this.gridContainer) return

    const gridHeight = this.gridContainer.scrollHeight
    const left = cellElement.offsetLeft + cellElement.offsetWidth - 3

    handle.__cellElement = cellElement
    handle.__columnName = handle.dataset.columnName
    handle.style.left = `${left}px`
    handle.style.height = `${gridHeight}px`
    handle.style.display = '' // Ensure visible
  }

  /**
   * Handles mousedown event on a resize handle to initiate dragging.
   */
  private handleMouseDown(e: MouseEvent, handle: ResizeHandleElement): void {
    e.preventDefault()
    e.stopPropagation()

    // Read the column info fresh at mousedown time
    const currentColumnName = handle.__columnName
    const currentCellElement = handle.__cellElement

    if (!currentColumnName || !currentCellElement) return

    // Get current width and position at the time of mousedown
    const currentLeft = parseFloat(handle.style.left)

    this.activeResize = {
      columnName: currentColumnName,
      startX: e.clientX,
      startWidth: currentCellElement.offsetWidth,
      handle,
      initialLeft: currentLeft,
    }

    handle.classList.add('is-resizing')
    document.body.classList.add('col-resizing')
  }

  /**
   * Handles mousemove event to update handle position during drag.
   */
  private handleMouseMove = (e: MouseEvent): void => {
    if (!this.activeResize) return

    const { startX, handle, initialLeft } = this.activeResize
    const deltaX = e.clientX - startX
    handle.style.left = `${initialLeft + deltaX}px`
  }

  /**
   * Handles mouseup/mouseleave to finalize the resize operation.
   */
  private handleMouseUp = (e: MouseEvent): void => {
    if (!this.activeResize) return

    const { columnName, startX, startWidth, handle } = this.activeResize
    const deltaX = e.clientX - startX
    const newWidth = Math.max(
      ColumnResizeManager.COLUMN_MIN_WIDTH_PX,
      startWidth + deltaX,
    )

    handle.classList.remove('is-resizing')
    document.body.classList.remove('col-resizing')
    this.activeResize = null

    // Only update state when drag is complete
    this.onColumnResize(columnName, newWidth)
  }

  /**
   * Synchronizes handles with currently visible columns in the header.
   * Handles virtualization by showing/hiding handles as columns appear/disappear.
   */
  private syncHandles = (): void => {
    if (this.activeResize || !this.headerRow) return // Don't sync during resize

    const headerCells = this.headerRow.querySelectorAll('.dsg-cell')
    if (headerCells.length <= 1) return

    // Track which columns are currently visible
    const visibleColumns = new Set<string>()

    // Update or create handles for visible columns
    headerCells.forEach((cell: Element, index: number) => {
      if (index === 0) return // Skip gutter column

      const cellElement = cell as HTMLElement

      // Get the column name from the cell's text content
      // This is more reliable than using DOM index with virtualization
      const cellText = cellElement.textContent?.trim() || ''

      // Find the actual column index in colValues by matching the title
      const actualColumnIndex = this.colValues.findIndex(
        col => col.title === cellText,
      )

      if (actualColumnIndex !== -1) {
        const columnName = this.colValues[actualColumnIndex]?.title as string
        visibleColumns.add(columnName)
        this.createOrUpdateHandle(cellElement, actualColumnIndex)
      }
    })

    // Hide handles for columns that are no longer visible (virtualized out)
    this.handlesMap.forEach((handle, columnName) => {
      if (!visibleColumns.has(columnName)) {
        handle.style.display = 'none'
      }
    })
  }

  /**
   * Sets up all event listeners for mouse interactions, scroll, and virtualization.
   */
  private setupEventListeners(): void {
    if (!this.gridContainer || !this.headerRow) return

    // Global mouse event listeners
    document.addEventListener('mousemove', this.handleMouseMove)
    document.addEventListener('mouseup', this.handleMouseUp)
    document.addEventListener('mouseleave', this.handleMouseUp)

    // Scroll listener for updating handle positions
    this.gridContainer.addEventListener('scroll', this.syncHandles)

    // MutationObserver to detect when columns are added/removed due to virtualization
    this.observer = new MutationObserver(() => {
      // Debounce mutations to avoid excessive syncs
      requestAnimationFrame(() => {
        this.syncHandles()
      })
    })

    this.observer.observe(this.headerRow, {
      childList: true, // Watch for added/removed columns
      subtree: true,
    })

    // Register cleanup functions
    this.cleanupFunctions.push(() => {
      document.removeEventListener('mousemove', this.handleMouseMove)
      document.removeEventListener('mouseup', this.handleMouseUp)
      document.removeEventListener('mouseleave', this.handleMouseUp)
      this.gridContainer?.removeEventListener('scroll', this.syncHandles)
      this.observer?.disconnect()
    })
  }

  /**
   * Cleans up all handles, event listeners, and resets state.
   */
  cleanup(): void {
    // Ensure cursor class is removed
    document.body.classList.remove('col-resizing')

    // Reset active resize state
    if (this.activeResize) {
      this.activeResize.handle?.classList.remove('is-resizing')
      this.activeResize = null
    }

    // Run all cleanup functions and remove handles
    this.cleanupFunctions.forEach(item => {
      if (typeof item === 'function') {
        item()
      } else {
        // It's a handle element, remove it
        item.remove()
      }
    })

    this.cleanupFunctions = []
    this.handlesMap.clear()
    this.gridContainer = null
    this.headerRow = null
    this.observer = null
  }
}

/**
 * Custom hook that manages interactive column resize handles for a data grid.
 * Creates, positions, and updates resize handles that allow users to drag column borders.
 * Handles virtualization, scrolling, and proper cleanup.
 */
export function useColumnResizeHandles({
  wrapperRef,
  colValues,
  onColumnResize,
}: UseColumnResizeHandlesProps) {
  const managerRef = useRef<ColumnResizeManager | null>(null)

  // Use react-hookz useResizeObserver to detect when wrapper is rendered and sized
  useResizeObserver(wrapperRef, entry => {
    if (!wrapperRef.current || !entry || entry.contentRect.height === 0) {
      return
    }

    // Initialize manager if not already done
    if (!managerRef.current) {
      const manager = new ColumnResizeManager(colValues, onColumnResize)
      const success = manager.initialize(wrapperRef.current)
      if (success) {
        managerRef.current = manager
      }
    }
  })

  useEffect(() => {
    // Update columns when they change instead of full reinitialization
    if (managerRef.current) {
      managerRef.current.updateColumns(colValues, onColumnResize)
    }
  }, [colValues, onColumnResize])

  useEffect(() => {
    // Cleanup on unmount
    return () => {
      managerRef.current?.cleanup()
      managerRef.current = null
    }
  }, [])
}
