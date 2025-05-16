import { Box, Typography, Button } from '@mui/material'
import HeaderSearchBox from '../HeaderSearchBox'
import { Query, TextMatchesQueryFilter } from '@sage-bionetworks/synapse-types'

export type StandardsHeaderProps = {
  dataSql: string
}

const StandardsHeader = (props: StandardsHeaderProps) => {
  const searchPlaceholder = 'Search for a biomedical data standard'
  const searchExampleTerms = [
    'MRI data processing',
    'Waveform interoperability',
    'Ophthalmic imaging',
    'Integration',
    'Acquisition',
    'File formats',
    'Ontologies',
    'Lab automation',
  ]

  const content = (
    <>
      <Box
        sx={{
          margin: 0,
          color: '#FFFF',
        }}
      >
        <Typography
          variant="headline1"
          sx={{
            fontSize: { xs: '42px', md: '48px' },
            fontWeight: 'bold',
            marginBottom: '15px',
            lineHeight: '54px',
          }}
        >
          Welcome to the Bridge2AI Standards Explorer
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: '18px', lineHeight: '144%' }}
        >
          This portal is designed to support the Grand Challenges in biomedical
          data and artificial intelligence. By categorizing standards based on
          these challenges, the registry helps researchers and developers
          identify relevant tools and guidelines, foster collaboration, and
          accelerates progress toward solving complex scientific problems.
        </Typography>
        <Button
          variant="outlined"
          size="large"
          color="lightPrimary"
          href="/Explore"
          sx={{ mt: '20px' }}
        >
          Explore research Standards
        </Button>
        <Button
          variant="outlined"
          size="large"
          color="lightPrimary"
          href="/DataSetExplore"
          sx={{ mt: '20px', marginLeft: '10px' }}
        >
          Explore data sets
        </Button>
      </Box>
    </>
  )
  return (
    <header id="header">
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px 0',
        }}
      >
        <Box
          sx={{
            margin: 0,
            flex: 1,
            padding: { xs: '40px', lg: '40px 80px' },
          }}
        >
          {content}
        </Box>
        <HeaderSearchBox
          searchExampleTerms={searchExampleTerms}
          searchPlaceholder={searchPlaceholder}
          callback={searchString => {
            const filter: TextMatchesQueryFilter = {
              concreteType:
                'org.sagebionetworks.repo.model.table.TextMatchesQueryFilter',
              searchExpression: searchString,
            }
            const query: Query = {
              sql: props.dataSql,
              additionalFilters: [filter],
            }
            window.location.assign(
              `/Explore/?QueryWrapper0=${JSON.stringify(query)}`,
            )
          }}
          sx={{
            flex: 1,
            '& > :first-child': {
              background: 'rgba(184, 204, 226, 0.60)',
            },
          }}
        />
      </Box>
    </header>
  )
}

export default StandardsHeader
