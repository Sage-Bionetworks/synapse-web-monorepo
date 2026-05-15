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
import defaultStyles from './HeaderSearchBox.module.scss'
import v2Styles from './HeaderSearchBoxV2.module.scss'
import v3Styles from './HeaderSearchBoxV3.module.scss'
import { KeyboardArrowDown } from '@mui/icons-material'
import { useState } from 'react'
import {
  SEARCH_TERM,
  SEARCH_ROLE,
} from 'synapse-react-client/utils/functions/SqlFunctions'
import { useChatDialogContext } from './ChatDialogContext'
import { useSynapseContext } from 'synapse-react-client'
import { useGetFeatureFlag } from 'synapse-react-client/synapse-queries/index'
import { useGetSuggestionsForSearchIndex } from 'synapse-react-client/components/SearchQueryWrapper/SearchQueryUseQueryOptions'

type SearchIndexConfig = {
  searchIndexId: string
  autocompleteFieldName: string
}

type HeaderSearchBoxProps = {
  searchPlaceholder?: string
  searchExampleTerms?: string[]
  hideChatOption?: boolean
  // in practice, either set the path or callback.
  path?: string // redirect to this path with the search term in the search params
  callback?: (searchString: string) => void // call back this function with the search term
  sx?: SxProps
  roles?: { value: string; label: string }[]
  variant?: 'default' | 'v2' | 'v3'
  searchIndexConfig?: SearchIndexConfig
}

const HeaderSearchBox = ({
  searchPlaceholder,
  searchExampleTerms,
  path,
  callback,
  sx,
  roles,
  variant = 'default',
  searchIndexConfig,
  hideChatOption = false,
}: HeaderSearchBoxProps): React.ReactNode => {
  const styles = {
    ...defaultStyles,
    ...(variant === 'v2' ? v2Styles : {}),
    ...(variant === 'v3' ? v3Styles : {}),
  }
  const [role, setRole] = useState('')
  const [mode, setMode] = useState<'Chat' | 'Search'>('Search')
  const theme = useTheme()
  const navigate = useNavigate()
  const { isAuthenticated } = useSynapseContext()
  const chatDialogContext = useChatDialogContext()
  const isChatAvailable = chatDialogContext?.isChatAvailable
  const isChatEnabled = useGetFeatureFlag(FeatureFlagEnum.PORTAL_CHAT)
  const showChatOption =
    isAuthenticated &&
    chatDialogContext &&
    isChatEnabled &&
    isChatAvailable &&
    !hideChatOption
  const getSuggestions = useGetSuggestionsForSearchIndex(
    searchIndexConfig?.searchIndexId ?? '',
    searchIndexConfig?.autocompleteFieldName,
  )

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
            getSuggestions={searchIndexConfig ? getSuggestions : undefined}
          />
        </Box>
        <Stack className={styles.exampleSearchesSection}>
          {variant === 'default' && (
            <Typography className={styles.exampleSearchesLabel}>
              Example searches
            </Typography>
          )}
          <Box className={styles.exampleTermsContainer}>
            {searchExampleTerms &&
              searchExampleTerms.map(term => (
                <Button
                  key={term}
                  variant={variant === 'default' ? 'contained' : 'outlined'}
                  onClick={() => handleTermClick(term)}
                  className={styles.exampleTermButton}
                  sx={
                    variant === 'default'
                      ? {
                          borderColor: lighten(theme.palette.primary.main, 0.9),
                          backgroundColor: lighten(
                            theme.palette.primary.main,
                            0.8,
                          ),
                          '&:hover': {
                            background: lighten(
                              theme.palette.primary.main,
                              0.7,
                            ),
                          },
                        }
                      : undefined
                  }
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
