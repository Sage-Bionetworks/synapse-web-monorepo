import { Stack } from '@mui/material'
import { ReactElement } from 'react'
import { ScoreDescriptor } from './Dial'

export type DarkDialProps = {
  dial: ReactElement
  label: ScoreDescriptor
}

// Displayed on Sustainability and Reusability Report tab of entity details pages
const DarkDial = ({ dial, label }: DarkDialProps) => {
  return (
    <Stack sx={{ alignItems: 'center', gap: '10px' }}>
      {dial}
      {label}
    </Stack>
  )
}

export default DarkDial
