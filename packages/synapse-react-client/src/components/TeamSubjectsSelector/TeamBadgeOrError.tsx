import { ErrorTwoTone } from '@mui/icons-material'
import { Skeleton, Stack, Typography } from '@mui/material'
import { useGetTeam } from '../../synapse-queries/team/useTeam'

import TeamBadge from '../TeamBadge'

export type TeamBadgeOrErrorProps = {
  teamId: string
}

export function TeamBadgeOrError(props: TeamBadgeOrErrorProps) {
  const { teamId } = props

  const { data: team, isLoading, error } = useGetTeam(teamId)

  if (error) {
    return (
      <Stack gap="5px" direction="row" alignItems="center" role="alert">
        <ErrorTwoTone color="error" />
        <Typography variant="smallText1" color="error">
          {error?.reason || `Error: ${teamId}`}
        </Typography>
      </Stack>
    )
  } else if (isLoading || !team) {
    return <Skeleton width={125} height={30} />
  }
  return <TeamBadge teamId={team.id} teamName={team.name} />
}
