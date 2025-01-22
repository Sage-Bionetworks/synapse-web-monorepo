import { Box, Typography, CardMedia, Skeleton, Link } from '@mui/material'
import {
  FileHandleAssociateType,
  FileHandleAssociation,
  QueryBundleRequest,
  Row,
} from '@sage-bionetworks/synapse-types'
import { useGetStablePresignedUrl } from '../../synapse-queries'
import { parseEntityIdFromSqlStatement } from '../../utils/functions'
import { SynapseConstants } from '../../utils'
import useGetQueryResultBundle from '../../synapse-queries/entity/useGetQueryResultBundle'
import { getFieldIndex } from '../../utils/functions/queryUtils'

export type PartnersProps = {
  sql: string
}

type Icons = {
  partner: Row
  imageColIndex: number
  organizationNameColIndex: number
  websiteColIndex: number
  entityId: string
  isLoading?: boolean
}

const useImageUrl = (fileId: string, entityId: string) => {
  const fha: FileHandleAssociation = {
    associateObjectId: entityId,
    associateObjectType: FileHandleAssociateType.TableEntity,
    fileHandleId: fileId || '',
  }
  const stablePresignedUrl = useGetStablePresignedUrl(fha, false, {
    enabled: !!fileId,
  })
  const dataUrl = stablePresignedUrl?.dataUrl

  return dataUrl
}

const RenderPartnerIcon = ({
  partner,
  imageColIndex,
  organizationNameColIndex,
  websiteColIndex,
  entityId,
  isLoading,
}: Icons) => {
  const fileId = partner.values[imageColIndex] ?? ''
  const url = useImageUrl(fileId ?? '', entityId)

  if (!url && !partner?.values[organizationNameColIndex]) {
    return
  }

  return isLoading ? (
    <Skeleton variant="rectangular" height={101} width={156} />
  ) : (
    <Link
      href={partner.values[websiteColIndex] ?? ''}
      target="_blank"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {url ? (
        <CardMedia
          component="img"
          image={url}
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
              }}
            >
              {partner?.values[organizationNameColIndex ?? -1]}
            </Typography>
          </Box>
        </Box>
      )}
    </Link>
  )
}

const Partners = ({ sql }: PartnersProps) => {
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
    ORGANIZATIONNAME = 'organizationName',
    WEBSITE = 'website',
  }

  const imageColIndex = getFieldIndex(
    ExpectedColumns.CARDLOGO,
    queryResultBundle,
  )

  const organizationNameColIndex = getFieldIndex(
    ExpectedColumns.ORGANIZATIONNAME,
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
        padding: { xs: '40px', md: '20px 80px' },
        backgroundColor: 'grey.100',
        gridTemplateColumns: { xs: '1fr', md: '1fr 3fr' },
        gap: '50px',
      }}
    >
      <Box
        sx={{
          borderTop: '3px solid',
          borderColor: 'grey.400',
          gap: '16px',
        }}
      >
        <Typography
          color="grey.1000"
          variant="headline2"
          paddingTop="26px"
          fontSize="24px"
        >
          Our Partners
        </Typography>
      </Box>
      <Box
        sx={theme => ({
          display: 'flex',
          flexWrap: 'wrap',
          gap: '64px',
          flex: '1 1 0',
          [theme.breakpoints.down('sm')]: {
            justifyContent: 'center',
          },
        })}
      >
        {dataRows?.map((partner, index) => (
          <RenderPartnerIcon
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

export default Partners
