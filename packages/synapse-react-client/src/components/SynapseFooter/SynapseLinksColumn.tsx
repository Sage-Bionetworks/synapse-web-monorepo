import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import { LinkProps } from '@mui/material/Link'

export type SynapseLinksColumnProps = {
  category: string
  synapseLinks: SynapseLink[]
}
export type SynapseLink = {
  text: string
  props: LinkProps
}

export function SynapseLinksColumn({
  category,
  synapseLinks,
}: SynapseLinksColumnProps) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: '10px' }}>
      <Typography
        variant="body1"
        sx={{
          color: 'white',
        }}
      >
        {category}
      </Typography>
      {synapseLinks.map(synapseLink => (
        <Link
          key={synapseLink.text}
          target="_blank"
          rel="noreferrer"
          sx={{
            color: 'primary.200',
            fontSize: '18px',
            fontWeight: 400,
            lineHeight: '24px',
            textDecoration: 'none',
            '&:focus': {
              color: 'primary.200',
              textDecoration: 'none',
            },
            '&:visited': {
              color: 'primary.200',
              textDecoration: 'none',
            },
            '&:hover': {
              color: 'white',
              textDecoration: 'none',
            },
          }}
          {...synapseLink.props}
        >
          {synapseLink.text}
        </Link>
      ))}
    </Box>
  )
}
