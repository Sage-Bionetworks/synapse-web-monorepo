import { GenericCardTitle } from '@/components/GenericCard/GenericCardTitle'
import { CardLabel } from '@/components/row_renderers/utils/CardFooter'
import { Box, Link, Stack } from '@mui/material'
import { FileHandleAssociation } from '@sage-bionetworks/synapse-types'
import React, { CSSProperties } from 'react'
import { ColumnIconConfigs, DescriptionConfig } from '../CardContainerLogic'
import HeaderCard, { HeaderCardVariant } from '../HeaderCard'
import { CardFooter } from '../row_renderers/utils'
import { FileHandleLink } from '../widgets/FileHandleLink'
import { CollapsibleDescription } from './CollapsibleDescription'

type GenericCardProps = {
  /** String representing the 'type' of object. This is displayed as a label on the card. */
  type: string
  /** The title displayed on the card. */
  title: string
  /** Optionally provide href/target if the title should be a link */
  titleLinkConfiguration?: { href: string; target: string }
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
  }
  /**
   * The rendered icon list on the card
   */
  renderedIconList?: React.ReactNode
}

const EMPTY_CARD_LABEL_ARRAY: CardLabel[] = []

/**
 * Generic portal card UI component with a predefined layout
 */
export function GenericCard(props: GenericCardProps) {
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
  } = props

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
        headerCardVariant={headerCardVariant}
        descriptionConfig={descriptionConfig}
        title={title}
        subTitle={subtitle}
        description={description}
        type={type}
        icon={icon}
        values={labels}
        href={titleLinkConfiguration?.href}
        target={titleLinkConfiguration?.target}
        isAlignToLeftNav={true}
        secondaryLabelLimit={secondaryLabelLimit}
        ctaLinkConfig={ctaLinkConfig}
      />
    )
  }

  return (
    <div style={style} className={'SRC-portalCard'}>
      {cardTopContent}
      <div className={'SRC-portalCardMain'}>
        {icon}
        <div className="SRC-cardContent">
          <Stack
            sx={{
              flexDirection: 'row',
            }}
          >
            <div className="SRC-type">{type}</div>
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
              <Link
                target={ctaLinkConfig.target}
                rel="noopener noreferrer"
                href={ctaLinkConfig.href}
              >
                {ctaLinkConfig.text}
              </Link>
            </Box>
          )}
        </div>

        {cardTopButtons && (
          <Box
            sx={{
              marginLeft: 'auto',
              paddingTop: '21px',
              paddingRight: '40px',
              display: 'flex',
              flexDirection: 'row',
              gap: '10px',
            }}
          >
            {cardTopButtons}
          </Box>
        )}
      </div>
      {showFooter && (
        <CardFooter
          isHeader={false}
          secondaryLabelLimit={secondaryLabelLimit}
          values={labels}
          columnIconOptions={columnIconOptions}
          className={useStylesForDisplayedImage ? undefined : 'hasIcon'}
        />
      )}
    </div>
  )
}

export default GenericCard
