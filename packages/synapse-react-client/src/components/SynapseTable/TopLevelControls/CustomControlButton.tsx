import React, { useState } from 'react'
import { Button, ButtonProps } from '@mui/material'
import { CustomControl, CustomControlCallbackData } from './TopLevelControls'
import { SynapseSpinner } from '../../LoadingScreen/LoadingScreen'

export interface CustomControlButtonProps extends ButtonProps {
  control: CustomControl
  callbackData: CustomControlCallbackData
}

function CustomControlButton(props: CustomControlButtonProps) {
  const { control, callbackData, disabled } = props
  const { onClick, buttonText, buttonID } = control
  const [isLoading, setIsLoading] = useState(false)
  const isDisabled = disabled || isLoading
  return (
    <Button
      {...props}
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
      id={buttonID}
    >
      {isLoading && <SynapseSpinner size={30} />}
      {buttonText}
    </Button>
  )
}

export default CustomControlButton
