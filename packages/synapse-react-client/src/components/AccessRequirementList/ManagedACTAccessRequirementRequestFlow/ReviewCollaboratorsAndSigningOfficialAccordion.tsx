import { ExpandMore } from '@mui/icons-material'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Stack,
  Typography,
} from '@mui/material'
import {
  AccessorChange,
  PrincipalInvestigator,
  SigningOfficial,
} from '@sage-bionetworks/synapse-types'
import { UserBadge } from '../../UserCard/UserBadge'
import { longFieldLabelSx } from './styles'

export type ReviewCollaboratorsAndSigningOfficialAccordionProps = {
  accessorChanges: AccessorChange[]
  principalInvestigator?: PrincipalInvestigator
  signingOfficial?: SigningOfficial
  isLoading?: boolean
}

/**
 * Collapsible summary of the DAR's collaborators, PI, and signing official.
 * Shared by ReviewDucStep and ManualUploadDucStep.
 */
export function ReviewCollaboratorsAndSigningOfficialAccordion(
  props: ReviewCollaboratorsAndSigningOfficialAccordionProps,
) {
  const {
    accessorChanges,
    principalInvestigator: pi,
    signingOfficial: so,
    isLoading = false,
  } = props

  return (
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
          Review your collaborators &amp; signing official
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
        <Typography variant={'body1'} sx={{ ...longFieldLabelSx, mb: 1 }}>
          Your Project Lead or PI will also receive access to the requested
          data.
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
        <Typography variant={'body1'} sx={{ ...longFieldLabelSx, mb: 1 }}>
          A member of your institution who is NOT part of the study team (i.e.,
          not the Project Lead, not a Data Requester or Collaborator, and not
          the Project Lead or PI).
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
  )
}
