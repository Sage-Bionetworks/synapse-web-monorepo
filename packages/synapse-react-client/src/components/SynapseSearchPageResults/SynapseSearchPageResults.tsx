import { Box, TextField, InputAdornment, Button } from '@mui/material'
import SynapseSearchResultsCard from './SynapseSearchResultsCard'
import SearchIcon from '@mui/icons-material/Search'
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined'
import { SearchResults } from '@sage-bionetworks/synapse-types'

export type SynapseSearchPageResultsProps = {
  results: SearchResults
}

export function SynapseSearchPageResults(props: SynapseSearchPageResultsProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '200px',
          bgcolor: theme => theme.palette.primary.dark,
          py: '40px',
          px: '80px',
          gap: '16px',
        }}
      >
        <TextField
          placeholder="Search…"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon
                    sx={{
                      color: 'secondary.600',
                    }}
                  />
                </InputAdornment>
              ),
            },
          }}
        />
        <Button
          variant="outlined"
          endIcon={<FilterAltOutlinedIcon />}
          sx={{
            py: '10px',
            px: '20px',
            width: '200px',
            bgcolor: 'grey.700',
            color: 'white',
            '&:hover': {
              //remove hover
              boxShadow: 'none',
              color: 'white',
            },
          }}
        >
          Filter By
        </Button>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          pr: '150px',
          py: '25px',
          gap: '25px',
        }}
      >
        {props.results.hits.map((hit: any) => (
          <SynapseSearchResultsCard
            key={hit.name}
            entityId={hit.id}
            name={hit.name}
            entityType={hit.node_type}
            modifiedOn={hit.modified_on}
          />
        ))}
      </Box>
    </Box>
  )
}
