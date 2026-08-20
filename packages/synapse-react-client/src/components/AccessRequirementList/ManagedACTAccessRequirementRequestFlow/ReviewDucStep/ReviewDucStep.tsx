import { useGetDataAccessRequestForUpdate } from '@/synapse-queries'
import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  Typography,
} from '@mui/material'
import { ManagedACTAccessRequirement } from '@sage-bionetworks/synapse-types'
import IconSvg from '../../../IconSvg/IconSvg'
import ManagedACTAccessRequirementFormWikiWrapper from '../ManagedACTAccessRequirementFormWikiWrapper'
import { ReviewCollaboratorsAndSigningOfficialAccordion } from '../ReviewCollaboratorsAndSigningOfficialAccordion'
import { longFieldLabelSx } from '../styles'

export type ReviewDucStepProps = {
  managedACTAccessRequirement: ManagedACTAccessRequirement
  onHide: () => void
  onBackClicked: () => void
  /**
   * Called when the user clicks "Create a DUC". The parent advances to the eDUC preview step
   * (PORTALS-4377), where the generated document is displayed for review before signing.
   */
  onCreateDuc: () => void
}

/**
 * Wizard step shown after accessors/files (PORTALS-4375) and before the eDUC preview (PORTALS-4377).
 * Lets the user confirm their collaborators, PI, and Signing Official before generating the DUC.
 */
export default function ReviewDucStep(props: ReviewDucStepProps) {
  const { managedACTAccessRequirement, onHide, onBackClicked, onCreateDuc } =
    props

  const { data: dataAccessRequest, isLoading } =
    useGetDataAccessRequestForUpdate(String(managedACTAccessRequirement.id), {
      staleTime: Infinity,
      throwOnError: true,
    })

  const accessorChanges = dataAccessRequest?.accessorChanges ?? []
  const pi = dataAccessRequest?.principalInvestigator
  const so = dataAccessRequest?.signingOfficial

  return (
    <>
      <DialogTitle>
        <Stack direction="row" sx={{ alignItems: 'center', gap: '5px' }}>
          Request Access
          <Box sx={{ flexGrow: 1 }} />
          <IconButton aria-label={'Close'} onClick={onHide}>
            <IconSvg icon={'close'} wrap={false} sx={{ color: 'grey.700' }} />
          </IconButton>
        </Stack>
      </DialogTitle>
      <DialogContent>
        <ManagedACTAccessRequirementFormWikiWrapper
          managedACTAccessRequirementId={String(managedACTAccessRequirement.id)}
        >
          <Box>
            <Typography variant={'headline3'} sx={{ mb: 2 }}>
              Sign a Data Use Certificate (DUC)
            </Typography>
            <Typography variant={'body1'} sx={{ ...longFieldLabelSx, mb: 2 }}>
              The DUC may be signed electronically.
            </Typography>
            <Typography variant={'body1'} sx={{ ...longFieldLabelSx, mb: 2 }}>
              Please verify the information of each data requester listed in the
              previous step. Ensure all email addresses are accurate. You can
              click the BACK button, below, to modify your list of collaborators
              and Signing Official if necessary.
            </Typography>
            <Typography variant={'body1'} sx={{ ...longFieldLabelSx, mb: 2 }}>
              If any information is incorrect, the request will be rejected.
            </Typography>
            <Typography variant={'body1'} sx={{ ...longFieldLabelSx, mb: 3 }}>
              Click <strong>Create a DUC</strong> to generate a document and
              review it before sending it to your collaborators, PI, and Signing
              Official.
            </Typography>

            <ReviewCollaboratorsAndSigningOfficialAccordion
              accessorChanges={accessorChanges}
              principalInvestigator={pi}
              signingOfficial={so}
              isLoading={isLoading}
            />
          </Box>
        </ManagedACTAccessRequirementFormWikiWrapper>
      </DialogContent>
      <DialogActions>
        <Button variant={'outlined'} onClick={onBackClicked}>
          Back
        </Button>
        <Box sx={{ flexGrow: 1 }} />
        <Button variant={'outlined'} onClick={onHide}>
          Cancel
        </Button>
        <Button
          variant={'contained'}
          disabled={isLoading}
          onClick={onCreateDuc}
        >
          Create a DUC
        </Button>
      </DialogActions>
    </>
  )
}
