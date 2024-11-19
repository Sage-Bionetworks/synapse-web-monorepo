import React from 'react'
import { Grid, Card, CardContent, Typography, Button, Box } from '@mui/material'
import { SynapseConstants, SynapseUtilityFunctions } from '../../utils'
import { QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import { getFieldIndex } from '../../utils/functions/queryUtils'
import useGetQueryResultBundle from '../../synapse-queries/entity/useGetQueryResultBundle'
import dayjs from 'dayjs'

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

  console.log('result', queryResultBundle)
  console.log('index', tagColIndex, journalColIndex, publicationDateColIndex)
  console.log('drows', dataRows)

  return (
    <Box sx={{ display: 'flex', gap: '80px' }}>
      <Grid container spacing={2}>
        {dataRows.map(pub => (
          <Grid item xs={12} sm={6} md={4} key={pub.rowId}>
            <Card sx={{ height: '100%', boxShadow: 'none', border: 'none' }}>
              <CardContent>
                <Typography
                  variant="overline"
                  sx={{
                    backgroundColor: '#EAECEE',
                    borderRadius: '3px',
                    padding: '4px 8px',
                  }}
                >
                  {pub.values[tagColIndex]}
                </Typography>
                <Typography variant="headline2" sx={{ padding: '20px 0px' }}>
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
                    dayjs(
                      new Date(
                        parseInt(pub.values[publicationDateColIndex] as string),
                      ),
                    ).format('MMMM, YYYY')}
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
          height: '4px',
          borderTop: '3px solid #DFE2E6',
          alignItems: 'flex-start',
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
            sx={{ width: 'auto' }}
          >
            {buttonLinkText}
          </Button>
        )}
      </Box>
    </Box>
  )
}

export default RecentPublicationsGrid
