import { useCallback, useState } from 'react'
import { GridModelSnapshot } from '../DataGridTypes'
import { createLinkAndDownload } from '../../CitationPopover/CitationPopoverUtils'
import { displayToast } from '../../ToastMessage'

// Simple CSV escape function
function escapeCSVValue(value: string): string {
  // If value contains comma, newline, or double quote, wrap in quotes and escape quotes
  if (value.includes(',') || value.includes('\n') || value.includes('"')) {
    return `"${value.replace(/"/g, '""')}"`
  }
  return value
}

// Simple CSV generation function
function generateCSV(headers: string[], data: string[][]): string {
  const rows = [
    headers.map(escapeCSVValue).join(','),
    ...data.map(row => row.map(escapeCSVValue).join(',')),
  ]
  return rows.join('\n')
}

export interface UseExportDataGridToCsvOptions {
  filename: string
}

export function useExportDataGridToCsv(options: UseExportDataGridToCsvOptions) {
  const { filename } = options
  const [isExporting, setIsExporting] = useState(false)

  const exportToCsv = useCallback(
    (modelSnapshot: GridModelSnapshot) => {
      if (isExporting) {
        return
      }

      setIsExporting(true)

      try {
        const { columnNames, columnOrder, rows } = modelSnapshot

        // Build the CSV data structure
        // Header row: column names in the correct order
        const headers = columnOrder
          .map(index => columnNames[index])
          .filter(Boolean)

        // Data rows: map each row's data vector according to column order
        const data = rows.map(row => {
          return columnOrder.map(index => {
            const value: unknown = row.data[index]
            // Return raw value without formatting
            // Convert to string for CSV, empty string for null/undefined
            if (value === null || value === undefined) {
              return ''
            }
            // Handle primitives
            if (
              typeof value === 'string' ||
              typeof value === 'number' ||
              typeof value === 'boolean'
            ) {
              return String(value)
            }
            // Handle objects and arrays by serializing to JSON
            return JSON.stringify(value)
          })
        })

        // Generate CSV
        const csv = generateCSV(headers, data)

        // Create blob and download
        const blob = new Blob([csv], { type: 'text/csv' })
        const url = URL.createObjectURL(blob)

        // Generate filename with timestamp
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
        const fullFilename = `${filename}-${timestamp}`

        createLinkAndDownload(fullFilename, 'csv', url)

        // Clean up
        URL.revokeObjectURL(url)
        displayToast('CSV export completed successfully', 'success')
      } catch (error) {
        displayToast(
          `CSV export failed: ${
            error instanceof Error ? error.message : 'Unknown error'
          }`,
          'danger',
        )
      } finally {
        setIsExporting(false)
      }
    },
    [filename, isExporting],
  )

  return {
    exportToCsv,
    isExporting,
  }
}
