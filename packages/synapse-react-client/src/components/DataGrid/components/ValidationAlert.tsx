import { DataGridRow } from '../DataGridTypes'
import { Box, Chip, Collapse, Link, Typography } from '@mui/material'
import { useEffect, useMemo, useState } from 'react'

type ValidationError = {
  rowIndex: number
  columnName: string
  message: string
}

type ValidationAlertProps = {
  rowValues: DataGridRow[]
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
  const rowSuffix = (
    <Box component="span" sx={{ color: 'text.secondary', ml: 0.5 }}>
      (Row {rowIndex + 1})
    </Box>
  )
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
      <Box component="span" sx={{ mx: 0.5 }}>
        —
      </Box>
      {message}
      {rowSuffix}
    </>
  )
}

export const ValidationAlert = ({
  rowValues,
  columnNames,
  columnOrder,
  onNavigateToCell,
}: ValidationAlertProps) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const allErrors = useMemo((): ValidationError[] => {
    const errors: ValidationError[] = []
    rowValues.forEach((row, rowIndex) => {
      if (row.__validationStatus !== 'invalid') return
      row.__cellValidationResults?.forEach((messages, columnName) => {
        messages.forEach(message =>
          errors.push({ rowIndex, columnName, message }),
        )
      })
    })
    return errors
  }, [rowValues])

  useEffect(() => {
    if (allErrors.length === 0) setIsExpanded(false)
  }, [allErrors.length])

  if (allErrors.length === 0) return null

  const firstError = allErrors[0]

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
          {isExpanded ? 'Collapse' : 'Expand'}
        </Link>
        {!isExpanded && (
          <Typography variant="body2" color="text.secondary" noWrap>
            <ErrorText
              columnName={firstError.columnName}
              message={firstError.message}
              rowIndex={firstError.rowIndex}
            />
          </Typography>
        )}
      </Box>
      <Collapse in={isExpanded}>
        <Box
          component="ul"
          sx={{
            m: 0,
            px: 2,
            pb: 1,
            listStyle: 'none',
            maxHeight: 200,
            overflowY: 'auto',
          }}
        >
          {allErrors.map((error, i) => {
            const colIdx = getColDisplayIndex(
              error.columnName,
              columnNames,
              columnOrder,
            )
            const navCol = colIdx >= 0 ? colIdx : 0
            return (
              <Box component="li" key={i} sx={{ py: 0.25 }}>
                <Link
                  component="button"
                  variant="body2"
                  color="text.secondary"
                  onClick={() => onNavigateToCell(error.rowIndex, navCol)}
                  sx={{
                    textAlign: 'left',
                    cursor: 'pointer',
                    textDecoration: 'none',
                    '&:hover': { textDecoration: 'underline' },
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
      </Collapse>
    </Box>
  )
}
