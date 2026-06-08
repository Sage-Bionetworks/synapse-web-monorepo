import React from 'react'
import { Stack, useTheme } from '@mui/material'
import { VerificationSubmission } from '@sage-bionetworks/synapse-types'
import { ChangeEvent, useState } from 'react'
import RORInstitutionField from 'synapse-react-client/components/RORInstitutionField/RORInstitutionField'
import { ContinueButton } from './ContinueButton'
import { TextField } from 'synapse-react-client/components/TextField/index'

const keysToValidate = ['firstName', 'lastName', 'location', 'company']

function validate(values: Partial<VerificationSubmission>) {
  const requiredError = 'This field cannot be empty.'
  let errors: Record<string, string> = {}
  for (const [key, value] of Object.entries(values)) {
    if (keysToValidate.includes(key)) {
      if (!value) {
        errors[key] = requiredError
      }
    }
  }
  return errors
}

export type ProfileFieldsEditorProps = {
  verificationSubmission: VerificationSubmission
  onNext: (verificationSubmission: VerificationSubmission) => void
}
/**
 * Component edits the profile field values in the VerificationSubmission object provided in the prop.
 * Note that this is an anti-pattern, components should not typically modify the prop object values.
 * Implementing this way because this component is tied directly to the ProfileValidation parent (where the user is building up this verificaitonSubmission draft object before submitting).
 * @param props
 * @returns
 */
export const ProfileFieldsEditor = (
  props: ProfileFieldsEditorProps,
): React.ReactNode => {
  const theme = useTheme()
  const [values, setValues] = useState({ ...props.verificationSubmission })
  const [errors] = useState({} as Partial<VerificationSubmission>)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValues(values => ({
      ...values,
      [event.target.name]: event.target.value,
    }))
  }

  function handleCompanyChange(value: string) {
    setValues(values => ({
      ...values,
      company: value,
    }))
  }

  return (
    <>
      <Stack
        gap={2}
        sx={{
          marginBottom: theme.spacing(2),
        }}
      >
        <TextField
          fullWidth
          required
          label={'First Name'}
          id="firstName"
          name="firstName"
          onChange={handleChange}
          value={values.firstName || ''}
          error={!!errors.firstName}
        />
        <TextField
          fullWidth
          required
          label={'Last Name'}
          id="lastName"
          name="lastName"
          onChange={handleChange}
          value={values.lastName || ''}
          error={!!errors.lastName}
        />
        <RORInstitutionField
          onChange={value => handleCompanyChange(value || '')}
          value={values.company || ''}
          error={!!errors.company}
        />
        <TextField
          label={'Location'}
          id="location"
          name="location"
          fullWidth
          onChange={handleChange}
          value={values.location || ''}
          error={!!errors.location}
        />
        <ContinueButton
          onClick={() => {
            props.onNext(values)
          }}
          disabled={Object.keys(validate(values)).length > 0}
        />
      </Stack>
    </>
  )
}
