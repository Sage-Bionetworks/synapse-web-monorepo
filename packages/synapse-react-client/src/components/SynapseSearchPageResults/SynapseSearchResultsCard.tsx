import {
  Box,
  Paper,
  PaperProps,
  Button,
  styled,
  Typography,
  Chip,
  Link,
} from '@mui/material'
import { StyledComponent } from '@emotion/styled'
import FavoriteButton from '../favorites/FavoriteButton'
import {
  Update as UpdateIcon,
  Download as DownloadIcon,
} from '@mui/icons-material'
import {
  getEndpoint,
  BackendDestinationEnum,
} from '@/utils/functions/getEndpoint'
import dayjs from 'dayjs'
import { formatDate } from '@/utils/functions/DateFormatter'

export type SynapseSearchResultsCardProps = {
  entityId: string
  name: string
  entityType: string
  modifiedOn: number
}

const SynapseSearchResultsCardContainer: StyledComponent<PaperProps> = styled(
  Paper,
  {
    label: 'SynapseSearchResultsCardContainer',
  },
)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '250px',
  width: '100%',
  borderRadius: '10px',
  padding: '32px',
  gap: '15px',
}))

export function SynapseSearchResultsCard(props: SynapseSearchResultsCardProps) {
  return (
    <SynapseSearchResultsCardContainer>
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
          <FavoriteButton entityId={'syn222'} />
          <Button variant="outlined" startIcon={<DownloadIcon />}>
            Download
          </Button>
        </Box>
      </Box>
      <Box>
        <Chip
          label={props.entityType}
          sx={{
            backgroundColor: '#DAE9E7',
            color: '#265149',
            fontSize: '14px',
            textTransform: 'capitalize',
          }}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: '8px',
        }}
      >
        <UpdateIcon />
        <Typography
          sx={{
            fontSize: '14px',
          }}
        >
          Last updated: {formatDate(dayjs.unix(props.modifiedOn), 'M/D/YYYY')}
        </Typography>
      </Box>
    </SynapseSearchResultsCardContainer>
  )
}

export default SynapseSearchResultsCard
