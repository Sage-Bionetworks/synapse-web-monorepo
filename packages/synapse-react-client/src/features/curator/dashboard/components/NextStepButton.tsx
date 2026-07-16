import styles from './NextStepButton.module.scss'
import { Button, Typography } from '@mui/material'
import { ArrowForwardIos, TableChartOutlined } from '@mui/icons-material'
import { SynapseSpinner } from '@/components/LoadingScreen/LoadingScreen'
import classNames from 'classnames'

type NextStepButtonProps = {
  className?: string
  buttonText: string
  onClick: () => void
  disabled?: boolean
  loading?: boolean
  expanded?: boolean
}

/**
 * Button component used to proceed to the next step in a workflow.
 * Displays an arrow icon or loading spinner when appropriate.
 */
export default function NextStepButton(props: NextStepButtonProps) {
  const { className, buttonText, onClick, disabled, loading, expanded } = props

  if (expanded) {
    return (
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
    )
  }

  return (
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
  )
}
