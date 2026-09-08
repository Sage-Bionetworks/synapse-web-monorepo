import { CardConfiguration, SynapseConstants } from 'synapse-react-client'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

export const consortiaAndRepositoriesCardConfig: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: {
    title: 'Name',
    description: 'Long Description',
    imageFileHandleColumnName: 'Logo',
  },
  descriptionConfig: {
    showFullDescriptionByDefault: true,
  },
  ctaLinkConfig: {
    text: 'Visit',
    link: 'URL',
    endIcon: <ArrowForwardIcon sx={{ fontSize: 16 }} />,
  },
  ctaLinkPosition: 'right',
}
