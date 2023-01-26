import { Skeleton } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import IconCopy from '../assets/icons/IconCopy'
import ValidatedProfileIcon from '../assets/icons/ValidatedProfile'
import { SkeletonTable } from '../assets/skeletons/SkeletonTable'
import { SynapseConstants } from '../utils'
import { PRODUCTION_ENDPOINT_CONFIG } from '../utils/functions/getEndpoint'
import { useGetUserBundle } from '../utils/hooks/SynapseAPI/user/useUserBundle'
import { UserProfile } from '../utils/synapseTypes/'
import { Tooltip } from '@mui/material'
import { Avatar } from './Avatar'
import IconSvg from './IconSvg'
import { ToastMessage } from './ToastMessage'
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
    ref: React.MutableRefObject<HTMLElement | null>,
    value: string,
    onCopy: () => void,
  ) =>
  (event: React.SyntheticEvent) => {
    event.preventDefault()

    // use the Clipboard API
    // https://caniuse.com/mdn-api_clipboard_writetext
    navigator.clipboard.writeText(value).then(() => {
      onCopy()
    })
  }

export const UserCardMedium: React.FC<UserCardMediumProps> = ({
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
}) => {
  const [showModal, setShowModal] = useState(false)
  const [isContextMenuOpen, setIsContextMenuOpen] = useState(false)

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

  useEffect(() => {
    const pageClick = (_event: any) => {
      if (!isContextMenuOpen) {
        return
      }
      // hide content menu (deferred, to allow menu action to process)
      setTimeout(() => {
        if (isContextMenuOpen) {
          toggleContextMenu(_event)
        }
      }, 10)
    }
    // SWC-4778: https://stackoverflow.com/questions/23821768/how-to-listen-for-click-events-that-are-outside-of-a-component
    window.addEventListener('mouseup', pageClick, false)
    return () => {
      window.removeEventListener('mouseup', pageClick, false)
    }
  }, [])

  const { data: userBundle } = useGetUserBundle(
    userProfile.ownerId,
    SynapseConstants.USER_BUNDLE_MASK_ORCID,
  )

  const ORCID = userBundle?.ORCID

  const toggleContextMenu = (_event: any) => {
    setIsContextMenuOpen(isOpen => !isOpen)
  }

  let name = ''
  const linkLocation = link
    ? link
    : `${PRODUCTION_ENDPOINT_CONFIG.PORTAL}#!Profile:${userProfile.ownerId}`
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
    <React.Fragment>
      {!hideEmail && (
        <ToastMessage
          show={showModal}
          text="Email address copied to clipboard"
          autohide={true}
        ></ToastMessage>
      )}
      {disableLink && avatar}
      {!disableLink && (
        // eslint-disable-next-line react/jsx-no-target-blank
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
              if its a medium component the header should be clickable (unless disableLink is set),
              if its large then it should NOT be clickable
            */}
          {/* make SRC-whiteText overridable with a good name! */}
          {isLarge || disableLink ? (
            <span className={isLarge ? 'SRC-whiteText' : 'SRC-blackText'}>
              {name}
            </span>
          ) : (
            // consolidate click events
            // eslint-disable-next-line react/jsx-no-target-blank
            <a
              href={linkLocation}
              target={openLinkInNewTab ? '_blank' : ''}
              rel={openLinkInNewTab ? 'noreferrer' : ''}
              tabIndex={0}
              className={'SRC-hand-cursor'}
            >
              {name}
            </a>
          )}
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
          <p className={`${isLarge ? 'SRC-whiteText' : ''}`}>
            {position} {position ? ' / ' : ''} {company}
          </p>
        )}
        {!hideEmail && (
          <p
            ref={copyToClipboardRef}
            className={`${isLarge ? 'SRC-whiteText' : ''}
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
              <a className={`link ${isLarge ? 'SRC-whiteText' : ''}`}>
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
            className={isLarge ? 'SRC-whiteText' : ''}
          >
            View ORCID
          </a>
        )}
      </div>
      {/* conditionally render menu actions, if its not defined then we don't show the button */}
      {menuActions && (
        <React.Fragment>
          <span
            role="menu"
            className={`SRC-extraPadding SRC-hand-cursor SRC-primary-background-color-hover SRC-inlineBlock
              SRC-cardMenuButton ${
                isContextMenuOpen ? 'SRC-primary-background-color' : ''
              }`}
            style={{ outline: 'none' }}
            tabIndex={0}
            onClick={toggleContextMenu}
            onKeyPress={toggleContextMenu}
          >
            <span
              className={
                isContextMenuOpen || isLarge
                  ? 'SRC-whiteText'
                  : 'SRC-primary-text-color'
              }
            >
              <IconSvg icon="verticalEllipsis" />
            </span>
          </span>
          {isContextMenuOpen && (
            <UserCardContextMenu
              menuActions={menuActions}
              userProfile={userProfile}
            />
          )}
        </React.Fragment>
      )}
      {!menuActions && <span style={{ padding: '0px 0px 0px 35px' }} />}
    </React.Fragment>
  )

  if (!isLarge) {
    return (
      <div
        style={{ border: '1px solid #DDDDDF', backgroundColor: 'white' }}
        className={`cardContainer SRC-userCard SRC-userCardMediumUp ${
          isContextMenuOpen ? 'SRC-hand-cursor' : ''
        }`}
        onClick={isContextMenuOpen ? toggleContextMenu : undefined}
      >
        {mediumCard}
      </div>
    )
  }
  // else return medium card inside large component
  // when the component is large we have to set the click handler to wrap both the top and bottom portion
  return (
    <div
      className={
        isContextMenuOpen ? 'SRC-hand-cursor cardContainer' : 'cardContainer'
      }
      onClick={isContextMenuOpen ? toggleContextMenu : undefined}
    >
      <div
        className={`SRC-primary-background-color SRC-userCard SRC-userCardMediumUp ${
          isContextMenuOpen ? 'SRC-hand-cursor' : ''
        }`}
      >
        {mediumCard}
      </div>
      {isLarge ? (
        <UserCardLarge userProfile={userProfile} isCertified={isCertified} />
      ) : (
        false
      )}
    </div>
  )
}

export const LoadingUserCardMedium: React.FunctionComponent = () => {
  return (
    <div
      className="cardContainer SRC-userCard SRC-userCardMediumUp"
      style={{ width: '380px' }}
    >
      <Skeleton variant="circular" width="80px" height="80px" />
      <div style={{ width: '250px' }}>
        <SkeletonTable numCols={1} numRows={2} />
      </div>
    </div>
  )
}

export default UserCardMedium
