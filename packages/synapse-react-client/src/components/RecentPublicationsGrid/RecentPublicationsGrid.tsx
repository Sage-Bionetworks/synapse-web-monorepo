import React from 'react'
import { Grid, Card, CardContent, Typography, Button, Box } from '@mui/material'
import { SynapseConstants, SynapseUtilityFunctions } from '../../utils'
import { QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import { getFieldIndex } from '../../utils/functions/queryUtils'
import useGetQueryResultBundle from '../../synapse-queries/entity/useGetQueryResultBundle'
import dayjs from 'dayjs'
import { formatDate } from '../../utils/functions/DateFormatter'

export type RecentPublicationsGridProps = {
  sql: string
  buttonLink?: string
  buttonLinkText?: string
  summaryText?: string
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
  const { data: queryResultBundle } =
    useGetQueryResultBundle(queryBundleRequest)

  const dataRows = queryResultBundle?.queryResult!.queryResults.rows ?? []

  enum ExpectedColumns {
    TAG = 'Tag',
    JOURNAL = 'Journal',
    TITLE = 'Title',
    PUBLICATION_DATE = 'publicationDate',
  }

  const tagColIndex = getFieldIndex(ExpectedColumns.TAG, queryResultBundle)
  const journalColIndex = getFieldIndex(
    ExpectedColumns.JOURNAL,
    queryResultBundle,
  )
  const titleColIndex = getFieldIndex(ExpectedColumns.TITLE, queryResultBundle)
  const publicationDateColIndex = getFieldIndex(
    ExpectedColumns.PUBLICATION_DATE,
    queryResultBundle,
  )

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '3fr 1fr' },
        gap: { xs: '38px', md: '80px' },
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          order: { xs: 1, md: 0 },
        }}
      >
        {dataRows.map(pub => (
          <Grid item xs={12} sm={6} md={4} key={pub.rowId}>
            <Card sx={{ height: '100%', boxShadow: 'none', border: 'none' }}>
              <CardContent>
                <Box display={'flex'} gap={'6px'} flexWrap={'wrap'}>
                  {pub.values[tagColIndex] &&
                    JSON.parse(pub.values[tagColIndex] as string).map(
                      (tag: string, index: number) => (
                        <Typography
                          key={index}
                          variant="overline"
                          sx={{
                            backgroundColor: '#EAECEE',
                            borderRadius: '3px',
                            padding: '4px 8px',
                            border: 'none',
                            lineHeight: 'initial',
                          }}
                        >
                          {tag}
                        </Typography>
                      ),
                    )}
                </Box>
                <Typography
                  variant="headline2"
                  sx={{
                    padding: '20px 0px',
                  }}
                >
                  {pub.values[titleColIndex]}
                </Typography>
                <Typography
                  variant="body1"
                  color="#71767F"
                  sx={{
                    fontStyle: 'italic',
                    fontSize: '14px',
                  }}
                >
                  {pub.values[journalColIndex]}
                </Typography>
                <Typography
                  variant="body1"
                  color="#71767F"
                  sx={{ fontSize: '14px' }}
                >
                  {pub.values[publicationDateColIndex] &&
                    formatDate(
                      dayjs(Number(pub.values[publicationDateColIndex])),
                      'MMMM, YYYY',
                    )}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box
        display="flex"
        flexDirection="column"
        gap="16px"
        sx={{
          padding: { xs: '0 16px' },
        }}
      >
        <Typography variant="headline2" paddingTop="26px">
          Recently Published
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontStyle: 'italic', color: '#4A5056' }}
        >
          {summaryText && summaryText}
        </Typography>
        {buttonLink && buttonLinkText && (
          <Button
            variant="contained"
            color="primary"
            href={buttonLink}
            sx={{
              whiteSpace: 'nowrap',
              alignSelf: 'flex-start',
            }}
          >
            {buttonLinkText}
          </Button>
        )}
      </Box>
    </Box>
  )
}

export default RecentPublicationsGrid
