import { DetailsPageProps } from '@/types/portal-util-types'
import { useGetPortalComponentSearchParams } from '@/utils/UseGetPortalComponentSearchParams'
import { Box, Container, LinearProgress } from '@mui/material'
import { DoiObjectType } from '@sage-bionetworks/synapse-client'
import { QueryBundleRequest, Row } from '@sage-bionetworks/synapse-types'
import { useMemo } from 'react'
import { Outlet } from 'react-router'
import ErrorPage, {
  SynapseErrorType,
} from 'synapse-react-client/components/error/ErrorPage'
import { getCandidateDoiId } from 'synapse-react-client/components/GenericCard/PortalDOI/PortalDOIUtils'
import { useGetQueryResultBundleWithAsyncStatus } from 'synapse-react-client/synapse-queries/entity/useGetQueryResultBundle'
import {
  getAdditionalFilters,
  parseEntityIdFromSqlStatement,
} from 'synapse-react-client/utils/functions/SqlFunctions'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import { DetailsPageContextProvider } from './DetailsPageContext'
import { DetailsPageDocumentMetadata } from './DetailsPageDocumentMetadata'
import { useScrollOnMount } from './utils'

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
    header,
    children = <Outlet />,
    resourcePrimaryKey,
    portalDOIConfiguration,
  } = props

  const searchParams = useGetPortalComponentSearchParams()

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
    error: queryError,
  } = useGetQueryResultBundleWithAsyncStatus(queryBundleRequest)

  const queryResultBundle = asyncJobStatus?.responseBody
  let row: Row | undefined
  if (queryResultBundle?.queryResult?.queryResults?.rows) {
    row = queryResultBundle?.queryResult.queryResults.rows[0]
  }
  const rowNotFound = !isLoading && !row

  const candidateDoiId = getCandidateDoiId({
    portalDoiConfiguration: portalDOIConfiguration,
    data: searchParams,
  })

  if (rowNotFound || queryError) {
    // If the row does not exist, or the link is broken, show the generic error page.
    return (
      <ErrorPage
        type={SynapseErrorType.NOT_FOUND}
        gotoPlace={() => {}}
        portalId={portalDOIConfiguration?.portalId}
        id={candidateDoiId}
        objectType={DoiObjectType.PORTAL_RESOURCE}
      />
    )
  }

  return (
    <DetailsPageContextProvider
      value={{
        rowSet: queryResultBundle?.queryResult?.queryResults,
        rowData: row,
      }}
    >
      <DetailsPageDocumentMetadata resourcePrimaryKey={resourcePrimaryKey} />
      {header}
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
