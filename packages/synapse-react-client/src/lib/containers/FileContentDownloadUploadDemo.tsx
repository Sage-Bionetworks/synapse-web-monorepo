import * as React from 'react'
import { getEntity, updateEntity, uploadFile } from '../utils/SynapseClient'
import { SynapseContext } from '../utils/SynapseContext'
import { Entity, FileEntity, FileUploadComplete } from '../utils/synapseTypes/'

type FileContentDownloadUploadDemoState = {
  error?: any
  isLoading?: boolean
  fileContent?: string
  targetEntity?: FileEntity
}

export type FileContentDownloadUploadDemoProps = {
  targetEntityId: string
}

export default class FileContentDownloadUploadDemo extends React.Component<
  FileContentDownloadUploadDemoProps,
  FileContentDownloadUploadDemoState
> {
  constructor(props: FileContentDownloadUploadDemoProps) {
    super(props)
    this.state = {
      isLoading: false,
    }
  }

  static contextType = SynapseContext

  public componentDidMount() {
    const { targetEntityId } = this.props
    // must be logged in to download content
    if (this.context.accessToken) {
      this.setState({ isLoading: true })
      getEntity(this.context.accessToken, targetEntityId)
        .then((entity: Entity) => {
          // if file entity
          if (
            entity.concreteType === 'org.sagebionetworks.repo.model.FileEntity'
          ) {
            const fileEntity: FileEntity = entity as FileEntity
            this.setState({
              targetEntity: fileEntity,
              isLoading: false,
            })
          } else {
            this.setState({ error: 'invalid type', isLoading: false })
          }
        })
        .catch(err => {
          this.setState({ error: err, isLoading: false })
        })
    }
  }

  updateFileContent = (event: React.MouseEvent<HTMLButtonElement>) => {
    // create a new FileHandle, and update the FileEntity
    if (
      this.context.accessToken &&
      this.state.targetEntity &&
      this.state.fileContent
    ) {
      this.setState({ isLoading: true })
      const newFileContent = new Blob([this.state.fileContent], {
        type: 'text/plain',
      })
      uploadFile(
        this.context.accessToken,
        this.state.targetEntity.name,
        newFileContent,
      )
        .then((fileUploadComplete: FileUploadComplete) => {
          // now update the entity!
          if (this.state.targetEntity) {
            this.state.targetEntity.dataFileHandleId =
              fileUploadComplete.fileHandleId
            updateEntity(this.state.targetEntity, this.context.accessToken)
              .then((entity: Entity) => {
                const fileEntity = entity as FileEntity
                // updated the target entity, force it to get the updated entity
                this.setState({ targetEntity: fileEntity, isLoading: false })
              })
              .catch((err: string) => {
                this.setState({ error: err, isLoading: false })
              })
          }
        })
        .catch((err: string) => {
          this.setState({ error: err, isLoading: false })
        })
    }
  }
  handleContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({ fileContent: event.target.value })
  }

  render() {
    return (
      <div>
        {
          <React.Fragment>
            <div>
              <textarea
                style={{ width: '100%', height: '300px' }}
                value={this.state.fileContent}
                onChange={this.handleContentChange}
              />
            </div>
            <button onClick={this.updateFileContent}>
              Update File Content...
            </button>
          </React.Fragment>
        }
        {this.state.isLoading && (
          <span style={{ marginLeft: '2px' }} className={'spinner'} />
        )}

        {this.state.error && <p>Download error!</p>}
      </div>
    )
  }
}
