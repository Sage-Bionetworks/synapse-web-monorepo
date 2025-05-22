import SynapseImage, { SynapseImageProps } from '../../widgets/SynapseImage'
import { useWikiContext } from '../SynapseWikiContext'

export type ImageWidgetParams = Omit<
  SynapseImageProps,
  'params' | 'fileResults'
> &
  SynapseImageProps['params']

export default function MarkdownSynapseImage(
  widgetParamsMapped: ImageWidgetParams,
) {
  const { wikiId, wikiPage, fileHandles } = useWikiContext()
  if (widgetParamsMapped.fileName) {
    if (!fileHandles) {
      // ensure files are loaded
      return <></>
    }
    // if file name is attached then the fileHandle ID is located
    // in this wiki's file attachment list
    return (
      <SynapseImage
        params={widgetParamsMapped}
        fileName={widgetParamsMapped.fileName}
        wikiId={wikiId || wikiPage?.id}
        fileResults={fileHandles.list}
      />
    )
  }
  if (widgetParamsMapped.synapseId) {
    // otherwise this image's fileHandle ID is not located
    // in the file attachment list and will be loaded first
    return (
      <SynapseImage
        params={widgetParamsMapped}
        synapseId={widgetParamsMapped.synapseId}
        version={widgetParamsMapped.version}
      />
    )
  }
  return <></>
}
