import { PaletteOptions } from '@mui/material'
import { PortalContextType } from './PortalContext'

export type PortalProps = PortalContextType & {
  palette: PaletteOptions
}
