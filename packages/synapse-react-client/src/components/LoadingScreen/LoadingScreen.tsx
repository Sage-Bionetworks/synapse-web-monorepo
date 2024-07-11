import React, { useEffect } from 'react'
import {
  Backdrop,
  Box,
  Button,
  LinearProgress,
  Typography,
} from '@mui/material'
import '../../style/components/_spinner.scss'

const loadingScreen = (
  <div className="bar-loader">
    <LinearProgress
      classes={{
        colorPrimary: 'bar-background-color',
        barColorPrimary: 'bar-color',
      }}
    />
  </div>
)

type SynapseSpinnerProps = {
  size?: number // the size in pixels. default 20
  margin?: string // the margin, default auto
}

export const SynapseSpinner: React.FC<SynapseSpinnerProps> = ({
  size = 20,
  margin = 'auto',
}) => {
  return (
    <div
      role={'progressbar'}
      className="spinner"
      style={{
        height: `${size}px`,
        width: `${size}px`,
        backgroundSize: `${size}px`,
        margin: `${margin}`,
      }}
    />
  )
}

export type BlockingLoaderProps = {
  show: boolean
  currentProgress?: number
  totalProgress?: number
  onCancel?: () => void
  hintText?: string
  headlineText?: string
}
export const BlockingLoader: React.FC<BlockingLoaderProps> = ({
  show,
  currentProgress,
  onCancel,
  totalProgress,
  headlineText,
  hintText,
}) => {
  useEffect(() => {
    document.body.style.cursor = show ? 'wait' : 'default'
    return () => {
      document.body.style.cursor = 'default'
    }
  }, [show])
  const barLoader = (
    <>
      <div className="bar-loader">
        <LinearProgress
          data-testid="progress-bar"
          variant="determinate"
          classes={{
            colorPrimary: 'bar-background-color',
            barColorPrimary: 'bar-color',
          }}
          value={(currentProgress! / totalProgress!) * 100}
        />
      </div>
      <Typography variant="headline3" mb={2}>
        {headlineText}
      </Typography>
      <Typography variant="hintText" mb={2}>
        {hintText}
      </Typography>
    </>
  )
  return (
    <Backdrop
      open={show}
      onClick={() => {}}
      aria-hidden={false}
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        zIndex: theme => theme.zIndex.modal + 1,
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        {totalProgress ? (
          barLoader
        ) : (
          <>
            <SynapseSpinner size={40} margin="16px" />
            <Typography
              variant="headline3"
              data-testid="spinner-hint-text"
              mb={2}
            >
              {hintText}
            </Typography>
          </>
        )}
        {onCancel && (
          <Button variant="outlined" color="primary" onClick={onCancel}>
            Cancel
          </Button>
        )}
      </Box>
    </Backdrop>
  )
}

export default loadingScreen
