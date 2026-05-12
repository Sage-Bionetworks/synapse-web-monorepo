import { CardLabel } from '@/components/row_renderers/utils/CardFooter'
import { Box, Container, SxProps } from '@mui/material'
import { SmartLink } from './SmartLink/SmartLink'
import { ForwardedRef, forwardRef } from 'react'
import { FileHandleLink } from './widgets/FileHandleLink'
import { GenericCardProps } from '@/components/GenericCard/GenericCard'
import { CardFooter } from './row_renderers/utils'
import { DescriptionConfig } from './CardContainerLogic'
import { CollapsibleDescription } from './GenericCard/CollapsibleDescription'
import HeaderCardV2 from './HeaderCard/HeaderCardV2'
import SustainabilityScorecard, {
  SustainabilityScorecardProps,
} from './SustainabilityScorecard/SustainabilityScorecard'
import { useDocumentMetadata } from '@/utils/context/DocumentMetadataContext'
import { AdaptiveTwoColumnLayout } from './AdaptiveTwoColumnLayout/AdaptiveTwoColumnLayout'

export type HeaderCardVariant = 'HeaderCard' | 'HeaderCardV2'

export type HeaderCardProps = {
  type: string
  title: string
  subTitle?: string
  description: string
  secondaryLabelLimit?: number
  values?: CardLabel[]
  isAlignToLeftNav?: boolean
  descriptionConfig?: DescriptionConfig
  charCountCutoff?: number
  href?: string
  target?: string
  titleAsFileHandleLinkConfiguration?: GenericCardProps['titleAsFileHandleLinkConfiguration']
  titleAreaRightContent?: React.ReactNode
  descriptionSubTitle?: string
  icon: React.ReactNode
  headerCardVariant?: HeaderCardVariant
  cardTopContent?: React.ReactNode
  ctaLinkConfig?: GenericCardProps['ctaLinkConfig']
  cardTopButtons?: React.ReactNode
  sustainabilityScorecard?: SustainabilityScorecardProps
  renderedIconList?: React.ReactNode
  cardTypeAdornment?: React.ReactNode
  doiUri?: string
  sx?: SxProps
}

const HeaderCardClassic = forwardRef(function HeaderCardClassic(
  props: HeaderCardProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const {
    type,
    title,
    subTitle = '',
    description,
    values,
    secondaryLabelLimit,
    isAlignToLeftNav,
    descriptionConfig,
    descriptionSubTitle = '',
    href,
    target,
    titleAsFileHandleLinkConfiguration,
    titleAreaRightContent,
    icon,
    cardTopContent,
    cardTopButtons,
    sustainabilityScorecard,
    renderedIconList,
    cardTypeAdornment,
    sx,
  } = props

  const descriptionConfiguration: DescriptionConfig = {
    ...descriptionConfig,
    showFullDescriptionByDefault:
      descriptionConfig?.showFullDescriptionByDefault ?? false,
  }

  const metadataDescription = description || subTitle || undefined
  useDocumentMetadata({
    title,
    description: metadataDescription,
    priority: 100,
  })

  return (
    <Box
      ref={ref}
      className={`SRC-portalCard SRC-portalCardHeader ${
        isAlignToLeftNav ? 'isAlignToLeftNav' : ''
      }`}
      sx={{
        // Break out of any constrained parent (e.g. margin:auto containers)
        // so the background stretches full-viewport width.
        width: '100vw',
        marginLeft: 'calc(50% - 50vw)',
        paddingBottom: '40px',
        ...sx,
      }}
    >
      <Container maxWidth="lg">
        {/* Row 1: type, cardTypeAdornment, cardTopButtons */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <div className="SRC-type">{type}</div>
          {cardTypeAdornment}
          <Box sx={{ flex: 1 }} />
          {cardTopButtons && (
            <Box sx={{ display: 'flex', gap: '10px' }}>{cardTopButtons}</Box>
          )}
        </Box>

        {/* Row 2: Title */}
        <Box>
          <h3 className="SRC-boldText" style={{ margin: 'none' }}>
            {titleAsFileHandleLinkConfiguration ? (
              <FileHandleLink
                fileHandleAssociation={
                  titleAsFileHandleLinkConfiguration.fileHandleAssociation
                }
                showDownloadIcon={
                  titleAsFileHandleLinkConfiguration.showDownloadIcon
                }
                displayValue={title}
              />
            ) : href ? (
              <SmartLink
                href={href ?? ''}
                className="highlight-link"
                target={target}
              >
                {title}
              </SmartLink>
            ) : (
              <span>{title}</span>
            )}
          </h3>
        </Box>

        {/* Row 3: renderedIconList */}
        {renderedIconList && (
          <Box
            sx={{
              '& .icon-list.themed path, & .icon-list.themed circle': {
                fill: 'white',
              },
            }}
          >
            {renderedIconList}
          </Box>
        )}

        {/* Row 4: Two columns with adaptive stacking.
            Stacks when leftHeight / rightHeight < 0.45 (measured once on mount). */}
        <AdaptiveTwoColumnLayout
          stackRatioThreshold={0.45}
          gap="16px"
          sx={{ marginTop: '24px' }}
          leftContent={
            <>
              {/* Column 1: icon (floated left) with subTitle and description flowing around */}
              {icon && (
                <Box
                  sx={{
                    width: '120px',
                    float: 'left',
                    paddingRight: '24px',
                    paddingBottom: '24px',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  {icon}
                </Box>
              )}
              {subTitle && <div className="SRC-author">{subTitle}</div>}
              <CollapsibleDescription
                description={description}
                descriptionSubTitle={descriptionSubTitle}
                descriptionConfig={descriptionConfiguration}
              />
              {sustainabilityScorecard && (
                <SustainabilityScorecard
                  metricsConfig={sustainabilityScorecard.metricsConfig}
                  searchParamKey={sustainabilityScorecard.searchParamKey}
                  filterColumn={sustainabilityScorecard.filterColumn}
                  scoreDescriptorColumnName={
                    sustainabilityScorecard.scoreDescriptorColumnName
                  }
                  queryRequest={sustainabilityScorecard.queryRequest}
                  sustainabilityReportLink={
                    sustainabilityScorecard.sustainabilityReportLink
                  }
                  sx={{
                    background: 'rgba(0, 0, 0, 0.10)',
                    marginTop: '30px',
                  }}
                />
              )}
              <Box sx={{ clear: 'both' }} />
            </>
          }
          rightContent={
            titleAreaRightContent || cardTopContent || values ? (
              /* Column 2: titleAreaRightContent, cardTopContent, CardFooter */
              <>
                {titleAreaRightContent && (
                  <div className="SRC-cardTitleAreaDetails">
                    {titleAreaRightContent}
                  </div>
                )}
                {cardTopContent && (
                  <div className="SRC-cardContent">{cardTopContent}</div>
                )}
                {values && (
                  <Box sx={{ '&& .SRC-cardMetadata': { paddingTop: 0 } }}>
                    <CardFooter
                      isHeader={true}
                      secondaryLabelLimit={secondaryLabelLimit}
                      values={values}
                    />
                  </Box>
                )}
              </>
            ) : undefined
          }
        />
      </Container>
    </Box>
  )
})

const HeaderCard = forwardRef(function HeaderCard(
  props: HeaderCardProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const { headerCardVariant = 'HeaderCard' } = props
  if (headerCardVariant === 'HeaderCardV2') {
    return <HeaderCardV2 {...props} ref={ref} />
  }
  return <HeaderCardClassic {...props} ref={ref} />
})

export default HeaderCard
