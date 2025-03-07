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
import PortalFullTextSearchField from './PortalSearch/PortalFullTextSearchField'
import { spreadSx } from 'synapse-react-client/theme/spreadSx'
import { useSearchParams } from 'react-router'
import { KeyboardArrowDown } from '@mui/icons-material'
import { useState } from 'react'

type HeaderSearchBoxProps = {
  searchPlaceholder?: string
  searchExampleTerms?: string[]
  path?: string
  sx?: SxProps
  roles: { value: string; label: string }[]
}

const HeaderSearchBox = ({
  searchPlaceholder,
  searchExampleTerms,
  path,
  sx,
  roles,
}: HeaderSearchBoxProps) => {
  const [role, setRole] = useState('')
  const [, setSearchParams] = useSearchParams()
  const theme = useTheme()

  const handleTermClick = (term: string) => {
    const trimmedTerm = term.trim()
    setSearchParams({ FTS_SEARCH_TERM: trimmedTerm, role: role || '' })
    if (path) {
      window.location.pathname = `${path}`
    }
  }

  const handleChange = (event: SelectChangeEvent) => {
    setRole(event.target.value)
  }

  return (
    <Box
      sx={spreadSx(sx, {
        padding: { xs: '40px', lg: '40px 80px 40px 0' },
        width: '100%',
      })}
    >
      <Stack
        sx={theme => ({
          padding: '40px',
          gap: '30px',
          borderRadius: '6px',
          backdropFilter: 'blur(15px)',
          [theme.breakpoints.up('lg')]: {
            minWidth: '660px',
          },
        })}
      >
        <Box
          sx={theme => ({
            display: 'flex',
            gap: '20px',
            alignItems: 'center',
            height: '48px',
            [theme.breakpoints.down('md')]: {
              flexDirection: 'column',
              marginBottom: '50px',
            },
          })}
        >
          <FormControl
            sx={theme => ({
              minWidth: '187px',
              minHeight: '38px',
              height: '100%',
              [theme.breakpoints.down('md')]: {
                width: '100%',
              },
            })}
          >
            <Select
              sx={{
                backgroundColor: '#FFFF',
                height: '100%',
                svg: {
                  color: '#878E95',
                  width: '24px',
                  height: '24px',
                  right: '10px',
                },
                '.MuiSelect-select': {
                  marginRight: '10px',
                },
              }}
              displayEmpty
              label="Select a Role"
              value={role}
              onChange={handleChange}
              IconComponent={KeyboardArrowDown}
            >
              <MenuItem disabled value="">
                <Typography
                  sx={{
                    fontStyle: 'italic',
                    color: 'grey.700',
                  }}
                >
                  Select a Role
                </Typography>
              </MenuItem>
              {roles.map(({ value, label }) => (
                <MenuItem key={value} value={value} sx={{ fontSize: '16px' }}>
                  <Typography
                    sx={{
                      display: 'inline',
                    }}
                  >
                    {label}
                  </Typography>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <PortalFullTextSearchField
            placeholder={searchPlaceholder}
            path={path}
            role={role}
            sx={{
              boxShadow: 'none',
              margin: 0,
              height: '100%',
              borderRadius: '3px',
              '.MuiInputBase-root': {
                height: '100%',
                borderRadius: '3px',
                fontSize: '16px',
              },
              '.MuiInputBase-input::placeholder': {
                fontStyle: 'italic',
                opacity: 1,
                color: 'grey.700',
              },
            }}
          />
        </Box>
        <Stack sx={{ gap: '8px' }}>
          <Typography sx={{ color: 'grey.900', fontWeight: 700 }}>
            Example searches
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px 6px;',
            }}
          >
            {searchExampleTerms &&
              searchExampleTerms.map(term => (
                <Button
                  variant="contained"
                  onClick={() => handleTermClick(term)}
                  sx={{
                    boxShadow: 'none !important',
                    borderRadius: '30px',
                    border: '1px solid',
                    borderColor: lighten(theme.palette.primary.main, 0.9),
                    padding: '1px 9px',
                    textDecoration: 'none !important',
                    backgroundColor: lighten(theme.palette.primary.main, 0.8),
                    '&:hover': {
                      background: lighten(theme.palette.primary.main, 0.7),
                    },
                  }}
                >
                  <Typography
                    sx={{
                      color: 'grey.800',
                    }}
                  >
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
