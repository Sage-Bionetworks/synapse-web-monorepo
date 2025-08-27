import {
  Box,
  Paper,
  PaperProps,
  Button,
  styled,
  Typography,
} from '@mui/material'
import DownloadIcon from '@mui/icons-material/Download'
import { StyledComponent } from '@emotion/styled'
import FavoriteButton from '../favorites/FavoriteButton'

export type SynapseSearchResultsCardProps = {
  name: string
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
}))

export function SynapseSearchResultsCard(props: SynapseSearchResultsCardProps) {
  return (
    <SynapseSearchResultsCardContainer>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
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
    </SynapseSearchResultsCardContainer>
  )
}

export default SynapseSearchResultsCard
