import { ReactNode, useId } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material'

type MobileInstructionsAccordionProps = {
  title: string
  children: ReactNode
}

/**
 * Mobile-only collapsible accordion replacing the desktop right panel on narrow viewports.
 * Callers are responsible for hiding the corresponding desktop panel below md.
 */
export function MobileInstructionsAccordion({
  title,
  children,
}: MobileInstructionsAccordionProps): ReactNode {
  const id = useId()

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
        aria-controls={`${id}-content`}
        id={`${id}-header`}
        sx={{
          minHeight: '44px',
          px: 2,
          '& .MuiAccordionSummary-content': { my: 1 },
        }}
      >
        <Typography variant="headline3">{title}</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ px: 2, pt: 0, pb: 2 }}>
        {children}
      </AccordionDetails>
    </Accordion>
  )
}
