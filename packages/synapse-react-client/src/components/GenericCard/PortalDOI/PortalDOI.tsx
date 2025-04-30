import CopyToClipboardIcon from '@/components/CopyToClipboardIcon'
import { CreateOrUpdateDoiModal } from '@/components/doi/CreateOrUpdateDoiModal'
import { useGetDOIAssociation } from '@/synapse-queries/doi/useDOI'
import { useGetUserPortalPermissions } from '@/synapse-queries/portal/usePortal'
import { CreateTwoTone } from '@mui/icons-material'
import { IconButton, Skeleton, Tooltip, Typography } from '@mui/material'
import Link from '@mui/material/Link'
import { useState } from 'react'

export type PortalDOIProps = {
  /** The ID of the portal created with https://rest-docs.synapse.org/rest/POST/portal.html */
  portalId: string
  /** The ID of the resource. For Portals, this is a string that serializes the resourceType and all key information for
   *  the resource */
  resourceId: string
}

/**
 * Component used to view/create/edit a DOI for a portal resource.
 */
function PortalDOI(props: PortalDOIProps) {
  const [showEditModal, setShowEditModal] = useState(false)
  const { portalId, resourceId } = props

  const { data: canMintDoi } = useGetUserPortalPermissions(portalId, {
    select: permissions => permissions.canMintDoi!,
  })

  const { data: doi, isLoading } = useGetDOIAssociation({
    id: resourceId,
    portalId,
    type: 'PORTAL_RESOURCE',
  })

  if (isLoading) {
    return <Skeleton role="progressbar" width={150} />
  }

  return (
    <>
      <CreateOrUpdateDoiModal
        open={showEditModal}
        onClose={() => setShowEditModal(false)}
        objectType={'PORTAL_RESOURCE'}
        objectId={resourceId}
        portalId={portalId}
      />
      <Typography component={'div'}>
        {doi && (
          <>
            <Link href={doi.doiUrl} target={'_blank'}>
              {doi.doiUrl}
            </Link>
            <CopyToClipboardIcon value={doi.doiUrl!} />

            {canMintDoi && (
              <Tooltip title={`Edit DOI`}>
                <IconButton onClick={() => setShowEditModal(true)}>
                  <CreateTwoTone />
                </IconButton>
              </Tooltip>
            )}
          </>
        )}
        {!doi && canMintDoi && (
          <Link role="button" onClick={() => setShowEditModal(true)}>
            Click to Create a DOI
          </Link>
        )}
      </Typography>
    </>
  )
}

export default PortalDOI
