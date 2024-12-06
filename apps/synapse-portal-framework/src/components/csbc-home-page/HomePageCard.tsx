import { SynapseComponents } from 'synapse-react-client'

export type HomePageCardProps = {
  ownerId: string
  wikiId?: string
}

const HomePageCard = (props: HomePageCardProps) => {
  const { ownerId, wikiId } = props
  return (
    <div className="HomePageCard">
      <SynapseComponents.Markdown ownerId={ownerId} wikiId={wikiId} />
    </div>
  )
}

export default HomePageCard
