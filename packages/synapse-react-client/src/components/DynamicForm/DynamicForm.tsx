import React, { useState } from 'react'
import { useQuery, useMutation } from '@tanstack/react-query'
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
  const [formData, setFormData] = useState({})

  // Fetch the form schema
  const {
    data: schema,
    isLoading: _isSchemaLoading,
    isError: isSchemaError,
    error: schemaError,
  } = useQuery({
    queryKey: ['DynamicForm', 'schema', schemaUrl],
    queryFn: async () => {
      const response = await fetch(schemaUrl)
      if (!response.ok) {
        throw new Error('Error fetching schema')
      }
      return response.json()
    },
    enabled: !!schemaUrl,
  })

  // Fetch the UI schema
  const {
    data: uiSchema,
    isLoading: _isUiSchemaLoading,
    isError: isUiSchemaError,
    error: uiSchemaError,
  } = useQuery({
    queryKey: ['DynamicForm', 'uiSchema', uiSchemaUrl],
    queryFn: async () => {
      const response = await fetch(uiSchemaUrl)
      if (!response.ok) {
        throw new Error('Error fetching UI schema')
      }
      return response.json()
    },
    enabled: !!uiSchemaUrl,
  })

  // Form submission mutation
  const { mutate: submitFormData, isPending } = useMutation({
    mutationFn: async (formData: any) => {
      const formDataToSubmit = mutateFormDataBeforePost
        ? mutateFormDataBeforePost(formData)
        : formData
      const response = await fetch(postUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formDataToSubmit),
      })

      if (!response.ok) {
        const responseText = await response.text()
        throw new Error(responseText)
      }
      return response.json()
    },
    onSuccess: () => {
      displayToast('Form submitted successfully!', 'success')
    },
    onError: error => {
      displayToast(`Error submitting form: ${error.message}`, 'danger')
    },
  })

  const handleSubmit = (formData: any) => {
    submitFormData(formData)
  }

  if (!schema || !uiSchema) {
    return (
      <Box>
        <Typography variant="body1">Loading form...</Typography>
        <SkeletonParagraph numRows={6} />
      </Box>
    )
  }

  if (isSchemaError) {
    displayToast(`Error fetching Schema: ${schemaError.message}`, 'danger')
  }

  if (isUiSchemaError) {
    displayToast(`Error fetching UI Schema: ${uiSchemaError.message}`, 'danger')
  }

  return (
    <Form
      schema={schema}
      uiSchema={uiSchema}
      formData={formData}
      validator={validator}
      onChange={({ formData }) => setFormData(formData)}
      onSubmit={({ formData }) => handleSubmit(formData)}
      disabled={isPending}
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
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          disabled={isPending}
        >
          Submit
        </Button>
      </Box>
    </Form>
  )
}

export default DynamicForm
