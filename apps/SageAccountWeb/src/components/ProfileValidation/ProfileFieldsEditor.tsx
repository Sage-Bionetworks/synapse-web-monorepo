import { Box, InputLabel, TextField } from '@mui/material'
import { StyledFormControl } from 'components/StyledComponents'
import React, { useState } from 'react'

import theme from 'style/theme'
import { VerificationSubmission } from 'synapse-react-client/dist/utils/synapseTypes'
import { ContinueButton } from './ContinueButton'

const keysToValidate = ['firstName', 'lastName', 'location', 'company']

function validate(values: Partial<VerificationSubmission>) {
  const requiredError = 'This field cannot be empty.'
  let errors = {}
  const keys = Object.keys(values)
  for (var key of keys) {
    if (keysToValidate.includes(key)) {
      if (!values[key]) {
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
export const ProfileFieldsEditor = (props: ProfileFieldsEditorProps) => {
  const [values, setValues] = useState({ ...props.verificationSubmission })
  const [errors] = useState({} as Partial<VerificationSubmission>)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues(values => ({
      ...values,
      [event.target.name]: event.target.value,
    }))
  }
  return (
    <>
      <Box
        sx={{
          marginBottom: theme.spacing(2),
        }}
      >
        <StyledFormControl fullWidth variant="standard" margin="normal">
          <InputLabel shrink htmlFor="firstName" required>
            First Name
          </InputLabel>
          <TextField
            fullWidth
            id="firstName"
            name="firstName"
            onChange={handleChange}
            value={values.firstName || ''}
            error={!!errors.firstName}
          />
        </StyledFormControl>
        <StyledFormControl fullWidth variant="standard" margin="normal">
          <InputLabel shrink htmlFor="lasttName" required>
            Last Name
          </InputLabel>
          <TextField
            fullWidth
            id="lastName"
            name="lastName"
            onChange={handleChange}
            value={values.lastName || ''}
            error={!!errors.lastName}
          />
        </StyledFormControl>
        <StyledFormControl
          fullWidth
          variant="standard"
          margin="normal"
          required
        >
          <InputLabel shrink htmlFor="company">
            Current Affiliation
          </InputLabel>
          <TextField
            fullWidth
            id="company"
            name="company"
            onChange={handleChange}
            value={values.company || ''}
            error={!!errors.company}
          />
        </StyledFormControl>
        <StyledFormControl
          fullWidth
          variant="standard"
          margin="normal"
          required
        >
          <InputLabel shrink htmlFor="location">
            Location
          </InputLabel>
          <TextField
            id="location"
            name="location"
            fullWidth
            onChange={handleChange}
            value={values.location || ''}
            error={!!errors.location}
          />
        </StyledFormControl>
        <ContinueButton
          onClick={() => {
            props.onNext(values)
          }}
          disabled={Object.keys(validate(values)).length > 0}
        />
      </Box>
    </>
  )
}
