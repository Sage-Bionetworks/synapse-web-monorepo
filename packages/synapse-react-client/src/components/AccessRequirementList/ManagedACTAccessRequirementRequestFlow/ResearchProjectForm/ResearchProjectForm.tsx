import React, { useEffect, useState } from 'react'
import {
  ManagedACTAccessRequirement,
  ResearchProject,
} from '@sage-bionetworks/synapse-types'
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
  const [projectLead, setProjectLead] = useState<string>('')
  const [institution, setInstitution] = useState<string>('')
  const [intendedDataUseStatement, setIntendedDataUseStatement] =
    useState<string>('')

  const {
    data: existingResearchProject,
    isLoading: isLoadingInitialData,
    error: getResearchProjectError,
  } = useGetResearchProject(String(managedACTAccessRequirement.id), {
    // Infinite staleTime ensures this won't be refetched unless explicitly invalidated by the mutation
    staleTime: Infinity,
  })

  // Populate the form with existing data if it exists
  useEffect(() => {
    if (existingResearchProject?.projectLead) {
      setProjectLead(existingResearchProject?.projectLead)
    }
    if (existingResearchProject?.institution) {
      setInstitution(existingResearchProject?.institution)
    }
    if (existingResearchProject?.intendedDataUseStatement) {
      setIntendedDataUseStatement(
        existingResearchProject?.intendedDataUseStatement,
      )
    }
  }, [existingResearchProject])

  const {
    mutate,
    isPending: updateIsPending,
    error: updateResearchProjectError,
  } = useUpdateResearchProject({
    onSuccess: data => {
      if (onSave) {
        onSave(data)
      }
    },
  })

  const isLoading = isLoadingInitialData || updateIsPending

  const error = getResearchProjectError || updateResearchProjectError

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
        {error && <Alert severity={'error'}>{error.reason}</Alert>}
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
