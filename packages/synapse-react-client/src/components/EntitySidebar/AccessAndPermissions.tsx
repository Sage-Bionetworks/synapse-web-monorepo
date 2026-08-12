import {
  useGetEntityBundle,
  useGetRestrictionInformation,
} from '@/synapse-queries'
import {
  storeRedirectURLForOneSageLoginAndGotoURL,
  useSynapseContext,
} from '@/utils'
import { Box, Button, Stack, Typography } from '@mui/material'
import {
  RestrictableObjectType,
  RestrictionLevel,
} from '@sage-bionetworks/synapse-types'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded'
import BlockFlippedIcon from '@mui/icons-material/BlockFlipped'
import styles from './AccessAndPermissions.module.scss'
import useHasAccess from '../HasAccess/useHasAccess'
import { useState } from 'react'
import { useOneSageURL } from '@/utils/hooks'
import EntityAclEditorModal from '../EntityAclEditor/EntityAclEditorModal'

type AccessAndPermissionsProps = {
  entityId: string
  versionNumber?: number
}

function AccessAndPermissions({
  entityId,
  versionNumber,
}: AccessAndPermissionsProps) {
  const isAuthenticated = useSynapseContext().isAuthenticated
  const [showSharingSettings, setShowSharingSettings] = useState(false)
  const oneSageUrl = useOneSageURL()

  const { handleGetAccess, accessRequirementDialog } = useHasAccess(
    entityId,
    true,
  )

  const { data: restrictionInformation, isLoading: isLoadingRestrictionInfo } =
    useGetRestrictionInformation({
      restrictableObjectType: RestrictableObjectType.ENTITY,
      objectId: entityId,
    })
  const { data: entityBundle, isLoading: isLoadingEntityBundle } =
    useGetEntityBundle(entityId, versionNumber)

  const isLoading = isLoadingRestrictionInfo || isLoadingEntityBundle

  const canView = entityBundle?.permissions.canView
  const canDownload = entityBundle?.permissions.canDownload

  const hasUnmetAccessRequirement =
    restrictionInformation?.hasUnmetAccessRequirement
  const restrictionLevel = restrictionInformation?.restrictionLevel

  const showAccessButton =
    !isLoadingRestrictionInfo &&
    restrictionLevel !== undefined &&
    restrictionLevel !== RestrictionLevel.OPEN
  const accessButtonText = hasUnmetAccessRequirement
    ? 'Request to download'
    : 'View Terms'
  const accessButtonVariant = hasUnmetAccessRequirement
    ? 'contained'
    : 'outlined'

  const checkIcon = <CheckCircleRoundedIcon sx={{ color: '#3E8379' }} />
  const blockIcon = <BlockFlippedIcon sx={{ color: '#D42322' }} />

  const downloadIcon =
    canDownload && !hasUnmetAccessRequirement ? checkIcon : blockIcon

  let downloadText: string

  if (!canDownload) {
    downloadText = "You don't have permission to download"
  } else if (hasUnmetAccessRequirement) {
    downloadText = 'You must request access to download'
  } else {
    downloadText = 'You can download'
  }

  const viewText = canView ? 'You can view metadata' : "You can't view metadata"

  return (
    <Stack className={styles.accessAndPermissionsContainer}>
      {isAuthenticated && !isLoading && (
        <>
          <Box className={styles.accessAndPermissionsRow}>
            {canView ? checkIcon : blockIcon}
            <Typography
              className={`${styles.accessAndPermissionsText}${!canView ? ` ${styles.accessAndPermissionsBlockedTextColor}` : ''}`}
            >
              {viewText}
            </Typography>
          </Box>
          <Box className={styles.accessAndPermissionsRow}>
            {downloadIcon}
            <Typography
              className={`${styles.accessAndPermissionsText}${downloadIcon === blockIcon ? ` ${styles.accessAndPermissionsBlockedTextColor}` : ''}`}
            >
              {downloadText}
            </Typography>
          </Box>
        </>
      )}
      <Box className={styles.buttonContainer}>
        {showAccessButton && (
          <Button
            className={`${styles.button} ${accessButtonVariant === 'outlined' ? styles.outlinedButton : ''}`}
            variant={accessButtonVariant}
            onClick={handleGetAccess}
          >
            {accessButtonText}
          </Button>
        )}
        {isAuthenticated ? (
          <Button
            className={`${styles.button} ${styles.outlinedButton}`}
            variant="outlined"
            onClick={() => setShowSharingSettings(true)}
          >
            Sharing Settings
          </Button>
        ) : (
          <Button
            className={styles.button}
            variant="contained"
            onClick={() => {
              storeRedirectURLForOneSageLoginAndGotoURL(oneSageUrl.toString())
            }}
          >
            Sign in to your account
          </Button>
        )}
      </Box>
      {accessRequirementDialog}
      <EntityAclEditorModal
        entityId={entityId}
        open={showSharingSettings}
        onClose={() => setShowSharingSettings(false)}
      />
    </Stack>
  )
}

export default AccessAndPermissions
