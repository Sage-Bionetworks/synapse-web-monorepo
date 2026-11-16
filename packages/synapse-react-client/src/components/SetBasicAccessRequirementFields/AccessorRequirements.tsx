import {
  getIdentityProviderDisplayName,
  IDENTITY_PROVIDER_NAMES,
} from '@/utils/functions/IdentityProviderNameUtils'
import {
  AccessRequirement,
  JSON_SCHEMA_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
  MANAGED_ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
} from '@sage-bionetworks/synapse-types'
import { hasAccessorRequirement } from './GovernanceUtils'
import {
  Autocomplete,
  Box,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from '@mui/material'

export const IDENTITY_PROVIDERS_FIELD_LABEL =
  'Accessors must sign in with one of these identity providers'

type AccessorRequirementsProps = {
  accessRequirement: AccessRequirement
  onChange: (updatedAr: AccessRequirement) => void
}

export function AccessorRequirements(props: AccessorRequirementsProps) {
  const { accessRequirement, onChange } = props

  return (
    <>
      {hasAccessorRequirement(accessRequirement) && (
        <>
          <Box
            sx={{
              mb: 2,
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontWeight: 700,
              }}
            >
              Accessor requirements
            </Typography>
            <FormControlLabel
              control={<Checkbox />}
              label="Accessors must be certified."
              checked={accessRequirement.isCertifiedUserRequired}
              onChange={(_event, checked: boolean) =>
                onChange({
                  ...accessRequirement,
                  isCertifiedUserRequired: checked,
                })
              }
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Accessors must have a validated profile."
              checked={accessRequirement.isValidatedProfileRequired}
              onChange={(_event, checked: boolean) =>
                onChange({
                  ...accessRequirement,
                  isValidatedProfileRequired: checked,
                })
              }
            />
            {(accessRequirement.concreteType ===
              MANAGED_ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE ||
              accessRequirement.concreteType ===
                JSON_SCHEMA_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE) && (
              <>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Accessors must use two-factor authentication (2FA)."
                  checked={accessRequirement.isTwoFaRequired}
                  onChange={(_event, checked: boolean) =>
                    onChange({
                      ...accessRequirement,
                      isTwoFaRequired: checked,
                    })
                  }
                />
                <Autocomplete
                  multiple
                  disableCloseOnSelect
                  options={IDENTITY_PROVIDER_NAMES}
                  getOptionLabel={getIdentityProviderDisplayName}
                  value={accessRequirement.identityProviders ?? []}
                  onChange={(_event, identityProviders) =>
                    onChange({
                      ...accessRequirement,
                      identityProviders,
                    })
                  }
                  renderInput={params => (
                    <TextField
                      {...params}
                      label={IDENTITY_PROVIDERS_FIELD_LABEL}
                      helperText="Leave empty to accept any identity provider."
                    />
                  )}
                  sx={{ mt: 1 }}
                />
              </>
            )}
          </Box>
        </>
      )}
    </>
  )
}
