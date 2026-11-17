import type { MockSearchManagementResource } from '@/mocks/msw/handlers/searchManagementHandlers'
import type { SearchManagementResourceType } from '@/synapse-queries/searchmanagement/SearchManagementResourceType'

export const MOCK_SEARCH_MANAGEMENT_ORGANIZATION = 'org.sagebionetworks'

const audit = {
  etag: 'mock-etag',
  createdOn: '2026-10-01T12:00:00.000Z',
  createdBy: '1',
  modifiedOn: '2026-10-02T12:00:00.000Z',
  modifiedBy: '1',
}

/**
 * Wire-format Search Management resources served by the mock backend for Storybook. IDs are large so they don't
 * collide with the mock backend's auto-generated IDs.
 */
export const mockSearchManagementResources: Record<
  SearchManagementResourceType,
  MockSearchManagementResource[]
> = {
  TEXT_ANALYZER: [
    {
      id: '1001',
      organizationName: MOCK_SEARCH_MANAGEMENT_ORGANIZATION,
      name: 'SCIENTIFIC',
      description: 'Standard tokenizer with lowercase and English stemming',
      settings: {
        analyzer: {
          default: {
            type: 'custom',
            tokenizer: 'standard',
            filter: ['lowercase', 'porter_stem'],
          },
        },
      },
      ...audit,
    },
    {
      id: '1002',
      organizationName: MOCK_SEARCH_MANAGEMENT_ORGANIZATION,
      name: 'acronym_exact',
      description: 'Keyword tokenizer for exact acronym matches',
      settings: {
        analyzer: {
          default: {
            type: 'custom',
            tokenizer: 'keyword',
            filter: ['lowercase'],
          },
        },
      },
      ...audit,
    },
  ],
  COLUMN_ANALYZER_OVERRIDE: [
    {
      id: '2001',
      organizationName: MOCK_SEARCH_MANAGEMENT_ORGANIZATION,
      name: 'publication_overrides',
      description: 'Exact matching for disease codes; semantic abstracts',
      overrides: [
        {
          columnName: 'disease_code',
          analyzer: {
            $ref: `${MOCK_SEARCH_MANAGEMENT_ORGANIZATION}-acronym_exact`,
          },
        },
        { columnName: 'abstract', semantic: true },
      ],
      ...audit,
    },
  ],
  SYNONYM_SET: [
    {
      id: '3001',
      organizationName: MOCK_SEARCH_MANAGEMENT_ORGANIZATION,
      name: 'disease_synonyms',
      description: 'Common disease name synonyms',
      definition: {
        type: 'synonym_graph',
        synonyms: [
          'AD, alzheimers, alzheimer disease',
          'ALS => amyotrophic lateral sclerosis',
        ],
      },
      ...audit,
    },
  ],
  SEARCH_PIPELINE: [
    {
      id: '4001',
      organizationName: MOCK_SEARCH_MANAGEMENT_ORGANIZATION,
      name: 'balanced_hybrid',
      description: 'Min-max normalization with equal clause weights',
      settings: {
        phase_results_processors: [
          {
            'normalization-processor': {
              normalization: { technique: 'min_max' },
              combination: { technique: 'arithmetic_mean' },
            },
          },
        ],
      },
      ...audit,
    },
  ],
  SEARCH_CONFIGURATION: [
    {
      id: '5001',
      organizationName: MOCK_SEARCH_MANAGEMENT_ORGANIZATION,
      name: 'publications',
      description: 'Configuration for publication search indexes',
      defaultAnalyzer: {
        $ref: `${MOCK_SEARCH_MANAGEMENT_ORGANIZATION}-SCIENTIFIC`,
      },
      defaultSearchPipeline: {
        $ref: `${MOCK_SEARCH_MANAGEMENT_ORGANIZATION}-balanced_hybrid`,
      },
      columnAnalyzerOverrides: [
        {
          $ref: `${MOCK_SEARCH_MANAGEMENT_ORGANIZATION}-publication_overrides`,
        },
      ],
      ...audit,
    },
  ],
}
