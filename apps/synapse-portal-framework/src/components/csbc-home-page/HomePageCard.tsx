import React from 'react'
import Markdown from 'synapse-react-client/components/Markdown/MarkdownSynapse'

export type HomePageCardProps = {
  ownerId: string
  wikiId?: string
}

const HomePageCard = (props: HomePageCardProps): React.ReactNode => {
  const { ownerId, wikiId } = props
  return (
    <div className="HomePageCard">
      <Markdown ownerId={ownerId} wikiId={wikiId} />
    </div>
  )
}

export default HomePageCard
