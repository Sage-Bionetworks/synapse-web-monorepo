import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { CellComponent, CellProps, Column } from '../types'
import cx from 'classnames'
import { useFirstRender } from '../hooks/useFirstRender'

type TextColumnOptions<T> = {
  placeholder?: string
  alignRight?: boolean
  // When true, data is updated as the user types, otherwise it is only updated on blur. Default to true
  continuousUpdates?: boolean
  // Value to use when deleting the cell
  deletedValue?: T
  // Parse what the user types
  parseUserInput?: (value: string) => T
  // Format the value of the input when it is blurred
  formatBlurredInput?: (value: T) => string
  // Format the value of the input when it gets focused
  formatInputOnFocus?: (value: T) => string
  // Format the value when copy
  formatForCopy?: (value: T) => string
  // Parse the pasted value
  parsePastedValue?: (value: string) => T
}

type TextColumnData<T> = {
  placeholder?: string
  alignRight: boolean
  continuousUpdates: boolean
  parseUserInput: (value: string) => T
  formatBlurredInput: (value: T) => string
  formatInputOnFocus: (value: T) => string
}

type Rect = {
  top: number
  left: number
  width: number
  height: number
  maxWidth: number
  maxHeight: number
}

// Mirrors the defaults style.css sets on --dsg-cell-expanded-max-width/
// height — used as the fallback if that CSS variable can't be read (see
// below for why that can happen).
const DEFAULT_MAX_WIDTH = 480
const DEFAULT_MAX_HEIGHT = 300

// Keeps the popup from ever growing past the edge of the viewport
export const clampMaxSize = (
  cellSize: number,
  cellPosition: number,
  configuredMax: number,
  viewportSize: number,
  margin: number,
): number =>
  Math.max(
    0,
    Math.min(
      Math.max(cellSize, configuredMax),
      viewportSize - cellPosition - margin,
    ),
  )

const TextComponent = React.memo<
  CellProps<string | null, TextColumnData<string | null>>
>(
  ({
    active,
    focus,
    rowData,
    setRowData,
    columnData: {
      placeholder,
      alignRight,
      formatInputOnFocus,
      formatBlurredInput,
      parseUserInput,
      continuousUpdates,
    },
  }) => {
    const ref = useRef<HTMLTextAreaElement>(null)
    const firstRender = useFirstRender()

    const [anchor, setAnchor] = useState<HTMLDivElement | null>(null)
    const [popupRect, setPopupRect] = useState<Rect | null>(null)

    useLayoutEffect(() => {
      if (!active || !anchor) {
        setPopupRect(null)
        return
      }

      const rootStyle = getComputedStyle(document.documentElement)
      const configuredMaxWidth =
        parseFloat(
          rootStyle.getPropertyValue('--dsg-cell-expanded-max-width'),
        ) || DEFAULT_MAX_WIDTH
      const configuredMaxHeight =
        parseFloat(
          rootStyle.getPropertyValue('--dsg-cell-expanded-max-height'),
        ) || DEFAULT_MAX_HEIGHT
      // Small buffer so the popup never touches the very edge of the window.
      const viewportMargin = 8

      let rafId: number
      const update = () => {
        const rect = anchor.getBoundingClientRect()
        const maxWidth = clampMaxSize(
          rect.width,
          rect.left,
          configuredMaxWidth,
          window.innerWidth,
          viewportMargin,
        )
        const maxHeight = clampMaxSize(
          rect.height,
          rect.top,
          configuredMaxHeight,
          window.innerHeight,
          viewportMargin,
        )
        setPopupRect(prev =>
          prev &&
          prev.top === rect.top &&
          prev.left === rect.left &&
          prev.width === rect.width &&
          prev.height === rect.height &&
          prev.maxWidth === maxWidth &&
          prev.maxHeight === maxHeight
            ? prev
            : {
                top: rect.top,
                left: rect.left,
                width: rect.width,
                height: rect.height,
                maxWidth,
                maxHeight,
              },
        )
        rafId = requestAnimationFrame(update)
      }
      update()

      return () => cancelAnimationFrame(rafId)
    }, [active, anchor])

    // We create refs for async access so we don't have to add it to the useEffect dependencies
    const asyncRef = useRef({
      rowData,
      formatInputOnFocus,
      formatBlurredInput,
      setRowData,
      parseUserInput,
      continuousUpdates,
      firstRender,
      // Timestamp of last focus (when focus becomes true) and last change (input change)
      // used to prevent un-necessary updates when value was not changed
      focusedAt: 0,
      changedAt: 0,
      // This allows us to keep track of whether or not the user blurred the input using the Esc key
      // If the Esc key is used we do not update the row's value (only relevant when continuousUpdates is false)
      escPressed: false,
      currentValue: formatBlurredInput(rowData),
    })
    asyncRef.current = {
      rowData,
      formatInputOnFocus,
      formatBlurredInput,
      setRowData,
      parseUserInput,
      continuousUpdates,
      firstRender,
      // Keep the same values across renders
      focusedAt: asyncRef.current.focusedAt,
      changedAt: asyncRef.current.changedAt,
      escPressed: asyncRef.current.escPressed,
      currentValue: asyncRef.current.currentValue,
    }

    useLayoutEffect(() => {
      // When the cell gains focus we make sure to immediately select the text in the input:
      // - If the user gains focus by typing, it will replace the existing text, as expected
      // - If the user gains focus by clicking or pressing Enter, the text will be preserved and selected
      if (focus) {
        if (ref.current) {
          // Make sure to first format the input
          const formatted = asyncRef.current.formatInputOnFocus(
            asyncRef.current.rowData,
          )
          ref.current.value = formatted
          asyncRef.current.currentValue = formatted
          ref.current.focus()
          ref.current.select()
        }

        // We immediately reset the escPressed
        asyncRef.current.escPressed = false
        // Save current timestamp
        asyncRef.current.focusedAt = Date.now()
      }
      // When the cell looses focus (by pressing Esc, Enter, clicking away...) we make sure to blur the input
      // Otherwise the user would still see the cursor blinking
      else {
        // Update the row's value on blur only if the user did not press escape (only relevant when continuousUpdates is false)
        if (
          !asyncRef.current.escPressed &&
          !asyncRef.current.continuousUpdates &&
          !asyncRef.current.firstRender &&
          // Make sure that focus was gained more than 10 ms ago, used to prevent flickering
          asyncRef.current.changedAt >= asyncRef.current.focusedAt
        ) {
          asyncRef.current.setRowData(
            asyncRef.current.parseUserInput(asyncRef.current.currentValue),
          )
        }
        ref.current?.blur()
      }
    }, [focus])

    useEffect(() => {
      if (!focus && ref.current) {
        // On blur or when the data changes, format it for display
        const formatted = asyncRef.current.formatBlurredInput(rowData)
        ref.current.value = formatted
        asyncRef.current.currentValue = formatted
      }
    }, [focus, rowData])

    const floating = Boolean(focus && popupRect)

    const textarea = (
      <textarea
        // A <textarea> (rather than <input>) is what lets the expanded
        // value wrap onto multiple lines instead of just growing wider.
        rows={1}
        // We use an uncontrolled component for better performance
        defaultValue={formatBlurredInput(rowData)}
        className={cx(
          'dsg-input',
          alignRight && 'dsg-input-align-right',
          floating && 'dsg-input-floating',
        )}
        placeholder={active ? placeholder : undefined}
        // Important to prevent any undesired "tabbing"
        tabIndex={-1}
        ref={ref}
        // Make sure that while the cell is not focus, the user cannot interact with the input
        // The cursor will not change to "I", the style of the input will not change,
        // and the user cannot click and edit the input (this part is handled by DataSheetGrid itself)
        style={
          popupRect
            ? {
                pointerEvents: focus ? 'auto' : 'none',
                minWidth: floating
                  ? Math.min(popupRect.width, popupRect.maxWidth)
                  : popupRect.width,
                ...(floating
                  ? {
                      maxWidth: popupRect.maxWidth,
                      maxHeight: popupRect.maxHeight,
                    }
                  : { width: popupRect.width }),
              }
            : { pointerEvents: focus ? 'auto' : 'none' }
        }
        onChange={e => {
          asyncRef.current.changedAt = Date.now()
          asyncRef.current.currentValue = e.target.value

          // Only update the row's value as the user types if continuousUpdates is true
          if (continuousUpdates) {
            setRowData(parseUserInput(e.target.value))
          }
        }}
        onKeyDown={e => {
          // Track when user presses the Esc key
          if (e.key === 'Escape') {
            asyncRef.current.escPressed = true
          }

          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
          }
        }}
      />
    )

    const popup = popupRect && (
      <div
        className={cx(focus && 'dsg-input-floating-wrapper')}
        style={{
          position: 'fixed',
          top: popupRect.top,
          left: popupRect.left,
          minHeight: popupRect.height,
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          pointerEvents: 'none',
        }}
      >
        {textarea}
      </div>
    )

    return (
      <>
        <div ref={setAnchor} className="dsg-input-anchor" />
        {anchor &&
          createPortal(
            active ? popup : textarea,
            active ? document.body : anchor,
          )}
      </>
    )
  },
)

TextComponent.displayName = 'TextComponent'

export const textColumn = createTextColumn<string | null>()

export function createTextColumn<T = string | null>({
  placeholder,
  alignRight = false,
  continuousUpdates = true,
  deletedValue = null as unknown as T,
  parseUserInput = value => (value.trim() || null) as unknown as T,
  formatBlurredInput = value => String(value ?? ''),
  formatInputOnFocus = value => String(value ?? ''),
  formatForCopy = value => String(value ?? ''),
  // Matches parseUserInput's default rather than collapsing embedded
  // newlines to a space: a pasted value can legitimately contain a
  // newline (e.g. a multi-line cell copied from Excel/Google Sheets,
  // whose HTML clipboard format already gets its <br> tags converted
  // back to \n by parseTextHtmlData before this even runs), and text
  // cells now genuinely support wrapping/displaying multi-line content.
  parsePastedValue = value => (value.trim() || (null as unknown)) as T,
}: TextColumnOptions<T> = {}): Partial<Column<T, TextColumnData<T>, string>> {
  return {
    component: TextComponent as unknown as CellComponent<T, TextColumnData<T>>,
    columnData: {
      placeholder,
      alignRight,
      continuousUpdates,
      formatInputOnFocus,
      formatBlurredInput,
      parseUserInput,
    },
    deleteValue: () => deletedValue,
    copyValue: ({ rowData }) => formatForCopy(rowData),
    pasteValue: ({ value }) => parsePastedValue(value),
    isCellEmpty: ({ rowData }) => rowData === null || rowData === undefined,
  }
}
