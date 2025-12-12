import spreadSx from '@/react-ui/theme/utils/mergeSx'
import {
  Alert,
  AlertProps,
  AlertTitle,
  Box,
  Button,
  ButtonProps,
  Snackbar,
  Stack,
  Tooltip,
} from '@mui/material'
import { MouseEventHandler, ReactNode, useEffect } from 'react'
import './FullWidthAlert.scss'

export type AlertButtonConfig = {
  text: string
  isDisabled?: boolean
  tooltipText?: string
} & (
  | // "onClick" or "href", but not both
  {
      onClick?: MouseEventHandler<HTMLButtonElement>
    }
  | { href?: string }
)

export type FullWidthAlertVariant = 'warning' | 'info' | 'danger' | 'success'

export interface FullWidthAlertProps {
  variant?: FullWidthAlertVariant
  show?: boolean
  title?: string
  description?: ReactNode
  primaryButtonConfig?: AlertButtonConfig
  secondaryButtonConfig?: AlertButtonConfig
  tertiaryButtonConfig?: AlertButtonConfig
  onClose?: () => void
  autoCloseAfterDelayInSeconds?: number
  isGlobal?: boolean
  icon?: ReactNode
  sx?: AlertProps['sx']
  globalAlertSx?: AlertProps['sx']
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
            sx={{
              width: { xs: '100%', md: 'initial' },
            }}
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
    tertiaryButtonConfig,
    show = true,
    onClose,
    autoCloseAfterDelayInSeconds,
    variant = 'info',
    isGlobal = true,
    icon,
    sx,
    globalAlertSx,
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

  const alert = (
    <Alert
      severity={variantToSeverity(variant)}
      sx={spreadSx(
        {
          width: '100%',
          my: '10px',
          '.MuiAlert-message': {
            flexGrow: 1,
          },
          '.MuiAlert-icon': {
            display: { xs: 'none', sm: 'flex' },
          },
        },
        sx,
      )}
      className="FullWidthAlert"
      onClose={onClose}
      icon={icon}
    >
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2 }}
        sx={{
          alignItems: { xs: 'start', sm: 'center' },
          gap: { xs: '8px', sm: 'initial' },
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Box>
          {title && <AlertTitle>{title}</AlertTitle>}
          <span className="FullWidthAlertDescription">{description}</span>
        </Box>
        {(primaryButtonConfig ||
          secondaryButtonConfig ||
          tertiaryButtonConfig) && (
          <Stack
            spacing={{ xs: 1, lg: 2 }}
            direction={{ xs: 'row', sm: 'column', lg: 'row' }}
            sx={theme => ({
              alignItems: 'center',
              display: 'flex',
              flexShrink: 0,
              gap: { xs: '8px', sm: 'initial' },
              flexWrap: { xs: 'wrap', sm: 'nowrap' },
              width: { xs: '100%', sm: 'initial' },
              [theme.breakpoints.down('sm')]: {
                '& > *': {
                  flexGrow: 1,
                },
              },
            })}
          >
            {tertiaryButtonConfig && (
              <ButtonFromConfig config={tertiaryButtonConfig} variant="text" />
            )}
            {secondaryButtonConfig && (
              <ButtonFromConfig config={secondaryButtonConfig} variant="text" />
            )}
            {primaryButtonConfig && (
              <ButtonFromConfig
                config={primaryButtonConfig}
                variant="contained"
              />
            )}
          </Stack>
        )}
      </Stack>
    </Alert>
  )

  return (
    <>
      {isGlobal ? (
        <Snackbar
          open={show}
          className={isGlobal ? 'FullWidthAlertGlobal' : undefined}
          sx={{
            width: '96%',
            filter:
              'drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.05)) drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.05)) drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.05))',
            ...globalAlertSx,
          }}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          slotProps={{
            transition: {
              appear: false,
            },
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
