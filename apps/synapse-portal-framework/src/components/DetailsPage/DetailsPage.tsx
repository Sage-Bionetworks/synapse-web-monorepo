import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useTheme,
} from '@mui/material'
import { QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import pluralize from 'pluralize'
import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { BarLoader } from 'react-spinners'
import {
  SynapseConstants,
  SynapseQueries,
  SynapseUtilityFunctions,
} from 'synapse-react-client'
import { DetailsPageProps } from '../../types/portal-util-types'
import { useGetPortalComponentSearchParams } from '../../utils/UseGetPortalComponentSearchParams'
import { DetailsPageContextProvider } from './DetailsPageContext'
import { DetailsPageDocumentMetadata } from './DetailsPageDocumentMetadata'
import { useScrollOnMount } from './utils'

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
  const { palette } = useTheme()

  useScrollOnMount()

  const queryBundleRequest = React.useMemo(() => {
    const entityId = SynapseUtilityFunctions.parseEntityIdFromSqlStatement(sql)
    const additionalFilters = SynapseUtilityFunctions.getAdditionalFilters(
      additionalFiltersSessionStorageKey,
      searchParams,
      sqlOperator,
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
  } = SynapseQueries.useGetQueryResultBundleWithAsyncStatus(queryBundleRequest)

  const queryResultBundle = asyncJobStatus?.responseBody

  if (hasError) {
    const currentLocation = location.pathname.split('/')
    const name = decodeURI(currentLocation[currentLocation.length - 2])
    return (
      <Stack alignItems={'center'} gap={2} mt={5}>
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
          <Box display={'flex'} justifyContent={'center'} my={10}>
            <BarLoader
              color={palette.primary.main}
              loading={true}
              height={5}
              width={400}
            />
          </Box>
        )}
        {isSuccess && children}
      </Container>
    </DetailsPageContextProvider>
  )
}
