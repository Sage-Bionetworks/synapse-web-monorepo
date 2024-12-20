import {
  Typography,
  Button,
  Box,
  Skeleton,
  Link as MuiLink,
} from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { SynapseConstants, SynapseUtilityFunctions } from '../../utils'
import { QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import { getFieldIndex } from '../../utils/functions/queryUtils'
import useGetQueryResultBundle from '../../synapse-queries/entity/useGetQueryResultBundle'
import dayjs from 'dayjs'
import { formatDate } from '../../utils/functions/DateFormatter'
import { Row } from '@sage-bionetworks/synapse-types'
import { Link } from 'react-router-dom'
import { convertDoiToLink } from '../../utils/functions/DoiUtils'

export type RecentPublicationsGridProps = {
  sql: string
  buttonLink?: string
  buttonLinkText?: string
  summaryText?: string
}

type PublicationCardProps = {
  pub: Row
}

function RecentPublicationsGrid(props: RecentPublicationsGridProps) {
  const { sql, buttonLink, buttonLinkText, summaryText } = props

  const entityId = SynapseUtilityFunctions.parseEntityIdFromSqlStatement(sql)

  const queryBundleRequest: QueryBundleRequest = {
    partMask:
      SynapseConstants.BUNDLE_MASK_QUERY_SELECT_COLUMNS |
      SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    entityId,
    query: {
      sql,
    },
  }
  const { data: queryResultBundle, isLoading } =
    useGetQueryResultBundle(queryBundleRequest)

  const dataRows = queryResultBundle?.queryResult!.queryResults.rows ?? []

  enum ExpectedColumns {
    CATEGORY = 'Category',
    JOURNAL = 'Journal',
    TITLE = 'Title',
    PUBLICATION_DATE = 'publicationDate',
    DOI = 'DOI',
  }

  const categoryColIndex = getFieldIndex(
    ExpectedColumns.CATEGORY,
    queryResultBundle,
  )
  const journalColIndex = getFieldIndex(
    ExpectedColumns.JOURNAL,
    queryResultBundle,
  )
  const titleColIndex = getFieldIndex(ExpectedColumns.TITLE, queryResultBundle)
  const publicationDateColIndex = getFieldIndex(
    ExpectedColumns.PUBLICATION_DATE,
    queryResultBundle,
  )
  const doiColIndex = getFieldIndex(ExpectedColumns.DOI, queryResultBundle)

  const PublicationCard = ({ pub }: PublicationCardProps) => (
    <Grid
      key={pub.rowId}
      height={{ xs: 'auto', sm: 'initial' }}
      minWidth={{ xs: '280px', lg: 'initial' }}
      maxWidth={{ xs: '450px', lg: 'initial' }}
    >
      <Box sx={{ height: '100%' }}>
        {isLoading ? (
          <Skeleton variant="rectangular" height={275} width="100%" />
        ) : (
          <div>
            {pub.values[categoryColIndex] && (
              <Typography
                variant="overline"
                fontSize={'14px'}
                sx={{
                  backgroundColor: 'grey.300',
                  borderRadius: '3px',
                  padding: '4px 8px',
                  border: 'none',
                  lineHeight: 'initial',
                }}
              >
                {pub.values[categoryColIndex]}
              </Typography>
            )}
            <Typography
              variant="headline2"
              color="grey.1000"
              fontSize={'21px'}
              sx={{
                padding: '20px 0px',
              }}
            >
              <MuiLink
                href={convertDoiToLink(pub.values[doiColIndex] || '')}
                target="_blank"
                sx={{
                  color: 'inherit',
                  textDecoration: 'none',
                  fontWeight: 'inherit',
                  '&:hover': {
                    textDecoration: 'none',
                  },
                }}
              >
                {pub.values[titleColIndex]}
              </MuiLink>
            </Typography>
            <Box display={'flex'} gap={'8px'} flexDirection={'column'}>
              <Typography
                variant="body1"
                color="grey.700"
                fontSize={'14px'}
                fontStyle={'italic'}
                lineHeight={1.35}
              >
                {pub.values[journalColIndex]}
              </Typography>
              <Typography
                variant="body1"
                color="grey.700"
                fontSize={'14px'}
                lineHeight={1.35}
                paddingBottom={{ xs: 0, md: '35px' }}
              >
                {pub.values[publicationDateColIndex] &&
                  formatDate(
                    dayjs(Number(pub.values[publicationDateColIndex])),
                    'MMMM, YYYY',
                  )}
              </Typography>
            </Box>
          </div>
        )}
      </Box>
    </Grid>
  )

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '3fr 1fr' },
        height: { xs: 'auto', md: 'initial' },
        gap: { xs: '24px', md: '80px' },
        padding: { xs: '40px', lg: '80px' },
      }}
    >
      <Box
        sx={{
          order: { xs: 1, md: 0 },
        }}
      >
        <Box
          sx={theme => ({
            display: 'grid',
            gap: '32px',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(auto-fill, minmax(280px, 1fr))',
              lg: 'repeat(auto-fill, minmax(255px, 1fr))',
              xl: 'repeat(auto-fill, minmax(322px, 1fr))',
            },
            [theme.breakpoints.down('sm')]: {
              '& > :nth-of-type(n+4)': {
                display: 'none',
              },
            },
          })}
        >
          {dataRows.map(pub => (
            <PublicationCard pub={pub} key={pub.rowId} />
          ))}
        </Box>
      </Box>
      <Box>
        <Box
          display="flex"
          flexDirection="column"
          gap="16px"
          sx={{
            borderTop: '3px solid',
            borderColor: 'grey.400',
            padding: '30px 0',
          }}
        >
          <Typography variant="headline2" color="grey.1000" fontSize={'24px'}>
            Recently Published
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontStyle: 'italic', color: 'grey.800' }}
          >
            {summaryText && summaryText}
          </Typography>
          {buttonLink && buttonLinkText && (
            <Button
              variant="contained"
              to={buttonLink}
              component={Link}
              sx={{
                whiteSpace: 'nowrap',
                alignSelf: 'flex-start',
                padding: '6px 24px',
                fontWeight: 600,
              }}
            >
              {buttonLinkText}
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  )
}

export default RecentPublicationsGrid
