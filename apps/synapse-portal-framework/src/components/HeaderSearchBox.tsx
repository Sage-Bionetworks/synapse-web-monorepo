import {
  Box,
  Stack,
  SxProps,
  Typography,
  Button,
  lighten,
  useTheme,
} from '@mui/material'
import PortalFullTextSearchField from './PortalSearch/PortalFullTextSearchField'
import { spreadSx } from 'synapse-react-client/theme/spreadSx'
import { useSearchParams } from 'react-router'

type HeaderSearchBoxProps = {
  searchPlaceholder?: string
  searchExampleTerms?: string[]
  path?: string
  sx?: SxProps
}

const HeaderSearchBox = ({
  searchPlaceholder,
  searchExampleTerms,
  path,
  sx,
}: HeaderSearchBoxProps) => {
  const [, setSearchParams] = useSearchParams()
  const theme = useTheme()

  const handleTermClick = (term: string) => {
    const trimmedTerm = term.trim()
    setSearchParams({ FTS_SEARCH_TERM: trimmedTerm })
    if (path) {
      window.location.pathname = `${path}`
    }
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
          sx={{
            display: 'flex',
            gap: '20px',
            alignItems: 'center',
            height: '48px',
          }}
        >
          <PortalFullTextSearchField
            placeholder={searchPlaceholder}
            path={path}
            sx={{
              margin: 0,
              height: '100%',
              borderRadius: '3px',
              '.MuiInputBase-root': {
                height: '100%',
                borderRadius: '3px',
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
                    borderRadius: '30px',
                    border: '1px solid',
                    borderColor: lighten(theme.palette.primary.main, 0.9),
                    padding: '7px 9px',
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
                      fontSize: '16px',
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
