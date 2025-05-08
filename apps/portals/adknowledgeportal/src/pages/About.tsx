import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import MarkdownSynapse from 'synapse-react-client/components/Markdown/MarkdownSynapse'

function About() {
  return (
    <SectionLayout title={'About'}>
      <MarkdownSynapse
        ownerId="syn12666371"
        wikiId="581939"
        loadingSkeletonRowCount={20}
      />
    </SectionLayout>
  )
}

export default About
