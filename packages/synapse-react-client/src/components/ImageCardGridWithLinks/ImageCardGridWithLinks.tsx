import React, { useEffect, useState } from 'react'
import { Box, CardMedia, Grid, Link, Typography, Skeleton } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { SynapseConstants, useSynapseContext } from '../../utils'
import {
  BatchFileRequest,
  FileHandleAssociateType,
  FileHandleAssociation,
  QueryBundleRequest,
  Row,
} from '@sage-bionetworks/synapse-types'
import useGetQueryResultBundle from '../../synapse-queries/entity/useGetQueryResultBundle'
import { getFieldIndex } from '../../utils/functions/queryUtils'
import { getFiles } from '../../synapse-client/SynapseClient'
import { parseEntityIdFromSqlStatement } from '../../utils/functions/SqlFunctions'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

export type ImageCardGridWithLinksProps = {
  sql: string
  title: string
  summaryText: string
}

type ImageCardProps = {
  card: Row
  index: number
}

enum ExpectedColumns {
  LINKTEXT = 'LinkText',
  LINK = 'Link',
  IMAGE = 'Image',
}

function ImageCardGridWithLinks(props: ImageCardGridWithLinksProps) {
  const { sql, title, summaryText } = props
  const { accessToken } = useSynapseContext()
  const [images, setImages] = useState<string[] | undefined>()

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

  useEffect(() => {
    const getData = async () => {
      try {
        const imageColumnIndex = getFieldIndex(
          ExpectedColumns.IMAGE,
          queryResultBundle,
        )
        const image = (queryResultBundle?.queryResult!.queryResults.rows.map(
          el => el.values[imageColumnIndex],
        ) ?? []) as string[]
        const imageFileHandleIds = image.filter(
          v => v != null && v !== undefined,
        )
        if (imageFileHandleIds.length === 0) {
          return
        }
        const fileHandleAssociationList: FileHandleAssociation[] =
          imageFileHandleIds.map(fileId => {
            return {
              associateObjectId: entityId,
              associateObjectType: FileHandleAssociateType.TableEntity,
              fileHandleId: fileId,
            }
          })
        const batchFileRequest: BatchFileRequest = {
          includeFileHandles: false,
          includePreSignedURLs: true,
          includePreviewPreSignedURLs: false,
          requestedFiles: fileHandleAssociationList,
        }
        const files = await getFiles(batchFileRequest, accessToken)
        setImages(
          files.requestedFiles
            .filter(el => el.preSignedURL !== undefined)
            .map(el => el.preSignedURL!),
        )
      } catch (e) {
        console.error('Error on get data', e)
      }
    }
    getData()
  }, [entityId, accessToken, queryResultBundle])

  const dataRows = queryResultBundle?.queryResult!.queryResults.rows ?? []
  const linkColumnIndex = getFieldIndex(ExpectedColumns.LINK, queryResultBundle)
  const linkTextColumnIndex = getFieldIndex(
    ExpectedColumns.LINKTEXT,
    queryResultBundle,
  )

  const ImageCard = ({ card, index }: ImageCardProps) => (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      key={card.rowId}
      sx={{ height: '245px', paddingTop: '24px', paddingLeft: '24px' }}
    >
      {isLoading ? (
        <Skeleton variant="rectangular" height={221} width="100%" />
      ) : (
        <>
          <Link
            component={RouterLink}
            to={card.values[linkColumnIndex] || ''}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              position: 'absolute',
              backgroundColor: '#FFFF',
              borderRadius: '5px 0 6px 0',
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'none',
              },
              padding: '6px 10px',
            }}
          >
            <Box sx={{ color: 'grey.1000' }}>
              {card.values[linkTextColumnIndex]}
            </Box>
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
            image={images?.[index]}
            style={{
              height: '100%',
              width: '100%',
              borderRadius: '6px',
              objectFit: 'cover',
            }}
          />
        </>
      )}
    </Grid>
  )

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '1fr 3fr' },
        gap: { xs: '38px', md: '80px' },
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
          <Typography variant="headline2" paddingTop="26px">
            {title}
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontStyle: 'italic', color: '#4A5056' }}
          >
            {summaryText}
          </Typography>
        </Box>
      </Box>
      <Grid
        container
        spacing={2}
        sx={{
          order: { xs: 1, md: 0 },
        }}
      >
        <Grid container spacing={2.5} sx={{ margin: 0 }}>
          {dataRows.map((card, index) => (
            <ImageCard card={card} key={card.rowId} index={index} />
          ))}
        </Grid>
      </Grid>
    </Box>
  )
}

export default ImageCardGridWithLinks
