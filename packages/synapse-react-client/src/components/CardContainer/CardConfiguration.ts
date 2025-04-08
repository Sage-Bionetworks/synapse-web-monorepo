import { CardLink } from '@/components/CardContainer/CardLink'
import {
  ColumnIconConfigs,
  CTACardLink,
  DescriptionConfig,
  LabelLinkConfig,
} from '@/components/CardContainerLogic/CardContainerLogic'

import { TableToGenericCardMapping } from '@/components/GenericCard/TableRowGenericCard'
import { ReleaseCardConfig } from '@/components/ReleaseCard/index'
import {
  DATASET,
  FUNDER,
  GENERIC_CARD,
  MEDIUM_USER_CARD,
  OBSERVATION_CARD,
  RELEASE_CARD,
} from '@/utils/SynapseConstants'
import { IconOptions } from '../Icon/Icon'

// Card types with no additional props
type StandardCardTypeConfiguration = {
  /** The type of card to render */
  type: typeof FUNDER | typeof OBSERVATION_CARD | typeof MEDIUM_USER_CARD
}

type ReleaseCardConfiguration = {
  /** The type of card to render */
  type: typeof RELEASE_CARD
  /** Configuration if the card is of RELEASE_CARD type */
  releaseCardConfig: ReleaseCardConfig
}

type DatasetCardConfiguration = {
  /** The type of card to render */
  type: typeof DATASET
  /** Optional configuration for DATASET type */
  genericCardSchema?: TableToGenericCardMapping
}

type GenericCardConfiguration = {
  /** The type of card to render */
  type: typeof GENERIC_CARD
  /** Configuration if the card is of GENERIC_CARD type */
  genericCardSchema: TableToGenericCardMapping
}

/** The set of props that are common to all card configurations */
export type CommonCardProps = {
  /** The maximum number of labels to initially show in the card footer */
  secondaryLabelLimit?: number
  /** Optional configuration to configure the display/linking of the card's title */
  titleLinkConfig?: CardLink
  /** Optional configuration to configure the display/linking of the card's CTA button */
  ctaLinkConfig?: CTACardLink
  /** Optional configuration to configure the display/linking of the card's secondary labels */
  labelLinkConfig?: LabelLinkConfig
  /** Optional configuration for the description */
  descriptionConfig?: DescriptionConfig
  /** Optional configuration for rendering multiple icons within the card */
  columnIconOptions?: ColumnIconConfigs
}

export type CardConfiguration = {
  iconOptions?: IconOptions
} & CommonCardProps &
  (
    | StandardCardTypeConfiguration
    | GenericCardConfiguration
    | ReleaseCardConfiguration
    | DatasetCardConfiguration
  )
