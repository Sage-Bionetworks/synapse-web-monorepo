import { SkeletonTable } from '@/components/Skeleton/SkeletonTable'
import { Stack, Typography } from '@mui/material'
import { SynapseSpinner } from '../../LoadingScreen/LoadingScreen'

export type GridLoadingStateProps = {
  hasReplicaId: boolean
  hasPresignedUrl: boolean
  isConnected: boolean
}

export const GRID_LOADING_MESSAGES = {
  awaitingReplica: 'Setting up real-time sync…',
  awaitingPresignedUrl: 'Establishing secure connection…',
  awaitingConnection: 'Connecting to server…',
  awaitingData: 'Loading table data…',
} as const

/**
 * Describes how far along the grid is in establishing its first connection.
 */
export function getGridLoadingMessage({
  hasReplicaId,
  hasPresignedUrl,
  isConnected,
}: GridLoadingStateProps): string {
  if (!hasReplicaId) {
    return GRID_LOADING_MESSAGES.awaitingReplica
  }
  if (!hasPresignedUrl) {
    return GRID_LOADING_MESSAGES.awaitingPresignedUrl
  }
  if (!isConnected) {
    return GRID_LOADING_MESSAGES.awaitingConnection
  }
  return GRID_LOADING_MESSAGES.awaitingData
}

/**
 * Placeholder shown in place of the grid until its first connection has finished
 * loading data. Rendering this instead of the grid keeps users from editing cells
 * or watching rows stream in while the initial data is still being replayed.
 */
export default function GridLoadingState(props: GridLoadingStateProps) {
  return (
    <Stack spacing={1} sx={{ mb: 1.25 }}>
      <Typography variant="sectionTitle">Setting up grid</Typography>
      <Stack direction="row" spacing={1} role="status" alignItems="center">
        <SynapseSpinner size={16} margin="0" />
        <Typography variant="caption" color="text.secondary">
          {getGridLoadingMessage(props)}
        </Typography>
      </Stack>
      <SkeletonTable numRows={4} numCols={1} />
    </Stack>
  )
}
