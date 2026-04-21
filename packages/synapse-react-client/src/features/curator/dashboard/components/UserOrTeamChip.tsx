import { useUserOrTeam } from '@/components/UserOrTeamBadge/useUserOrTeam'
import { getUserDisplayName } from '@/utils/functions/getUserDisplayName'
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

  return (
    <Chip
      className={styles.chip}
      label={
        userGroupHeader?.isIndividual
          ? getUserDisplayName(userGroupHeader, true).fullName
          : userGroupHeader?.userName
      }
      avatar={<IconComponent avatarSize="SMALL" />}
    />
  )
}
