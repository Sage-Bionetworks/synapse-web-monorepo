import {
  ReactNode,
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import { Fade, Paper, PaperProps, Popover, PopoverProps } from '@mui/material'

function resetTimer(timer: NodeJS.Timeout | null) {
  if (timer) {
    clearTimeout(timer)
  }
}

const DEFAULT_DELAY_SHOW_MS = 250
const DEFAULT_DELAY_HIDE_MS = 500

export function useOverlay(
  children: ReactNode,
  targetRef: RefObject<any>,
  delayShow = DEFAULT_DELAY_SHOW_MS,
  delayHide = DEFAULT_DELAY_HIDE_MS,
  paperProps: PaperProps = {},
  anchorOrigin: PopoverProps['anchorOrigin'] = {
    vertical: 'top',
    horizontal: 'right',
  },
  transformOrigin: PopoverProps['transformOrigin'] = {
    vertical: 'center',
    horizontal: 'left',
  },
) {
  const isMounted = useRef(false)
  const timer = useRef<NodeJS.Timeout | null>(null)
  const [isShowing, setIsShowing] = useState(false)

  useEffect(() => {
    isMounted.current = true
    return () => {
      isMounted.current = false
    }
  }, [])

  const toggle = useCallback(
    (show: boolean = isShowing, withDelay: boolean = true) => {
      resetTimer(timer.current)
      if (withDelay) {
        timer.current = setTimeout(
          () => {
            if (isMounted.current) {
              setIsShowing(show)
            }
          },
          show ? delayShow : delayHide,
        )
      } else {
        setIsShowing(show)
      }
    },
    [delayHide, delayShow, isShowing],
  )

  const toggleShow = useCallback(
    (withDelay: boolean = true) => {
      toggle(true, withDelay)
    },
    [toggle],
  )

  const toggleHide = useCallback(
    (withDelay: boolean = true) => {
      toggle(false, withDelay)
    },
    [toggle],
  )

  const OverlayComponent = useCallback(
    () => (
      <Popover
        anchorEl={targetRef.current}
        open={isShowing}
        anchorOrigin={anchorOrigin}
        transformOrigin={transformOrigin}
        sx={{ pointerEvents: 'none' }}
        slots={{
          transition: Fade,
        }}
      >
        <Paper
          {...paperProps}
          onMouseEnter={() => {
            toggle(true, false)
          }}
          onMouseLeave={() => {
            toggleHide(true)
          }}
          sx={{
            pointerEvents: 'auto',
            width: 'max-content',
            minWidth: '300px',
            ...paperProps.sx,
          }}
        >
          {children}
        </Paper>
      </Popover>
    ),
    [children, isShowing, anchorOrigin, targetRef, toggle, toggleHide],
  )

  return { OverlayComponent, isShowing, toggleShow, toggleHide, toggle }
}
