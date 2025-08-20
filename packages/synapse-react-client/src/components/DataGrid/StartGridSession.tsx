import { useSynapseContext } from '@/utils/context/SynapseContext'
import { Button, Grid, TextField } from '@mui/material'
import {
  CreateGridRequest,
  GridSession,
  TableQuery,
} from '@sage-bionetworks/synapse-client'
import noop from 'lodash-es/noop'
import {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useState,
} from 'react'
import {
  useCreateGridReplica,
  useDeleteGridSession,
  useGetGridSessionsInfinite,
} from '../../synapse-queries/useGridSession'
import { displayToast } from '../ToastMessage/ToastMessage'
import { parseQueryInput } from './DataGridUtils'
import { useCreateGridSession } from './useCreateGridSession'

export interface StartGridSessionProps {
  onSessionChange?: (session: GridSession) => void
  onReplicaChange?: (replicaId: number | null) => void
  onPresignedUrlChange?: (url: string) => void
  query?: string
}

// Based on user input, start a new session with or without a SQL query
// or join an existing session by ID
export const StartGridSession = forwardRef<
  { handleStartSession: (input: string) => void },
  StartGridSessionProps
>(
  (
    {
      onSessionChange = noop,
      onReplicaChange = noop,
      onPresignedUrlChange = noop,
      query,
    },
    ref,
  ) => {
    const [gridSql, setGridSql] = useState('')
    const [showDropdown, setShowDropdown] = useState(false)
    const [schemaId, setSchemaId] = useState('')

    const allowInput = !query

    const { synapseClient } = useSynapseContext()

    const { mutate: deleteSession } = useDeleteGridSession({
      onSuccess: () => {
        displayToast('Successfully deleted grid session', 'success')
        onSessionChange(null)
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

    const handleStartSession = useCallback(async () => {
      const input = gridSql
      const parsedInput = parseQueryInput(input)
      try {
        if (parsedInput.type === 'empty' || parsedInput.type === 'sql') {
          // Start a new session and clear replicaId and presignedUrl
          const gridRequest = {
            concreteType:
              'org.sagebionetworks.repo.model.grid.CreateGridRequest',
            initialQuery: undefined as TableQuery | undefined,
            schema$id: schemaId || undefined,
          } as CreateGridRequest

          if (parsedInput.type === 'sql') {
            gridRequest.initialQuery = {
              sql: parsedInput.input,
            } as TableQuery
            setGridSql(parsedInput.input)
            console.log('Starting grid session with table query: ', gridSql)
          } else {
            setGridSql('')
            console.log('Starting a new empty grid session.')
          }

          const gridSessionResponse = await startGridSession(gridRequest)
          console.log('Grid session started:', gridSessionResponse)
          const newSessionId = gridSessionResponse.gridSession!.sessionId!
          onSessionChange(gridSessionResponse.gridSession)

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
    }, [
      gridSql,
      schemaId,
      startGridSession,
      onSessionChange,
      createReplicaId,
      onReplicaChange,
      synapseClient.gridServicesClient,
      onPresignedUrlChange,
    ])

    useImperativeHandle(
      ref,
      () => ({
        handleStartSession,
      }),
      [handleStartSession],
    )

    if (!allowInput) {
      return null
    }

    return (
      <Grid container spacing={2} sx={{ mb: 2 }}>
        <Grid size={{ xs: 12, lg: 6 }} sx={{ position: 'relative' }}>
          <TextField
            label={'SQL Query or Session ID'}
            value={gridSql}
            onChange={e => setGridSql(e.target.value)}
            type="text"
            placeholder="(Optional) Enter a SQL query or session ID"
            style={{ width: '100%' }}
            onFocus={() => setShowDropdown(true)}
            onBlur={() => setTimeout(() => setShowDropdown(false), 150)}
            onKeyDown={e => {
              if (e.key === 'Enter') {
                void handleStartSession()
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
                  onClick={() => {
                    setGridSql(session.sessionId || '')
                    setSchemaId(session.gridJsonSchema$Id || '')
                    void handleStartSession()
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
                    onClick={e => {
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
        </Grid>
        <Grid size={{ xs: 12, lg: 6 }}>
          <TextField
            label={'Schema (optional)'}
            placeholder={'Enter a schema $id e.g. my-org.NameOfMySchema-1.0.0'}
            value={schemaId}
            fullWidth
            onChange={e => setSchemaId(e.target.value)}
          />
        </Grid>
        <Grid size={12}>
          {' '}
          <Button
            color={'primary'}
            variant="contained"
            onClick={() => {
              handleStartSession()
            }}
          >
            Start Grid Session
          </Button>
        </Grid>
      </Grid>
    )
  },
)
