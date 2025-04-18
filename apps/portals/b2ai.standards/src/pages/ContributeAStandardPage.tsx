import { Box } from '@mui/material'
import { JsonSchemaForm } from 'synapse-react-client/components/JsonSchemaForm/JsonSchemaForm'
import {
  newStandardFormSchema,
  newStandardUiSchema,
} from '../config/newStandardConfig'
import { useState, FormEvent } from 'react'
import { RJSFValidationError } from '@rjsf/utils'

export default function ContributeAStandard() {
  // create default object with blank entries for all fields
  // 'type' is a dropdown, which MUI requires be 'null' when no selection has been chosen;
  // all others should be empty strings
  const blankFormData: Record<string, string | null> = Object.fromEntries(
    Object.keys(newStandardFormSchema?.properties ?? {}).map(id =>
      id === 'type' ? [id, null] : [id, ''],
    ),
  )

  const [formData, setFormData] = useState(blankFormData)

  const getPropertyTitle = (propertyId: string): string => {
    propertyId = propertyId.replace('.', '')
    return newStandardFormSchema.properties![propertyId].title || propertyId
  }

  const handleTransformErrors = (
    errors: RJSFValidationError[],
  ): RJSFValidationError[] => {
    return errors.reduce<RJSFValidationError[]>((acc, error) => {
      // This error is duplicative - will occur if 'type' field does not have a selction chosen.
      // But that will also throw an 'enum'-type error, so only display that instead of this
      if (error.name === 'type' && error.property === '.type') {
        return acc
      }

      const transformedError = { ...error }

      // Translate the field's propertyId to its user-friendly title
      if (transformedError.property) {
        transformedError.property = getPropertyTitle(transformedError.property)
      }

      // More informative error message
      if (
        transformedError?.name === 'minLength' &&
        transformedError?.params?.limit === 1
      ) {
        transformedError.message = 'field cannot be blank'
      }

      acc.push(transformedError)

      return acc
    }, [])
  }

  const handleSubmit = ({ formData, errors }, evt: FormEvent) => {
    evt.preventDefault()

    // TODO: implement submit handler

    // clear form data on successful submission
    setFormData(blankFormData)
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
          setFormData(evt.formData)
        }}
        onSubmit={({ formData, errors }, evt) =>
          handleSubmit({ formData, errors }, evt)
        }
        transformErrors={errors => handleTransformErrors(errors)}
        formContext={{
          descriptionVariant: 'expand',
        }}
        noHtml5Validate={true}
      />
    </Box>
  )
}
