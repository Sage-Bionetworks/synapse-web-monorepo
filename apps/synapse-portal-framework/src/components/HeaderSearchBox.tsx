import { FeatureFlagEnum } from '@sage-bionetworks/synapse-types'
import {
  Box,
  Stack,
  SxProps,
  Typography,
  Button,
  lighten,
  useTheme,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material'
import React from 'react'
import PortalFullTextSearchField from './PortalSearch/PortalFullTextSearchField'
import { useNavigate } from 'react-router'
import styles from './HeaderSearchBox.module.scss'
import { KeyboardArrowDown } from '@mui/icons-material'
import { useState } from 'react'
import {
  SEARCH_TERM,
  SEARCH_ROLE,
} from 'synapse-react-client/utils/functions/SqlFunctions'
import { useChatDialogContext } from './ChatDialogContext'
import { useSynapseContext } from 'synapse-react-client'
import { useGetFeatureFlag } from 'synapse-react-client/synapse-queries/index'

type HeaderSearchBoxProps = {
  searchPlaceholder?: string
  searchExampleTerms?: string[]
  // in practice, either set the path or callback.
  path?: string // redirect to this path with the search term in the search params
  callback?: (searchString: string) => void // call back this function with the search term
  sx?: SxProps
  roles?: { value: string; label: string }[]
}

const HeaderSearchBox = ({
  searchPlaceholder,
  searchExampleTerms,
  path,
  callback,
  sx,
  roles,
}: HeaderSearchBoxProps): React.ReactNode => {
  const [role, setRole] = useState('')
  const theme = useTheme()
  const navigate = useNavigate()
  const { isAuthenticated } = useSynapseContext()
  const chatDialogContext = useChatDialogContext()
  const isChatEnabled = useGetFeatureFlag(FeatureFlagEnum.PORTAL_CHAT)
  const showChatOption = isAuthenticated && chatDialogContext && isChatEnabled
  const [mode, setMode] = useState<'Chat' | 'Search'>('Search')

  const handleTermClick = (term: string) => {
    const trimmedTerm = term.trim()
    if (chatDialogContext && mode === 'Chat') {
      chatDialogContext.openChat(trimmedTerm)
    } else {
      if (path) {
        const params = new URLSearchParams()
        params.set(SEARCH_TERM, trimmedTerm)
        if (role) {
          params.set(SEARCH_ROLE, role)
        }
        navigate({
          pathname: path,
          search: `?${params.toString()}`,
        })
      }
      if (callback) {
        callback(trimmedTerm)
      }
    }
  }

  const handleChange = (event: SelectChangeEvent) => {
    setRole(event.target.value)
  }

  return (
    <Box className={styles.root} sx={sx}>
      <Stack className={styles.stack}>
        <Box className={styles.searchRow}>
          {showChatOption ? (
            <FormControl className={styles.formControl}>
              <Select
                className={styles.select}
                value={mode}
                onChange={e => setMode(e.target.value)}
                IconComponent={KeyboardArrowDown}
              >
                <MenuItem value="Search" className={styles.menuItem}>
                  <Typography className={styles.roleMenuItemLabel}>
                    Search
                  </Typography>
                </MenuItem>
                <MenuItem value="Chat" className={styles.menuItem}>
                  <Typography className={styles.roleMenuItemLabel}>
                    Chat
                  </Typography>
                </MenuItem>
              </Select>
            </FormControl>
          ) : (
            roles && (
              <FormControl className={styles.formControl}>
                <Select
                  className={styles.select}
                  displayEmpty
                  label="Select a Role"
                  value={role}
                  onChange={handleChange}
                  IconComponent={KeyboardArrowDown}
                >
                  <MenuItem disabled value="">
                    <Typography className={styles.roleMenuItemPlaceholder}>
                      Select a Role
                    </Typography>
                  </MenuItem>
                  {roles.map(({ value, label }) => (
                    <MenuItem
                      key={value}
                      value={value}
                      className={styles.menuItem}
                    >
                      <Typography className={styles.roleMenuItemLabel}>
                        {label}
                      </Typography>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )
          )}
          <PortalFullTextSearchField
            placeholder={searchPlaceholder}
            callback={handleTermClick}
            role={role}
            className={styles.searchField}
          />
        </Box>
        <Stack className={styles.exampleSearchesSection}>
          <Typography className={styles.exampleSearchesLabel}>
            Example searches
          </Typography>
          <Box className={styles.exampleTermsContainer}>
            {searchExampleTerms &&
              searchExampleTerms.map(term => (
                <Button
                  key={term}
                  variant="contained"
                  onClick={() => handleTermClick(term)}
                  className={styles.exampleTermButton}
                  sx={{
                    borderColor: lighten(theme.palette.primary.main, 0.9),
                    backgroundColor: lighten(theme.palette.primary.main, 0.8),
                    '&:hover': {
                      background: lighten(theme.palette.primary.main, 0.7),
                    },
                  }}
                >
                  <Typography className={styles.exampleTermLabel}>
                    {term}
                  </Typography>
                </Button>
              ))}
          </Box>
        </Stack>
      </Stack>
    </Box>
  )
}

export default HeaderSearchBox
