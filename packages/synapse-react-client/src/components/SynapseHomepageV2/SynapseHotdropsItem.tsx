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
import styles from './HotdropsAndNews.module.scss'

dayjs.extend(relativeTime)

export type SynapseHotDropItemProps = {
  entityHeader: EntityHeader
}

export function SynapseHotDropItem({ entityHeader }: SynapseHotDropItemProps) {
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
      className={styles.item}
    >
      <Box className={styles.itemContent}>
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
      <Box className={styles.itemAction}>
        <Chip className={styles.chip} label={typeName} color={chipColor} />
      </Box>
    </Box>
  )
}
