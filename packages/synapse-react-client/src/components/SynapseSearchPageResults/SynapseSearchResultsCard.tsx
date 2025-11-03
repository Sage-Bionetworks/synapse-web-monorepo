import { formatDate } from '@/utils/functions/DateFormatter'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import { StyledComponent } from '@emotion/styled'
import { Update as UpdateIcon } from '@mui/icons-material'
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
import FavoriteButton from '../favorites/FavoriteButton'
import { EntityDownloadButton } from '../EntityDownloadButton/EntityDownloadButton'
import HasAccessChip from './HasAccessChip'
import { searchResultsCardChipStyles } from './chipStyles'

export type SynapseSearchResultsCardProps = {
  entityId: string
  name: string
  entityType: EntityType
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
          <EntityDownloadButton
            entityId={props.entityId}
            name={props.name}
            entityType={props.entityType}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Chip
          icon={<EntityTypeIcon type={props.entityType} wrap={false} />}
          label={props.entityType}
          sx={{ ...searchResultsCardChipStyles }}
        />
        <HasAccessChip entityId={props.entityId} />
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
