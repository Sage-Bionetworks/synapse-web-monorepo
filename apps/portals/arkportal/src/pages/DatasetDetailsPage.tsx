import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { DetailsPageContextConsumer } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/index'
import { MarkdownSynapseFromColumnData } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/markdown/MarkdownSynapseFromColumnData'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import { datasetsSql } from '../config/resources'
import {
  datasetCardConfiguration,
  datasetColumnAliases,
} from '../config/synapseConfigs/datasets'
import { CardContainerLogic } from 'synapse-react-client/components/CardContainerLogic/index'
import DatasetDetailsFilesTable from './DatasetDetailsFilesTable'
import {
  createDetailPageRouteExports,
  BaseDetailPageLoaderData,
} from '@sage-bionetworks/synapse-portal-framework/utils/detailPageRouteUtils'
import { DatasetJsonLdScript } from 'synapse-react-client/components/DatasetJsonLdScript'
import { metadataConfig } from './DatasetDetailsPage.config'
import { fetchCroissantMetadata } from '@sage-bionetworks/synapse-portal-framework/utils/fetchCroissantMetadata'
import { portalMetadata } from '../config/portalMetadata'
import { useParams } from 'react-router'
import ErrorPage, {
  SynapseErrorType,
} from 'synapse-react-client/components/error/ErrorPage'

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
      ContainerProps={{
        maxWidth: 'xl',
      }}
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
            title: 'Description',
            id: 'Description',
            element: (
              <MarkdownSynapseFromColumnData
                columnName={'datasetDescription'}
              />
            ),
          },
          {
            title: 'Acknowledgment',
            id: 'Acknowledgment',
            element: (
              <MarkdownSynapseFromColumnData
                columnName={'acknowledgmentStatement'}
              />
            ),
          },
          {
            title: 'Files',
            id: 'Files',
            element: (
              <DetailsPageContextConsumer>
                {({ context }) => {
                  return <DatasetDetailsFilesTable rowData={context.rowData} />
                }}
              </DetailsPageContextConsumer>
            ),
          },
        ]}
      />
    </DetailsPage>
  )
}

export default DatasetDetailsPage
