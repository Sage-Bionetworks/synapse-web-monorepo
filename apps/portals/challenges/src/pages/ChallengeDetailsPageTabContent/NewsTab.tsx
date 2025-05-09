import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { MarkdownSynapseFromColumnData } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/markdown/MarkdownSynapseFromColumnData'

function NewsTab() {
  return (
    <DetailsPageContent
      content={[
        {
          id: 'Announcements',
          title: 'Announcements',
          element: (
            <MarkdownSynapseFromColumnData columnName={'Announcements'} />
          ),
        },
      ]}
    />
  )
}
export default NewsTab
