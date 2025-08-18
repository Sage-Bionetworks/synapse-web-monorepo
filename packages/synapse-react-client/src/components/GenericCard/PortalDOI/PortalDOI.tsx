import CopyToClipboardIcon from '@/components/CopyToClipboardIcon'
import { CreateOrUpdateDoiModal } from '@/components/doi/CreateOrUpdateDoiModal'
import { useGetDOIAssociation } from '@/synapse-queries/doi/useDOI'
import { useGetUserPortalPermissions } from '@/synapse-queries/portal/usePortal'
import { CreateTwoTone } from '@mui/icons-material'
import { Box, IconButton, Skeleton, Tooltip } from '@mui/material'
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

  const doiOrgUrl = doi ? `https://doi.org/${doi.doiUri}` : undefined

  return (
    <>
      <CreateOrUpdateDoiModal
        open={showEditModal}
        onClose={() => setShowEditModal(false)}
        objectType={'PORTAL_RESOURCE'}
        objectId={resourceId}
        portalId={portalId}
      />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 0.5,
          // set height to 0 to prevent expanding the table row
          height: 0,
        }}
      >
        {doi && (
          <>
            <Link href={doiOrgUrl} target={'_blank'}>
              {doiOrgUrl}
            </Link>
            <CopyToClipboardIcon
              size="small"
              value={doi.doiUrl!}
              sx={{ color: 'inherit' }}
            />

            {canMintDoi && (
              <Tooltip title={`Edit DOI`}>
                <IconButton
                  onClick={() => setShowEditModal(true)}
                  size="small"
                  sx={{ color: 'inherit' }}
                >
                  <CreateTwoTone fontSize={'inherit'} />
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
      </Box>
    </>
  )
}

export default PortalDOI
