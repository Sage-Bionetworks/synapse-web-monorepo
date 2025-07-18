import { useState, useRef, useEffect } from 'react'
import { useCreateGridSession } from './useCreateGridSession'
import { parseQueryInput } from './DataGridUtils'
import {
  CreateGridRequest,
  PostRepoV1GridSessionSessionIdReplicaRequest,
  GridSession,
} from '@sage-bionetworks/synapse-client'
import { SynapseClient, TableQuery } from '@sage-bionetworks/synapse-client'
import { useSynapseContext } from '@/utils/context/SynapseContext'

export interface StartGridSessionProps {
  onSessionChange?: (sessionId: string) => void
  onReplicaChange?: (replicaId: number | null) => void
  onPresignedUrlChange?: (url: string) => void
}

// Based on user input, start a new session with or without a SQL query
// or join an existing session by ID
export const StartGridSession = ({
  onSessionChange,
  onReplicaChange,
  onPresignedUrlChange,
}: StartGridSessionProps) => {
  const [gridSql, setGridSql] = useState('')
  const [sessionId, setSessionId] = useState('')
  const [replicaId, setReplicaId] = useState<number | null>(null)
  const [presignedUrl, setPresignedUrl] = useState('')
  const [showDropdown, setShowDropdown] = useState(false)
  const [availableSessions, setAvailableSessions] = useState<GridSession[]>([])

  const inputRef = useRef<HTMLInputElement>(null)

  const synapseClient = useSynapseContext().synapseClient

  const deleteSession = async (sessionId: string) => {
    try {
      await synapseClient.gridServicesClient.deleteRepoV1GridSessionSessionId({
        sessionId,
      })
      console.log(`Session ${sessionId} deleted successfully.`)
      setSessionId('')
      onSessionChange?.('')
      setReplicaId(null)
      onReplicaChange?.(null)
      setPresignedUrl('')
      onPresignedUrlChange?.('')
    } catch (error) {
      console.error(`Failed to delete session ${sessionId}:`, error)
    }
  }

  const getSessionList = async (
    nextPageToken?: string,
    accumulated: GridSession[] = [],
  ) => {
    // Fetch all available sessions, handling pagination recursively
    const response =
      await synapseClient.gridServicesClient.postRepoV1GridSessionList({
        ...(nextPageToken
          ? { listGridSessionsRequest: { nextPageToken: nextPageToken } }
          : { listGridSessionsRequest: {} }),
      })
    const sessionIds =
      response.page?.map(session => ({
        sessionId: session.sessionId,
        sourceEntityId: session.sourceEntityId,
      })) || []
    const allSessions = [...accumulated, ...sessionIds]
    if (response.nextPageToken) {
      return getSessionList(response.nextPageToken, allSessions)
    }
    return allSessions
    // try {
    //   const sessions = await synapseClient.gridServicesClient.postRepoV1GridSessionList()
    //   return sessions.gridSessions.map(session => session.sessionId)
    // } catch (error) {
    //   console.error('Failed to fetch session list:', error)
    //   return []
    // }
  }

  useEffect(() => {
    // Fetch available sessions on component mount
    const fetchSessions = async () => {
      const sessions = await getSessionList()
      setAvailableSessions(sessions)
      console.log('Available sessions:', sessions)
    }
    fetchSessions()
    // Simulate fetching available sessions
    //setAvailableSessions(['session-123', 'session-456', 'session-789'])
  }, [])

  const startGridSession = useCreateGridSession()

  const createReplicaId = async (
    synapseClient: SynapseClient,
    sessionId: string,
  ) => {
    try {
      console.log('Creating replica for session ID:', sessionId)
      const replica =
        await synapseClient.gridServicesClient.postRepoV1GridSessionSessionIdReplica(
          {
            sessionId,
            createReplicaRequest: {
              gridSessionId: sessionId,
            },
          } as PostRepoV1GridSessionSessionIdReplicaRequest,
        )
      return replica
    } catch (error) {
      console.error('Failed to create replica:', error)
      return
    }
  }
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

        const gridSessionResponse = await startGridSession.mutateAsync(
          gridRequest,
        )
        console.log('Grid session started:', gridSessionResponse)
        const newSessionId = gridSessionResponse.gridSession?.sessionId || ''
        setSessionId(newSessionId)
        onSessionChange?.(newSessionId)

        const replica = await createReplicaId(synapseClient, newSessionId)
        console.log('Replica created:', replica)
        const newReplicaId = replica?.replica?.replicaId || null
        setReplicaId(newReplicaId)
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
        setPresignedUrl(getPresignedUrl.presignedUrl || '')
        onPresignedUrlChange?.(getPresignedUrl.presignedUrl || '')
      } else if (parsedInput.type === 'sessionId') {
        console.log(`Joining existing session ID: ${parsedInput.input}`)
        setSessionId(parsedInput.input)
        onSessionChange?.(parsedInput.input)

        const replica = await createReplicaId(synapseClient, parsedInput.input)
        console.log('Replica created:', replica)
        const newReplicaId = replica?.replica?.replicaId || null
        setReplicaId(newReplicaId)
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
        setPresignedUrl(getPresignedUrl.presignedUrl || '')
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

  return (
    <>
      <div style={{ position: 'relative', width: '300px' }}>
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
                    // Optionally remove from dropdown immediately:
                    setAvailableSessions(sessions =>
                      sessions.filter(s => s !== session),
                    )
                  }}
                >
                  🗑️
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <button
        onClick={() => {
          const inputValue = inputRef.current?.value || ''
          handleStartSession(inputValue)
        }}
        style={{ backgroundColor: '#4CAF50', color: 'white' }}
      >
        Start Grid Session
      </button>
    </>
  )
}
