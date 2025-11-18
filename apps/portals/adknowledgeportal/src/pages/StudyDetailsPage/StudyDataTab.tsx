import {
  dataOnStudiesPageSql,
  dataSql,
  enabledAnalysisPlatforms,
} from '@/config/resources'
import { DATA_TABLE_COLUMN_NAMES } from '@/config/synapseConfigs/data'
import {
  STUDY_TABLE_COLUMN_NAMES,
  studyRgbIndex,
} from '@/config/synapseConfigs/studies'
import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { DetailsPageContextConsumer } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import { DetailsPageSectionLayoutType } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageSectionLayout'
import { EntityResolver } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/EntityResolver'
import { ColumnMultiValueFunction } from '@sage-bionetworks/synapse-types'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav'
import RssFeedCards from 'synapse-react-client/components/RssFeedCards/RssFeedCards'
import { MarkdownSynapseFromColumnData } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/markdown/MarkdownSynapseFromColumnData'

const studyDataTabContent: DetailsPageSectionLayoutType[] = [
  {
    title: 'Recent Data Updates',
    id: 'RecentDataUpdates',
    // TODO: Removed usage of these props in PORTALS-3195 refactor
    // Were these used to create props to inject into RssFeedCards? Does not seem like it
    // columnName: 'Study',
    // resolveSynId: {
    //   value: true,
    // },
    element: (
      <RssFeedCards
        url="https://news.adknowledgeportal.org"
        itemsToShow={3}
        allowCategories={[]}
        // mailChimpListName: 'study specific list name????',
        // mailChimpUrl:'https://study specific url????'
        viewAllNewsButtonText={'View All Data Updates'}
      />
    ),
  },
  {
    id: 'AccessRequirements',
    title: 'Access Requirements',
    element: (
      <MarkdownSynapseFromColumnData
        columnName={STUDY_TABLE_COLUMN_NAMES.ACCESS_REQS}
      />
    ),
  },
  {
    id: 'StudyMetadata',
    title: 'Study Metadata',
    element: (
      <MarkdownSynapseFromColumnData
        columnName={STUDY_TABLE_COLUMN_NAMES.STUDY_METADATA}
      />
    ),
  },
  {
    id: 'MetadataFiles',
    element: (
      <DetailsPageContextConsumer columnName={STUDY_TABLE_COLUMN_NAMES.STUDY}>
        {({ value: entityId }) => (
          <EntityResolver entityId={entityId!}>
            {entityHeader => (
              <QueryWrapperPlotNav
                sqlOperator={ColumnMultiValueFunction.HAS}
                showColumnSelection={true}
                rgbIndex={studyRgbIndex}
                name="Metadata Files"
                visibleColumnCount={10}
                enabledExternalAnalysisPlatforms={enabledAnalysisPlatforms}
                isRowSelectionVisible={true}
                tableConfiguration={{
                  showAccessColumn: true,
                  showDownloadColumn: true,
                }}
                availableFacets={['metadataType', 'dataType', 'assay']}
                sql={dataOnStudiesPageSql}
                shouldDeepLink={false}
                defaultShowPlots={false}
                lockedColumn={{
                  columnName: DATA_TABLE_COLUMN_NAMES.STUDY,
                  value: entityHeader.name,
                }}
                hideQueryCount={true}
                searchParams={{
                  [DATA_TABLE_COLUMN_NAMES.STUDY]: entityHeader.name,
                }}
              />
            )}
          </EntityResolver>
        )}
      </DetailsPageContextConsumer>
    ),
  },
  {
    id: 'StudyData',
    title: 'Study Data',
    element: (
      <DetailsPageContextConsumer columnName={STUDY_TABLE_COLUMN_NAMES.STUDY}>
        {({ value: entityId }) => (
          <EntityResolver entityId={entityId!}>
            {entityHeader => (
              <QueryWrapperPlotNav
                sqlOperator={ColumnMultiValueFunction.HAS}
                rgbIndex={studyRgbIndex}
                visibleColumnCount={10}
                isRowSelectionVisible={true}
                enabledExternalAnalysisPlatforms={enabledAnalysisPlatforms}
                tableConfiguration={{
                  showAccessColumn: true,
                  showDownloadColumn: true,
                  columnLinks: [
                    {
                      matchColumnName: 'study',
                      isMarkdown: false,
                      baseURL: 'Explore/Studies/DetailsPage',
                      URLColumnName: 'Study_Name',
                      wrapValueWithParens: true,
                    },
                  ],
                }}
                sql={dataSql}
                shouldDeepLink={false}
                searchParams={{
                  [DATA_TABLE_COLUMN_NAMES.STUDY]: entityHeader.name,
                }}
                hideQueryCount
                lockedColumn={{
                  columnName: DATA_TABLE_COLUMN_NAMES.STUDY,
                  value: entityHeader.name,
                }}
              />
            )}
          </EntityResolver>
        )}
      </DetailsPageContextConsumer>
    ),
  },
]

function StudyDataTab() {
  return <DetailsPageContent content={studyDataTabContent} />
}

export default StudyDataTab
