import { PRODUCTION_ENDPOINT_CONFIG } from '@/utils/functions/getEndpoint'
import { Box, Link } from '@mui/material'
import { useUserOrTeam } from './UserOrTeamBadge/useUserOrTeam'

export const AUTHENTICATED_GROUP_DISPLAY_TEXT = 'All registered Synapse users'
export const PUBLIC_GROUP_DISPLAY_TEXT = 'Anyone on the web'

export type TeamBadgeProps = {
  teamId: string | number
  teamName: string
  disableHref?: boolean
  openLinkInNewTab?: boolean
}

export default function TeamBadge(props: TeamBadgeProps) {
  const { teamId, openLinkInNewTab } = props
  let { teamName, disableHref } = props

  const { specialGroupType, IconComponent } = useUserOrTeam(String(teamId))

  if (specialGroupType === 'authenticatedUsers') {
    teamName = AUTHENTICATED_GROUP_DISPLAY_TEXT
    disableHref = true
  } else if (specialGroupType === 'publicGroup') {
    teamName = PUBLIC_GROUP_DISPLAY_TEXT
    disableHref = true
  }

  const Tag = disableHref ? 'span' : Link

  return (
    <Box
      component={'span'}
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
      }}
    >
      <IconComponent />
      <Tag
        style={{ marginLeft: '5px' }}
        href={
          disableHref
            ? undefined
            : `${PRODUCTION_ENDPOINT_CONFIG.PORTAL}Team:${teamId}`
        }
        target={openLinkInNewTab ? '_blank' : ''}
      >
        {teamName}
      </Tag>
    </Box>
  )
}
