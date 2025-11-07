import { ReactComponent as MaintenanceSvg } from '@/assets/icons/error_page/maintenance.svg'
import { ReactComponent as NoAccessSvg } from '@/assets/icons/error_page/no-access.svg'
import { ReactComponent as UnavailableSvg } from '@/assets/icons/error_page/unavailable.svg'
import { useSynapseContext } from '@/utils'
import { Box, Link, Typography } from '@mui/material'
import { useCallback, useMemo, useState } from 'react'
import SynapseObjectDOIInfo from './SynapseObjectDOIInfo'
import SendMessageToEntityOwnerDialog from './SendMessageToEntityOwnerDialog'
import { DoiObjectType } from '@sage-bionetworks/synapse-client/generated/models/DoiObjectType'

export type ErrorPageProps = {
  type: SynapseErrorType
  message?: string // custom message to report
  /** @deprecated use `id` and objectType: DoiObjectType.ENTITY */
  entityId?: string
  /** @deprecated use `version` and objectType: DoiObjectType.ENTITY */
  entityVersion?: number

  /** The ID of the object that was attempted to be retrieved, which may be used to show a 'tombstone' */
  id?: string
  /** The version of the object that was attempted to be retrieved, which may be used to show a 'tombstone' */
  version?: number
  /** The type of the object that was attempted to be retrieved, which may be used to show a 'tombstone' */
  objectType?: DoiObjectType
  /** If on a portal that may mint DOIs, this portal ID may be used to find a DOI to show a 'tombstone' */
  portalId?: string

  gotoPlace: (href: string) => void
}

export const SYNAPSE_DOWN_TITLE = 'Synapse is down for maintenance.'
export const ACCESS_DENIED_TITLE = 'You don’t have permission to view this.'
export const NOT_FOUND_TITLE = 'This page isn’t available.'
export const LOG_IN_LINK_TEXT = 'Log in to Synapse'
export const HELP_FORUM_LINK_TEXT = 'Leave a message in the Help Forum'
export const CONTACT_ADMIN_LINK_TEXT = 'Contact the Administrator'
export const ACCESS_DENIED_ANONYMOUS_MESSAGE =
  'Try logging in. If you still see this message after logging in, you have not been granted access to view this resource.'
export const ACCESS_DENIED_MESSAGE =
  'This account has not been granted access to view this resource.'
export const NOT_FOUND_MESSAGE =
  'The link you followed may be broken, or the page may have been removed.'
export const ACCESS_DENIED_ANONYMOUS_ACTION_DESCRIPTION =
  'A Synapse account is free, and lets you view public resources.'
export const ACCESS_DENIED_HELP_FORUM_ACTION_DESCRIPTION =
  'Please remember that all messages left in the forum are public.'
export const ACCESS_DENIED_CONTACT_ADMIN_ACTION_DESCRIPTION =
  'Write a message to the owner of the resource asking for permission to view.'

export enum SynapseErrorType {
  DOWN = 'DOWN',
  ACCESS_DENIED = 'ACCESS_DENIED',
  NOT_FOUND = 'NOT_FOUND',
}

const getImage = (type: SynapseErrorType) => {
  switch (type) {
    case SynapseErrorType.DOWN:
      return (
        <MaintenanceSvg
          role="img"
          aria-label="Synapse is Down image"
          title={SynapseErrorType.DOWN}
        />
      )
    case SynapseErrorType.ACCESS_DENIED:
      return (
        <NoAccessSvg
          role="img"
          aria-label="Access denied image"
          title={SynapseErrorType.ACCESS_DENIED}
        />
      )
    case SynapseErrorType.NOT_FOUND:
      return (
        <UnavailableSvg
          role="img"
          aria-label="Resource not found image"
          title={SynapseErrorType.NOT_FOUND}
        />
      )
    default:
      return <></>
  }
}
const getTitle = (type: SynapseErrorType) => {
  switch (type) {
    case SynapseErrorType.DOWN:
      return SYNAPSE_DOWN_TITLE
    case SynapseErrorType.ACCESS_DENIED:
      return ACCESS_DENIED_TITLE
    case SynapseErrorType.NOT_FOUND:
      return NOT_FOUND_TITLE
    default:
      return ''
  }
}

type ErrorPageAction = {
  linkText: string
  onClick: () => void
  description: string
}

function ErrorPage(props: ErrorPageProps) {
  const {
    type,
    entityId = '',
    entityVersion,
    message,
    gotoPlace,
    id,
    version,
    objectType,
    portalId,
  } = props
  const [isSendMessageToAdminDialogOpen, setSendMessageToAdminDialogOpen] =
    useState<boolean>(false)
  const { isAuthenticated } = useSynapseContext()
  const image = useMemo(() => getImage(type), [type])
  const title = useMemo(() => getTitle(type), [type])

  const messages = useMemo(() => {
    const msgs: string[] = []
    switch (type) {
      case SynapseErrorType.ACCESS_DENIED:
        if (!isAuthenticated) {
          msgs.push(ACCESS_DENIED_ANONYMOUS_MESSAGE)
        } else {
          msgs.push(ACCESS_DENIED_MESSAGE)
        }
        break
      case SynapseErrorType.NOT_FOUND:
        msgs.push(NOT_FOUND_MESSAGE)
        break
    }
    if (message) {
      msgs.push(message)
    }
    return msgs
  }, [type, isAuthenticated, message])

  const actions = useMemo(() => {
    const acts: ErrorPageAction[] = []
    if (type === SynapseErrorType.ACCESS_DENIED) {
      if (!isAuthenticated) {
        acts.push({
          linkText: LOG_IN_LINK_TEXT,
          onClick: () => gotoPlace('/LoginPlace:0'),
          description: ACCESS_DENIED_ANONYMOUS_ACTION_DESCRIPTION,
        })
      } else if (entityId) {
        acts.push({
          linkText: HELP_FORUM_LINK_TEXT,
          onClick: () => gotoPlace('/SynapseForum:default'),
          description: ACCESS_DENIED_HELP_FORUM_ACTION_DESCRIPTION,
        })
        // SWC-7073: Remove ability to send a message to the admins until we have a better option for the majority of the cases (service desk, contact emails, ...)
        // acts.push({
        //   linkText: CONTACT_ADMIN_LINK_TEXT,
        //   onClick: () => setSendMessageToAdminDialogOpen(true),
        //   description: ACCESS_DENIED_CONTACT_ADMIN_ACTION_DESCRIPTION,
        // })
      }
    }
    return acts
  }, [type, isAuthenticated, entityId, gotoPlace])

  const handleCloseDialog = useCallback(
    () => setSendMessageToAdminDialogOpen(false),
    [],
  )
  return (
    <>
      <Box
        sx={{
          display: { xs: 'flex', lg: 'grid' },
          columnGap: '80px',
          flexDirection: { xs: 'column', lg: undefined },
          gridTemplateColumns: { lg: '40% 60%' },
        }}
      >
        <Box
          sx={{
            justifySelf: 'end',
            alignSelf: 'center',
            '& svg': {
              height: '360px',
              maxWidth: '300px',
            },
            pt: '50px',
            pb: '50px',
          }}
        >
          {image}
        </Box>
        <Box
          sx={{
            justifySelf: 'start',
            alignSelf: 'center',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            m: { xs: '15px', lg: undefined },
            mr: { lg: '100px' },
          }}
        >
          <Typography
            sx={{ fontSize: '30px', fontWeight: 700, lineHeight: '36px' }}
          >
            {title}
          </Typography>
          {messages.map(message => {
            return (
              <Typography variant="body1" key={message}>
                {message}
              </Typography>
            )
          })}
          {actions.map(action => {
            const { onClick, linkText, description } = action
            return (
              <Box key={linkText}>
                <Link sx={{ fontSize: '16px' }} onClick={onClick}>
                  {linkText}
                </Link>
                <Typography variant="body1">{description}</Typography>
              </Box>
            )
          })}
          {entityId && (
            <SynapseObjectDOIInfo
              id={entityId}
              version={entityVersion}
              type={DoiObjectType.ENTITY}
            />
          )}
          {id && objectType && (
            <SynapseObjectDOIInfo
              id={id}
              version={version}
              type={objectType}
              portalId={portalId}
            />
          )}
        </Box>
      </Box>
      {entityId && (
        <SendMessageToEntityOwnerDialog
          isOpen={isSendMessageToAdminDialogOpen}
          onHide={handleCloseDialog}
          entityId={entityId}
        />
      )}
    </>
  )
}

export default ErrorPage
