import { AccessRequirement } from '@sage-bionetworks/synapse-types'
import React from 'react'
import { Checkbox } from '../widgets/Checkbox'
import { hasAccessorRequirement } from './GovernanceUtils'
import { MANAGED_ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE } from '@sage-bionetworks/synapse-types'
import { Box, Typography } from '@mui/material'

type AccessorRequirementsProps = {
  accessRequirement: AccessRequirement
  onChange: (updatedAr: AccessRequirement) => void
}

export const AccessorRequirements: React.FunctionComponent<
  AccessorRequirementsProps
> = (props: AccessorRequirementsProps) => {
  const { accessRequirement, onChange } = props

  return (
    <>
      {hasAccessorRequirement(accessRequirement) && (
        <>
          <Box mb={2}>
            <Typography variant="body1" fontWeight={700}>
              Accessor requirements
            </Typography>
            <Checkbox
              label="Accessors must be certified."
              checked={accessRequirement.isCertifiedUserRequired}
              onChange={(checked: boolean) =>
                onChange({
                  ...accessRequirement,
                  isCertifiedUserRequired: checked,
                })
              }
            />
            <Checkbox
              label="Accessors must have a validated profile."
              checked={accessRequirement.isValidatedProfileRequired}
              onChange={(checked: boolean) =>
                onChange({
                  ...accessRequirement,
                  isValidatedProfileRequired: checked,
                })
              }
            />
            {accessRequirement.concreteType ===
              MANAGED_ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE && (
              <Checkbox
                label="Accessors must use two-factor authentication (2FA)."
                checked={accessRequirement.isTwoFaRequired}
                onChange={(checked: boolean) =>
                  onChange({
                    ...accessRequirement,
                    isTwoFaRequired: checked,
                  })
                }
              />
            )}
          </Box>
        </>
      )}
    </>
  )
}
