import SynapseClient from '@/synapse-client'
import {
  useGetEntityBundle,
  useGetRestrictionInformation,
} from '@/synapse-queries'
import { SynapseClientError, useSynapseContext } from '@/utils'
import { BackendDestinationEnum, getEndpoint } from '@/utils/functions'
import { SRC_SIGN_IN_CLASS } from '@/utils/SynapseConstants'
import { Box, Button } from '@mui/material'
import {
  AccessRequirement,
  EntityBundle,
  FileHandle,
  RestrictableObjectType,
  RestrictionLevel,
} from '@sage-bionetworks/synapse-types'
import { useCallback, useMemo, useState } from 'react'
import AccessRequirementList, {
  checkHasUnsupportedRequirement,
} from '../AccessRequirementList/AccessRequirementList'
import {
  implementsExternalFileHandleInterface,
  isFileEntity,
} from '@/utils/types/IsType'
import { UseQueryOptions } from '@tanstack/react-query'
import AccessIcon, { RestrictionUiType } from './AccessIcon'

export type HasAccessProps = {
  onHide?: () => void
  entityId: string
  className?: string
  showButtonText?: boolean
  /**
   * If true, the component will show enhanced UI for the case where
   * - the entity is a FileEntity, AND
   * - the caller has permission to fetch the dataFileHandle, AND
   * - the dataFileHandle is an instance of ExternalFileHandleInterface (i.e. the file is not controlled by Synapse)
   * Note that this requires an additional API call that cannot be batched, so it should be avoided in bulk  contexts if possible.
   * @default false
   */
  showExternalAccessIcon?: boolean
}

const buttonSx = { p: '0px', minWidth: 'unset' }

/**
 * Determines whether an Entity is accessible for download, or if it is blocked by the ACL or unmet Access Requirements.
 *
 * To make download available, and determine if the file is downloadable via the web, see {@link DirectDownload.tsx}
 * @param entityId
 * @returns
 */
export function useGetRestrictionUiType(
  entityId: string,
  useGetIsExternalFileHandleOptions: Partial<
    UseQueryOptions<EntityBundle, SynapseClientError, boolean>
  >,
): RestrictionUiType | undefined {
  const { accessToken } = useSynapseContext()
  const isSignedIn = Boolean(accessToken)

  const { data: restrictionInformation } = useGetRestrictionInformation({
    restrictableObjectType: RestrictableObjectType.ENTITY,
    objectId: entityId,
  })

  const { data: isExternalFileHandle, isLoading: isLoadingExternalFile } =
    useGetIsExternalFileHandle(entityId, {
      enabled: useGetIsExternalFileHandleOptions.enabled,
    })

  if (!restrictionInformation) {
    return undefined
  }

  if (isLoadingExternalFile) {
    return undefined
  }

  if (isExternalFileHandle) {
    return RestrictionUiType.AccessibleExternalFileHandle
  }

  if (restrictionInformation.hasUnmetAccessRequirement) {
    return RestrictionUiType.AccessBlockedByRestriction
  }
  if (restrictionInformation.userEntityPermissions!.canDownload) {
    if (restrictionInformation.restrictionLevel !== RestrictionLevel.OPEN) {
      // Indicate that there are requirements, but they have been met
      return RestrictionUiType.AccessibleWithTerms
    } else {
      return RestrictionUiType.Accessible
    }
  }

  if (isSignedIn) {
    return RestrictionUiType.AccessBlockedByACL
  }
  return RestrictionUiType.AccessBlockedToAnonymous
}

/**
 * This hook determines if
 * - the entity is a FileEntity, AND
 * - the caller has permission to fetch the dataFileHandle, AND
 * - the dataFileHandle is an instance of ExternalFileHandleInterface (i.e. the file is not controlled by Synapse)
 * Note that this requires an additional API call that cannot be batched, so it should be avoided in bulk contexts if possible.
 */
function useGetIsExternalFileHandle(
  entityId: string,
  options: Partial<UseQueryOptions<EntityBundle, SynapseClientError, boolean>>,
) {
  return useGetEntityBundle(entityId, undefined, undefined, {
    ...options,
    select: bundle => {
      if (!isFileEntity(bundle.entity)) {
        return false
      }
      const fileEntity = bundle.entity
      const fileHandles = bundle.fileHandles
      const fileHandle: FileHandle | undefined = fileHandles?.find(
        fileHandle => fileHandle.id === fileEntity.dataFileHandleId,
      )
      return fileHandle && implementsExternalFileHandleInterface(fileHandle)
    },
  })
}

/**
 * HasAccess shows if the user has access to the file or not. If the user doesn't have access due to a restriction,
 * then a link will be shown that opens a modal with steps to request access.
 */
export function HasAccessV2(props: HasAccessProps) {
  const [displayAccessRequirement, setDisplayAccessRequirement] =
    useState(false)
  const [accessRequirements, setAccessRequirements] = useState<
    AccessRequirement[]
  >([])

  const {
    entityId,
    showButtonText = true,
    showExternalAccessIcon = false,
  } = props
  const restrictionUiTypeValue = useGetRestrictionUiType(entityId, {
    enabled: showExternalAccessIcon,
  })

  const { accessToken } = useSynapseContext()

  const { data: restrictionInformation } = useGetRestrictionInformation({
    restrictableObjectType: RestrictableObjectType.ENTITY,
    objectId: entityId,
  })

  const handleGetAccess = useCallback(() => {
    // TODO: The fetch should really happen in the AR List component.
    // If we need to open the AR page in synapse, the logic should be in the modal and it should just close itself right away
    SynapseClient.getAllAccessRequirements(accessToken, entityId).then(
      requirements => {
        if (checkHasUnsupportedRequirement(requirements)) {
          window.open(
            `${getEndpoint(
              BackendDestinationEnum.PORTAL_ENDPOINT,
            )}AccessRequirements:ID=${entityId}&TYPE=ENTITY`,
            '_blank',
          )
        } else {
          setAccessRequirements(requirements)
          setDisplayAccessRequirement(true)
        }
      },
    )
  }, [accessToken, entityId])

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
        <AccessIcon restrictionUiType={restrictionUiTypeValue} />
      </Button>
    ) : (
      <AccessIcon restrictionUiType={restrictionUiTypeValue!} />
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
          <AccessIcon restrictionUiType={restrictionUiTypeValue} />
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
        {displayAccessRequirement && (
          <AccessRequirementList
            subjectId={entityId}
            subjectType={RestrictableObjectType.ENTITY}
            accessRequirementFromProps={accessRequirements}
            renderAsModal={true}
            onHide={() => {
              setDisplayAccessRequirement(false)
            }}
          />
        )}
      </>
    )
  }, [
    entityId,
    restrictionInformation,
    accessRequirements,
    displayAccessRequirement,
    handleGetAccess,
    props.className,
    restrictionUiTypeValue,
    showButtonText,
    iconContainer,
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
}

export default HasAccessV2
