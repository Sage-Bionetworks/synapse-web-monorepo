import React, {
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import { Overlay } from 'react-bootstrap'
import { Placement } from 'react-bootstrap/esm/Overlay'

function resetTimer(timer: NodeJS.Timeout | null) {
  if (timer) {
    clearTimeout(timer)
  }
}

const DEFAULT_DELAY_SHOW_MS = 250
const DEFAULT_DELAY_HIDE_MS = 500

export function useOverlay(
  children: JSX.Element,
  targetRef: RefObject<any>,
  delayShow = DEFAULT_DELAY_SHOW_MS,
  delayHide = DEFAULT_DELAY_HIDE_MS,
  placement: Placement = 'top-start',
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
      <Overlay
        target={targetRef.current}
        show={isShowing}
        placement={placement}
      >
        {({ placement, arrowProps, show: _show, popper, ...props }) => {
          return (
            <div
              className="bootstrap-4-backport"
              onMouseEnter={() => {
                toggle(true, false)
              }}
              onMouseLeave={() => {
                toggleHide(true)
              }}
              {...props}
              style={{
                ...props.style,
                width: 'max-content',
                minWidth: '300px',
              }}
            >
              {children}
            </div>
          )
        }}
      </Overlay>
    ),
    [children, isShowing, placement, targetRef, toggle, toggleHide],
  )

  return { OverlayComponent, isShowing, toggleShow, toggleHide, toggle }
}
