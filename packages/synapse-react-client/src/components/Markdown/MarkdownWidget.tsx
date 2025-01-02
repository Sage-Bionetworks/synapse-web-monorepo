import { SynapseErrorBoundary } from '../error/ErrorBanner'
import MarkdownButton, { ButtonLinkWidgetParams } from './widget/MarkdownButton'
import MarkdownEntityPreview, {
  MarkdownEntityPreviewProps,
} from './widget/MarkdownEntityPreview'
import MarkdownIDUReport, {
  MarkdownIDUReportProps,
} from './widget/MarkdownIDUReport'
import MarkdownProvenanceGraph, {
  MarkdownProvenanceGraphProps,
} from './widget/MarkdownProvenanceGraph'
import MarkdownSynapseImage, {
  ImageWidgetParams,
} from './widget/MarkdownSynapseImage'
import MarkdownSynapsePlot, {
  MarkdownSynapsePlotProps,
} from './widget/MarkdownSynapsePlot'
import MarkdownSynapseTable, {
  MarkdownSynapseTableProps,
} from './widget/MarkdownSynapseTable'
import MarkdownTableOfContents from './widget/MarkdownTableOfContents'
import MarkdownUserOrTeamBadge, {
  MarkdownUserOrTeamBadgeProps,
} from './widget/MarkdownUserOrTeamBadge'
import MarkdownVideo, { MarkdownVideoProps } from './widget/MarkdownVideo'

type ButtonLink = {
  widgetType: 'buttonlink'
  widgetParamsMapped: ButtonLinkWidgetParams
}

type Image = {
  widgetType: 'image'
  widgetParamsMapped: ImageWidgetParams
}

type Plot = {
  widgetType: 'plot'
  widgetParamsMapped: MarkdownSynapsePlotProps
}

type TableOfContents = {
  widgetType: 'toc'
  widgetParamsMapped: never
}

type UserBadge = {
  widgetType: 'badge'
  widgetParamsMapped: MarkdownUserOrTeamBadgeProps
}

type IDUReport = {
  widgetType: 'iduReport'
  widgetParamsMapped: MarkdownIDUReportProps
}

type Video = {
  widgetType: 'video' | 'vimeo' | 'youtube'
  widgetParamsMapped: MarkdownVideoProps
}

type SynapseTableMarkdown = {
  widgetType: 'synapsetable'
  widgetParamsMapped: MarkdownSynapseTableProps
}

type ProvenanceGraph = {
  widgetType: 'provenance'
  widgetParamsMapped: MarkdownProvenanceGraphProps
}

type Preview = {
  widgetType: 'preview'
  widgetParamsMapped: MarkdownEntityPreviewProps
}

type MarkdownWidgetDefinition =
  | ButtonLink
  | Image
  | Plot
  | TableOfContents
  | UserBadge
  | IDUReport
  | Video
  | SynapseTableMarkdown
  | ProvenanceGraph
  | Preview

export type MarkdownWidgetProps = MarkdownWidgetDefinition & {
  originalMarkup: string
}

function MarkdownWidget(props: MarkdownWidgetProps) {
  const { widgetType, widgetParamsMapped, originalMarkup } = props
  switch (widgetType) {
    case 'buttonlink':
      return <MarkdownButton {...widgetParamsMapped} />
    case 'image':
      return <MarkdownSynapseImage {...widgetParamsMapped} />
    case 'plot':
      return <MarkdownSynapsePlot {...widgetParamsMapped} />
    case 'toc':
      return <MarkdownTableOfContents originalMarkup={originalMarkup} />
    case 'badge':
      return <MarkdownUserOrTeamBadge {...widgetParamsMapped} />
    case 'iduReport':
      return <MarkdownIDUReport {...widgetParamsMapped} />
    case 'video':
    case 'vimeo':
    case 'youtube':
      return <MarkdownVideo {...widgetParamsMapped} />
    case 'synapsetable':
      return <MarkdownSynapseTable {...widgetParamsMapped} />
    case 'provenance':
      return <MarkdownProvenanceGraph {...widgetParamsMapped} />
    case 'preview':
      return <MarkdownEntityPreview {...widgetParamsMapped} />
    default:
      console.warn(`Unsupported widget: ${widgetType}.`)
      return <></>
  }
}

export default function MarkdownWidgetWithWrapper(props: MarkdownWidgetProps) {
  // Wrap the widget in an error boundary.
  return (
    <SynapseErrorBoundary>
      <MarkdownWidget {...props} />
    </SynapseErrorBoundary>
  )
}
