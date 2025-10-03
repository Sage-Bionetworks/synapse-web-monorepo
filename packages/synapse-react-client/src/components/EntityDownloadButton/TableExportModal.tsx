import SynapseClient from '@/synapse-client'
import { SynapseContext } from '@/utils/context/SynapseContext'
import { Button } from '@mui/material'
import Form, { IChangeEvent } from '@rjsf/core'
import validator from '@rjsf/validator-ajv8'
import {
  DownloadFromTableRequest,
  DownloadFromTableResult,
  SortItem,
} from '@sage-bionetworks/synapse-types'
import { Component, ContextType, CSSProperties, Fragment } from 'react'
import { DialogBase } from '../DialogBase'
import SynapseFormCheckboxesWidget from '../SynapseForm/SynapseFormCheckboxesWidget'
import SynapseFormCheckboxWidget from '../SynapseForm/SynapseFormCheckboxWidget'
import SynapseFormRadioWidget from '../SynapseForm/SynapseFormRadioWidget'
import {
  csvOption,
  formSchemaArray,
  formSchemaUIArray,
  includeRowIdAndRowVersionOption,
  writeHeaderOption,
} from '../ModalDownload/ModalDownload.FormSchema'

// Modified ModalDownload component to accept props directly rather than parsing queryBundleRequest

type ModalDownloadState = {
  isLoading: boolean
  step: number
  data?: DownloadFromTableResult
  formData: Record<string, unknown>
}

export type TableExportModalProps = {
  onClose: (...args: any[]) => void
  includeEntityEtag?: boolean
  entityId: string
  offset?: number
  limit?: number
  sort?: SortItem[]
}

// Pops up a modal for exporting table data
export class TableExportModal extends Component<
  TableExportModalProps,
  ModalDownloadState
> {
  static contextType = SynapseContext
  declare context: NonNullable<ContextType<typeof SynapseContext>>

  constructor(props: TableExportModalProps) {
    super(props)
    this.state = {
      isLoading: false,
      step: 0,
      formData: {
        'File Type': csvOption,
        Contents: [writeHeaderOption, includeRowIdAndRowVersionOption],
      },
    }
  }

  handleSubmit = (event: IChangeEvent) => {
    if (this.state.step === 0) {
      this.handleDownloadSetup(event)
    } else {
      this.onDownload()
    }
  }

  handleDownloadSetup = (event: IChangeEvent) => {
    this.setState({
      isLoading: true,
    })
    const { formData } = event
    const fileType = formData['File Type']
    const contents = formData.Contents as string[]
    const { entityId } = this.props
    const separator = fileType === csvOption ? ',' : '\t'
    const writeHeader = contents.includes(writeHeaderOption)
    const includeRowIdAndRowVersion = contents.includes(
      includeRowIdAndRowVersionOption,
    )
    const downloadFromTableRequest: DownloadFromTableRequest = {
      sql: `SELECT * FROM ${entityId}`,
      entityId: entityId,
      concreteType:
        'org.sagebionetworks.repo.model.table.DownloadFromTableRequest',
      writeHeader,
      includeRowIdAndRowVersion,
      csvTableDescriptor: { separator },
    }
    SynapseClient.createTableCsvForDownload(
      downloadFromTableRequest,
      this.context.accessToken,
    )
      .then(data => {
        this.setState({
          isLoading: false,
          step: 1,
          data,
        })
      })
      .catch(err => {
        console.log('Error getDownloadFromTableRequest: ', err)
      })
  }

  onDownload = () => {
    const { data } = this.state
    // data will always be defined if calling this function
    SynapseClient.getFileHandleByIdURL(
      data!.resultsFileHandleId,
      this.context.accessToken,
    ).then(url => {
      window.location.href = url
      this.props.onClose()
    })
  }

  handleChange = (event: IChangeEvent) => {
    const { formData } = event
    this.setState({
      formData,
    })
  }

  render() {
    const spinnerStyle: CSSProperties = {
      height: 50,
      width: 50,
      backgroundSize: 50,
    }
    return (
      <DialogBase
        open={true}
        onCancel={this.props.onClose}
        title="Export Table"
        content={
          <>
            <Form
              validator={validator}
              id="modal-download-form"
              schema={formSchemaArray[this.state.step]}
              uiSchema={formSchemaUIArray[this.state.step]}
              onChange={this.handleChange}
              formData={this.state.formData}
              onSubmit={this.handleSubmit}
              widgets={{
                CheckboxWidget: SynapseFormCheckboxWidget,
                CheckboxesWidget: SynapseFormCheckboxesWidget,
                RadioWidget: SynapseFormRadioWidget,
              }}
            >
              {this.state.isLoading && (
                <div className="SRC-centerAndJustifyContent">
                  <div className="SRC-center-text">
                    <p> Creating the File </p>
                    <div style={spinnerStyle} className="spinner" />
                    <p> Loading... </p>
                  </div>
                </div>
              )}
              <Fragment />
            </Form>
          </>
        }
        actions={
          <>
            <Button
              variant="outlined"
              color="primary"
              onClick={this.props.onClose}
            >
              Cancel
            </Button>
            <Button
              form="modal-download-form"
              type="submit"
              variant="contained"
              color="primary"
            >
              {this.state.step === 0 ? 'Next' : 'Download'}
            </Button>
          </>
        }
      />
    )
  }
}

export default TableExportModal
