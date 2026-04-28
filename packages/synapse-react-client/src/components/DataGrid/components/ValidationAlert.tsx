import { DataGridRow } from '../DataGridTypes'
import {
  Box,
  Chip,
  CircularProgress,
  Collapse,
  Divider,
  Link,
  Stack,
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

type RowEntry = { rowIndex: number; pending: boolean }

type GroupBy = 'row' | 'column' | 'message'

type ValidationAlertProps = {
  rowValues: DataGridRow[]
  columnNames: string[]
  columnOrder: number[]
  onNavigateToCell: (rowIndex: number, colIndex: number) => void
  isLoading?: boolean
}

type NavProps = {
  columnNames: string[]
  columnOrder: number[]
  onNavigateToCell: (rowIndex: number, colIndex: number) => void
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
        <Box component="span" sx={{ fontWeight: 'normal' }}>
          {message}
          {rowSuffix}
        </Box>
      </>
    )
  }
  return (
    <>
      <Box component="span" sx={{ fontWeight: 'bold' }}>
        {columnName}
      </Box>
      <Box component="span" sx={{ fontWeight: 'normal' }}>
        {' — '}
        {message}
        {rowSuffix}
      </Box>
    </>
  )
}

const rowLinkSx = {
  textDecoration: 'none',
  cursor: 'pointer',
  '&:hover': { textDecoration: 'underline' },
} as const

const bannerBaseSx = {
  border: '1px solid',
  borderLeft: '4px solid',
  borderRadius: 1,
  mb: 1,
} as const

const tabSx = { minHeight: 36, py: 0.5 } as const

const groupSectionHeaderSx = {
  display: 'flex',
  alignItems: 'center',
  gap: 0.5,
  mb: 0.25,
} as const

const groupSectionItemSx = {
  pl: 2,
  display: 'flex',
  alignItems: 'baseline',
  flexWrap: 'wrap',
  gap: 0.5,
  py: 0.25,
} as const

/** Renders a list of row number links. The first shows "Row N"; subsequent
 *  items show only the number, separated by a middle dot.
 *  Pending entries are dimmed to signal unconfirmed validation state. */
function RowLinks({
  rows,
  navCol,
  onNavigateToCell,
}: {
  rows: RowEntry[]
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
            variant="body1"
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

function ByColumnTab({
  groups,
  columnNames,
  columnOrder,
  onNavigateToCell,
}: NavProps & { groups: Map<string, Map<string, RowEntry[]>> }) {
  return (
    <Stack divider={<Divider />} spacing={1}>
      {Array.from(groups.entries()).map(([colName, messages]) => {
        const totalCount = Array.from(messages.values()).reduce(
          (sum, rows) => sum + rows.length,
          0,
        )
        const navCol = Math.max(
          0,
          getColDisplayIndex(colName, columnNames, columnOrder),
        )
        return (
          <Box key={colName}>
            <Box sx={groupSectionHeaderSx}>
              <Typography variant="body1" fontWeight="bold">
                {colLabel(colName)}
              </Typography>
              <Chip label={totalCount} color="error" size="small" />
            </Box>
            {Array.from(messages.entries()).map(([msg, rows]) => (
              <Box key={msg} sx={groupSectionItemSx}>
                <Typography
                  variant="body1"
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
    </Stack>
  )
}

function ByMessageTab({
  groups,
  columnNames,
  columnOrder,
  onNavigateToCell,
}: NavProps & { groups: Map<string, Map<string, RowEntry[]>> }) {
  return (
    <Stack divider={<Divider />} spacing={1}>
      {Array.from(groups.entries()).map(([msg, columns]) => {
        const totalCount = Array.from(columns.values()).reduce(
          (sum, rows) => sum + rows.length,
          0,
        )
        return (
          <Box key={msg}>
            <Box sx={groupSectionHeaderSx}>
              <Typography variant="body1" fontWeight="bold">
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
                <Box key={colName} sx={groupSectionItemSx}>
                  <Typography
                    variant="body1"
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
    </Stack>
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
          ...bannerBaseSx,
          borderColor: 'divider',
          borderLeftColor: 'divider',
          px: 2,
          py: 2,
          display: 'flex',
          alignItems: 'center',
          gap: 1,
        }}
      >
        <CircularProgress size={14} />
        <Typography variant="body1" color="text.secondary">
          Loading validation errors…
        </Typography>
      </Box>
    )
  }

  if (allErrors.length === 0) {
    return (
      <Box
        sx={{
          ...bannerBaseSx,
          borderColor: 'success.main',
          borderLeftColor: 'success.main',
          px: 2,
          py: 2,
        }}
      >
        <Typography variant="body1" color="success.main">
          No validation errors
        </Typography>
      </Box>
    )
  }

  return (
    <Box
      sx={{
        ...bannerBaseSx,
        borderColor: 'error.main',
        borderLeftColor: 'error.main',
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          px: 2,
          py: 2,
          gap: 1,
        }}
      >
        <Typography variant="body1" fontWeight="bold">
          Validation errors
        </Typography>
        <Chip label={allErrors.length} color="error" size="small" />
        <Link
          component="button"
          variant="body1"
          onClick={() => setIsExpanded(p => !p)}
          sx={{ cursor: 'pointer', flexShrink: 0, fontWeight: 'normal' }}
        >
          {shouldExpand ? 'Collapse' : 'Expand'}
        </Link>
        {!shouldExpand && (
          <Link
            component="button"
            variant="body1"
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
              ml: 'auto',
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
          <Tab label="By row" value="row" sx={tabSx} />
          <Tab label="By column" value="column" sx={tabSx} />
          <Tab label="By message" value="message" sx={tabSx} />
        </Tabs>

        <Box sx={{ px: 2, py: 1, maxHeight: 200, overflowY: 'auto' }}>
          {/* ── By row ─────────────────────────────────────────── */}
          {groupBy === 'row' && (
            <Stack divider={<Divider />}>
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
                  <Link
                    key={i}
                    component="button"
                    variant="body1"
                    color="text.secondary"
                    onClick={() => onNavigateToCell(error.rowIndex, navCol)}
                    sx={{
                      textAlign: 'left',
                      py: 0.5,
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
                )
              })}
            </Stack>
          )}

          {/* ── By column ──────────────────────────────────────── */}
          {groupBy === 'column' && (
            <ByColumnTab
              groups={byColumn}
              columnNames={columnNames}
              columnOrder={columnOrder}
              onNavigateToCell={onNavigateToCell}
            />
          )}

          {/* ── By message ─────────────────────────────────────── */}
          {groupBy === 'message' && (
            <ByMessageTab
              groups={byMessage}
              columnNames={columnNames}
              columnOrder={columnOrder}
              onNavigateToCell={onNavigateToCell}
            />
          )}
        </Box>
      </Collapse>
    </Box>
  )
}
