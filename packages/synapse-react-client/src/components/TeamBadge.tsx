import React from 'react'
import { PRODUCTION_ENDPOINT_CONFIG } from '../utils/functions/getEndpoint'
import IconSvg, { IconName } from './IconSvg/IconSvg'
import {
  AUTHENTICATED_PRINCIPAL_ID,
  PUBLIC_PRINCIPAL_ID,
} from '../utils/SynapseConstants'

export type TeamBadgeProps = {
  teamId: string | number
  teamName: string
  disableHref?: boolean
}

export default function TeamBadge(props: TeamBadgeProps) {
  const { teamId } = props
  let { teamName, disableHref } = props

  let icon: IconName = 'team'

  if (teamId == AUTHENTICATED_PRINCIPAL_ID) {
    icon = 'public'
    teamName = 'All registered Synapse users'
    disableHref = true
  }
  if (teamId == PUBLIC_PRINCIPAL_ID) {
    icon = 'public'
    teamName = 'Anyone on the web'
    disableHref = true
  }

  const Tag = disableHref ? 'span' : 'a'

  return (
    <span>
      <IconSvg icon={icon} />
      <Tag
        style={{ marginLeft: '5px' }}
        href={
          disableHref
            ? undefined
            : `${PRODUCTION_ENDPOINT_CONFIG.PORTAL}#!Team:${teamId}`
        }
      >
        {teamName}
      </Tag>
    </span>
  )
}
