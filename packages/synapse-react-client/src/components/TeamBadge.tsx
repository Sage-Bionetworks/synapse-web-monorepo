import { PRODUCTION_ENDPOINT_CONFIG } from '@/utils/functions/getEndpoint'
import { useRealmPrincipals } from '@/utils/context/RealmPrincipalsContext'
import { Box, Link } from '@mui/material'
import IconSvg, { IconName } from './IconSvg/IconSvg'

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

  const { authenticatedUsersId, publicGroupId } = useRealmPrincipals()

  let icon: IconName = 'team'

  // Convert teamId to string for comparison with realm principal IDs
  const teamIdStr = String(teamId)

  if (authenticatedUsersId && teamIdStr === authenticatedUsersId) {
    icon = 'public'
    teamName = AUTHENTICATED_GROUP_DISPLAY_TEXT
    disableHref = true
  }
  if (publicGroupId && teamIdStr === publicGroupId) {
    icon = 'public'
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
      <IconSvg icon={icon} fontSize={'small'} />
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
