import { ProgramsProps } from 'synapse-react-client/components/Programs/index'

export const consortiaHomePageConfig: ProgramsProps = {
  entityId: 'syn34267412',
  titleColumnName: 'Consortium',
  imageFileHandleColumnName: 'Item Order',
  linkColumnName: 'Website Link',
  summaryColumnName: 'Short Description',
  rgbIndex: 1,
  linkConfig: {
    isMarkdown: false,
    overrideLinkURLColumnName: 'Explore Link',
    baseURL: 'Explore/Consortia/DetailsPage',
    URLColumnName: 'Program',
    matchColumnName: 'Program',
  },
}

export default consortiaHomePageConfig
