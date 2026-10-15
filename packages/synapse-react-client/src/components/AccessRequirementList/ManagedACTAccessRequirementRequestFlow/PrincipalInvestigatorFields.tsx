import { Box, TextField, Typography } from '@mui/material'
import { TYPE_FILTER } from '@sage-bionetworks/synapse-types'
import UserSearchBox from '../../UserSearchBox/UserSearchBox'

export type PrincipalInvestigatorFieldsProps = {
  userId: string | null
  email: string
  disabled: boolean
  onUserIdChange: (userId: string | null) => void
  onEmailChange: (email: string) => void
}

/**
 * Collects the Synapse account and institutional email of the Principal Investigator. Required by the eDUC signing flow.
 */
export default function PrincipalInvestigatorFields(
  props: PrincipalInvestigatorFieldsProps,
) {
  const { userId, email, disabled, onUserIdChange, onEmailChange } = props
  return (
    <Box sx={{ mb: '20px' }}>
      <Typography
        component="label"
        htmlFor="pi-user"
        variant="body1"
        sx={{ display: 'block', mb: 1 }}
      >
        Synapse username of your Project Lead or PI
        <Box component="span" sx={{ color: 'error.main' }}>
          {' '}
          *
        </Box>
      </Typography>
      <UserSearchBox
        inputId="pi-user"
        typeFilter={TYPE_FILTER.USERS_ONLY}
        value={userId}
        onChange={principalId => onUserIdChange(principalId)}
        placeholder="Search Synapse for your Project Lead or PI"
      />
      <TextField
        id="pi-email"
        label="Institutional Email of your Project Lead or PI"
        type="email"
        placeholder="pi@example.edu"
        fullWidth
        disabled={disabled}
        value={email}
        required
        onChange={e => onEmailChange(e.target.value)}
        sx={{ mt: 2 }}
      />
    </Box>
  )
}
