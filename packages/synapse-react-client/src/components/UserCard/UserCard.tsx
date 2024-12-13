import { useMemo } from 'react'
import * as SynapseConstants from '../../utils/SynapseConstants'
import { useGetProfileImage } from '../../synapse-queries/file/useFiles'
import {
  useGetPrincipalIdForAlias,
  useGetUserProfile,
} from '../../synapse-queries/user/useUserBundle'
import usePreFetchResource, {
  useCreateUrlForData,
} from '../../utils/hooks/usePreFetchResource'
import { AliasType, UserProfile } from '@sage-bionetworks/synapse-types'
import { Avatar, AvatarSize } from './Avatar'
import { MenuAction } from './UserCardContextMenu'
import UserCardMedium from './UserCardMedium'
import { UserBadge } from './UserBadge'
import { UserCardSize } from '../../utils/SynapseConstants'

export type UserCardProps = {
  /** A UserProfile may be used for data for the card. You must supply one of `userProfile`, `alias`, `ownerId` */
  userProfile?: UserProfile
  /** An alias that resolves the ownerId for the UserProfile. You must supply one of `userProfile`, `alias`, `ownerId` */
  alias?: string
  /** The unique ownerId of the UserProfile. You must supply one of `userProfile`, `alias`, `ownerId` */
  ownerId?: string
  /** Whether to hide the user's Synapse email address */
  hideEmail?: boolean
  /** If set, the corresponding image will be shown for the user. */
  preSignedURL?: string
  /** Specifies the card size */
  size: UserCardSize
  /** For the small user card or avatar, shows the medium user card on mouseover */
  showCardOnHover?: boolean
  /** @deprecated For the small user card, hides the tooltip observed when hovering over the profile image. */
  hideTooltip?: boolean
  /** Specifies the dropdown menu functionality for the ellipsis on medium/large cards. If field === 'SEPERATOR' then a break will occur in the menu. If left undefined, the menu will not render to the screen. */
  menuActions?: MenuAction[]
  /** The link to point to on the username, defaults to https://www.synapse.org/Profile:${userProfile.ownerId} */
  link?: string
  openLinkInNewTab?: boolean
  /** Disables the `@username` link for the small user card (if `showCardOnHover` is false). For the medium user card, disables linking the user's name to their profile (or other specified destination) */
  disableLink?: boolean
  isCertified?: boolean
  isValidated?: boolean
  /** Determines the size of the avatar when size === 'AVATAR' or (size === 'SMALL' and withAvatar is true) */
  avatarSize?: AvatarSize
  /** Whether to show the avatar with the name for the small user card */
  withAvatar?: boolean
  /** @deprecated Whether to show the full name in the small user card */
  showFullName?: boolean
  className?: string
  /** @deprecated show certification/validation badges for small user card */
  showAccountLevelIcon?: boolean
}

export function UserCard(props: UserCardProps) {
  const {
    userProfile: initialProfile,
    preSignedURL: initialPreSignedURL,
    size,
    ownerId,
    alias,
    ...rest
  } = props

  // If we were given an alias, fetch the principal ID
  const { data: fetchedPrincipalId, isLoading: isLoadingAliasLookup } =
    useGetPrincipalIdForAlias(
      {
        alias: alias!,
        type: AliasType.USER_NAME,
      },
      { enabled: !!alias },
    )

  const principalId = (
    ownerId ??
    initialProfile?.ownerId ??
    fetchedPrincipalId
  )?.toString()

  // If we weren't provided an initialProfile, fetch from Synapse
  const { data: fetchedProfile, isLoading: isLoadingProfile } =
    useGetUserProfile(principalId!, {
      enabled: !!principalId && !initialProfile,
    })
  const userProfile = initialProfile ?? fetchedProfile

  const { data: avatarData, isLoading: isLoadingAvatar } = useGetProfileImage(
    principalId!,
    {
      // Don't fetch the avatar if `initialPresignedURL` is provided.
      // Also, wait until we have a value for `principalId`
      enabled: !!(!initialPreSignedURL && principalId),
    },
  )

  // If a URL was provided, fetch it and create a local data URL
  const providedAvatarURL = usePreFetchResource(initialPreSignedURL)
  // If we fetched the avatar from Synapse, we already have the blob. Create a local data URL
  const fetchedAvatarUrl = useCreateUrlForData(avatarData)

  const imageURL = providedAvatarURL ?? fetchedAvatarUrl

  const isLoading = isLoadingAliasLookup || isLoadingProfile

  const propsForChild = useMemo(
    () => ({
      userProfile: userProfile!,
      imageURL,
      isLoadingAvatar,
      ...rest,
    }),
    [imageURL, isLoadingAvatar, rest, userProfile],
  )

  if (isLoading || userProfile == null) {
    return <></>
  }

  switch (size) {
    case SynapseConstants.AVATAR:
      return <Avatar {...propsForChild} />
    case SynapseConstants.SMALL_USER_CARD:
      return (
        <UserBadge userId={ownerId ?? userProfile.ownerId} {...propsForChild} />
      )
    case SynapseConstants.MEDIUM_USER_CARD:
      return <UserCardMedium {...propsForChild} />
    case SynapseConstants.LARGE_USER_CARD:
      return <UserCardMedium isLarge={true} {...propsForChild} />
    default:
      console.warn('No size specified for UserCard')
      return <span />
  }
}

export default UserCard
