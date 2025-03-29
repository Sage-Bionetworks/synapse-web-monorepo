import { useGetQueryResultBundleWithAsyncStatus } from '@/synapse-queries'
import { SynapseConstants } from '@/utils'
import { isEntityRefCollectionView } from '@/utils/functions/EntityTypeUtils'
import { WarningSharp } from '@mui/icons-material'
import { Typography } from '@mui/material'
import { QueryBundleRequest, Table } from '@sage-bionetworks/synapse-types'
import { HelpPopover } from '../HelpPopover/HelpPopover'

const DATASETS_CURRENT_VERSION_HELP =
  'Files may be unavailable because you do not have permission to see them, they have been deleted, or the Dataset has been misconfigured.'

// Help text for snapshot does not indicate that files were deleted, because the deleted file would have been captured in the snapshot
const DATASETS_SNAPSHOT_HELP =
  'Files may be unavailable because you do not have permission to see them or the Dataset was misconfigured.'

export type MissingQueryResultsWarningProps = {
  entity: Table
  versionNumber?: number
}

/**
 * If possible, this component will render a warning message if results may be missing from the query due to user permissions or
 * entities being deleted. If not possible, it will render an empty fragment.
 */
function MissingQueryResultsWarning({
  entity,
}: MissingQueryResultsWarningProps) {
  // Currently, Datasets and Dataset collections are the only table type for which we can reliably get this info.
  // Other cases will need a new service, tracked by PLFM-7046
  const isMissingResultsCalculable = entity && isEntityRefCollectionView(entity)

  const request: QueryBundleRequest = {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    query: {
      sql: `SELECT * FROM ${entity.id!}${
        !entity.isLatestVersion && entity.versionNumber
          ? `.${entity.versionNumber}`
          : ''
      }`,
    },
    entityId: entity.id!,
    partMask: SynapseConstants.BUNDLE_MASK_QUERY_COUNT,
  }

  const { data: queryResult } = useGetQueryResultBundleWithAsyncStatus(
    request,
    {
      enabled: isMissingResultsCalculable,
    },
  )
  if (isMissingResultsCalculable && queryResult && entity) {
    const totalVisibleResults = queryResult.responseBody!.queryCount!
    const totalResults = entity.items?.length ?? 0

    if (totalVisibleResults >= totalResults) {
      // All the results are visible, so there is no need to show a warning.
      // SWC-6727 / PLFM-8326 - `totalVisibleResults` should never be greater than `totalResults`, but in case it is (e.g. stale cache),
      // don't show the warning.
      return <></>
    }

    const difference = totalResults - totalVisibleResults

    let helpMessage = ''

    if (entity.isLatestVersion) {
      helpMessage = DATASETS_CURRENT_VERSION_HELP
    } else {
      helpMessage = DATASETS_SNAPSHOT_HELP
    }

    return (
      <Typography
        className="SRC-centerContent"
        style={{
          marginLeft: 10,
        }}
        variant="smallText1"
        color="textSecondary"
      >
        <WarningSharp
          className="SRC-color-warning"
          style={{ fontSize: '16px' }}
        />
        {difference.toLocaleString() + ' Unavailable'}
        <HelpPopover
          className="SRC-margin-left-5"
          markdownText={helpMessage}
          placement="right"
        ></HelpPopover>
      </Typography>
    )
  } else {
    return <></>
  }
}

export default MissingQueryResultsWarning
