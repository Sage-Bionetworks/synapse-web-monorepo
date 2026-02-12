import { Chip, Typography } from '@mui/material'
import {
  SearchQuery,
  KeyValue,
  FeatureFlagEnum,
} from '@sage-bionetworks/synapse-types'
import { useGetFeatureFlag } from '@/synapse-queries/featureflags/useGetFeatureFlag'
import { DEFAULT_SEARCH_QUERY } from '@/utils/searchDefaults'

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

export function SynapseSearchChips({ gotoPlace }: SynapseSearchChipsProps) {
  const searchV2Enabled = useGetFeatureFlag(FeatureFlagEnum.SEARCHV2_ENABLED)

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
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {value}
              </Typography>
            }
            onClick={() => {
              const searchQuery: SearchQuery = {
                ...DEFAULT_SEARCH_QUERY,
                queryTerm: [value],
                booleanQuery: value == 'Cancer' ? [projectKeyValue] : undefined,
              }
              if (searchV2Enabled) {
                gotoPlace(
                  `/SearchV2:default?query=${encodeURIComponent(
                    JSON.stringify(searchQuery),
                  )}`,
                )
              } else {
                gotoPlace(`/Search:${JSON.stringify(searchQuery)}`)
              }
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
