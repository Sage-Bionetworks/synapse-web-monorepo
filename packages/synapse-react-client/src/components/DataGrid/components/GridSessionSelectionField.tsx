import { displayToast } from '@/components/ToastMessage/ToastMessage'
import {
  useDeleteGridSession,
  useGetGridSessionsInfinite,
} from '@/synapse-queries/grid/useGridSession'
import { Autocomplete, Grid, MenuItem, TextField } from '@mui/material'
import { GridSession } from '@sage-bionetworks/synapse-client'
import noop from 'lodash-es/noop'
import { useMemo } from 'react'

type GridSessionSelectionFieldProps = {
  inputValue: string
  onInputValueChange: (value: string) => void
  onConfirmInput?: (value: string) => void
  onSessionChange?: (session: GridSession | null) => void
  onReplicaChange?: (replicaId: number | null) => void
}

/**
 * Utility form field to pick the grid session from existing sessions. Currently, for testing/demo purposes only.
 */
export default function GridSessionSelectionField(
  props: GridSessionSelectionFieldProps,
) {
  const {
    inputValue,
    onInputValueChange,
    onConfirmInput = noop,
    onSessionChange = noop,
    onReplicaChange = noop,
  } = props

  const { data } = useGetGridSessionsInfinite({})

  const { mutate: deleteSession } = useDeleteGridSession({
    onSuccess: (_data, sessionId) => {
      displayToast(`Successfully deleted grid session ${sessionId}`, 'success')
      onSessionChange(null)
      onReplicaChange(null)
    },
    onError: error => {
      displayToast(error.reason, 'danger')
    },
  })
  const availableSessions = useMemo(
    () => data?.pages.flatMap(page => page.page || []) || [],
    [data],
  )

  return (
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
        onInputValueChange(value)
      }}
      onChange={(_e, value) => {
        if (value && typeof value === 'object') {
          onInputValueChange(value.sessionId || '')
          onConfirmInput(value.sessionId || '')
        } else {
          onInputValueChange(value || '')
        }
      }}
      onKeyDown={e => {
        if (e.key === 'Enter') {
          onConfirmInput(inputValue)
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
  )
}
