import { Typography } from '@mui/material'
import React from 'react'
import { SynapsePriceTableCell } from './SynapsePriceTableCell'
import { CheckTwoTone } from '@mui/icons-material'
import PlatformOfferingsGrid from './PlatformOfferingsGrid'

export type SynapsePriceFeatureRowProps = {
  featureDescription: string
  standardPlanValue?: boolean | string
  managedPlanValue?: boolean | string
  dataCoordinationPlanValue?: boolean | string
}
export function PriceFeatureCellContent(props: { value?: boolean | string }) {
  const { value } = props
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
  return (
    <PlatformOfferingsGrid
      sx={{
        marginBottom: '2px',
      }}
      role="row"
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
        <PriceFeatureCellContent value={standardPlanValue} />
      </SynapsePriceTableCell>
      <SynapsePriceTableCell
        sx={{ backgroundColor: '#f9d6c0', paddingTop: '20px' }}
      >
        <PriceFeatureCellContent value={managedPlanValue} />
      </SynapsePriceTableCell>
      <SynapsePriceTableCell
        sx={{ backgroundColor: '#d2e6d5', paddingTop: '20px' }}
      >
        <PriceFeatureCellContent value={dataCoordinationPlanValue} />
      </SynapsePriceTableCell>
    </PlatformOfferingsGrid>
  )
}
