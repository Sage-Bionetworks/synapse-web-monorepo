import { QBGroupDefinition } from '@/components/QueryBuilder/QueryBuilderTypes'

/** Sample queries on the columns of the ELITE mock profile. */
export const ELITE_MOCK_SAMPLE_QUERIES: Record<string, QBGroupDefinition> = {
  'APOE-e4 carriers, 90+': {
    combinator: 'AND',
    children: [
      {
        columnName: 'apoeGenotype',
        op: 'is_any_of',
        values: ['e2/e4', 'e3/e4', 'e4/e4'],
      },
      {
        columnName: 'ageRange',
        op: 'is_any_of',
        values: ['90-94', '95-99', '100-104', '105-109', '>109'],
      },
    ],
  },
  'Cardiometabolic multimorbidity': {
    combinator: 'AND',
    children: [
      { columnName: 'hasDiabetes', op: 'is_any_of', values: ['true'] },
      {
        columnName: 'hasCardiovascularDisease',
        op: 'is_any_of',
        values: ['true'],
      },
    ],
  },
  'Female participants without dementia or diabetes': {
    combinator: 'AND',
    children: [
      { columnName: 'sex', op: 'is_any_of', values: ['Female'] },
      {
        combinator: 'OR',
        not: true,
        children: [
          { columnName: 'hasDementia', op: 'is_any_of', values: ['true'] },
          { columnName: 'hasDiabetes', op: 'is_any_of', values: ['true'] },
        ],
      },
    ],
  },
  'Multi-omics discovery cohort': {
    combinator: 'AND',
    children: [
      {
        columnName: 'dataType',
        op: 'is_all_of',
        values: ['genomicVariants', 'proteomics', 'metabolomics'],
      },
    ],
  },
}

/** Sample queries on the columns of the ADKP mock profile. */
export const ADKP_MOCK_SAMPLE_QUERIES: Record<string, QBGroupDefinition> = {
  "Alzheimer's cases with advanced pathology": {
    combinator: 'AND',
    children: [
      {
        columnName: 'diagnosis',
        op: 'is_any_of',
        values: ["Alzheimer's Disease"],
      },
      { columnName: 'braak', op: 'is_any_of', values: ['Stage V', 'Stage VI'] },
      { columnName: 'amyCerad', op: 'is_any_of', values: ['Frequent'] },
    ],
  },
  'APOE-e4 carriers, 85+': {
    combinator: 'AND',
    children: [
      {
        columnName: 'apoeGenotype',
        op: 'is_any_of',
        values: ['24', '34', '44'],
      },
      {
        columnName: 'ageDeathRange',
        op: 'is_any_of',
        values: ['85-89', '90+'],
      },
    ],
  },
  'Controls or MCI with RNA-seq': {
    combinator: 'AND',
    children: [
      {
        combinator: 'OR',
        children: [
          { columnName: 'diagnosis', op: 'is_any_of', values: ['control'] },
          { columnName: 'diagnosis', op: 'is_any_of', values: ['MCI'] },
        ],
      },
      { columnName: 'assay', op: 'is_any_of', values: ['rnaSeq'] },
    ],
  },
}
