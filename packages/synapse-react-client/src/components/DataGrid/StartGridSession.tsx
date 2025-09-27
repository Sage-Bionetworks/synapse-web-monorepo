import useInitializeGridConnection, {
  CreateOrGetGridSessionInput,
} from '@/components/DataGrid/useInitializeGridConnection'
import { parseQueryInput } from '@/components/DataGrid/utils/DataGridUtils'
import { Autocomplete, Button, Grid, MenuItem, TextField } from '@mui/material'
import {
  CreateGridRequest,
  GridSession,
} from '@sage-bionetworks/synapse-client'
import noop from 'lodash-es/noop'
import { forwardRef, useImperativeHandle, useMemo, useState } from 'react'
import {
  useDeleteGridSession,
  useGetGridSessionsInfinite,
} from '../../synapse-queries/grid/useGridSession'
import { displayToast } from '../ToastMessage/ToastMessage'

export interface StartGridSessionProps {
  onSessionChange?: (session: GridSession | null) => void
  onReplicaChange?: (replicaId: number | null) => void
  show?: boolean
}

export type StartGridSessionHandle = {
  handleStartSession: (request: CreateGridRequest) => void
  handleLoadSession: (sessionId: string) => void
}

// Based on user input, start a new session with or without a SQL query
// or join an existing session by ID
export const StartGridSession = forwardRef<
  StartGridSessionHandle,
  StartGridSessionProps
>((props, ref) => {
  const { show = false, onSessionChange = noop, onReplicaChange = noop } = props
  const [inputValue, setInputValue] = useState('')

  const { mutate: initializeGridConnection } = useInitializeGridConnection({
    onMutate(args) {
      console.log('Starting grid session with args:', args)
    },
    onSuccess({ session, replica }) {
      displayToast('Grid session started successfully', 'success')
      onSessionChange(session)
      onReplicaChange(replica.replicaId!)
    },
  })

  const { mutate: deleteSession } = useDeleteGridSession({
    onSuccess: () => {
      displayToast('Successfully deleted grid session', 'success')
      onSessionChange(null)
      onReplicaChange(null)
    },
    onError: error => {
      displayToast(error.reason, 'danger')
    },
  })

  const { data } = useGetGridSessionsInfinite({})
  const availableSessions = useMemo(
    () => data?.pages.flatMap(page => page.page || []) || [],
    [data],
  )

  const onConfirmInput = function () {
    initializeGridConnection(transformTextToCreateOrGetGridRequest(inputValue))
  }

  useImperativeHandle(
    ref,
    () => ({
      handleStartSession: (request: CreateGridRequest) => {
        initializeGridConnection({ createGridRequest: request })
      },
      handleLoadSession: (sessionId: string) => {
        initializeGridConnection({ sessionId })
      },
    }),
    [initializeGridConnection],
  )

  if (!show) {
    return null
  }

  return (
    <Grid container spacing={2} sx={{ mb: 2 }}>
      <Grid size={{ xs: 12 }} sx={{ position: 'relative' }}>
        <Autocomplete
          freeSolo
          fullWidth
          renderInput={params => (
            <TextField
              {...params}
              label={'SQL Query or Session ID'}
              placeholder="Enter a SQL query, RecordSet ID, or session ID"
            />
          )}
          options={availableSessions}
          getOptionLabel={option =>
            typeof option === 'string' ? option : option.sessionId || ''
          }
          value={inputValue}
          onInputChange={(_e, value) => {
            setInputValue(value)
          }}
          onChange={(_e, value) => {
            if (value && typeof value === 'object') {
              setInputValue(value.sessionId || '')
              void initializeGridConnection({
                sessionId: value.sessionId!,
              })
            } else {
              setInputValue(value || '')
            }
          }}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              onConfirmInput()
            }
          }}
          renderOption={(props, session) => (
            <MenuItem
              {...props}
              key={session.sessionId}
              style={{
                display: 'block',
                padding: '8px',
                cursor: 'pointer',
                borderBottom: '1px solid #eee',
              }}
            >
              <Grid
                container
                sx={{
                  justifyContent: 'space-between',
                  '& > *': {
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                  },
                }}
              >
                <Grid size={{ xs: 6, md: 2 }}>{session.sessionId}</Grid>
                <Grid size={{ xs: 5, md: 2 }}>{session.sourceEntityId}</Grid>
                <Grid size={{ xs: 0, md: 6 }}>
                  {session.gridJsonSchema$Id ?? 'No schema'}
                </Grid>
                <Grid size={{ xs: 1 }}>
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
                </Grid>
              </Grid>
            </MenuItem>
          )}
        />
      </Grid>
      <Grid container size={12} justifyContent="flex-end">
        <Button
          color={'primary'}
          variant="contained"
          onClick={() => {
            onConfirmInput()
          }}
        >
          Start Grid Session
        </Button>
      </Grid>
    </Grid>
  )
})

function transformTextToCreateOrGetGridRequest(
  gridSqlOrSessionId: string,
): CreateOrGetGridSessionInput {
  const parsedInput = parseQueryInput(gridSqlOrSessionId)
  if ('unknown' == parsedInput.type) {
    throw new Error(
      'Unknown input type, please provide a valid SQL query or session ID.',
    )
  }

  switch (parsedInput.type) {
    case 'empty':
      throw new Error('Input cannot be empty.')
    case 'sql':
      return {
        createGridRequest: {
          initialQuery: {
            sql: parsedInput.input,
          },
          concreteType: 'org.sagebionetworks.repo.model.grid.CreateGridRequest',
        },
      }
    case 'sessionId':
      return {
        sessionId: parsedInput.input,
      }
    case 'recordSetId':
      return {
        createGridRequest: {
          recordSetId: parsedInput.input,
          concreteType: 'org.sagebionetworks.repo.model.grid.CreateGridRequest',
        },
      }
  }
}
