import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { DetailsPageSectionLayoutType } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageSectionLayout'
import { MarkdownSynapseFromColumnData } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/markdown/MarkdownSynapseFromColumnData'

const studyMetadataTabContent: DetailsPageSectionLayoutType[] = [
  {
    title: 'Access Requirements',
    id: 'AccessRequirements',
    element: (
      <MarkdownSynapseFromColumnData columnName={'AccessRequirements'} />
    ),
  },
  {
    title: 'Study Metadata',
    id: 'StudyMetadata',
    element: <MarkdownSynapseFromColumnData columnName={'studyMetadata'} />,
  },
  {
    title: 'Instruments',
    id: 'Instruments',
    element: <MarkdownSynapseFromColumnData columnName={'Instruments'} />,
  },
  {
    title: 'Variables',
    id: 'Variables',
    element: <MarkdownSynapseFromColumnData columnName={'Variables'} />,
  },
]

function StudyMetadataTab() {
  return <DetailsPageContent content={studyMetadataTabContent} />
}

export default StudyMetadataTab
