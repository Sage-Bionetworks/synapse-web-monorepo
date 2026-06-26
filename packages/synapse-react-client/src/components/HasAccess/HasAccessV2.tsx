import { useGetRestrictionInformation } from '@/synapse-queries'
import { SRC_SIGN_IN_CLASS } from '@/utils/SynapseConstants'
import { Box, Button, SxProps, Theme } from '@mui/material'
import {
  RestrictableObjectType,
  RestrictionLevel,
} from '@sage-bionetworks/synapse-types'
import { useMemo } from 'react'
import { RestrictionUiType } from './AccessIcon'
import { useHasAccess } from './useHasAccess'

export type HasAccessProps = {
  onHide?: () => void
  entityId: string
  className?: string
  showButtonText?: boolean
  wrap?: boolean
  /**
   * If true, the component will show enhanced UI for the case where
   * - the entity is a FileEntity, AND
   * - the caller has permission to fetch the dataFileHandle, AND
   * - the dataFileHandle is an instance of ExternalFileHandleInterface (i.e. the file is not controlled by Synapse)
   * Note that this requires an additional API call that cannot be batched, so it should be avoided in bulk  contexts if possible.
   * @default false
   */
  showExternalAccessIcon?: boolean
  sx?: SxProps<Theme>
}

const buttonSx = { p: '0px', minWidth: 'unset' }

/**
 * HasAccess shows if the user has access to the file or not. If the user doesn't have access due to a restriction,
 * then a link will be shown that opens a modal with steps to request access.
 */
export function HasAccessV2(props: HasAccessProps) {
  const {
    entityId,
    showButtonText = true,
    showExternalAccessIcon = false,
  } = props

  const {
    restrictionUiType: restrictionUiTypeValue,
    accessText,
    icon,
    handleGetAccess,
    accessRequirementDialog,
  } = useHasAccess(entityId, true, undefined, { showExternalAccessIcon })

  const { data: restrictionInformation } = useGetRestrictionInformation({
    restrictableObjectType: RestrictableObjectType.ENTITY,
    objectId: entityId,
  })

  // Sign-in wrapped icon or icon alone
  const iconContainer = useMemo(() => {
    return restrictionUiTypeValue ===
      RestrictionUiType.AccessBlockedToAnonymous ? (
      <Button sx={buttonSx} className={SRC_SIGN_IN_CLASS}>
        {icon}
      </Button>
    ) : (
      icon
    )
  }, [restrictionUiTypeValue])

  // Access Requirements icon or Icon Container
  const accessRequirementsJsxOrIconContainer = useMemo(() => {
    if (!restrictionInformation || !restrictionUiTypeValue) {
      // loading
      return <></>
    }
    const hasUnmetAccessRequirement =
      restrictionInformation?.hasUnmetAccessRequirement
    const restrictionLevel = restrictionInformation?.restrictionLevel
    let linkText = ''

    if (hasUnmetAccessRequirement) {
      linkText = 'Request Access'
    } else if (RestrictionLevel.OPEN === restrictionLevel) {
      // they need to sign in
      return iconContainer
    } else {
      linkText = 'View Terms'
    }
    return (
      <>
        <Button
          sx={buttonSx}
          className={props.className}
          onClick={handleGetAccess}
        >
          {icon}
          {showButtonText && (
            <Box
              sx={{
                ml: '5px',
              }}
            >
              {linkText}
            </Box>
          )}
        </Button>
        {accessRequirementDialog}
      </>
    )
  }, [
    restrictionInformation,
    restrictionUiTypeValue,
    iconContainer,
    handleGetAccess,
    props.className,
    showButtonText,
    accessRequirementDialog,
    accessText,
    icon,
  ])

  if (!restrictionUiTypeValue) {
    // loading
    return <></>
  }

  return (
    <span style={{ whiteSpace: 'nowrap' }}>
      {accessRequirementsJsxOrIconContainer}
    </span>
  )
  return accessRequirementsJsxOrIconContainer
}

export default HasAccessV2
