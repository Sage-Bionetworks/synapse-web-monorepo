import { Stack, Typography } from '@mui/material'
import { useAridhiaEndpoints } from '@sage-bionetworks/synapse-portal-framework/components/useAridhiaEndpoints'
import AccessIcon, {
  RestrictionUiType,
} from 'synapse-react-client/components/HasAccess/AccessIcon'
import HasAccessV2 from 'synapse-react-client/components/HasAccess/HasAccessV2'
import AridhiaAccessStatus from 'synapse-react-client/components/Aridhia/AridhiaAccessStatus'
import { getDatasetAccessRoute } from './datasetSource'

export type DatasetAccessStatusProps = {
  source: string | null
  id: string
  datasetCode: string | null
  /** Show a text label next to the access icon */
  showText?: boolean
}

/**
 * Shows whether the current user can access a dataset, using the access
 * system that governs the dataset's source (open repository, C-Path RDCA-DAP,
 * or Synapse access requirements).
 */
export function DatasetAccessStatus(props: DatasetAccessStatusProps) {
  const { source, id, datasetCode, showText = false } = props
  const { fairPortalUrl } = useAridhiaEndpoints()

  switch (getDatasetAccessRoute(source)) {
    case 'open':
      return (
        <Stack direction="row" sx={{ alignItems: 'center', gap: '5px' }}>
          <AccessIcon restrictionUiType={RestrictionUiType.Accessible} />
          {showText && <Typography variant="body1">Open access</Typography>}
        </Stack>
      )
    case 'cpath':
      return (
        <AridhiaAccessStatus
          fairPortalUrl={fairPortalUrl}
          datasetCode={datasetCode ?? ''}
        />
      )
    case 'synapse':
      return <HasAccessV2 entityId={id} showButtonText={showText} />
  }
}
