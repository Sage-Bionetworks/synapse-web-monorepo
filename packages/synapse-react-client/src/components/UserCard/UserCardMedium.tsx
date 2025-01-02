import { Card, IconButton, Skeleton, Tooltip } from '@mui/material'
import {
  MutableRefObject,
  SyntheticEvent,
  useRef,
  useState,
  MouseEvent,
} from 'react'
import IconCopy from '../../assets/icons/IconCopy'
import ValidatedProfileIcon from '../../assets/icons/ValidatedProfile'
import { SkeletonTable } from '../Skeleton/SkeletonTable'
import { SynapseConstants } from '../../utils'
import { PRODUCTION_ENDPOINT_CONFIG } from '../../utils/functions/getEndpoint'
import { useGetUserBundle } from '../../synapse-queries/user/useUserBundle'
import { UserProfile } from '@sage-bionetworks/synapse-types'
import { Avatar } from './Avatar'
import IconSvg from '../IconSvg/IconSvg'
import { ToastMessage } from '../ToastMessage/ToastMessage'
import UserCardContextMenu, { MenuAction } from './UserCardContextMenu'
import { UserCardLarge } from './UserCardLarge'

export type UserCardMediumProps = {
  userProfile: UserProfile
  menuActions?: MenuAction[]
  imageURL?: string
  hideEmail?: boolean
  isLarge?: boolean
  link?: string
  openLinkInNewTab?: boolean
  disableLink?: boolean
  isCertified?: boolean
  isValidated?: boolean
  isLoadingAvatar?: boolean
}

/**
 * Function handles copying to clipboard the user's email address
 *
 * @param {string} value the email address of the user
 * @returns
 */
const copyToClipboard =
  (
    ref: MutableRefObject<HTMLElement | null>,
    value: string,
    onCopy: () => void,
  ) =>
  (event: SyntheticEvent) => {
    event.preventDefault()

    // use the Clipboard API
    // https://caniuse.com/mdn-api_clipboard_writetext
    navigator.clipboard.writeText(value).then(() => {
      onCopy()
    })
  }

export function UserCardMedium({
  userProfile,
  menuActions,
  isLarge = false,
  imageURL,
  hideEmail = false,
  disableLink = false,
  link,
  openLinkInNewTab = false,
  isValidated,
  isCertified,
  isLoadingAvatar,
}: UserCardMediumProps) {
  const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null)
  const isContextMenuOpen = Boolean(menuAnchorEl)
  const handleMenuClick = (event: MouseEvent<HTMLButtonElement>) => {
    setMenuAnchorEl(event.currentTarget)
  }
  const handleMenuClose = () => {
    setMenuAnchorEl(null)
  }
  const [showModal, setShowModal] = useState(false)

  const copyToClipboardRef = useRef<HTMLParagraphElement>(null)

  const onCopyToClipboard = () => {
    // show modal and hide after 4 seconds, the timing is per Material Design
    setShowModal(true)
    // hide after 4 seconds
    setTimeout(() => {
      setShowModal(false)
    }, 4000)
  }

  const { displayName, userName, firstName, lastName, position, company } =
    userProfile

  const { data: userBundle } = useGetUserBundle(
    userProfile.ownerId,
    SynapseConstants.USER_BUNDLE_MASK_ORCID,
  )

  const ORCID = userBundle?.ORCID

  let name = ''
  const linkLocation = link
    ? link
    : `${PRODUCTION_ENDPOINT_CONFIG.PORTAL}Profile:${userProfile.ownerId}`
  // linkLocation is overriden by custom click handler
  const email = `${userName}@synapse.org`
  if (displayName) {
    name = displayName
  } else if (firstName && lastName) {
    name = `${firstName} ${lastName}`
  } else if (userName) {
    name = userName
  }
  const avatar = (
    <Avatar
      userProfile={userProfile}
      imageURL={imageURL}
      avatarSize={'LARGE'}
      isLoadingAvatar={isLoadingAvatar}
    />
  )
  const mediumCard = (
    <>
      {!hideEmail && (
        <ToastMessage
          show={showModal}
          text="Email address copied to clipboard"
          autohide={true}
        ></ToastMessage>
      )}
      {disableLink && avatar}
      {!disableLink && (
        <a
          href={linkLocation}
          target={openLinkInNewTab ? '_blank' : ''}
          rel={openLinkInNewTab ? 'noreferrer' : ''}
          className={`SRC-no-border-bottom-imp ${
            isLarge ? 'SRC-isLargeCard' : ''
          }`}
        >
          {avatar}
        </a>
      )}
      <div className="SRC-cardContent">
        <p className="SRC-eqHeightRow SRC-userCardName">
          {/*
              make the header clickable for all cards
              consolidate click events
          */}
          <a
            href={linkLocation}
            target={openLinkInNewTab ? '_blank' : ''}
            rel={openLinkInNewTab ? 'noreferrer' : ''}
            tabIndex={0}
            className={'SRC-hand-cursor'}
          >
            {name}
          </a>
          {isValidated && (
            <Tooltip
              title="This user profile has been validated."
              placement="bottom"
              enterNextDelay={300}
            >
              <span>{ValidatedProfileIcon}</span>
            </Tooltip>
          )}
        </p>
        {(position || company) && (
          <p className={`${isLarge ? 'SRC-blackText' : ''}`}>
            {position} {position ? ' / ' : ''} {company}
          </p>
        )}
        {!hideEmail && (
          <p
            ref={copyToClipboardRef}
            className={`${isLarge ? 'SRC-blackText' : ''}
              SRC-hand-cursor SRC-eqHeightRow SRC-inlineFlex SRC-emailText SRC-cardSvg`}
            onClick={copyToClipboard(
              copyToClipboardRef,
              email,
              onCopyToClipboard,
            )}
            onKeyPress={copyToClipboard(
              copyToClipboardRef,
              email,
              onCopyToClipboard,
            )}
            tabIndex={0}
          >
            <span style={{ paddingRight: '5px', paddingBottom: '2px' }}>
              <a className={`link ${isLarge ? 'SRC-blackText' : ''}`}>
                {`${userName}@synapse.org`}
              </a>
            </span>
            <IconCopy />
          </p>
        )}
        {ORCID && (
          <a
            href={ORCID}
            target="_blank"
            rel="noopener noreferrer"
            style={{ width: 'fit-content' }}
            tabIndex={0}
            className={isLarge ? 'SRC-blackText' : ''}
          >
            View ORCID
          </a>
        )}
      </div>
      {/* conditionally render menu actions, if there are no actions then we don't show the button */}
      {menuActions && menuActions.length > 0 && (
        <>
          <IconButton
            role="menu"
            tabIndex={0}
            onClick={handleMenuClick}
            sx={{ mx: 1 }}
          >
            <IconSvg icon="verticalEllipsis" wrap={false} />
          </IconButton>
          <UserCardContextMenu
            menuActions={menuActions}
            userProfile={userProfile}
            anchorEl={menuAnchorEl}
            onClose={handleMenuClose}
            open={isContextMenuOpen}
          />
        </>
      )}
    </>
  )

  if (!isLarge) {
    return (
      <Card className={`SRC-userCard SRC-userCardMediumUp`}>{mediumCard}</Card>
    )
  }
  // else return medium card inside large component
  // when the component is large we have to set the click handler to wrap both the top and bottom portion
  return (
    <Card>
      <div
        className={`SRC-userCard`}
        style={{ backgroundColor: 'transparent' }}
      >
        {mediumCard}
      </div>
      {isLarge && (
        <UserCardLarge userProfile={userProfile} isCertified={isCertified} />
      )}
    </Card>
  )
}

export function LoadingUserCardMedium() {
  return (
    <Card
      className="SRC-userCard SRC-userCardMediumUp"
      style={{ width: '380px' }}
    >
      <Skeleton variant="circular" width="80px" height="80px" />
      <div style={{ width: '250px' }}>
        <SkeletonTable numCols={1} numRows={2} />
      </div>
    </Card>
  )
}

export default UserCardMedium
