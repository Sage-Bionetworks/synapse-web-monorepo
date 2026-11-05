import { DataGridRow } from '../DataGridTypes'
import {
  Box,
  Chip,
  Collapse,
  Divider,
  Link,
  Stack,
  Tab,
  Tabs,
  Typography,
} from '@mui/material'
import pluralize from 'pluralize'
import { Fragment, useMemo, useState } from 'react'
import { SynapseSpinner } from '../../LoadingScreen/LoadingScreen'
import {
  collectValidationErrors,
  groupErrors,
  LimitedGroup,
  limitGroups,
  RowEntry,
} from '../utils/groupValidationErrors'

type GroupBy = 'row' | 'column' | 'message'

/** Upper bound on errors rendered in the expanded panel. Each listed error is
 *  a styled MUI element, so rendering every error of a large grid freezes and
 *  can crash the tab. The badge still shows the full count. */
export const MAX_LISTED_ERRORS = 100

type ValidationAlertProps = {
  rowValues: DataGridRow[]
  columnNames: string[]
  columnOrder: number[]
  onNavigateToCell: (rowIndex: number, colIndex: number) => void
  isLoading?: boolean
  /** When provided, the banner offers a "Hide" link that calls this. */
  onHide?: () => void
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

const headerLinkSx = {
  cursor: 'pointer',
  flexShrink: 0,
  fontWeight: 'normal',
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
  hiddenRowCount,
  navCol,
  onNavigateToCell,
}: {
  rows: RowEntry[]
  hiddenRowCount: number
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
      {hiddenRowCount > 0 && (
        <Typography component="span" variant="body1" color="text.disabled">
          +{hiddenRowCount.toLocaleString()} more
        </Typography>
      )}
    </>
  )
}

/** Summarizes a group's entries that were dropped by the listing cap. */
function HiddenEntries({ count, noun }: { count: number; noun: string }) {
  if (count === 0) return null
  return (
    <Box sx={groupSectionItemSx}>
      <Typography variant="body1" color="text.disabled">
        +{count.toLocaleString()} more {pluralize(noun, count)}
      </Typography>
    </Box>
  )
}

function ByColumnTab({
  groups,
  columnNames,
  columnOrder,
  onNavigateToCell,
}: NavProps & { groups: LimitedGroup[] }) {
  return (
    <Stack divider={<Divider />} spacing={1}>
      {groups.map(({ key: colName, totalCount, entries, hiddenEntryCount }) => {
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
              <Chip
                label={totalCount.toLocaleString()}
                color="error"
                size="small"
              />
            </Box>
            {entries.map(({ key: msg, rows, hiddenRowCount }) => (
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
                  hiddenRowCount={hiddenRowCount}
                  navCol={navCol}
                  onNavigateToCell={onNavigateToCell}
                />
              </Box>
            ))}
            <HiddenEntries count={hiddenEntryCount} noun="message" />
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
}: NavProps & { groups: LimitedGroup[] }) {
  return (
    <Stack divider={<Divider />} spacing={1}>
      {groups.map(({ key: msg, totalCount, entries, hiddenEntryCount }) => (
        <Box key={msg}>
          <Box sx={groupSectionHeaderSx}>
            <Typography variant="body1" fontWeight="bold">
              {msg}
            </Typography>
            <Chip
              label={totalCount.toLocaleString()}
              color="error"
              size="small"
            />
          </Box>
          {entries.map(({ key: colName, rows, hiddenRowCount }) => {
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
                  hiddenRowCount={hiddenRowCount}
                  navCol={navCol}
                  onNavigateToCell={onNavigateToCell}
                />
              </Box>
            )
          })}
          <HiddenEntries count={hiddenEntryCount} noun="column" />
        </Box>
      ))}
    </Stack>
  )
}

export const ValidationAlert = ({
  rowValues,
  columnNames,
  columnOrder,
  onNavigateToCell,
  isLoading = false,
  onHide,
}: ValidationAlertProps) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [groupBy, setGroupBy] = useState<GroupBy>('row')

  const allErrors = useMemo(
    () => collectValidationErrors(rowValues),
    [rowValues],
  )

  const byColumn = useMemo(
    () =>
      limitGroups(
        groupErrors(
          allErrors,
          e => e.columnName,
          e => e.message,
        ),
        MAX_LISTED_ERRORS,
      ),
    [allErrors],
  )

  const byMessage = useMemo(
    () =>
      limitGroups(
        groupErrors(
          allErrors,
          e => e.message,
          e => e.columnName,
        ),
        MAX_LISTED_ERRORS,
      ),
    [allErrors],
  )

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
        <SynapseSpinner size={14} margin="0" />
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
        <Chip
          label={allErrors.length.toLocaleString()}
          color="error"
          size="small"
        />
        <Typography variant="body1" fontWeight="bold">
          Validation errors
        </Typography>
        {onHide && (
          <Link
            component="button"
            variant="body1"
            onClick={onHide}
            sx={headerLinkSx}
          >
            Hide
          </Link>
        )}
        <Link
          component="button"
          variant="body1"
          onClick={() => setIsExpanded(p => !p)}
          sx={headerLinkSx}
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
      <Collapse in={shouldExpand} unmountOnExit>
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
              {allErrors.slice(0, MAX_LISTED_ERRORS).map((error, i) => {
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

          {allErrors.length > MAX_LISTED_ERRORS && (
            <Typography variant="body2" color="text.secondary" sx={{ pt: 1 }}>
              Showing the first {MAX_LISTED_ERRORS.toLocaleString()} of{' '}
              {allErrors.length.toLocaleString()} errors
            </Typography>
          )}
        </Box>
      </Collapse>
    </Box>
  )
}
