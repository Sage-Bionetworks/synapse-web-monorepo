import {
  Box,
  Chip,
  Link,
  Typography,
  useTheme,
  useMediaQuery,
  SxProps,
} from '@mui/material'
import React, { useEffect } from 'react'
import ImageFromSynapseTable from '../ImageFromSynapseTable'
import { EastTwoTone } from '@mui/icons-material'
import { useInView } from 'react-intersection-observer'
import { darkTextColor, homepageBodyText } from './SynapseHomepageV2'

export type SynapseInActionItemProps = {
  tableId: string
  friendlyName: string
  title: string
  description: string
  tags?: string[] | null
  logoFileHandleId: string
  link: string
  primaryColor: string
  secondaryColor: string
  onInView: () => void
}

const mobileViewSxProps: SxProps = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
}
export const SynapseInActionItem: React.FunctionComponent<
  SynapseInActionItemProps
> = ({
  tableId,
  friendlyName,
  title,
  description,
  tags,
  logoFileHandleId,
  link,
  onInView,
}) => {
  const { ref, inView } = useInView({ threshold: 0.7 }) //do not report this is in view until the description is almost entirely shown (70%)
  useEffect(() => {
    if (inView) {
      onInView()
    }
  }, [inView])
  const theme = useTheme()
  const isMobileView = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <Box
      sx={{
        p: '15px',
      }}
    >
      <Box sx={isMobileView ? mobileViewSxProps : undefined}>
        <Box>
          {tags &&
            tags.map(tag => {
              return (
                <Chip
                  key={tag}
                  sx={{
                    mr: '5px',
                    color: 'secondary.600',
                    backgroundColor: 'secondary.100',
                    border: '1px solid #6BA89D',
                  }}
                  label={tag}
                />
              )
            })}
        </Box>
        <Typography
          variant="body1"
          sx={{
            fontWeight: 400,
            fontSize: '36px',
            lineHeight: '46px',
            mt: '32px',
            color: darkTextColor,
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            ...homepageBodyText,
            mt: '32px',
            mb: '32px',
          }}
          ref={ref}
        >
          {description}
        </Typography>
        <ImageFromSynapseTable
          tableId={tableId}
          fileHandleId={logoFileHandleId}
          alt={`${friendlyName} logo`}
          style={{ height: '40px' }}
        />
        <Box sx={{ mt: '32px' }}>
          <Link href={link} target="_blank">
            View {friendlyName.endsWith('Portal') ? 'the' : ''} {friendlyName}{' '}
            <EastTwoTone sx={{ mb: '-8px', ml: '6px' }} />
          </Link>
        </Box>
      </Box>
    </Box>
  )
}
