import { LinearProgress } from '@mui/material'
import { useGetPortalComponentSearchParams } from '@sage-bionetworks/synapse-portal-framework/utils/UseGetPortalComponentSearchParams'
import { ErrorBanner } from 'synapse-react-client/components/error/ErrorBanner'
import ErrorPage, {
  SynapseErrorType,
} from 'synapse-react-client/components/error/ErrorPage'
import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/index'
import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { DetailsPageSectionLayoutType } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageSectionLayout'
import { CardContainerLogic } from 'synapse-react-client/components/CardContainerLogic/CardContainerLogic'
import StandaloneQueryWrapper from 'synapse-react-client/components/StandaloneQueryWrapper/StandaloneQueryWrapper'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import {
  ColumnMultiValueFunction,
  ColumnSingleValueFilterOperator,
} from '@sage-bionetworks/synapse-types'
import {
  TOPIC_TABLE_COLUMN_CONSTS as T,
  topicDetailsPageSQL,
  standardsSql,
  dataSetSQL,
  manifestSql,
  standardsFtsConfig,
  DST_TABLE_COLUMN_CONSTS,
  DATASET_DENORMALIZED_COLUMN_CONSTS,
  MANIFEST_COLUMN_CONSTS,
} from '@/config/resources'
import columnAliases from '@/config/columnAliases'
import {
  standardsColumnLinks,
  standardsRgbIndex,
} from '@/config/synapseConfigs/standards'
import {
  linkedTopicCardConfiguration,
  topicsCardSchema,
} from '@/config/synapseConfigs/topics'
import { linkedDataSetCardConfiguration } from '@/config/synapseConfigs/datasets'
import { manifestColumnLinks } from '@/config/synapseConfigs/manifest'
import {
  getQueryBundleRequestWithIdFilter,
  useFetchRowsAsObjects,
} from '@/hooks/fetchDataUtils'
import TopicHierarchyWidget from '@/components/HierarchyWidget/TopicHierarchyWidget'

type LinkedItem = { id: string; name?: string; dataPartName?: string }

function parseJsonLinks(value: string | null | undefined): LinkedItem[] {
  if (!value) return []
  try {
    const parsed = JSON.parse(value)
    return Array.isArray(parsed) ? (parsed as LinkedItem[]) : []
  } catch {
    return []
  }
}

export default function TopicDetailsPage() {
  const { id } = useGetPortalComponentSearchParams()

  // Fetch the entire DataTopic_denormalized table once. It's small (~52 rows)
  // and the hierarchy widget needs the whole thing; the rest of the page reads
  // the row for the current topic from this same result.
  const queryBundleRequest = getQueryBundleRequestWithIdFilter(
    'DataTopic_denormalized',
  )
  const {
    data: topics = [],
    error,
    isLoading,
  } = useFetchRowsAsObjects(queryBundleRequest)

  if (error) {
    return <ErrorBanner error={error} />
  }
  if (!id) {
    return <ErrorPage type={SynapseErrorType.NOT_FOUND} gotoPlace={() => {}} />
  }
  if (isLoading) {
    return <LinearProgress />
  }

  const current = topics.find(t => t[T.ID] === id)
  if (!current) {
    return <ErrorPage type={SynapseErrorType.NOT_FOUND} gotoPlace={() => {}} />
  }

  const relatedTopics = parseJsonLinks(current[T.RELATED_TOPICS_JSON])
  const standards = parseJsonLinks(current[T.STANDARDS_JSON])
  const datasets = parseJsonLinks(current[T.DATASETS_JSON])
  const manifestDataParts = parseJsonLinks(current[T.MANIFEST_DATA_PARTS_JSON])

  const sections: DetailsPageSectionLayoutType[] = [
    {
      id: 'TopicHierarchy',
      title: 'Topic Hierarchy',
      helpText:
        'This topic in the context of its parent and child topics in the DataTopic DAG.',
      element: <TopicHierarchyWidget topics={topics} currentTopicId={id} />,
    },
  ]

  if (relatedTopics.length > 0) {
    sections.push({
      id: 'RelatedTopics',
      title: `Related Topics (${relatedTopics.length})`,
      element: (
        <CardContainerLogic
          cardConfiguration={linkedTopicCardConfiguration}
          sql={topicDetailsPageSQL}
          searchParams={{
            [T.ID]: relatedTopics.map(rt => rt.id).join(','),
          }}
          sqlOperator={ColumnSingleValueFilterOperator.IN}
          columnAliases={columnAliases}
        />
      ),
    })
  }

  if (standards.length > 0) {
    sections.push({
      id: 'RelatedStandards',
      title: `Related Standards (${standards.length})`,
      element: (
        <StandaloneQueryWrapper
          rgbIndex={standardsRgbIndex}
          sql={standardsSql}
          searchParams={{
            [DST_TABLE_COLUMN_CONSTS.CONCERNS_DATA_TOPIC]: id,
          }}
          sqlOperator={ColumnMultiValueFunction.HAS}
          columnAliases={columnAliases}
          tableConfiguration={{
            showDownloadColumn: false,
            columnLinks: standardsColumnLinks,
          }}
          searchConfiguration={{
            ftsConfig: standardsFtsConfig,
          }}
          shouldDeepLink={false}
          hideQueryCount={true}
          hideDownload={true}
        />
      ),
    })
  }

  if (datasets.length > 0) {
    sections.push({
      id: 'RelatedDatasets',
      title: `Related Datasets (${datasets.length})`,
      element: (
        <CardContainerLogic
          cardConfiguration={linkedDataSetCardConfiguration}
          sql={dataSetSQL}
          searchParams={{
            [DATASET_DENORMALIZED_COLUMN_CONSTS.TOPIC_IDS]: id,
          }}
          sqlOperator={ColumnMultiValueFunction.HAS}
          columnAliases={columnAliases}
        />
      ),
    })
  }

  if (manifestDataParts.length > 0) {
    sections.push({
      id: 'ManifestDataParts',
      title: 'Data Manifest',
      helpText:
        'Data parts in BRIDGE2AI Grand Challenge manifests that concern this topic.',
      element: (
        <StandaloneQueryWrapper
          sql={manifestSql}
          searchParams={{
            [MANIFEST_COLUMN_CONSTS.CONCERNS_DATA_TOPICS]: id,
          }}
          sqlOperator={ColumnMultiValueFunction.HAS}
          columnAliases={columnAliases}
          tableConfiguration={{
            showDownloadColumn: false,
            columnLinks: manifestColumnLinks,
          }}
          shouldDeepLink={false}
          hideQueryCount={true}
          hideDownload={true}
        />
      ),
    })
  }

  return (
    <DetailsPage
      header={
        <CardContainerLogic
          query={{
            sql: topicDetailsPageSQL,
            additionalFilters: [
              {
                concreteType:
                  'org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter',
                columnName: T.ID,
                operator: ColumnSingleValueFilterOperator.EQUAL,
                values: [id],
              },
            ],
          }}
          columnAliases={columnAliases}
          cardConfiguration={{
            type: SynapseConstants.GENERIC_CARD,
            genericCardSchema: topicsCardSchema,
            secondaryLabelLimit: 6,
            isHeader: true,
            headerCardVariant: 'HeaderCardV2',
          }}
        />
      }
      sql={topicDetailsPageSQL}
      resourcePrimaryKey={[T.ID]}
    >
      <DetailsPageContent content={sections} />
    </DetailsPage>
  )
}
