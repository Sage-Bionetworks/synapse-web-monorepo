import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import { Markdown } from 'synapse-react-client/components/Markdown/MarkdownSynapse'

function DataAccess() {
  return (
    <>
      <SectionLayout title={'Data Access'}>
        <Markdown
          ownerId="syn27229419"
          wikiId="621276"
          loadingSkeletonRowCount={10}
        />
      </SectionLayout>
      <SectionLayout title={'ADAMTS7'}>
        <Markdown
          ownerId="syn27229419"
          wikiId="622372"
          loadingSkeletonRowCount={10}
        />
      </SectionLayout>
      <SectionLayout title={'ELPSCRNA'}>
        <Markdown
          ownerId="syn27229419"
          wikiId="622485"
          loadingSkeletonRowCount={10}
        />
      </SectionLayout>
      {/* <SectionLayout title={'Aging PheWAS'}>
                    <Markdown
                        ownerId="syn27229419"
                        wikiId="622480"
                        loadingSkeletonRowCount={10}
                      />
                  </SectionLayout>*/}
      <SectionLayout title={'LLFS US'}>
        <Markdown
          ownerId="syn27229419"
          wikiId="622486"
          loadingSkeletonRowCount={10}
        />
      </SectionLayout>
      <SectionLayout title={'LLFS Danish'}>
        <Markdown
          ownerId="syn27229419"
          wikiId="631447"
          loadingSkeletonRowCount={10}
        />
      </SectionLayout>
    </>
  )
}

export default DataAccess
