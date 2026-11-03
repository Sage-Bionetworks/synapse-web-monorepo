import { useGetEntityPermissions } from '@/synapse-queries/entity/useEntity'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Autocomplete,
  Button,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material'
import {
  AggregateDataConfiguration,
  AggregateDataConfigurationCountSuppressionStrategyEnum,
} from '@sage-bionetworks/synapse-client/generated/models/AggregateDataConfiguration'
import { FacetNoiseParametersConcreteTypeEnum } from '@sage-bionetworks/synapse-client/generated/models/FacetNoiseParameters'
import {
  FacetPostProcessingConfig,
  FacetPostProcessingConfigAlgorithmEnum,
} from '@sage-bionetworks/synapse-client/generated/models/FacetPostProcessingConfig'
import { FacetRoundingParametersConcreteTypeEnum } from '@sage-bionetworks/synapse-client/generated/models/FacetRoundingParameters'
import { useState } from 'react'
import { useQueryContext } from '../QueryContext/QueryContext'
import styles from './CohortBuilder.module.scss'
import { COHORT_PARTICIPANT_ID_COLUMN_NAME } from './cohortHandOff'

export const AGGREGATE_DATA_PREVIEW_TITLE = 'Preview aggregate-only results'
export const APPLY_PREVIEW_BUTTON_TEXT = 'Apply preview'
export const STOP_PREVIEW_BUTTON_TEXT = 'Stop preview'
const NO_FACET_POST_PROCESSING = 'NONE'

type FacetAlgorithmOption =
  | FacetPostProcessingConfigAlgorithmEnum
  | typeof NO_FACET_POST_PROCESSING

const FACET_ALGORITHM_OPTIONS: {
  value: FacetAlgorithmOption
  label: string
}[] = [
  { value: NO_FACET_POST_PROCESSING, label: 'None (exact counts)' },
  { value: FacetPostProcessingConfigAlgorithmEnum.ROUNDING, label: 'Rounding' },
  { value: FacetPostProcessingConfigAlgorithmEnum.NOISE, label: 'Noise' },
]

const COUNT_SUPPRESSION_STRATEGY_OPTIONS: {
  value: AggregateDataConfigurationCountSuppressionStrategyEnum
  label: string
}[] = [
  {
    value: AggregateDataConfigurationCountSuppressionStrategyEnum.EXCLUDE_ROW,
    label: 'Exclude the row',
  },
  {
    value:
      AggregateDataConfigurationCountSuppressionStrategyEnum.MASK_BELOW_THRESHOLD,
    label: 'Mask the count as -1',
  },
]

type PreviewForm = {
  suppressionThreshold: string
  quasiIdentifierColumnNames: string[]
  countSuppressionStrategy: AggregateDataConfigurationCountSuppressionStrategyEnum
  facetAlgorithm: FacetAlgorithmOption
  roundTo: string
  epsilon: string
}

// The Files and datasets list requests rows, which the server only allows when the participant identifier is a QID.
const DEFAULT_PREVIEW_FORM: PreviewForm = {
  suppressionThreshold: '',
  quasiIdentifierColumnNames: [COHORT_PARTICIPANT_ID_COLUMN_NAME],
  countSuppressionStrategy:
    AggregateDataConfigurationCountSuppressionStrategyEnum.EXCLUDE_ROW,
  facetAlgorithm: NO_FACET_POST_PROCESSING,
  roundTo: '',
  epsilon: '',
}

function parsePositiveInteger(value: string): number | undefined {
  const parsed = Number(value)
  return value.trim() !== '' && Number.isInteger(parsed) && parsed > 0
    ? parsed
    : undefined
}

function parsePositiveNumber(value: string): number | undefined {
  const parsed = Number(value)
  return value.trim() !== '' && Number.isFinite(parsed) && parsed > 0
    ? parsed
    : undefined
}

/** Returns the facet post-processing the form describes, or null when its parameter is invalid. */
function toFacetPostProcessingConfig(
  form: PreviewForm,
): FacetPostProcessingConfig | undefined | null {
  switch (form.facetAlgorithm) {
    case NO_FACET_POST_PROCESSING:
      return undefined
    case FacetPostProcessingConfigAlgorithmEnum.ROUNDING: {
      const roundTo = parsePositiveInteger(form.roundTo)
      return roundTo === undefined
        ? null
        : {
            algorithm: form.facetAlgorithm,
            parameters: {
              concreteType:
                FacetRoundingParametersConcreteTypeEnum.org_sagebionetworks_repo_model_FacetRoundingParameters,
              roundTo,
            },
          }
    }
    case FacetPostProcessingConfigAlgorithmEnum.NOISE: {
      const epsilon = parsePositiveNumber(form.epsilon)
      return epsilon === undefined
        ? null
        : {
            algorithm: form.facetAlgorithm,
            parameters: {
              concreteType:
                FacetNoiseParametersConcreteTypeEnum.org_sagebionetworks_repo_model_FacetNoiseParameters,
              epsilon,
            },
          }
    }
  }
}

/** Returns the configuration the form describes, or undefined when the form is invalid. */
function toAggregateDataConfiguration(
  form: PreviewForm,
): AggregateDataConfiguration | undefined {
  const suppressionThreshold = parsePositiveInteger(form.suppressionThreshold)
  const facetPostProcessingConfig = toFacetPostProcessingConfig(form)
  if (
    suppressionThreshold === undefined ||
    facetPostProcessingConfig === null
  ) {
    return undefined
  }
  return {
    suppressionThreshold,
    quasiIdentifierColumnNames:
      form.quasiIdentifierColumnNames.length > 0
        ? form.quasiIdentifierColumnNames
        : undefined,
    countSuppressionStrategy: form.countSuppressionStrategy,
    facetPostProcessingConfig,
  }
}

export type AggregateDataPreviewControlsProps = {
  /** The AGGREGATE_DATA source table whose administrators may preview its aggregate-only results. */
  sourceTableId: string
}

/**
 * Lets an administrator of the source table set the `aggregateDataPreview` of the enclosing QueryWrapper's query, to see
 * the results that users with aggregate-only access would get under that configuration. Renders nothing for anyone
 * else.
 */
export function AggregateDataPreviewControls(
  props: AggregateDataPreviewControlsProps,
) {
  const { data: permissions } = useGetEntityPermissions(props.sourceTableId)
  // Only the Administrator permission level grants CHANGE_PERMISSIONS.
  if (!permissions?.canChangePermissions) {
    return null
  }
  return <AggregateDataPreviewForm />
}

function AggregateDataPreviewForm() {
  const { currentQueryRequest, executeQueryRequest } = useQueryContext()
  const [form, setForm] = useState<PreviewForm>(DEFAULT_PREVIEW_FORM)
  const configuration = toAggregateDataConfiguration(form)
  const isPreviewing = currentQueryRequest.aggregateDataPreview !== undefined

  function updateForm(changes: Partial<PreviewForm>) {
    setForm(previous => ({ ...previous, ...changes }))
  }

  // Updating the current request, rather than the initial one, keeps the cohort the user has built.
  function setPreview(preview: AggregateDataConfiguration | undefined) {
    executeQueryRequest(previous => ({
      ...previous,
      aggregateDataPreview: preview,
    }))
  }

  const isThresholdInvalid =
    form.suppressionThreshold !== '' &&
    parsePositiveInteger(form.suppressionThreshold) === undefined
  const isRoundToInvalid =
    form.roundTo !== '' && parsePositiveInteger(form.roundTo) === undefined
  const isEpsilonInvalid =
    form.epsilon !== '' && parsePositiveNumber(form.epsilon) === undefined

  return (
    <Accordion disableGutters variant="outlined">
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="body1">{AGGREGATE_DATA_PREVIEW_TITLE}</Typography>
      </AccordionSummary>
      <AccordionDetails className={styles.preview}>
        <Typography variant="body1">
          Results are processed as they would be for users with aggregate-only
          access. Only administrators of the participant source table see this
          option.
        </Typography>
        <div className={styles.previewFields}>
          <TextField
            required
            label="Suppression threshold"
            type="number"
            value={form.suppressionThreshold}
            onChange={e => updateForm({ suppressionThreshold: e.target.value })}
            error={isThresholdInvalid}
            helperText="Minimum matching rows (k), a positive whole number"
            slotProps={{ htmlInput: { min: 1, step: 1 } }}
          />
          <Autocomplete
            className={styles.previewWideField}
            multiple
            freeSolo
            autoSelect
            options={[]}
            value={form.quasiIdentifierColumnNames}
            onChange={(_event, quasiIdentifierColumnNames) =>
              updateForm({ quasiIdentifierColumnNames })
            }
            renderInput={params => (
              <TextField
                {...params}
                label="Quasi-identifier columns"
                helperText={`Columns of the source table. The files and datasets list needs ${COHORT_PARTICIPANT_ID_COLUMN_NAME}.`}
              />
            )}
          />
          <TextField
            select
            label="Count suppression strategy"
            value={form.countSuppressionStrategy}
            onChange={e =>
              updateForm({
                countSuppressionStrategy: e.target
                  .value as AggregateDataConfigurationCountSuppressionStrategyEnum,
              })
            }
            helperText="For counts of quasi-identifiers below the threshold"
          >
            {COUNT_SUPPRESSION_STRATEGY_OPTIONS.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            label="Facet post-processing"
            value={form.facetAlgorithm}
            onChange={e =>
              updateForm({
                facetAlgorithm: e.target.value as FacetAlgorithmOption,
              })
            }
          >
            {FACET_ALGORITHM_OPTIONS.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          {form.facetAlgorithm ===
            FacetPostProcessingConfigAlgorithmEnum.ROUNDING && (
            <TextField
              required
              label="Round to"
              type="number"
              value={form.roundTo}
              onChange={e => updateForm({ roundTo: e.target.value })}
              error={isRoundToInvalid}
              helperText="Bin width, a positive whole number"
              slotProps={{ htmlInput: { min: 1, step: 1 } }}
            />
          )}
          {form.facetAlgorithm ===
            FacetPostProcessingConfigAlgorithmEnum.NOISE && (
            <TextField
              required
              label="Epsilon"
              type="number"
              value={form.epsilon}
              onChange={e => updateForm({ epsilon: e.target.value })}
              error={isEpsilonInvalid}
              helperText="Privacy budget, a positive number; lower adds more noise"
              slotProps={{ htmlInput: { min: 0, step: 'any' } }}
            />
          )}
        </div>
        <div className={styles.previewActions}>
          <Button
            variant="contained"
            disabled={configuration === undefined}
            onClick={() => setPreview(configuration)}
          >
            {APPLY_PREVIEW_BUTTON_TEXT}
          </Button>
          {isPreviewing && (
            <Button variant="outlined" onClick={() => setPreview(undefined)}>
              {STOP_PREVIEW_BUTTON_TEXT}
            </Button>
          )}
        </div>
      </AccordionDetails>
    </Accordion>
  )
}
