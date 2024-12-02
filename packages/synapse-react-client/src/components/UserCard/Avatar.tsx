import React, { useRef } from 'react'
import { getColor } from '../../utils/functions/getUserData'
import { UserProfile } from '@sage-bionetworks/synapse-types'
import UserCardMedium from './UserCardMedium'
import { useOverlay } from '../../utils/hooks'
import { Avatar as MUIAvatar, Skeleton, SxProps } from '@mui/material'

const TIMER_DELAY_SHOW = 250 // milliseconds
const TIMER_DELAY_HIDE = 500

export type AvatarSize = 'SMALL' | 'MEDIUM' | 'LARGE'

export type AvatarProps = {
  userProfile: UserProfile
  avatarSize?: AvatarSize
  imageURL?: string
  showCardOnHover?: boolean
  isLoadingAvatar?: boolean
  className?: string
}

export const Avatar: React.FunctionComponent<AvatarProps> = ({
  userProfile,
  avatarSize = 'LARGE',
  imageURL,
  showCardOnHover = false,
  isLoadingAvatar = false,
  className,
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

  let sizeStyles: SxProps = {}
  switch (avatarSize) {
    case 'SMALL':
      sizeStyles = {
        fontSize: '12px',
        width: '20px',
        height: '20px',
      }
      break
    case 'MEDIUM':
      sizeStyles = {
        fontSize: '18px',
        width: '30px',
        height: '30px',
      }
      break
    case 'LARGE':
      sizeStyles = {
        fontSize: '26px',
        width: '80px',
        height: '80px',
      }
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
    return <Skeleton sx={sizeStyles} variant="circular" />
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
      <MUIAvatar
        ref={target}
        role="img"
        onMouseEnter={() => toggleShow()}
        onMouseLeave={() => toggleHide()}
        onClick={event => {
          if (showCardOnHover) {
            event.stopPropagation()
          }
          if (isShowingOverlay) {
            toggleHide(false)
          } else {
            toggleShow(false)
          }
        }}
        className={`${className ?? ''}`}
        sx={{
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          cursor: cursorStyle,
          textDecoration: 'none',
          ...sizeStyles,
          ...conditionalStyles,
        }}
      >
        {content}
      </MUIAvatar>
    </>
  )
}
