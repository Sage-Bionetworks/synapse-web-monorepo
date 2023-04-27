import React, { useRef } from 'react'
import { getColor } from '../utils/functions/getUserData'
import { UserProfile } from '../utils/synapseTypes'
import UserCardMedium from './UserCardMedium'
import { useOverlay } from '../utils/hooks/useOverlay'
import { Skeleton } from '@mui/material'

const TIMER_DELAY_SHOW = 250 // milliseconds
const TIMER_DELAY_HIDE = 500

export type AvatarSize = 'SMALL' | 'MEDIUM' | 'LARGE'

export type AvatarProps = {
  userProfile: UserProfile
  avatarSize?: AvatarSize
  imageURL?: string
  showCardOnHover?: boolean
  isLoadingAvatar?: boolean
}

export const Avatar: React.FunctionComponent<AvatarProps> = ({
  userProfile,
  avatarSize = 'LARGE',
  imageURL,
  showCardOnHover = false,
  isLoadingAvatar = false,
}) => {
  const target = useRef(null)

  const mediumUserCard = (
    <UserCardMedium userProfile={userProfile} imageURL={imageURL} />
  )
  const {
    OverlayComponent,
    isShowing: isShowingOverlay,
    toggleShow,
    toggleHide,
  } = useOverlay(mediumUserCard, target, TIMER_DELAY_SHOW, TIMER_DELAY_HIDE, {
    sx: { maxWidth: '425px' },
  })

  let sizeClass
  switch (avatarSize) {
    case 'SMALL':
      sizeClass = 'SRC-userImgSmall'
      break
    case 'MEDIUM':
      sizeClass = 'SRC-userImgMedium'
      break
    case 'LARGE':
      sizeClass = 'SRC-userImg'
      break
    default:
      break
  }

  const cursorStyle = showCardOnHover ? 'pointer' : 'unset'

  const hasProfileImage = !!imageURL

  const conditionalStyles: React.CSSProperties = hasProfileImage
    ? {
        backgroundImage: `url(${imageURL})`,
      }
    : { background: getColor(userProfile.userName) }

  if (isLoadingAvatar) {
    return <Skeleton className={sizeClass} variant="circular" />
  }

  let content: JSX.Element | string = <></>

  if (!hasProfileImage) {
    content = userProfile.firstName
      ? userProfile.firstName[0]
      : userProfile.userName[0]
  }

  return (
    <>
      {showCardOnHover && <OverlayComponent />}
      <div
        ref={target}
        role="img"
        onMouseEnter={() => toggleShow()}
        onMouseLeave={() => toggleHide()}
        onClick={event => {
          if (showCardOnHover) {
            event.stopPropagation()
          }
          isShowingOverlay ? toggleHide(false) : toggleShow(false)
        }}
        className={`${sizeClass} SRC-centerContentInline`}
        style={{
          cursor: cursorStyle,
          ...conditionalStyles,
        }}
      >
        {content}
      </div>
    </>
  )
}
