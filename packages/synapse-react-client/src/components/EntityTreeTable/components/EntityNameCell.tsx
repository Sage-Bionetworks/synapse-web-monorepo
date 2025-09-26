import { CellContext } from '@tanstack/react-table'
import { EntityBundleRow } from '../EntityTreeTable'
import { Box } from '@mui/system'
import { IconButton, Skeleton } from '@mui/material'
import { ChevronRight, ExpandMore } from '@mui/icons-material'
import { useEntityTreeTableContext } from './EntityTreeTableContext'
import { EntityLink } from '@/components/EntityLink'
import { useGetEntityBundle } from '@/synapse-queries'

export const NameCell: React.FC<CellContext<EntityBundleRow, unknown>> = ({
  row,
}) => {
  const { expanded, loadingIds, handleToggleExpanded } =
    useEntityTreeTableContext()
  const { entityHeader, depth, isLeaf } = row.original
  const { data: bundle, isLoading: isEntityBundleLoading } = useGetEntityBundle(
    row.original.entityId,
    row.original.versionNumber,
  )
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
      {!hasChildren && <Box sx={{ width: 32 }} />}

      {/*
        Ensure the name column can shrink and long names are truncated.
        `minWidth: 0` is required on flex children so `overflow: hidden`
        can actually clip the content. We target descendant `a` and `p`
        elements because `EntityLink` renders a MUI Link (anchor) or a p.
      */}
      <Box
        sx={{
          flex: 1,
          minWidth: 0,
          marginLeft: 1,
          // Style the inner Link or paragraph for truncation
          '& a, & p': {
            display: 'block',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          },
        }}
      >
        {bundle && <EntityLink entity={bundle.entity} />}
      </Box>

      {(loadingIds.has(entityHeader.id) || isEntityBundleLoading) && (
        <Skeleton width={'100%'} />
      )}
    </Box>
  )
}
