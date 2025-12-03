import React from 'react'
import HomePageCard, { HomePageCardProps } from './HomePageCard'

export type HomePageCardContainerProps = {
  cardProps: HomePageCardProps[]
}

const HomePageCardContainer = (
  props: HomePageCardContainerProps,
): React.ReactNode => {
  const { cardProps } = props
  return (
    <div className="HomePageCardContainer">
      <div className="card-row">
        {cardProps.map((el, index) => (
          <HomePageCard key={`${el.ownerId} ${index} `} {...el} />
        ))}
      </div>
    </div>
  )
}

export default HomePageCardContainer
