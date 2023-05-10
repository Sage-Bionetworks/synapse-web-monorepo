import { WithContext, Dataset } from 'schema-dts'
import useJsonLdScriptElement from '../utils/hooks/useJsonLdScriptElement'
import { useGetEntityBundle } from '../utils/hooks/SynapseAPI'
import MarkdownIt from 'markdown-it'
import { useWikiPage } from '../utils/hooks/SynapseAPI/useWikiPage'
import dayjs from 'dayjs'

declare const markdownit: typeof MarkdownIt
const md = markdownit({ html: true })

interface DatasetJsonLdScriptOption1Props {
  entityId: string
  version: number
  searchParams: never
}
interface DatasetJsonLdScriptOption2Props {
  entityId: never
  version: never
  searchParams?: { [key: string]: string } // can be injected if this component is embedded in a Dataset Details page
}
export type DatasetJsonLdScriptProps =
  | DatasetJsonLdScriptOption1Props
  | DatasetJsonLdScriptOption2Props

const getPlainText = (html: string): string => {
  const divContainer = document.createElement('div')
  divContainer.innerHTML = html
  return divContainer.textContent || divContainer.innerText || ''
}

/**
 * This component will add a Dataset json ld script tag to the page when rendered.
 */
export default function DatasetJsonLdScript(props: DatasetJsonLdScriptProps) {
  const {
    entityId: entityIdFromProps,
    version: versionFromProps,
    searchParams,
  } = props
  let entityId: string
  let version: number | undefined
  if (entityIdFromProps) {
    entityId = entityIdFromProps
    version = versionFromProps
  } else if (searchParams) {
    entityId = searchParams['id']
    if (searchParams['version']) {
      version = parseInt(searchParams['version'])
    }
  }
  const { data: entityBundle } = useGetEntityBundle(entityId!, version)
  const { data: wikiPage } = useWikiPage(entityId!)
  const html = md.renderInline(wikiPage?.markdown ?? '')
  const plainTextWiki = getPlainText(html)
  const annotationsObject = entityBundle?.annotations.annotations
  const keywords = annotationsObject
    ? Object.keys(annotationsObject).map(key => {
        return `${key}, ${annotationsObject[key].value.join(', ')}`
      })
    : []
  const myDataset: WithContext<Dataset> = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: entityBundle?.entity.name,
    description: plainTextWiki,
    url: window.location.href,
    version: version,
    keywords: keywords,
    includedInDataCatalog: {
      '@type': 'DataCatalog',
      name: 'Synapse',
      url: 'https://www.synapse.org',
    },
    isAccessibleForFree: true,
    dateModified: dayjs(entityBundle?.entity.modifiedOn).toISOString(),
  }
  useJsonLdScriptElement(myDataset)
}
