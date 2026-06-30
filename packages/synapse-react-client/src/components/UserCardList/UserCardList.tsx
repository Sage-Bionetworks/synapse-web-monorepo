import { useGetUserProfilesWithProfilePicAttached } from '@/synapse-queries/user/useUserBundle'
import { MEDIUM_USER_CARD, UserCardSize } from '@/utils/SynapseConstants'
import {
  ColumnTypeEnum,
  RowSet,
  UserProfile,
} from '@sage-bionetworks/synapse-types'
import { useMemo } from 'react'
import UserCard from '../UserCard/UserCard'

export type UserCardListProps = {
  /* The list of user IDs or null values to render. For null values, the card will be rendered with table data supplied by `firstName`, `lastName`, and `institution` columns supplied by the data prop.  */
  list: (string | null)[]
  size?: UserCardSize
  // Data should not be needed, however, it gives the option to fill in a user profile with other column
  // fields. This is required specifically by AMP-AD Explore/People page
  rowSet?: RowSet
}

/**
 * Given a RowSet, extracts faux user profiles for rows where ownerId is null,
 * using firstName, lastName, and institution columns.
 */
function extractFauxUserProfiles(
  rowSet: RowSet,
): Omit<UserProfile, 'ownerId'>[] {
  const firstNameIndex = rowSet.headers.findIndex(el => el.name === 'firstName')
  const lastNameIndex = rowSet.headers.findIndex(el => el.name === 'lastName')
  const institutionIndex = rowSet.headers.findIndex(
    el => el.name === 'institution',
  )
  const ownerIdIndex = rowSet.headers.findIndex(
    el => el.columnType === ColumnTypeEnum.USERID,
  )
  const nullOwnerIdsRows = rowSet.rows.filter(el => !el.values[ownerIdIndex])
  return nullOwnerIdsRows.map(el => {
    const values = el.values
    return {
      firstName: values[firstNameIndex] ?? '',
      lastName: values[lastNameIndex] ?? '',
      company: values[institutionIndex] ?? undefined,
      ownerId: null,
      userName: values[firstNameIndex] ? (values[firstNameIndex][0] ?? '') : '',
    }
  })
}

export function UserCardList(props: UserCardListProps) {
  const { list, size = MEDIUM_USER_CARD, rowSet } = props

  const principalIds = useMemo(
    () => list.filter((el): el is string => !!el),
    [list],
  )

  const { data } = useGetUserProfilesWithProfilePicAttached(principalIds)

  const userProfileMap = useMemo(() => {
    const map: Record<string, UserProfile> = {}
    data?.list.forEach(profile => {
      if (profile.ownerId) {
        map[profile.ownerId] = profile
      }
    })
    return map
  }, [data])

  const fauxUserProfilesList = rowSet
    ? extractFauxUserProfiles(rowSet)
    : undefined
  let fauxUserProfileIndex = 0

  return (
    <div className="SRC-card-grid-row">
      {list.map(ownerId => {
        const userProfile = ownerId != null ? userProfileMap[ownerId] : null
        if (userProfile) {
          return (
            <div
              key={JSON.stringify(userProfile)}
              className="SRC-grid-item SRC-narrow-grid-item"
            >
              <UserCard
                size={size}
                preSignedURL={userProfile.clientPreSignedURL}
                userProfile={userProfile}
              />
            </div>
          )
        }
        const fauxUserProfile =
          fauxUserProfilesList && fauxUserProfilesList[fauxUserProfileIndex]
        if (!fauxUserProfile) {
          return false
        }
        fauxUserProfileIndex += 1
        return (
          <div
            key={JSON.stringify(fauxUserProfile)}
            className="SRC-grid-item SRC-narrow-grid-item"
          >
            <UserCard
              disableLink={true}
              hideEmail={true}
              size={size}
              // TODO: Modify UserCard to accept a fake profile with no ownerId field, and remove this cast.
              userProfile={fauxUserProfile as UserProfile}
            />
          </div>
        )
      })}
    </div>
  )
}

export default UserCardList
