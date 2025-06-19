import { useGetEntityBundle } from '@/synapse-queries'
import {
  isEntityRefCollectionView,
  isTable,
  isVersionableEntity,
} from '@/utils/functions/EntityTypeUtils'
import { truncateString } from '@/utils/functions/StringUtils'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import { Entity } from '@sage-bionetworks/synapse-types'
import { ActionConfiguration } from '../action_menu/EntityActionMenu'

const MAX_VERSION_LABEL_LENGTH = 50
export type EntityTitleBarVersionInfoProps = {
  entityId: string
  versionNumber?: number
  toggleShowVersionHistory: ActionConfiguration['onClick']
}

function getDisplayedVersionLabel(entity: Entity): string | null {
  if (!isVersionableEntity(entity)) {
    return null
  }
  if (isTable(entity) && entity.isLatestVersion) {
    return null
  }
  return entity.versionLabel ?? null
}

function getDisplayedVersionNumber(entity: Entity): string | null {
  if (!isVersionableEntity(entity)) {
    return null
  }
  if (isTable(entity) && entity.isLatestVersion) {
    if (isEntityRefCollectionView(entity)) {
      return 'Draft Version'
    }
    return 'Current Version'
  }
  return `V${entity.versionNumber}${entity.isLatestVersion ? ' (Current)' : ''}`
}

export function EntityTitleBarVersionInfo(
  props: EntityTitleBarVersionInfoProps,
) {
  const { entityId, versionNumber, toggleShowVersionHistory } = props

  const { data: bundle } = useGetEntityBundle(entityId, versionNumber)

  const isVersionable = bundle?.entity && isVersionableEntity(bundle.entity)

  const fullVersionLabel =
    bundle?.entity && getDisplayedVersionLabel(bundle.entity)
  const truncatedVersionLabel = fullVersionLabel
    ? truncateString(fullVersionLabel, MAX_VERSION_LABEL_LENGTH)
    : undefined

  const versionNumberDisplay =
    bundle?.entity && getDisplayedVersionNumber(bundle.entity)

  if (!isVersionable) {
    return null
  }

  return (
    <Box sx={{ marginTop: '3px' }}>
      <Tooltip title={fullVersionLabel} placement={'bottom'}>
        <Typography
          component={'span'}
          variant="smallText1"
          sx={{
            color: 'grey.700',
            fontStyle: 'italic',
          }}
        >
          {truncatedVersionLabel}
        </Typography>
      </Tooltip>
      {fullVersionLabel && versionNumberDisplay && (
        <Typography
          component={'span'}
          variant="smallText1"
          sx={{
            color: 'grey.700',
            marginLeft: '5px',
            marginRight: '5px',
          }}
        >
          /
        </Typography>
      )}
      <Tooltip title={'Click to show version history'} placement={'top'}>
        <Link
          onClick={toggleShowVersionHistory}
          variant="smallText1"
          sx={{ fontWeight: 400 }}
        >
          {versionNumberDisplay}
        </Link>
      </Tooltip>
    </Box>
  )
}

export const EXPORTED_FOR_UNIT_TESTING = {
  getDisplayedVersionLabel,
  getDisplayedVersionNumber,
}
