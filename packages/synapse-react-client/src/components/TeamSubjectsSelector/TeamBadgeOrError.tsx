import React, { useMemo } from 'react'
import { useGetTeamList } from '../../synapse-queries'
import { Skeleton, Stack, Typography } from '@mui/material'
import { ErrorTwoTone } from '@mui/icons-material'
import TeamBadge from '../TeamBadge'

export type TeamBadgeOrErrorProps = {
  teamId: string
}

export const TeamBadgeOrError: React.FunctionComponent<
  TeamBadgeOrErrorProps
> = (props: TeamBadgeOrErrorProps) => {
  const { teamId } = props

  const { data: teamList, isLoading, error } = useGetTeamList([teamId])
  const team = useMemo(() => {
    if (teamList && teamList.list.length === 1) {
      return teamList.list[0]
    }
    return undefined
  }, [teamList])

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
