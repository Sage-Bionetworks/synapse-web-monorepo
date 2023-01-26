import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { getUserProfiles } from '../utils/SynapseClient'
import { useSynapseContext } from '../utils/SynapseContext'
import { UserCardSmall } from './UserCardSmall'

export type UserIdListProps = {
  userIds: string[]
}

const UserIdList: React.FC<UserIdListProps> = props => {
  const { accessToken } = useSynapseContext()
  const { userIds } = props
  const [profileCards, setProfileCards] = useState<JSX.Element[]>()
  const { ref, inView } = useInView()
  let mounted: boolean = true

  useEffect(() => {
    if (mounted && inView) {
      getUserProfilesToRender()
    }
    return () => {
      mounted = false
    }
  }, [userIds, inView])

  const getUserProfilesToRender = () => {
    if (!userIds.length) return

    getUserProfiles(userIds, accessToken)
      .then(userProfiles => {
        const list = userProfiles.list.map(el => (
          <UserCardSmall
            key={el.ownerId}
            userProfile={el}
            className="SRC-marginFifteen"
          />
        ))
        setProfileCards(list)
      })
      .catch(e => {
        console.log('UserIdList: Error getting user profiles', e)
      })
  }

  return <span ref={ref}>{profileCards}</span>
}

export default UserIdList
