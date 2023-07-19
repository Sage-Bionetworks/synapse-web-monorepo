import { Box, Typography } from '@mui/material'
import React, { useMemo } from 'react'
import { SynapsePriceTableCell } from './SynapsePriceTableCell'
import { CheckTwoTone } from '@mui/icons-material'

export type SynapsePriceFeatureRowProps = {
  featureDescription: string
  standardPlanValue?: boolean | string
  managedPlanValue?: boolean | string
  dataCoordinationPlanValue?: boolean | string
}

export const SynapsePriceFeatureRow: React.FunctionComponent<
  SynapsePriceFeatureRowProps
> = ({
  featureDescription,
  standardPlanValue,
  managedPlanValue,
  dataCoordinationPlanValue,
}) => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: '40% 20% 20% 20%',
        marginBottom: '2px',
      }}
    >
      <SynapsePriceTableCell
        sx={{ backgroundColor: '#e8edf1', paddingTop: '20px' }}
      >
        <Typography variant="body2">{featureDescription}</Typography>
      </SynapsePriceTableCell>
      <SynapsePriceTableCell
        sx={{ backgroundColor: '#c4d9e4', paddingTop: '20px' }}
      >
        <Typography variant="body2">
          {standardPlanValue && 'boolean' === typeof standardPlanValue ? (
            <CheckTwoTone />
          ) : (
            standardPlanValue
          )}
        </Typography>
      </SynapsePriceTableCell>
      <SynapsePriceTableCell
        sx={{ backgroundColor: '#f9d6c0', paddingTop: '20px' }}
      >
        <Typography variant="body2">
          {managedPlanValue && 'boolean' === typeof managedPlanValue ? (
            <CheckTwoTone />
          ) : (
            managedPlanValue
          )}
        </Typography>
      </SynapsePriceTableCell>
      <SynapsePriceTableCell
        sx={{ backgroundColor: '#d2e6d5', paddingTop: '20px' }}
      >
        <Typography variant="body2">
          {dataCoordinationPlanValue &&
          'boolean' === typeof dataCoordinationPlanValue ? (
            <CheckTwoTone />
          ) : (
            dataCoordinationPlanValue
          )}
        </Typography>
      </SynapsePriceTableCell>
    </Box>
  )
}
