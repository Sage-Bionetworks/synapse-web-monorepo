import { SxProps } from '@mui/material'

export type CitationFormat = 'bibtex' | 'apa' | 'ieee' | 'nature' | 'science'

export type CitationProps = {
  doi: string | undefined
  title?: string
  boilerplateText?: string
  defaultCitationFormat?: CitationFormat
  selectSx?: SxProps
  buttonSx?: SxProps
}
