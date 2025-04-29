import type { ProgramsProps } from 'synapse-react-client'
import { TableQueryCardDeckProps } from 'synapse-react-client/components/CardDeck/TableQueryCardDeck'

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

export const availableResearchCardDeckConfig: TableQueryCardDeckProps = {
  entityId: 'syn66276142',
  titleColumnName: 'title',
  descriptionColumnName: 'description',
  ctaButtonTextColumnName: 'buttonText',
  ctaButtonURLColumnName: 'buttonURL',
  titleIconFileHandleColumnName: 'iconImage',
  cardDeckType: 'cckp',
  linkConfig: {
    isMarkdown: false,
    URLColumnName: '',
    matchColumnName: '',
    overrideLinkURLColumnName: 'buttonURL',
    baseURL: 'Explore/',
  },
}

export default consortiaHomePageConfig
