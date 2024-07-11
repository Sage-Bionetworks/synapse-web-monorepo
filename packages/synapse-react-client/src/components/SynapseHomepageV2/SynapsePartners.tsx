import React from 'react'
import { Box } from '@mui/material'
import { ReactComponent as NihHeart } from '../../assets/homepage/nih-heart.svg'
import { ReactComponent as NihMental } from '../../assets/homepage/nih-mental.svg'
import { ReactComponent as Sloan } from '../../assets/homepage/sloan.svg'
import { ReactComponent as NihAging } from '../../assets/homepage/nih-aging.svg'
import { ReactComponent as Ctf } from '../../assets/homepage/ctf.svg'
import { ReactComponent as Ntap } from '../../assets/homepage/ntap.svg'
import { ReactComponent as Gff } from '../../assets/homepage/gff.svg'
import { ReactComponent as Nci } from '../../assets/homepage/nci.svg'
import { ReactComponent as Cri } from '../../assets/homepage/cri.svg'
import { ReactComponent as MlCommons } from '../../assets/homepage/ml-commons.svg'
import { ReactComponent as Gray } from '../../assets/homepage/gray.svg'
import { ReactComponent as Aacr } from '../../assets/homepage/aacr.svg'

export const SynapsePartners: React.FunctionComponent = () => {
  return (
    <Box sx={{ margin: 'auto', maxWidth: '1200px' }}>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          gap: '20px',
        }}
      >
        <a href="https://www.nhlbi.nih.gov/" target="_blank">
          <NihHeart />
        </a>
        <a href="https://www.nimh.nih.gov/" target="_blank">
          <NihMental />
        </a>
        <a href="https://sloan.org/" target="_blank">
          <Sloan />
        </a>
        <a href="https://www.nia.nih.gov/" target="_blank">
          <NihAging />
        </a>
        <a href="https://www.ctf.org/" target="_blank">
          <Ctf />
        </a>
        <a href="https://www.n-tap.org/" target="_blank">
          <Ntap />
        </a>
        <a href="https://gilbertfamilyfoundation.org/" target="_blank">
          <Gff />
        </a>
        <a href="https://www.cancer.gov/" target="_blank">
          <Nci />
        </a>
        <a href="https://www.aacr.org/" target="_blank">
          <Aacr />
        </a>
        <a href="https://www.cancerresearch.org/" target="_blank">
          <Cri />
        </a>
        <a href="https://mlcommons.org/" target="_blank">
          <MlCommons />
        </a>
        <a href="http://grayfoundation.org/" target="_blank">
          <Gray />
        </a>
      </Box>
    </Box>
  )
}
