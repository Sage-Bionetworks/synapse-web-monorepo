import { Box } from '@mui/material'
import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/index'
import { DetailsPageContextConsumer } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import { useGetPortalComponentSearchParams } from '@sage-bionetworks/synapse-portal-framework/utils/UseGetPortalComponentSearchParams'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import { CardContainerLogic } from 'synapse-react-client/components/CardContainerLogic/index'
import RowDataTable from 'synapse-react-client/components/RowDataTable/RowDataTable'
import { modelsSql } from '../config/resources'
import {
  modelCardConfiguration,
  modelColumnAliases,
} from '../config/synapseConfigs/models'

const COLUMN_ALIASES: Record<string, string> = {
  model_id: 'Model ID',
  target_platform: 'Target Platform',
  base_model: 'Base Model',
  results_summary: 'Results Summary',
  shared_by: 'Shared By',
  repo: 'Repository',
  paper: 'Paper',
  demo: 'Demo',
  direct_use: 'Direct Use',
  downstream_use: 'Downstream Use',
  out_of_scope_use: 'Out of Scope Use',
  bias_risks_limitations: 'Bias, Risks & Limitations',
  bias_recommendations: 'Bias Recommendations',
  other_risk: 'Other Risk',
  mitigations: 'Mitigations',
  get_started_code: 'Getting Started Code',
  training_data: 'Training Data',
  preprocessing: 'Preprocessing',
  training_regime: 'Training Regime',
  speeds_sizes_times: 'Speeds, Sizes & Times',
  testing_data: 'Testing Data',
  testing_factors: 'Testing Factors',
  testing_metrics: 'Testing Metrics',
  results: 'Results',
  hardware_type: 'Hardware Type',
  hours_used: 'Hours Used',
  cloud_provider: 'Cloud Provider',
  cloud_region: 'Cloud Region',
  co2_emitted: 'CO₂ Emitted',
  model_specs: 'Model Specs',
  compute_infrastructure: 'Compute Infrastructure',
  hardware_requirements: 'Hardware Requirements',
  software: 'Software',
  citation_bibtex: 'Citation (BibTeX)',
  citation_apa: 'Citation (APA)',
  more_information: 'More Information',
  model_examination: 'Model Examination',
  model_card_authors: 'Model Card Authors',
  model_card_contact: 'Model Card Contact',
  glossary: 'Glossary',
}

// Columns displayed in modelCardConfiguration (title, subTitle, description, secondaryLabels) are excluded here
const DISPLAYED_COLUMNS = [
  'model_id',
  'target_platform',
  'base_model',
  'results_summary',
  'shared_by',
  'repo',
  'paper',
  'demo',
  'direct_use',
  'downstream_use',
  'out_of_scope_use',
  'bias_risks_limitations',
  'bias_recommendations',
  'other_risk',
  'mitigations',
  'get_started_code',
  'training_data',
  'preprocessing',
  'training_regime',
  'speeds_sizes_times',
  'testing_data',
  'testing_factors',
  'testing_metrics',
  'results',
  'hardware_type',
  'hours_used',
  'cloud_provider',
  'cloud_region',
  'co2_emitted',
  'model_specs',
  'compute_infrastructure',
  'hardware_requirements',
  'software',
  'citation_bibtex',
  'citation_apa',
  'more_information',
  'model_examination',
  'model_card_authors',
  'model_card_contact',
  'glossary',
]

function ModelDetailsPage() {
  const { id } = useGetPortalComponentSearchParams()
  return (
    <DetailsPage
      header={
        <CardContainerLogic
          columnAliases={modelColumnAliases}
          cardConfiguration={{
            ...modelCardConfiguration,
            titleLinkConfig: undefined,
            isHeader: true,
          }}
          query={{
            sql: modelsSql,
            additionalFilters: id
              ? [
                  {
                    concreteType:
                      'org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter',
                    columnName: 'id',
                    operator: ColumnSingleValueFilterOperator.EQUAL,
                    values: [id],
                  },
                ]
              : [],
          }}
        />
      }
      sql={modelsSql}
      sqlOperator={ColumnSingleValueFilterOperator.EQUAL}
      resourcePrimaryKey={['id']}
    >
      <DetailsPageContextConsumer>
        {({ context }) =>
          context.rowData && context.rowSet ? (
            <Box sx={{ mt: 4 }}>
              <RowDataTable
                rowData={context.rowData.values}
                headers={context.rowSet.headers}
                displayedColumns={DISPLAYED_COLUMNS}
                columnAliases={COLUMN_ALIASES}
              />
            </Box>
          ) : null
        }
      </DetailsPageContextConsumer>
    </DetailsPage>
  )
}

export default ModelDetailsPage
