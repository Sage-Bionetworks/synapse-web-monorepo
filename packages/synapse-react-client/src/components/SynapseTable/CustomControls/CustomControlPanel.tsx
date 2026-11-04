import { ButtonProps } from '@mui/material'
import { ActionPanel } from '../../ActionPanel/ActionPanel'
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
    <ActionPanel
      title={title}
      description={description}
      action={
        <CustomControlButton
          control={control}
          callbackData={callbackData}
          variant="outlined"
          {...buttonProps}
        />
      }
    />
  )
}

export default CustomControlPanel
