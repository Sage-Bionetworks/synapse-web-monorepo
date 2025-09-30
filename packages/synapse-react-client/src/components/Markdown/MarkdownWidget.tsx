import { lazy, Suspense } from 'react'
import { SynapseErrorBoundary } from '../error/ErrorBanner'
import type { ButtonLinkWidgetParams } from './widget/MarkdownButton'
import type { MarkdownEntityPreviewProps } from './widget/MarkdownEntityPreview'
import type { MarkdownIDUReportProps } from './widget/MarkdownIDUReport'
import type { MarkdownProvenanceGraphProps } from './widget/MarkdownProvenanceGraph'
import type { ImageWidgetParams } from './widget/MarkdownSynapseImage'
import type { MarkdownSynapsePlotProps } from './widget/MarkdownSynapsePlot'
import type { MarkdownSynapseTableProps } from './widget/MarkdownSynapseTable'
import type { MarkdownUserOrTeamBadgeProps } from './widget/MarkdownUserOrTeamBadge'
import type { MarkdownVideoProps } from './widget/MarkdownVideo'

// Lazy load all widgets -- some can be large & cyclical component trees that will prevent bundle-splitting if we do not dynamically import them
const MarkdownVideo = lazy(() => import('./widget/MarkdownVideo'))
const MarkdownEntityPreview = lazy(
  () => import('./widget/MarkdownEntityPreview'),
)
const MarkdownIDUReport = lazy(() => import('./widget/MarkdownIDUReport'))
const MarkdownProvenanceGraph = lazy(
  () => import('./widget/MarkdownProvenanceGraph'),
)
const MarkdownSynapseImage = lazy(() => import('./widget/MarkdownSynapseImage'))
const MarkdownSynapsePlot = lazy(() => import('./widget/MarkdownSynapsePlot'))
const MarkdownUserOrTeamBadge = lazy(
  () => import('./widget/MarkdownUserOrTeamBadge'),
)
const MarkdownButton = lazy(() => import('./widget/MarkdownButton'))
const MarkdownSynapseTable = lazy(() => import('./widget/MarkdownSynapseTable'))
const MarkdownTableOfContents = lazy(
  () => import('./widget/MarkdownTableOfContents'),
)

type ButtonLink = {
  widgetType: 'buttonlink'
  widgetParamsMapped: ButtonLinkWidgetParams
}

type Image = {
  widgetType: 'image'
  widgetParamsMapped: ImageWidgetParams
}

type ImageLink = {
  widgetType: 'imageLink'
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
  | ImageLink
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
    case 'imageLink':
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
  // Wrap the widget in an error boundary and suspense
  return (
    <SynapseErrorBoundary>
      <Suspense>
        <MarkdownWidget {...props} />
      </Suspense>
    </SynapseErrorBoundary>
  )
}
