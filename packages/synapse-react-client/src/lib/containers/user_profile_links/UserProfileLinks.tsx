import Skeleton from '@mui/material/Skeleton'
import React, { useState } from 'react'
import { useGetUserProfile } from '../../utils/hooks/SynapseAPI/user/useUserBundle'
import Typography from '@mui/material/Typography'
import { SynapseErrorBoundary } from '../error/ErrorBanner'
import IconSvg, { Icon } from '../IconSvg'
import UserChallenges from './UserChallenges'
import UserProjects from './UserProjects'
import UserTeams from './UserTeams'

export enum UserProfileLinksTabs {
  PROJECTS = 'Projects',
  TEAMS = 'Teams',
  CHALLENGES = 'Challenges',
}

type UserProfileLinksProps = {
  userId: string
}

function UserProfileLinks({ userId }: UserProfileLinksProps) {
  const [currentTab, setCurrentTab] = useState<UserProfileLinksTabs>(
    UserProfileLinksTabs.PROJECTS,
  )
  const { data: userProfile } = useGetUserProfile(userId)

  function getIconName(currentTab: UserProfileLinksTabs): Icon {
    switch (currentTab) {
      case UserProfileLinksTabs.PROJECTS:
        return 'dashboard'
      case UserProfileLinksTabs.TEAMS:
        return 'peopleTwoTone'
      case UserProfileLinksTabs.CHALLENGES:
        return 'challengesTwoTone'
    }
  }
  return (
    <div className="UserProfileLinks">
      <Typography variant="headline2" className="title">
        {userProfile && <>{userProfile?.userName}&apos;s Items</>}
        {!userProfile && <Skeleton width="75%" />}
      </Typography>
      <div className="Tabs">
        {Object.keys(UserProfileLinksTabs).map((keyName: string) => {
          return (
            <div
              className="Tab"
              role="tab"
              key={keyName}
              onClick={e => {
                e.stopPropagation()
                setCurrentTab(UserProfileLinksTabs[keyName])
              }}
              aria-selected={UserProfileLinksTabs[keyName] === currentTab}
            >
              <Typography variant="buttonLink">
                <IconSvg icon={getIconName(UserProfileLinksTabs[keyName])} />{' '}
                {UserProfileLinksTabs[keyName]}
              </Typography>
            </div>
          )
        })}
      </div>
      <div className="TabContent">
        <SynapseErrorBoundary>
          {currentTab === UserProfileLinksTabs.PROJECTS && (
            <>
              <UserProjects userId={userId} />
            </>
          )}
          {currentTab === UserProfileLinksTabs.TEAMS && (
            <>
              <UserTeams userId={userId} />
            </>
          )}
          {currentTab === UserProfileLinksTabs.CHALLENGES && (
            <>
              <UserChallenges userId={userId} />
            </>
          )}
        </SynapseErrorBoundary>
      </div>
    </div>
  )
}

export default UserProfileLinks
