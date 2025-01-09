import {
  Box,
  CardMedia,
  Link,
  Stack,
  Typography,
  Skeleton,
} from '@mui/material'
import {
  FileHandleAssociateType,
  FileHandleAssociation,
  QueryBundleRequest,
  Row,
} from '@sage-bionetworks/synapse-types'
import useGetQueryResultBundle from '../../synapse-queries/entity/useGetQueryResultBundle'
import { useGetStablePresignedUrl } from '../../synapse-queries'
import { getFieldIndex } from '../../utils/functions/queryUtils'
import * as SynapseConstants from '../../utils/SynapseConstants'
import { parseEntityIdFromSqlStatement } from '../../utils/functions/SqlFunctions'
import { formatDate } from '../../utils/functions/DateFormatter'
import dayjs from 'dayjs'

export type FeaturedResearchProps = {
  sql: string
}

export type FeaturedResearchCardProps = {
  research: Row
  entityId: string
  isLoading: boolean
  affiliationColIndex: number
  publicationDateColIndex: number
  titleColIndex: number
  descriptionColIndex: number
  tagsColIndex: number
  linkColIndex: number
  imageColIndex: number
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

const parseTags = (
  tagsColIndex: number,
  research: { values: (string | null)[] },
): string[] => {
  try {
    const tags = (
      research.values[tagsColIndex]
        ? JSON.parse(research.values[tagsColIndex] || '')
        : []
    ) as string[]
    return tags
  } catch (e) {
    console.error(e)
    return []
  }
}

const FeaturedResearchCard = ({
  research,
  entityId,
  affiliationColIndex,
  publicationDateColIndex,
  titleColIndex,
  tagsColIndex,
  linkColIndex,
  imageColIndex,
  isLoading,
}: FeaturedResearchCardProps) => {
  const fileId = research.values[imageColIndex] ?? ''
  const url = useImageUrl(fileId ?? '', entityId)
  if (isLoading) {
    return <Skeleton variant="rectangular" height={142} width="100%" />
  }
  return (
    <Box
      display={'flex'}
      gap={'30px'}
      borderBottom={'1px solid #EAECEE'}
      padding={'24px 0'}
      sx={{
        flexDirection: {
          xs: 'column',
          sm: 'row',
        },
      }}
    >
      <Stack useFlexGap gap={'10px'}>
        <Typography
          fontSize={'14px'}
          lineHeight={'normal'}
          fontWeight={500}
          color={'grey.600'}
        >
          {research.values[affiliationColIndex]}
        </Typography>
        <Typography variant="headline2" color="gray.1000" fontSize={'21px'}>
          <Link
            href={research.values[linkColIndex] ?? ''}
            target="_blank"
            sx={{
              color: 'grey.1000',
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'none',
              },
            }}
          >
            {research.values[titleColIndex]}
          </Link>
        </Typography>
        <Stack direction={'row'} useFlexGap gap={'16px'} alignItems={'center'}>
          <Typography
            variant="overline"
            fontSize={'14px'}
            sx={{
              backgroundColor: 'grey.300',
              borderRadius: '3px',
              padding: '4px 8px',
              lineHeight: 'initial',
            }}
          >
            {parseTags(tagsColIndex, research)?.[0] || ''}
          </Typography>
          <Typography lineHeight={'normal'} color={'grey.600'}>
            {research.values[publicationDateColIndex] &&
              formatDate(
                dayjs(Number(research.values[publicationDateColIndex])),
                'MMMM, YYYY',
              )}
          </Typography>
        </Stack>
      </Stack>
      <CardMedia
        component="img"
        image={url}
        aria-hidden="true"
        sx={{
          flexShrink: 0,
          width: '140px',
          height: '93.8px',
          borderRadius: '6px',
          objectFit: 'cover',
          marginLeft: { xs: 'initial', sm: 'auto' },
        }}
      />
    </Box>
  )
}

const FeaturedResearchTopCard = ({
  research,
  entityId,
  affiliationColIndex,
  titleColIndex,
  descriptionColIndex,
  tagsColIndex,
  linkColIndex,
  imageColIndex,
  isLoading,
}: FeaturedResearchCardProps) => {
  const fileId = research.values[imageColIndex] ?? ''
  const url = useImageUrl(fileId || '', entityId)
  if (isLoading) {
    return (
      <Skeleton
        variant="rectangular"
        width="100%"
        sx={{
          height: { xs: '250px', sm: '500px', md: '600px', lg: '800px' },
        }}
      />
    )
  }
  return (
    <div>
      <CardMedia
        component="img"
        image={url}
        aria-hidden="true"
        sx={{
          objectFit: 'cover',
          borderRadius: '10px',
          marginBottom: '30px',
        }}
      />
      <Stack
        direction="row"
        useFlexGap
        gap={'10px'}
        paddingBottom={'20px'}
        alignItems={'start'}
      >
        <Typography
          fontSize={'14px'}
          lineHeight={'normal'}
          sx={{
            fontWeight: 700,
            backgroundColor: 'primary.main',
            color: '#FFFF',
            padding: '3px 8px',
            borderRadius: '3px',
          }}
        >
          {parseTags(tagsColIndex, research)?.[0] || ''}
        </Typography>
        <Typography lineHeight={'normal'} color={'grey.600'}>
          {research.values[affiliationColIndex] ?? ''}
        </Typography>
      </Stack>
      <Stack useFlexGap gap={'16px'}>
        <Typography variant="headline2" fontSize={'36px'} color={'grey.1000'}>
          <Link
            href={research.values[linkColIndex] ?? ''}
            target="_blank"
            sx={{
              color: 'grey.1000',
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'none',
              },
            }}
          >
            {research.values[titleColIndex]}
          </Link>
        </Typography>
        <Typography fontSize={'18px'} lineHeight={'22.4px'}>
          {research.values[descriptionColIndex] ?? ''}
        </Typography>
        <Link href={research.values[linkColIndex] ?? ''} target={'_blank'}>
          Read more
        </Link>
      </Stack>
    </div>
  )
}

function FeaturedResearch(props: FeaturedResearchProps) {
  const { sql } = props

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
    TITLE = 'title',
    DESCRIPTION = 'description',
    PUBLICATION_DATE = 'publicationDate',
    TAGS = 'tags',
    AFFILIATION = 'affiliation',
    IMAGE = 'image',
    LINK = 'link',
  }

  const titleColIndex = getFieldIndex(ExpectedColumns.TITLE, queryResultBundle)
  const descriptionColIndex = getFieldIndex(
    ExpectedColumns.DESCRIPTION,
    queryResultBundle,
  )
  const publicationDateColIndex = getFieldIndex(
    ExpectedColumns.PUBLICATION_DATE,
    queryResultBundle,
  )
  const tagsColIndex = getFieldIndex(ExpectedColumns.TAGS, queryResultBundle)
  const affiliationColIndex = getFieldIndex(
    ExpectedColumns.AFFILIATION,
    queryResultBundle,
  )
  const imageColIndex = getFieldIndex(ExpectedColumns.IMAGE, queryResultBundle)
  const linkColIndex = getFieldIndex(ExpectedColumns.LINK, queryResultBundle)

  const topCard = dataRows[0]
  const remainingCards = dataRows.slice(1)

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: 'minmax(100px, 1fr)',
          lg: 'minmax(300px, 2fr) minmax(150px, 1fr)',
        },
        gap: { xs: '30px', md: '40px' },
        padding: { xs: '40px', lg: '80px' },
      }}
    >
      <Box>
        {topCard && (
          <FeaturedResearchTopCard
            entityId={entityId}
            research={topCard}
            titleColIndex={titleColIndex}
            isLoading={isLoading}
            descriptionColIndex={descriptionColIndex}
            publicationDateColIndex={publicationDateColIndex}
            tagsColIndex={tagsColIndex}
            affiliationColIndex={affiliationColIndex}
            imageColIndex={imageColIndex}
            linkColIndex={linkColIndex}
          />
        )}
      </Box>
      <Stack
        gap="16px"
        sx={{
          borderTop: '3px solid',
          borderColor: 'grey.400',
          padding: '30px 0',
        }}
      >
        <Typography variant="headline2" color="grey.1000" fontSize={'24px'}>
          Featured Research
        </Typography>
        {remainingCards.map((research, index) => (
          <FeaturedResearchCard
            entityId={entityId}
            research={research}
            key={index}
            isLoading={isLoading}
            titleColIndex={titleColIndex}
            descriptionColIndex={descriptionColIndex}
            publicationDateColIndex={publicationDateColIndex}
            tagsColIndex={tagsColIndex}
            affiliationColIndex={affiliationColIndex}
            imageColIndex={imageColIndex}
            linkColIndex={linkColIndex}
          />
        ))}
      </Stack>
    </Box>
  )
}

export default FeaturedResearch
