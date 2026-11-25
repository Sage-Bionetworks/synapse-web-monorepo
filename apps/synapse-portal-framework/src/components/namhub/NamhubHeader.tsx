// import { usePortalContext } from '@/components/PortalContext'
import styles from './NamhubHeader.module.scss'
import { Link, Stack, SxProps } from '@mui/material'
import HeaderSearchBox from '../HeaderSearchBox'

const searchExampleTerms = [
  'RNASeq',
  'open access',
  'ATAC-seq',
  'Multi-omics data',
]

// HeaderSearchBox only accepts sx; its first child is the card that holds the field and chips.
const searchBoxSx: SxProps = {
  '& > :first-child': {
    background: 'rgba(226, 239, 249, 0.6)',
    border: '1px solid #b9cfe4',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  },
  '& .MuiButton-root, & .MuiButton-root:hover': {
    backgroundColor: '#fff',
    borderColor: '#e4e4e4',
  },
}

function NamhubHomePageHeader() {
  const title = (
    <>
      New Methods. <br /> New Discoveries.
    </>
  )
  const description = (
    <>
      Explore datasets, models, and more shared on the New Approach
      Methodologies Hub.
      <br /> <br />{' '}
      <Link
        href="https://commonfund.nih.gov/complementarie"
        target="_blank"
        rel="noreferrer"
      >
        Learn more
      </Link>{' '}
      about the NIH Complement Animal Research In Experimentation
      (Complement-ARIE) program.
    </>
  )

  return (
    <div className={styles.topSectionContainer}>
      <Stack className={styles.headerTextContainer}>
        <div className={styles.headerText}>{title}</div>
        <div className={styles.descriptionText}>{description}</div>
      </Stack>
      <HeaderSearchBox
        searchPlaceholder="Search for data and resources"
        searchExampleTerms={searchExampleTerms}
        path="/Search"
        sx={searchBoxSx}
      />
    </div>
  )
}

export default NamhubHomePageHeader
