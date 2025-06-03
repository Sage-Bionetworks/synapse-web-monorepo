import { Box, Button, Typography } from '@mui/material'
import {
  ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
  AccessRequirement,
  TERMS_OF_USE_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
} from '@sage-bionetworks/synapse-types'
import { useState } from 'react'
import ConfirmationDialog from '../ConfirmationDialog'
import { getOldAccessRequirementInstructions } from './GovernanceUtils'

type AccessRequirementTextInstructionsProps = {
  accessRequirement: AccessRequirement
  onConfirmDelete: (updatedAr: AccessRequirement) => void
  allowDelete?: boolean
}

export function AccessRequirementTextInstructions(
  props: AccessRequirementTextInstructionsProps,
) {
  const { accessRequirement, onConfirmDelete, allowDelete = false } = props

  const [open, setOpen] = useState<boolean>(false)
  const oldInstructions = getOldAccessRequirementInstructions(accessRequirement)

  return (
    <>
      {Boolean(oldInstructions) && (
        <Box
          sx={{
            mb: 2,
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontWeight: 700,
              mb: 1,
            }}
          >
            Legacy text-only instructions
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 1,
            }}
          >
            {oldInstructions}
          </Typography>
          {allowDelete && (
            <>
              <Button
                variant="contained"
                color="error"
                onClick={() => setOpen(true)}
              >
                Delete old instructions
              </Button>
              <ConfirmationDialog
                open={open}
                title="Are you sure?"
                content="Deleting the old instructions cannot be undone. Continue?"
                onCancel={() => setOpen(false)}
                onConfirm={() => {
                  const clearedInstructionsAr = { ...accessRequirement }
                  if (
                    clearedInstructionsAr.concreteType ===
                    TERMS_OF_USE_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE
                  ) {
                    clearedInstructionsAr.termsOfUse = undefined
                  } else if (
                    clearedInstructionsAr.concreteType ===
                    ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE
                  ) {
                    clearedInstructionsAr.actContactInfo = undefined
                  }
                  onConfirmDelete(clearedInstructionsAr)
                  setOpen(false)
                }}
              />
            </>
          )}
        </Box>
      )}
    </>
  )
}
