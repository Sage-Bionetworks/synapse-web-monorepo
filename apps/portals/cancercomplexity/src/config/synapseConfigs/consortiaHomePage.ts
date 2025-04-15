import type { ProgramsProps, CardDeckProps } from 'synapse-react-client'

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

export const goalsCardDeckConfig: CardDeckProps = {
  entityId: 'syn64943600',
  titleColumnName: 'title',
  descriptionColumnName: 'description',
  ctaButtonTextColumnName: 'ctaButtonText',
  ctaButtonURLColumnName: 'ctaButtonURL',
  titleIconFileHandleColumnName: 'icon',
  headerImageFileHandleColumnName: 'headerImage',
  cardDeckType: 'cckp',
  linkConfig: {
    isMarkdown: false,
    baseURL: 'Explore/CardDeck/DetailsPage',
    URLColumnName: 'title',
    matchColumnName: 'title',
  },
}

export default consortiaHomePageConfig
