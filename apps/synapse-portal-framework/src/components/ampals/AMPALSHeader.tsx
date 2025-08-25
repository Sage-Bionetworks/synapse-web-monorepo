import { Box, Typography } from '@mui/material'
import HeaderSearchBox from '../HeaderSearchBox'

type AMPALSHeaderProps = {
  headerSvgURL: string
}
const AMPALSHeader = (props: AMPALSHeaderProps) => {
  const { headerSvgURL } = props
  const searchPlaceholder = 'Search for ALS related data and resources'
  const searchExampleTerms = ['ALS', 'FTD', 'Sporadic ALS']
  const content = (
    <>
      <Box
        sx={{
          margin: 0,
          color: '#FFFF',
        }}
      >
        <Typography
          variant="headline1"
          sx={{
            fontSize: { xs: '42px', md: '48px' },
            fontWeight: 'bold',
            marginBottom: '15px',
            lineHeight: '54px',
          }}
        >
          Welcome to the {import.meta.env.VITE_PORTAL_NAME}
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: '18px', lineHeight: '144%' }}
        >
          {import.meta.env.VITE_PORTAL_DESCRIPTION}
        </Typography>
        {/* <Typography
          variant="body1"
          sx={{ fontSize: '18px', lineHeight: '144%' }}
        >
          <Link
            href="https://sagebionetworks.us7.list-manage.com/subscribe?u=b146de537186191a9d2110f3a&id=e933dc6962"
            target="_blank"
            sx={{
              color: 'white',
              '&:hover': { color: 'white', textDecorationColor: 'white' },
              '&:focus': { color: 'white' },
              textDecorationColor: 'white',
              marginTop: '15px',
              display: 'block',
            }}
          >
            <AddAlertTwoTone
              sx={{ width: '24px', height: '24px', mb: '-5px', mr: '7px' }}
            />
            Subscribe to our newsletter
          </Link>
        </Typography> */}
      </Box>
    </>
  )
  return (
    <header id="header">
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px 0',
          background: `linear-gradient(90deg, #2360A6 35.64%, rgba(35, 96, 166, 0.00) 77.15%), url(${headerSvgURL}) lightgray 0px -170.097px / 100% 247.253% no-repeat;`,
        }}
      >
        <Box
          sx={{
            margin: 0,
            flex: 1,
            padding: { xs: '40px', lg: '40px 80px' },
          }}
        >
          {content}
        </Box>
        <HeaderSearchBox
          searchExampleTerms={searchExampleTerms}
          searchPlaceholder={searchPlaceholder}
          path="/Search"
          sx={{
            flex: 1,
            '& > :first-child': {
              background: 'rgba(184, 204, 226, 0.60)',
            },
          }}
        />
      </Box>
    </header>
  )
}

export default AMPALSHeader
