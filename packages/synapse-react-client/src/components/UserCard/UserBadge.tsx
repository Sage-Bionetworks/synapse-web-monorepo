import { useGetUserGroupHeader } from '@/synapse-queries'
import { useGetUserBundle } from '@/synapse-queries/user/useUserBundle'
import { SynapseConstants } from '@/utils'
import { PRODUCTION_ENDPOINT_CONFIG } from '@/utils/functions/getEndpoint'
import { useOverlay } from '@/utils/hooks/useOverlay'
import { Box, Chip, Link, Skeleton } from '@mui/material'
import { CSSProperties, useMemo, useRef } from 'react'
import IconSvg from '../IconSvg/IconSvg'
import { AvatarSize } from './Avatar'
import UserCard from './UserCard'

export type UserBadgeProps = {
  /* The ID of the user to show. If undefined, a skeleton will be shown */
  userId?: string
  /* If true, shows the user's avatar with their name. Default false */
  withAvatar?: boolean
  /* Whether a card containing additional profile information should be shown on hover. Default true. */
  showCardOnHover?: boolean
  /* Whether to disable the profile linking to the user's profile page */
  disableLink?: boolean
  /* Override the href of the UserBadge component. Default is the Synapse profile page */
  link?: string
  /* Shows icons to denote profile certification and validation. Default is false. */
  showAccountLevelIcon?: boolean
  /* Whether to open the clicked link in a new tab. Default is false */
  openLinkInNewTab?: boolean
  /* Defines the size of the avatar if `withAvatar` is true. Default is 'SMALL' */
  avatarSize?: AvatarSize
  /* If true, shows the user's full name. Default is false */
  showFullName?: boolean

  className?: string

  showModeratorBadge?: boolean
}

const TIMER_DELAY_SHOW = 250 // milliseconds
const TIMER_DELAY_HIDE = 500

const NONBREAKING_SPACE = '\u00A0'

export function UserBadge(props: UserBadgeProps) {
  const {
    userId,
    showCardOnHover = true,
    disableLink,
    showAccountLevelIcon = false,
    openLinkInNewTab = false,
    withAvatar = false,
    avatarSize = 'SMALL',
    className,
    showFullName = false,
    showModeratorBadge = false,
  } = props
  let { link } = props

  const target = useRef(null)
  const certificationOrVerification =
    SynapseConstants.USER_BUNDLE_MASK_IS_CERTIFIED |
    SynapseConstants.USER_BUNDLE_MASK_IS_VERIFIED

  const { data: userGroupHeader } = useGetUserGroupHeader(userId!, {
    enabled: Boolean(userId),
    staleTime: 1000 * 60 * 15, // 15 min
  })

  // To show certification/validation status, we need the full bundle. Only fetch if these should be shown.
  const { data: userBundle } = useGetUserBundle(
    userId!,
    certificationOrVerification,
    {
      enabled: Boolean(userId) && showAccountLevelIcon,
    },
  )

  const mediumUserCard = useMemo(
    () => <UserCard ownerId={userId} size={'MEDIUM USER CARD'} />,
    [userId],
  )

  if (link == null) {
    link = `${PRODUCTION_ENDPOINT_CONFIG.PORTAL}Profile:${userId}`
  }

  const { OverlayComponent, toggleShow, toggleHide } = useOverlay(
    mediumUserCard,
    target,
    TIMER_DELAY_SHOW,
    TIMER_DELAY_HIDE,
    { sx: { maxWidth: '425px' } },
  )

  const avatar = withAvatar ? (
    <span className="SRC-inline-avatar">
      <UserCard ownerId={userId} size={'AVATAR'} avatarSize={avatarSize} />
    </span>
  ) : (
    <></>
  )

  const accountLevelIcon = (
    <Box display={'flex'} gap={1} sx={{ mx: 1 }}>
      {!userBundle?.isCertified && !userBundle?.isVerified && (
        <IconSvg
          icon="accountRegistered"
          label={'Registered'}
          sx={{ width: '30px', height: '30px' }}
        />
      )}
      {userBundle?.isCertified && (
        <IconSvg
          icon="accountCertified"
          label={'Certified'}
          sx={{ width: '30px', height: '30px' }}
        />
      )}
      {userBundle?.isVerified && (
        <IconSvg
          icon="accountValidated"
          label={'Validated'}
          sx={{ width: '30px', height: '30px' }}
        />
      )}
    </Box>
  )

  const fullName =
    showFullName &&
    (userGroupHeader?.firstName || userGroupHeader?.lastName) ? (
      <span className={'user-fullname'}>
        {`${userGroupHeader?.firstName ?? ''}`}
        {userGroupHeader?.firstName && userGroupHeader?.lastName
          ? NONBREAKING_SPACE
          : ''}
        {`${userGroupHeader?.lastName ?? ''}`}
      </span>
    ) : null

  const Tag = showCardOnHover || !disableLink ? Link : 'span'

  let style: CSSProperties = {}
  if (showCardOnHover) {
    style = { whiteSpace: 'nowrap' }
  } else if (disableLink) {
    style = { cursor: 'unset' }
  }

  return (
    <>
      {showCardOnHover && <OverlayComponent />}
      {avatar}
      <Tag
        className={`SRC-userCard UserBadge SRC-boldText ${className ?? ''}`}
        style={style}
        href={disableLink ? undefined : link}
        target={openLinkInNewTab ? '_blank' : ''}
        rel={openLinkInNewTab ? 'noreferrer' : ''}
        ref={target}
        onMouseEnter={() => toggleShow()}
        onMouseLeave={() => toggleHide()}
      >
        {fullName}
        {fullName ? `${NONBREAKING_SPACE}(` : ''}
        {userGroupHeader ? (
          `@${userGroupHeader.userName}`
        ) : (
          <Skeleton width={'100px'} />
        )}
        {fullName ? ')' : ''}
        {showAccountLevelIcon && accountLevelIcon}
      </Tag>
      {showModeratorBadge && (
        <Chip
          sx={{
            borderRadius: '5px',
            backgroundColor: '#395979',
            color: '#FFF',
            fontWeight: 700,
            fontSize: '12px',
            marginLeft: '8px',
            height: 'unset',
            '& .MuiChip-label': {
              padding: '5px 6px',
            },
          }}
          label="Moderator"
        />
      )}
    </>
  )
}
