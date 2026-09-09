import type { ReactNode } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material'
import { TermsOfUseExplanationContent } from './TermsOfUseExplanation'

/**
 * Mobile-only collapsible accordion displaying the "What is the Synapse Pledge?"
 * explanatory content above the pledge items, replacing the desktop right panel
 * on narrow viewports (SWC-7966).
 */
export function TermsOfUseMobileAccordion(): ReactNode {
  return (
    <Accordion
      disableGutters
      elevation={0}
      sx={theme => ({
        display: { xs: 'block', md: 'none' },
        backgroundColor: 'var(--synapse-gray-200)',
        borderRadius: '4px',
        border: '1px solid var(--synapse-border-color-gray)',
        marginBottom: theme.spacing(2.5),
        '&:before': { display: 'none' },
      })}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="terms-of-use-accordion-content"
        id="terms-of-use-accordion-header"
        sx={{
          minHeight: '44px',
          px: 2,
          '& .MuiAccordionSummary-content': { my: 1 },
        }}
      >
        <Typography variant="headline3">What is the Synapse Pledge?</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ px: 2, pt: 0, pb: 2 }}>
        <TermsOfUseExplanationContent />
      </AccordionDetails>
    </Accordion>
  )
}
