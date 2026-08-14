import { useGetDataAccessRequestForUpdate } from '@/synapse-queries'
import { ExpandMore } from '@mui/icons-material'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
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
import { UserBadge } from '../../../UserCard/UserBadge'
import ManagedACTAccessRequirementFormWikiWrapper from '../ManagedACTAccessRequirementFormWikiWrapper'
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
          <IconButton onClick={onHide}>
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

            <Accordion
              defaultExpanded={false}
              disableGutters
              sx={{
                boxShadow: 'none',
                border: '1px solid',
                borderColor: 'grey.300',
                '&:before': { display: 'none' },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="review-collaborators-so-content"
                id="review-collaborators-so-header"
              >
                <Typography variant={'headline3'}>
                  Review your collaborators & signing official
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  variant={'body1'}
                  sx={{ ...longFieldLabelSx, fontWeight: 700, mb: 1 }}
                >
                  Your collaborators:
                </Typography>
                <Stack sx={{ mb: 3, gap: 1 }}>
                  {accessorChanges.length === 0 && !isLoading && (
                    <Typography variant={'body1'} sx={longFieldLabelSx}>
                      No collaborators added.
                    </Typography>
                  )}
                  {accessorChanges.map(ac => (
                    <UserBadge
                      key={ac.userId}
                      userId={ac.userId}
                      showAccountLevelIcon={true}
                      disableLink={true}
                      showFullName={true}
                    />
                  ))}
                </Stack>

                <Typography
                  variant={'body1'}
                  sx={{ ...longFieldLabelSx, fontWeight: 700, mb: 1 }}
                >
                  Your Project Lead or PI:
                </Typography>
                <Typography
                  variant={'body1'}
                  sx={{ ...longFieldLabelSx, mb: 1 }}
                >
                  Your Project Lead or PI will also receive access to the
                  requested data.
                </Typography>
                <Box sx={{ mb: 3 }}>
                  {pi?.userId && (
                    <UserBadge
                      userId={pi.userId}
                      showAccountLevelIcon={true}
                      disableLink={true}
                      showFullName={true}
                    />
                  )}
                  {pi?.name && (
                    <Typography variant={'body1'} sx={longFieldLabelSx}>
                      {pi.name}
                    </Typography>
                  )}
                  {pi?.institutionalEmail && (
                    <Typography variant={'body1'} sx={longFieldLabelSx}>
                      {pi.institutionalEmail}
                    </Typography>
                  )}
                </Box>

                <Typography
                  variant={'body1'}
                  sx={{ ...longFieldLabelSx, fontWeight: 700, mb: 1 }}
                >
                  Your signing official:
                </Typography>
                <Typography
                  variant={'body1'}
                  sx={{ ...longFieldLabelSx, mb: 1 }}
                >
                  A member of your institution who is NOT part of the study team
                  (i.e., not the Project Lead, not a Data Requester or
                  Collaborator, and not the Project Lead or PI).
                </Typography>
                <Box>
                  {so?.name && (
                    <Typography variant={'body1'} sx={longFieldLabelSx}>
                      {so.name}
                    </Typography>
                  )}
                  {so?.institutionalEmail && (
                    <Typography variant={'body1'} sx={longFieldLabelSx}>
                      {so.institutionalEmail}
                    </Typography>
                  )}
                </Box>
              </AccordionDetails>
            </Accordion>
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
