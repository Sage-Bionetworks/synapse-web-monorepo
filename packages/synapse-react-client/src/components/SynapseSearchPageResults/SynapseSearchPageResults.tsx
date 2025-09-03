import { Box, TextField, InputAdornment, Button } from '@mui/material'
import SynapseSearchResultsCard from './SynapseSearchResultsCard'
import SearchIcon from '@mui/icons-material/Search'
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined'

export type SynapseSearchPageResultsProps = {
  synapseSearchResultsJson: {
    hits: Array<{
      id: string
      name: string
      node_type: string
      created_on: number
      modified_on: number
      created_by: string
      modified_by: string
    }>
  }
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
        {props.synapseSearchResultsJson.hits.map((hit: any) => (
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
