import React, { useEffect, useState } from 'react'
import Form from '@rjsf/mui'
import validator from '@rjsf/validator-ajv8'
import { displayToast } from '../ToastMessage'
import { Box, Button, Typography } from '@mui/material'
import { SkeletonParagraph } from '../Skeleton'

export type DynamicFormProps = {
  schemaUrl: string
  uiSchemaUrl: string
  postUrl: string
  mutateFormDataBeforePost?: (formData: any) => any // allow caller to embed formdata into custom request body object
  onCancel?: () => void
}

function DynamicForm(props: DynamicFormProps) {
  const {
    schemaUrl,
    uiSchemaUrl,
    postUrl,
    mutateFormDataBeforePost,
    onCancel,
  } = props
  const [schema, setSchema] = useState(null)
  const [uiSchema, setUiSchema] = useState(null)
  const [formData, setFormData] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    // Fetch the form schema
    const fetchSchema = async () => {
      try {
        const schemaResponse = await fetch(schemaUrl)
        const schemaData = await schemaResponse.json()
        setSchema(schemaData)
      } catch (error) {
        displayToast(`Error fetching Schema: ${error}`, 'danger')
      }
    }

    // Fetch the UI schema
    const fetchUiSchema = async () => {
      try {
        const uiSchemaResponse = await fetch(uiSchemaUrl)
        const uiSchemaData = await uiSchemaResponse.json()
        setUiSchema(uiSchemaData)
      } catch (error) {
        displayToast(`Error fetching UI Schema: ${error}`, 'danger')
      }
    }

    fetchSchema()
    fetchUiSchema()
  }, [schemaUrl, uiSchemaUrl])

  const handleSubmit = async (formData: any) => {
    setIsSubmitting(true)
    const formDataToSubmit = mutateFormDataBeforePost
      ? mutateFormDataBeforePost(formData)
      : formData
    try {
      const response = await fetch(postUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formDataToSubmit),
      })

      if (response.ok) {
        displayToast('Form submitted successfully!', 'success')
      } else {
        const responseText = await response.text()
        displayToast(`Form submission failed: ${responseText}`, 'danger')
      }
    } catch (error) {
      displayToast(`Form submission failed: ${JSON.stringify(error)}`, 'danger')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!schema || !uiSchema) {
    return (
      <Box>
        <Typography variant="body1">Loading form...</Typography>
        <SkeletonParagraph numRows={6} />
      </Box>
    )
  }

  return (
    <Form
      schema={schema}
      uiSchema={uiSchema}
      formData={formData}
      validator={validator}
      onChange={({ formData }) => setFormData(formData)}
      onSubmit={({ formData }) => {
        void (async () => await handleSubmit(formData))()
      }}
      disabled={isSubmitting}
    >
      <Box sx={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
        {onCancel && (
          <Button
            variant="outlined"
            color="primary"
            size="large"
            onClick={onCancel}
          >
            Cancel
          </Button>
        )}
        <Button type="submit" variant="contained" color="primary" size="large">
          Submit
        </Button>
      </Box>
    </Form>
  )
}

export default DynamicForm
