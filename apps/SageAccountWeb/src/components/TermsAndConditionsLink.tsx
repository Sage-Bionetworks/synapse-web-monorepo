import React from 'react'
import { Button, SxProps } from '@mui/material'
import { URL_TERMS_CONDITIONS_AGREEMENT } from 'synapse-react-client/dist/utils/SynapseConstants'

export type TermsAndConditionsLinkProps = {
  sx?: SxProps
}

export const TermsAndConditionsLink: React.FC<TermsAndConditionsLinkProps> = ({
  sx,
}) => {
  return (
    <Button
      variant="text"
      href={URL_TERMS_CONDITIONS_AGREEMENT}
      target="_blank"
      sx={sx}
    >
      View and Complete Terms and Conditions for Use
    </Button>
  )
}
