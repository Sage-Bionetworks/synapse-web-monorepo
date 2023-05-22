import React, { ChangeEvent } from 'react'
import InputBase from '@mui/material/InputBase'
import SearchIcon from '@mui/icons-material/Search'
import { Box } from '@mui/system'

export interface ChallengeTeamSearchProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export const ChallengeTeamSearch = ({ onChange }: ChallengeTeamSearchProps) => {
  return (
    <Box
      component="form"
      sx={{
        p: '4px 4px',
        display: 'flex',
        flexGrow: 1,
        border: '1px solid #F2F2F2',
        '& .Mui-focused': {
          border: 'none',
          boxShadow: 'none',
        },
      }}
    >
      <Box sx={{ margin: '0px 0 -4px 8px' }} aria-label="search">
        <SearchIcon sx={{ color: '#878E95' }} />
      </Box>
      <InputBase
        onChange={onChange}
        sx={{
          '& .MuiInputBase-input': { p: '1px 8px' },
          ml: 1,
          flex: 1,
          backgroundColor: 'white',
        }}
        placeholder="Search all teams"
        inputProps={{ 'aria-label': 'search all teams' }}
      />
    </Box>
  )
}
