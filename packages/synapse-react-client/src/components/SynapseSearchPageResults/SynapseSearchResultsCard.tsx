import { formatDate } from '@/utils/functions/DateFormatter'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import { StyledComponent } from '@emotion/styled'
import {
  Download as DownloadIcon,
  Update as UpdateIcon,
} from '@mui/icons-material'
import {
  Box,
  Chip,
  Link,
  Paper,
  PaperProps,
  styled,
  Typography,
} from '@mui/material'
import dayjs from 'dayjs'
import { EntityTypeIcon } from '../EntityIcon'
import { EntityType } from '@sage-bionetworks/synapse-client'
import { DropdownMenu, DropdownMenuItem } from '../menu/DropdownMenu'
import FavoriteButton from '../favorites/FavoriteButton'

export type SynapseSearchResultsCardProps = {
  entityId: string
  name: string
  entityType: string
  modifiedOn: number
}

const SynapseSearchResultsCardContainer: StyledComponent<PaperProps> = styled(
  Paper,
  {
    label: 'SynapseSearchResultsCardContainer',
  },
)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '250px',
  width: '80%',
  borderRadius: '10px',
  padding: '32px',
  gap: '15px',
}))

export function SynapseSearchResultsCard(props: SynapseSearchResultsCardProps) {
  // Create menu items based on entity type
  const createMenuItemsForEntityType = (
    entityId: string,
    entityName: string,
    entityType: string,
  ) => {
    const entityTypeLower = entityType.toLowerCase()

    // Create dynamic menu items with props
    const dynamicConfigs: Record<string, DropdownMenuItem> = {
      downloadFile: {
        text: 'Download File',
        onClick: () => {
          console.log('Download file:', entityId, entityName)
          // TODO: Implement file download functionality
        },
        tooltipText: 'Download this file directly',
      },
      addToCart: {
        text: 'Add to Download Cart',
        onClick: () => {
          console.log('Add file(s) to cart:', entityId)
          // TODO: Implement add to cart functionality
        },
        tooltipText: 'Add file(s) to your download cart',
      },
      programmaticAccess: {
        text: 'Programmatic Access',
        onClick: () => {
          console.log('Show programmatic access for:', entityId)
          // TODO: Implement programmatic access options
        },
        tooltipText: 'View programmatic access options',
      },
      programmaticAccessDocker: {
        text: 'Programmatic Access (Docker)',
        onClick: () => {
          console.log('Show programmatic access (Docker) for:', entityId)
          // TODO: Implement programmatic access (Docker) options
        },
        tooltipText: 'View programmatic options to pull Docker image',
      },
      exportTable: {
        text: 'Export Table',
        onClick: () => {
          console.log('Export table for:', entityId)
          // TODO: Implement export table functionality
        },
        tooltipText: 'Export table data',
      },
    }

    if (entityTypeLower === 'file') {
      return [
        [dynamicConfigs.downloadFile],
        [dynamicConfigs.addToCart, dynamicConfigs.programmaticAccess],
      ]
    } else if (entityTypeLower === 'project' || entityTypeLower === 'folder') {
      return [[dynamicConfigs.addToCart, dynamicConfigs.programmaticAccess]]
    } else if (
      entityTypeLower === 'entityview' ||
      entityTypeLower === 'dataset' ||
      entityTypeLower === 'table'
    ) {
      return [[dynamicConfigs.addToCart, dynamicConfigs.programmaticAccess]]
    } else if (entityTypeLower === 'dockerrepo') {
      return [[dynamicConfigs.programmaticAccessDocker]]
    } else {
      // Other entity types (datasetcollection, materializedview, virtualtable, submissionview)
      return [[dynamicConfigs.exportTable, dynamicConfigs.programmaticAccess]]
    }
  }

  const downloadMenuItems = createMenuItemsForEntityType(
    props.entityId,
    props.name,
    props.entityType,
  )

  return (
    <SynapseSearchResultsCardContainer>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <Typography variant="headline3">
          <Link
            href={`${getEndpoint(
              BackendDestinationEnum.PORTAL_ENDPOINT,
            )}Synapse:${props.entityId}`}
          >
            {props.name}
          </Link>
        </Typography>

        <Box
          sx={{
            display: 'flex',
            gap: '16px',
            alignItems: 'center',
          }}
        >
          <FavoriteButton entityId={props.entityId} />
          <DropdownMenu
            items={downloadMenuItems}
            dropdownButtonText="Download"
            buttonTooltip="Download options for this entity"
            buttonProps={{
              variant: 'outlined',
              startIcon: <DownloadIcon />,
            }}
          />
        </Box>
      </Box>
      <Box>
        <Chip
          icon={
            <EntityTypeIcon
              type={props.entityType as EntityType}
              style={{
                color: 'inherit',
              }}
            />
          }
          label={props.entityType}
          sx={{
            backgroundColor: '#DAE9E7',
            color: '#265149',
            fontSize: '14px',
            textTransform: 'capitalize',
          }}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: '8px',
        }}
      >
        <UpdateIcon />
        <Typography
          sx={{
            fontSize: '14px',
          }}
        >
          Last updated: {formatDate(dayjs.unix(props.modifiedOn), 'M/D/YYYY')}
        </Typography>
      </Box>
    </SynapseSearchResultsCardContainer>
  )
}

export default SynapseSearchResultsCard
