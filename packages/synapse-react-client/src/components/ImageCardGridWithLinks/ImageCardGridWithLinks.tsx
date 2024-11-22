import React, { useEffect, useState } from 'react'
import { Box, Card, CardMedia, Grid, Link, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import {
  SynapseClientError,
  SynapseConstants,
  useSynapseContext,
} from '../../utils'
import {
  BatchFileRequest,
  FileHandleAssociateType,
  FileHandleAssociation,
  QueryBundleRequest,
} from '@sage-bionetworks/synapse-types'
import useGetQueryResultBundle from '../../synapse-queries/entity/useGetQueryResultBundle'
import { getFieldIndex } from '../../utils/functions/queryUtils'
import { getFiles } from '../../synapse-client/SynapseClient'
import { parseEntityIdFromSqlStatement } from '../../utils/functions/SqlFunctions'

export type ImageCardGridWithLinksProps = {
  sql: string
  title: string
  summaryText: string
}

const StyledLink = styled(Link)(({ theme }) => ({
  position: 'absolute',
  backgroundColor: '#FFFF',
  borderRadius: '6px',
  textDecoration: 'none',
  zIndex: 2,
  color: theme.palette.primary.main,
  padding: '6px 10px 6px 10px',
}))

enum ExpectedColumns {
  LINKTEXT = 'LinkText',
  LINK = 'Link',
  IMAGE = 'Image',
}

function ImageCardGridWithLinks(props: ImageCardGridWithLinksProps) {
  const { sql, title, summaryText } = props
  const { accessToken } = useSynapseContext()
  const [images, setImages] = useState<string[] | undefined>()
  const [error, setError] = useState<string | SynapseClientError | undefined>()

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

  const { data: queryResultBundle } =
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
        setError(undefined)
        setImages(
          files.requestedFiles
            .filter(el => el.preSignedURL !== undefined)
            .map(el => el.preSignedURL!),
        )
      } catch (e) {
        console.error('Error on get data', e)
        setError(e)
      }
    }
    getData()
  }, [entityId, accessToken, queryResultBundle])

  const dataRows = queryResultBundle?.queryResult!.queryResults.rows ?? []

  console.log('querybundle', queryBundleRequest)
  console.log('sql', sql)
  console.log('qresult', queryResultBundle)
  console.log('drows', dataRows)
  console.log('images', images)

  const linkColumnIndex = getFieldIndex(ExpectedColumns.LINK, queryResultBundle)

  const linkTextColumnIndex = getFieldIndex(
    ExpectedColumns.LINKTEXT,
    queryResultBundle,
  )

  console.log('col', linkColumnIndex, linkTextColumnIndex)

  return (
    <Box padding={2} sx={{ display: 'flex', gap: '80px' }}>
      <Box
        display="flex"
        flexDirection="column"
        gap="16px"
        sx={{
          flex: 1,
          height: '4px',
          borderTop: '3px solid #DFE2E6',
          alignItems: 'flex-start',
        }}
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

      <Grid container sx={{ gap: '24px', flex: 2 }}>
        {dataRows.map((card, index) => (
          <Grid
            item
            key={index}
            xs={12}
            sm={6}
            md={3}
            lg={3}
            sx={{ paddingLeft: '0px', paddingTop: '0px' }}
          >
            <Card
              sx={{
                boxShadow: 'none',
                border: 'none',
                position: 'relative',
                width: '100%',
                height: '200px',
                borderRadius: '6px',
                padding: '0px',
              }}
            >
              <StyledLink
                href={card.values[linkColumnIndex] || ''}
                target="_blank"
                rel="noopener"
              >
                {card.values[linkTextColumnIndex]}
              </StyledLink>
              <CardMedia
                component="img"
                image={images?.[index]}
                style={{ height: '100%', width: '100%' }}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default ImageCardGridWithLinks
