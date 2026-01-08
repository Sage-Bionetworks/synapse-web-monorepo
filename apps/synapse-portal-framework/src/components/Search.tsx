import React from 'react'
import { useState } from 'react'
import { TextField, Button, InputAdornment } from '@mui/material'

type SearchProps = {
  onSearch: (searchText: string) => void
}

const Search = ({ onSearch }: SearchProps): React.ReactNode => {
  const [searchText, setSearchText] = useState<string>('')

  return (
    <div className="center-content">
      <div className="searchToolsRow">
        <div className="searchInputWithIcon">
          <TextField
            sx={{
              width: '100%',
              '.MuiInputBase-root': {
                backgroundColor: '#FFFF',
                outline: '1.5px rgba(118, 118, 118, 0.395) solid',
                padding: '0px',
              },
            }}
            type="search"
            placeholder=""
            value={searchText}
            onChange={event => {
              setSearchText(event.target.value)
            }}
            onKeyPress={evt => {
              if (evt.key === 'Enter') {
                onSearch(searchText)
              }
            }}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <Button
                      variant="contained"
                      sx={{
                        px: '25px',
                        py: '9px',
                        borderRadius: '0px 4px 4px 0px',
                      }}
                      onClick={() => onSearch(searchText)}
                    >
                      Search
                    </Button>
                  </InputAdornment>
                ),
              },
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Search
