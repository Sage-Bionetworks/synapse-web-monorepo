import ConditionalWrapper from '@/components/utils/ConditionalWrapper'
import {
  useGetEntity,
  useGetQueryResultBundleWithAsyncStatus,
} from '@/synapse-queries'
import { formatDate } from '@/utils/functions/DateFormatter'
import {
  convertToEntityType,
  entityTypeToFriendlyName,
  isDataset,
  isTable,
} from '@/utils/functions/EntityTypeUtils'
import { BUNDLE_MASK_LAST_UPDATED_ON } from '@/utils/SynapseConstants'
import { InfoTwoTone } from '@mui/icons-material'
import {
  Box,
  Breadcrumbs,
  Skeleton,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import dayjs from 'dayjs'
import { UserBadge } from '../../UserCard/UserBadge'
import {
  DATASET_CREATED_BY_TOOLTIP,
  INFO_ICON_SX,
  getTableLastRebuiltTooltip,
  getTableModifiedOnAccessibleLabel,
  getTableModifiedOnTooltip,
} from './createdByModifiedByTooltips'

export type CreatedByModifiedByProps = {
  entityId: string
  versionNumber?: number
}

function Separator() {
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  if (isSmallScreen) {
    return null
  }
  return (
    <Typography variant={'breadcrumb1'} sx={{ color: 'grey.700' }}>
      /
    </Typography>
  )
}

export function CreatedByModifiedBy(props: CreatedByModifiedByProps) {
  const { entityId, versionNumber } = props
  const entityIdWithVersion = `${entityId}${
    versionNumber ? `.${versionNumber}` : ''
  }`

  const { data: entity } = useGetEntity(entityId, versionNumber)

  const { data: tableQueryResult } = useGetQueryResultBundleWithAsyncStatus(
    {
      entityId,
      query: {
        sql: `SELECT * FROM ${entityIdWithVersion} LIMIT 0`,
      },
      partMask: BUNDLE_MASK_LAST_UPDATED_ON,
      concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    },
    { enabled: !!(entity && isTable(entity)) },
  )

  const tableLastRebuilt = tableQueryResult?.responseBody?.lastUpdatedOn
  const friendlyName = entity
    ? entityTypeToFriendlyName(convertToEntityType(entity.concreteType))
    : ''

  const createdByTooltipId = `${entityIdWithVersion}-createdByTooltip`
  const modifiedByTooltipId = `${entityIdWithVersion}-modifiedByTooltip`
  const lastUpdatedTooltipId = `${entityIdWithVersion}-lastUpdatedTooltip`

  return (
    <Box
      sx={theme => ({
        bgcolor: 'grey.100',
        p: '10px',
        [theme.breakpoints.down('sm')]: {
          p: '24px 40px',
        },
      })}
    >
      <Breadcrumbs
        separator={<Separator />}
        sx={theme => ({
          '& .MuiBreadcrumbs-ol': {
            justifyContent: 'center',
            [theme.breakpoints.down('sm')]: {
              gap: '4px',
            },
          },
        })}
      >
        <ConditionalWrapper condition={!entity} wrapper={Skeleton}>
          <Typography
            sx={{ color: 'grey.700' }}
            variant={'breadcrumb1'}
            aria-describedby={createdByTooltipId}
          >
            {friendlyName} created by <UserBadge userId={entity?.createdBy} />{' '}
            on {formatDate(dayjs(entity?.createdOn))}
            {entity && isDataset(entity) && (
              <Tooltip
                id={createdByTooltipId}
                title={DATASET_CREATED_BY_TOOLTIP}
              >
                <InfoTwoTone sx={INFO_ICON_SX} />
              </Tooltip>
            )}
          </Typography>
        </ConditionalWrapper>
        <ConditionalWrapper condition={!entity} wrapper={Skeleton}>
          <Typography
            sx={{ color: 'grey.700' }}
            variant={'breadcrumb1'}
            aria-describedby={modifiedByTooltipId}
          >
            {entity && isTable(entity) ? 'Configuration' : friendlyName} last
            modified by <UserBadge userId={entity?.modifiedBy} /> on{' '}
            {formatDate(dayjs(entity?.modifiedOn))}
            {entity && isTable(entity) && (
              <Tooltip
                id={modifiedByTooltipId}
                title={getTableModifiedOnTooltip(friendlyName)}
                aria-label={getTableModifiedOnAccessibleLabel(friendlyName)}
              >
                <InfoTwoTone sx={INFO_ICON_SX} />
              </Tooltip>
            )}
          </Typography>
        </ConditionalWrapper>
        {tableLastRebuilt && (
          <Typography
            sx={{ color: 'grey.700' }}
            variant={'breadcrumb1'}
            aria-describedby={lastUpdatedTooltipId}
          >
            {friendlyName} last rebuilt on {formatDate(dayjs(tableLastRebuilt))}
            <Tooltip
              title={getTableLastRebuiltTooltip(friendlyName)}
              id={lastUpdatedTooltipId}
            >
              <InfoTwoTone sx={INFO_ICON_SX} />
            </Tooltip>
          </Typography>
        )}
      </Breadcrumbs>
    </Box>
  )
}

export default CreatedByModifiedBy
