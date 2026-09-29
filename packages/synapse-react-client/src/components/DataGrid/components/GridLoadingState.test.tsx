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

  it('heads the placeholder with an accessible heading', () => {
    render(<GridLoadingState hasReplicaId hasPresignedUrl isConnected />)
    expect(
      screen.getByRole('heading', { name: GRID_LOADING_MESSAGES.heading }),
    ).toBeInTheDocument()
  })

  it('keeps the decorative placeholder rows out of the accessibility tree', () => {
    render(<GridLoadingState hasReplicaId hasPresignedUrl isConnected />)
    // The status message is the only thing a screen reader should pick up here,
    // so the skeleton must not surface as a table/grid of its own
    expect(screen.queryByRole('table')).not.toBeInTheDocument()
    expect(screen.queryByRole('grid')).not.toBeInTheDocument()
    expect(screen.getByRole('status')).toHaveTextContent(
      GRID_LOADING_MESSAGES.awaitingData,
    )
  })
})
