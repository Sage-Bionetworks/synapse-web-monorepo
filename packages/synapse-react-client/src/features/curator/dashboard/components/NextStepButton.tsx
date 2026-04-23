import styles from './NextStepButton.module.scss'
import { Typography } from '@mui/material'
import { ArrowForwardIos } from '@mui/icons-material'
import { SynapseSpinner } from '@/components/LoadingScreen/LoadingScreen'
import classNames from 'classnames'

type NextStepButtonProps = {
  className?: string
  buttonText: string
  onClick: () => void
  disabled?: boolean
  loading?: boolean
}

/**
 * Button component used to proceed to the next step in a workflow.
 * Displays an arrow icon or loading spinner when appropriate.
 */
export default function NextStepButton(props: NextStepButtonProps) {
  const { className, buttonText, onClick, disabled, loading } = props
  return (
    <button
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
