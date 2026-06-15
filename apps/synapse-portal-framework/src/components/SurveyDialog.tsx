import { useCookiePreferences } from 'synapse-react-client/utils/hooks/useCookiePreferences'
import React from 'react'
import { useEffect, useState, ComponentType, SVGProps } from 'react'
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  IconButton,
  Typography,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

export type SurveyDialogProps = {
  localStorageKey: string
  Svg: ComponentType<SVGProps<SVGSVGElement>>
  title: string
  description: React.ReactNode
  surveyURL: string
  surveyButtonText?: string
}

const SurveyDialog = (props: SurveyDialogProps): React.ReactNode => {
  const {
    localStorageKey,
    Svg,
    title,
    description,
    surveyURL,
    surveyButtonText = 'Take Survey',
  } = props
  const [cookiePreferences] = useCookiePreferences()
  const [showDialog, setShowDialog] = useState(false)

  useEffect(() => {
    setShowDialog(localStorage.getItem(localStorageKey) === null)
  }, [localStorageKey])

  const handleClose = () => {
    if (cookiePreferences.functionalAllowed) {
      localStorage.setItem(localStorageKey, 'true')
    }
    setShowDialog(false)
  }

  return (
    <Dialog open={showDialog} onClose={handleClose} maxWidth="md" fullWidth>
      <IconButton
        onClick={handleClose}
        size="small"
        sx={{ position: 'absolute', top: 8, right: 8 }}
        aria-label="Close survey dialog"
      >
        <CloseIcon fontSize="small" />
      </IconButton>
      <DialogContent
        sx={{ pt: 4, pb: 1, borderTop: 'none', borderBottom: 'none' }}
      >
        <Box sx={{ mx: '140px', mb: 3 }}>
          <Svg width="100%" height="auto" style={{ display: 'block' }} />
        </Box>
        <Typography variant="headline3" sx={{ display: 'block', mb: 2 }}>
          {title}
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          {description}
        </Typography>
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button
          variant="contained"
          href={surveyURL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClose}
        >
          {surveyButtonText}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default SurveyDialog
