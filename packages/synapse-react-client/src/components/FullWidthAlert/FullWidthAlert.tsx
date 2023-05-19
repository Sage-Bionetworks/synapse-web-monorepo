import React, { useEffect } from 'react'
import {
  Alert,
  AlertProps,
  AlertTitle,
  Button,
  ButtonProps,
  Grid,
  Snackbar,
  Stack,
  Tooltip,
} from '@mui/material'

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

export type FullWidthAlertVariant = 'warning' | 'info' | 'danger' | 'success'

export interface FullWidthAlertProps {
  variant?: FullWidthAlertVariant
  show?: boolean
  title?: string
  description?: React.ReactNode
  primaryButtonConfig?: AlertButtonConfig
  secondaryButtonConfig?: AlertButtonConfig
  onClose?: () => void
  autoCloseAfterDelayInSeconds?: number
  isGlobal?: boolean
}

function variantToSeverity(variant: string | undefined) {
  return (variant === 'danger' ? 'error' : variant) as AlertProps['severity']
}

function ButtonFromConfig(props: {
  config?: AlertButtonConfig
  variant: ButtonProps['variant']
}) {
  const { config, variant } = props
  if (config && ('onClick' in config || 'href' in config)) {
    return (
      <Tooltip title={config.tooltipText ?? ''} enterNextDelay={300}>
        <span // See https://github.com/wwayne/react-tooltip/issues/304
          data-tip-disable={false}
        >
          <Button
            variant={variant}
            color="primary"
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
            sx={{ flexShrink: 0 }}
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
    show = true,
    onClose,
    autoCloseAfterDelayInSeconds,
    variant = 'info',
    isGlobal = true,
  } = props

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

  const gridSize = 12
  const buttonGridSize = 4
  const hasButtons = primaryButtonConfig || secondaryButtonConfig
  const buttonGridSizeMap = {
    sm: hasButtons ? buttonGridSize + 1 : 0,
    md: hasButtons ? buttonGridSize - 1 : 0,
    lg: hasButtons ? buttonGridSize : 0,
  }

  const alert = (
    <Alert
      severity={variantToSeverity(variant)}
      sx={{
        width: '100%',
        '.MuiAlert-message': {
          flexGrow: 1,
        },
      }}
      className={`FullWidthAlert ${isGlobal && 'global'}`}
      onClose={onClose}
    >
      <Grid
        container
        rowSpacing={1}
        columnSpacing={2}
        direction={{ xs: 'column', sm: 'row' }}
        alignItems={{ xs: 'start', sm: 'center' }}
      >
        <Grid
          item
          xs={gridSize}
          sm={gridSize - buttonGridSizeMap.sm}
          md={gridSize - buttonGridSizeMap.md}
          lg={gridSize - buttonGridSizeMap.lg}
        >
          {title && <AlertTitle>{title}</AlertTitle>}
          {description}
        </Grid>
        {hasButtons && (
          <Grid
            item
            xs={gridSize}
            sm={buttonGridSizeMap.sm}
            md={buttonGridSizeMap.md}
            lg={buttonGridSizeMap.lg}
            display="flex"
            justifyContent="flex-end"
          >
            <Stack
              spacing={{ xs: 1, lg: 2 }}
              direction={{
                xs: 'column-reverse',
                sm: 'column',
                lg: 'row',
              }}
            >
              {secondaryButtonConfig && (
                <ButtonFromConfig
                  config={secondaryButtonConfig}
                  variant="text"
                />
              )}
              {primaryButtonConfig && (
                <ButtonFromConfig
                  config={primaryButtonConfig}
                  variant="contained"
                />
              )}
            </Stack>
          </Grid>
        )}
      </Grid>
    </Alert>
  )

  return (
    <>
      {isGlobal ? (
        <Snackbar
          open={show}
          sx={{
            width: '96%',
            filter:
              'drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.05)) drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.05)) drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.05))',
          }}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          TransitionProps={{
            appear: false,
          }}
        >
          {alert}
        </Snackbar>
      ) : (
        show && alert
      )}
    </>
  )
}

export default FullWidthAlert
