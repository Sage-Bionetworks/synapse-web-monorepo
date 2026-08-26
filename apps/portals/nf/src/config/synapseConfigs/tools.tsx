import type { CardConfiguration } from 'synapse-react-client/components/CardContainer/CardConfiguration'
import type { QueryWrapperPlotNavProps } from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import { TableToGenericCardMapping } from 'synapse-react-client/components/GenericCard/TableRowGenericCard'
import {
  toolsSearchIndexId,
  toolsSearchQueryConfig,
  toolsSql,
} from '../resources'
import { columnAliases } from './commonProps'
import { SearchQueryWrapperPlotNavProps } from 'synapse-react-client/components/SearchQueryWrapperPlotNav/SearchQueryWrapperPlotNav'

export const newToolsSql = `${toolsSql} order by ROW_ID desc limit 3`

export const toolsSchema: TableToGenericCardMapping = {
  type: SynapseConstants.EXPERIMENTAL_TOOL,
  title: 'resourceName',
  subTitle: 'resourceType',
  description: 'description',
  secondaryLabels: [
    // Universal
    'investigatorName',
    'institution',
    'rrid',
    'synonyms',
    'latestPublicationDate',
    'species',
    // Shared across resource types since the LinkML migration (nf-osi/nf-research-tools-schema
    // docs/MIGRATION.md) unified these into single columns -- replaces the old per-type
    // cellLineDisease/animalModelDisease/diseaseType and modelofManifestation/
    // animalModelOfManifestation names, none of which exist anymore.
    'geneticDisorder',
    'manifestation',
    'organ',
    'tissue',
    // Unified across CellLine/OrganoidProtocol/PatientDerivedModel
    // (nf-osi/nf-research-tools-schema#262, disambiguated by resourceType) --
    // replaces tumorType (superseded by manifestation above) and the
    // per-type pdmModelSystemType/organoidModelType aliases.
    'modelType',
    // Unified across all 9 resource types (nf-osi/nf-research-tools-schema#262)
    // -- replaces the Clinical Assessment Tool-only availabilityStatus below
    // ("License Required" folded into "Contact Developer").
    'availability',
    // Cell Line
    'cellLineCategory',
    'resistance',
    // Animal Model
    'backgroundStrain',
    'backgroundSubstrain',
    'animalState',
    // Antibody
    'targetAntigen',
    'reactiveSpecies',
    'hostOrganism',
    'conjugate',
    // Genetic Reagent
    'insertName',
    'insertSpecies',
    'vectorType',
    'selectableMarker',
    // Biobank
    'specimenPreparationMethod',
    'specimenFormat',
    'specimenType',
    // Patient-Derived Model
    'pdmHostStrain',
    'engraftmentSite',
    // Organoid Protocol -- organoidType replaced by the shared 'organ'
    // above (nf-osi/nf-research-tools-schema#262: same concept, phrased
    // adjectivally -- Cerebral/Intestinal/Cardiac/Retinal/Pancreatic map
    // 1:1 onto Brain/Intestine/Heart/Eye/Pancreas).
    'organoidDerivationSource',
    'organoidCellTypes',
    'cultureSystem',
    // Computational Tool
    'computationalToolType',
    'computationalToolLanguage',
    'computationalToolPlatformSupport',
    'licenseType',
    // Clinical Assessment Tool
    'clinicalAssessmentType',
    'clinicalAssessmentTargetPopulation',
    'clinicalAssessmentDiseaseSpecific',
  ],
  includeShareButton: true,
}

export const toolsCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  titleLinkConfig: {
    isMarkdown: false,
    baseURL: 'Explore/Tools',
    URLColumnName: 'resourceId',
    urlParamStyle: 'path-segment',
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

export const toolsSearch: SearchQueryWrapperPlotNavProps = {
  rgbIndex,
  name: 'Tools',
  shouldDeepLink: false,
  cardConfiguration: toolsCardConfiguration,
  columnAliases,
  searchIndexId: toolsSearchIndexId,
  autocompleteFieldName: 'resourceName',
  hideTopLevelControls: false,
  hideQueryCount: false,
  searchQueryConfig: toolsSearchQueryConfig,
}

export default tools
