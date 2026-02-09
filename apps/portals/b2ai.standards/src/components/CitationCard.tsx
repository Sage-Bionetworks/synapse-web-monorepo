import { Box, Link, Typography } from '@mui/material'
import { Row, RowSet, SelectColumn } from '@sage-bionetworks/synapse-types'

export type Citation = {
  ref_url: string
  ref_title?: string
  ref_authors?: string[]
  ref_journal?: string
  ref_publication_year?: number
}

type DetailsPageContext = {
  rowSet?: RowSet
  rowData?: Row
}

/**
 * Extract and parse a JSON column value from a DetailsPageContext.
 * Returns null if the column is not found or the value is empty.
 */
export function extractJsonFromContext<T>(
  context: DetailsPageContext,
  columnName: string,
): T | null {
  if (!context.rowSet || !context.rowData) return null

  const index = context.rowSet.headers.findIndex(
    (h: SelectColumn) => h.name === columnName,
  )
  if (index < 0) return null

  const value = context.rowData.values[index]
  if (!value) return null

  try {
    return JSON.parse(value) as T
  } catch {
    return null
  }
}

type CitationCardProps = {
  citation: Citation
}

export function CitationCard({ citation }: CitationCardProps) {
  const { ref_url, ref_title, ref_authors, ref_journal, ref_publication_year } =
    citation

  // Show all authors
  const authorDisplay = ref_authors?.join(', ')
  // Truncate author list if desired:
  // const authorDisplay =
  //   ref_authors && ref_authors.length > 3
  //     ? `${ref_authors.slice(0, 3).join(', ')}, et al.`
  //     : ref_authors?.join(', ')

  // Build metadata parts, filtering out missing values
  const metadataParts = [
    authorDisplay,
    ref_journal,
    ref_publication_year,
  ].filter(Boolean)
  const metadata =
    metadataParts.length > 0 ? ` — ${metadataParts.join(', ')}` : ''

  // Use title if available, otherwise fall back to showing the URL
  const label = ref_title || ref_url

  return (
    <Box sx={{ mb: 1 }}>
      <Link
        href={ref_url}
        target="_blank"
        rel="noopener noreferrer"
        sx={{ fontWeight: 'bold' }}
      >
        {label}
      </Link>
      {metadata && (
        <Typography
          variant="body2"
          component="span"
          sx={{ color: 'text.secondary' }}
        >
          {metadata}
        </Typography>
      )}
    </Box>
  )
}
