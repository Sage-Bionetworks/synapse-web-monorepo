import { parseSynId } from '@/utils/functions/RegularExpressions'
import EntityPreview from '../../FilePreview/EntityPreview'

export type MarkdownEntityPreviewProps = {
  /** A Synapse Entity ID that may optionally contain a "dot" version, e.g. syn123 or syn123.2 */
  entityId: string
  /** An optional Entity version number. */
  versionNumber?: string
}

export default function MarkdownEntityPreview(
  props: MarkdownEntityPreviewProps,
) {
  const parsedReference = parseSynId(props.entityId)
  if (parsedReference == null) {
    throw new Error(`${props.entityId} is not a valid Synapse ID`)
  }
  const parsedVersionNumber = parseInt(props.versionNumber ?? '')

  const entityId = parsedReference.targetId
  const versionNumber = Number.isNaN(parsedVersionNumber)
    ? parsedReference.targetVersionNumber
    : parsedVersionNumber

  return <EntityPreview entityId={entityId} versionNumber={versionNumber} />
}
