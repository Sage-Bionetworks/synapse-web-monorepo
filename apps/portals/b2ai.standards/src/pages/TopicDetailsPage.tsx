import {
  Box,
  LinearProgress,
  Link,
  List,
  ListItem,
  Typography,
} from '@mui/material'
import { Link as RouterLink } from 'react-router'
import { useGetPortalComponentSearchParams } from '@sage-bionetworks/synapse-portal-framework/utils/UseGetPortalComponentSearchParams'
import { ErrorBanner } from 'synapse-react-client/components/error/ErrorBanner'
import ErrorPage, {
  SynapseErrorType,
} from 'synapse-react-client/components/error/ErrorPage'
import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/index'
import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { DetailsPageSectionLayoutType } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageSectionLayout'
import {
  TOPIC_TABLE_COLUMN_CONSTS as T,
  topicDetailsPageSQL,
} from '@/config/resources'
import {
  getQueryBundleRequestWithIdFilter,
  useFetchRowsAsObjects,
} from '@/hooks/fetchDataUtils'
import TopicHierarchyWidget, {
  TopicRow,
} from '@/components/TopicHierarchyWidget'

type LinkedItem = { id: string; name: string }

function parseJsonLinks(value: string | null | undefined): LinkedItem[] {
  if (!value) return []
  try {
    const parsed = JSON.parse(value)
    return Array.isArray(parsed) ? (parsed as LinkedItem[]) : []
  } catch {
    return []
  }
}

function LinkedItemList({
  items,
  baseURL,
}: {
  items: LinkedItem[]
  baseURL: string
}) {
  if (items.length === 0) {
    return (
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        None.
      </Typography>
    )
  }
  return (
    <List dense sx={{ pl: 0 }}>
      {items.map(item => (
        <ListItem key={item.id} sx={{ pl: 0 }}>
          <Link
            component={RouterLink}
            to={`${baseURL}?id=${encodeURIComponent(item.id)}`}
            underline="hover"
          >
            {item.name}
          </Link>
        </ListItem>
      ))}
    </List>
  )
}

function TopicHeader({ topic }: { topic: TopicRow }) {
  const externalIds = [
    { key: T.EDAM_ID, label: 'EDAM' },
    { key: T.MESH_ID, label: 'MeSH' },
    { key: T.NCIT_ID, label: 'NCIT' },
  ]
    .map(x => ({ ...x, value: topic[x.key] }))
    .filter(x => x.value)
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="overline" sx={{ color: 'text.secondary' }}>
        Data Topic
      </Typography>
      <Typography variant="h4" sx={{ fontWeight: 700, mt: 0.5 }}>
        {topic[T.NAME]}
      </Typography>
      {topic[T.DESCRIPTION] && (
        <Typography variant="body1" sx={{ mt: 1, color: 'text.primary' }}>
          {topic[T.DESCRIPTION]}
        </Typography>
      )}
      {externalIds.length > 0 && (
        <Box sx={{ mt: 1, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          {externalIds.map(x => (
            <Typography
              key={x.key}
              variant="caption"
              sx={{ fontFamily: 'monospace', color: 'text.secondary' }}
            >
              {x.label}: {x.value}
            </Typography>
          ))}
        </Box>
      )}
    </Box>
  )
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
        <LinkedItemList
          items={relatedTopics}
          baseURL="/Explore/DataTopic/DetailsPage"
        />
      ),
    })
  }

  if (standards.length > 0) {
    sections.push({
      id: 'RelatedStandards',
      title: `Related Standards (${standards.length})`,
      element: (
        <LinkedItemList
          items={standards}
          baseURL="/Explore/Standard/DetailsPage"
        />
      ),
    })
  }

  if (datasets.length > 0) {
    sections.push({
      id: 'RelatedDatasets',
      title: `Related Datasets (${datasets.length})`,
      element: (
        <LinkedItemList
          items={datasets}
          baseURL="/Explore/DataSet/DetailsPage"
        />
      ),
    })
  }

  if (manifestDataParts.length > 0) {
    sections.push({
      id: 'ManifestDataParts',
      title: `Related Data Parts (${manifestDataParts.length})`,
      helpText:
        'Data parts in BRIDGE2AI Grand Challenge manifests that concern this topic.',
      element: (
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {manifestDataParts.map(p => p.name).join(' · ')}
        </Typography>
      ),
    })
  }

  return (
    <DetailsPage
      header={<TopicHeader topic={current} />}
      sql={topicDetailsPageSQL}
      resourcePrimaryKey={[T.ID]}
    >
      <DetailsPageContent content={sections} />
    </DetailsPage>
  )
}
