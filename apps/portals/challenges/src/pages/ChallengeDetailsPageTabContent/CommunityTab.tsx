import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import ProjectDiscussionForum from '@sage-bionetworks/synapse-portal-framework/components/ProjectDiscussionForum'

function CommunityTab() {
  return (
    <DetailsPageContent
      content={[
        {
          id: 'Discussion Forum',
          title: 'Discussion Forum',
          element: <ProjectDiscussionForum />,
        },
      ]}
    />
  )
}

export default CommunityTab
