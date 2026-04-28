import { DataGridRow } from '../DataGridTypes'
import {
  Box,
  Chip,
  CircularProgress,
  Collapse,
  Link,
  Tab,
  Tabs,
  Typography,
} from '@mui/material'
import { Fragment, useMemo, useState } from 'react'

type ValidationError = {
  rowIndex: number
  columnName: string
  message: string
  pending: boolean
}

type GroupBy = 'row' | 'column' | 'message'

type ValidationAlertProps = {
  rowValues: DataGridRow[]
  columnNames: string[]
  columnOrder: number[]
  onNavigateToCell: (rowIndex: number, colIndex: number) => void
  isLoading?: boolean
}

function getColDisplayIndex(
  colName: string,
  columnNames: string[],
  columnOrder: number[],
): number {
  return columnOrder.findIndex(i => columnNames[i] === colName)
}

/** Column name for display — '_row' becomes 'Row-level'. */
function colLabel(colName: string): string {
  return colName === '_row' ? 'Row-level' : colName
}

/** Renders a column name + message pair with distinct styles. */
function ErrorText({
  columnName,
  message,
  rowIndex,
}: {
  columnName: string
  message: string
  rowIndex: number
}) {
  const rowSuffix = ` (Row ${rowIndex + 1})`
  if (columnName === '_row') {
    return (
      <>
        {message}
        {rowSuffix}
      </>
    )
  }
  return (
    <>
      <Box component="span" sx={{ fontWeight: 'bold' }}>
        {columnName}
      </Box>
      {' — '}
      {message}
      {rowSuffix}
    </>
  )
}

const rowLinkSx = {
  textDecoration: 'none',
  cursor: 'pointer',
  '&:hover': { textDecoration: 'underline' },
} as const

/** Renders a list of row number links. The first shows "Row N"; subsequent
 *  items show only the number, separated by a middle dot.
 *  Pending entries are dimmed to signal unconfirmed validation state. */
function RowLinks({
  rows,
  navCol,
  onNavigateToCell,
}: {
  rows: { rowIndex: number; pending: boolean }[]
  navCol: number
  onNavigateToCell: (rowIndex: number, colIndex: number) => void
}) {
  return (
    <>
      {rows.map(({ rowIndex, pending }, j) => (
        <Fragment key={rowIndex}>
          {j > 0 && (
            <Box
              component="span"
              aria-hidden
              sx={{ color: 'text.disabled', userSelect: 'none' }}
            >
              ·
            </Box>
          )}
          <Link
            component="button"
            variant="caption"
            color="text.secondary"
            onClick={() => onNavigateToCell(rowIndex, navCol)}
            sx={{ ...rowLinkSx, opacity: pending ? 0.5 : 1 }}
          >
            {j === 0 ? `Row ${rowIndex + 1}` : rowIndex + 1}
          </Link>
        </Fragment>
      ))}
    </>
  )
}

export const ValidationAlert = ({
  rowValues,
  columnNames,
  columnOrder,
  onNavigateToCell,
  isLoading = false,
}: ValidationAlertProps) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [groupBy, setGroupBy] = useState<GroupBy>('row')

  const allErrors = useMemo((): ValidationError[] => {
    const errors: ValidationError[] = []
    rowValues.forEach((row, rowIndex) => {
      const status = row.__validationStatus
      if (status !== 'invalid' && status !== 'pending') return
      const pending = status === 'pending'
      row.__cellValidationResults?.forEach((messages, columnName) => {
        messages.forEach(message =>
          errors.push({ rowIndex, columnName, message, pending }),
        )
      })
    })
    return errors
  }, [rowValues])

  type RowEntry = { rowIndex: number; pending: boolean }

  // columnName → messageText → RowEntry[]
  const byColumn = useMemo(() => {
    const groups = new Map<string, Map<string, RowEntry[]>>()
    allErrors.forEach(({ rowIndex, columnName, message, pending }) => {
      if (!groups.has(columnName)) groups.set(columnName, new Map())
      const colGroup = groups.get(columnName)!
      if (!colGroup.has(message)) colGroup.set(message, [])
      colGroup.get(message)!.push({ rowIndex, pending })
    })
    return groups
  }, [allErrors])

  // messageText → columnName → RowEntry[]
  const byMessage = useMemo(() => {
    const groups = new Map<string, Map<string, RowEntry[]>>()
    allErrors.forEach(({ rowIndex, columnName, message, pending }) => {
      if (!groups.has(message)) groups.set(message, new Map())
      const msgGroup = groups.get(message)!
      if (!msgGroup.has(columnName)) msgGroup.set(columnName, [])
      msgGroup.get(columnName)!.push({ rowIndex, pending })
    })
    return groups
  }, [allErrors])

  const shouldExpand = isExpanded && allErrors.length > 0

  const firstError = allErrors[0]

  if (isLoading) {
    return (
      <Box
        sx={{
          border: '1px solid',
          borderColor: 'divider',
          borderLeft: '4px solid',
          borderLeftColor: 'divider',
          borderRadius: 1,
          mb: 1,
          px: 2,
          py: 1,
          display: 'flex',
          alignItems: 'center',
          gap: 1,
        }}
      >
        <CircularProgress size={14} />
        <Typography variant="body2" color="text.secondary">
          Syncing validation errors…
        </Typography>
      </Box>
    )
  }

  if (allErrors.length === 0) {
    return (
      <Box
        sx={{
          border: '1px solid',
          borderColor: 'success.main',
          borderLeft: '4px solid',
          borderLeftColor: 'success.main',
          borderRadius: 1,
          mb: 1,
          px: 2,
          py: 1,
        }}
      >
        <Typography variant="body2" color="success.main">
          No validation errors
        </Typography>
      </Box>
    )
  }

  return (
    <Box
      sx={{
        border: '1px solid',
        borderColor: 'error.main',
        borderLeft: '4px solid',
        borderLeftColor: 'error.main',
        borderRadius: 1,
        mb: 1,
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          px: 2,
          py: 1,
          gap: 1,
        }}
      >
        <Typography variant="body2" fontWeight="bold">
          Validation errors
        </Typography>
        <Chip label={allErrors.length} color="error" size="small" />
        <Link
          component="button"
          variant="body2"
          onClick={() => setIsExpanded(p => !p)}
          sx={{ cursor: 'pointer', flexShrink: 0 }}
        >
          {shouldExpand ? 'Collapse' : 'Expand'}
        </Link>
        {!shouldExpand && (
          <Link
            component="button"
            variant="body2"
            color="text.secondary"
            onClick={() =>
              onNavigateToCell(
                firstError.rowIndex,
                Math.max(
                  0,
                  getColDisplayIndex(
                    firstError.columnName,
                    columnNames,
                    columnOrder,
                  ),
                ),
              )
            }
            noWrap
            sx={{
              textAlign: 'left',
              ...rowLinkSx,
              opacity: firstError.pending ? 0.5 : 1,
            }}
          >
            <ErrorText
              columnName={firstError.columnName}
              message={firstError.message}
              rowIndex={firstError.rowIndex}
            />
          </Link>
        )}
      </Box>

      {/* Expanded panel */}
      <Collapse in={shouldExpand}>
        <Tabs
          value={groupBy}
          onChange={(_, v: GroupBy) => setGroupBy(v)}
          textColor="inherit"
          sx={{
            px: 2,
            minHeight: 36,
            borderTop: '1px solid',
            borderColor: 'divider',
          }}
          TabIndicatorProps={{ style: { height: 2 } }}
        >
          <Tab
            label="By row"
            value="row"
            sx={{ minHeight: 36, py: 0.5, fontSize: '0.75rem' }}
          />
          <Tab
            label="By column"
            value="column"
            sx={{ minHeight: 36, py: 0.5, fontSize: '0.75rem' }}
          />
          <Tab
            label="By message"
            value="message"
            sx={{ minHeight: 36, py: 0.5, fontSize: '0.75rem' }}
          />
        </Tabs>

        <Box sx={{ px: 2, py: 1, maxHeight: 200, overflowY: 'auto' }}>
          {/* ── By row ─────────────────────────────────────────── */}
          {groupBy === 'row' && (
            <Box component="ul" sx={{ m: 0, p: 0, listStyle: 'none' }}>
              {allErrors.map((error, i) => {
                const navCol = Math.max(
                  0,
                  getColDisplayIndex(
                    error.columnName,
                    columnNames,
                    columnOrder,
                  ),
                )
                return (
                  <Box component="li" key={i} sx={{ py: 0.25 }}>
                    <Link
                      component="button"
                      variant="body2"
                      color="text.secondary"
                      onClick={() => onNavigateToCell(error.rowIndex, navCol)}
                      sx={{
                        textAlign: 'left',
                        ...rowLinkSx,
                        opacity: error.pending ? 0.5 : 1,
                      }}
                    >
                      <ErrorText
                        columnName={error.columnName}
                        message={error.message}
                        rowIndex={error.rowIndex}
                      />
                    </Link>
                  </Box>
                )
              })}
            </Box>
          )}

          {/* ── By column ──────────────────────────────────────── */}
          {groupBy === 'column' &&
            Array.from(byColumn.entries()).map(([colName, messages]) => {
              const totalCount = Array.from(messages.values()).reduce(
                (sum, rows) => sum + rows.length,
                0,
              )
              const navCol = Math.max(
                0,
                getColDisplayIndex(colName, columnNames, columnOrder),
              )
              return (
                <Box key={colName} sx={{ mb: 1 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.5,
                      mb: 0.25,
                    }}
                  >
                    <Typography variant="body2" fontWeight="bold">
                      {colLabel(colName)}
                    </Typography>
                    <Chip label={totalCount} color="error" size="small" />
                  </Box>
                  {Array.from(messages.entries()).map(([msg, rows]) => (
                    <Box
                      key={msg}
                      sx={{
                        pl: 2,
                        display: 'flex',
                        alignItems: 'baseline',
                        flexWrap: 'wrap',
                        gap: 0.5,
                        py: 0.25,
                      }}
                    >
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mr: 0.5 }}
                      >
                        {msg}
                      </Typography>
                      <RowLinks
                        rows={rows}
                        navCol={navCol}
                        onNavigateToCell={onNavigateToCell}
                      />
                    </Box>
                  ))}
                </Box>
              )
            })}

          {/* ── By message ─────────────────────────────────────── */}
          {groupBy === 'message' &&
            Array.from(byMessage.entries()).map(([msg, columns]) => {
              const totalCount = Array.from(columns.values()).reduce(
                (sum, rows) => sum + rows.length,
                0,
              )
              return (
                <Box key={msg} sx={{ mb: 1 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.5,
                      mb: 0.25,
                    }}
                  >
                    <Typography variant="body2" fontWeight="bold">
                      {msg}
                    </Typography>
                    <Chip label={totalCount} color="error" size="small" />
                  </Box>
                  {Array.from(columns.entries()).map(([colName, rows]) => {
                    const navCol = Math.max(
                      0,
                      getColDisplayIndex(colName, columnNames, columnOrder),
                    )
                    return (
                      <Box
                        key={colName}
                        sx={{
                          pl: 2,
                          display: 'flex',
                          alignItems: 'baseline',
                          flexWrap: 'wrap',
                          gap: 0.5,
                          py: 0.25,
                        }}
                      >
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ mr: 0.5, fontStyle: 'italic' }}
                        >
                          {colLabel(colName)}
                        </Typography>
                        <RowLinks
                          rows={rows}
                          navCol={navCol}
                          onNavigateToCell={onNavigateToCell}
                        />
                      </Box>
                    )
                  })}
                </Box>
              )
            })}
        </Box>
      </Collapse>
    </Box>
  )
}
