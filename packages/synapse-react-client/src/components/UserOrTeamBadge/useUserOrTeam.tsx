import {
  useGetProfileImage,
  useGetStablePresignedUrl,
} from '@/synapse-queries/file/useFiles'
import { useGetUserGroupHeader } from '@/synapse-queries/user/useUserGroupHeader'
import { useGetRealmPrincipals } from '@/synapse-queries/realm/useRealmPrincipals'
import { useGetTeam } from '@/synapse-queries/team/useTeam'
import { useCreateUrlForData } from '@/utils/hooks/usePreFetchResource'
import {
  FileHandleAssociateType,
  UserGroupHeader,
  UserProfile,
} from '@sage-bionetworks/synapse-types'
import { Avatar as MUIAvatar } from '@mui/material'
import React, { useMemo } from 'react'
import { Avatar, AvatarSize } from '../UserCard/Avatar'
import IconSvg from '../IconSvg/IconSvg'

export type UseUserOrTeamResult = {
  /** The lightweight header for the resolved principal (user or team). Undefined while loading. */
  userGroupHeader: UserGroupHeader | undefined
  /** True while the `userGroupHeader` is being fetched. */
  isLoading: boolean
  /**
   * A stable React component that renders the icon for the resolved principal.
   *
   * - **Individual user**: renders an `Avatar` with the user's profile image, falling back to
   *   colored initials when no image is available.
   * - **Regular team**: renders a team icon (`IconSvg icon="team"`), or the team's custom image
   *   when `Team.icon` (a file-handle ID) is set.
   * - **Public / authenticated-users group**: renders a globe icon (`IconSvg icon="public"`).
   *
   * Accepts an optional `avatarSize` prop (`'SMALL' | 'MEDIUM' | 'LARGE'`, default `'SMALL'`)
   * for caller-controlled sizing. Returns `null` while the principal's identity has not yet
   * been resolved (i.e., while `isLoading` is true).
   */
  IconComponent: React.ComponentType<{ avatarSize?: AvatarSize }>
  /**
   * Identifies Synapse realm special groups.
   *
   * - `'authenticatedUsers'` — the principal is the "All registered Synapse users" group.
   * - `'publicGroup'` — the principal is the "Anyone on the web" group.
   * - `null` — the principal is an individual user, a regular team, or realm data is still loading.
   */
  specialGroupType: 'authenticatedUsers' | 'publicGroup' | null
}

function UserAvatarIcon({
  ownerId,
  syntheticProfile,
  avatarSize = 'SMALL',
}: {
  ownerId: string
  syntheticProfile: UserProfile
  avatarSize?: AvatarSize
}) {
  const { data: blob, isLoading } = useGetProfileImage(ownerId)
  const imageURL = useCreateUrlForData(blob)
  return (
    <Avatar
      userProfile={syntheticProfile}
      imageURL={imageURL}
      avatarSize={avatarSize}
      showCardOnHover={false}
      isLoadingAvatar={isLoading}
    />
  )
}

const avatarSizePx: Record<AvatarSize, number> = {
  SMALL: 20,
  MEDIUM: 30,
  LARGE: 80,
}

function TeamAvatarIcon({
  ownerId,
  isPublicGroup,
  avatarSize = 'SMALL',
}: {
  ownerId: string
  isPublicGroup: boolean
  avatarSize?: AvatarSize
}) {
  const { data: team } = useGetTeam(ownerId, { enabled: !isPublicGroup })

  const { dataUrl: teamIconUrl } =
    useGetStablePresignedUrl(
      {
        fileHandleId: team?.icon ?? '',
        associateObjectId: ownerId,
        associateObjectType: FileHandleAssociateType.TeamAttachment,
      },
      false,
      { enabled: !isPublicGroup && !!team?.icon },
    ) ?? {}

  const size = avatarSizePx[avatarSize]

  if (isPublicGroup) {
    return <IconSvg icon="public" wrap={false} sx={{ fontSize: size }} />
  }

  if (teamIconUrl) {
    return (
      <MUIAvatar
        src={teamIconUrl}
        sx={{ width: size, height: size, bgcolor: 'background.default' }}
      />
    )
  }

  return <IconSvg icon="team" wrap={false} sx={{ fontSize: size }} />
}

/**
 * Resolves a Synapse principal (user or team) by ID and returns display data plus a
 * ready-to-render icon component.
 *
 * @param principalId - The numeric or string Synapse principal ID. If omitted, falls back to
 *   `providedUserGroupHeader.ownerId`. Pass `undefined` when the ID is not yet known — the
 *   hook will return `isLoading: false` with all fields undefined/null until an ID is provided.
 * @param providedUserGroupHeader - An already-fetched `UserGroupHeader`. When supplied, the
 *   network fetch for the header is skipped entirely and this value is used directly. Useful
 *   when the caller already has header data (e.g., from a list response).
 */
export function useUserOrTeam(
  principalId?: string | number,
  providedUserGroupHeader?: UserGroupHeader,
): UseUserOrTeamResult {
  const resolvedPrincipalId = (
    principalId ??
    providedUserGroupHeader?.ownerId ??
    ''
  ).toString()

  const { data: fetchedUserGroupHeader, isLoading } = useGetUserGroupHeader(
    resolvedPrincipalId,
    { enabled: !providedUserGroupHeader && !!resolvedPrincipalId },
  )

  const userGroupHeader = providedUserGroupHeader ?? fetchedUserGroupHeader

  const ownerId = userGroupHeader?.ownerId
  const isIndividual = userGroupHeader?.isIndividual
  const userName = userGroupHeader?.userName
  const firstName = userGroupHeader?.firstName

  const { data: realmPrincipals } = useGetRealmPrincipals()

  const specialGroupType: 'authenticatedUsers' | 'publicGroup' | null =
    isIndividual === false
      ? realmPrincipals?.authenticatedUsers === resolvedPrincipalId
        ? 'authenticatedUsers'
        : realmPrincipals?.publicGroup === resolvedPrincipalId
        ? 'publicGroup'
        : null
      : null

  const isPublicGroup = specialGroupType !== null

  const IconComponent = useMemo<
    React.ComponentType<{
      avatarSize?: AvatarSize
    }>
  >(() => {
    if (ownerId == null || isIndividual == null) return () => null

    if (isIndividual) {
      const syntheticProfile = {
        ownerId,
        userName,
        firstName,
      } as unknown as UserProfile
      return ({ avatarSize }: { avatarSize?: AvatarSize }) => (
        <UserAvatarIcon
          ownerId={ownerId}
          syntheticProfile={syntheticProfile}
          avatarSize={avatarSize}
        />
      )
    } else {
      return ({ avatarSize }: { avatarSize?: AvatarSize }) => (
        <TeamAvatarIcon
          ownerId={ownerId}
          isPublicGroup={isPublicGroup}
          avatarSize={avatarSize}
        />
      )
    }
  }, [ownerId, isIndividual, userName, firstName, isPublicGroup])

  return { userGroupHeader, isLoading, IconComponent, specialGroupType }
}
