import CloseIcon from '@mui/icons-material/Close'
import {
  Box,
  Button,
  IconButton,
  Paper,
  Stack,
  Typography,
} from '@mui/material'
import { TooltipRenderProps } from 'react-joyride'

export const TOUR_TOOLTIP_MAX_WIDTH_PX = 380

/**
 * MUI-themed tooltip rendered by react-joyride for each tour step. Joyride
 * supplies the button props (click handlers plus ARIA attributes) — spreading
 * them onto the MUI buttons keeps the tour's keyboard and screen-reader
 * behavior intact.
 */
export default function GuidedTourTooltip(props: TooltipRenderProps) {
  const {
    backProps,
    closeProps,
    index,
    isLastStep,
    primaryProps,
    size,
    skipProps,
    step,
    tooltipProps,
  } = props

  return (
    <Paper
      {...tooltipProps}
      elevation={8}
      sx={{ maxWidth: TOUR_TOOLTIP_MAX_WIDTH_PX, p: 3, position: 'relative' }}
    >
      <IconButton
        {...closeProps}
        size="small"
        sx={{ position: 'absolute', top: 8, right: 8 }}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
      {step.title && (
        <Typography variant="headline3" component="div" sx={{ mb: 1, pr: 3 }}>
          {step.title}
        </Typography>
      )}
      <Typography variant="smallText1" component="div">
        {step.content}
      </Typography>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ mt: 3 }}
      >
        <Typography variant="smallText2" component="div" color="text.secondary">
          Step {index + 1} of {size}
        </Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          {!isLastStep && (
            <Button {...skipProps} variant="text" size="small">
              Skip tour
            </Button>
          )}
          {index > 0 && (
            <Button {...backProps} variant="outlined" size="small">
              Back
            </Button>
          )}
          <Button {...primaryProps} variant="contained" size="small">
            {isLastStep ? 'Finish' : 'Next'}
          </Button>
        </Box>
      </Stack>
    </Paper>
  )
}
