import {
  Box,
  CardMedia,
  Link,
  Stack,
  Typography,
  Skeleton,
  Fade,
} from '@mui/material'
import { QueryBundleRequest, Row } from '@sage-bionetworks/synapse-types'
import useGetQueryResultBundle from '../../synapse-queries/entity/useGetQueryResultBundle'
import { getFieldIndex } from '../../utils/functions/queryUtils'
import * as SynapseConstants from '../../utils/SynapseConstants'
import { parseEntityIdFromSqlStatement } from '../../utils/functions/SqlFunctions'
import { formatDate } from '../../utils/functions/DateFormatter'
import { useImageUrl } from '../../utils/hooks/useImageUrlUtils'
import dayjs from 'dayjs'
import { useInView } from 'react-intersection-observer'
import PortalSectionHeader from '../PortalSectionHeader'

const transitionTimeoutMs = 400

export type FeaturedResearchProps = {
  sql: string
}

export type FeaturedResearchCardProps = {
  research: Row
  entityId: string
  isLoading: boolean
  publicationDateColIndex: number
  titleColIndex: number
  descriptionColIndex: number
  linkColIndex: number
  imageColIndex: number
}

const FeaturedResearchCard = ({
  research,
  entityId,
  publicationDateColIndex,
  titleColIndex,
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
      borderBottom={'1px solid'}
      padding={'24px 0'}
      sx={{
        borderColor: 'grey.300',
        flexDirection: {
          xs: 'column',
          sm: 'row',
        },
      }}
    >
      <Stack useFlexGap gap={'10px'}>
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
        <Typography lineHeight={'normal'} color={'grey.600'}>
          {research.values[publicationDateColIndex] &&
            formatDate(
              dayjs(Number(research.values[publicationDateColIndex])),
              'MMMM, YYYY',
            )}
        </Typography>
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
  titleColIndex,
  descriptionColIndex,
  linkColIndex,
  imageColIndex,
  isLoading,
}: FeaturedResearchCardProps) => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true })
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
    <Box ref={ref}>
      <Fade in={inView} timeout={transitionTimeoutMs}>
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
      </Fade>
      <Stack useFlexGap gap={'16px'}>
        <Typography
          variant="headline2"
          color={'grey.1000'}
          sx={{ fontSize: { xs: '30px', md: '36px' } }}
        >
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
    </Box>
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
            imageColIndex={imageColIndex}
            linkColIndex={linkColIndex}
          />
        )}
      </Box>
      <Stack>
        <PortalSectionHeader
          title="Featured Research"
          sx={{ h2: { fontSize: '24px', paddingBottom: 0 } }}
        />
        <Stack gap="16px">
          {remainingCards.map((research, index) => (
            <FeaturedResearchCard
              entityId={entityId}
              research={research}
              key={index}
              isLoading={isLoading}
              titleColIndex={titleColIndex}
              descriptionColIndex={descriptionColIndex}
              publicationDateColIndex={publicationDateColIndex}
              imageColIndex={imageColIndex}
              linkColIndex={linkColIndex}
            />
          ))}
        </Stack>
      </Stack>
    </Box>
  )
}

export default FeaturedResearch
