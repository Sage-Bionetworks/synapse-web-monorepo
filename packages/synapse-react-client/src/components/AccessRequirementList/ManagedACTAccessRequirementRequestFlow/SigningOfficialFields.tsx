import { Divider, TextField, Typography } from '@mui/material'
import { longFieldLabelSx } from './styles'

export type SigningOfficialFieldsProps = {
  name: string
  email: string
  disabled: boolean
  onNameChange: (name: string) => void
  onEmailChange: (email: string) => void
}

/**
 * Collects the signing official required to sign an eDUC.
 */
export default function SigningOfficialFields(
  props: SigningOfficialFieldsProps,
) {
  const { name, email, disabled, onNameChange, onEmailChange } = props
  return (
    <>
      <Typography variant={'headline3'} sx={{ mb: 2 }}>
        Signing Official
      </Typography>
      <Typography variant={'body1'} sx={{ ...longFieldLabelSx, mb: 2 }}>
        The signing official is a member of your institution with oversight
        authority who is NOT part of the study team (i.e., not the Project Lead,
        not a Data Requester or Collaborator, and not the Principal
        Investigator). They do not need a Synapse account but must be able to
        receive messages at the email address provided below.
      </Typography>
      <TextField
        id="so-name"
        label="First and last names of your Signing Official"
        placeholder="First and last name of signing official, ex: John Smith"
        fullWidth
        type="text"
        disabled={disabled}
        value={name}
        required
        onChange={e => onNameChange(e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        id="so-email"
        label="Institutional Email of your Signing Official"
        type="email"
        placeholder="Individual with signing authority, e.g. jane.smith@institution.edu"
        fullWidth
        disabled={disabled}
        value={email}
        required
        onChange={e => onEmailChange(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Divider sx={{ my: 4 }} />
    </>
  )
}
