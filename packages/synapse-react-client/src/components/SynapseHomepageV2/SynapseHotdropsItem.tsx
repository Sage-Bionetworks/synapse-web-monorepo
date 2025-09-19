import { BackendDestinationEnum, getEndpoint } from '@/utils/functions'
import {
  convertToEntityType,
  entityTypeToFriendlyName,
} from '@/utils/functions/EntityTypeUtils'
import { Box, Chip, Typography } from '@mui/material'
import { EntityHeader } from '@sage-bionetworks/synapse-types'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { UserBadge } from '../UserCard/UserBadge'

dayjs.extend(relativeTime)

export type SynapseHotDropItemProps = {
  entityHeader: EntityHeader
  isMobileView: boolean
}

export function SynapseHotDropItem({
  entityHeader,
  isMobileView,
}: SynapseHotDropItemProps) {
  const typeName = entityTypeToFriendlyName(
    convertToEntityType(entityHeader.type),
  )
  const chipColor = typeName === 'Project' ? 'primary' : 'secondary'
  return (
    <Box
      onClick={() => {
        window.open(
          `${getEndpoint(BackendDestinationEnum.PORTAL_ENDPOINT)}Synapse:${
            entityHeader.id
          }`,
          '_blank',
        )
      }}
      sx={{
        display: 'grid',
        borderColor: 'grey.400',
        borderWidth: '1px',
        borderStyle: 'solid',
        width: '100%',
        gridTemplateColumns: '80% 20%',
        backgroundColor:
          'rgba(255, 255, 255, 0.8)' /* White with 50% opacity */,
        '&:hover': {
          backgroundColor: 'rgba(233, 243, 254, 0.9)',
          cursor: 'pointer',
        },
        p: '15px 0px',
      }}
    >
      <Box sx={{ color: 'grey.900', pl: '15px', pr: '10px' }}>
        <Typography
          variant="body1"
          sx={{ color: 'grey.900', fontSize: '16px' }}
          noWrap
        >
          {entityHeader.name}
        </Typography>
        <Typography
          component={'span'}
          variant={'body1'}
          sx={{ color: 'grey.700' }}
        >
          Created {dayjs(entityHeader.createdOn).fromNow()} by{' '}
          <UserBadge userId={entityHeader.createdBy} />
        </Typography>
      </Box>
      <Box sx={{ justifySelf: 'end', pr: '15px', alignSelf: 'start' }}>
        <Chip
          sx={{ borderRadius: '5px', height: '24px' }}
          label={typeName}
          color={chipColor}
        />
      </Box>
    </Box>
  )
}
