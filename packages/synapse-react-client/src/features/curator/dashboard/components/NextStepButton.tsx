import styles from './NextStepButton.module.scss'
import { Button, Tooltip, Typography } from '@mui/material'
import { ArrowForwardIos, TableChartOutlined } from '@mui/icons-material'
import { SynapseSpinner } from '@/components/LoadingScreen/LoadingScreen'
import classNames from 'classnames'
import { PropsWithChildren } from 'react'

type NextStepButtonProps = {
  className?: string
  buttonText: string
  onClick: () => void
  disabled?: boolean
  loading?: boolean
  expanded?: boolean
  /** When provided, wraps the button in a tooltip. Useful to explain a disabled state. */
  tooltip?: string
}

/**
 * Wraps the button in a Tooltip when tooltip text is provided. A disabled MUI button does not fire
 * pointer events, so the button is wrapped in a focusable span so the tooltip remains discoverable.
 */
function OptionalButtonTooltip(
  props: PropsWithChildren<{ title: string | undefined }>,
) {
  const { children, title } = props
  if (!title) {
    return children
  }
  return (
    <Tooltip title={title}>
      <span style={{ display: 'inline-flex' }}>{children}</span>
    </Tooltip>
  )
}

/**
 * Button component used to proceed to the next step in a workflow.
 * Displays an arrow icon or loading spinner when appropriate.
 */
export default function NextStepButton(props: NextStepButtonProps) {
  const {
    className,
    buttonText,
    onClick,
    disabled,
    loading,
    expanded,
    tooltip,
  } = props

  if (expanded) {
    return (
      <OptionalButtonTooltip title={tooltip}>
        <Button
          className={classNames(styles.expandedButton, className)}
          onClick={onClick}
          disabled={disabled || loading}
          startIcon={<TableChartOutlined sx={{ fontSize: 20 }} />}
          sx={{ width: '100%' }}
        >
          <Typography
            variant="buttonLink"
            sx={{ color: 'inherit', fontWeight: 700 }}
          >
            {buttonText}
          </Typography>
        </Button>
      </OptionalButtonTooltip>
    )
  }

  return (
    <OptionalButtonTooltip title={tooltip}>
      <button
        type="button"
        className={classNames(styles.button, className)}
        onClick={onClick}
        disabled={disabled || loading}
      >
        <div className={styles.buttonText}>
          <Typography className={styles.buttonTextSub} variant="body1">
            Next step
          </Typography>
          <Typography
            className={styles.buttonTextMain}
            variant="buttonLink"
            color="primary"
            fontWeight={700}
            align="left"
          >
            {buttonText}
          </Typography>
        </div>
        {loading ? (
          <SynapseSpinner size={30} />
        ) : (
          <ArrowForwardIos className={styles.icon} />
        )}
      </button>
    </OptionalButtonTooltip>
  )
}
