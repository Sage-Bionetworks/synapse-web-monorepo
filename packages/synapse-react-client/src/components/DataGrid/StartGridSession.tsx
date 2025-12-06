import GridSessionSelectionField from '@/components/DataGrid/components/GridSessionSelectionField'
import useInitializeGridConnection, {
  CreateOrGetGridSessionInput,
} from '@/components/DataGrid/useInitializeGridConnection'
import { parseQueryInput } from '@/components/DataGrid/utils/DataGridUtils'
import { Button, Grid } from '@mui/material'
import {
  CreateGridRequest,
  GridSession,
} from '@sage-bionetworks/synapse-client'
import noop from 'lodash-es/noop'
import { forwardRef, useImperativeHandle, useState } from 'react'
import { displayToast } from '@/components/ToastMessage/ToastMessage'

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
      console.debug('Starting grid session with args:', args)
    },
    onSuccess({ session, replica }) {
      onSessionChange(session)
      onReplicaChange(replica.replicaId!)
    },
    onError(error) {
      const message =
        error &&
        typeof error === 'object' &&
        'message' in error &&
        typeof error.message === 'string'
          ? error.message
          : 'An error occurred'
      displayToast(message, 'danger')
    },
  })

  const onConfirmInput = function (value: string) {
    initializeGridConnection(transformTextToCreateOrGetGridRequest(value))
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
        <GridSessionSelectionField
          inputValue={inputValue}
          onInputValueChange={setInputValue}
          onConfirmInput={onConfirmInput}
          onSessionChange={onSessionChange}
          onReplicaChange={onReplicaChange}
        />
      </Grid>
      <Grid container size={12} justifyContent="flex-end">
        <Button
          color={'primary'}
          variant="contained"
          onClick={() => {
            onConfirmInput(inputValue)
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
      'Unknown input type, please provide a valid SQL query, Synapse ID, or session ID.',
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
