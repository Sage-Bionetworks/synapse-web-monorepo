import { useState } from 'react'
import { Button, ButtonProps, Box, Typography, Paper } from '@mui/material'
import {
  CustomControl,
  CustomControlCallbackData,
} from '../TopLevelControls/TopLevelControls'
import { SynapseSpinner } from '../../LoadingScreen/LoadingScreen'

export interface CustomControlPanelProps extends Omit<ButtonProps, 'onClick'> {
  control: CustomControl
  callbackData: CustomControlCallbackData
}

function CustomControlPanel(props: CustomControlPanelProps) {
  const { control, callbackData, disabled, ...buttonProps } = props
  const { onClick, buttonText, buttonID, title, description } = control
  const [isLoading, setIsLoading] = useState(false)
  const isDisabled = disabled || isLoading

  return (
    <Paper
      id={buttonID}
      sx={{
        backgroundColor: 'grey.100',
        p: 2,
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        borderRadius: 1,
      }}
      elevation={0}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, gap: 0.5 }}>
        {title && (
          <Typography
            variant="body1"
            sx={{ fontWeight: 700, fontSize: '14px' }}
          >
            {title}
          </Typography>
        )}
        {description && (
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        )}
      </Box>
      <Button
        {...buttonProps}
        variant="outlined"
        disabled={isDisabled}
        onClick={() => {
          setIsLoading(true)
          onClick({
            ...callbackData,
            refresh: () => {
              setIsLoading(false)
              callbackData.refresh()
            },
          })
        }}
        loading={isLoading}
      >
        {buttonText}
      </Button>
    </Paper>
  )
}

export default CustomControlPanel
