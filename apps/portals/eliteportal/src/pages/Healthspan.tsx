import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import { Markdown } from 'synapse-react-client/components/Markdown/MarkdownSynapse'

function Healthspan() {
  return (
    <SectionLayout title={'Healthspan and Aging Trajectories'}>
      <Markdown
        ownerId="syn27229419"
        wikiId="630614"
        loadingSkeletonRowCount={15}
      />
    </SectionLayout>
  )
}

export default Healthspan
