import { useGetEntityBundle } from '@/synapse-queries'
import { calculateFriendlyFileSize } from '@/utils/functions/calculateFriendlyFileSize'
import { formatDate } from '@/utils/functions/DateFormatter'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import { StyledComponent } from '@emotion/styled'
import {
  ArticleOutlined,
  DashboardTwoTone,
  InfoOutline,
  Update as UpdateIcon,
} from '@mui/icons-material'
import {
  Box,
  Chip,
  Link,
  Paper,
  PaperProps,
  Stack,
  styled,
  Typography,
} from '@mui/material'
import { EntityType } from '@sage-bionetworks/synapse-client'
import dayjs from 'dayjs'
import { useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import { EntityDownloadButton } from '../EntityDownloadButton/EntityDownloadButton'
import { FileHandleWithPreview } from '../EntityFinder/details/view/table/TableCellTypes'
import { EntityTypeIcon } from '../EntityIcon'
import FavoriteButton from '../favorites/FavoriteButton'
import { markdownToPlainText } from '../Markdown/MarkdownUtils'
import { searchResultsCardChipStyles } from './chipStyles'
import HasAccessChip from './HasAccessChip'
import { HighlightedTypography } from './HighlightedTypography'
import styles from './SynapseSearchResultsCard.module.scss'

export type SynapseSearchResultsCardProps = {
  entityId: string
  name: string
  description?: string
  entityType: EntityType
  modifiedOn: number
  locatedIn?: { name: string; id: string }
  searchTerms?: string[]
}

const SynapseSearchResultsCardContainer: StyledComponent<PaperProps> = styled(
  Paper,
  {
    label: 'SynapseSearchResultsCardContainer',
  },
)({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '250px',
  width: '100%',
  borderRadius: '10px',
  padding: '32px',
  gap: '15px',
})

export function SynapseSearchResultsCard(props: SynapseSearchResultsCardProps) {
  const downloadConfirmationRef = useRef<HTMLDivElement>(null)

  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '250px 0px',
  })

  const { data: entityBundle } = useGetEntityBundle(
    props.entityId,
    undefined,
    { includeFileHandles: true },
    { enabled: props.entityType === EntityType.file && inView },
  )

  const file = entityBundle?.fileHandles.find(
    (file: FileHandleWithPreview) => file.isPreview !== true,
  )

  const friendlySize = file?.contentSize
    ? calculateFriendlyFileSize(file?.contentSize)
    : ''

  const plainDescription = props.description
    ? markdownToPlainText(props.description)
    : ''

  return (
    <SynapseSearchResultsCardContainer ref={ref}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <Link
          href={`${getEndpoint(
            BackendDestinationEnum.PORTAL_ENDPOINT,
          )}Synapse:${props.entityId}`}
          sx={{
            textDecoration: 'underline 2px',
            textUnderlineOffset: '9px',
          }}
        >
          <HighlightedTypography
            className={styles.cardTitle}
            variant="headline3"
            text={props.name}
            searchTerms={props.searchTerms ?? []}
          />
        </Link>

        <Box
          sx={{
            display: 'flex',
            gap: '16px',
            alignItems: 'center',
          }}
        >
          <FavoriteButton entityId={props.entityId} />
          <EntityDownloadButton
            entityId={props.entityId}
            name={props.name}
            entityType={props.entityType}
            downloadConfirmationContainer={downloadConfirmationRef}
          />
        </Box>
      </Box>
      {/* Portal target for EntityDownloadButton's download confirmation dialog */}
      <div ref={downloadConfirmationRef} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Chip
          icon={
            <EntityTypeIcon
              type={props.entityType}
              wrap={false}
              sx={{ color: '#265149', width: '18px' }}
            />
          }
          label={props.entityType}
          sx={{ ...searchResultsCardChipStyles }}
        />
        <HasAccessChip entityId={props.entityId} />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: '8px',
        }}
      >
        <Stack sx={{ gap: '20px', minWidth: 0, width: '100%' }}>
          <Box sx={{ display: 'flex' }}>
            <UpdateIcon className={styles.cardMetadataIcon} />
            <Typography className={styles.cardMetadataTypographyWithIcon}>
              Last updated:{' '}
              {formatDate(dayjs.unix(props.modifiedOn), 'M/D/YYYY')}
            </Typography>
          </Box>
          {plainDescription && (
            <Box sx={{ display: 'flex' }}>
              <ArticleOutlined className={styles.cardMetadataIcon} />
              <HighlightedTypography
                className={`${styles.cardMetadataTypographyWithIcon} ${styles.cardDescription}`}
                text={plainDescription}
                searchTerms={props.searchTerms ?? []}
              />
            </Box>
          )}

          {friendlySize && (
            <Box sx={{ display: 'flex' }}>
              <InfoOutline className={styles.cardMetadataIcon} />
              <Typography className={styles.cardMetadataTypographyWithIcon}>
                File size: <b>{friendlySize}</b>
              </Typography>
            </Box>
          )}
          {props.locatedIn && (
            <Box
              sx={{ display: 'flex', marginLeft: '24px', alignItems: 'center' }}
            >
              <Typography className={styles.cardMetadataTypographyWithIcon}>
                Located in:{' '}
              </Typography>
              <DashboardTwoTone
                className={styles.cardMetadataIcon}
                sx={{
                  marginRight: '4px',
                }}
              />
              <Link
                className={styles.locatedInLink}
                href={`${getEndpoint(
                  BackendDestinationEnum.PORTAL_ENDPOINT,
                )}Synapse:${props.locatedIn?.id}`}
              >
                {props.locatedIn?.name}
              </Link>
            </Box>
          )}
        </Stack>
      </Box>
    </SynapseSearchResultsCardContainer>
  )
}

export default SynapseSearchResultsCard
