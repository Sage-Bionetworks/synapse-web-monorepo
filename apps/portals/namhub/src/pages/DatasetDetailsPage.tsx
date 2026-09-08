import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/index'
import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import { CardContainerLogic } from 'synapse-react-client/components/CardContainerLogic/CardContainerLogic'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'
import {
  datasetsSql,
  enabledAnalysisPlatforms,
  rgbIndex,
} from '@/config/resources'
import {
  datasetCardConfiguration,
  datasetColumnAliases,
} from '@/config/synapseConfigs/datasets'
import { metadataConfig } from './DatasetDetailsPage.config'
import { portalMetadata } from '../config/portalMetadata'
import { useParams } from 'react-router'
import {
  DatasetJsonLdScript,
  ErrorPage,
  SynapseErrorType,
} from 'synapse-react-client'
import {
  createDetailPageRouteExports,
  BaseDetailPageLoaderData,
} from '@sage-bionetworks/synapse-portal-framework/utils/detailPageRouteUtils'
import { fetchCroissantMetadata } from '@sage-bionetworks/synapse-portal-framework/utils/fetchCroissantMetadata'

export { metadataConfig }

interface DatasetLoaderData extends BaseDetailPageLoaderData {
  croissantJsonLd: Record<string, unknown> | null
}

const _routeExports = createDetailPageRouteExports<DatasetLoaderData>(
  metadataConfig,
  portalMetadata,
  {
    extendLoader: async (_base, params) => ({
      croissantJsonLd: params.id
        ? await fetchCroissantMetadata(params.id)
        : null,
    }),
    extendMeta: data =>
      data.croissantJsonLd ? [{ 'script:ld+json': data.croissantJsonLd }] : [],
  },
)

export const loader = _routeExports.loader
export const clientLoader = _routeExports.clientLoader
export const meta = _routeExports.meta

function DatasetDetailsPage() {
  const { id } = useParams<{ id: string }>()

  if (!id) {
    return <ErrorPage type={SynapseErrorType.NOT_FOUND} gotoPlace={() => {}} />
  }

  return (
    <DetailsPage
      header={
        <CardContainerLogic
          cardConfiguration={{
            ...datasetCardConfiguration,
            secondaryLabelLimit: 4,
            isHeader: true,
          }}
          sql={datasetsSql}
          searchParams={{ id }}
          columnAliases={datasetColumnAliases}
        />
      }
      sql={datasetsSql}
      searchParams={{ id }}
      sqlOperator={ColumnSingleValueFilterOperator.EQUAL}
      ContainerProps={{ maxWidth: 'xl' }}
      resourcePrimaryKey={['id']}
      disableCanonicalUrl
    >
      <DetailsPageContent
        content={[
          {
            id: 'DatasetJsonLdScript',
            element: <DatasetJsonLdScript entityId={id} />,
          },
          {
            title: 'Files',
            id: 'Files',
            element: id ? (
              <QueryWrapperPlotNav
                rgbIndex={rgbIndex}
                sql={`SELECT * FROM ${id}`}
                visibleColumnCount={7}
                tableConfiguration={{
                  showAccessColumn: true,
                  showDownloadColumn: true,
                }}
                shouldDeepLink={false}
                defaultShowPlots={false}
                enabledExternalAnalysisPlatforms={enabledAnalysisPlatforms}
                isRowSelectionVisible={true}
                rowSelectionPrimaryKey={['id']}
                fileIdColumnName="id"
                fileNameColumnName="name"
                fileVersionColumnName="currentVersion"
              />
            ) : null,
          },
        ]}
      />
    </DetailsPage>
  )
}

export default DatasetDetailsPage
