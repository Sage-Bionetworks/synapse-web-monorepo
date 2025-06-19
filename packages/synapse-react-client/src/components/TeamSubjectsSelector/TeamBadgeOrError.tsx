import { useGetTeam } from '@/synapse-queries'
import ErrorTwoTone from '@mui/icons-material/ErrorTwoTone'
import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import TeamBadge from '../TeamBadge'

export type TeamBadgeOrErrorProps = {
  teamId: string
}

export function TeamBadgeOrError(props: TeamBadgeOrErrorProps) {
  const { teamId } = props

  const { data: team, isLoading, error } = useGetTeam(teamId)

  if (error) {
    return (
      <Stack
        direction="row"
        role="alert"
        sx={{
          gap: '5px',
          alignItems: 'center',
        }}
      >
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
