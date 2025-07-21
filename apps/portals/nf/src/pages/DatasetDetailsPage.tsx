import {
  datasetCardConfiguration,
  datasetsRgbIndex,
} from '@/config/synapseConfigs/datasets'
import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage'
import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { DetailsPageContextConsumer } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import { useGetPortalComponentSearchParams } from '@sage-bionetworks/synapse-portal-framework/utils/UseGetPortalComponentSearchParams'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import { datasetsSql, enabledAnalysisPlatforms } from 'src/config/resources'
import { columnAliases } from 'src/config/synapseConfigs/commonProps'
import {
  CardContainerLogic,
  DatasetJsonLdScript,
  ErrorPage,
  QueryWrapperPlotNav,
  SynapseErrorType,
} from 'synapse-react-client'

function DatasetDetailsPage() {
  const { id } = useGetPortalComponentSearchParams()

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
