import { Box, Typography } from '@mui/material'
import { ReactComponent as IntroSvg } from '@/components/assets/cancerComplexityIntro.svg'

const CancerComplexityIntro = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: {
            xs: 'column',
            lg: 'row',
          },
        }}
      >
        <Box
          sx={{
            mt: '20px',
            mb: {
              xs: '10px',
              lg: '20px',
            },
            minWidth: {
              xs: '100%',
              lg: '60%',
            },
          }}
        >
          <IntroSvg style={{ width: '100%' }} />
        </Box>
        <Box
          sx={{
            m: {
              xs: '15px',
              lg: '50px 40px',
            },
          }}
        >
          <Typography
            variant="headline1"
            sx={{
              fontSize: { xs: '24px', md: '27px' },
              fontWeight: 'bold',
              marginBottom: '15px',
              textTransform: 'uppercase',
            }}
          >
            What is the Cancer Complexity Knowledge Portal?
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: '16px', lineHeight: '144%' }}
          >
            The Cancer Complexity Knowledge Portal (CCKP) integrates robust,
            curated datasets, publications, grant information, and other
            resources, to streamline your ability to identify relevant data,
            refine analyses, and share insights with collaborators. With the
            CCKP, you can more efficiently connect the dots across multiple
            studies, advancing our understanding of cancer biology and
            accelerating innovations in prevention, diagnosis, and treatment.
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: '18px', lineHeight: '144%' }}
          >
            Explore Find Access using new component
          </Typography>
        </Box>
      </Box>
    </>
  )
}

export default CancerComplexityIntro
