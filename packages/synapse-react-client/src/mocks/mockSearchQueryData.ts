import {
  QueryResultBundle,
  SearchQueryBundleRequest,
} from '@sage-bionetworks/synapse-types'
import { SynapseConstants } from '@/utils'

/**
 * Mock data for the SearchQueryServicesApi.
 * Used in tests and Storybook while the API is under development.
 */

export const mockSearchQueryRequest: SearchQueryBundleRequest = {
  concreteType:
    'org.sagebionetworks.repo.model.search.query.SearchQueryBundleRequest',
  query: {
    limit: 25,
    offset: 0,
  },
  partMask:
    SynapseConstants.BUNDLE_MASK_QUERY_RESULTS |
    SynapseConstants.BUNDLE_MASK_QUERY_COUNT |
    SynapseConstants.BUNDLE_MASK_QUERY_SELECT_COLUMNS |
    SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS |
    SynapseConstants.BUNDLE_MASK_QUERY_FACETS,
}

export const mockSearchQueryResultBundle: QueryResultBundle = {
  concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
  queryCount: 42,
  selectColumns: [
    { name: 'id', columnType: 'ENTITYID' },
    { name: 'name', columnType: 'STRING' },
    { name: 'description', columnType: 'STRING' },
    { name: 'node_type', columnType: 'STRING' },
    { name: 'consortium', columnType: 'STRING' },
    { name: 'diagnosis', columnType: 'STRING' },
    { name: 'organ', columnType: 'STRING' },
    { name: 'tissue', columnType: 'STRING' },
    { name: 'created_by', columnType: 'USERID' },
    { name: 'modified_on', columnType: 'DATE' },
  ],
  columnModels: [
    { id: 'c1', name: 'id', columnType: 'ENTITYID' },
    { id: 'c2', name: 'name', columnType: 'STRING', maximumSize: 256 },
    { id: 'c3', name: 'description', columnType: 'STRING', maximumSize: 1000 },
    { id: 'c4', name: 'node_type', columnType: 'STRING', maximumSize: 50 },
    { id: 'c5', name: 'consortium', columnType: 'STRING', maximumSize: 100 },
    { id: 'c6', name: 'diagnosis', columnType: 'STRING', maximumSize: 100 },
    { id: 'c7', name: 'organ', columnType: 'STRING', maximumSize: 100 },
    { id: 'c8', name: 'tissue', columnType: 'STRING', maximumSize: 100 },
    { id: 'c9', name: 'created_by', columnType: 'USERID' },
    { id: 'c10', name: 'modified_on', columnType: 'DATE' },
  ],
  facets: [
    {
      concreteType:
        'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
      columnName: 'consortium',
      facetType: 'enumeration',
      facetValues: [
        { value: 'HTAN', count: 15, isSelected: false },
        { value: 'CPTAC', count: 12, isSelected: false },
        { value: 'TCGA', count: 8, isSelected: false },
        { value: 'PCAWG', count: 7, isSelected: false },
      ],
    },
    {
      concreteType:
        'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
      columnName: 'diagnosis',
      facetType: 'enumeration',
      facetValues: [
        { value: 'Glioblastoma', count: 18, isSelected: false },
        {
          value: 'Ovarian Serous Cystadenocarcinoma',
          count: 11,
          isSelected: false,
        },
        { value: 'Lung Adenocarcinoma', count: 9, isSelected: false },
        { value: 'Breast Invasive Carcinoma', count: 4, isSelected: false },
      ],
    },
    {
      concreteType:
        'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
      columnName: 'organ',
      facetType: 'enumeration',
      facetValues: [
        { value: 'Brain', count: 18, isSelected: false },
        { value: 'Lung', count: 12, isSelected: false },
        { value: 'Ovary', count: 8, isSelected: false },
        { value: 'Breast', count: 4, isSelected: false },
      ],
    },
    {
      concreteType:
        'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
      columnName: 'tissue',
      facetType: 'enumeration',
      facetValues: [
        { value: 'Primary Tumor', count: 25, isSelected: false },
        { value: 'Solid Tissue Normal', count: 10, isSelected: false },
        { value: 'Metastatic', count: 7, isSelected: false },
      ],
    },
  ],
  queryResult: {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryResult',
    queryResults: {
      concreteType: 'org.sagebionetworks.repo.model.table.RowSet',
      tableId: 'search',
      etag: 'search-mock-etag',
      headers: [
        { name: 'id', columnType: 'ENTITYID', id: 'c1' },
        { name: 'name', columnType: 'STRING', id: 'c2' },
        { name: 'description', columnType: 'STRING', id: 'c3' },
        { name: 'node_type', columnType: 'STRING', id: 'c4' },
        { name: 'consortium', columnType: 'STRING', id: 'c5' },
        { name: 'diagnosis', columnType: 'STRING', id: 'c6' },
        { name: 'organ', columnType: 'STRING', id: 'c7' },
        { name: 'tissue', columnType: 'STRING', id: 'c8' },
        { name: 'created_by', columnType: 'USERID', id: 'c9' },
        { name: 'modified_on', columnType: 'DATE', id: 'c10' },
      ],
      rows: [
        {
          rowId: 1,
          versionNumber: 1,
          values: [
            'syn11234567',
            'HTAN OHSU - scRNA-seq Level 3',
            'Single cell RNA sequencing data from glioblastoma tumor samples',
            'FileEntity',
            'HTAN',
            'Glioblastoma',
            'Brain',
            'Primary Tumor',
            '345678',
            '1680000000000',
          ],
        },
        {
          rowId: 2,
          versionNumber: 1,
          values: [
            'syn22345678',
            'CPTAC GBM - Proteomics',
            'Proteomics data from glioblastoma samples',
            'FileEntity',
            'CPTAC',
            'Glioblastoma',
            'Brain',
            'Primary Tumor',
            '456789',
            '1681000000000',
          ],
        },
        {
          rowId: 3,
          versionNumber: 2,
          values: [
            'syn33456789',
            'TCGA OV - WES Level 2',
            'Whole exome sequencing from ovarian cancer samples',
            'FileEntity',
            'TCGA',
            'Ovarian Serous Cystadenocarcinoma',
            'Ovary',
            'Primary Tumor',
            '567890',
            '1682000000000',
          ],
        },
        {
          rowId: 4,
          versionNumber: 1,
          values: [
            'syn44567890',
            'HTAN TNP - scATAC-seq',
            'Single-cell ATAC-seq from non-small cell lung cancer',
            'FileEntity',
            'HTAN',
            'Lung Adenocarcinoma',
            'Lung',
            'Primary Tumor',
            '678901',
            '1683000000000',
          ],
        },
        {
          rowId: 5,
          versionNumber: 1,
          values: [
            'syn55678901',
            'PCAWG Breast - WGS',
            'Whole genome sequencing from breast cancer samples',
            'FileEntity',
            'PCAWG',
            'Breast Invasive Carcinoma',
            'Breast',
            'Primary Tumor',
            '789012',
            '1684000000000',
          ],
        },
        {
          rowId: 6,
          versionNumber: 3,
          values: [
            'syn66789012',
            'CPTAC LUAD - Phosphoproteomics',
            'Phosphoproteomics data from lung adenocarcinoma',
            'FileEntity',
            'CPTAC',
            'Lung Adenocarcinoma',
            'Lung',
            'Primary Tumor',
            '890123',
            '1685000000000',
          ],
        },
        {
          rowId: 7,
          versionNumber: 1,
          values: [
            'syn77890123',
            'HTAN CHOP - Bulk RNA-seq',
            'Bulk RNA sequencing from pediatric glioblastoma',
            'FileEntity',
            'HTAN',
            'Glioblastoma',
            'Brain',
            'Primary Tumor',
            '901234',
            '1686000000000',
          ],
        },
        {
          rowId: 8,
          versionNumber: 1,
          values: [
            'syn88901234',
            'TCGA BRCA - miRNA-seq',
            'miRNA sequencing from breast invasive carcinoma',
            'FileEntity',
            'TCGA',
            'Breast Invasive Carcinoma',
            'Breast',
            'Solid Tissue Normal',
            '112345',
            '1687000000000',
          ],
        },
        {
          rowId: 9,
          versionNumber: 2,
          values: [
            'syn99012345',
            'PCAWG OV - SV calls',
            'Structural variant calls from ovarian cancer',
            'FileEntity',
            'PCAWG',
            'Ovarian Serous Cystadenocarcinoma',
            'Ovary',
            'Primary Tumor',
            '223456',
            '1688000000000',
          ],
        },
        {
          rowId: 10,
          versionNumber: 1,
          values: [
            'syn10123456',
            'HTAN BU - IMC',
            'Imaging mass cytometry data from lung cancer samples',
            'FileEntity',
            'HTAN',
            'Lung Adenocarcinoma',
            'Lung',
            'Metastatic',
            '334567',
            '1689000000000',
          ],
        },
      ],
    },
  },
}
