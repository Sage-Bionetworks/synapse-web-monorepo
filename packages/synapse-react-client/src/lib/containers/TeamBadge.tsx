import React from 'react'
import { PRODUCTION_ENDPOINT_CONFIG } from '../utils/functions/getEndpoint'
import IconSvg from './IconSvg'

export type TeamBadgeProps = {
  teamId: string | number
  teamName: string
  disableHref?: boolean
}

export default function TeamBadge(props: TeamBadgeProps) {
  const { teamId, teamName, disableHref } = props

  return (
    <span>
      <IconSvg icon="team" />
      <a
        style={{ marginLeft: '5px' }}
        href={
          disableHref
            ? undefined
            : `${PRODUCTION_ENDPOINT_CONFIG.PORTAL}#!Team:${teamId}`
        }
      >
        {teamName}
      </a>
    </span>
  )
}
