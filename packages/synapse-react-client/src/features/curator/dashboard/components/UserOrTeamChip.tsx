import { useUserOrTeam } from '@/components/UserOrTeamBadge/useUserOrTeam'
import { getPrincipalDisplayName } from '@/utils/functions/getPrincipalDisplayName'
import { Chip, Skeleton } from '@mui/material'
import { TaskState } from '@sage-bionetworks/synapse-client'
import styles from './UserOrTeamChip.module.scss'

export type CurationTaskCardProps = {
  title: string
  description: string
  taskType: string
  assigneePrincipalIds: string[]
  taskState: TaskState
  onClickNextStep: () => void
}

export default function UserOrTeamChip(props: { principalId: string }) {
  const { principalId } = props

  const { userGroupHeader, isLoading, IconComponent } =
    useUserOrTeam(principalId)

  if (isLoading) {
    return <Skeleton width={125} height={30} />
  }

  if (!userGroupHeader) {
    return null
  }

  return (
    <Chip
      className={styles.chip}
      label={getPrincipalDisplayName(userGroupHeader, {
        showFullName: true,
        showUsername: false,
      })}
      avatar={<IconComponent avatarSize="SMALL" />}
    />
  )
}
