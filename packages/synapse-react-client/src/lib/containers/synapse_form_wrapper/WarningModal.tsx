import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { ButtonVariant } from 'react-bootstrap/esm/types'

export type WarningModalProps<T = any> = {
  title: string
  modalBody: string | JSX.Element
  confirmButtonText?: string
  className?: string
  show: boolean
  onConfirm: (...args: T[]) => unknown
  onConfirmCallbackArgs?: Parameters<WarningModalProps['onConfirm']>
  confirmButtonVariant?: ButtonVariant
  onCancel: () => void
}

export function WarningModal(props: WarningModalProps) {
  const {
    title,
    modalBody,
    confirmButtonText,
    className,
    show,
    onConfirm,
    confirmButtonVariant = 'sds-primary',
    onCancel,
    onConfirmCallbackArgs,
  } = props
  return (
    <Modal
      dialogClassName="bootstrap-4-backport"
      show={show}
      animation={false}
      className={className}
      onHide={() => onCancel()}
      backdrop="static"
    >
      <Modal.Header closeButton={true} onHide={() => onCancel()}>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{modalBody}</Modal.Body>
      <Modal.Footer>
        <div>
          <Button variant="outline" onClick={() => onCancel()}>
            Cancel
          </Button>
          <Button
            variant={confirmButtonVariant}
            onClick={() => onConfirm(...(onConfirmCallbackArgs ?? []))}
          >
            <span>{confirmButtonText || 'OK'}</span>
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  )
}

export default WarningModal
