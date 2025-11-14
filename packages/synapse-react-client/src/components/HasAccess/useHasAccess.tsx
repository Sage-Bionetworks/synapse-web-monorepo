import { useCallback, useMemo, useState } from 'react'
import AccessIcon, { RestrictionUiType } from './AccessIcon'
import {
  AccessRequirement,
  EntityBundle,
  FileHandle,
  RestrictableObjectType,
  RestrictionLevel,
} from '@sage-bionetworks/synapse-types'
import {
  implementsExternalFileHandleInterface,
  isFileEntity,
  SynapseClientError,
  useSynapseContext,
} from '@/utils'
import {
  useGetEntityBundle,
  useGetRestrictionInformation,
} from '@/synapse-queries'
import SynapseClient from '@/synapse-client'
import AccessRequirementList, {
  checkHasUnsupportedRequirement,
} from '../AccessRequirementList/AccessRequirementList'
import { BackendDestinationEnum, getEndpoint } from '@/utils/functions'
import { UseQueryOptions } from '@tanstack/react-query'

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
  const { isAuthenticated } = useSynapseContext()

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

  // Only check for external file handle if the feature is enabled
  if (useGetIsExternalFileHandleOptions.enabled) {
    if (isLoadingExternalFile) {
      return undefined
    }
    if (isExternalFileHandle) {
      return RestrictionUiType.AccessibleExternalFileHandle
    }
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

  if (isAuthenticated) {
    return RestrictionUiType.AccessBlockedByACL
  }
  return RestrictionUiType.AccessBlockedToAnonymous
}

//* Get the access level text */
function getAccessText(props: RestrictionUiType | undefined) {
  switch (props) {
    case RestrictionUiType.Accessible:
      return 'Open Access'
    case RestrictionUiType.AccessibleWithTerms:
      return 'View Terms'
    case RestrictionUiType.AccessBlockedByRestriction:
      return 'Request Access'
    case RestrictionUiType.AccessBlockedByACL:
      return 'Access Denied'
    case RestrictionUiType.AccessBlockedToAnonymous:
      return 'Sign In Required'
    case RestrictionUiType.AccessibleExternalFileHandle:
      return 'External Access'
    case undefined:
      return 'Loading...'
    default:
      return ''
  }
}

// A hook that handles the logic for computing the correct access level, getting the text, and the icon
export function useHasAccess(entityId: string) {
  const [displayAccessRequirement, setDisplayAccessRequirement] =
    useState(false)
  const [accessRequirements, setAccessRequirements] = useState<
    AccessRequirement[]
  >([])

  const { accessToken } = useSynapseContext()

  // get access level
  const restrictionUiType = useGetRestrictionUiType(entityId, {
    enabled: false,
  })

  const { data: restrictionInformation } = useGetRestrictionInformation({
    restrictableObjectType: RestrictableObjectType.ENTITY,
    objectId: entityId,
  })

  // get access level text
  const accessText = getAccessText(restrictionUiType)

  // get access level icon
  const icon = (
    <AccessIcon restrictionUiType={restrictionUiType!} wrap={false} />
  )

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

  // Determine if this access type should show a clickable button
  const isClickable = useMemo(() => {
    if (!restrictionInformation || !restrictionUiType) {
      return false
    }

    const hasUnmetAccessRequirement =
      restrictionInformation.hasUnmetAccessRequirement
    const restrictionLevel = restrictionInformation.restrictionLevel

    // Clickable if there are unmet requirements or if there are terms to view
    return (
      hasUnmetAccessRequirement ||
      restrictionLevel !== RestrictionLevel.OPEN ||
      restrictionUiType === RestrictionUiType.AccessBlockedToAnonymous
    )
  }, [restrictionInformation, restrictionUiType])

  const accessRequirementDialog = displayAccessRequirement ? (
    <AccessRequirementList
      subjectId={entityId}
      subjectType={RestrictableObjectType.ENTITY}
      accessRequirementFromProps={accessRequirements}
      renderAsModal={true}
      onHide={() => {
        setDisplayAccessRequirement(false)
      }}
    />
  ) : null

  return {
    restrictionUiType,
    accessText,
    icon,
    handleGetAccess,
    isClickable,
    accessRequirementDialog,
  }
}
