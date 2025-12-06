import React from 'react'
import { Box, Typography, Link } from '@mui/material'
import HeaderSearchBox from '../HeaderSearchBox'
import Header from '../Header'
import { FeatureFlagEnum } from '@sage-bionetworks/synapse-types'
import { useGetFeatureFlag } from 'synapse-react-client/synapse-queries'
import { AddAlertTwoTone } from '@mui/icons-material'

const NFHeader = (): React.ReactNode => {
  const searchPlaceholder =
    'Search for neurofibromatosis related data and resources'
  const searchExampleTerms = [
    'cutaneous neurofibroma',
    'drug screening',
    'vision restoration',
    'schwann',
    'malignant tumors',
    'whole genome sequencing',
    'study with data available',
    'patient reported outcomes',
  ]

  const isFeatureEnabled = useGetFeatureFlag(
    FeatureFlagEnum.PORTAL_SEARCH_HEADER,
  )
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
          A home for Neurofibromatosis research resources
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: '18px', lineHeight: '144%' }}
        >
          The NF Data Portal was created to help openly explore and share NF
          datasets, analysis tools, resources, and publications related to
          neurofibromatosis and schwannomatosis. Anyone can join the NF Open
          Science Initiative (NF-OSI) to contribute!
          <Link
            href="https://sagebionetworks.us7.list-manage.com/subscribe?u=b146de537186191a9d2110f3a&id=063befda5a"
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
            Subscribe to the NF-OSI Newsletter
          </Link>
        </Typography>
      </Box>
    </>
  )
  if (isFeatureEnabled) {
    return (
      <header id="header">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', lg: 'row' },
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px 0',
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

  return <Header />
}

export default NFHeader
