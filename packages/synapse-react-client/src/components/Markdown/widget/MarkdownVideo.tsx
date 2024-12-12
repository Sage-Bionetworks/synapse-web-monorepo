import SynapseVideo, { SynapseVideoProps } from '../../widgets/SynapseVideo'

export type MarkdownVideoProps = SynapseVideoProps['params']

export default function MarkdownVideo(props: MarkdownVideoProps) {
  return <SynapseVideo params={props} />
}
