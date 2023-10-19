import React, { useRef, useState } from 'react'
import { ConfirmationDialog } from '../ConfirmationDialog'
import JSONArrayEditor from './JSONArrayEditor'
import type RJSFForm from '@rjsf/core'
import { RJSFSchema } from '@rjsf/utils'

export type JSONArrayEditorModalProps = {
  isShowingModal: boolean
  onConfirm: (value: string[]) => void
  onCancel: () => void
}

function JSONArrayEditorModal(props: JSONArrayEditorModalProps) {
  const { isShowingModal, onConfirm, onCancel } = props
  const formRef = useRef<RJSFForm<any, RJSFSchema, any>>(null)
  const [value, setValue] = useState<string[]>([])
  return (
    <ConfirmationDialog
      open={isShowingModal}
      title="Edit Values"
      confirmButtonText="OK"
      onCancel={onCancel}
      maxWidth="md"
      content={
        <JSONArrayEditor
          ref={formRef}
          value={value}
          onChange={newValue => setValue(newValue)}
          onSubmit={onConfirm}
        />
      }
      onConfirm={() => {
        // Workaround for https://github.com/rjsf-team/react-jsonschema-form/issues/3121
        ;(formRef.current as any).formElement.current.requestSubmit()
      }}
    ></ConfirmationDialog>
  )
}

export default JSONArrayEditorModal
