import { useEffect, useState, MouseEvent } from 'react'
import { Box, Button, LinearProgress } from '@mui/material'

export type PageProgressProps = {
  barColor: string
  barPercent: number
  backBtnLabel: string
  backBtnCallback?: () => void
  forwardBtnLabel: string
  forwardBtnCallback?: () => void
  forwardBtnActive: boolean
}

export function PageProgress(props: PageProgressProps) {
  const {
    barColor,
    barPercent,
    backBtnLabel,
    forwardBtnLabel,
    forwardBtnActive,
    backBtnCallback,
    forwardBtnCallback,
  } = props
  const [progressPercent, setProgressPercent] = useState<number>(0)
  let mounted = true

  useEffect(() => {
    if (mounted) {
      setProgressPercent(barPercent)
    }
    return () => {
      mounted = false
    }
  }, [barPercent])

  const handleBackButtonClick = (e: MouseEvent) => {
    if (backBtnCallback) {
      backBtnCallback()
    }
  }

  const handleNextButtonClick = (e: MouseEvent) => {
    if (forwardBtnCallback && forwardBtnActive) {
      forwardBtnCallback()
    }
  }

  const buttonSx = {
    padding: '10px 120px',
    marginRight: '30px',
  }
  const progressSx = {
    backgroundColor: 'transparent',
    '& .MuiLinearProgress-bar': {
      backgroundColor: barColor,
    },
    height: '10px',
  }

  return (
    <section>
      <LinearProgress
        value={progressPercent}
        variant="determinate"
        sx={progressSx}
      />
      <Box padding="30px 0" textAlign="center">
        <Button
          onClick={handleBackButtonClick}
          sx={buttonSx}
          variant="outlined"
          color="primary"
        >
          {backBtnLabel}
        </Button>
        <Button
          onClick={handleNextButtonClick}
          disabled={!forwardBtnActive}
          sx={buttonSx}
          variant="contained"
          color="primary"
        >
          {forwardBtnLabel}
        </Button>
      </Box>
    </section>
  )
}

export default PageProgress
