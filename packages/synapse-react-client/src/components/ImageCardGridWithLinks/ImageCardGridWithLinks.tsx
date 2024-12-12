import {
  Box,
  CardMedia,
  Grid,
  Link,
  Typography,
  Skeleton,
  Card,
} from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { SynapseConstants } from '../../utils'
import {
  FileHandleAssociateType,
  FileHandleAssociation,
  QueryBundleRequest,
  Row,
} from '@sage-bionetworks/synapse-types'
import useGetQueryResultBundle from '../../synapse-queries/entity/useGetQueryResultBundle'
import { getFieldIndex } from '../../utils/functions/queryUtils'
import { parseEntityIdFromSqlStatement } from '../../utils/functions/SqlFunctions'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { useGetStablePresignedUrl } from '../../synapse-queries'

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
          }}
        >
          <Link
            component={RouterLink}
            to={card.values[linkColumnIndex] || ''}
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
          </Link>
          <CardMedia
            component="img"
            image={dataUrl}
            style={{
              height: '100%',
              width: '100%',
              objectFit: 'cover',
            }}
          />
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
      <Box
        sx={{
          padding: {
            xs: '0 16px',
            md: 0,
          },
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          gap="16px"
          sx={{ borderTop: '3px solid', borderColor: 'grey.400' }}
        >
          <Typography color="grey.1000" variant="headline2" paddingTop="26px">
            {title}
          </Typography>
          <Typography
            variant="body1"
            color="grey.800"
            sx={{ fontStyle: 'italic' }}
          >
            {summaryText}
          </Typography>
        </Box>
      </Box>
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
