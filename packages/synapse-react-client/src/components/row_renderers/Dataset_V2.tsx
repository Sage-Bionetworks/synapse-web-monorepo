import { DATASET } from '../../utils/SynapseConstants'
import { calculateFriendlyFileSize } from '../../utils/functions/calculateFriendlyFileSize'
import * as Utils from './utils'
import { GenericCardSchema, getValueOrMultiValue } from '../GenericCard'
import { SelectColumn, ColumnModel } from '@sage-bionetworks/synapse-types'
import { PRODUCTION_ENDPOINT_CONFIG } from '../../utils/functions/getEndpoint'
import { QueryVisualizationContextType } from '../QueryVisualizationWrapper'
import { AddToDownloadCart } from '../AddToDownloadCart'
import { SYNAPSE_ENTITY_ID_REGEX } from '../../utils/functions/RegularExpressions'

export type DatasetV2_Props = {
  data?: any
  schema?: any
  secondaryLabelLimit?: number
  selectColumns?: SelectColumn[]
  columnModels?: ColumnModel[]
  genericCardSchema?: GenericCardSchema
  queryVisualizationContext: QueryVisualizationContextType
}

export function DatasetV2(props: DatasetV2_Props): JSX.Element {
  const {
    data,
    schema,
    selectColumns,
    columnModels,
    genericCardSchema,
    queryVisualizationContext: { getColumnDisplayName },
  } = props
  const datasetName = data[schema.datasetName]
  const summary = data[schema.summary]
  const tumorType = getValueOrMultiValue({
    columnName: 'tumorType',
    value: data[schema.tumorType],
    selectColumns,
    columnModels,
  }).str
  const diseaseFocus = getValueOrMultiValue({
    columnName: 'diseaseFocus',
    value: data[schema.diseaseFocus],
    selectColumns,
    columnModels,
  }).str
  const id = data[schema.id]
  const fundingAgency = data[schema.fundingAgency]
  const fileCount = data[schema.fileCount]
  const fileSize = calculateFriendlyFileSize(data[schema.fileSize])
  const values = [
    [
      'FUNDER',
      getValueOrMultiValue({
        columnName: 'fundingAgency',
        value: fundingAgency,
        selectColumns,
        columnModels,
      }).str,
    ],
    ['SIZE', fileSize],
    ['FILES', fileCount],
  ]
  const synapseLink: string = data[schema.synapseLink] || ''
  const synapseLinkId: string =
    synapseLink.match(SYNAPSE_ENTITY_ID_REGEX)?.[1] || ''

  if (genericCardSchema && genericCardSchema.secondaryLabels) {
    const { secondaryLabels } = genericCardSchema
    for (let i = 0; i < secondaryLabels.length; i++) {
      const columnName = secondaryLabels[i]
      const value: any = data[schema[columnName]]
      let columnDisplayName
      if (value) {
        columnDisplayName = getColumnDisplayName(columnName)
        const keyValue = [columnDisplayName, value, columnName]
        values.push(keyValue)
      }
    }
  }

  return (
    <div className="SRC-portalCard SRC-typeDataset  ">
      <div className="SRC-cardThumbnail">
        <Utils.Icon type={DATASET} />
        <div>{fileSize}</div>
      </div>
      <div className="SRC-cardContent SRC-dataset">
        <div className="SRC-type">Dataset </div>
        <div>
          <h3>
            <a
              target="_self"
              href={`${PRODUCTION_ENDPOINT_CONFIG.PORTAL}Synapse:${id}`}
            >
              {datasetName}
            </a>
          </h3>
        </div>
        <div className="SRC-description-dataset">
          <p className="SRC-description-text">{summary}</p>
        </div>
        <div className="SRC-cardAction">
          {synapseLink && <AddToDownloadCart entityId={synapseLinkId} />}
        </div>
        <div className="SRC-cardAnnotations">
          <Utils.ChipContainer chips={[tumorType, diseaseFocus]} />
        </div>
      </div>
      <Utils.CardFooter
        isHeader={false}
        secondaryLabelLimit={props.secondaryLabelLimit}
        values={values}
      />
    </div>
  )
}

export default DatasetV2
