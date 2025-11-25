import type {
  CardConfiguration,
  QueryWrapperPlotNavProps,
} from 'synapse-react-client'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import { TableToGenericCardMapping } from 'synapse-react-client/components/GenericCard/TableRowGenericCard'
import { toolsSql } from '../resources'
import { columnAliases } from './commonProps'

export const newToolsSql = `${toolsSql} order by ROW_ID desc limit 3`

export const toolsSchema: TableToGenericCardMapping = {
  type: SynapseConstants.EXPERIMENTAL_TOOL,
  title: 'resourceName',
  subTitle: 'resourceType',
  description: 'description',
  secondaryLabels: [
    'investigatorName',
    'institution',
    'rrid',
    'synonyms',
    'cellLineCategory',
    'cellLineDisease',
    'modelofManifestation',
    'backgroundStrain',
    'backgroundSubstrain',
    'animalModelDisease',
    'animalModelOfManifestation',
    'targetAntigen',
    'reactiveSpecies',
    'hostOrganism',
    'specimenTissueType',
    'specimenPreparationMethod',
    'diseaseType',
    'tumorType',
    'specimenFormat',
    'specimenType',
    'latestPublicationDate',
    'species',
  ],
  includeShareButton: true,
}

export const toolsCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  titleLinkConfig: {
    isMarkdown: false,
    baseURL: 'Explore/Tools/DetailsPage',
    URLColumnName: 'resourceId',
    matchColumnName: 'resourceId',
    overrideLinkURLColumnName: 'biobankURL',
  },
  secondaryLabelLimit: 4,
  genericCardSchema: toolsSchema,
  // CardTypeAdornment: ({ schema, data }) => {
  //   const completenessCategory = data[schema['completenessCategory']]
  //   if (!completenessCategory) return null
  //   return <CompletenessIndicator completenessCategory={completenessCategory} />
  // },
}
const rgbIndex = 6
const tools: QueryWrapperPlotNavProps = {
  rgbIndex,
  sql: toolsSql,
  shouldDeepLink: true,
  name: 'Tools',
  cardConfiguration: toolsCardConfiguration,
  columnAliases,
  defaultShowSearchBox: true,
  searchConfiguration: {
    ftsConfig: {
      textMatchesMode: 'NATURAL_LANGUAGE',
      searchHelpURL:
        'https://help.nf.synapse.org/NFdocs/Tips-for-Search.2640478225.html',
    },
  },
}

export default tools
