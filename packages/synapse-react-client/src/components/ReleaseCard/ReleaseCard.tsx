import { ReleaseCardLarge } from './ReleaseCardLarge'
import { ReleaseCardMedium } from './ReleaseCardMedium'
import { ReleaseCardConfig } from './ReleaseCardTypes'

/**
 * Column index values into the row values given provided in "data"
 * Used to define release metadata (entity id, name, date)
 * as well as statistics and button to explore data
 */
export type ReleaseCardSchema = Record<string, number>

export type ReleaseCardProps = {
  schema: ReleaseCardSchema
  data: (string | null)[]
  includePortalCardClass?: boolean
  releaseCardConfig: ReleaseCardConfig
}

/**
 * Specialized Release Card, initially implemented for the GENIE portal.
 * Expects columns used to define release metadata (entity id, name, date)
 * as well as statistics columns and columns for defining a button to explore data
 * as defined in the releaseCardConfig
 */
export function ReleaseCard(props: ReleaseCardProps) {
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
