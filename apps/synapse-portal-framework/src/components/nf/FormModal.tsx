import React, { useState } from 'react'
import {
  ConfirmationDialog,
  DynamicForm,
  SynapseComponents,
} from 'synapse-react-client'
import { Box } from '@mui/material'

const FormModal = () => {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const form = (
    <DynamicForm
      schemaUrl="https://raw.githubusercontent.com/nf-osi/nf-research-tools-schema/refs/heads/main/NF-Tools-Schemas/observations/SubmitObservationSchema.json"
      uiSchemaUrl="https://raw.githubusercontent.com/nf-osi/nf-research-tools-schema/refs/heads/main/NF-Tools-Schemas/observations/SubmitObservationUiSchema.json"
      postUrl="https://submit-form.com/KwZ46H4T"
      onCustomSuccess={handleClose}
    />
  )

  return (
    <div className="browse-tools-page">
      <Box sx={{ margin: '10px 0px 50px 0px' }}>
        <SynapseComponents.WideButton
          className="highlightSubmitToolButton"
          variant="contained"
          onClick={handleClickOpen}
        >
          Submit Observation
        </SynapseComponents.WideButton>
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

export default FormModal
