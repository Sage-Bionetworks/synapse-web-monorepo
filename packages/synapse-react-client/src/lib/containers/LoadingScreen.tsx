import { LinearProgress } from '@mui/material'
import React, { useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { Typography } from '@mui/material'
import '../style/components/_spinner.scss'

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
}

export const SynapseSpinner: React.FC<SynapseSpinnerProps> = ({
  size = 20,
}) => {
  return (
    <div
      className="spinner"
      style={{
        height: `${size}px`,
        width: `${size}px`,
        backgroundSize: `${size}px`,
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
      <Typography variant="headline3">{headlineText}</Typography>
      <Typography variant="hintText">{hintText}</Typography>
    </>
  )
  return (
    <Modal
      className="bootstrap-4-backport BlockingLoader"
      backdrop={false}
      animation={false}
      show={show}
      size="sm"
      centered={true}
      onHide={() => {}}
    >
      <div className="SpinnerContainer" data-testid="spinner-container">
        {totalProgress ? (
          barLoader
        ) : (
          <>
            <SynapseSpinner size={40} />
            <Typography variant="headline3" data-testid="spinner-hint-text">
              {hintText}
            </Typography>
          </>
        )}
        {onCancel && (
          <Button variant="default" onClick={onCancel}>
            Cancel
          </Button>
        )}
      </div>
    </Modal>
  )
}

export default loadingScreen
