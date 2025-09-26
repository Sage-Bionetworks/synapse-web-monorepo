import { CellContext } from '@tanstack/react-table'
import { EntityBundleRow } from '../EntityTreeTable'
import { Box } from '@mui/system'
import { CircularProgress, IconButton, Typography } from '@mui/material'
import { ChevronRight, ExpandMore } from '@mui/icons-material'
import EntityTypeIcon from '@/components/EntityIcon'
import { convertToEntityType } from '@/utils/functions/EntityTypeUtils'
import { useEntityTreeTableContext } from './EntityTreeTableContext'

export const NameCell: React.FC<CellContext<EntityBundleRow, unknown>> = ({
  row,
}) => {
  const { expanded, loadingIds, handleToggleExpanded } =
    useEntityTreeTableContext()
  const { entityHeader, depth, isLeaf } = row.original
  const isExpanded = !!expanded[entityHeader.id]
  const hasChildren = !isLeaf
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', pl: depth * 2 }}>
      {hasChildren && (
        <IconButton
          size="small"
          onClick={() => handleToggleExpanded(entityHeader.id)}
          aria-label={isExpanded ? 'Collapse' : 'Expand'}
        >
          {isExpanded ? <ExpandMore /> : <ChevronRight />}
        </IconButton>
      )}
      {!hasChildren && <Box sx={{ width: 32 }} />}{' '}
      {/* Placeholder for alignment */}
      <EntityTypeIcon type={convertToEntityType(entityHeader.type)} />
      <Typography sx={{ ml: '5px' }} variant="body1">
        {entityHeader.name}
      </Typography>
      {loadingIds.has(entityHeader.id) && (
        <CircularProgress size={16} sx={{ ml: 1 }} />
      )}
    </Box>
  )
}
