import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/index'
import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { DetailsPageContextConsumer } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import {
  createDetailPageRouteExports,
  type BaseDetailPageLoaderData,
} from '@sage-bionetworks/synapse-portal-framework/utils/detailPageRouteUtils'
import { fetchCroissantMetadata } from '@sage-bionetworks/synapse-portal-framework/utils/fetchCroissantMetadata'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import { useParams } from 'react-router'
import { datasetsSql, enabledAnalysisPlatforms } from '@/config/resources'
import { columnAliases } from '@/config/synapseConfigs/commonProps'
import { CardContainerLogic } from 'synapse-react-client/components/CardContainerLogic/CardContainerLogic'
import { DatasetJsonLdScript } from 'synapse-react-client/components/DatasetJsonLdScript'
import ErrorPage, {
  SynapseErrorType,
} from 'synapse-react-client/components/error/ErrorPage'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'
import { metadataConfig } from './DatasetDetailsPage.config'
import {
  datasetCardConfiguration,
  datasetsRgbIndex,
} from '@/config/synapseConfigs/datasets'
import { portalMetadata } from '@/config/portalMetadata'

export { metadataConfig }

type PageParams = { id: string }

interface DatasetLoaderData extends BaseDetailPageLoaderData {
  croissantJsonLd: Record<string, unknown> | null
}

const _routeExports = createDetailPageRouteExports<DatasetLoaderData>(
  metadataConfig,
  portalMetadata,
  {
    extendLoader: async (_base, params: PageParams) => ({
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
  const { id } = useParams<PageParams>()

  if (!id) {
    return <ErrorPage type={SynapseErrorType.NOT_FOUND} gotoPlace={() => {}} />
  }

  return (
    <DetailsPage
      header={
        <CardContainerLogic
          cardConfiguration={{ ...datasetCardConfiguration, isHeader: true }}
          sql={datasetsSql}
          columnAliases={columnAliases}
          searchParams={{ id }}
        />
      }
      sql={datasetsSql}
      searchParams={{ id }}
      sqlOperator={ColumnSingleValueFilterOperator.EQUAL}
      ContainerProps={{
        maxWidth: 'xl',
      }}
      resourcePrimaryKey={['id']}
      disableCanonicalUrl
    >
      <DetailsPageContent
        content={[
          // {
          //   name: 'Markdown',
          //   columnName: 'datasetDescription',
          //   title: 'Description',
          //   props: {},
          // },
          // {
          //   name: 'Markdown',
          //   columnName: 'acknowledgmentStatement',
          //   title: 'Acknowledgment',
          //   props: {},
          // },
          {
            id: 'DatasetJsonLdScript',
            element: <DatasetJsonLdScript entityId={id} />,
          },
          {
            id: 'Files',
            element: (
              <DetailsPageContextConsumer>
                {({ context }) => (
                  <QueryWrapperPlotNav
                    rgbIndex={datasetsRgbIndex}
                    sql={`SELECT * FROM ${id}${
                      context.rowData?.versionNumber
                        ? `.${context.rowData.versionNumber}`
                        : ''
                    }`}
                    visibleColumnCount={7}
                    tableConfiguration={{
                      showAccessColumn: true,
                      showDownloadColumn: true,
                    }}
                    shouldDeepLink={false}
                    columnAliases={columnAliases}
                    defaultShowPlots={false}
                    enabledExternalAnalysisPlatforms={enabledAnalysisPlatforms}
                    isRowSelectionVisible={true}
                    rowSelectionPrimaryKey={['id']}
                    fileIdColumnName="id"
                    fileNameColumnName="name"
                    fileVersionColumnName="currentVersion"
                  />
                )}
              </DetailsPageContextConsumer>
            ),
          },
        ]}
      />
    </DetailsPage>
  )
}

export default DatasetDetailsPage
