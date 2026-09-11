import { ExternalAnalysisPlatform } from 'synapse-react-client/components/SynapseTable/export/ExternalAnalysisPlatformsConstants'
import type { SearchQueryConfig } from 'synapse-react-client/components/SearchQueryWrapper/SearchQueryUseQueryOptions'

export const SYNAPSE_PORTAL_ID = '1005'

export const datasetsSql = 'SELECT * FROM syn50913342'
export const publicationsSql = 'SELECT * FROM syn16857542'
export const studiesSql = 'SELECT * FROM syn52694652'
export const initiativesSql =
  'SELECT * FROM syn24189696 order by initiative asc'
export const toolsSql = 'SELECT * FROM syn51730943'
export const peopleSql = 'SELECT * FROM syn23564971'
export const filesSql = `SELECT * FROM syn52702673 WHERE resourceType in ('experimentalData', 'results', 'analysis')`
export const metadataFilesSql = `SELECT * from syn52702673 where resourceType in ('metadata','report')`
export const fundersSql = 'SELECT * FROM syn16858699'
export const hackathonsSql = 'SELECT * FROM syn25585549'
export const observationsSql = 'SELECT * FROM syn51735464'
export const investigatorSql = `SELECT investigatorName as "firstName", ' ' as "lastName", institution, investigatorSynapseId as "USERID" FROM syn51734029 WHERE (investigatorName IS NOT NULL OR investigatorSynapseId IS NOT NULL)`
export const developmentPublicationSql = `SELECT * FROM syn51735467`
export const fundingAgencySql = `SELECT funderName as "Funding Agency" FROM syn51734076`
// syn26450069 (the legacy Resource table) was retired in Phase 7 of the LinkML
// migration (nf-osi/nf-research-tools-schema docs/MIGRATION.md) and is no longer
// written to -- usageRequirements now lives on syn51730943 (the live, unified
// Tool view) directly, same as every other tool.
export const usageRequirementsSql = `SELECT usageRequirements as "Usage Restrictions" FROM syn51730943 WHERE usageRequirements IS NOT NULL`
export const vendorSql = `SELECT vendorName as "Vendor", vendorUrl as "Vendor Url" FROM syn51735470 WHERE vendorName IS NOT NULL`
export const catalogNumberSql = `SELECT catalogNumber as "Catalog Number", catalogNumberURL as "Catalog Number URL" FROM syn51735470 WHERE catalogNumber IS NOT NULL`
export const toolApplicationsSql = `SELECT applications as "Tool Applications" FROM syn26486840 WHERE applications IS NOT NULL`
export const toolStudySql = `SELECT * FROM syn26461958`
export const toolDatasetSql = `SELECT * FROM syn16859448`
export const mutationsSql =
  'SELECT externalMutationID, alleleType, mutationType, mutationMethod, affectedGeneSymbol, affectedGeneName, sequenceVariation, proteinVariation, animalModelMutation, humanClinVarMutation, chromosome FROM syn51750823'
export const publicationsV2Sql = 'SELECT * FROM syn51735450'
export const popularSearchesSql =
  'SELECT displayText, fullTextSearch FROM syn26436892'
export const topProjectsSql =
  'SELECT * FROM syn53698263 order by "f.n_unique_users" desc limit 10'

export const enabledAnalysisPlatforms: ExternalAnalysisPlatform[] = [
  'cavatica',
  'pluto',
  'terra',
]
export const datasetsSearchIndexId = 'syn75081630'
// Tuned in nf-osi/opensearch-ops (benchmark/datasets/fields.yaml), which has the rationale.
// Equal weights and includeUnlistedFields:false are both measured, not defaults -- boosting
// costs recall here, and appending `*` undoes the whole gain.
export const datasetsSearchQueryConfig: SearchQueryConfig = {
  queryStrategy: 'BOOSTED_FUZZY',
  includeUnlistedFields: false,
  fieldBoosts: {
    title: 1,
    name: 1,
    alternateName: 1,
    series: 1,
    keywords: 1,
    measurementTechnique: 1,
    assay: 1,
    dataType: 1,
    subject: 1,
    description: 1,
    manifestation: 1,
    diseaseFocus: 1,
    species: 1,
    modelSystemName: 1,
    ageGroup: 1,
    creator: 1,
    contributor: 1,
    funder: 1,
    fundingAgency: 1,
    citation: 1,
    countryOfOrigin: 1,
    accessType: 1,
    license: 1,
    conditionsOfAccess: 1,
    dataUseModifiers: 1,
    includedInDataCatalog: 1,
    hosting: 1,
    repository: 1,
    externalUrl: 1,
    externalRepositoryUri: 1,
    visualizeDataOn: 1,
    path: 1,
    doi: 1,
    etag: 1,
    datasetMD5Hex: 1,
    croissant_file_s3_object: 1,
    versionLabel: 1,
    versionComment: 1,
  },
}
export const publicationsSearchIndexId = 'syn75081631'
// Tuned in nf-osi/opensearch-ops (benchmark/publications/fields.yaml).
export const publicationsSearchQueryConfig: SearchQueryConfig = {
  queryStrategy: 'BOOSTED_FUZZY',
  includeUnlistedFields: false,
  fieldBoosts: {
    title: 5,
    author: 3,
    manifestation: 3,
    diseaseFocus: 2,
    studyName: 2,
    journal: 2,
    studyId: 1,
    doi: 1,
    pmid: 1,
    fundingAgency: 1,
    publicationType: 1,
  },
}
export const studiesSearchIndexId = 'syn75081633'
// Tuned in nf-osi/opensearch-ops (benchmark/studies/fields.yaml).
// includeUnlistedFields:true is load-bearing, not just the default -- the `*` it appends is
// what keeps the keyword-mapped ENTITYID columns searchable.
export const studiesSearchQueryConfig: SearchQueryConfig = {
  queryStrategy: 'MULTI_MATCH_CROSS_FIELDS',
  includeUnlistedFields: true,
  fieldBoosts: {
    manifestation: 10,
    name: 5,
    studyName: 5,
    studyLeads: 3,
    institutions: 3,
    initiative: 3,
    summary: 3,
    dataType: 3,
    diseaseFocus: 2,
    fundingAgency: 2,
    grantDOI: 2,
    studyStatus: 2,
    dataStatus: 2,
    clinicalTrialID: 2,
    alternateDataRepository: 2,
    accessRequirements: 1,
    acknowledgementStatements: 1,
  },
}
export const initiativesSearchIndexId = 'syn75081635'
export const toolsSearchIndexId = 'syn75081636'
// Tuned in nf-osi/opensearch-ops (benchmark/tools/fields.yaml), which has the sweep record.
// Weights were swept for cross_fields specifically; they are not best_fields weights.
export const toolsSearchQueryConfig: SearchQueryConfig = {
  queryStrategy: 'MULTI_MATCH_CROSS_FIELDS',
  includeUnlistedFields: false,
  fieldBoosts: {
    resourceName: 2.5,
    synonyms: 2,
    rrid: 2,
    targetAntigen: 1.75,
    manifestation: 1.75,
    geneticDisorder: 1.5,
    tumorType: 1.5,
    species: 1.5,
    cellLineCategory: 1.5,
    resourceType: 1.5,
    vectorType: 1.5,
    investigatorName: 2.25,
    race: 1,
    sex: 1,
    description: 1,
  },
}
export const peopleSearchIndexId = 'syn75081637'
export const fundersSearchIndexId = 'syn75081638'
export const hackathonsSearchIndexId = 'syn75081639'
export const observationsSearchIndexId = 'syn75081640'
export const developmentPublicationsSearchIndexId = 'syn75081641'
export const toolStudySearchIndexId = 'syn75081642'
export const mutationsSearchIndexId = 'syn75081643'
export const publicationsV2SearchIndexId = 'syn75081644'
