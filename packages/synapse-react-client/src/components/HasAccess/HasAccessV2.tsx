import React, { useCallback, useMemo } from 'react'
import SynapseClient from '../../synapse-client'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../utils/functions/getEndpoint'
import { useGetRestrictionInformation } from '../../synapse-queries/dataaccess/useAccessRequirements'
import useGetEntityBundle from '../../synapse-queries/entity/useEntityBundle'
import { SRC_SIGN_IN_CLASS } from '../../utils/SynapseConstants'
import { useSynapseContext } from '../../utils/context/SynapseContext'
import {
  AccessRequirement,
  RestrictableObjectType,
  RestrictionInformationRequest,
  RestrictionLevel,
} from '@sage-bionetworks/synapse-types'
import AccessRequirementList, {
  checkHasUnsupportedRequirement,
} from '../AccessRequirementList/AccessRequirementList'
import IconSvg, { IconName } from '../IconSvg/IconSvg'
import { Box, Button, Theme, useTheme } from '@mui/material'
import { isFileEntity } from '../../utils/types/IsType'

export type HasAccessProps = {
  onHide?: () => void
  entityId: string
  entityVersionNumber?: string
  className?: string
  showButtonText?: boolean
}

const buttonSx = { p: '0px', minWidth: 'unset' }

export enum FileHandleDownloadTypeEnum {
  Accessible = 'Accessible',
  AccessibleWithTerms = 'AccessibleWithTerms',
  AccessBlockedByRestriction = 'AccessBlockedByRestriction',
  AccessBlockedByACL = 'AccessBlockedByACL',
  AccessBlockedToAnonymous = 'AccessBlockedToAnonymous',
  NoFileHandle = 'NoFileHandle',
}

const iconConfiguration: Record<
  FileHandleDownloadTypeEnum,
  { icon: IconName; color: (theme: Theme) => string; tooltipText: string }
> = {
  [FileHandleDownloadTypeEnum.AccessBlockedToAnonymous]: {
    icon: 'accessClosed',
    color: theme => theme.palette.warning.main,
    tooltipText: 'You must sign in to access this file.',
  },
  [FileHandleDownloadTypeEnum.AccessBlockedByRestriction]: {
    icon: 'accessClosed',
    color: theme => theme.palette.warning.main,
    tooltipText: 'You must request access to this restricted file.',
  },
  [FileHandleDownloadTypeEnum.AccessBlockedByACL]: {
    icon: 'accessClosed',
    color: theme => theme.palette.warning.main,
    tooltipText: 'You do not have download access for this item.',
  },

  [FileHandleDownloadTypeEnum.AccessibleWithTerms]: {
    icon: 'accessOpen',
    color: theme => theme.palette.success.main,
    tooltipText: 'View Terms',
  },

  [FileHandleDownloadTypeEnum.Accessible]: {
    icon: 'accessOpen',
    color: theme => theme.palette.success.main,
    tooltipText: '',
  },

  [FileHandleDownloadTypeEnum.NoFileHandle]: {
    icon: 'accessOpen',
    color: theme => theme.palette.success.main,
    tooltipText: '',
  },
}

function AccessIcon(props: { downloadType: FileHandleDownloadTypeEnum }) {
  const { downloadType } = props
  const theme = useTheme()
  if (downloadType) {
    const configuration = iconConfiguration[downloadType]
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
 * @param entityVersionNumber
 * @returns
 */
export function useGetFileHandleDownloadType(
  entityId: string,
  entityVersionNumber?: string,
) {
  const [fileHandleDownloadType, setFileHandleDownloadType] =
    React.useState<FileHandleDownloadTypeEnum>()

  const { accessToken } = useSynapseContext()
  const parsedVersionNumber = parseInt(entityVersionNumber ?? '')
  const { data: entityBundle, error: entityFetchError } = useGetEntityBundle(
    entityId,
    Number.isNaN(parsedVersionNumber) ? undefined : parsedVersionNumber,
    {
      includeEntity: true,
      includePermissions: true,
    },
  )

  const restrictionInformationRequest: RestrictionInformationRequest =
    React.useMemo(
      () => ({
        restrictableObjectType: RestrictableObjectType.ENTITY,
        objectId: entityId,
      }),
      [entityId],
    )

  const { data: restrictionInformation } = useGetRestrictionInformation(
    restrictionInformationRequest,
  )

  const entity = entityBundle?.entity
  const permissions = entityBundle?.permissions

  React.useEffect(() => {
    if (
      restrictionInformation &&
      restrictionInformation.hasUnmetAccessRequirement
    ) {
      setFileHandleDownloadType(
        FileHandleDownloadTypeEnum.AccessBlockedByRestriction,
      )
    } else if (entity && permissions?.canDownload) {
      if (isFileEntity(entity) && entity.dataFileHandleId) {
        if (
          restrictionInformation?.restrictionLevel !== RestrictionLevel.OPEN
        ) {
          setFileHandleDownloadType(
            FileHandleDownloadTypeEnum.AccessibleWithTerms,
          )
        } else {
          setFileHandleDownloadType(FileHandleDownloadTypeEnum.Accessible)
        }
      } else {
        setFileHandleDownloadType(FileHandleDownloadTypeEnum.NoFileHandle)
      }
    } else if (permissions && !permissions.canDownload) {
      setFileHandleDownloadType(
        accessToken
          ? FileHandleDownloadTypeEnum.AccessBlockedByACL
          : FileHandleDownloadTypeEnum.AccessBlockedToAnonymous,
      )
    }
  }, [
    accessToken,
    entity,
    entityFetchError,
    permissions,
    restrictionInformation,
  ])

  return fileHandleDownloadType
}

/**
 * HasAccess shows if the user has access to the file or not. If the user doesn't have access due to a restriction,
 * then a link will be shown that opens a modal with steps to request access.
 */
export function HasAccessV2(props: HasAccessProps) {
  const [displayAccessRequirement, setDisplayAccessRequirement] =
    React.useState(false)
  const [accessRequirements, setAccessRequirements] = React.useState<
    AccessRequirement[]
  >([])

  const { entityId, entityVersionNumber, showButtonText = true } = props

  const fileHandleDownloadType = useGetFileHandleDownloadType(
    entityId,
    entityVersionNumber,
  )

  const { accessToken } = useSynapseContext()

  const restrictionInformationRequest: RestrictionInformationRequest =
    React.useMemo(
      () => ({
        restrictableObjectType: RestrictableObjectType.ENTITY,
        objectId: entityId,
      }),
      [entityId],
    )

  const { data: restrictionInformation } = useGetRestrictionInformation(
    restrictionInformationRequest,
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
            )}#!AccessRequirements:ID=${entityId}&TYPE=ENTITY`,
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
    return fileHandleDownloadType ===
      FileHandleDownloadTypeEnum.AccessBlockedToAnonymous ? (
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
                infinite loop because this button keeps disptaching click events, so we can use the isTrusted to recognize if onClick was
                triggered programmatically or by user click. Lastly, using { bubbles: true } ensures the event bubbles up to the document level.

              */
            const clickEvent = new MouseEvent('click', { bubbles: true })
            ev.currentTarget.dispatchEvent(clickEvent)
          }
        }}
      >
        <AccessIcon downloadType={fileHandleDownloadType} />
      </Button>
    ) : (
      <AccessIcon downloadType={fileHandleDownloadType!} />
    )
  }, [fileHandleDownloadType])

  // Access Requirements icon or Icon Container
  const accessRequirementsJsxOrIconContainer = useMemo(() => {
    if (!restrictionInformation || !fileHandleDownloadType) {
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
          <AccessIcon downloadType={fileHandleDownloadType} />
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
    fileHandleDownloadType,
    showButtonText,
    iconContainer,
  ])

  if (!fileHandleDownloadType) {
    // loading
    return <></>
  }

  return (
    <span style={{ whiteSpace: 'nowrap' }}>
      {accessRequirementsJsxOrIconContainer}
    </span>
  )
}
