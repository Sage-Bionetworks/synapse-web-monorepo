import React from 'react'
import SynapsePlot, { SynapsePlotProps } from '../../widgets/SynapsePlot'
import { useWikiContext } from '../SynapseWikiContext'

export type PlotWidgetParams = SynapsePlotProps['widgetparamsMapped']

export default function MarkdownSynapsePlot(props: PlotWidgetParams) {
  const { ownerId, wikiId, wikiPage } = useWikiContext()
  return (
    <SynapsePlot
      ownerId={ownerId}
      wikiId={wikiId || wikiPage?.id}
      widgetparamsMapped={props}
    />
  )
}
