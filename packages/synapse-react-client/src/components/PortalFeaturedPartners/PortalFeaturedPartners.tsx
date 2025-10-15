import useGetQueryResultBundle from '@/synapse-queries/entity/useGetQueryResultBundle'
import { SynapseConstants } from '@/utils'
import { parseEntityIdFromSqlStatement } from '@/utils/functions'
import { getFieldIndex } from '@/utils/functions/queryUtils'
import { useImageUrl } from '@/utils/hooks/useImageUrlUtils'
import {
  Box,
  CardMedia,
  Link,
  Skeleton,
  SxProps,
  Typography,
} from '@mui/material'
import { QueryBundleRequest, Row } from '@sage-bionetworks/synapse-types'
import PortalSectionHeader from '../PortalSectionHeader'

export type PortalFeaturedPartnersProps = {
  variation?: 'default' | 'centered'
  sql: string
  titleText?: string
  sx?: SxProps
}

type Icons = {
  partner: Row
  imageColIndex: number
  organizationNameColIndex: number
  websiteColIndex: number
  entityId: string
  isLoading?: boolean
}

const PartnerIcon = ({
  partner,
  imageColIndex,
  organizationNameColIndex,
  websiteColIndex,
  entityId,
  isLoading,
}: Icons) => {
  const fileId = partner.values[imageColIndex] ?? ''
  const imageUrl = useImageUrl(fileId ?? '', entityId)

  if (!imageUrl && !partner?.values[organizationNameColIndex]) {
    return
  }

  if (isLoading) {
    return <Skeleton variant="rectangular" height={101} width={156} />
  }

  return (
    <>
      {partner.values[websiteColIndex] ? (
        <Link
          href={partner.values[websiteColIndex] ?? ''}
          target="_blank"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none !important',
          }}
        >
          {imageUrl ? (
            <CardMedia
              component="img"
              image={imageUrl}
              aria-hidden="true"
              sx={{
                width: '156px',
                height: '101px',
                objectFit: 'contain',
                borderRadius: '10px',
              }}
            />
          ) : (
            <Box
              sx={{
                display: 'flex',
                width: '165px',
                padding: '3px',
                flexDirection: 'column',
                gap: '10px',
                border: '2px solid',
                borderColor: 'grey.900',
                backgroundColor: '#FFF',
                textAlign: 'center',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  padding: '10px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '10px',
                  border: '1px solid',
                  borderColor: 'grey.900',
                }}
              >
                <Typography
                  variant="headline3"
                  sx={{
                    fontSize: '14px',
                    fontWeight: 400,
                    lineHeight: '130%',
                    color: 'grey.900',
                  }}
                >
                  {partner?.values[organizationNameColIndex ?? -1]}
                </Typography>
              </Box>
            </Box>
          )}
        </Link>
      ) : (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none !important',
          }}
        >
          {imageUrl ? (
            <CardMedia
              component="img"
              image={imageUrl}
              aria-hidden="true"
              sx={{
                width: '156px',
                height: '101px',
                objectFit: 'contain',
                borderRadius: '10px',
              }}
            />
          ) : (
            <Box
              sx={{
                display: 'flex',
                width: '165px',
                padding: '3px',
                flexDirection: 'column',
                gap: '10px',
                border: '2px solid',
                borderColor: 'grey.900',
                backgroundColor: '#FFF',
                textAlign: 'center',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  padding: '10px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '10px',
                  border: '1px solid',
                  borderColor: 'grey.900',
                }}
              >
                <Typography
                  variant="headline3"
                  sx={{
                    fontSize: '14px',
                    fontWeight: 400,
                    lineHeight: '130%',
                    color: 'grey.900',
                  }}
                >
                  {partner?.values[organizationNameColIndex ?? -1]}
                </Typography>
              </Box>
            </Box>
          )}
        </Box>
      )}
    </>
  )
}

const PortalFeaturedPartners = ({
  sql,
  titleText = 'Our Partners',
  variation = 'default',
  sx,
}: PortalFeaturedPartnersProps) => {
  const entityId = parseEntityIdFromSqlStatement(sql)

  const queryBundleRequest: QueryBundleRequest = {
    partMask:
      SynapseConstants.BUNDLE_MASK_QUERY_SELECT_COLUMNS |
      SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    entityId,
    query: {
      sql,
    },
  }
  const { data: queryResultBundle, isLoading } =
    useGetQueryResultBundle(queryBundleRequest)

  const dataRows = queryResultBundle?.queryResult!.queryResults.rows ?? []

  enum ExpectedColumns {
    CARDLOGO = 'cardLogo',
    ORGANIZATION_NAME = 'organizationName',
    WEBSITE = 'website',
  }

  const imageColIndex = getFieldIndex(
    ExpectedColumns.CARDLOGO,
    queryResultBundle,
  )

  const organizationNameColIndex = getFieldIndex(
    ExpectedColumns.ORGANIZATION_NAME,
    queryResultBundle,
  )

  const websiteColIndex = getFieldIndex(
    ExpectedColumns.WEBSITE,
    queryResultBundle,
  )

  return (
    <Box
      sx={{
        display: 'grid',
        padding: { xs: '40px', lg: '20px 80px' },
        gridTemplateColumns:
          variation === 'centered'
            ? { xs: '1fr' }
            : { xs: '1fr', md: '1fr 3fr' },
        gap: '50px',
        textAlign: variation === 'centered' ? 'center' : 'left',
        ...sx,
      }}
    >
      {variation === 'default' ? (
        <PortalSectionHeader
          title={titleText}
          sx={{ h2: { fontSize: '24px', paddingTop: '26px', width: '100%' } }}
        />
      ) : (
        <Typography
          variant="headline1"
          sx={{ fontSize: '48px', color: 'grey.900' }}
        >
          {titleText}
        </Typography>
      )}
      <Box
        sx={theme => ({
          display: 'flex',
          flexWrap: 'wrap',
          gap: '64px',
          flex: '1 1 0',
          justifyContent: variation === 'centered' ? 'center' : 'flex-start',
          [theme.breakpoints.down('sm')]: {
            justifyContent: 'center',
          },
        })}
      >
        {dataRows?.map((partner, index) => (
          <PartnerIcon
            key={`partner-${index}`}
            partner={partner}
            imageColIndex={imageColIndex}
            organizationNameColIndex={organizationNameColIndex}
            websiteColIndex={websiteColIndex}
            entityId={entityId}
            isLoading={isLoading}
          />
        ))}
      </Box>
    </Box>
  )
}

export default PortalFeaturedPartners
