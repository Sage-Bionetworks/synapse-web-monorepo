import React from 'react'
import { AddAlertTwoTone } from '@mui/icons-material'
import { Link } from '@mui/material'
import { HomePageHeaderConfig } from '@sage-bionetworks/synapse-portal-framework/types/portal-config'

const homePageHeader: HomePageHeaderConfig = {
  summary: (
    <>
      The NF Data Portal was created to help openly explore and share NF
      datasets, analysis tools, resources, and publications related to
      neurofibromatosis and schwannomatosis. Anyone can join the NF Open Science
      Initiative (NF-OSI) to contribute!
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
          sx={{ width: '16px', height: '16px', marginRight: '7px' }}
        />
        Subscribe to the NF-OSI Newsletter
      </Link>
    </>
  ),
  title: 'A home for Neurofibromatosis research resources',
}

export default homePageHeader
