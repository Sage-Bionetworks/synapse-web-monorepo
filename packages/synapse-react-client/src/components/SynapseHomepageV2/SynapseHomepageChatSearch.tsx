import {
  Box,
  FormControl,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  Select,
  useTheme,
} from '@mui/material'
import { Color } from '@mui/material/styles'
import { FormEventHandler, KeyboardEventHandler, useState } from 'react'
import { getSearchToken } from '../SynapseNavDrawer/SynapseNavDrawer'
import { parseSynId } from '@/utils/functions/RegularExpressions'

export type SynapseHomepageChatSearchProps = {
  gotoPlace: (href: string) => void
}
enum SearchMode {
  SEARCH = 0,
  CHAT = 1,
}

/**
 * Synapse Homepage Search component with a dropdown "autocomplete" menu of options.
 * SWC-7005: Not used in the current implementation of the Home Page, but there are plans to utilize it later.
 * @returns
 */
export function SynapseHomepageChatSearch({
  gotoPlace,
}: SynapseHomepageChatSearchProps) {
  const theme = useTheme()
  const [searchValue, setSearchValue] = useState('')
  const [chatValue, setChatValue] = useState('')
  const [mode, setMode] = useState(SearchMode.SEARCH)
  const executeSearch = () => {
    if (mode == SearchMode.SEARCH) {
      const searchValueCleaned = searchValue.toLowerCase().trim()

      // Check if the input is a valid Synapse ID with version
      const parsedSynId = parseSynId(searchValueCleaned)
      if (parsedSynId && parsedSynId.targetVersionNumber) {
        const synIdWithVersion = `${parsedSynId.targetId}.${parsedSynId.targetVersionNumber}`
        gotoPlace(`/Synapse:${synIdWithVersion}`)
        return
      }

      gotoPlace(`/Search:${getSearchToken(searchValueCleaned.split(/[ ,]+/))}`)
    } else {
      gotoPlace(`/Chat:initialMessage=${encodeURIComponent(chatValue)}`)
    }
  }
  const handleSubmit: FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault()
    executeSearch()
  }
  const handleKeyDown: KeyboardEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  > = event => {
    if (event.key === 'Enter') {
      event.preventDefault()
      executeSearch()
    }
  }

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <FormControl fullWidth sx={{ m: 1 }}>
        <OutlinedInput
          value={mode == SearchMode.SEARCH ? searchValue : chatValue}
          startAdornment={
            <InputAdornment
              position="start"
              sx={{ p: '0px', ml: '7px', mr: '13px' }}
            >
              <Select
                value={mode}
                sx={{
                  fontSize: '24px',
                  fontWeight: 400,
                  minWidth: '125px',
                  color: (theme.palette.secondary as unknown as Color)[600],
                  '& div[role="combobox"]': {
                    p: '14px 12px',
                  },
                }}
                onChange={v => {
                  setMode(v.target.value as SearchMode)
                  //restore search or chat value
                }}
              >
                <MenuItem value={SearchMode.SEARCH}>Search</MenuItem>
                <MenuItem value={SearchMode.CHAT}>Chat</MenuItem>
              </Select>
            </InputAdornment>
          }
          placeholder={
            mode == SearchMode.SEARCH ? 'Search Synapse' : 'Ask a question'
          }
          sx={{ fontSize: '24px', borderRadius: 96.6 }}
          onChange={event => {
            if (mode == SearchMode.SEARCH) {
              setSearchValue(event.target.value)
            } else {
              setChatValue(event.target.value)
            }
          }}
          onKeyDown={handleKeyDown}
        />
      </FormControl>
    </Box>
  )
}
