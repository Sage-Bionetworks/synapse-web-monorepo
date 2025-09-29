import { CellContext } from '@tanstack/react-table'
import { EntityBundleRow } from '../EntityTreeTable'
import { Box } from '@mui/system'
import { IconButton } from '@mui/material'
import { ChevronRight, ExpandMore } from '@mui/icons-material'
import { useEntityTreeTableContext } from './EntityTreeTableContext'
import { EntityLink } from '@/components/EntityLink'
import { SynapseSpinner } from '@/components/LoadingScreen/LoadingScreen'

export const NameCell: React.FC<CellContext<EntityBundleRow, unknown>> = ({
  row,
}) => {
  const { expanded, loadingIds, handleToggleExpanded, entityIdClicked } =
    useEntityTreeTableContext()
  const { entityHeader, depth, isLeaf } = row.original
  const isExpanded = !!expanded[entityHeader.id]
  const hasChildren = !isLeaf
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', pl: depth * 2 }}>
      {hasChildren && (
        <IconButton
          size="small"
          loading={loadingIds.has(entityHeader.id)}
          loadingIndicator={<SynapseSpinner />}
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
        <EntityLink entity={entityHeader} entityIdClicked={entityIdClicked} />
      </Box>
    </Box>
  )
}
