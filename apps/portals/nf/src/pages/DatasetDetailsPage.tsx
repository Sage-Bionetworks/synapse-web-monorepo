import {
  datasetCardConfiguration,
  datasetsRgbIndex,
} from '@/config/synapseConfigs/datasets'
import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage'
import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { DetailsPageContextConsumer } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import {
  fetchDetailPageMetadata,
  type DetailPageMetadataConfig,
} from '@sage-bionetworks/synapse-portal-framework/utils/fetchDetailPageMetadata'
import { fetchCroissantMetadata } from '@sage-bionetworks/synapse-portal-framework/utils/fetchCroissantMetadata'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import type { MetaDescriptor } from 'react-router'
import { useParams } from 'react-router'
import { datasetsSql, enabledAnalysisPlatforms } from '@/config/resources'
import { columnAliases } from '@/config/synapseConfigs/commonProps'
import {
  CardContainerLogic,
  DatasetJsonLdScript,
  ErrorPage,
  QueryWrapperPlotNav,
  SynapseErrorType,
} from 'synapse-react-client'

const metadataConfig: DetailPageMetadataConfig = {
  sql: datasetsSql,
  titleColumn: 'title',
  descriptionColumn: 'description',
  paramName: 'id',
}

interface DatasetLoaderData {
  title: string | null
  description: string | null
  croissantJsonLd: Record<string, unknown> | null
}

export async function loader({
  params,
}: {
  params: { id?: string }
}): Promise<DatasetLoaderData> {
  if (!params.id)
    return { title: null, description: null, croissantJsonLd: null }
  const [metadata, croissantJsonLd] = await Promise.all([
    fetchDetailPageMetadata(metadataConfig, params.id),
    fetchCroissantMetadata(params.id),
  ])
  return { ...metadata, croissantJsonLd }
}

export async function clientLoader({
  params,
  serverLoader,
}: {
  params: { id?: string }
  serverLoader: () => Promise<DatasetLoaderData>
}) {
  try {
    return await serverLoader()
  } catch {
    if (!params.id)
      return { title: null, description: null, croissantJsonLd: null }
    const [metadata, croissantJsonLd] = await Promise.all([
      fetchDetailPageMetadata(metadataConfig, params.id),
      fetchCroissantMetadata(params.id),
    ])
    return { ...metadata, croissantJsonLd }
  }
}

export function meta({
  loaderData,
  matches,
}: {
  loaderData?: DatasetLoaderData
  matches: Array<{ meta: MetaDescriptor[] }>
}): MetaDescriptor[] {
  if (!loaderData?.title) {
    return matches.flatMap(match => match.meta ?? [])
  }
  const descriptors: MetaDescriptor[] = [
    { title: `${loaderData.title} | NF Data Portal` },
  ]
  if (loaderData.description) {
    descriptors.push({ name: 'description', content: loaderData.description })
  }
  if (loaderData.croissantJsonLd) {
    descriptors.push({
      'script:ld+json': loaderData.croissantJsonLd,
    })
  }
  return descriptors
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
      sqlOperator={ColumnSingleValueFilterOperator.EQUAL}
      ContainerProps={{
        maxWidth: 'xl',
      }}
      resourcePrimaryKey={['id']}
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
