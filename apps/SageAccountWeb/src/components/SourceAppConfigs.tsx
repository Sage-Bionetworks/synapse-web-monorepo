import { PaletteOptions } from '@mui/material'
import { ReactNode } from 'react'

export type SourceAppConfig = {
  appId: string // app ID used in the query params
  appURL: string // URL that points to the production version of this app
  friendlyName: string
  logo: ReactNode
  palette: PaletteOptions
  description: string
  requestAffiliation: boolean // If set to true, a special screen is shown requesting the user to fill out UserProfile.company
  isPublicized: boolean // If set to true, this will be included in the list of the available Sage Resources
}
