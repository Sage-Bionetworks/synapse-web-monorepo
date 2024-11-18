import React, { useState } from 'react'
import { useQuery, useMutation } from '@tanstack/react-query'
import Form from '@rjsf/mui'
import validator from '@rjsf/validator-ajv8'
import { displayToast } from '../ToastMessage'
import { Alert, Box, Button, Typography } from '@mui/material'
import { SkeletonParagraph } from '../Skeleton'

export type DynamicFormProps = {
  schemaUrl: string
  uiSchemaUrl: string
  postUrl: string
  mutateFormDataBeforePost?: (formData: any) => any // allow caller to embed formdata into custom request body object
  onCancel?: () => void
  onSubmit?: () => void
}

function DynamicForm(props: DynamicFormProps) {
  const {
    schemaUrl,
    uiSchemaUrl,
    postUrl,
    mutateFormDataBeforePost,
    onCancel,
    onSubmit,
  } = props
  const [formData, setFormData] = useState({})

  const queryOptions = (endpoint: string) => {
    return {
      queryFn: async () => {
        const response = await fetch(endpoint)
        if (!response.ok) {
          throw new Error('Error fetching schema')
        }
        return response.json()
      },
    }
  }
  // Fetch the form schema
  const {
    data: schema,
    status: schemaStatus,
    isError: isSchemaError,
    error: schemaError,
  } = useQuery({
    ...queryOptions(schemaUrl),
    queryKey: ['DynamicForm', 'schema', schemaUrl],
  })

  // Fetch the UI schema
  const {
    data: uiSchema,
    status: uiSchemaStatus,
    isError: isUiSchemaError,
    error: uiSchemaError,
  } = useQuery({
    ...queryOptions(uiSchemaUrl),
    queryKey: ['DynamicForm', 'uiSchema', uiSchemaUrl],
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
      if (onSubmit) {
        onSubmit()
      }
    },
    onError: error => {
      displayToast(`Error submitting form: ${error.message}`, 'danger')
    },
  })

  const handleSubmit = (formData: any) => {
    submitFormData(formData)
  }

  if (schemaStatus == 'pending' || uiSchemaStatus == 'pending') {
    return (
      <Box>
        <Typography variant="body1">Loading form...</Typography>
        <SkeletonParagraph numRows={20} rowHeight="40px" />
      </Box>
    )
  }

  const errorMessages: string[] = []
  if (isSchemaError) {
    errorMessages.push(`Unable to retrieve schema: ${schemaError.message}`)
  }

  if (isUiSchemaError) {
    errorMessages.push(`Unable to retrieve UI schema: ${uiSchemaError.message}`)
  }
  if (errorMessages.length > 0) {
    return (
      <Alert severity="error">
        Unable to retrieve schema(s):{' '}
        {errorMessages.map(message => (
          <Box key={message}>{message}</Box>
        ))}
      </Alert>
    )
  }

  return (
    <Box sx={{ p: '30px 10px' }}>
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
    </Box>
  )
}

export default DynamicForm
