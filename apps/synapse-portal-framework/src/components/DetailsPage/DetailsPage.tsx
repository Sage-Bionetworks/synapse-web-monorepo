import { DetailsPageProps } from '@/types/portal-util-types'
import { useGetPortalComponentSearchParams } from '@/utils/UseGetPortalComponentSearchParams'
import {
  Box,
  Button,
  Container,
  LinearProgress,
  Stack,
  Typography,
} from '@mui/material'
import { QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import pluralize from 'pluralize'
import { useMemo } from 'react'
import { Outlet, useLocation } from 'react-router'
import { DetailsPageContextProvider } from './DetailsPageContext'
import { DetailsPageDocumentMetadata } from './DetailsPageDocumentMetadata'
import { useScrollOnMount } from './utils'
import {
  parseEntityIdFromSqlStatement,
  getAdditionalFilters,
} from 'synapse-react-client/utils/functions/SqlFunctions'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import { useGetQueryResultBundleWithAsyncStatus } from 'synapse-react-client/synapse-queries/entity/useGetQueryResultBundle'

const goToExplorePage = () => {
  /*
    Below assumes that going from the details page url up one level will work,
    for the current set of portals this assumption will hold true.
  */
  const lastLocation = window.location.href.split('/')
  const lastPlace = lastLocation.slice(0, lastLocation.length - 1).join('/')
  window.location.assign(lastPlace)
}

/**
 * The details pages give a deeper dive into a particular portal section.
 *
 * It operates by pulling in a row of data and then using that row to piece together
 * information for the page.
 *
 * There are three ways the details page pulls in data.
 *
 * 1. Using a column's value and joining it with another table
 * 2. Resolving a column's value and joining it with another table
 * 3. Static data, data which is fixed across detail pages, the props for the component are
 * hardcoded in the config
 */
export default function DetailsPage(props: DetailsPageProps) {
  const {
    sql,
    sqlOperator,
    additionalFiltersSessionStorageKey,
    ContainerProps,
    children = <Outlet />,
    resourcePrimaryKey,
  } = props

  const searchParams = useGetPortalComponentSearchParams()
  const location = useLocation()

  useScrollOnMount()

  const queryBundleRequest = useMemo(() => {
    const entityId = parseEntityIdFromSqlStatement(sql)
    const additionalFilters = getAdditionalFilters(
      searchParams,
      sqlOperator,
      additionalFiltersSessionStorageKey,
    )
    const queryBundleRequest: QueryBundleRequest = {
      entityId,
      concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
      partMask: SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
      query: {
        sql,
        additionalFilters,
      },
    }
    return queryBundleRequest
  }, [additionalFiltersSessionStorageKey, searchParams, sql, sqlOperator])

  const {
    data: asyncJobStatus,
    isLoading,
    isSuccess,
    error: hasError,
  } = useGetQueryResultBundleWithAsyncStatus(queryBundleRequest)

  const queryResultBundle = asyncJobStatus?.responseBody

  if (hasError) {
    const currentLocation = location.pathname.split('/')
    const name = decodeURI(currentLocation[currentLocation.length - 2])
    return (
      <Stack
        sx={{
          alignItems: 'center',
          gap: 2,
          mt: 5,
        }}
      >
        <Typography variant="headline1" gutterBottom>
          Coming Soon!
        </Typography>
        <Typography variant={'smallText1'} gutterBottom>
          This {pluralize.singular(name).toLowerCase()} is not yet available,
          please check back soon.
        </Typography>
        <Button variant={'contained'} onClick={goToExplorePage}>
          Continue Exploring
        </Button>
      </Stack>
    )
  }

  let row
  if (queryResultBundle?.queryResult?.queryResults?.rows) {
    row = queryResultBundle?.queryResult.queryResults.rows[0]
  }
  return (
    <DetailsPageContextProvider
      value={{
        rowSet: queryResultBundle?.queryResult?.queryResults,
        rowData: row,
      }}
    >
      <DetailsPageDocumentMetadata resourcePrimaryKey={resourcePrimaryKey} />
      <Container
        maxWidth={'lg'}
        className="DetailsPage tab-layout"
        {...ContainerProps}
      >
        {isLoading && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              my: 10,
            }}
          >
            <LinearProgress />
          </Box>
        )}
        {isSuccess && children}
      </Container>
    </DetailsPageContextProvider>
  )
}
