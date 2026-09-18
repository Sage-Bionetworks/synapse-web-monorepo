import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import GridLoadingState, {
  GRID_LOADING_MESSAGES,
  GridLoadingStateProps,
} from './GridLoadingState'

const CONNECTION_STAGES: Array<{
  name: string
  props: GridLoadingStateProps
  expectedMessage: string
}> = [
  {
    name: 'no replica yet',
    props: { hasReplicaId: false, hasPresignedUrl: false, isConnected: false },
    expectedMessage: GRID_LOADING_MESSAGES.awaitingReplica,
  },
  {
    name: 'replica but no presigned URL',
    props: { hasReplicaId: true, hasPresignedUrl: false, isConnected: false },
    expectedMessage: GRID_LOADING_MESSAGES.awaitingPresignedUrl,
  },
  {
    name: 'presigned URL but not connected',
    props: { hasReplicaId: true, hasPresignedUrl: true, isConnected: false },
    expectedMessage: GRID_LOADING_MESSAGES.awaitingConnection,
  },
  {
    name: 'connected but data not loaded',
    props: { hasReplicaId: true, hasPresignedUrl: true, isConnected: true },
    expectedMessage: GRID_LOADING_MESSAGES.awaitingData,
  },
]

describe('GridLoadingState', () => {
  it.each(CONNECTION_STAGES)(
    'reports progress when $name',
    ({ props, expectedMessage }) => {
      render(<GridLoadingState {...props} />)
      expect(screen.getByRole('status')).toHaveTextContent(expectedMessage)
    },
  )

  it('renders a skeleton in place of the grid', () => {
    render(<GridLoadingState hasReplicaId hasPresignedUrl isConnected />)
    expect(screen.getByText('Setting up grid')).toBeInTheDocument()
    expect(
      document.querySelectorAll('.MuiSkeleton-root').length,
    ).toBeGreaterThan(0)
  })
})
