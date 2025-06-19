import { useEffect, useRef, useState } from 'react'
import {
  LoginAwareButton,
  LoginAwareButtonProps,
} from '../widgets/LoginAwareButton'
import Box from '@mui/material/Box'

export type SpinnerButtonProps = LoginAwareButtonProps & {
  showSpinner?: boolean
}

function SpinnerButton({ showSpinner = false, ...props }: SpinnerButtonProps) {
  const [width, setWidth] = useState(0)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (elementRef) {
      const n = elementRef.current?.offsetWidth ?? 0
      setWidth(n)
    }
  }, [])
  return (
    <div
      data-testid="SpinnerButton"
      style={{ position: 'relative', width: 'max-content' }}
    >
      {showSpinner && (
        <div
          style={{
            position: 'absolute',
            top: '8px',
            left: `${width / 2 - 8}px`,
          }}
        >
          <span data-testid="SpinnerButton-spinner" className="spinner" />
        </div>
      )}
      <Box sx={{ display: 'flex' }} ref={elementRef}>
        <LoginAwareButton
          {...props}
          disabled={props.disabled || showSpinner}
          style={{ opacity: showSpinner ? 0.4 : 1 }}
        />
      </Box>
    </div>
  )
}

export default SpinnerButton
