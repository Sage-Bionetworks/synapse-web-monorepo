import { formatDate } from '@/utils/functions/DateFormatter'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import { useInView } from 'react-intersection-observer'
import { StyledComponent } from '@emotion/styled'
import {
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
import dayjs from 'dayjs'
import { EntityTypeIcon } from '../EntityIcon'
import { EntityType } from '@sage-bionetworks/synapse-client'
import FavoriteButton from '../favorites/FavoriteButton'
import { EntityDownloadButton } from '../EntityDownloadButton/EntityDownloadButton'
import HasAccessChip from './HasAccessChip'
import { searchResultsCardChipStyles } from './chipStyles'
import styles from './SynapseSearchResultsCard.module.scss'
import { calculateFriendlyFileSize } from '@/utils/functions/calculateFriendlyFileSize'
import { useGetEntityBundle } from '@/synapse-queries'
import { FileHandleWithPreview } from '../EntityFinder/details/view/table/TableCellTypes'

export type SynapseSearchResultsCardProps = {
  entityId: string
  name: string
  entityType: EntityType
  modifiedOn: number
  locatedIn?: { name: string; id: string }
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
        <Typography variant="headline3">
          <Link
            href={`${getEndpoint(
              BackendDestinationEnum.PORTAL_ENDPOINT,
            )}Synapse:${props.entityId}`}
          >
            {props.name}
          </Link>
        </Typography>

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
          />
        </Box>
      </Box>
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
        <Stack sx={{ gap: '20px' }}>
          <Box sx={{ display: 'flex' }}>
            <UpdateIcon className={styles.cardMetadataIcon} />
            <Typography className={styles.cardMetadataTypographyWithIcon}>
              Last updated:{' '}
              {formatDate(dayjs.unix(props.modifiedOn), 'M/D/YYYY')}
            </Typography>
          </Box>
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
