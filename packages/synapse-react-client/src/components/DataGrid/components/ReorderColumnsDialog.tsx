import { ConfirmationDialog } from '@/components/ConfirmationDialog'
import { computeDefaultColumnOrder } from '@/components/DataGrid/utils/computeDefaultColumnOrder'
import {
  DeleteOutline,
  North,
  RestartAlt,
  RestoreFromTrash,
  South,
} from '@mui/icons-material'
import {
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material'
import { JSONSchema7 } from 'json-schema'
import isEqual from 'lodash-es/isEqual'
import { useMemo, useState } from 'react'

export type ReorderColumnsDialogProps = {
  open: boolean
  columnNames: string[]
  columnOrder: number[]
  jsonSchema: JSONSchema7 | undefined
  upsertKey?: string[]
  /** Recordset-sourced grids only -- views do not support hiding/removing columns from display. */
  canRemoveColumns?: boolean
  onSave: (newColumnOrder: number[]) => void
  onCancel: () => void
}

function moveItem(order: number[], from: number, to: number): number[] {
  const next = [...order]
  const [moved] = next.splice(from, 1)
  next.splice(to, 0, moved)
  return next
}

export default function ReorderColumnsDialog(props: ReorderColumnsDialogProps) {
  const {
    open,
    columnNames,
    columnOrder,
    jsonSchema,
    upsertKey,
    canRemoveColumns = false,
    onSave,
    onCancel,
  } = props

  // Columns previously removed (and saved) are absent from columnOrder entirely, but their
  // identity index still exists in columnNames -- surface them so they can be restored.
  const previouslyRemovedColumnIndices = canRemoveColumns
    ? columnNames
        .map((_, index) => index)
        .filter(index => !columnOrder.includes(index))
    : []

  const [workingOrder, setWorkingOrder] = useState<number[]>([
    ...columnOrder,
    ...previouslyRemovedColumnIndices,
  ])
  const [removedColumnIndices, setRemovedColumnIndices] = useState<number[]>(
    previouslyRemovedColumnIndices,
  )

  const defaultOrder = useMemo(
    () => computeDefaultColumnOrder(columnNames, jsonSchema, upsertKey),
    [columnNames, jsonSchema, upsertKey],
  )

  const activeColumnCount = workingOrder.length - removedColumnIndices.length
  const isAtDefault =
    isEqual(workingOrder, defaultOrder) && removedColumnIndices.length === 0

  // Only columns that aren't part of the JSON schema can be removed -- schema-defined
  // columns are required for validation/upsert and shouldn't be hidden from the grid.
  const isSchemaColumn = (columnName: string) =>
    !!jsonSchema?.properties && Object.hasOwn(jsonSchema.properties, columnName)

  return (
    <ConfirmationDialog
      open={open}
      title="Reorder Columns"
      content={
        <Box>
          {canRemoveColumns && (
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              Only columns that are not part of the schema can be removed.
            </Typography>
          )}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 1 }}>
            <Button
              variant="text"
              startIcon={<RestartAlt />}
              onClick={() => {
                setWorkingOrder(defaultOrder)
                setRemovedColumnIndices([])
              }}
              disabled={isAtDefault}
            >
              Reset to Default Order
            </Button>
          </Box>
          <List disablePadding>
            {workingOrder.map((colIndex, displayIndex) => {
              const columnName = columnNames[colIndex]
              const isRemoved = removedColumnIndices.includes(colIndex)
              return (
                <ListItem
                  key={colIndex}
                  divider
                  sx={isRemoved ? { opacity: 0.5 } : undefined}
                  secondaryAction={
                    <Stack direction="row" spacing={0.5}>
                      {canRemoveColumns &&
                        (isRemoved ? (
                          <IconButton
                            aria-label={`Restore ${columnName}`}
                            size="small"
                            onClick={() =>
                              setRemovedColumnIndices(indices =>
                                indices.filter(index => index !== colIndex),
                              )
                            }
                          >
                            <RestoreFromTrash fontSize="small" />
                          </IconButton>
                        ) : (
                          !isSchemaColumn(columnName) && (
                            <IconButton
                              aria-label={`Remove ${columnName}`}
                              size="small"
                              disabled={activeColumnCount <= 1}
                              onClick={() =>
                                setRemovedColumnIndices(indices => [
                                  ...indices,
                                  colIndex,
                                ])
                              }
                            >
                              <DeleteOutline fontSize="small" />
                            </IconButton>
                          )
                        ))}
                      <IconButton
                        aria-label={`Move ${columnName} up`}
                        size="small"
                        disabled={isRemoved || displayIndex === 0}
                        onClick={() =>
                          setWorkingOrder(order =>
                            moveItem(order, displayIndex, displayIndex - 1),
                          )
                        }
                      >
                        <North fontSize="small" />
                      </IconButton>
                      <IconButton
                        aria-label={`Move ${columnName} down`}
                        size="small"
                        disabled={
                          isRemoved || displayIndex === workingOrder.length - 1
                        }
                        onClick={() =>
                          setWorkingOrder(order =>
                            moveItem(order, displayIndex, displayIndex + 1),
                          )
                        }
                      >
                        <South fontSize="small" />
                      </IconButton>
                    </Stack>
                  }
                >
                  <ListItemText primary={columnName} />
                </ListItem>
              )
            })}
          </List>
        </Box>
      }
      confirmButtonProps={{ children: 'Save' }}
      onConfirm={() =>
        onSave(
          workingOrder.filter(index => !removedColumnIndices.includes(index)),
        )
      }
      onCancel={onCancel}
    />
  )
}
