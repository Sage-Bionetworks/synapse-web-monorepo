import { GenericCardTitle } from '@/components/GenericCard/GenericCardTitle'
import { CardLabel } from '@/components/row_renderers/utils/CardFooter'
import { Box, Link, Stack } from '@mui/material'
import { FileHandleAssociation } from '@sage-bionetworks/synapse-types'
import React, { CSSProperties, forwardRef } from 'react'
import { Link as RouterLink, useInRouterContext } from 'react-router'
import { ColumnIconConfigs, DescriptionConfig } from '../CardContainerLogic'
import HeaderCard, { HeaderCardVariant } from '../HeaderCard'
import { CardFooter } from '../row_renderers/utils'
import { FileHandleLink } from '../widgets/FileHandleLink'
import { CollapsibleDescription } from './CollapsibleDescription'
import { SustainabilityScorecardProps } from '../SustainabilityScorecard/SustainabilityScorecard'

export type GenericCardProps = {
  /** String representing the 'type' of object. This is displayed as a label on the card. */
  type: string
  /** The title displayed on the card. */
  title: string
  /** Optionally provide href/target if the title should be a link */
  titleLinkConfiguration?: {
    href: string
    target: string
    isExternal?: boolean
  }
  /** Optionally provide configuration if the title should be a link to a Synapse FileHandle */
  titleAsFileHandleLinkConfiguration?: {
    /** The FileHandleAssociation used to get access to the file handle */
    fileHandleAssociation: FileHandleAssociation
    /** Whether a 'download' icon should be shown */
    showDownloadIcon: boolean
  }
  /** An optional subtitle to be displayed on the card */
  subtitle?: string
  /** An description to be displayed on the card */
  description: string
  /** An optional description subtitle to be displayed on the card */
  descriptionSubTitle?: string
  /** Configuration for altering the display of the description prop */
  descriptionConfig?: DescriptionConfig
  /** Optional slot for adding content to the top of the card */
  cardTopContent?: React.ReactNode
  /** Optional slot for adding action buttons to the top of the card */
  cardTopButtons?: React.ReactNode
  /** If true, a HeaderCard component will be rendered */
  isHeader?: boolean
  /** The variant of HeaderCard to render if `isHeader` is true */
  headerCardVariant?: HeaderCardVariant
  /** Set to true if the icon is an arbitrary image. The card styles will be updated to accommodate the image
   * @default false */
  useStylesForDisplayedImage?: boolean
  /**
   * The rendered icon on the card
   */
  icon: React.ReactNode
  /**
   * The card labels to be displayed in the footer of the card
   */
  labels?: CardLabel[]
  /**
   * The initial number of labels to display in the footer of the card
   */
  secondaryLabelLimit?: number
  /**
   * Options for displaying icons with the labels in the card footer
   */
  columnIconOptions?: ColumnIconConfigs
  /**
   * Optional configuration for displaying a CTA button on the card
   */
  ctaLinkConfig?: {
    text: React.ReactNode
    href?: string
    target?: string
    isExternal?: boolean
  }
  /**
   * The rendered icon list on the card
   */
  renderedIconList?: React.ReactNode
  /**
   * Optional sustainability scorecard to be displayed on the header card
   */
  sustainabilityScorecard?: SustainabilityScorecardProps
  /**
   * Optional ReactNode to be rendered next to the card type
   */
  cardTypeAdornment?: React.ReactNode
  /**
   * Character count threshold for truncating description
   * @default 400
   */
  charCountCutoff?: number
}

const EMPTY_CARD_LABEL_ARRAY: CardLabel[] = []

/**
 * Generic portal card UI component with a predefined layout
 */
export const GenericCard = forwardRef(function GenericCard(
  props: GenericCardProps,
  ref: React.Ref<HTMLDivElement>,
) {
  const {
    icon,
    type,
    title,
    titleLinkConfiguration,
    titleAsFileHandleLinkConfiguration,
    subtitle,
    description,
    descriptionSubTitle = '',
    descriptionConfig,
    cardTopContent,
    cardTopButtons,
    isHeader = false,
    headerCardVariant,
    useStylesForDisplayedImage = false,
    labels = EMPTY_CARD_LABEL_ARRAY,
    secondaryLabelLimit,
    columnIconOptions,
    ctaLinkConfig,
    renderedIconList,
    sustainabilityScorecard,
    cardTypeAdornment,
    charCountCutoff,
  } = props

  const inRouterContext = useInRouterContext()
  const showFooter = labels.length > 0

  const style: CSSProperties = {
    // undefined, take default value from class
    marginTop: isHeader ? '0px' : undefined,
    marginBottom: isHeader ? '0px' : undefined,
    paddingBottom:
      showFooter || useStylesForDisplayedImage ? undefined : '15px',
  }

  if (isHeader) {
    return (
      <HeaderCard
        ref={ref}
        headerCardVariant={headerCardVariant}
        descriptionConfig={descriptionConfig}
        charCountCutoff={charCountCutoff}
        title={title}
        subTitle={subtitle}
        description={description}
        type={type}
        icon={icon}
        values={labels}
        href={titleLinkConfiguration?.href}
        target={titleLinkConfiguration?.target}
        isExternal={titleLinkConfiguration?.isExternal}
        ctaLinkConfig={ctaLinkConfig}
        isAlignToLeftNav={true}
        secondaryLabelLimit={secondaryLabelLimit}
        cardTopButtons={cardTopButtons}
        cardTopContent={cardTopContent}
        sustainabilityScorecard={sustainabilityScorecard}
      />
    )
  }

  return (
    <div style={style} ref={ref} className={'SRC-portalCard'}>
      <div className={'SRC-portalCardMain'}>
        {icon}
        <div className="SRC-cardContent">
          {cardTopButtons && (
            <Box
              sx={{
                position: 'absolute',
                right: '24px',
                display: 'flex',
                float: 'right',
                flexDirection: 'row',
                gap: '10px',
              }}
            >
              {cardTopButtons}
            </Box>
          )}
          <Stack
            sx={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <div className="SRC-type">{type}</div>
            {cardTypeAdornment}
          </Stack>
          {renderedIconList}
          <div>
            <h3
              className="SRC-boldText SRC-blackText"
              style={{ margin: 'none' }}
            >
              {!titleAsFileHandleLinkConfiguration && (
                <GenericCardTitle
                  title={title}
                  href={titleLinkConfiguration?.href}
                  target={titleLinkConfiguration?.target}
                  isExternal={titleLinkConfiguration?.isExternal}
                />
              )}
              {titleAsFileHandleLinkConfiguration && (
                <FileHandleLink
                  fileHandleAssociation={
                    titleAsFileHandleLinkConfiguration.fileHandleAssociation
                  }
                  showDownloadIcon={
                    titleAsFileHandleLinkConfiguration.showDownloadIcon
                  }
                  displayValue={title}
                />
              )}
            </h3>
          </div>
          {subtitle && <div className="SRC-author">{subtitle}</div>}
          <CollapsibleDescription
            description={description}
            descriptionSubTitle={descriptionSubTitle}
            descriptionConfig={descriptionConfig}
          />
          {ctaLinkConfig && ctaLinkConfig.text && ctaLinkConfig.href && (
            <Box sx={{ mt: '20px' }}>
              {!ctaLinkConfig.isExternal && inRouterContext ? (
                <Link component={RouterLink} to={ctaLinkConfig.href}>
                  {ctaLinkConfig.text}
                </Link>
              ) : (
                <Link
                  target={ctaLinkConfig.target}
                  rel="noopener noreferrer"
                  href={ctaLinkConfig.href}
                >
                  {ctaLinkConfig.text}
                </Link>
              )}
            </Box>
          )}
        </div>
      </div>
      {showFooter && (
        <CardFooter
          isHeader={false}
          secondaryLabelLimit={secondaryLabelLimit}
          values={labels}
          columnIconOptions={columnIconOptions}
          className={useStylesForDisplayedImage ? undefined : 'hasIcon'}
          cardTopContent={cardTopContent}
        />
      )}
    </div>
  )
})

export default GenericCard
