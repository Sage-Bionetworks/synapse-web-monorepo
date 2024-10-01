import { Container, Typography } from '@mui/material'
import { QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import pluralize from 'pluralize'
import React from 'react'
import { BarLoader } from 'react-spinners'
import {
  SynapseConstants,
  SynapseQueries,
  SynapseUtilityFunctions,
} from 'synapse-react-client'
import { DetailsPageProps } from '../../types/portal-util-types'
import { useGetPortalComponentSearchParams } from '../../utils/UseGetPortalComponentSearchParams'
import { DetailsPageContextProvider } from './DetailsPageContext'
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
 *
 *
 * @export
 * @class DetailsPage
 * @extends {React.Component<DetailsPageProps, State>}
 */
export default function DetailsPage(
  props: React.PropsWithChildren<DetailsPageProps>,
) {
  const {
    sql,
    sqlOperator,
    additionalFiltersSessionStorageKey,
    ContainerProps,
  } = props

  const searchParams = useGetPortalComponentSearchParams()

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
      partMask:
        SynapseConstants.BUNDLE_MASK_QUERY_RESULTS |
        SynapseConstants.BUNDLE_MASK_QUERY_SELECT_COLUMNS,
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
    error: hasError,
  } = SynapseQueries.useGetQueryResultBundleWithAsyncStatus(queryBundleRequest)

  const queryResultBundle = asyncJobStatus?.responseBody

  if (hasError) {
    const currentLocation = window.location.href.split('/')
    const name = currentLocation[currentLocation.length - 2]
    return (
      <div className="DetailsPage__ComingSoon">
        <Typography variant="headline1">Coming Soon! </Typography>
        <p>
          This {pluralize.singular(name).toLowerCase()} is not yet available,
          please check back soon.
        </p>
        <button
          onClick={goToExplorePage}
          className="SRC-standard-button-shape SRC-primary-background-color SRC-whiteText"
        >
          Continue Exploring
        </button>
      </div>
    )
  }

  let row
  if (queryResultBundle?.queryResult?.queryResults?.rows) {
    row = queryResultBundle?.queryResult!.queryResults.rows[0]
  }
  return (
    <DetailsPageContextProvider value={{ queryResultBundle, rowData: row }}>
      <Container
        maxWidth={'lg'}
        className="DetailsPage tab-layout"
        {...ContainerProps}
      >
        {isLoading && <BarLoader color="#878787" loading={true} height={5} />}
        {props.children}
      </Container>
    </DetailsPageContextProvider>
  )
}
