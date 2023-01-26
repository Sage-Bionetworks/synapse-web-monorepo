import { ProgramsProps } from 'synapse-react-client/dist/containers/home_page/programs/Programs'

export const programsHomePageConfig: ProgramsProps = {
  entityId:'syn17024173',
  titleColumnName: 'Program',
  imageFileHandleColumnName: 'Homepage Image',
  linkColumnName: 'Website',
  summaryColumnName: 'Short Description',
  rgbIndex: 1,
  linkConfig: {
    isMarkdown: false,
    baseURL: 'Explore/Programs/DetailsPage',
    URLColumnName: 'Program',
    matchColumnName: 'Program',
  },
}

export default programsHomePageConfig
