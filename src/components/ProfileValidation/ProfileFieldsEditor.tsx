import { Box } from '@mui/material'
import React, { useState } from 'react'
import { FormControl, FormGroup, FormLabel } from 'react-bootstrap'
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
  return (
    <>
      <Box sx={{ marginBottom: theme.spacing(2) }}/*className="ProfileFieldsEditor bootstrap-4-backport ValidationSteps"*/>

        <FormGroup className="required">
          <FormLabel>First Name</FormLabel>
          <FormControl
            onChange={e => {
              verificationSubmission.firstName = e.target.value
              setFirstName(e.target.value)
            }}
            value={firstName}
          />
        </FormGroup>

        <FormGroup className="required">
          <FormLabel>Last Name</FormLabel>
          <FormControl
            onChange={e => {
              verificationSubmission.lastName = e.target.value
              setLastName(e.target.value)
            }}
            value={lastName}
          />
        </FormGroup>


        <FormGroup className="required">
          <FormLabel>Current Affiliation</FormLabel>
          <FormControl
            onChange={e => {
              verificationSubmission.company = e.target.value
              setCompany(e.target.value)
            }}
            value={company}
          />
        </FormGroup>

        <FormGroup className="required">
          <FormLabel>Location</FormLabel>
          <FormControl
            onChange={e => {
              verificationSubmission.location = e.target.value
              setLocation(e.target.value)
            }}
            value={location}
          />
        </FormGroup>

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
