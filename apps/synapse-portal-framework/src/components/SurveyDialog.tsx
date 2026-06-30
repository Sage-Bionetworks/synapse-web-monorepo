import { useCookiePreferences } from 'synapse-react-client/utils/hooks/useCookiePreferences'
import { getCookieDomain } from 'synapse-react-client/utils/AppUtils/index'
import Cookies from 'js-cookie'
import React from 'react'
import { useEffect, useState, ComponentType, SVGProps } from 'react'
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  IconButton,
  Typography,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

export type SurveyDialogProps = {
  cookieKey: string
  Svg: ComponentType<SVGProps<SVGSVGElement>>
  title: string
  description: React.ReactNode
  surveyURL: string
  surveyButtonText?: string
}

const MAX_EXPIRATION_DAYS = 400
const ASK_ME_LATER_EXPIRATION_DAYS = 1

const SurveyDialog = (props: SurveyDialogProps): React.ReactNode => {
  const {
    cookieKey,
    Svg,
    title,
    description,
    surveyURL,
    surveyButtonText = 'Start Survey',
  } = props
  const [cookiePreferences] = useCookiePreferences()
  const [showDialog, setShowDialog] = useState(false)

  useEffect(() => {
    setShowDialog(Cookies.get(cookieKey) === undefined)
  }, [cookieKey])

  const dismiss = (expirationDays: number) => {
    if (cookiePreferences.functionalAllowed) {
      Cookies.set(cookieKey, 'true', {
        expires: expirationDays,
        path: '/',
        domain: getCookieDomain(),
      })
    }
    setShowDialog(false)
  }

  const handleAskMeLater = () => {
    dismiss(ASK_ME_LATER_EXPIRATION_DAYS)
  }
  const handleNoThanks = () => {
    dismiss(MAX_EXPIRATION_DAYS)
  }
  const handleStartSurvey = () => {
    dismiss(MAX_EXPIRATION_DAYS)
  }

  return (
    <Dialog
      open={showDialog}
      onClose={handleAskMeLater}
      maxWidth="md"
      fullWidth
    >
      <IconButton
        onClick={handleAskMeLater}
        size="small"
        sx={{ position: 'absolute', top: 8, right: 8 }}
        aria-label="Close survey dialog"
      >
        <CloseIcon fontSize="small" />
      </IconButton>
      <DialogContent
        sx={{
          pt: 4,
          pb: 1,
          borderTop: 'none',
          borderBottom: 'none',
        }}
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
      <Box sx={{ display: 'flex' }}>
        <Button
          variant="contained"
          onClick={handleNoThanks}
          sx={{ mr: 'auto' }}
        >
          No Thanks
        </Button>
        <Button
          variant="contained"
          onClick={handleAskMeLater}
          sx={{ marginRight: '20px' }}
        >
          Ask Me Later
        </Button>
        <Button
          variant="contained"
          href={surveyURL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleStartSurvey}
        >
          {surveyButtonText}
        </Button>
      </Box>
    </Dialog>
  )
}

export default SurveyDialog
