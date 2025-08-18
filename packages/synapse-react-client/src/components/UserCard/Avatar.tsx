import { getColor } from '@/utils/functions/getUserData'
import { useOverlay } from '@/utils/hooks'
import { Avatar as MUIAvatar, Skeleton, SxProps, useTheme } from '@mui/material'
import { UserProfile } from '@sage-bionetworks/synapse-types'
import { CSSProperties, ReactNode, useRef } from 'react'
import UserCardMedium from './UserCardMedium'

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

export function Avatar({
  userProfile,
  avatarSize = 'LARGE',
  imageURL,
  showCardOnHover = false,
  isLoadingAvatar = false,
  className,
}: AvatarProps) {
  const target = useRef(null)
  const theme = useTheme()

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
        [theme.breakpoints.down('sm')]: {
          fontSize: '21px',
          width: '45px',
          height: '45px',
        },
      }
      break
    default:
      break
  }

  const cursorStyle = showCardOnHover ? 'pointer' : 'unset'

  const hasProfileImage = !!imageURL

  const { ownerId } = userProfile
  const { userName = ownerId, firstName } = userProfile
  const conditionalStyles: CSSProperties = hasProfileImage
    ? {
        backgroundImage: `url(${imageURL})`,
      }
    : { background: getColor(userName) }

  if (isLoadingAvatar) {
    return <Skeleton sx={sizeStyles} variant="circular" />
  }

  let content: ReactNode | string = <></>

  if (!hasProfileImage) {
    content = firstName ? firstName[0] : userName[0]
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
