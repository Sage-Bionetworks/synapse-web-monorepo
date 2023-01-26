import React, { useEffect, useMemo, useRef, useState } from 'react'
import { SynapseConstants } from '../utils'
import { PRODUCTION_ENDPOINT_CONFIG } from '../utils/functions/getEndpoint'
import { useGetUserBundle } from '../utils/hooks/SynapseAPI/user/useUserBundle'
import { useOverlay } from '../utils/hooks/useOverlay'
import { UserProfile } from '../utils/synapseTypes/'
import { Avatar, AvatarSize } from './Avatar'
import IconSvg from './IconSvg'
import UserCardMedium from './UserCardMedium'

export type UserCardSmallProps = {
  userProfile: UserProfile
  showCardOnHover?: boolean
  disableLink?: boolean
  link?: string
  showAccountLevelIcon?: boolean
  openLinkInNewTab?: boolean
  withAvatar?: boolean
  avatarSize?: AvatarSize
  isLoadingAvatar?: boolean
  imageURL?: string
  className?: string
  showFullName?: boolean
}

const TIMER_DELAY_SHOW = 250 // milliseconds
const TIMER_DELAY_HIDE = 500

const NONBREAKING_SPACE = '\u00A0'

export const UserCardSmall = (props: UserCardSmallProps) => {
  const {
    userProfile,
    showCardOnHover = true,
    disableLink,
    showAccountLevelIcon = false,
    openLinkInNewTab,
    withAvatar = false,
    avatarSize = 'SMALL',
    imageURL,
    className,
    showFullName = false,
    isLoadingAvatar,
    ...rest
  } = props
  let { link } = props

  const [accountLevelIcon, setAccountLevelIcon] = useState<JSX.Element>(
    <IconSvg icon="accountRegistered" />,
  )
  const target = useRef(null)
  const certificationOrVerification =
    SynapseConstants.USER_BUNDLE_MASK_IS_CERTIFIED |
    SynapseConstants.USER_BUNDLE_MASK_IS_VERIFIED

  const { data: userBundle } = useGetUserBundle(
    userProfile.ownerId,
    certificationOrVerification,
  )

  useEffect(() => {
    if (userBundle?.isCertified) {
      setAccountLevelIcon(<IconSvg icon="accountCertified" />)
    }
    if (userBundle?.isVerified) {
      setAccountLevelIcon(<IconSvg icon="accountValidated" />)
    }
  }, [showAccountLevelIcon, userBundle?.isCertified, userBundle?.isVerified])

  const mediumUserCard = useMemo(
    () => (
      <UserCardMedium userProfile={userProfile} imageURL={imageURL} {...rest} />
    ),
    [imageURL, rest, userProfile],
  )

  if (link == null) {
    link = `${PRODUCTION_ENDPOINT_CONFIG.PORTAL}#!Profile:${userProfile.ownerId}`
  }

  const { OverlayComponent, toggleShow, toggleHide } = useOverlay(
    mediumUserCard,
    target,
    TIMER_DELAY_SHOW,
    TIMER_DELAY_HIDE,
  )

  const avatar = withAvatar ? (
    <span className="SRC-inline-avatar">
      <Avatar
        userProfile={userProfile}
        avatarSize={avatarSize}
        imageURL={imageURL}
        isLoadingAvatar={isLoadingAvatar}
      />
    </span>
  ) : (
    <></>
  )

  const fullName =
    showFullName && (userProfile.firstName || userProfile.lastName) ? (
      <span className={'user-fullname'}>
        {`${userProfile.firstName ?? ''}`}
        {userProfile.firstName && userProfile.lastName ? NONBREAKING_SPACE : ''}
        {`${userProfile.lastName ?? ''}`}
      </span>
    ) : null

  const Tag = showCardOnHover || !disableLink ? 'a' : 'span'

  let style: React.CSSProperties = {}
  if (showCardOnHover) {
    style = { whiteSpace: 'nowrap' }
  } else if (disableLink) {
    style = { cursor: 'unset' }
  }

  return (
    <>
      {showCardOnHover && <OverlayComponent />}
      <Tag
        className={`SRC-userCard UserCardSmall SRC-boldText ${className ?? ''}`}
        style={style}
        href={disableLink ? undefined : link}
        target={openLinkInNewTab ? '_blank' : ''}
        rel={openLinkInNewTab ? 'noreferrer' : ''}
        ref={target}
        onMouseEnter={() => toggleShow()}
        onMouseLeave={() => toggleHide()}
      >
        {avatar}
        {fullName}
        {fullName ? `${NONBREAKING_SPACE}(` : ''}
        {`@${userProfile.userName}`}
        {fullName ? ')' : ''}
        {showAccountLevelIcon && (
          <span className={'account-level-icon'}>{accountLevelIcon}</span>
        )}
      </Tag>
    </>
  )
}
