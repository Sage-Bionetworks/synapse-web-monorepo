import { CardLabel } from '@/components/row_renderers/utils/CardFooter'
import { Box, SxProps } from '@mui/material'
import { ForwardedRef, forwardRef } from 'react'
import { CardFooter } from './row_renderers/utils'
import { DescriptionConfig } from './CardContainerLogic'
import { CollapsibleDescription } from './GenericCard/CollapsibleDescription'
import { GenericCardProps } from '@/components/GenericCard/GenericCard'
import HeaderCardV2 from './HeaderCard/HeaderCardV2'
import SustainabilityScorecard, {
  SustainabilityScorecardProps,
} from './SustainabilityScorecard/SustainabilityScorecard'
import { useDocumentMetadata } from '@/utils/context/DocumentMetadataContext'
import { isExternalLink } from '@/utils/functions/IsExternalLink'

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
  href?: string
  target?: string
  icon: React.ReactNode
  headerCardVariant?: HeaderCardVariant
  cardTopContent?: React.ReactNode
  ctaLinkConfig?: GenericCardProps['ctaLinkConfig']
  cardTopButtons?: React.ReactNode
  sustainabilityScorecard?: SustainabilityScorecardProps
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
    href,
    target,
    icon,
    cardTopContent,
    cardTopButtons,
    sustainabilityScorecard,
    sx,
  } = props

  const hideIcon = Boolean(sustainabilityScorecard)
  const descriptionConfiguration: DescriptionConfig = {
    ...descriptionConfig,
    showFullDescriptionByDefault:
      descriptionConfig?.showFullDescriptionByDefault ?? true,
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
      sx={sx}
    >
      <div className="container-fluid container-full-width">
        <Box
          sx={{
            display: 'flex',
            gap: '10px',
            float: 'right',
          }}
        >
          {cardTopButtons}
        </Box>
        <div className="row">
          <div className="col-md-offset-1 col-md-10">
            <div className="SRC-portalCardMain">
              {!hideIcon && icon}
              <Box
                sx={{
                  width: '100%',
                  ...(hideIcon && {
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                  }),
                }}
              >
                <div className="SRC-cardContent" style={{ marginLeft: '15px' }}>
                  <div className="SRC-type">{type}</div>
                  <div>
                    <h3 className="SRC-boldText" style={{ margin: 'none' }}>
                      {href ? (
                        <a
                          target={
                            target ??
                            (isExternalLink(href) ? '_blank' : '_self')
                          }
                          href={href}
                          className="highlight-link"
                        >
                          {title}
                        </a>
                      ) : (
                        <span>{title}</span>
                      )}
                    </h3>
                  </div>
                  {subTitle && <div className="SRC-author"> {subTitle} </div>}
                  <CollapsibleDescription
                    description={description}
                    descriptionSubTitle=""
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
                </div>
                {(values || cardTopContent) && (
                  <>
                    <div
                      style={{
                        borderTop: '1px solid rgba(26, 28, 41, 0.2)',
                        marginTop: '15px',
                        paddingTop: '5px',
                      }}
                    />
                    <div className="SRC-cardContent">
                      {cardTopContent}
                      {values && (
                        <CardFooter
                          isHeader={true}
                          secondaryLabelLimit={secondaryLabelLimit}
                          values={values}
                        />
                      )}
                    </div>
                  </>
                )}
              </Box>
            </div>
          </div>
        </div>
      </div>
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
