import React, { useMemo } from 'react'
import cx from 'classnames'
import { SelectionContextType } from '../types'

const buildSquare = (
  top: number | string,
  right: number | string,
  bottom: number | string,
  left: number | string,
) => {
  return [
    [left, top],
    [right, top],
    [right, bottom],
    [left, bottom],
    [left, top],
  ]
}

const buildClipPath = (
  top: number,
  right: number,
  bottom: number,
  left: number,
) => {
  const values = [
    ...buildSquare(0, '100%', '100%', 0),
    ...buildSquare(top, right, bottom, left),
  ]

  return `polygon(evenodd, ${values
    .map(pair =>
      pair
        .map(value =>
          typeof value === 'number' && value !== 0 ? value + 'px' : value,
        )
        .join(' '),
    )
    .join(',')})`
}

export const SelectionRect = React.memo<SelectionContextType>(
  ({
    columnWidths,
    columnRights,
    headerRowHeight,
    selection,
    rowHeight,
    activeCell,
    hasStickyRightColumn,
    dataLength,
    viewWidth,
    viewHeight,
    contentWidth,
    edges,
    isCellDisabled,
    editing,
    expandSelection,
    stickyLeftColumns,
    getStickyLeftOffset,
  }) => {
    const activeCellIsDisabled = activeCell ? isCellDisabled(activeCell) : false

    const selectionIsDisabled = useMemo(() => {
      if (!selection) {
        return activeCellIsDisabled
      }

      for (let col = selection.min.col; col <= selection.max.col; ++col) {
        for (let row = selection.min.row; row <= selection.max.row; ++row) {
          if (!isCellDisabled({ col, row })) {
            return false
          }
        }
      }

      return true
    }, [activeCellIsDisabled, isCellDisabled, selection])

    if (!columnWidths || !columnRights) {
      return null
    }

    const extraPixelV = (rowI: number): number => {
      return rowI < dataLength - 1 ? 1 : 0
    }

    const extraPixelH = (colI: number): number => {
      return colI < columnWidths.length - (hasStickyRightColumn ? 3 : 2) ? 1 : 0
    }

    const activeCellRect = activeCell && {
      width: columnWidths[activeCell.col + 1] + extraPixelH(activeCell.col),
      height: rowHeight(activeCell.row).height + extraPixelV(activeCell.row),
      left: columnRights[activeCell.col],
      top: rowHeight(activeCell.row).top + headerRowHeight,
    }

    const selectionRect = selection && {
      width:
        columnWidths
          .slice(selection.min.col + 1, selection.max.col + 2)
          .reduce((a, b) => a + b) + extraPixelH(selection.max.col),
      height:
        rowHeight(selection.max.row).top +
        rowHeight(selection.max.row).height -
        rowHeight(selection.min.row).top +
        extraPixelV(selection.max.row),
      left: columnRights[selection.min.col],
      top: rowHeight(selection.min.row).top + headerRowHeight,
    }

    // Determine if active cell is in a sticky column
    const activeCellIsSticky =
      activeCell &&
      stickyLeftColumns &&
      getStickyLeftOffset &&
      stickyLeftColumns[activeCell.col]

    // Calculate sticky offset for active cell
    // activeCell.col corresponds to internal columns[col + 1], so we add 1
    const activeCellStickyLeft =
      activeCellIsSticky && getStickyLeftOffset
        ? getStickyLeftOffset(activeCell.col + 1)
        : 0

    // Determine if the entire selection is within sticky columns
    const selectionIsSticky =
      selection &&
      stickyLeftColumns &&
      getStickyLeftOffset &&
      (() => {
        for (let col = selection.min.col; col <= selection.max.col; col++) {
          if (!stickyLeftColumns[col]) {
            return false
          }
        }
        return true
      })()

    // Calculate sticky offset for selection (using the leftmost column)
    const selectionStickyLeft =
      selectionIsSticky && selection && getStickyLeftOffset
        ? getStickyLeftOffset(selection.min.col + 1)
        : 0

    const minSelection = selection?.min || activeCell
    const maxSelection = selection?.max || activeCell

    // Determine if the max column of the selection/activeCell is sticky
    // This affects the expand rows indicator position
    const maxColumnIsSticky =
      maxSelection &&
      stickyLeftColumns &&
      getStickyLeftOffset &&
      stickyLeftColumns[maxSelection.col]

    // Sticky offset for the rightmost edge of the selection (expand indicator position)
    const maxColumnStickyRight =
      maxColumnIsSticky && maxSelection && getStickyLeftOffset
        ? getStickyLeftOffset(maxSelection.col + 1) +
          columnWidths[maxSelection.col + 1]
        : 0

    // Determine if any part of the selection is sticky (for the column marker)
    const selectionHasStickyMinCol =
      (selection &&
        stickyLeftColumns &&
        stickyLeftColumns[selection.min.col]) ||
      (activeCell && stickyLeftColumns && stickyLeftColumns[activeCell.col])

    // Sticky offset for the column marker (using the leftmost selected column)
    const colMarkerStickyLeft =
      selectionHasStickyMinCol && getStickyLeftOffset
        ? getStickyLeftOffset((selection?.min.col ?? activeCell?.col ?? 0) + 1)
        : 0

    const expandRowsIndicator = maxSelection &&
      expandSelection !== null && {
        left:
          columnRights[maxSelection.col] + columnWidths[maxSelection.col + 1],
        top:
          rowHeight(maxSelection.row).top +
          rowHeight(maxSelection.row).height +
          headerRowHeight,
        transform: `translate(-${
          maxSelection.col <
          columnWidths.length - (hasStickyRightColumn ? 3 : 2)
            ? 50
            : 100
        }%, -${maxSelection.row < dataLength - 1 ? 50 : 100}%)`,
      }

    const expandRowsRect = minSelection &&
      maxSelection &&
      expandSelection !== null && {
        width:
          columnWidths
            .slice(minSelection.col + 1, maxSelection.col + 2)
            .reduce((a, b) => a + b) + extraPixelH(maxSelection.col),
        height:
          rowHeight(maxSelection.row + expandSelection).top +
          rowHeight(maxSelection.row + expandSelection).height -
          rowHeight(maxSelection.row + 1).top +
          extraPixelV(maxSelection.row + expandSelection) -
          1,
        left: columnRights[minSelection.col],
        top:
          rowHeight(maxSelection.row).top +
          rowHeight(maxSelection.row).height +
          headerRowHeight +
          1,
      }

    return (
      <>
        <div
          className="dsg-scrollable-view-container"
          style={{
            height:
              rowHeight(dataLength - 1).top +
              rowHeight(dataLength - 1).height +
              headerRowHeight,
            width: contentWidth ? contentWidth : '100%',
          }}
        >
          <div
            className={cx({
              'dsg-scrollable-view': true,
              'dsg-scrollable-view-t': !edges.top,
              'dsg-scrollable-view-r': !edges.right,
              'dsg-scrollable-view-b': !edges.bottom,
              'dsg-scrollable-view-l': !edges.left,
            })}
            style={{
              top: headerRowHeight,
              left: columnWidths[0],
              height: viewHeight ? viewHeight - headerRowHeight : 0,
              width:
                contentWidth && viewWidth
                  ? viewWidth -
                    columnWidths[0] -
                    (hasStickyRightColumn
                      ? columnWidths[columnWidths.length - 1]
                      : 0)
                  : `calc(100% - ${
                      columnWidths[0] +
                      (hasStickyRightColumn
                        ? columnWidths[columnWidths.length - 1]
                        : 0)
                    }px)`,
            }}
          />
        </div>
        {(selectionRect || activeCellRect) && !selectionHasStickyMinCol && (
          <div
            className="dsg-selection-col-marker-container"
            style={{
              left: selectionRect?.left ?? activeCellRect?.left,
              width: selectionRect?.width ?? activeCellRect?.width,
              height:
                rowHeight(dataLength - 1).top +
                rowHeight(dataLength - 1).height +
                headerRowHeight,
            }}
          >
            <div
              className={cx(
                'dsg-selection-col-marker',
                selectionIsDisabled && 'dsg-selection-col-marker-disabled',
              )}
              style={{ top: headerRowHeight }}
            />
          </div>
        )}
        {(selectionRect || activeCellRect) && selectionHasStickyMinCol && (
          <div
            className={cx(
              'dsg-selection-col-marker-container',
              'dsg-selection-col-marker-container-sticky',
            )}
            style={{
              position: 'sticky',
              left: colMarkerStickyLeft,
              top: 'auto',
              width: selectionRect?.width ?? activeCellRect?.width,
              height:
                rowHeight(dataLength - 1).top +
                rowHeight(dataLength - 1).height +
                headerRowHeight,
            }}
          >
            <div
              className={cx(
                'dsg-selection-col-marker',
                selectionIsDisabled && 'dsg-selection-col-marker-disabled',
              )}
              style={{ top: headerRowHeight }}
            />
          </div>
        )}
        {(selectionRect || activeCellRect) && (
          <div
            className="dsg-selection-row-marker-container"
            style={{
              top: selectionRect?.top ?? activeCellRect?.top,
              height: selectionRect?.height ?? activeCellRect?.height,
              width: contentWidth ? contentWidth : '100%',
            }}
          >
            <div
              className={cx(
                'dsg-selection-row-marker',
                selectionIsDisabled && 'dsg-selection-row-marker-disabled',
              )}
              style={{ left: columnWidths[0] }}
            />
          </div>
        )}
        {activeCellRect && activeCell && !activeCellIsSticky && (
          <div
            className={cx('dsg-active-cell', {
              'dsg-active-cell-focus': editing,
              'dsg-active-cell-disabled': activeCellIsDisabled,
            })}
            style={activeCellRect}
          />
        )}
        {activeCellRect && activeCell && activeCellIsSticky && (
          <div
            style={{
              position: 'absolute',
              top: activeCellRect.top,
              left: 0,
              right: 0,
              height: activeCellRect.height,
              pointerEvents: 'none',
            }}
          >
            <div
              className={cx('dsg-active-cell', {
                'dsg-active-cell-focus': editing,
                'dsg-active-cell-disabled': activeCellIsDisabled,
                'dsg-active-cell-sticky': true,
              })}
              style={{
                position: 'sticky',
                left: activeCellStickyLeft,
                width: activeCellRect.width,
                height: '100%',
              }}
            />
          </div>
        )}
        {selectionRect && activeCellRect && !selectionIsSticky && (
          <div
            className={cx(
              'dsg-selection-rect',
              selectionIsDisabled && 'dsg-selection-rect-disabled',
            )}
            style={{
              ...selectionRect,
              clipPath: buildClipPath(
                activeCellRect.top - selectionRect.top,
                activeCellRect.left - selectionRect.left,
                activeCellRect.top + activeCellRect.height - selectionRect.top,
                activeCellRect.left + activeCellRect.width - selectionRect.left,
              ),
            }}
          />
        )}
        {selectionRect && activeCellRect && selectionIsSticky && (
          <div
            style={{
              position: 'absolute',
              top: selectionRect.top,
              left: 0,
              right: 0,
              height: selectionRect.height,
              pointerEvents: 'none',
            }}
          >
            <div
              className={cx(
                'dsg-selection-rect',
                selectionIsDisabled && 'dsg-selection-rect-disabled',
                'dsg-selection-rect-sticky',
              )}
              style={{
                position: 'sticky',
                left: selectionStickyLeft,
                width: selectionRect.width,
                height: '100%',
                background: 'var(--dsg-selection-background-color)',
                clipPath: buildClipPath(
                  activeCellRect.top - selectionRect.top,
                  activeCellStickyLeft - selectionStickyLeft,
                  activeCellRect.top +
                    activeCellRect.height -
                    selectionRect.top,
                  activeCellStickyLeft +
                    activeCellRect.width -
                    selectionStickyLeft,
                ),
              }}
            />
          </div>
        )}
        {expandRowsRect && !selectionIsSticky && (
          <div className="dsg-expand-rows-rect" style={expandRowsRect} />
        )}
        {expandRowsRect && selectionIsSticky && (
          <div
            style={{
              position: 'absolute',
              top: expandRowsRect.top,
              left: 0,
              right: 0,
              height: expandRowsRect.height,
              pointerEvents: 'none',
            }}
          >
            <div
              className={cx(
                'dsg-expand-rows-rect',
                'dsg-expand-rows-rect-sticky',
              )}
              style={{
                position: 'sticky',
                left: selectionStickyLeft,
                width: expandRowsRect.width,
                height: '100%',
              }}
            />
          </div>
        )}
        {expandRowsIndicator && !maxColumnIsSticky && (
          <div
            className={cx(
              'dsg-expand-rows-indicator',
              selectionIsDisabled && 'dsg-expand-rows-indicator-disabled',
            )}
            style={expandRowsIndicator}
          />
        )}
        {expandRowsIndicator && maxColumnIsSticky && (
          <div
            style={{
              position: 'absolute',
              top: expandRowsIndicator.top,
              left: 0,
              right: 0,
              height: 0,
              pointerEvents: 'none',
            }}
          >
            <div
              className={cx(
                'dsg-expand-rows-indicator',
                selectionIsDisabled && 'dsg-expand-rows-indicator-disabled',
                'dsg-expand-rows-indicator-sticky',
              )}
              style={{
                position: 'sticky',
                left: maxColumnStickyRight,
                transform: expandRowsIndicator.transform,
                pointerEvents: 'auto',
              }}
            />
          </div>
        )}
      </>
    )
  },
)

SelectionRect.displayName = 'SelectionRect'
