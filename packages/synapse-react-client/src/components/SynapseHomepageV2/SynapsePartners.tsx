import { ReactComponent as Aacr } from '@/assets/homepage/aacr.svg'
import { ReactComponent as Cri } from '@/assets/homepage/cri.svg'
import { ReactComponent as Ctf } from '@/assets/homepage/ctf.svg'
import { ReactComponent as Gff } from '@/assets/homepage/gff.svg'
import { ReactComponent as Gray } from '@/assets/homepage/gray.svg'
import { ReactComponent as MlCommons } from '@/assets/homepage/ml-commons.svg'
import { ReactComponent as Nci } from '@/assets/homepage/nci.svg'
import { ReactComponent as NihAging } from '@/assets/homepage/nih-aging.svg'
import { ReactComponent as NihHeart } from '@/assets/homepage/nih-heart.svg'
import { ReactComponent as NihMental } from '@/assets/homepage/nih-mental.svg'
import { ReactComponent as Ntap } from '@/assets/homepage/ntap.svg'
import { ReactComponent as Sloan } from '@/assets/homepage/sloan.svg'
import Box from '@mui/material/Box'

export function SynapsePartners() {
  return (
    <Box sx={{ m: 'auto', maxWidth: '1200px' }}>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '25px',
        }}
      >
        <a href="https://sloan.org/" target="_blank" rel="noreferrer">
          <Sloan />
        </a>
        <a href="https://www.aacr.org/" target="_blank" rel="noreferrer">
          <Aacr />
        </a>
        <a
          href="https://www.cancerresearch.org/"
          target="_blank"
          rel="noreferrer"
        >
          <Cri />
        </a>
        <a href="https://www.ctf.org/" target="_blank" rel="noreferrer">
          <Ctf />
        </a>
        <a
          href="https://gilbertfamilyfoundation.org/"
          target="_blank"
          rel="noreferrer"
        >
          <Gff />
        </a>
        <a href="http://grayfoundation.org/" target="_blank" rel="noreferrer">
          <Gray />
        </a>
        <a href="https://mlcommons.org/" target="_blank" rel="noreferrer">
          <MlCommons />
        </a>
        <a href="https://www.cancer.gov/" target="_blank" rel="noreferrer">
          <Nci />
        </a>
        <a href="https://www.nhlbi.nih.gov/" target="_blank" rel="noreferrer">
          <NihHeart />
        </a>
        <a href="https://www.nia.nih.gov/" target="_blank" rel="noreferrer">
          <NihAging />
        </a>
        <a href="https://www.nimh.nih.gov/" target="_blank" rel="noreferrer">
          <NihMental />
        </a>
        <a href="https://www.n-tap.org/" target="_blank" rel="noreferrer">
          <Ntap />
        </a>
      </Box>
    </Box>
  )
}
