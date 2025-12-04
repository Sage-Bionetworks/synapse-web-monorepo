import React from 'react'
import { HomePageCardProps } from './HomePageCard'
import HomePageCardContainer from './HomePageCardContainer'

export type AboutPortalProps = {
  cardProps: HomePageCardProps[]
}

const AboutPortal = (props: AboutPortalProps): React.ReactNode => {
  const { cardProps } = props
  return (
    <div className="AboutPortal">
      <div>
        <HomePageCardContainer cardProps={cardProps} />
      </div>
    </div>
  )
}

export default AboutPortal
