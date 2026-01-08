import React from 'react'
import useGetQueryResultBundle from '@/synapse-queries/entity/useGetQueryResultBundle'
import { formatDate } from '@/utils/functions/DateFormatter'
import { parseEntityIdFromSqlStatement } from '@/utils/functions/index'
import { getFieldIndex } from '@/utils/functions/queryUtils'
import { convertDoiToLink } from '@/utils/functions/RegularExpressions'
import {
  BUNDLE_MASK_QUERY_RESULTS,
  BUNDLE_MASK_QUERY_SELECT_COLUMNS,
} from '@/utils/SynapseConstants'
import { Box, Chip, Link as MuiLink, Skeleton, Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import { QueryBundleRequest, Row } from '@sage-bionetworks/synapse-types'
import dayjs from 'dayjs'
import PortalSectionHeader from '../PortalSectionHeader'

export type RecentPublicationsGridProps = {
  sql: string
  buttonLink?: string
  buttonLinkText?: string
  summaryText?: string
}

type PublicationCardProps = {
  pub: Row
  isLoading: boolean
  categoryColIndex: number
  titleColIndex: number
  journalColIndex: number
  publicationDateColIndex: number
  doiColIndex: number
}

const PublicationCard = ({
  pub,
  isLoading,
  categoryColIndex: _categoryColIndex, // PORTALS-3426 - category was dropped
  titleColIndex,
  journalColIndex,
  publicationDateColIndex,
  doiColIndex,
}: PublicationCardProps): React.ReactNode => (
  <Grid
    key={pub.rowId}
    sx={{
      height: { xs: 'auto', sm: 'initial' },
      minWidth: { xs: '280px', lg: 'initial' },
      maxWidth: { xs: '450px', lg: 'initial' },
    }}
  >
    <Box sx={{ height: '100%' }}>
      {isLoading ? (
        <Skeleton variant="rectangular" height={275} width="100%" />
      ) : (
        <div>
          {pub.values[journalColIndex] && (
            <Chip
              label={
                <Typography
                  variant={'overline'}
                  sx={{ fontSize: '14px', lineHeight: 'initial' }}
                >
                  {pub.values[journalColIndex]}
                </Typography>
              }
              sx={{
                borderRadius: '3px',
                height: 'auto',
                padding: '4px 8px',
                '& .MuiChip-label': {
                  padding: '0',
                  display: 'block',
                  whiteSpace: 'normal',
                },
              }}
            />
          )}
          <Typography
            variant="headline2"
            sx={{
              color: 'grey.1000',
              fontSize: '21px',
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
          <Box
            sx={{
              display: 'flex',
              gap: '8px',
              flexDirection: 'column',
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: 'grey.700',
                fontSize: '14px',
                lineHeight: 1.35,
                paddingBottom: { xs: 0, md: '35px' },
              }}
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

function RecentPublicationsGrid(props: RecentPublicationsGridProps) {
  const { sql, buttonLink, buttonLinkText, summaryText } = props

  const entityId = parseEntityIdFromSqlStatement(sql)

  const queryBundleRequest: QueryBundleRequest = {
    partMask: BUNDLE_MASK_QUERY_SELECT_COLUMNS | BUNDLE_MASK_QUERY_RESULTS,
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
            <PublicationCard
              pub={pub}
              key={pub.rowId}
              isLoading={isLoading}
              categoryColIndex={categoryColIndex}
              titleColIndex={titleColIndex}
              journalColIndex={journalColIndex}
              publicationDateColIndex={publicationDateColIndex}
              doiColIndex={doiColIndex}
            />
          ))}
        </Box>
      </Box>
      <Box sx={{ paddingBottom: '30px' }}>
        <PortalSectionHeader
          title="Recently Published"
          summaryText={summaryText}
          buttonText={buttonLinkText}
          link={buttonLink}
          reverseButtonAndText
          sx={{
            h2: { fontSize: '24px', paddingTop: '30px', width: '100%' },
            '& p': { fontSize: '16px', lineHeight: '24px' },
          }}
        />
      </Box>
    </Box>
  )
}

export default RecentPublicationsGrid
