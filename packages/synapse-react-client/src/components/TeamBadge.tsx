import { PRODUCTION_ENDPOINT_CONFIG } from '@/utils/functions/getEndpoint'
import {
  AUTHENTICATED_PRINCIPAL_ID,
  PUBLIC_PRINCIPAL_ID,
} from '@/utils/SynapseConstants'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
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

  let icon: IconName = 'team'

  if (teamId == AUTHENTICATED_PRINCIPAL_ID) {
    icon = 'public'
    teamName = AUTHENTICATED_GROUP_DISPLAY_TEXT
    disableHref = true
  }
  if (teamId == PUBLIC_PRINCIPAL_ID) {
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
