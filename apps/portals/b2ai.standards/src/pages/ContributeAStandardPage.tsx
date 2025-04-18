import { Box } from '@mui/material'
import { JsonSchemaForm } from 'synapse-react-client/components/JsonSchemaForm/JsonSchemaForm'
import {
  newStandardFormSchema,
  newStandardUiSchema,
  doiFormSchema,
} from '../config/newStandardConfig'
import { useState, FormEvent } from 'react'
import { RJSFValidationError } from '@rjsf/utils'

export default function ContributeAStandard() {
  const blankFormData: Record<string, string | null> = newStandardFormSchema
    ? Object.fromEntries(
        Object.keys(newStandardFormSchema?.properties ?? {}).map(id =>
          id === 'type' ? [id, null] : [id, ''],
        ),
      )
    : {}

  const [formData, setFormData] = useState(blankFormData)

  const getPropertyTitle = (propertyId: string): string => {
    propertyId = propertyId.replace('.', '')
    return newStandardFormSchema?.properties[propertyId].title || propertyId
  }

  const handleTransformErrors = (
    errors: RJSFValidationError[],
  ): RJSFValidationError[] => {
    console.log(errors)
    return errors.map((error: RJSFValidationError): RJSFValidationError => {
      error = {
        ...error,
        property: getPropertyTitle(error?.property),
      }

      if (error?.name === 'minLength') {
        error = {
          ...error,
          message: 'Field cannot be blank',
        }
      }

      return error
    })
  }

  const handleSubmit = ({ formData, errors }, evt: FormEvent) => {
    evt.preventDefault()

    // TODO: implement submit handler

    // clear form data on successful submission
    // setFormData(blankFormData)
    return true
  }

  return (
    <Box
      className="JsonSchemaFormContainer"
      sx={{
        maxWidth: '700px',
        margin: '0 auto',
        padding: '50px',
      }}
    >
      <JsonSchemaForm
        schema={newStandardFormSchema}
        uiSchema={newStandardUiSchema}
        formData={formData}
        onChange={evt => {
          console.log(evt)
          setFormData(evt.formData)
        }}
        onSubmit={({ formData, errors }, evt) =>
          handleSubmit({ formData, errors }, evt)
        }
        // onError={(errors: RJSFValidationError[]) => {
        //   // invoked when submit is clicked and there are client-side validation errors
        //   setValidationError(errors)
        // }}
        transformErrors={errors => handleTransformErrors(errors)}
        formContext={{
          descriptionVariant: 'expand',
        }}
        noHtml5Validate={true}
      />
    </Box>
  )
}
