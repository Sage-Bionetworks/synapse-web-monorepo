import { Reference } from '@sage-bionetworks/synapse-types'
import ProvenanceGraph from '../../ProvenanceGraph/ProvenanceGraph'

export type MarkdownProvenanceGraphProps = {
  entityList: string // comma delimited entity references of the form <synapse_ID>/version/<version_number>.  The /version/<version_number> is optional
  displayHeightPx: string
  // depth: string, // traverse the given depth, not currently supported in ProvenanceGraph
  // showExpand: string // option to make graph not expandable, not currently supported in ProvenanceGraph
}

export default function MarkdownProvenanceGraph(
  props: MarkdownProvenanceGraphProps,
) {
  const { entityList, displayHeightPx } = props
  // parse entityList
  const refs = entityList.split(',').map(v => {
    const entityAndVersion = v.split('/version/')
    const ref: Reference = {
      targetId: entityAndVersion[0],
      targetVersionNumber:
        entityAndVersion.length > 1 ? parseInt(entityAndVersion[1]) : undefined,
    }
    return ref
  })
  const containerHeight = displayHeightPx ? `${displayHeightPx}px` : undefined
  return <ProvenanceGraph entityRefs={refs} containerHeight={containerHeight} />
}
