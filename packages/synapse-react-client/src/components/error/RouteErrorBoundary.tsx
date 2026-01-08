import { Button, Collapse } from '@mui/material'
import { useState } from 'react'
import { useRouteError, isRouteErrorResponse } from 'react-router'
import styles from './RouteErrorBoundary.module.scss'

export type RouteErrorBoundaryProps = {
  icon?: string
}

/**
 * Error boundary component for React Router routes.
 * This component catches errors that occur during route loading or rendering,
 * including module initialization errors like circular dependencies.
 */
export function RouteErrorBoundary(props: RouteErrorBoundaryProps) {
  const { icon } = props
  const error = useRouteError()
  const [showDetails, setShowDetails] = useState(false)

  let errorMessage: string
  let errorDetails: string | undefined

  if (isRouteErrorResponse(error)) {
    errorMessage = `${error.status} ${error.statusText}`
    errorDetails = error.data?.message
  } else if (error instanceof Error) {
    errorMessage = error.message
    errorDetails = error.stack
  } else if (typeof error === 'string') {
    errorMessage = error
  } else {
    errorMessage = 'An unknown error occurred'
  }

  const handleReload = () => {
    window.location.reload()
  }

  return (
    <div className={styles.container}>
      <div className={styles.errorBox}>
        {icon && <img src={icon} alt="Logo" className={styles.icon} />}
        <h1 className={styles.errorTitle}>Something went wrong</h1>
        <p className={styles.errorMessage}>{errorMessage}</p>
        {errorDetails && (
          <div className={styles.detailsContainer}>
            <Button
              variant="text"
              onClick={() => setShowDetails(!showDetails)}
              className={styles.detailsButton}
            >
              {showDetails ? 'Hide' : 'Show'} details
            </Button>
            <Collapse in={showDetails}>
              <div className={styles.detailsBox}>
                <pre className={styles.detailsText}>{errorDetails}</pre>
              </div>
            </Collapse>
          </div>
        )}
        <Button
          variant="contained"
          onClick={handleReload}
          className={styles.reloadButton}
        >
          Reload Page
        </Button>
      </div>
    </div>
  )
}
