import SynapseClient from '@/synapse-client'
import {
  useGetEntityBundle,
  useGetRestrictionInformation,
} from '@/synapse-queries'
import { useSynapseContext } from '@/utils'
import { BackendDestinationEnum, getEndpoint } from '@/utils/functions'
import { SRC_SIGN_IN_CLASS } from '@/utils/SynapseConstants'
import { Box, Button, Theme, useTheme } from '@mui/material'
import {
  AccessRequirement,
  FileEntity,
  FileHandle,
  RestrictableObjectType,
  RestrictionLevel,
} from '@sage-bionetworks/synapse-types'
import { useCallback, useMemo, useState } from 'react'
import AccessRequirementList, {
  checkHasUnsupportedRequirement,
} from '../AccessRequirementList/AccessRequirementList'
import IconSvg, { IconName } from '../IconSvg/IconSvg'

export type HasAccessProps = {
  onHide?: () => void
  entityId: string
  className?: string
  showButtonText?: boolean
  showAccessIconForInternalFilesOnly?: boolean
}

const buttonSx = { p: '0px', minWidth: 'unset' }

export enum RestrictionUiType {
  Accessible = 'Accessible',
  AccessibleWithTerms = 'AccessibleWithTerms',
  AccessBlockedByRestriction = 'AccessBlockedByRestriction',
  AccessBlockedByACL = 'AccessBlockedByACL',
  AccessBlockedToAnonymous = 'AccessBlockedToAnonymous',
}

const iconConfiguration: Record<
  RestrictionUiType,
  { icon: IconName; color: (theme: Theme) => string; tooltipText: string }
> = {
  [RestrictionUiType.AccessBlockedToAnonymous]: {
    icon: 'accessClosed',
    color: theme => theme.palette.warning.main,
    tooltipText: 'You must sign in to access this item.',
  },
  [RestrictionUiType.AccessBlockedByRestriction]: {
    icon: 'accessClosed',
    color: theme => theme.palette.warning.main,
    tooltipText: 'You must request access to this restricted item.',
  },
  [RestrictionUiType.AccessBlockedByACL]: {
    icon: 'accessClosed',
    color: theme => theme.palette.warning.main,
    tooltipText: 'You do not have download access for this item.',
  },

  [RestrictionUiType.AccessibleWithTerms]: {
    icon: 'accessOpen',
    color: theme => theme.palette.success.main,
    tooltipText: 'View Terms',
  },

  [RestrictionUiType.Accessible]: {
    icon: 'accessOpen',
    color: theme => theme.palette.success.main,
    tooltipText: '',
  },
}

function AccessIcon(props: { restrictionUiType: RestrictionUiType }) {
  const { restrictionUiType } = props
  const theme = useTheme()
  if (restrictionUiType) {
    const configuration = iconConfiguration[restrictionUiType]
    return (
      <IconSvg
        icon={configuration.icon}
        label={configuration.tooltipText}
        sx={{
          color: configuration.color(theme),
          height: '16px',
          verticalAlign: 'text-top',
        }}
      />
    )
  }
  // nothing is rendered until downloadType is determined
  return <></>
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
): RestrictionUiType | undefined {
  const { accessToken } = useSynapseContext()
  const isSignedIn = Boolean(accessToken)

  const { data: restrictionInformation } = useGetRestrictionInformation({
    restrictableObjectType: RestrictableObjectType.ENTITY,
    objectId: entityId,
  })

  if (!restrictionInformation) {
    return undefined
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
 * This hook determines if the entity is an external file entity
 * This is only to be used in AMP ALS for now as it introduces a lot of technical debt
 */
export const useIsExternalFileEntity = (
  entityId: string,
): boolean | undefined => {
  const { data: entityBundle } = useGetEntityBundle(entityId)
  const entity = entityBundle?.entity
  const fileHandles = entityBundle?.fileHandles
  const isFileEntity =
    entity?.concreteType === 'org.sagebionetworks.repo.model.FileEntity'
  const fileEntity = entity as FileEntity
  const fileHandle: FileHandle | undefined = fileHandles?.find(
    fileHandle => fileHandle.id === fileEntity.dataFileHandleId,
  )

  if (!isFileEntity || !fileHandle) {
    return
  }

  const hasExternalFileHandle =
    fileHandle.concreteType ===
    'org.sagebionetworks.repo.model.file.ExternalFileHandle'

  return hasExternalFileHandle
}

const InternalOnlyAccessWrapper = ({
  entityId,
  children,
}: {
  entityId: string
  children: React.ReactNode
}) => {
  const isExternalFile = useIsExternalFileEntity(entityId)

  return isExternalFile ? null : <>{children}</>
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
    showAccessIconForInternalFilesOnly,
  } = props
  const restrictionUiTypeValue = useGetRestrictionUiType(entityId)

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
          {showButtonText && <Box ml="5px">{linkText}</Box>}
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

  const content = (
    <span style={{ whiteSpace: 'nowrap' }}>
      {accessRequirementsJsxOrIconContainer}
    </span>
  )

  if (showAccessIconForInternalFilesOnly) {
    return (
      <InternalOnlyAccessWrapper entityId={entityId}>
        {content}
      </InternalOnlyAccessWrapper>
    )
  }

  return content
}
