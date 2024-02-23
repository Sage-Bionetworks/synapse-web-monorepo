import React, { useEffect, useState } from 'react'
import {
  ManagedACTAccessRequirement,
  ResearchProject,
} from '@sage-bionetworks/synapse-types'
import { AlertProps } from '../DataAccessRequestAccessorsFilesForm/DataAccessRequestAccessorsFilesForm'
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
import IconSvg from '../../../IconSvg/IconSvg'
import {
  useGetResearchProject,
  useUpdateResearchProject,
} from '../../../../synapse-queries'
import TextField from '../../../TextField/TextField'
import ManagedACTAccessRequirementFormWikiWrapper from '../ManagedACTAccessRequirementFormWikiWrapper'

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
  const [projectLead, setProjectLead] = useState<string | undefined>(undefined)
  const [institution, setInstitution] = useState<string | undefined>(undefined)
  const [intendedDataUseStatement, setIntendedDataUseStatement] = useState<
    string | undefined
  >(undefined)
  const [alert, setAlert] = useState<AlertProps | undefined>()

  const { data: existingResearchProject, isLoading: isLoadingInitialData } =
    useGetResearchProject(String(managedACTAccessRequirement.id), {
      // Infinite staleTime ensures this won't be refetched unless explicitly invalidated by the mutation
      staleTime: Infinity,
    })

  // Populate the form with existing data if it exists
  useEffect(() => {
    if (projectLead == undefined && existingResearchProject?.projectLead) {
      setProjectLead(existingResearchProject?.projectLead)
    }
    if (institution == undefined && existingResearchProject?.institution) {
      setInstitution(existingResearchProject?.institution)
    }
    if (
      intendedDataUseStatement == undefined &&
      existingResearchProject?.intendedDataUseStatement
    ) {
      setIntendedDataUseStatement(
        existingResearchProject?.intendedDataUseStatement,
      )
    }
  }, [
    existingResearchProject?.institution,
    existingResearchProject?.intendedDataUseStatement,
    existingResearchProject?.projectLead,
    institution,
    intendedDataUseStatement,
    projectLead,
  ])

  const { mutate, isPending: updateIsPending } = useUpdateResearchProject({
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

  const isLoading = isLoadingInitialData || updateIsPending

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
        <ManagedACTAccessRequirementFormWikiWrapper
          managedACTAccessRequirementId={String(managedACTAccessRequirement.id)}
        >
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
                      <i id={'idu-visible'}>
                        this will be visible to the public
                      </i>
                    )}
                  </>
                }
                required
                multiline
                rows={9}
                disabled={isLoading}
                value={intendedDataUseStatement}
                onChange={e => setIntendedDataUseStatement(e.target.value)}
              />
            )}
          </form>
        </ManagedACTAccessRequirementFormWikiWrapper>
        {alert && <Alert severity={alert.key}>{alert.message}</Alert>}
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
          {updateIsPending ? 'Saving...' : 'Save changes'}
        </Button>
      </DialogActions>
    </>
  )
}
