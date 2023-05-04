import * as React from 'react'
import { useState } from 'react'
import { ManagedACTAccessRequirement } from '../../../utils/synapseTypes'
import { AlertProps } from './DataAccessRequestAccessorsFilesForm'
import {
  Alert,
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  Typography,
} from '@mui/material'
import IconSvg from '../../IconSvg'
import {
  useGetResearchProject,
  useUpdateResearchProject,
} from '../../../utils/hooks/SynapseAPI'
import TextField from '../../TextField'
import { ResearchProject } from '../../../utils/synapseTypes/ResearchProject'

export type ResearchProjectFormProps = {
  /* The access requirement to which the research project refers */
  managedACTAccessRequirement: ManagedACTAccessRequirement
  onSave?: (researchProject: ResearchProject) => void
  onHide?: () => void
}

/**
 * Step 1 of the Data Access Request/Renewal flow prompts the user to provide information about their ResearchProject.
 */
export default function ResearchProjectForm(props: ResearchProjectFormProps) {
  const { onSave, managedACTAccessRequirement, onHide } = props
  const [projectLead, setProjectLead] = useState<string>('')
  const [institution, setInstitution] = useState<string>('')
  const [intendedDataUseStatement, setIntendedDataUseStatement] = useState<
    string | undefined
  >(managedACTAccessRequirement.isIDURequired ? '' : undefined)
  const [alert, setAlert] = useState<AlertProps | undefined>()

  const { data: existingResearchProject, isLoading: isLoadingInitialData } =
    useGetResearchProject(String(managedACTAccessRequirement.id), {
      // Infinite staleTime ensures this won't be refetched unless explicitly invalidated by the mutation
      staleTime: Infinity,
      onSuccess: data => {
        if (data?.projectLead) {
          setProjectLead(data?.projectLead)
        }
        if (data?.institution) {
          setInstitution(data?.institution)
        }
        if (data?.intendedDataUseStatement) {
          setIntendedDataUseStatement(data?.intendedDataUseStatement)
        }
      },
      onError: e => {
        console.log(
          'RequestDataAccessStep1: Error getting research project data: ',
          e,
        )
      },
    })

  const { mutate, isLoading: isLoadingUpdate } = useUpdateResearchProject({
    onSuccess: data => {
      if (onSave) {
        onSave(data)
      }
    },
    onError: e => {
      console.log(
        'RequestDataAccessStep1: Error updating research project data: ',
        e,
      )
      setAlert({
        key: 'error',
        message: getErrorMessage(e.reason),
      })
    },
  })

  const isLoading = isLoadingInitialData || isLoadingUpdate

  const getErrorMessage = (reason: string = '') => {
    return (
      <>
        <strong>Unable to update research project data.</strong>
        <br />
        {reason}
      </>
    )
  }

  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault()
    mutate({
      ...existingResearchProject,
      accessRequirementId: String(managedACTAccessRequirement.id),
      institution: institution,
      projectLead: projectLead,
      intendedDataUseStatement: intendedDataUseStatement,
    })
  }

  return (
    <>
      <DialogTitle>
        <Stack direction="row" alignItems={'center'} gap={'5px'}>
          Request Access
          <Box sx={{ flexGrow: 1 }} />
          <IconButton onClick={onHide}>
            <IconSvg icon={'close'} wrap={false} sx={{ color: 'grey.700' }} />
          </IconButton>
        </Stack>
      </DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <Typography variant={'body1'}>
            Please tell us about your project.
          </Typography>
          <TextField
            id={'project-lead'}
            label={'Project Lead'}
            disabled={isLoading}
            type="text"
            value={projectLead}
            required
            onChange={e => setProjectLead(e.target.value)}
          />
          <TextField
            id={'institution'}
            label={'Institution'}
            type="text"
            disabled={isLoading}
            value={institution}
            required
            onChange={e => setInstitution(e.target.value)}
          />

          {managedACTAccessRequirement.isIDURequired && (
            <TextField
              id={'data-use'}
              label={
                <>
                  Intended Data Use Statement -
                  {managedACTAccessRequirement.isIDUPublic && (
                    <i id={'idu-visible'}>this will be visible to the public</i>
                  )}
                </>
              }
              required
              multiline
              rows={10}
              disabled={isLoading}
              value={intendedDataUseStatement}
              onChange={e => setIntendedDataUseStatement(e.target.value)}
            />
          )}
          {
            /* Alert message */
            alert && <Alert severity={alert.key}>{alert.message}</Alert>
          }
        </form>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" disabled={isLoading} onClick={onHide}>
          Cancel
        </Button>
        <Button
          variant="contained"
          type="submit"
          disabled={isLoading}
          onClick={handleSubmit}
        >
          {isLoadingUpdate ? 'Saving...' : 'Save changes'}
        </Button>
      </DialogActions>
    </>
  )
}
