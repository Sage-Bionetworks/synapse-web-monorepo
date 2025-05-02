import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import { ObjectType } from '@sage-bionetworks/synapse-types'
import { useLoaderData } from 'react-router'
import MarkdownSynapse from 'synapse-react-client/components/Markdown/MarkdownSynapse'
import SynapseClient from 'synapse-react-client/synapse-client/index'

export async function clientLoader() {
  const ownerId = 'syn12666371'
  const wikiId = '581937'

  const wikiPage = await SynapseClient.getEntityWiki(
    undefined,
    ownerId,
    wikiId,
    ObjectType.ENTITY,
  )

  return { markdown: wikiPage.markdown }
}

function DataAccess() {
  const { markdown } = useLoaderData()
  return (
    <SectionLayout title={'Data Access'}>
      <MarkdownSynapse
        markdown={markdown}
        // ownerId="syn12666371"
        // wikiId="581937"
        // loadingSkeletonRowCount={20}
      />
    </SectionLayout>
  )
}

export default DataAccess
