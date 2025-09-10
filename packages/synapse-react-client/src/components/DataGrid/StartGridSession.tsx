import useInitializeGridConnection from '@/components/DataGrid/useInitializeGridConnection'
import { Autocomplete, Button, Grid, MenuItem, TextField } from '@mui/material'
import { GridSession } from '@sage-bionetworks/synapse-client'
import noop from 'lodash-es/noop'
import { forwardRef, useImperativeHandle, useMemo, useState } from 'react'
import {
  useDeleteGridSession,
  useGetGridSessionsInfinite,
} from '../../synapse-queries/grid/useGridSession'
import { displayToast } from '../ToastMessage/ToastMessage'

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

    const allowInput = !query

    const { mutate: handleStartSession } = useInitializeGridConnection({
      onMutate(args) {
        console.log('Starting grid session with args:', args)
      },
      onSuccess({ session, replica, presignedUrl }) {
        displayToast('Grid session started successfully', 'success')
        onSessionChange(session)
        onReplicaChange(replica.replicaId!)
        onPresignedUrlChange(presignedUrl)
      },
    })

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

    const onConfirmInput = function () {
      handleStartSession({ gridSqlOrSessionId: gridSql })
    }

    useImperativeHandle(
      ref,
      () => ({
        handleStartSession: (input: string) => {
          handleStartSession({ gridSqlOrSessionId: input })
        },
      }),
      [handleStartSession],
    )

    if (!allowInput) {
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
                placeholder="(Optional) Enter a SQL query or session ID"
              />
            )}
            options={availableSessions}
            getOptionLabel={option =>
              typeof option === 'string' ? option : option.sessionId || ''
            }
            value={gridSql}
            onInputChange={(_e, value) => {
              setGridSql(value)
            }}
            onChange={(_e, value) => {
              if (value && typeof value === 'object') {
                setGridSql(value.sessionId || '')
                void handleStartSession({
                  gridSqlOrSessionId: value.sessionId!,
                })
              } else {
                setGridSql(value || '')
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
  },
)
