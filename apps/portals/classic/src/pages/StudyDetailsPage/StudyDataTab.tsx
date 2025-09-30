import {
  enabledAnalysisPlatforms,
  cavaticaConnectAccountURL,
  dataOnStudiesPageSql,
  dataSql,
} from '@/config/resources'
import { DATA_TABLE_COLUMN_NAMES } from '@/config/synapseConfigs/dataTable'
import { studiesRgbIndex } from '@/config/synapseConfigs/studies'
import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { DetailsPageContextConsumer } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import { MarkdownSynapseFromColumnData } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/markdown/MarkdownSynapseFromColumnData'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import { QueryWrapperPlotNav } from 'synapse-react-client/components/QueryWrapperPlotNav'
import RssFeedCards from 'synapse-react-client/components/RssFeedCards/RssFeedCards'

const StudyDataTabContent = [
  {
    id: 'studyNews',
    title: 'Recent Data Updates',
    element: (
      <DetailsPageContextConsumer columnName={'studyKey'}>
        {({ value }) => (
          <RssFeedCards
            url="https://news.eliteportal.org"
            itemsToShow={3}
            allowCategories={[]}
            filter={{
              value: value!,
              type: 'tag',
            }}
          />
        )}
      </DetailsPageContextConsumer>
    ),
  },
  {
    id: 'Access Requirements',
    title: 'Access Requirements',
    element: <MarkdownSynapseFromColumnData columnName={'accessReqs'} />,
  },
  {
    id: 'Study Metadata',
    title: 'Study Metadata',
    element: <MarkdownSynapseFromColumnData columnName={'studyMetadata'} />,
  },
  {
    id: 'studyMetadataQueryWrapperPlotNav',
    element: (
      <DetailsPageContextConsumer columnName={'studyKey'}>
        {({ value }) => (
          <QueryWrapperPlotNav
            sqlOperator={ColumnSingleValueFilterOperator.EQUAL}
            showColumnSelection={true}
            rgbIndex={studiesRgbIndex}
            visibleColumnCount={10}
            name="Metadata Files"
            enabledExternalAnalysisPlatforms={enabledAnalysisPlatforms}
            cavaticaConnectAccountURL={cavaticaConnectAccountURL}
            isRowSelectionVisible={true}
            isRowSelectionUIFloating={false}
            tableConfiguration={{
              showAccessColumn: true,
              showAccessColumnHeader: true,
              showDownloadColumn: true,
            }}
            availableFacets={['metadataType', 'dataType', 'assay']}
            sql={dataOnStudiesPageSql}
            shouldDeepLink={false}
            defaultShowPlots={false}
            lockedColumn={{
              columnName: DATA_TABLE_COLUMN_NAMES.STUDY,
              value: value!,
            }}
            searchParams={{ [DATA_TABLE_COLUMN_NAMES.STUDY]: value! }}
            fileIdColumnName={DATA_TABLE_COLUMN_NAMES.ID}
            fileNameColumnName={DATA_TABLE_COLUMN_NAMES.FILE_NAME}
            fileVersionColumnName={DATA_TABLE_COLUMN_NAMES.FILE_VERSION}
            hideQueryCount
          />
        )}
      </DetailsPageContextConsumer>
    ),
  },
  {
    id: 'Study Data',
    title: 'Study Data',
    element: (
      <DetailsPageContextConsumer columnName={'studyKey'}>
        {({ value }) => (
          <QueryWrapperPlotNav
            sqlOperator={ColumnSingleValueFilterOperator.EQUAL}
            rgbIndex={studiesRgbIndex}
            visibleColumnCount={10}
            enabledExternalAnalysisPlatforms={enabledAnalysisPlatforms}
            cavaticaConnectAccountURL={cavaticaConnectAccountURL}
            isRowSelectionVisible={true}
            isRowSelectionUIFloating={false}
            tableConfiguration={{
              showAccessColumn: true,
              showAccessColumnHeader: true,
              showDownloadColumn: true,
              columnLinks: [
                {
                  matchColumnName: DATA_TABLE_COLUMN_NAMES.STUDY,
                  isMarkdown: false,
                  baseURL: 'Explore/Studies/DetailsPage',
                  URLColumnName: 'studyKey',
                  wrapValueWithParens: false,
                },
              ],
            }}
            sql={dataSql}
            shouldDeepLink={false}
            lockedColumn={{
              columnName: DATA_TABLE_COLUMN_NAMES.STUDY,
              value: value!,
            }}
            fileIdColumnName={DATA_TABLE_COLUMN_NAMES.ID}
            searchParams={{ [DATA_TABLE_COLUMN_NAMES.STUDY]: value! }}
            fileNameColumnName={DATA_TABLE_COLUMN_NAMES.FILE_NAME}
            fileVersionColumnName={DATA_TABLE_COLUMN_NAMES.FILE_VERSION}
            hideQueryCount
          />
        )}
      </DetailsPageContextConsumer>
    ),
  },
]

function StudyDataTab() {
  return <DetailsPageContent content={StudyDataTabContent} />
}

export default StudyDataTab
