import { useState, useRef, useMemo, useEffect } from 'react'
import { useCreateGridSession } from './useCreateGridSession'
import { parseQueryInput } from './DataGridUtils'
import { CreateGridRequest } from '@sage-bionetworks/synapse-client'
import { TableQuery } from '@sage-bionetworks/synapse-client'
import { useSynapseContext } from '@/utils/context/SynapseContext'
import {
  useDeleteGridSession,
  useGetGridSessionsInfinite,
  useCreateGridReplica,
} from '../../synapse-queries/useGridSession'
import { displayToast } from '../ToastMessage/ToastMessage'
import noop from 'lodash-es/noop'
import { Button } from '@mui/material'

export interface StartGridSessionProps {
  onSessionChange?: (sessionId: string) => void
  onReplicaChange?: (replicaId: number | null) => void
  onPresignedUrlChange?: (url: string) => void
  query?: string
}

// Based on user input, start a new session with or without a SQL query
// or join an existing session by ID
export const StartGridSession = ({
  onSessionChange = noop,
  onReplicaChange = noop,
  onPresignedUrlChange = noop,
  query,
}: StartGridSessionProps) => {
  const [gridSql, setGridSql] = useState('')
  const [showDropdown, setShowDropdown] = useState(false)

  const inputRef = useRef<HTMLInputElement>(null)

  const allowInput = !query

  const { synapseClient } = useSynapseContext()

  const { mutate: deleteSession } = useDeleteGridSession({
    onSuccess: () => {
      displayToast('Successfully deleted grid session', 'success')
      onSessionChange('')
      onReplicaChange(null)
      onPresignedUrlChange('')
    },
    onError: error => {
      displayToast(error.reason, 'danger')
    },
  })

  const { data } = useGetGridSessionsInfinite()
  const availableSessions = useMemo(
    () => data?.pages.flatMap(page => page.page || []) || [],
    [data],
  )

  const { mutateAsync: startGridSession } = useCreateGridSession()
  const { mutateAsync: createReplicaId } = useCreateGridReplica()

  const handleStartSession = async (input: string) => {
    const parsedInput = parseQueryInput(input)
    try {
      if (parsedInput.type === 'empty' || parsedInput.type === 'sql') {
        // Start a new session and clear replicaId and presignedUrl
        const gridRequest = {
          concreteType: 'org.sagebionetworks.repo.model.grid.CreateGridRequest',
          initialQuery: undefined as TableQuery | undefined,
          schema$id: undefined as string | undefined,
        } as CreateGridRequest

        if (parsedInput.type === 'sql') {
          gridRequest.initialQuery = { sql: parsedInput.input } as TableQuery
          setGridSql(parsedInput.input)
          console.log('Starting grid session with table query: ', gridSql)
        } else {
          setGridSql('')
          console.log('Starting a new empty grid session.')
        }

        const gridSessionResponse = await startGridSession(gridRequest)
        console.log('Grid session started:', gridSessionResponse)
        const newSessionId = gridSessionResponse.gridSession?.sessionId || ''
        onSessionChange?.(newSessionId)

        const replica = await createReplicaId(newSessionId)
        console.log('Replica created:', replica)
        const newReplicaId = replica?.replica?.replicaId || null
        onReplicaChange?.(newReplicaId)

        const getPresignedUrl =
          await synapseClient.gridServicesClient.postRepoV1GridSessionSessionIdPresignedUrl(
            {
              sessionId: newSessionId,
              createGridPresignedUrlRequest: {
                gridSessionId: newSessionId,
                replicaId: newReplicaId || undefined,
              },
            },
          )
        onPresignedUrlChange?.(getPresignedUrl.presignedUrl || '')
      } else if (parsedInput.type === 'sessionId') {
        console.log(`Joining existing session ID: ${parsedInput.input}`)
        onSessionChange?.(parsedInput.input)

        const replica = await createReplicaId(parsedInput.input)
        console.log('Replica created:', replica)
        const newReplicaId = replica?.replica?.replicaId || null
        onReplicaChange?.(newReplicaId)

        const getPresignedUrl =
          await synapseClient.gridServicesClient.postRepoV1GridSessionSessionIdPresignedUrl(
            {
              sessionId: parsedInput.input,
              createGridPresignedUrlRequest: {
                gridSessionId: parsedInput.input,
                replicaId: newReplicaId || undefined,
              },
            },
          )
        onPresignedUrlChange?.(getPresignedUrl.presignedUrl || '')
      } else {
        console.error(
          'Unknown input type, please provide a valid SQL query or session ID.',
        )
      }
    } catch (error) {
      console.error('Error starting session:', error)
    }
  }

  useEffect(() => {
    if (!allowInput && query) {
      handleStartSession(query)
    }
  }, [query])

  return (
    <>
      <div style={{ position: 'relative', width: '300px' }}>
        {allowInput && (
          <input
            ref={inputRef}
            type="text"
            placeholder="(Optional) Enter a SQL query or session ID"
            style={{ width: '100%' }}
            onFocus={() => setShowDropdown(true)}
            onBlur={() => setTimeout(() => setShowDropdown(false), 150)}
            onKeyDown={e => {
              if (e.key === 'Enter') {
                const inputValue = inputRef.current?.value || ''
                handleStartSession(inputValue)
              }
            }}
          />
        )}
        {showDropdown && availableSessions.length > 0 && (
          <ul
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              width: '100%',
              background: 'white',
              border: '1px solid #ccc',
              zIndex: 10,
              margin: 0,
              padding: 0,
              listStyle: 'none',
              maxHeight: '150px',
              overflowY: 'auto',
            }}
          >
            {availableSessions.map(session => (
              <li
                key={session.sessionId}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '8px',
                  cursor: 'pointer',
                  borderBottom: '1px solid #eee',
                }}
                onMouseDown={e => {
                  // Only fill input if not clicking the delete icon
                  if ((e.target as HTMLElement).dataset.icon !== 'delete') {
                    if (inputRef.current) {
                      inputRef.current.value = session.sessionId!
                    }
                    setShowDropdown(false)
                  }
                }}
              >
                <span>{session.sessionId}</span>
                <span>{session.sourceEntityId}</span>
                <span
                  data-icon="delete"
                  title="Delete session"
                  style={{
                    marginLeft: '8px',
                    color: '#d32f2f',
                    cursor: 'pointer',
                    fontSize: '16px',
                    userSelect: 'none',
                  }}
                  onMouseDown={e => {
                    e.stopPropagation()
                    deleteSession(session.sessionId!)
                  }}
                >
                  🗑️
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
      {allowInput && (
        <Button
          variant="outlined"
          onClick={() => {
            const inputValue = inputRef.current?.value || ''
            handleStartSession(inputValue)
          }}
          sx={{ color: 'inherit', margin: '10px 0' }}
        >
          Start Grid Session
        </Button>
      )}
    </>
  )
}
