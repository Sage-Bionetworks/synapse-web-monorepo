import { getValueOrMultiValue } from '@/components/GenericCard/CardUtils'
import { CardLabel } from '@/components/row_renderers/utils/CardFooter'
import ChipContainer from '@/components/row_renderers/utils/ChipContainer'
import { calculateFriendlyFileSize } from '@/utils/functions/calculateFriendlyFileSize'
import { PRODUCTION_ENDPOINT_CONFIG } from '@/utils/functions/getEndpoint'
import { DATASET } from '@/utils/SynapseConstants'
import Button from '@/react-ui/components/Button'
import { ColumnModel, SelectColumn } from '@sage-bionetworks/synapse-types'
import { Component, MouseEvent } from 'react'
import { TableToGenericCardMapping } from '../GenericCard/TableRowGenericCard'
import { QueryVisualizationContextType } from '../QueryVisualizationWrapper'
import { CardFooter, Icon } from './utils'

export type DatasetProps = {
  data?: any
  schema?: any
  secondaryLabelLimit?: number
  selectColumns?: SelectColumn[]
  columnModels?: ColumnModel[]
  genericCardSchema?: TableToGenericCardMapping
  queryVisualizationContext: QueryVisualizationContextType
}

class Dataset extends Component<DatasetProps, never> {
  constructor(props: DatasetProps) {
    super(props)
    this.handleLinkClick = this.handleLinkClick.bind(this)
  }

  public handleLinkClick =
    (link: string) => (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault()
      window.open(
        `${PRODUCTION_ENDPOINT_CONFIG.PORTAL}Synapse:${link}`,
        '_blank',
      )
    }

  public render() {
    const {
      data,
      schema,
      selectColumns,
      columnModels,
      genericCardSchema,
      queryVisualizationContext: { getColumnDisplayName },
    } = this.props
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
    const values: CardLabel[] = [
      {
        columnDisplayName: 'FUNDER',
        value: getValueOrMultiValue({
          columnName: 'fundingAgency',
          value: fundingAgency,
          selectColumns,
          columnModels,
        }).str,
      },
      { columnDisplayName: 'SIZE', value: fileSize },
      { columnDisplayName: 'FILES', value: fileCount },
    ]
    if (genericCardSchema && genericCardSchema.secondaryLabels) {
      const { secondaryLabels } = genericCardSchema
      for (let i = 0; i < secondaryLabels.length; i++) {
        const columnName = secondaryLabels[i]
        const value: string | undefined = data[schema[columnName]]
        let columnDisplayName
        if (value) {
          columnDisplayName = getColumnDisplayName(columnName)
          values.push({ columnDisplayName, value, columnName })
        }
      }
    }

    return (
      <div className="SRC-portalCard SRC-typeDataset  ">
        <div className="SRC-cardThumbnail">
          <Icon type={DATASET} />
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
            <div className="SRC-cardAction">
              <Button
                className="SRC-datasetButton"
                onClick={this.handleLinkClick(id)}
                color="secondary"
                variant="contained"
              >
                Download Dataset
              </Button>
            </div>
          </div>
          <div className="SRC-cardAnnotations">
            <ChipContainer chips={[tumorType, diseaseFocus]} />
          </div>
        </div>
        <CardFooter
          isHeader={false}
          secondaryLabelLimit={this.props.secondaryLabelLimit}
          values={values}
        />
      </div>
    )
  }
}
export default Dataset
