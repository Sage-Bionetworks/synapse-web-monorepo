import { uniqueId } from 'lodash-es'
import React, { ReactNode, useRef } from 'react'
import { toast, ToastBar, Toaster } from 'react-hot-toast'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import FullWidthAlert, {
  AlertButtonConfig,
} from '../FullWidthAlert/FullWidthAlert'

export type ToastMessageProps = {
  text: string
  show: boolean
  autohide: boolean
}

/**
 *
 * Generalization of a Material-style toast message used in a couple of places. This component is simple and
 * cannot handle issuing multiple toast messages. For more sophisticated cases, see {@link displayToast}
 */
export function ToastMessage({
  text,
  show,
  autohide,
}: ToastMessageProps): React.JSX.Element {
  const modalRef = useRef<HTMLDivElement>(null)
  return (
    <TransitionGroup>
      {show && (
        <CSSTransition
          nodeRef={modalRef}
          classNames="SRC-card"
          timeout={autohide ? { enter: 500, exit: 300 } : {}}
        >
          <div className="SRC-modal" ref={modalRef}>
            {text}
          </div>
        </CSSTransition>
      )}
    </TransitionGroup>
  )
}

/**
 * Customized ToastContainer for using react-toastify.
 *
 * Note that this will collide with other notification systems, such as the BootstrapNotify notifications
 * in SWC.
 */
export function SynapseToastContainer(): React.ReactNode {
  return (
    <Toaster
      containerClassName="SynapseToastContainer"
      position="bottom-center"
    >
      {t => (
        <ToastBar
          toast={t}
          style={{
            ...t.style,
            animation: t.visible ? 'fadeInUp 0.5s ease' : 'fadeOutDown 1s ease', // The exit animation needs to be long enough for the element to be removed, or else it will pop back in
          }}
        ></ToastBar>
      )}
    </Toaster>
  )
}

type ToastMessageOptions = {
  title?: string
  /* autoCloseInMs default: 15000 */
  autoCloseInMs?: number
  primaryButtonConfig?: AlertButtonConfig
  secondaryButtonConfig?: AlertButtonConfig
  dismissOnPrimaryButtonClick?: boolean
  dismissOnSecondaryButtonClick?: boolean
}

/**
 * Displays a toast message. Requires one 'SynapseToastContainer' to be somewhere in the page.
 *
 * @param message - The description of the toast message.
 * @param variant - The type of toast message to display. Default 'info'.

 * In ToastMessageOptions:
 *
 * @param autoCloseInMs - The amount of time in milliseconds to wait before automatically closing the toast. To prevent autoclose, set to 0 or Infinity. Default 15000.
 *
 * The rest of the options params are undefined by default.
 */
export const displayToast = (
  message: ReactNode,
  variant?: 'info' | 'success' | 'warning' | 'danger',
  toastMessageOptions: ToastMessageOptions = {},
): (() => void) => {
  const id = uniqueId('synToast-')
  const onClose = () => {
    toast.dismiss(id)
  }

  const {
    title = undefined,
    primaryButtonConfig = undefined,
    secondaryButtonConfig = undefined,
    dismissOnPrimaryButtonClick = false,
    dismissOnSecondaryButtonClick = false,
  } = toastMessageOptions

  // If 'dismissOnPrimaryButtonClick' is true, then we need to invoke onClose after onClick is invoked.
  if (
    primaryButtonConfig &&
    'onClick' in primaryButtonConfig &&
    dismissOnPrimaryButtonClick
  ) {
    const onClick = primaryButtonConfig.onClick!
    primaryButtonConfig.onClick = e => {
      onClick(e)
      onClose()
    }
  }

  // ditto for secondary
  if (
    secondaryButtonConfig &&
    'onClick' in secondaryButtonConfig &&
    dismissOnSecondaryButtonClick
  ) {
    const onClick = secondaryButtonConfig.onClick!
    secondaryButtonConfig.onClick = e => {
      onClick(e)
      onClose()
    }
  }

  let { autoCloseInMs = 15000 } = toastMessageOptions
  // Some toast libraries use 0 to prevent autoclose
  // react-hot-toast doesn't, but we can convert it for better compatibility as we try to migrate to use just one library
  if (autoCloseInMs === 0) {
    autoCloseInMs = Infinity
  }

  toast(
    <FullWidthAlert
      isGlobal={false}
      onClose={onClose}
      variant={variant ?? 'info'}
      show={true}
      title={title}
      description={message}
      primaryButtonConfig={primaryButtonConfig}
      secondaryButtonConfig={secondaryButtonConfig}
    />,
    {
      id: id,
      className: 'SynapseToastMessage',
      duration: autoCloseInMs,
    },
  )

  return onClose
}
