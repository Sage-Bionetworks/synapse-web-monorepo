import { useEffect, useRef, useState } from 'react'
import {
  ConfirmationDialog,
  ConfirmationDialogProps,
} from '../ConfirmationDialog'
import JSONArrayEditor, { JSONArrayEditorProps } from './JSONArrayEditor'
import type { FormRef } from '@rjsf/core'

export type JSONArrayEditorModalProps<T = unknown> = Pick<
  JSONArrayEditorProps<T>,
  'arrayItemDefinition' | 'value'
> & {
  dialogTitle?: ConfirmationDialogProps['title']
  isShowingModal: boolean
  onConfirm: (value: T[]) => void
  onCancel: () => void
}

function JSONArrayEditorModal<T = unknown>(
  props: JSONArrayEditorModalProps<T>,
) {
  const {
    isShowingModal,
    onConfirm,
    onCancel,
    dialogTitle = 'Edit Values',
    value,
    ...editorProps
  } = props
  const formRef = useRef<FormRef<T[]>>(null)
  const [tempValue, setTempValue] = useState<T[]>(value ?? [])

  useEffect(() => {
    /* If the passed prop changes, reset local component state */
    if (value) {
      setTempValue(value)
    }
  }, [value])

  return (
    <ConfirmationDialog
      open={isShowingModal}
      title={dialogTitle}
      onCancel={onCancel}
      maxWidth="md"
      content={
        <JSONArrayEditor<T>
          formRef={formRef}
          value={tempValue}
          onChange={newValue => setTempValue(newValue)}
          onSubmit={onConfirm}
          {...editorProps}
        />
      }
      onConfirm={() => {
        formRef.current?.submit()
      }}
    ></ConfirmationDialog>
  )
}

export default JSONArrayEditorModal
