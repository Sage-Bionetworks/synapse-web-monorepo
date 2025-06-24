import {
  darkTextColor,
  homepageBodyText,
} from '@/components/SynapseHomepageV2/HomepageStyles'
import {
  Box,
  Chip,
  Link,
  Typography,
  useTheme,
  useMediaQuery,
  SxProps,
  Fade,
} from '@mui/material'
import ImageFromSynapseTable from '../ImageFromSynapseTable'
import { EastTwoTone } from '@mui/icons-material'
import { useInView } from 'react-intersection-observer'
import { Slide } from '@mui/material'

const transitionTimeoutMs = 320

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
  imageFileHandleId: string
  mobileImageFileHandleId: string
}

const mobileViewSxProps: SxProps = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
}

export function SynapseInActionItem({
  tableId,
  friendlyName,
  title,
  description,
  tags,
  logoFileHandleId,
  link,
  imageFileHandleId,
  mobileImageFileHandleId,
}: SynapseInActionItemProps) {
  const theme = useTheme()
  const isMobileView = useMediaQuery(theme.breakpoints.down('sm'))
  // desktop image animation support
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true })

  return (
    <Box
      ref={ref}
      sx={{
        p: { xs: '10px', md: '15px 0px 0px 15px' },
        display: 'grid',
        gridTemplateColumns: {
          xs: 'auto 0px',
          md: '450px auto',
        },
      }}
    >
      <Box
        sx={{
          ml: {
            xs: '0px',
            md: '20px',
          },
        }}
      >
        {/* mobile image */}
        <Box
          sx={{
            display: { xs: 'flex', md: 'none' },
            justifyContent: 'center',
            width: '100%',
            mb: '10px',
            pt: '50px',
            img: { width: '320px', maxWidth: '100%' },
          }}
        >
          <ImageFromSynapseTable
            tableId={tableId}
            fileHandleId={mobileImageFileHandleId}
          />
        </Box>
        <Box sx={isMobileView ? mobileViewSxProps : { pt: '50px' }}>
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
                      borderWidth: '0px',
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
          >
            {description}
          </Typography>
          <ImageFromSynapseTable
            tableId={tableId}
            fileHandleId={logoFileHandleId}
            alt={`${friendlyName} logo`}
            style={{ height: '40px' }}
          />
          <Box sx={{ mt: '32px', pb: '50px' }}>
            <Link href={link} target="_blank">
              View {friendlyName.endsWith('Portal') ? 'the' : ''} {friendlyName}{' '}
              <EastTwoTone sx={{ mb: '-8px', ml: '6px' }} />
            </Link>
          </Box>
        </Box>
      </Box>
      {/* desktop image */}
      <Box
        sx={{
          display: { xs: 'none', md: 'block' },
          justifySelf: 'end',
          alignSelf: 'end',
        }}
      >
        <Fade in={inView} timeout={transitionTimeoutMs}>
          <div>
            <Slide direction="left" timeout={transitionTimeoutMs} in={inView}>
              <div>
                <ImageFromSynapseTable
                  tableId={tableId}
                  fileHandleId={imageFileHandleId}
                />
              </div>
            </Slide>
          </div>
        </Fade>
      </Box>
    </Box>
  )
}
