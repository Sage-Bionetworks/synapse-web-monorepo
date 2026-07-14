import styles from './NextStepButton.module.scss'
import { Typography, useTheme } from '@mui/material'
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
  const theme = useTheme()

  if (expanded) {
    return (
      <button
        type="button"
        className={classNames(styles.button, className)}
        onClick={onClick}
        disabled={disabled || loading}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          width: '100%',
          backgroundColor: theme.palette.primary.main,
          color: 'white',
          border: 'none',
          padding: '12px 24px',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        <TableChartOutlined sx={{ fontSize: 20 }} />
        <Typography
          variant="buttonLink"
          sx={{ color: 'inherit', fontWeight: 700 }}
        >
          {buttonText}
        </Typography>
      </button>
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
