import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import HeaderSearchBox from '@/components/HeaderSearchBox'
import { TypeAnimation } from 'react-type-animation'
import styles from './AdknowledgeHeader.module.scss'
import { WordPressLatestPostChip } from 'synapse-react-client/components/WordPress/WordPressLatestPostChip'

const AdknowledgeHeader = (): React.ReactNode => {
  const searchPlaceholder = 'Search for...'

  const searchExampleTerms = ['ROSMAP', 'RNASeq Harmonization']

  const alternatingText = [
    "Alzheimer's Disease",
    'Aging',
    'Dementia',
    'Brain Aging',
    'AD Model Systems',
    'Drug Development',
  ]

  const content = (
    <Box className={styles.adknowledgeHeaderTextBox}>
      <Typography
        variant="headline1"
        className={styles.adknowledgeHeaderHeadline}
      >
        Discover and Access Data and Resources for <br />
        <TypeAnimation
          aria-hidden="true"
          sequence={alternatingText.flatMap(phrase => [phrase, 3000])}
          wrapper="span"
          speed={20}
          repeat={Infinity}
          className={styles.adknowledgeHeaderTypeAnimation}
        />
      </Typography>
      <Typography
        variant="headline3"
        className={styles.adknowledgeHeaderSubtitle}
      >
        Supported by the National Institute on Aging
      </Typography>
    </Box>
  )

  return (
    <header className={styles.adknowledgeHeader}>
      <Stack className={styles.adknowledgeHeaderStack}>
        <WordPressLatestPostChip wordpressSiteUrl="https://news.adknowledgeportal.org" />
        <Box className={styles.adknowledgeHeaderContentBox}>{content}</Box>
        <HeaderSearchBox
          searchExampleTerms={searchExampleTerms}
          searchPlaceholder={searchPlaceholder}
          path="/Search"
          variant="v2"
          sx={{ '& > *': { minWidth: '660px' } }}
        />
      </Stack>
    </header>
  )
}

export default AdknowledgeHeader
