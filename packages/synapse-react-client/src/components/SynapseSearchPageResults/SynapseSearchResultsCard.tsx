import {
  Box,
  Paper,
  PaperProps,
  Button,
  styled,
  Typography,
  Chip,
} from '@mui/material'
import { StyledComponent } from '@emotion/styled'
import FavoriteButton from '../favorites/FavoriteButton'
import {
  Update as UpdateIcon,
  Download as DownloadIcon,
} from '@mui/icons-material'

export type SynapseSearchResultsCardProps = {
  name: string
  entityType: string
  modifiedOn: string
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
  width: '1000px',
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
        <Typography
          sx={{
            fontSize: '18px',
            color: '#395979',
            fontWeight: 700,
            fontFamily: 'DM Sans',
            textDecoration: 'underline',
          }}
        >
          {props.name}
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
          Last updated: {props.modifiedOn}
        </Typography>
      </Box>
    </SynapseSearchResultsCardContainer>
  )
}

export default SynapseSearchResultsCard
