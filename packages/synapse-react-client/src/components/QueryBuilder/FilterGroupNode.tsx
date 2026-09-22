import DragIndicatorIcon from '@mui/icons-material/DragIndicator'
import {
  Button,
  IconButton,
  ToggleButton,
  ToggleButtonGroup,
  Tooltip,
} from '@mui/material'
import { useDroppable } from '@dnd-kit/react'
import { useSortable } from '@dnd-kit/react/sortable'
import { CSSProperties, useCallback } from 'react'
import { FilterConditionRow } from './FilterConditionRow'
import styles from './FilterGroupNode.module.scss'
import { groupDropZoneId } from './queryBuilderDnd'
import { useQueryBuilderInternalContext } from './QueryBuilderInternalContext'
import { isQBGroup, QBGroup } from './QueryBuilderTypes'

export type FilterGroupNodeProps = {
  group: QBGroup
  isRoot?: boolean
  parentGroupId?: string
  index?: number
  /** Nesting level, used to resolve drops into the innermost group. */
  depth?: number
}

export function FilterGroupNode(props: FilterGroupNodeProps) {
  const { group, isRoot = false, parentGroupId, index, depth = 0 } = props
  const {
    addConditionAt,
    addChildGroupAt,
    clearGroupAt,
    updateGroupAt,
    removeGroupAt,
  } = useQueryBuilderInternalContext()

  // Non-root groups are draggable within their parent; the root is skipped.
  // `useSortable` is always called (React rules of hooks). Its droppable half
  // stays off: the drop zone below covers the same element and is what makes
  // this group a target. Keep it off unless `resolveDrop` in
  // `QueryBuilderControls` is taught to resolve sortable targets too —
  // dnd-kit's optimistic sorting only stands down for a target it sees the
  // app reposition, and otherwise reorders the DOM behind React's back.
  const {
    ref: sortableRef,
    handleRef,
    isDragSource,
  } = useSortable({
    id: group.id,
    index: index ?? 0,
    group: parentGroupId ?? group.id,
    disabled: { draggable: isRoot, droppable: true },
  })

  // Groups are the only drop targets, so the zone spans the whole group.
  // Zones nest along with the groups, which means a pointer inside a child is
  // inside its ancestors too; ranking by depth lets the innermost group win.
  const { ref: dropZoneRef, isDropTarget } = useDroppable({
    id: groupDropZoneId(group.id),
    data: { groupId: group.id },
    collisionPriority: depth,
  })

  // The drag source and the drop zone are the same element. Both hooks hand
  // back a stable callback ref, so this has to be memoized too — a fresh
  // closure each render would detach and re-register the element every time.
  const groupRef = useCallback(
    (element: Element | null) => {
      sortableRef(element)
      dropZoneRef(element)
    },
    [sortableRef, dropZoneRef],
  )

  const style: CSSProperties = {
    ['--qb-accent-color' as string]: accentColorFor(group),
    ['--qb-pill-color' as string]: accentColorFor(group),
  }

  return (
    <div
      ref={groupRef}
      className={`${styles.group} ${isRoot ? '' : styles.nested}${
        isDragSource ? ` ${styles.dragging}` : ''
      }${isDropTarget ? ` ${styles.dropTarget}` : ''}`}
      style={style}
      role="group"
      aria-label={groupAriaLabel(group)}
      data-qb-node-id={group.id}
    >
      <div className={styles.header}>
        {!isRoot && (
          <Tooltip title="Drag into another condition group">
            <IconButton
              ref={handleRef}
              size="small"
              className={styles.dragHandle}
              aria-label="Drag condition group into another condition group"
            >
              <DragIndicatorIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        )}
        <ToggleButtonGroup
          size="small"
          className={styles.combinator}
          exclusive
          value={group.combinator}
          aria-label="Boolean combinator"
          onChange={(_event, next) => {
            if (next == null) return
            updateGroupAt(group.id, { combinator: next })
          }}
        >
          <ToggleButton value="AND" aria-label="AND">
            AND
          </ToggleButton>
          <ToggleButton value="OR" aria-label="OR">
            OR
          </ToggleButton>
        </ToggleButtonGroup>

        <ToggleButton
          size="small"
          value="not"
          selected={group.not}
          className={styles.notToggle}
          aria-label="Negate this group"
          aria-pressed={group.not}
          onChange={() => updateGroupAt(group.id, { not: !group.not })}
        >
          Exclude (NOT)
        </ToggleButton>

        <div className={styles.actions}>
          <Button
            className={styles.actionButton}
            size="small"
            onClick={() => addConditionAt(group.id)}
          >
            + Condition
          </Button>
          <Button
            className={styles.actionButton}
            size="small"
            onClick={() => addChildGroupAt(group.id)}
          >
            + Condition Group
          </Button>
          <Button
            className={styles.actionButton}
            size="small"
            onClick={() => clearGroupAt(group.id)}
            disabled={group.children.length === 0}
          >
            Clear
          </Button>
          {!isRoot && (
            <Button
              className={styles.actionButton}
              size="small"
              onClick={() => removeGroupAt(group.id)}
            >
              Delete Condition Group
            </Button>
          )}
        </div>
      </div>

      <div className={styles.children}>
        {group.children.length === 0 ? (
          <div className={styles.emptyState}>
            No conditions yet, add one above
          </div>
        ) : (
          group.children.map((child, childIndex) => {
            if (isQBGroup(child)) {
              return (
                <FilterGroupNode
                  key={child.id}
                  group={child}
                  parentGroupId={group.id}
                  index={childIndex}
                  depth={depth + 1}
                />
              )
            }
            return (
              <FilterConditionRow
                key={child.id}
                condition={child}
                parentGroupId={group.id}
                index={childIndex}
              />
            )
          })
        )}
      </div>
    </div>
  )
}

function accentColorFor(group: QBGroup): string {
  if (group.not) return 'var(--synapse-error)'
  if (group.combinator === 'OR') return 'var(--synapse-warning)'
  return 'var(--synapse-primary-action-color)'
}

function groupAriaLabel(group: QBGroup): string {
  const modifier = group.not ? 'excluded ' : ''
  return `${modifier}${group.combinator} filter group`
}
