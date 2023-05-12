import { Skeleton } from '@mui/material'
import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { ButtonVariant } from 'react-bootstrap/esm/types'
import { Tooltip } from '@mui/material'
import { Typography } from '@mui/material'
import { HelpPopover, HelpPopoverProps } from './HelpPopover'

type ModalAction = {
  skeleton?: boolean
  variant?: ButtonVariant
  copy?: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  [key: string]: any
}

export type FluidModalProps = {
  className?: string
  show: boolean
  children: JSX.Element
  title: string | JSX.Element
  titlePopoverProps?: HelpPopoverProps
  onClose: () => void
  primaryAction?: ModalAction
  secondaryActions?: ModalAction[]
}

function ModalActionButton(props: ModalAction) {
  const { copy, skeleton, ...rest } = props

  if (props.skeleton) {
    return <Skeleton variant="rectangular" width={150} />
  }
  return (
    <Tooltip
      title={rest['data-tip'] ?? ''}
      placement="top"
      enterNextDelay={300}
    >
      <Button {...rest}>{copy}</Button>
    </Tooltip>
  )
}

/**
 * Full-screen modal that scales with screen size. Fits requirements defined in SWC-5801
 * @param props
 * @returns
 */
export const FluidModal = (props: FluidModalProps) => {
  // TODO: Info button
  return (
    <Modal
      className={`FluidModal bootstrap-4-backport ${props.className ?? ''}`}
      backdrop="static"
      animation={false}
      show={props.show}
      onHide={props.onClose}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          <Typography variant={'headline1'} component="span">
            {props.title}
            {props.titlePopoverProps && (
              <HelpPopover
                {...{
                  placement: 'right',
                  ...props.titlePopoverProps,
                  className:
                    'SRC-margin-left-5 ' +
                    (props.titlePopoverProps?.className ?? ''),
                }}
              />
            )}
          </Typography>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.children}</Modal.Body>
      <Modal.Footer>
        {props.secondaryActions &&
          props.secondaryActions.reverse().map((action, index) => {
            return (
              <ModalActionButton
                key={index}
                {...{
                  variant: 'outline',
                  ...action,
                }}
              />
            )
          })}
        {props.primaryAction && (
          <ModalActionButton
            {...{
              variant: 'sds-primary',
              ...props.primaryAction,
            }}
          />
        )}
      </Modal.Footer>
    </Modal>
  )
}
