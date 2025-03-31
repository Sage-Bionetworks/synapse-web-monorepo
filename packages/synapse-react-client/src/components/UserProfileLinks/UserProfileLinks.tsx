import { useGetUserProfile } from '@/synapse-queries'
import Skeleton from '@mui/material/Skeleton'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/system'
import { ReactNode, useMemo, useState } from 'react'
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
      <Box
        className="Tabs"
        sx={theme => ({
          [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            gap: '8px',
          },
        })}
      >
        {userProfileLinksConfig.map(config => {
          return (
            <Box
              className="Tab"
              role="tab"
              sx={theme => ({
                [theme.breakpoints.down('sm')]: {
                  minHeight: '45px',
                },
              })}
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
            </Box>
          )
        })}
      </Box>
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
