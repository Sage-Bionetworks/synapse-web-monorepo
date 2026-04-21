import type { ReplicaUserInfo } from '../hooks/useGridReplicaUsers'

/**
 * Returns a human-readable tooltip string describing who last changed a cell,
 * based on the replica's category and (if available) the user's profile.
 */
export function getChangeTooltipText(info: ReplicaUserInfo): string {
  switch (info.category) {
    case 'self':
      return 'You changed this'
    case 'own-agent':
      return 'Changed by your agent'
    case 'other-agent':
      return 'Changed by an agent'
    case 'other-user': {
      const { profile } = info
      if (!profile) return 'Changed by another user'
      const name =
        [profile.firstName, profile.lastName]
          .filter(Boolean)
          .join(' ')
          .trim() || profile.userName
      return `Changed by ${name}`
    }
  }
}
