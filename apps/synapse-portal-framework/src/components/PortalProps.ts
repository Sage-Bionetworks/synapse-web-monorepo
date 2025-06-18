import { PaletteOptions } from '@mui/material/styles'
import { PortalContextType } from './PortalContext'

export type PortalProps = PortalContextType & {
  palette: PaletteOptions
}
