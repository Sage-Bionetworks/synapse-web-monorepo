import React from 'react'
import { ReleaseCardLarge } from './ReleaseCardLarge'
import { ReleaseCardMedium } from './ReleaseCardMedium'
import { ReleaseCardConfig } from './ReleaseCardTypes'

/**
 * Column index values into the row values given provided in "data"
 */
export type ReleaseCardSchema =
  // columns required in every table that drives a ReleaseCard
  {
    releaseEntity: number
    releaseVersion: number
    releaseDate: number
  } & Record<string, number> // columns used to define statistics and button to explore data

export type ReleaseCardProps = {
  schema: ReleaseCardSchema
  data: (string | null)[]
  includePortalCardClass?: boolean
  releaseCardConfig: ReleaseCardConfig
}

/**
 * Specialized Release Card, initially implemented for the GENIE portal.
 * Expects the following columns: releaseEntity, releaseVersion, releaseDate,
 * as well as statistics columns and columns for defining a button to explore data
 * as defined in the releaseCardConfig
 */
export const ReleaseCard: React.FunctionComponent<ReleaseCardProps> = (
  props: ReleaseCardProps,
) => {
  const { releaseCardConfig, ...rest } = props
  switch (releaseCardConfig.cardSize) {
    case 'large':
      return (
        <ReleaseCardLarge releaseCardConfig={releaseCardConfig} {...rest} />
      )
    case 'medium':
      return (
        <ReleaseCardMedium releaseCardConfig={releaseCardConfig} {...rest} />
      )
    default:
      console.error('No size specified for ReleaseCard')
      return <div />
  }
}
