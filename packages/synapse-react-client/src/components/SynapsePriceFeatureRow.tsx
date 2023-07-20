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

export function getPriceFeatureCellContent(value?: boolean | string) {
  if (value === undefined) {
    return <></>
  }
  if ('boolean' === typeof value) {
    if (value) {
      return (
        <Typography variant="body2">
          <CheckTwoTone htmlColor="#878E95" />
        </Typography>
      )
    } else {
      return <></>
    }
  }
  return (
    <Typography
      variant="body2"
      sx={{ marginLeft: '10px', marginRight: '10px' }}
    >
      {value}
    </Typography>
  )
}

export const SynapsePriceFeatureRow: React.FunctionComponent<
  SynapsePriceFeatureRowProps
> = ({
  featureDescription,
  standardPlanValue,
  managedPlanValue,
  dataCoordinationPlanValue,
}) => {
  const standardPlanElement = useMemo(
    () => getPriceFeatureCellContent(standardPlanValue),
    [standardPlanValue],
  )
  const managedPlanElement = useMemo(
    () => getPriceFeatureCellContent(managedPlanValue),
    [managedPlanValue],
  )
  const dataCoordinationPlanElement = useMemo(
    () => getPriceFeatureCellContent(dataCoordinationPlanValue),
    [dataCoordinationPlanValue],
  )
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
        <Typography
          variant="body2"
          sx={{ marginLeft: '10px', marginRight: '10px' }}
        >
          {featureDescription}
        </Typography>
      </SynapsePriceTableCell>
      <SynapsePriceTableCell
        sx={{ backgroundColor: '#c4d9e4', paddingTop: '20px' }}
      >
        {standardPlanElement}
      </SynapsePriceTableCell>
      <SynapsePriceTableCell
        sx={{ backgroundColor: '#f9d6c0', paddingTop: '20px' }}
      >
        {managedPlanElement}
      </SynapsePriceTableCell>
      <SynapsePriceTableCell
        sx={{ backgroundColor: '#d2e6d5', paddingTop: '20px' }}
      >
        {dataCoordinationPlanElement}
      </SynapsePriceTableCell>
    </Box>
  )
}
