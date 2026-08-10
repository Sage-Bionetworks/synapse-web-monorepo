import {
  useGetEntityBundle,
  useGetRestrictionInformation,
} from '@/synapse-queries'
import { useSynapseContext } from '@/utils'
import { Button, Stack, Typography } from '@mui/material'
import { RestrictableObjectType } from '@sage-bionetworks/synapse-types'

type AccessAndPermissionsProps = {
  entityId: string
  versionNumber?: number
}

function AccessAndPermissions({
  entityId,
  versionNumber,
}: AccessAndPermissionsProps) {
  const isAuthenticated = useSynapseContext().isAuthenticated

  const { data: restrictionInformation } = useGetRestrictionInformation({
    restrictableObjectType: RestrictableObjectType.ENTITY,
    objectId: entityId,
  })
  const { data: entityBundle } = useGetEntityBundle(entityId, versionNumber)

  const canEdit = entityBundle && entityBundle.permissions.canEdit
  const canView = entityBundle && entityBundle.permissions.canView

  return (
    <Stack>
      <Typography>You can view metadata</Typography>
      <Typography>You must request access to download</Typography>
      <Typography>You can’t edit or delete</Typography>
      <button className="container">
        <Button>Request to download</Button>
        <Button>Sharing settings</Button>
      </button>
    </Stack>
  )
}

export default AccessAndPermissions
