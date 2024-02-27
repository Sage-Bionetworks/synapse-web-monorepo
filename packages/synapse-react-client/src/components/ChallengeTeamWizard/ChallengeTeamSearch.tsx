import React, { ChangeEvent } from 'react'
import InputBase from '@mui/material/InputBase'
import SearchIcon from '@mui/icons-material/Search'
import { Box } from '@mui/system'

export interface ChallengeTeamSearchProps {
  rowCount: number
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export function ChallengeTeamSearch(props: ChallengeTeamSearchProps) {
  const { value, rowCount, onChange } = props
  const width = rowCount > 5 ? 'calc(100% - 8px)' : '100%'
  return (
    <Box
      sx={{
        p: '4px 4px',
        display: 'flex',
        flexGrow: 1,
        width,
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
        value={value}
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
