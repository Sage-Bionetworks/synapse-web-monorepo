import { useState } from 'react'
import { Button, ButtonProps } from '@mui/material'
import {
  CustomControl,
  CustomControlCallbackData,
} from '../TopLevelControls/TopLevelControls'

export interface CustomControlButtonProps extends Omit<ButtonProps, 'onClick'> {
  control: CustomControl
  callbackData: CustomControlCallbackData
}

export function CustomControlButton(props: CustomControlButtonProps) {
  const { control, callbackData, disabled, ...buttonProps } = props
  const { onClick, buttonText, buttonID } = control
  const [isLoading, setIsLoading] = useState(false)
  const isDisabled = disabled || isLoading

  return (
    <Button
      {...buttonProps}
      id={buttonID}
      variant="outlined"
      disabled={isDisabled}
      loading={isLoading}
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
    >
      {buttonText}
    </Button>
  )
}
