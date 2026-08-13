import { ConfirmationDialog } from '@/components/ConfirmationDialog'
import { computeDefaultColumnOrder } from '@/components/DataGrid/utils/computeDefaultColumnOrder'
import { North, RestartAlt, South } from '@mui/icons-material'
import {
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Stack,
} from '@mui/material'
import { JSONSchema7 } from 'json-schema'
import isEqual from 'lodash-es/isEqual'
import { useMemo, useState } from 'react'

export type ReorderColumnsDialogProps = {
  open: boolean
  columnNames: string[]
  columnOrder: number[]
  jsonSchema: JSONSchema7 | undefined
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
  const { open, columnNames, columnOrder, jsonSchema, onSave, onCancel } = props

  const [workingOrder, setWorkingOrder] = useState<number[]>(columnOrder)

  const defaultOrder = useMemo(
    () => computeDefaultColumnOrder(columnNames, jsonSchema),
    [columnNames, jsonSchema],
  )

  return (
    <ConfirmationDialog
      open={open}
      title="Reorder Columns"
      content={
        <Box>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 1 }}>
            <Button
              variant="text"
              startIcon={<RestartAlt />}
              onClick={() => setWorkingOrder(defaultOrder)}
              disabled={isEqual(workingOrder, defaultOrder)}
            >
              Reset to Default Order
            </Button>
          </Box>
          <List disablePadding>
            {workingOrder.map((colIndex, displayIndex) => {
              const columnName = columnNames[colIndex]
              return (
                <ListItem
                  key={colIndex}
                  divider
                  secondaryAction={
                    <Stack direction="row" spacing={0.5}>
                      <IconButton
                        aria-label={`Move ${columnName} up`}
                        size="small"
                        disabled={displayIndex === 0}
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
                        disabled={displayIndex === workingOrder.length - 1}
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
      onConfirm={() => onSave(workingOrder)}
      onCancel={onCancel}
    />
  )
}
