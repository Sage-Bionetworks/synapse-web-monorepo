import { useGetStablePresignedUrl } from '@/synapse-queries'
import useGetQueryResultBundle from '@/synapse-queries/entity/useGetQueryResultBundle'
import { SynapseConstants } from '@/utils'
import { getFieldIndex } from '@/utils/functions/queryUtils'
import { parseEntityIdFromSqlStatement } from '@/utils/functions/SqlFunctions'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import {
  Box,
  Card,
  CardMedia,
  Grid,
  Link,
  Skeleton,
  Typography,
} from '@mui/material'
import {
  FileHandleAssociateType,
  FileHandleAssociation,
  QueryBundleRequest,
  Row,
} from '@sage-bionetworks/synapse-types'
import { Link as RouterLink } from 'react-router'
import PortalSectionHeader from '../PortalSectionHeader'

const BORDER_RADIUS = '6px'

export type ImageCardGridWithLinksProps = {
  sql: string
  title: string
  summaryText: string
}

type ImageCardProps = {
  card: Row
  isLoading: boolean
  linkColumnIndex: number
  linkTextColumnIndex: number
  entityId: string
  fileId: string | null
}

enum ExpectedColumns {
  LINKTEXT = 'LinkText',
  LINK = 'Link',
  IMAGE = 'Image',
}

const ImageCard = ({
  card,
  isLoading,
  linkColumnIndex,
  linkTextColumnIndex,
  entityId,
  fileId,
}: ImageCardProps) => {
  const fha: FileHandleAssociation = {
    associateObjectId: entityId,
    associateObjectType: FileHandleAssociateType.TableEntity,
    fileHandleId: fileId ?? '',
  }
  const stablePresignedUrl = useGetStablePresignedUrl(fha, false, {
    enabled: !!fileId,
  })
  const dataUrl = stablePresignedUrl?.dataUrl

  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      key={card.rowId}
      sx={{
        height: '245px',
        paddingTop: '24px',
        paddingLeft: '24px',
      }}
    >
      {isLoading ? (
        <Skeleton variant="rectangular" height={221} width="100%" />
      ) : (
        <Card
          raised={false}
          sx={{
            height: '100%',
            position: 'relative',
            borderRadius: BORDER_RADIUS,
            border: 'none',
            transform: 'scale(1)',
            transition: '.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
            },
          }}
        >
          <Link component={RouterLink} to={card.values[linkColumnIndex] || ''}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                position: 'absolute',
                backgroundColor: '#FFFF',
                borderRadius: `0px 0px ${BORDER_RADIUS} 0px`,
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'none',
                },
                padding: '6px 10px',
              }}
            >
              <Typography
                color="grey.1000"
                variant="headline2"
                sx={{ fontSize: '16px' }}
              >
                {card.values[linkTextColumnIndex]}
              </Typography>
              <ArrowForwardIosIcon
                style={{
                  color: 'unset',
                  width: 16,
                  height: 16,
                }}
              />
            </Box>
            <CardMedia
              component="img"
              image={dataUrl}
              style={{
                height: '100%',
                width: '100%',
                objectFit: 'cover',
              }}
            />
          </Link>
        </Card>
      )}
    </Grid>
  )
}

function ImageCardGridWithLinks(props: ImageCardGridWithLinksProps) {
  const { sql, title, summaryText } = props
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

  const imageColumnIndex = getFieldIndex(
    ExpectedColumns.IMAGE,
    queryResultBundle,
  )

  const dataRows = queryResultBundle?.queryResult!.queryResults.rows ?? []
  const linkColumnIndex = getFieldIndex(ExpectedColumns.LINK, queryResultBundle)
  const linkTextColumnIndex = getFieldIndex(
    ExpectedColumns.LINKTEXT,
    queryResultBundle,
  )

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '1fr 3fr' },
        gap: { xs: '38px', md: '80px' },
        padding: { xs: '40px', lg: '80px' },
      }}
    >
      <PortalSectionHeader
        title={title}
        summaryText={summaryText}
        sx={{
          h2: { fontSize: '24px', paddingTop: '26px', width: '100%' },
          '& p': { fontSize: '16px', lineHeight: '24px' },
        }}
      />
      <Grid
        container
        spacing={2.5}
        sx={{
          order: { xs: 1, md: 0 },
        }}
      >
        {dataRows.map(card => {
          const fileId = card.values[imageColumnIndex]
          return (
            <ImageCard
              card={card}
              key={card.rowId}
              linkColumnIndex={linkColumnIndex}
              linkTextColumnIndex={linkTextColumnIndex}
              fileId={fileId}
              entityId={entityId}
              isLoading={isLoading}
            />
          )
        })}
      </Grid>
    </Box>
  )
}

export default ImageCardGridWithLinks
