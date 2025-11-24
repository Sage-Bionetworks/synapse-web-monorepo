import GridSessionSelectionField from '@/components/DataGrid/components/GridSessionSelectionField'
import {
  GRID_PAGE_AGENT_REGISTRATION_ID_QUERY_PARAM,
  GRID_PAGE_SESSION_ID_QUERY_PARAM,
  GRID_PAGE_TASK_ID_QUERY_PARAM,
} from '@/utils/SynapseConstants'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import { useState } from 'react'
import { useSearchParams } from 'react-router'

/**
 * A form to update the current search params for testing purposes
 */
export function UpdateGridPageSearchParamsForm() {
  const [searchParams, setSearchParams] = useSearchParams()

  const [sessionIdInputValue, setSessionIdInputValue] = useState(
    searchParams.get(GRID_PAGE_SESSION_ID_QUERY_PARAM) || '',
  )
  const [taskIdInputValue, setTaskIdInputValue] = useState(
    searchParams.get(GRID_PAGE_TASK_ID_QUERY_PARAM) || '',
  )
  const [agentRegistrationIdInputValue, setAgentRegistrationIdInputValue] =
    useState(
      searchParams.get(GRID_PAGE_AGENT_REGISTRATION_ID_QUERY_PARAM) || '',
    )

  return (
    <Grid container spacing={2} sx={{ borderBottomColor: 'grey.300' }}>
      <Grid size={{ xs: 4 }}>
        <GridSessionSelectionField
          inputValue={sessionIdInputValue}
          onInputValueChange={value => setSessionIdInputValue(value)}
        />
      </Grid>
      <Grid size={{ xs: 4 }}>
        <TextField
          fullWidth
          label={'Task ID (Optional)'}
          value={taskIdInputValue}
          onChange={e => setTaskIdInputValue(e.target.value)}
        />
      </Grid>
      <Grid size={{ xs: 4 }}>
        <TextField
          fullWidth
          label={'Agent Registration ID (Optional)'}
          value={agentRegistrationIdInputValue}
          onChange={e => setAgentRegistrationIdInputValue(e.target.value)}
        />
      </Grid>
      <Grid container size={12} justifyContent="flex-end">
        <Button
          variant={'outlined'}
          onClick={() => {
            setSearchParams(prev => {
              prev.set(GRID_PAGE_SESSION_ID_QUERY_PARAM, sessionIdInputValue)
              if (taskIdInputValue) {
                prev.set(GRID_PAGE_TASK_ID_QUERY_PARAM, taskIdInputValue)
              } else {
                prev.delete(GRID_PAGE_TASK_ID_QUERY_PARAM)
              }
              if (agentRegistrationIdInputValue) {
                prev.set(
                  GRID_PAGE_AGENT_REGISTRATION_ID_QUERY_PARAM,
                  agentRegistrationIdInputValue,
                )
              } else {
                prev.delete(GRID_PAGE_AGENT_REGISTRATION_ID_QUERY_PARAM)
              }
              return prev
            })
          }}
        >
          Update Search Params (for testing)
        </Button>
      </Grid>
    </Grid>
  )
}
