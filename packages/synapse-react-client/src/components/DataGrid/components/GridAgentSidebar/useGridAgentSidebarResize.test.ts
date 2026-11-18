import { GRID_AGENT_SIDEBAR_WIDTH_LOCALSTORAGE_KEY } from '@/utils/SynapseConstants'
import { act, renderHook } from '@testing-library/react'
import {
  clampSidebarWidth,
  GRID_AGENT_SIDEBAR_DEFAULT_WIDTH,
  GRID_AGENT_SIDEBAR_MIN_WIDTH,
  useGridAgentSidebarResize,
} from './useGridAgentSidebarResize'

const POINTER_ID = 1
const OTHER_POINTER_ID = 2

function getStoredWidth() {
  const stored = localStorage.getItem(GRID_AGENT_SIDEBAR_WIDTH_LOCALSTORAGE_KEY)
  return stored === null ? null : (JSON.parse(stored) as number)
}

function storeWidth(width: number) {
  localStorage.setItem(GRID_AGENT_SIDEBAR_WIDTH_LOCALSTORAGE_KEY, String(width))
}

function renderResize(layoutWidth = 0) {
  return renderHook(
    ({ layoutWidth }) => useGridAgentSidebarResize(layoutWidth),
    { initialProps: { layoutWidth } },
  )
}

describe('useGridAgentSidebarResize', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('uses the default width when no width is stored', () => {
    const { result } = renderResize()

    expect(result.current.width).toBe(GRID_AGENT_SIDEBAR_DEFAULT_WIDTH)
  })

  it('restores the stored width', () => {
    storeWidth(520)

    const { result } = renderResize()

    expect(result.current.width).toBe(520)
  })

  it.each(['', '0', '100', '"wide"', '{}', 'null', 'not json'])(
    'uses the default width when the stored width is "%s"',
    stored => {
      localStorage.setItem(GRID_AGENT_SIDEBAR_WIDTH_LOCALSTORAGE_KEY, stored)

      const { result } = renderResize()

      expect(result.current.width).toBe(GRID_AGENT_SIDEBAR_DEFAULT_WIDTH)
    },
  )

  it('has no maximum until the layout is measured', () => {
    const { result } = renderResize(0)

    expect(result.current.maxWidth).toBeUndefined()
  })

  it('shows a stored width the layout clamps at the maximum, keeps it stored, and shows it again in a wide enough layout', () => {
    storeWidth(5000)
    const { result, rerender } = renderResize(1200)

    expect(result.current.width).toBe(600)
    expect(result.current.maxWidth).toBe(600)
    expect(getStoredWidth()).toBe(5000)

    rerender({ layoutWidth: 12000 })

    expect(result.current.width).toBe(5000)
  })

  describe('dragging', () => {
    it('follows the pointer, and saves the width only when the drag ends', () => {
      const { result } = renderResize()

      act(() => result.current.startDrag(POINTER_ID, 1000))
      act(() => result.current.dragTo(POINTER_ID, 900))

      expect(result.current.isDragging).toBe(true)
      expect(result.current.width).toBe(500)
      expect(getStoredWidth()).toBeNull()

      act(() => result.current.endDrag(POINTER_ID))

      expect(result.current.isDragging).toBe(false)
      expect(result.current.width).toBe(500)
      expect(getStoredWidth()).toBe(500)
    })

    it('saves the last position when the drag ends before its last move renders', () => {
      const { result } = renderResize()
      act(() => result.current.startDrag(POINTER_ID, 1000))

      // A browser can deliver the last move and the release in the same task
      act(() => {
        result.current.dragTo(POINTER_ID, 900)
        result.current.endDrag(POINTER_ID)
      })

      expect(getStoredWidth()).toBe(500)
      expect(result.current.width).toBe(500)
    })

    it('saves nothing for a drag that does not change the width, so a stored width the layout clamps is kept', () => {
      storeWidth(800)
      const { result } = renderResize(1200)

      act(() => result.current.startDrag(POINTER_ID, 1000))
      act(() => result.current.endDrag(POINTER_ID))

      expect(getStoredWidth()).toBe(800)
      expect(result.current.width).toBe(600)
    })

    it('does not shrink below the minimum width', () => {
      const { result } = renderResize()

      act(() => result.current.startDrag(POINTER_ID, 1000))
      act(() => result.current.dragTo(POINTER_ID, 1500))
      act(() => result.current.endDrag(POINTER_ID))

      expect(getStoredWidth()).toBe(GRID_AGENT_SIDEBAR_MIN_WIDTH)
    })

    it('does not widen past half of the layout', () => {
      const { result } = renderResize(1200)

      act(() => result.current.startDrag(POINTER_ID, 1000))
      act(() => result.current.dragTo(POINTER_ID, 0))
      act(() => result.current.endDrag(POINTER_ID))

      expect(getStoredWidth()).toBe(600)
    })

    it('follows only the pointer that started the drag', () => {
      const { result } = renderResize()
      act(() => result.current.startDrag(POINTER_ID, 1000))

      act(() => {
        result.current.startDrag(OTHER_POINTER_ID, 500)
        result.current.dragTo(OTHER_POINTER_ID, 0)
        result.current.endDrag(OTHER_POINTER_ID)
      })

      expect(result.current.isDragging).toBe(true)
      expect(result.current.width).toBe(GRID_AGENT_SIDEBAR_DEFAULT_WIDTH)

      act(() => result.current.dragTo(POINTER_ID, 900))
      act(() => result.current.endDrag(POINTER_ID))

      expect(getStoredWidth()).toBe(500)
    })

    it('ends the drag even when the width cannot be saved', () => {
      vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
        throw new DOMException('The quota was exceeded', 'QuotaExceededError')
      })
      const { result } = renderResize()
      act(() => result.current.startDrag(POINTER_ID, 1000))
      act(() => result.current.dragTo(POINTER_ID, 900))

      act(() => {
        expect(() => result.current.endDrag(POINTER_ID)).toThrow(DOMException)
      })

      expect(result.current.isDragging).toBe(false)
    })

    it('shows the resize cursor and blocks text selection on the page until the drag ends', () => {
      const { result } = renderResize()

      act(() => result.current.startDrag(POINTER_ID, 1000))

      expect(document.body.style.cursor).toBe('col-resize')
      expect(document.body.style.userSelect).toBe('none')

      act(() => result.current.endDrag(POINTER_ID))

      expect(document.body.style.cursor).toBe('')
      expect(document.body.style.userSelect).toBe('')
    })
  })

  describe('resizing by a step', () => {
    it('widens and narrows the sidebar, and saves the width', () => {
      const { result } = renderResize()

      act(() => result.current.resizeBy(16))

      expect(result.current.width).toBe(GRID_AGENT_SIDEBAR_DEFAULT_WIDTH + 16)
      expect(getStoredWidth()).toBe(GRID_AGENT_SIDEBAR_DEFAULT_WIDTH + 16)

      act(() => result.current.resizeBy(-32))

      expect(getStoredWidth()).toBe(GRID_AGENT_SIDEBAR_DEFAULT_WIDTH - 16)
    })

    it('does not shrink below the minimum width', () => {
      storeWidth(GRID_AGENT_SIDEBAR_MIN_WIDTH)
      const { result } = renderResize()

      act(() => result.current.resizeBy(-16))

      expect(result.current.width).toBe(GRID_AGENT_SIDEBAR_MIN_WIDTH)
      expect(getStoredWidth()).toBe(GRID_AGENT_SIDEBAR_MIN_WIDTH)
    })

    it('keeps a stored width the layout clamps when widened at the maximum', () => {
      storeWidth(800)
      const { result } = renderResize(1200)

      act(() => result.current.resizeBy(16))

      expect(result.current.width).toBe(600)
      expect(getStoredWidth()).toBe(800)
    })
  })
})

describe('clampSidebarWidth', () => {
  it.each([
    { width: 500, layoutWidth: 1200, expected: 500 },
    { width: 900, layoutWidth: 1200, expected: 600 },
    { width: 100, layoutWidth: 1200, expected: GRID_AGENT_SIDEBAR_MIN_WIDTH },
    // When half of the layout is narrower than the minimum, the minimum wins
    { width: 500, layoutWidth: 600, expected: GRID_AGENT_SIDEBAR_MIN_WIDTH },
    // An unmeasured layout has no maximum
    { width: 2000, layoutWidth: 0, expected: 2000 },
  ])(
    'clamps $width to $expected in a $layoutWidth px layout',
    ({ width, layoutWidth, expected }) => {
      expect(clampSidebarWidth(width, layoutWidth)).toBe(expected)
    },
  )
})
