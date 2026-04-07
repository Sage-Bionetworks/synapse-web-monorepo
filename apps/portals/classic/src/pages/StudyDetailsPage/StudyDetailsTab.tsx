import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { DetailsPageSectionLayoutType } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageSectionLayout'
import { MarkdownSynapseFromColumnData } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/markdown/MarkdownSynapseFromColumnData'

const studyDetailsTabContent: DetailsPageSectionLayoutType[] = [
  {
    title: 'Study Description',
    id: 'StudyDescription',
    element: <MarkdownSynapseFromColumnData columnName={'id'} />,
  },
  {
    title: 'Acknowledgement',
    id: 'Acknowledgement',
    element: <MarkdownSynapseFromColumnData columnName={'Acknowledgement'} />,
  },
  {
    title: 'Methods',
    id: 'Methods',
    element: <MarkdownSynapseFromColumnData columnName={'Methods'} />,
  },
  {
    title: 'Related Studies',
    id: 'RelatedStudies',
    element: <MarkdownSynapseFromColumnData columnName={'RelatedStudies'} />,
  },
]

function StudyDetailsTab() {
  return <DetailsPageContent content={studyDetailsTabContent} />
}

export default StudyDetailsTab
