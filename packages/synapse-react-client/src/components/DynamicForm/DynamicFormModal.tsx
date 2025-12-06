import React from 'react'
import WideButton from '@/components/styled/WideButton'
import { Box } from '@mui/material'
import { useState } from 'react'
import ConfirmationDialog from '../ConfirmationDialog'
import DynamicForm, { DynamicFormProps } from './DynamicForm'

type ModalProps = {
  submitButtonText?: string
}

export type DynamicFormModalProps = DynamicFormProps & ModalProps

const DynamicFormModal = ({
  schemaUrl,
  uiSchemaUrl,
  postUrl,
  submitButtonText,
}: DynamicFormModalProps): React.ReactNode => {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const form = (
    <DynamicForm
      schemaUrl={schemaUrl}
      uiSchemaUrl={uiSchemaUrl}
      postUrl={postUrl}
      onSubmit={() => {
        handleClose()
      }}
    />
  )

  return (
    <div className="browse-tools-page">
      <Box sx={{ margin: '10px 0px 50px 0px' }}>
        <WideButton
          className="highlightSubmitToolButton"
          variant="contained"
          onClick={handleClickOpen}
        >
          {submitButtonText}
        </WideButton>
        <ConfirmationDialog
          open={open}
          title=""
          content={form}
          onCancel={handleClose}
          onConfirm={() => {}}
          confirmButtonProps={{
            sx: { display: 'none' },
          }}
          cancelButtonProps={{
            children: 'cancel',
          }}
        />
      </Box>
    </div>
  )
}

export default DynamicFormModal
