import React from 'react'
import { Chip, Typography } from '@mui/material'
import { SearchQuery, KeyValue } from '@sage-bionetworks/synapse-types'

const searchValues = [
  "Alzheimer's Disease",
  'Neurofibromatosis mouse models',
  'Cancer',
  'UK Biobank',
  'Single-cell analysis of breast cancer',
  'ROSMAP Religious Orders Study and Memory and Aging Project',
  'Retinal regeneration studies',
  'Machine Learning datasets',
]

const projectKeyValue: KeyValue = {
  key: 'node_type',
  value: 'project',
  not: false,
}

export type SynapseSearchChipsProps = {
  gotoPlace: (href: string) => void
}

export const SynapseSearchChips: React.FunctionComponent<
  SynapseSearchChipsProps
> = ({ gotoPlace }) => {
  return (
    <>
      {searchValues.map(value => {
        return (
          <Chip
            key={value}
            label={
              <Typography
                variant="body1"
                sx={{
                  fontSize: '18px',
                  fontWeight: 400,
                  p: '10px',
                }}
              >
                {value}
              </Typography>
            }
            onClick={() => {
              const searchQuery: SearchQuery = {
                queryTerm: [value],
                booleanQuery: value == 'Cancer' ? [projectKeyValue] : undefined,
              }
              gotoPlace(`/Search:${JSON.stringify(searchQuery)}`)
            }}
            variant="outlined"
            // by default, on hover the background color changes to mostly transparent (4%), which looks terrible on top of the header splash image
            sx={{
              color: 'secondary.600',
              backgroundColor: 'secondary.100',
              borderWidth: '0px',
              '&:hover': { backgroundColor: '#B5D3CE !important' },
            }}
          />
        )
      })}
    </>
  )
}
