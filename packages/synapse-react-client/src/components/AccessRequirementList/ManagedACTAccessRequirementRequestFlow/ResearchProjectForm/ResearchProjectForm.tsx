import {
  useGetResearchProject,
  useUpdateResearchProject,
} from '@/synapse-queries'
import { InfoTwoTone } from '@mui/icons-material'
import {
  Alert,
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import {
  ManagedACTAccessRequirement,
  ResearchProject,
} from '@sage-bionetworks/synapse-types'
import isEmpty from 'lodash-es/isEmpty'
import { FormEvent, useEffect, useState } from 'react'
import HelpPopover from '../../../HelpPopover'
import IconSvg from '../../../IconSvg/IconSvg'
import TextFieldWithWordLimit, {
  getWordCount,
} from '../../../TextField/TextFieldWithWordLimit'
import { AlertProps } from '../DataAccessRequestAccessorsFilesForm/DataAccessRequestAccessorsFilesForm'
import ManagedACTAccessRequirementFormWikiWrapper from '../ManagedACTAccessRequirementFormWikiWrapper'

const INTENDED_DATA_USE_MIN_WORD_COUNT = 50
const INTENDED_DATA_USE_MAX_WORD_COUNT = 750 // SWC-7526

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
  const [alert, setAlert] = useState<AlertProps | undefined>()

  const [showConfirmationScreen, setShowConfirmationScreen] = useState(false)

  const { data: existingResearchProject, isLoading: isLoadingInitialData } =
    useGetResearchProject(String(managedACTAccessRequirement.id), {
      // Infinite staleTime ensures this won't be refetched unless explicitly invalidated by the mutation
      staleTime: Infinity,
    })

  // Populate the form with existing data if it exists
  useEffect(() => {
    if (isEmpty(projectLead) && existingResearchProject?.projectLead) {
      setProjectLead(existingResearchProject?.projectLead)
    }
    if (isEmpty(institution) && existingResearchProject?.institution) {
      setInstitution(existingResearchProject?.institution)
    }
    if (
      isEmpty(intendedDataUseStatement) &&
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
    // PORTALS-3774: initialize from existingResearchProject, but do not reset institution,
    // projectLead, or intendedDataUseStatement if they have been modified
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

  const handleSubmit = (e: FormEvent<HTMLElement>) => {
    e.preventDefault()
    if (!showConfirmationScreen) {
      setShowConfirmationScreen(true)
    } else {
      mutate({
        ...existingResearchProject,
        accessRequirementId: String(managedACTAccessRequirement.id),
        institution: institution,
        projectLead: projectLead,
        intendedDataUseStatement: intendedDataUseStatement || undefined,
      })
      setShowConfirmationScreen(false)
    }
  }

  const formIsValid =
    projectLead &&
    institution &&
    (!managedACTAccessRequirement.isIDURequired ||
      (intendedDataUseStatement &&
        getWordCount(intendedDataUseStatement) >=
          INTENDED_DATA_USE_MIN_WORD_COUNT &&
        getWordCount(intendedDataUseStatement) <=
          INTENDED_DATA_USE_MAX_WORD_COUNT))

  return (
    <>
      <DialogTitle>
        <Stack
          direction="row"
          sx={{
            alignItems: 'center',
            gap: '5px',
          }}
        >
          Request Access
          <Box sx={{ flexGrow: 1 }} />
          <IconButton onClick={onHide}>
            <IconSvg icon={'close'} wrap={false} sx={{ color: 'grey.700' }} />
          </IconButton>
        </Stack>
      </DialogTitle>
      {showConfirmationScreen && (
        <ConfirmationScreenContent
          isIDURequired={managedACTAccessRequirement.isIDURequired}
        />
      )}
      {!showConfirmationScreen && (
        <DialogContent>
          <ManagedACTAccessRequirementFormWikiWrapper
            managedACTAccessRequirementId={String(
              managedACTAccessRequirement.id,
            )}
          >
            <Box
              component={'form'}
              onSubmit={handleSubmit}
              sx={{
                '& .MuiTextField-root': {
                  marginBottom: '20px',
                },
              }}
            >
              <TextField
                id={'project-lead'}
                label={
                  <Box sx={{ display: 'inline' }}>
                    <span>First and last names of your project lead or PI</span>
                    <HelpPopover
                      Icon={InfoTwoTone}
                      containerSx={{ float: 'right' }}
                      markdownText={`This field is required.\n\nProvide the name of one person who serves as the project leader or PI.`}
                    />
                  </Box>
                }
                placeholder={
                  'First and last name of individual leading the project, ex: Jane Smith'
                }
                fullWidth
                disabled={isLoading}
                type="text"
                value={projectLead}
                required
                onChange={e => setProjectLead(e.target.value)}
                slotProps={{
                  inputLabel: {
                    // allows floating the help popover all the way to the right
                    sx: { width: '100%' },
                  },
                }}
              />
              <TextField
                id={'institution'}
                label={'Your Institution'}
                placeholder={
                  'Full, unabbreviated name of the institution you are affiliated with'
                }
                fullWidth
                type="text"
                disabled={isLoading}
                value={institution}
                required
                onChange={e => setInstitution(e.target.value)}
              />

              {managedACTAccessRequirement.isIDURequired && (
                <TextFieldWithWordLimit
                  id={'data-use'}
                  minWords={INTENDED_DATA_USE_MIN_WORD_COUNT}
                  maxWords={INTENDED_DATA_USE_MAX_WORD_COUNT}
                  label={
                    <Box sx={{ display: 'inline' }}>
                      <span>Intended Data Use (IDU)</span>
                      <HelpPopover
                        Icon={InfoTwoTone}
                        containerSx={{ float: 'right' }}
                        markdownText={`This field is required.\n\nCheck the instructions for data access for information on completing the IDU statement.`}
                      />
                    </Box>
                  }
                  helperText={
                    managedACTAccessRequirement.isIDUPublic
                      ? 'This will be visible to the public'
                      : undefined
                  }
                  placeholder={
                    'Outline the objectives of your proposed research involving this data, and your study design and analysis plan.'
                  }
                  fullWidth
                  required
                  multiline
                  rows={9}
                  disabled={isLoading}
                  value={intendedDataUseStatement}
                  onChange={e => setIntendedDataUseStatement(e.target.value)}
                />
              )}
            </Box>
          </ManagedACTAccessRequirementFormWikiWrapper>
          {alert && <Alert severity={alert.key}>{alert.message}</Alert>}
        </DialogContent>
      )}
      <DialogActions>
        {showConfirmationScreen && (
          <>
            <Button
              variant={'outlined'}
              onClick={() => {
                setShowConfirmationScreen(false)
              }}
            >
              Back
            </Button>
            <Box sx={{ flexGrow: 1 }}>{/* spacer */}</Box>
          </>
        )}
        <Button variant="outlined" disabled={isLoading} onClick={onHide}>
          Cancel
        </Button>
        <Button
          variant="contained"
          type="submit"
          disabled={isLoading || !formIsValid}
          onClick={handleSubmit}
        >
          {updateIsPending ? 'Saving...' : 'Save and Continue'}
        </Button>
      </DialogActions>
    </>
  )
}

function ConfirmationScreenContent(props: { isIDURequired: boolean }) {
  const { isIDURequired } = props
  return (
    <DialogContent>
      <Typography
        variant="body1"
        gutterBottom
        sx={{
          fontWeight: 700,
        }}
      >
        Double-check your submission before continuing!
      </Typography>
      <Typography variant="body1" gutterBottom>
        Here are some common reasons a request is rejected:
      </Typography>
      <Box component="ul">
        <Typography component={'li'} variant="body1" gutterBottom>
          Is your <i>Project Lead</i> a full name (first and last)?
        </Typography>
        <Typography component={'li'} variant="body1" gutterBottom>
          Is the <i>Institution</i> name you provided unabbreviated and
          verifiable? You must give the full name of your institution, so we can
          look it up.
        </Typography>
        {isIDURequired && (
          <Typography component={'li'} variant="body1" gutterBottom>
            Did you provide clear <i>study objectives</i> and your{' '}
            <i>study design</i> and <i>analysis plan</i> in the IDU section?
          </Typography>
        )}
      </Box>
      <Typography variant="body1" gutterBottom>
        Please take a minute to make sure your submission is correct. If your
        submission is rejected, you’ll have to resubmit after a few days!
      </Typography>
    </DialogContent>
  )
}
