import { useGetFeatureFlag } from '@/synapse-queries/featureflags/useGetFeatureFlag'
import { SearchManagementResourceType } from '@/synapse-queries/searchmanagement/SearchManagementResourceType'
import { FeatureFlagEnum } from '@/utils/featureflag/FeatureFlags'
import { Alert, Box, Link, Tab, Tabs, Typography } from '@mui/material'
import { useState } from 'react'
import { SEARCH_MANAGEMENT_RESOURCE_LABELS } from './SearchManagementUtils'
import { SearchResourceTable } from './SearchResourceTable'

const SEARCH_MANAGEMENT_REST_DOCS_URL =
  'https://rest-docs.synapse.org/rest/index.html#org.sagebionetworks.repo.web.controller.SearchManagementController'

const TAB_ORDER: SearchManagementResourceType[] = [
  'SEARCH_CONFIGURATION',
  'TEXT_ANALYZER',
  'COLUMN_ANALYZER_OVERRIDE',
  'SYNONYM_SET',
  'SEARCH_PIPELINE',
]

const RESOURCE_DESCRIPTIONS: Record<SearchManagementResourceType, string> = {
  SEARCH_CONFIGURATION:
    'A Search Configuration bundles a default Text Analyzer, a default Search Pipeline, and ordered Column Analyzer Overrides into a reusable configuration that can be bound to a Project, Folder, or Search Index.',
  TEXT_ANALYZER:
    'A Text Analyzer defines a text analysis pipeline as the OpenSearch settings.analysis block: any combination of char filters, tokenizers, and token filters, plus named custom analyzers that compose them.',
  COLUMN_ANALYZER_OVERRIDE:
    'A Column Analyzer Override assigns specific Text Analyzers, or semantic search, to individual columns, overriding the Search Configuration’s default analyzer.',
  SYNONYM_SET:
    'A Synonym Set is a shareable OpenSearch synonym_graph (or synonym) token filter that Text Analyzers bring into their filter registry with a $ref.',
  SEARCH_PIPELINE:
    'A Search Pipeline is a shareable, named OpenSearch search pipeline that defines how a hybrid query’s per-clause scores are normalized and combined.',
}

const getTabId = (resourceType: SearchManagementResourceType) =>
  `search-management-tab-${resourceType}`
const getTabPanelId = (resourceType: SearchManagementResourceType) =>
  `search-management-tabpanel-${resourceType}`

/**
 * Lists, creates, and edits the reusable resources that control how Search Indexes analyze and match text.
 */
export default function SearchManagementPage() {
  const isEnabled = useGetFeatureFlag(FeatureFlagEnum.SEARCH_INDEX_MANAGEMENT)
  const [selectedType, setSelectedType] =
    useState<SearchManagementResourceType>(TAB_ORDER[0])

  if (!isEnabled) {
    return (
      <Alert severity="info">
        Search Management is not available at this time.
      </Alert>
    )
  }

  return (
    <Box>
      <Typography variant="headline3" component="h1">
        Search Management
      </Typography>
      <Typography variant="body1" sx={{ my: 2 }}>
        Search Configurations and their building blocks define how a Search
        Index analyzes, tokenizes, and matches text. Reading these resources is
        public; creating or editing them requires permission on the owning
        Organization. For more information, see the{' '}
        <Link href={SEARCH_MANAGEMENT_REST_DOCS_URL} target="_blank">
          Synapse REST API documentation on Search Management Services
        </Link>
        .
      </Typography>
      <Tabs
        value={selectedType}
        onChange={(_event, next: SearchManagementResourceType) =>
          setSelectedType(next)
        }
        variant="scrollable"
        aria-label="Search Management resource types"
      >
        {TAB_ORDER.map(resourceType => (
          <Tab
            key={resourceType}
            value={resourceType}
            label={SEARCH_MANAGEMENT_RESOURCE_LABELS[resourceType].plural}
            id={getTabId(resourceType)}
            aria-controls={getTabPanelId(resourceType)}
          />
        ))}
      </Tabs>
      <Box
        role="tabpanel"
        id={getTabPanelId(selectedType)}
        aria-labelledby={getTabId(selectedType)}
        sx={{ pt: 3 }}
      >
        <Typography variant="body1" sx={{ mb: 2 }}>
          {RESOURCE_DESCRIPTIONS[selectedType]}
        </Typography>
        <SearchResourceTable key={selectedType} resourceType={selectedType} />
      </Box>
    </Box>
  )
}
