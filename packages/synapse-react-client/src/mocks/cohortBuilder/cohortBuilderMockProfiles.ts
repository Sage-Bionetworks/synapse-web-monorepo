import { AggregateCountSuppressionStrategy } from '@sage-bionetworks/synapse-client/generated/models/AggregateCountSuppressionStrategy'
import { FacetPostProcessingConfig } from '@sage-bionetworks/synapse-client/generated/models/FacetPostProcessingConfig'

/**
 * Best-guess Cohort Builder 2.0 source layout, expressed as the columns the two
 * VirtualTables expose. The participant-perspective VT groups MATERIAL by
 * participant; the data-perspective VT groups MATERIAL by file/dataset reference.
 * Data attributes keep the same column name in both VTs (a STRING_LIST in the
 * participant VT, a scalar in MATERIAL and the data VT) so one filter tree can be
 * applied to both as a defining condition.
 */

/** Relative frequency of each value, used by the synthetic data generator. */
export type WeightedValues = Readonly<Record<string, number>>

export type MockParticipantAttribute = {
  name: string
  values: WeightedValues
  isQuasiIdentifier: boolean
}

export type MockAssay = {
  assay: string
  dataType: string
  fileFormats: readonly string[]
  /** Portal-specific data attributes (e.g. specimenType, tissue) and their possible values. */
  extraAttributes: Readonly<Record<string, readonly string[]>>
}

export type MockStudy = {
  name: string
  participantCount: number
  /** FILE studies map participants to individual files; DATASET studies map every participant to every study dataset. */
  mapping: 'FILE' | 'DATASET'
  assays: readonly MockAssay[]
}

export type CohortBuilderMockProfile = {
  portalName: string
  participantIdPrefix: string
  participantsVirtualTableId: string
  dataVirtualTableId: string
  /** First synthetic entity ID assigned to a file or dataset reference. */
  firstReferenceEntityId: number
  participantAttributes: readonly MockParticipantAttribute[]
  extraDataAttributeNames: readonly string[]
  studies: readonly MockStudy[]
  suppressionThreshold: number
  countSuppressionStrategy: AggregateCountSuppressionStrategy
  facetPostProcessingConfig: FacetPostProcessingConfig
}

export const PARTICIPANT_ID_COLUMN_NAME = 'individualId'
export const STUDY_COLUMN_NAME = 'study'
export const DATA_REFERENCE_COLUMN_NAME = 'dataReference'
export const REFERENCE_TYPE_COLUMN_NAME = 'referenceType'
export const PARTICIPANT_COUNT_COLUMN_NAME = 'participantCount'
export const CORE_DATA_ATTRIBUTE_NAMES = [
  'dataType',
  'assay',
  'fileFormat',
] as const

const TRUE_FALSE_RARE: WeightedValues = { false: 85, true: 15 }
const TRUE_FALSE_COMMON: WeightedValues = { false: 60, true: 40 }

// ADM-8371: 5-year bins with a censored top bin.
const ELITE_AGE_RANGES: WeightedValues = {
  '20-24': 1,
  '25-29': 1,
  '30-34': 1,
  '35-39': 2,
  '40-44': 2,
  '45-49': 3,
  '50-54': 4,
  '55-59': 5,
  '60-64': 6,
  '65-69': 7,
  '70-74': 8,
  '75-79': 9,
  '80-84': 10,
  '85-89': 11,
  '90-94': 12,
  '95-99': 9,
  '100-104': 5,
  '105-109': 0.4,
  '>109': 0.1,
}

const ELITE_BLOOD_SPECIMENS = ['blood', 'plasma', 'PBMC', 'saliva'] as const

export const ELITE_MOCK_PROFILE: CohortBuilderMockProfile = {
  portalName: 'ELITE',
  participantIdPrefix: 'ELITE-SYN',
  participantsVirtualTableId: 'syn90000001',
  dataVirtualTableId: 'syn90000002',
  firstReferenceEntityId: 90100000,
  participantAttributes: [
    {
      name: 'sex',
      values: { Female: 58, Male: 41, Unknown: 1 },
      isQuasiIdentifier: true,
    },
    { name: 'ageRange', values: ELITE_AGE_RANGES, isQuasiIdentifier: true },
    {
      name: 'race',
      values: {
        White: 78,
        'Black or African American': 9,
        Asian: 6,
        'American Indian or Alaska Native': 0.3,
        'More than one race': 3,
        Unknown: 4,
      },
      isQuasiIdentifier: true,
    },
    {
      name: 'ethnicity',
      values: {
        'Not Hispanic or Latino': 90,
        'Hispanic or Latino': 7,
        Unknown: 3,
      },
      isQuasiIdentifier: true,
    },
    {
      name: 'apoeGenotype',
      values: {
        'e2/e2': 0.7,
        'e2/e3': 12,
        'e2/e4': 2,
        'e3/e3': 61,
        'e3/e4': 21,
        'e4/e4': 2,
      },
      isQuasiIdentifier: true,
    },
    {
      name: 'familyStudyParticipant',
      values: TRUE_FALSE_COMMON,
      isQuasiIdentifier: false,
    },
    { name: 'hasDementia', values: TRUE_FALSE_RARE, isQuasiIdentifier: true },
    { name: 'hasDiabetes', values: TRUE_FALSE_RARE, isQuasiIdentifier: true },
    {
      name: 'hasCardiovascularDisease',
      values: { false: 70, true: 30 },
      isQuasiIdentifier: true,
    },
    {
      name: 'mortalityStatus',
      values: { Living: 55, Deceased: 45 },
      isQuasiIdentifier: false,
    },
  ],
  extraDataAttributeNames: ['specimenType'],
  studies: [
    {
      name: 'LLFS',
      participantCount: 1200,
      mapping: 'DATASET',
      assays: [
        {
          assay: 'WGS',
          dataType: 'genomicVariants',
          fileFormats: ['VCF'],
          extraAttributes: { specimenType: ['blood'] },
        },
        {
          assay: 'SomaScan',
          dataType: 'proteomics',
          fileFormats: ['CSV'],
          extraAttributes: { specimenType: ['plasma'] },
        },
        {
          assay: 'LC-MS',
          dataType: 'metabolomics',
          fileFormats: ['CSV'],
          extraAttributes: { specimenType: ['plasma'] },
        },
      ],
    },
    {
      name: 'NECS',
      participantCount: 500,
      mapping: 'FILE',
      assays: [
        {
          assay: 'WGS',
          dataType: 'genomicVariants',
          fileFormats: ['CRAM', 'VCF'],
          extraAttributes: { specimenType: ['blood', 'saliva'] },
        },
        {
          assay: 'RNAseq',
          dataType: 'geneExpression',
          fileFormats: ['FASTQ', 'BAM'],
          extraAttributes: { specimenType: ['blood'] },
        },
      ],
    },
    {
      name: 'LonGenity',
      participantCount: 700,
      mapping: 'FILE',
      assays: [
        {
          assay: 'methylationArray',
          dataType: 'epigenetics',
          fileFormats: ['IDAT'],
          extraAttributes: { specimenType: ['blood'] },
        },
        {
          assay: 'SomaScan',
          dataType: 'proteomics',
          fileFormats: ['CSV'],
          extraAttributes: { specimenType: ['plasma'] },
        },
      ],
    },
    {
      name: 'ILO',
      participantCount: 300,
      mapping: 'FILE',
      assays: [
        {
          assay: 'scRNAseq',
          dataType: 'geneExpression',
          fileFormats: ['FASTQ', 'H5AD'],
          extraAttributes: { specimenType: ['PBMC'] },
        },
        {
          assay: 'metagenomics',
          dataType: 'genomicVariants',
          fileFormats: ['FASTQ'],
          extraAttributes: { specimenType: ELITE_BLOOD_SPECIMENS },
        },
      ],
    },
  ],
  suppressionThreshold: 20,
  countSuppressionStrategy: 'EXCLUDE_ROW',
  facetPostProcessingConfig: {
    algorithm: 'ROUNDING',
    parameters: {
      concreteType: 'org.sagebionetworks.repo.model.FacetRoundingParameters',
      roundTo: 5,
    },
  },
}

const ADKP_BRAIN_TISSUES = [
  'dorsolateral prefrontal cortex',
  'temporal cortex',
  'cerebellum',
  'parahippocampal gyrus',
] as const

export const ADKP_MOCK_PROFILE: CohortBuilderMockProfile = {
  portalName: 'AD Knowledge Portal',
  participantIdPrefix: 'ADKP-SYN',
  participantsVirtualTableId: 'syn90000011',
  dataVirtualTableId: 'syn90000012',
  firstReferenceEntityId: 90200000,
  participantAttributes: [
    {
      name: 'sex',
      values: { female: 62, male: 38 },
      isQuasiIdentifier: true,
    },
    {
      name: 'ageDeathRange',
      values: {
        '<70': 6,
        '70-74': 6,
        '75-79': 10,
        '80-84': 18,
        '85-89': 25,
        '90+': 35,
      },
      isQuasiIdentifier: true,
    },
    {
      name: 'race',
      values: {
        White: 85,
        'Black or African American': 8,
        Asian: 2,
        'More than one race': 1,
        Unknown: 4,
      },
      isQuasiIdentifier: true,
    },
    {
      name: 'isHispanic',
      values: { false: 93, true: 5, Unknown: 2 },
      isQuasiIdentifier: true,
    },
    {
      name: 'apoeGenotype',
      values: { '22': 1, '23': 12, '24': 2, '33': 58, '34': 24, '44': 3 },
      isQuasiIdentifier: true,
    },
    {
      name: 'diagnosis',
      values: {
        control: 30,
        "Alzheimer's Disease": 45,
        MCI: 20,
        'frontotemporal dementia': 0.5,
        other: 4.5,
      },
      isQuasiIdentifier: false,
    },
    {
      name: 'braak',
      values: {
        'Stage 0': 3,
        'Stage I': 8,
        'Stage II': 12,
        'Stage III': 20,
        'Stage IV': 25,
        'Stage V': 22,
        'Stage VI': 10,
      },
      isQuasiIdentifier: false,
    },
    {
      name: 'amyCerad',
      values: { None: 25, Sparse: 15, Moderate: 25, Frequent: 35 },
      isQuasiIdentifier: false,
    },
  ],
  extraDataAttributeNames: ['tissue'],
  studies: [
    {
      name: 'ROSMAP',
      participantCount: 900,
      mapping: 'FILE',
      assays: [
        {
          assay: 'rnaSeq',
          dataType: 'geneExpression',
          fileFormats: ['fastq', 'bam'],
          extraAttributes: { tissue: ['dorsolateral prefrontal cortex'] },
        },
        {
          assay: 'snrnaSeq',
          dataType: 'geneExpression',
          fileFormats: ['fastq', 'h5ad'],
          extraAttributes: { tissue: ['dorsolateral prefrontal cortex'] },
        },
        {
          assay: 'wholeGenomeSeq',
          dataType: 'genomicVariants',
          fileFormats: ['cram', 'vcf'],
          extraAttributes: { tissue: ['dorsolateral prefrontal cortex'] },
        },
      ],
    },
    {
      name: 'MSBB',
      participantCount: 300,
      mapping: 'FILE',
      assays: [
        {
          assay: 'rnaSeq',
          dataType: 'geneExpression',
          fileFormats: ['fastq', 'bam'],
          extraAttributes: { tissue: ADKP_BRAIN_TISSUES },
        },
        {
          assay: 'TMT quantitation',
          dataType: 'proteomics',
          fileFormats: ['raw', 'csv'],
          extraAttributes: { tissue: ['parahippocampal gyrus'] },
        },
      ],
    },
    {
      name: 'MayoRNAseq',
      participantCount: 250,
      mapping: 'FILE',
      assays: [
        {
          assay: 'rnaSeq',
          dataType: 'geneExpression',
          fileFormats: ['fastq', 'bam'],
          extraAttributes: { tissue: ['temporal cortex', 'cerebellum'] },
        },
      ],
    },
    {
      name: 'DiverseCohorts',
      participantCount: 400,
      mapping: 'DATASET',
      assays: [
        {
          assay: 'rnaSeq',
          dataType: 'geneExpression',
          fileFormats: ['bam'],
          extraAttributes: { tissue: ['dorsolateral prefrontal cortex'] },
        },
        {
          assay: 'snATACSeq',
          dataType: 'epigenetics',
          fileFormats: ['tsv'],
          extraAttributes: { tissue: ['dorsolateral prefrontal cortex'] },
        },
      ],
    },
  ],
  suppressionThreshold: 20,
  countSuppressionStrategy: 'EXCLUDE_ROW',
  facetPostProcessingConfig: {
    algorithm: 'NOISE',
    parameters: {
      concreteType: 'org.sagebionetworks.repo.model.FacetNoiseParameters',
      epsilon: 1.0,
    },
  },
}
