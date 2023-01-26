import * as React from 'react'
import { PRODUCTION_ENDPOINT_CONFIG } from '../utils/functions/getEndpoint'
import {
  createEntity,
  getEntity,
  lookupChildEntity,
  updateEntity,
  uploadFile,
} from '../utils/SynapseClient'
import { SynapseContext } from '../utils/SynapseContext'
import {
  EntityId,
  EntityLookupRequest,
  FileEntity,
  FileUploadComplete,
} from '../utils/synapseTypes/'

type UploaderState = {
  error?: any
  totalFilesToUploadCount: number
  filesUploadedCount: number
  isUploading?: boolean
  successfullyUploaded: boolean
}

export type UploaderProps = {
  parentContainerId: string
}

export default class Uploader extends React.Component<
  UploaderProps,
  UploaderState
> {
  private readonly inputOpenFileRef: React.RefObject<HTMLInputElement>
  static contextType = SynapseContext

  constructor(props: UploaderProps) {
    super(props)
    this.state = {
      isUploading: false,
      filesUploadedCount: 0,
      totalFilesToUploadCount: 0,
      successfullyUploaded: false,
    }
    this.inputOpenFileRef = React.createRef()
  }

  showOpenFileDlg = () => {
    if (this.inputOpenFileRef && this.inputOpenFileRef.current) {
      this.inputOpenFileRef.current.click()
    }
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      this.handleFilesChanged(event.target.files)
    }
  }

  finishedProcessingOneFile = () => {
    const incrementedFilesUploadedCount = this.state.filesUploadedCount + 1
    const isStillUploading =
      incrementedFilesUploadedCount < this.state.totalFilesToUploadCount
    this.setState({
      isUploading: isStillUploading,
      filesUploadedCount: incrementedFilesUploadedCount,
      successfullyUploaded: !isStillUploading,
    })
  }

  handleUploadError = (error: any) => {
    this.finishedProcessingOneFile()
    this.setState({ error })
  }

  handleFilesChanged = (selectorFiles: FileList) => {
    this.setState({
      error: undefined,
      isUploading: true,
      filesUploadedCount: 0,
      totalFilesToUploadCount: selectorFiles.length,
      successfullyUploaded: false,
    })
    Array.from(selectorFiles).forEach(file => {
      // check for existing filename in parent folder before upload (add new version if exists).
      // note that the parent container (project/folder) is configurable.
      const newFileEntity: FileEntity = {
        parentId: this.props.parentContainerId,
        name: file.name,
        concreteType: 'org.sagebionetworks.repo.model.FileEntity',
        dataFileHandleId: '',
      }
      const entityLookupRequest: EntityLookupRequest = {
        entityName: file.name,
        parentId: this.props.parentContainerId,
      }
      lookupChildEntity(entityLookupRequest, this.context.accessToken)
        .then((entityId: EntityId) => {
          // ok, found an entity of the same name.
          getEntity<FileEntity>(this.context.accessToken, entityId.id).then(
            (existingEntity: FileEntity) => {
              if (
                existingEntity.concreteType ===
                'org.sagebionetworks.repo.model.FileEntity'
              ) {
                this.updateEntityFile(existingEntity, file)
              } else {
                this.updateEntityFile(newFileEntity, file)
              }
            },
          )
        })
        .catch((error: any) => {
          if (error.status === 404) {
            // great, it's a new file!
            this.updateEntityFile(newFileEntity, file)
          } else {
            this.handleUploadError(error)
          }
        })
    })
  }

  updateEntityFile = (fileEntity: FileEntity, file: File) => {
    uploadFile(this.context.accessToken, file.name, file)
      .then((fileUploadComplete: FileUploadComplete) => {
        const isCreate = fileEntity.dataFileHandleId === ''
        fileEntity.dataFileHandleId = fileUploadComplete.fileHandleId
        const createOrUpdate = isCreate ? createEntity : updateEntity
        createOrUpdate(fileEntity, this.context.accessToken).then(() => {
          this.finishedProcessingOneFile()
        })
      })
      .catch((error: any) => {
        this.handleUploadError(error)
      })
  }

  render() {
    return (
      <div>
        {/** This input field is used for it's functionally (browse for files), the button acts as the UI. */}
        <input
          ref={this.inputOpenFileRef}
          type="file"
          style={{ display: 'none' }}
          onChange={this.handleChange}
          multiple={true}
        />
        <button
          type="button"
          onClick={this.showOpenFileDlg}
          className="SRC-uploadButton"
        >
          Browse...
        </button>
        {this.state.isUploading && (
          <React.Fragment>
            <span style={{ marginLeft: '10px' }}>
              {this.state.filesUploadedCount} /
              {this.state.totalFilesToUploadCount} file(s)
            </span>
            <span style={{ marginLeft: '2px' }} className={'spinner'} />
          </React.Fragment>
        )}
        {this.state.successfullyUploaded && (
          <span style={{ marginLeft: '10px' }}>
            Successfully uploaded {this.state.totalFilesToUploadCount} file(s)
            to
            <a
              style={{ marginLeft: '2px' }}
              href={`${PRODUCTION_ENDPOINT_CONFIG.PORTAL}#!Synapse:${this.props.parentContainerId}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              {this.props.parentContainerId}
            </a>
          </span>
        )}
        {this.state.error && <p>Upload error!</p>}
      </div>
    )
  }
}
