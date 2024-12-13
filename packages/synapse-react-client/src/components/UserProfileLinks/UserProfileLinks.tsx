import Skeleton from '@mui/material/Skeleton'
import { useState, useMemo, ReactNode } from 'react'

import Typography from '@mui/material/Typography'
import { useGetUserProfile } from '../../synapse-queries/user/useUserBundle'
import { SynapseErrorBoundary } from '../error/ErrorBanner'
import IconSvg, { IconName } from '../IconSvg/IconSvg'
import UserChallenges from './UserChallenges'
import UserProjects from './UserProjects'
import UserTeams from './UserTeams'

type UserProfileLinkConfig = {
  name: 'Projects' | 'Teams' | 'Challenges'
  iconName: IconName
  render: ReactNode
}

export type UserProfileLinksProps = {
  userId: string
}

export function UserProfileLinks({ userId }: UserProfileLinksProps) {
  const [currentTab, setCurrentTab] =
    useState<UserProfileLinkConfig['name']>('Projects')
  const { data: userProfile } = useGetUserProfile(userId)

  const userProfileLinksConfig: UserProfileLinkConfig[] = useMemo(
    () => [
      {
        name: 'Projects',
        iconName: 'dashboard',
        render: <UserProjects userId={userId} />,
      },
      {
        name: 'Teams',
        iconName: 'peopleTwoTone',
        render: <UserTeams userId={userId} />,
      },
      {
        name: 'Challenges',
        iconName: 'challengesTwoTone',
        render: <UserChallenges userId={userId} />,
      },
    ],
    [userId],
  )

  return (
    <div className="UserProfileLinks">
      <Typography variant="headline2" className="title">
        {userProfile && <>{userProfile?.userName}&apos;s Items</>}
        {!userProfile && <Skeleton width="75%" />}
      </Typography>
      <div className="Tabs">
        {userProfileLinksConfig.map(config => {
          return (
            <div
              className="Tab"
              role="tab"
              key={config.name}
              onClick={e => {
                e.stopPropagation()
                setCurrentTab(config.name)
              }}
              aria-selected={currentTab === config.name}
            >
              <Typography variant="buttonLink">
                <IconSvg icon={config.iconName} /> {config.name}
              </Typography>
            </div>
          )
        })}
      </div>
      <div className="TabContent">
        <SynapseErrorBoundary>
          {
            userProfileLinksConfig.find(config => currentTab === config.name)
              ?.render
          }
        </SynapseErrorBoundary>
      </div>
    </div>
  )
}

export default UserProfileLinks
