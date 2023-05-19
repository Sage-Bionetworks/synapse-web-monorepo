import React, { useEffect } from 'react'
import { Button, Alert, AlertProps } from 'react-bootstrap'
import {
  InfoTwoTone,
  ErrorTwoTone,
  CheckCircleTwoTone,
  HighlightOffTwoTone,
  Clear,
} from '@mui/icons-material'
import { Typography } from '@mui/material'
import { Tooltip } from '@mui/material'

export type AlertButtonConfig = {
  text: string
  isDisabled?: boolean
  tooltipText?: string
} & (
  | // "onClick" or "href", but not both
  {
      onClick?:
        | ((e?: React.MouseEvent<HTMLElement, MouseEvent>) => void)
        | (() => void)
    }
  | { href?: string }
)

export interface FullWidthAlertProps extends AlertProps {
  variant: string
  title?: string
  description?: React.ReactNode
  primaryButtonConfig?: AlertButtonConfig
  secondaryButtonConfig?: AlertButtonConfig
  onClose?: () => void
  autoCloseAfterDelayInSeconds?: number
  isGlobal?: boolean
}

function getIcon(variant?: string) {
  switch (variant) {
    case 'warning':
      return <ErrorTwoTone className="text-warning" fontSize={'large'} />
    case 'info':
      return <InfoTwoTone className="text-info" fontSize={'large'} />
    case 'danger':
      return <HighlightOffTwoTone className="text-danger" fontSize={'large'} />
    case 'success':
      return <CheckCircleTwoTone className="text-success" fontSize={'large'} />
    default:
      return <></>
  }
}

function ButtonFromConfig(props: {
  config?: AlertButtonConfig
  className?: string
  variant: string
}) {
  const { config, variant, className } = props
  if (config && ('onClick' in config || 'href' in config)) {
    return (
      <Tooltip title={config.tooltipText ?? ''} enterNextDelay={300}>
        <span // See https://github.com/wwayne/react-tooltip/issues/304
          className={className}
          data-tip-disable={false}
        >
          <Button
            variant={variant}
            size={'sm'}
            disabled={config.isDisabled}
            onClick={e => {
              if ('onClick' in config) {
                e.preventDefault()
                config.onClick!(e)
              } else if ('href' in config) {
                e.preventDefault()
                window.open(config.href, '_blank', 'noopener')
              }
            }}
          >
            {config.text}
          </Button>
        </span>
      </Tooltip>
    )
  }
  return null
}

/**
 * Nav bar item, displayed when files have been added to the Download Cart.
 * This must be configured with the URL of a page dedicated to showing the Download Cart.
 */
function FullWidthAlert(props: FullWidthAlertProps) {
  const {
    title,
    description,
    primaryButtonConfig,
    secondaryButtonConfig,
    show,
    onClose,
    autoCloseAfterDelayInSeconds,
    variant = 'info',
    transition,
    isGlobal = true,
  } = props
  const iconContent = getIcon(variant)

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (onClose && autoCloseAfterDelayInSeconds) {
      timer = setTimeout(onClose, autoCloseAfterDelayInSeconds * 1000)
    }
    return () => {
      if (timer) {
        clearTimeout(timer)
      }
    }
  }, [onClose, autoCloseAfterDelayInSeconds])
  const additionalAlertVariantClass = variant ? `alert-${variant}` : ''
  return (
    <Alert
      variant={variant}
      show={show}
      dismissible={false}
      transition={transition}
      className={`FullWidthAlert bootstrap-4-backport ${
        isGlobal ? 'global' : ''
      } ${additionalAlertVariantClass}`}
    >
      <div className={`gridContainer ${onClose ? 'hasCloseButton' : ''}`}>
        <span className="iconArea">{iconContent}</span>
        <span className="mainContent">
          <span className="messageArea">
            <Typography variant="smallText2">{title}</Typography>
            {title && description && <div className="SRC-marginBottomTen" />}
            <Typography variant="smallText1">{description}</Typography>
          </span>
          <span className="buttonArea">
            {secondaryButtonConfig && (
              <ButtonFromConfig
                className="secondaryButton"
                config={secondaryButtonConfig}
                variant="tertiary"
              />
            )}
            {primaryButtonConfig && (
              <ButtonFromConfig
                className="primaryButton"
                config={primaryButtonConfig}
                variant="sds-primary"
              />
            )}
          </span>
        </span>
        {onClose && (
          <button className="closeAlert" onClick={onClose}>
            <Clear fontSize={'large'} />
          </button>
        )}
      </div>
    </Alert>
  )
}

export default FullWidthAlert
