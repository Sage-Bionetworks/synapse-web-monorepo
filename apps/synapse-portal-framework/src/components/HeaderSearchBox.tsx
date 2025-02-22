import { Box, Stack, SxProps, Typography } from '@mui/material'
import PortalFullTextSearchField from './PortalSearch/PortalFullTextSearchField'
import { spreadSx } from 'synapse-react-client/theme/spreadSx'

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
  return (
    <Box
      sx={spreadSx(sx, {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: { xs: '40px', md: '40px 80px 40px 0' },
      })}
    >
      <Stack
        sx={{
          padding: '40px',
          gap: '30px',
          borderRadius: '6px',
          backdropFilter: 'blur(15px)',
          width: '660px',
        }}
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
                <Box
                  sx={{
                    borderRadius: '30px',
                    border: '1px solid #ECF2F5',
                    background: '#E5E9F1',
                    padding: '7px 9px',
                  }}
                >
                  <Typography sx={{ color: 'grey.800' }}>{term}</Typography>
                </Box>
              ))}
          </Box>
        </Stack>
      </Stack>
    </Box>
  )
}

export default HeaderSearchBox
