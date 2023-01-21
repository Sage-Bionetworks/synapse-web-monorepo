import {
  Box,
  InputLabel,
  TextField,
  formHelperTextClasses,
  inputBaseClasses,
} from '@mui/material'
import { StyledFormControl } from 'components/StyledComponents'
import React, { useState } from 'react'

import theme from 'style/theme'
import { VerificationSubmission } from 'synapse-react-client/dist/utils/synapseTypes'

export type ProfileFieldsEditorProps = {
  verificationSubmission: VerificationSubmission
}
/**
 * Component edits the profile field values in the VerificationSubmission object provided in the prop.
 * Note that this is an anti-pattern, components should not typically modify the prop object values.
 * Implementing this way because this component is tied directly to the ProfileValidation parent (where the user is building up this verificaitonSubmission draft object before submitting).
 * @param props
 * @returns
 */
export const ProfileFieldsEditor = (props: ProfileFieldsEditorProps) => {
  const { verificationSubmission } = props
  const [firstName, setFirstName] = useState(verificationSubmission.firstName)

  const [lastName, setLastName] = useState(verificationSubmission.lastName)
  const [company, setCompany] = useState(verificationSubmission.company)
  const [location, setLocation] = useState(verificationSubmission.location)
  const requiredError = 'This field cannot be empty.'
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
            onChange={e => {
              verificationSubmission.firstName = e.target.value
              setFirstName(e.target.value)
            }}
            value={firstName}
            helperText={requiredError}
          />
        </StyledFormControl>

        <StyledFormControl fullWidth variant="standard" margin="normal">
          <InputLabel shrink htmlFor="lasttName" required>
            Last Name
          </InputLabel>
          <TextField
            fullWidth
            id="lastName"
            onChange={e => {
              verificationSubmission.lastName = e.target.value
              setLastName(e.target.value)
            }}
            value={lastName}
          />
        </StyledFormControl>

        <StyledFormControl
          fullWidth
          variant="standard"
          margin="normal"
          required
        >
          <InputLabel shrink htmlFor="affiliation">
            Current Affiliation
          </InputLabel>
          <TextField
            fullWidth
            id="affiliation"
            onChange={e => {
              verificationSubmission.company = e.target.value
              setCompany(e.target.value)
            }}
            value={company}
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
            fullWidth
            onChange={e => {
              verificationSubmission.location = e.target.value
              setLocation(e.target.value)
            }}
            value={location}
          />
        </StyledFormControl>

        {/* agendel TODO: do we need this     <FormGroup>
          <FormLabel>Email(s)</FormLabel>
          {verificationSubmission.emails.map((email, index) => (
            <p key={index}>{email}</p>
          ))}
          </FormGroup>*/}
      </Box>
    </>
  )
}
