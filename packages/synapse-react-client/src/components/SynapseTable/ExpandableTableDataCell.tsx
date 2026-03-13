import { HTMLAttributes, useRef, useState } from 'react'
import { useResizeObserver } from '@react-hookz/web'
import ExpandCollapseButton from './ExpandCollapseButton'

export default function ExpandableTableDataCell(
  props: HTMLAttributes<HTMLTableCellElement>,
) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isOverflowingWhenNotExpanded, setIsOverflowingWhenNotExpanded] =
    useState(false)
  const tdRef = useRef<HTMLTableCellElement | null>(null)

  /**
   * When the cell is resized, check if it is overflowing.
   */
  useResizeObserver(tdRef, ({ target }) => {
    // Don't check overflow if the cell has been expanded by the user!
    if (!isExpanded) {
      if (target) {
        const contentElement = target.getElementsByClassName(
          'SynapseTableCellContent',
        )[0]
        if (contentElement) {
          // Add 2px threshold to account for sub-pixel rounding errors
          const threshold = 2
          setIsOverflowingWhenNotExpanded(
            contentElement.scrollHeight >
              contentElement.clientHeight + threshold ||
              contentElement.scrollWidth >
                contentElement.clientWidth + threshold,
          )
        }
      }
    }
  })

  return (
    <td
      {...props}
      className={`ExpandableTableData ${
        props.className ? props.className : ''
      }`}
      aria-expanded={isExpanded}
      ref={tdRef}
    >
      {isOverflowingWhenNotExpanded && (
        <ExpandCollapseButton
          isExpanded={isExpanded}
          className="ExpandableTableData__expandButton"
          onClick={() => setIsExpanded(!isExpanded)}
        />
      )}
      {props.children}
    </td>
  )
}
