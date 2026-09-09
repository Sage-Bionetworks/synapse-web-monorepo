import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/index'
import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { useDetailsPageContext } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import {
  DATASET_HOSTING_CONFIG,
  normalizeHosting,
} from 'synapse-react-client/components/DatasetHosting/DatasetHosting'
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

/**
 * Files tab for a dataset. Reads the dataset's `hosting` annotation from the
 * DetailsPage context and suppresses the download column / row selection for
 * non-downloadable datasets (e.g. external-access), where Synapse downloads
 * wouldn't work. Blank/unknown hosting → `synapse` → downloadable (default).
 */
function DatasetFilesTab({ id }: { id: string }) {
  const { context, value: hosting } = useDetailsPageContext('hosting')
  const isDownloadable =
    DATASET_HOSTING_CONFIG[normalizeHosting(hosting)].downloadable
  const versionNumber = context.rowData?.versionNumber
  return (
    <QueryWrapperPlotNav
      rgbIndex={datasetsRgbIndex}
      sql={`SELECT * FROM ${id}${versionNumber ? `.${versionNumber}` : ''}`}
      visibleColumnCount={7}
      tableConfiguration={{
        showAccessColumn: true,
        showDownloadColumn: isDownloadable,
      }}
      shouldDeepLink={false}
      columnAliases={columnAliases}
      defaultShowPlots={false}
      enabledExternalAnalysisPlatforms={enabledAnalysisPlatforms}
      isRowSelectionVisible={isDownloadable}
      rowSelectionPrimaryKey={['id']}
      fileIdColumnName="id"
      fileNameColumnName="name"
      fileVersionColumnName="currentVersion"
    />
  )
}

function DatasetDetailsPage() {
  const { id } = useParams<{ id: string }>()

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
            element: <DatasetFilesTab id={id} />,
          },
        ]}
      />
    </DetailsPage>
  )
}

export default DatasetDetailsPage
