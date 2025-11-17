import { useGetRestrictionInformation } from '@/synapse-queries'
import { SRC_SIGN_IN_CLASS } from '@/utils/SynapseConstants'
import { Box, Button, SxProps, Theme } from '@mui/material'
import {
  RestrictableObjectType,
  RestrictionLevel,
} from '@sage-bionetworks/synapse-types'
import { useMemo } from 'react'
import AccessIcon, { RestrictionUiType } from './AccessIcon'
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
    wrap = true,
    showExternalAccessIcon = false,
    sx,
  } = props

  const {
    restrictionUiType: restrictionUiTypeValue,
    accessText,
    icon,
    handleGetAccess,
    accessRequirementDialog,
  } = useHasAccess(entityId, { showExternalAccessIcon })

  const { data: restrictionInformation } = useGetRestrictionInformation({
    restrictableObjectType: RestrictableObjectType.ENTITY,
    objectId: entityId,
  })

  // Sign-in wrapped icon or icon alone
  const iconContainer = useMemo(() => {
    return restrictionUiTypeValue ===
      RestrictionUiType.AccessBlockedToAnonymous ? (
      <Button
        sx={buttonSx}
        className={SRC_SIGN_IN_CLASS}
        onClick={ev => {
          if (ev.isTrusted) {
            /*
                There is a tricky problem - 
                The portals listens to click events for buttons with the class SRC_SIGN_IN_CLASS set, it listens to this event
                so that it can display the login modal.

                This button has an svg inside of it which is problematic because more often than not clicking this button will 
                instead click that svg. The event listener in the portals will break as a result.

                Though the svg may get the actual click event, because of event bubbling this button will get its onClick called.
                Once onClick is called we can manually dispatch an event off of this button. This does pose a problem, we end up in a 
                infinite loop because this button keeps dispatching click events, so we can use the isTrusted to recognize if onClick was
                triggered programmatically or by user click. Lastly, using { bubbles: true } ensures the event bubbles up to the document level.

              */
            const clickEvent = new MouseEvent('click', { bubbles: true })
            ev.currentTarget.dispatchEvent(clickEvent)
          }
        }}
      >
        <AccessIcon
          restrictionUiType={restrictionUiTypeValue}
          wrap={wrap}
          sx={{ ...sx }}
        />
      </Button>
    ) : (
      <AccessIcon
        restrictionUiType={restrictionUiTypeValue!}
        wrap={wrap}
        sx={{ ...sx }}
      />
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
          <AccessIcon
            restrictionUiType={restrictionUiTypeValue}
            wrap={wrap}
            sx={{ ...sx }}
          />
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
    wrap,
    sx,
    accessText,
    icon,
  ])

  if (!restrictionUiTypeValue) {
    // loading
    return <></>
  }

  if (wrap) {
    return (
      <span style={{ whiteSpace: 'nowrap' }}>
        {accessRequirementsJsxOrIconContainer}
      </span>
    )
  }
  return accessRequirementsJsxOrIconContainer
}

export default HasAccessV2
