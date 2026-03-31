import { ButtonProps, Box, Typography, Paper } from '@mui/material'
import {
  CustomControl,
  CustomControlCallbackData,
} from '../TopLevelControls/TopLevelControls'
import { CustomControlButton } from './CustomControlButton'

export interface CustomControlPanelProps extends Omit<ButtonProps, 'onClick'> {
  control: CustomControl
  callbackData: CustomControlCallbackData
}

function CustomControlPanel(props: CustomControlPanelProps) {
  const { control, callbackData, ...buttonProps } = props
  const { title, description } = control

  return (
    <Paper
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
      <CustomControlButton
        control={control}
        callbackData={callbackData}
        variant="outlined"
        {...buttonProps}
      />
    </Paper>
  )
}

export default CustomControlPanel
