import {
  DetailsPageContent,
  DetailsPageContentType,
} from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { DetailsPageContextConsumer } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import { MarkdownSynapseFromColumnData } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/markdown/MarkdownSynapseFromColumnData'
import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/index'
import { useGetPortalComponentSearchParams } from '@sage-bionetworks/synapse-portal-framework/utils/UseGetPortalComponentSearchParams'
import {
  ColumnSingleValueFilterOperator,
  ObjectType,
} from '@sage-bionetworks/synapse-types'
import { CardContainerLogic } from 'synapse-react-client'
import { datasetsSql } from '../config/resources'
import {
  datasetCardConfiguration,
  datasetColumnAliases,
} from '../config/synapseConfigs/datasets'
import MarkdownSynapse from 'synapse-react-client/components/Markdown/MarkdownSynapse'
import { QueryWrapperPlotNav } from 'synapse-react-client'
import { filesQueryWrapperPlotNavProps } from '@/config/synapseConfigs/data'

export default function DatasetDetailsPage() {
  const searchParams = useGetPortalComponentSearchParams()
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
          searchParams={searchParams}
          columnAliases={datasetColumnAliases}
        />
      }
      sql={datasetsSql}
      sqlOperator={ColumnSingleValueFilterOperator.EQUAL}
      ContainerProps={{
        maxWidth: 'xl',
      }}
      resourcePrimaryKey={['id']}
    >
      <DetailsPageContextConsumer>
        {({ context }) => {
          const { rowData, rowSet } = context
          const { headers } = rowSet!
          const rowId = rowData?.rowId
          const synId = `syn${rowId}`
          const source = headers?.findIndex(h => h.name === 'source')
          // See PORTALS-3757
          const includeFiles =
            source && rowData?.values[source] != 'Critical Path Institute'
          const detailsPageContent: DetailsPageContentType = [
            {
              title: 'Description',
              id: 'Description',
              element: (
                <MarkdownSynapse
                  ownerId={synId}
                  objectType={ObjectType.ENTITY}
                />
              ),
            },
            {
              title: 'Acknowledgment',
              id: 'Acknowledgment',
              element: (
                <MarkdownSynapseFromColumnData
                  columnName={'acknowledgementStatement'}
                />
              ),
            },
          ]
          if (includeFiles) {
            detailsPageContent.push({
              title: 'Files',
              id: 'Files',
              element: (
                <QueryWrapperPlotNav
                  {...filesQueryWrapperPlotNavProps}
                  sql={`SELECT * FROM ${synId}`}
                />
              ),
            })
          }
          return <DetailsPageContent content={detailsPageContent} />
        }}
      </DetailsPageContextConsumer>
    </DetailsPage>
  )
}
