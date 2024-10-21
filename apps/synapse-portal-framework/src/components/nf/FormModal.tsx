import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import { DynamicForm, SynapseComponents } from 'synapse-react-client'
import { Box } from '@mui/material'

const FormModal = () => {
  const [open, setOpen] = useState(false)
  const form = (
    <DynamicForm
      schemaUrl="https://raw.githubusercontent.com/nf-osi/nf-research-tools-schema/refs/heads/main/NF-Tools-Schemas/observations/SubmitObservationSchema.json"
      uiSchemaUrl="https://raw.githubusercontent.com/nf-osi/nf-research-tools-schema/refs/heads/main/NF-Tools-Schemas/observations/SubmitObservationUiSchema.json"
      postUrl="https://submit-form.com/KwZ46H4T"
    />
  )

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Box sx={{ margin: '15px 0px' }}>
      <SynapseComponents.WideButton
        variant="contained"
        onClick={handleClickOpen}
      >
        Submit Observation
      </SynapseComponents.WideButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <DialogContentText>{form}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

export default FormModal
