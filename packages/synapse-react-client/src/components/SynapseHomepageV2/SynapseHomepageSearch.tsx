import React from 'react'
import { Search } from '@/assets/themed_icons'
import { useGetQueryResultBundleWithAsyncStatus } from '@/synapse-queries'
import { SynapseConstants } from '@/utils'
import {
  Autocomplete,
  Box,
  Color,
  FormControl,
  InputAdornment,
  Popper,
  PopperProps,
  styled,
  TextField,
  useTheme,
} from '@mui/material'
import { QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import { useState } from 'react'

export type SynapseHomepageSearchProps = {
  sourceTable: string
  gotoPlace: (href: string) => void
}

const boxShadow =
  '0px 4px 4px 0px rgba(0, 0, 0, 0.05), 0px 1px 1px 0px rgba(0, 0, 0, 0.05)'
const StyledPopper = styled(Popper)(() => ({
  '& .MuiAutocomplete-paper': {
    borderRadius: '0px 0px 40px 40px',
    p: '0px 20px 20px 20px',
    boxShadow,
  },
}))

const PopperAlwaysPlacedBelow = (props: PopperProps): React.ReactNode => {
  // Modifier necessary to force placement to remain on the bottom of the anchor element, despite not having enough space to render
  return (
    <StyledPopper
      {...props}
      placement="bottom"
      modifiers={[{ name: 'flip', enabled: false }]}
    />
  )
}

/**
 * Synapse Homepage Search component with a dropdown "autocomplete" menu of options.
 * SWC-7005: Not used in the current implementation of the Home Page, but there are plans to utilize it later.
 * @returns
 */
export function SynapseHomepageSearch({
  sourceTable,
  gotoPlace,
}: SynapseHomepageSearchProps) {
  const [isPopperOpen, setIsPopperOpen] = useState(false)
  const theme = useTheme()
  const partMask = SynapseConstants.BUNDLE_MASK_QUERY_RESULTS
  const request: QueryBundleRequest = {
    partMask,
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    entityId: sourceTable,
    query: {
      sql: `SELECT * FROM ${sourceTable}`,
      limit: 10,
    },
  }
  const { data: queryResultResponse, isLoading } =
    useGetQueryResultBundleWithAsyncStatus(request)

  const rowSet = queryResultResponse?.responseBody?.queryResult?.queryResults
  const headers = rowSet?.headers
  const topSearchedColIndex = headers?.findIndex(
    selectColumn => selectColumn.name == 'top_searched',
  )!
  return (
    <FormControl fullWidth sx={{ m: 1 }}>
      <Autocomplete
        freeSolo
        disableClearable
        // disable filtering
        filterOptions={options => options}
        options={
          rowSet && !isLoading
            ? rowSet.rows.map(row => row.values[topSearchedColIndex] ?? '')
            : ['...']
        }
        onChange={(_event, newValue: string | null) => {
          if (newValue) {
            gotoPlace(`/Search:${encodeURIComponent(newValue)}`)
          }
        }}
        slots={{
          popper: PopperAlwaysPlacedBelow,
        }}
        onOpen={() => setIsPopperOpen(true)}
        onClose={() => setIsPopperOpen(false)}
        groupBy={() => 'Most popular searches'}
        renderInput={params => (
          <TextField
            {...params}
            variant="outlined"
            placeholder="Search Synapse"
            slotProps={{
              input: {
                sx: {
                  fontSize: '24px',
                  borderRadius: isPopperOpen ? '40px 40px 0px 0px' : '40px',
                  backgroundColor: 'white',
                  boxShadow,
                },
                startAdornment: (
                  <InputAdornment position="start">
                    <Box
                      sx={{
                        ml: '15px',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <Search
                        size={32}
                        fill={
                          (theme.palette.secondary as unknown as Color)[600]
                        }
                      />
                    </Box>
                  </InputAdornment>
                ),
              },
            }}
          />
        )}
      />
    </FormControl>
  )
}
