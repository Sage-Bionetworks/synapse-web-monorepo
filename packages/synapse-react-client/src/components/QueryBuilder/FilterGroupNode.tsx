import { Button, ToggleButton, ToggleButtonGroup } from '@mui/material'
import { useForkRef } from '@mui/material/utils'
import { pointerIntersection } from '@dnd-kit/collision'
import { useDroppable } from '@dnd-kit/react'
import { useSortable } from '@dnd-kit/react/sortable'
import { CSSProperties } from 'react'
import { FilterConditionRow } from './FilterConditionRow'
import styles from './FilterGroupNode.module.scss'
import { QBDragHandle } from './QBDragHandle'
import dragStyles from './queryBuilderDrag.module.scss'
import { groupDropZoneData, groupDropZoneId } from './queryBuilderDnd'
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

  // Groups become drop targets only through the `useDroppable` zone below.
  // Keep the sortable's droppable half disabled unless `useQueryBuilderDrag`
  // also resolves sortable targets: for any target the app doesn't reposition
  // in `onDragOver`, dnd-kit's OptimisticSortingPlugin moves the DOM node
  // itself, and React's next commit throws `NotFoundError` on `removeChild`.
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

  // `useQueryBuilderDrag` identifies the target group by `data.groupId`. Zones
  // nest inside their groups, so the pointer is inside every ancestor of the
  // group it is over; hit-testing by pointer and ranking by depth selects the
  // innermost. `collisionPriority` replaces the ranking a detector returns, so
  // the detector has to be one that reports nothing but pointer hits —
  // otherwise a deeper zone the dragged box merely overlaps outranks the zone
  // the pointer is actually in.
  const { ref: dropZoneRef, isDropTarget } = useDroppable({
    id: groupDropZoneId(group.id),
    data: groupDropZoneData(group.id),
    collisionDetector: pointerIntersection,
    collisionPriority: depth,
  })

  // The drag source and the drop zone are the same element.
  const groupRef = useForkRef(sortableRef, dropZoneRef)

  const style: CSSProperties = {
    ['--qb-accent-color' as string]: accentColorFor(group),
    ['--qb-pill-color' as string]: accentColorFor(group),
  }

  return (
    <div
      ref={groupRef}
      className={`${styles.group} ${isRoot ? '' : styles.nested}${
        isDragSource ? ` ${dragStyles.dragSource}` : ''
      }${isDropTarget ? ` ${styles.dropTarget}` : ''}`}
      style={style}
      role="group"
      aria-label={groupAriaLabel(group)}
      data-qb-node-id={group.id}
    >
      <div className={styles.header}>
        {!isRoot && (
          <QBDragHandle
            handleRef={handleRef}
            label="Drag condition group into another condition group"
          />
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
