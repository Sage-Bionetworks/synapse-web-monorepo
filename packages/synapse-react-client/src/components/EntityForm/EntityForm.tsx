// EntityForm:
import SynapseClient from '@/synapse-client'
import { getFileHandleContent } from '@/synapse-client/SynapseClient'
import { SynapseContext } from '@/utils/context/SynapseContext'
// Will generate a Form (based on your schema files).
// Gathers user input (including files)
// Will give you the Synapse ID of the FileEntity that contains the user form data.
import Form from '@rjsf/core'
import validator from '@rjsf/validator-ajv8'
import {
  EntityId,
  EntityLookupRequest,
  FileEntity,
  UserProfile,
} from '@sage-bionetworks/synapse-types'
import { Component, ContextType, createRef } from 'react'

export type EntityFormProps = {
  // Provide the parent container (folder/project), that should contain a folder (named <user_id>) that this user can write to.
  parentContainerId: string
  formSchemaEntityId: string // Synapse file that contains the form schema.
  formUiSchemaEntityId: string // Synapse file that contains the form ui schema.
  initFormData: boolean // If true, it indicates that you’d like to download and pre-fill the form with the user's previous response.
  synIdCallback: (synId: string) => void // callback.  Once the form output has been saved to a FileEntity, will send synID back
}
type EntityFormState = {
  error?: any
  isLoading?: boolean
  successfullyUploaded: boolean
  containerId?: string
  userprofile?: UserProfile
  currentFileEntity?: FileEntity // file holding user form data
  formData?: any // form data that prepopulates the form
  formSchema?: any // schema that drives the form
  formUiSchema?: any // ui schema that directs how to render the form elements
}

export class EntityForm extends Component<EntityFormProps, EntityFormState> {
  static contextType = SynapseContext
  declare context: NonNullable<ContextType<typeof SynapseContext>>

  formRef: any

  constructor(props: EntityFormProps) {
    super(props)
    this.formRef = createRef()
    this.state = {
      isLoading: true,
      successfullyUploaded: false,
    }
  }

  componentDidMount() {
    this.refresh()
  }

  submitForm = () => {
    this.formRef.current.submit()
  }

  refresh = () => {
    if (this.context.isAuthenticated && this.context.accessToken) {
      const promises = [
        SynapseClient.getUserProfile(this.context.accessToken),
        SynapseClient.getEntity(
          this.context.accessToken,
          this.props.formSchemaEntityId,
        ),
        SynapseClient.getEntity(
          this.context.accessToken,
          this.props.formUiSchemaEntityId,
        ),
      ] as Promise<any>[]
      Promise.all(promises)
        .then(values => {
          const userprofile: UserProfile = values[0]
          this.getTargetContainer(userprofile, this.context.accessToken!).then(
            // @ts-ignore
            (targetContainerId: string) => {
              const formSchemaFileEntity: FileEntity = values[1]
              const formUiSchemaFileEntity: FileEntity = values[2]
              this.getSchemaFileContent(
                targetContainerId,
                formSchemaFileEntity,
                formUiSchemaFileEntity,
              )
            },
          )
        })
        .catch(error => {
          this.onError(error)
        })
    }
  }

  getSchemaFileContent = (
    targetFolderId: string,
    formSchemaFileEntity: FileEntity,
    formUiSchemaFileEntity: FileEntity,
  ) => {
    const promises = [
      SynapseClient.getFileResult(
        formSchemaFileEntity,
        this.context.accessToken,
        true,
        true,
      ),
      SynapseClient.getFileResult(
        formUiSchemaFileEntity,
        this.context.accessToken,
        true,
        true,
      ),
    ]

    Promise.all(promises)
      .then(values => {
        try {
          const fileContent = values.map(el => {
            return getFileHandleContent(el.fileHandle!, el.preSignedURL!)
          })
          Promise.all(fileContent)
            .then(el => {
              const formSchemaContent = JSON.parse(el[0])
              const formUiSchemaContent = JSON.parse(el[1])
              this.getExistingFileData(
                targetFolderId,
                formSchemaContent,
                formUiSchemaContent,
              )
            })
            .catch(e => {
              console.log('getSchemaFileContent: Error getting form content', e)
            })
        } catch (e) {
          console.log('getSchemaFileContent: Error getting schema content', e)
        }
      })
      .catch(error => {
        this.onError(error)
      })
  }

  getExistingFileData = (
    targetFolderId: string,
    formSchemaContent: any,
    formUiSchemaContent: any,
  ) => {
    // if data already exists, save a reference to the existing entity and prefill the form
    const fileName = `${formSchemaContent.title}.json`
    const entityLookupRequest = {
      entityName: fileName,
      parentId: targetFolderId,
    }
    let formData: any
    let currentFileEntity: FileEntity
    SynapseClient.lookupChildEntity(
      entityLookupRequest,
      this.context.accessToken,
    )
      .then((entityId: EntityId) => {
        // ok, found the existing file
        return SynapseClient.getEntity<FileEntity>(
          this.context.accessToken,
          entityId.id,
        ).then(entity => {
          currentFileEntity = entity
          if (this.props.initFormData) {
            return SynapseClient.getFileResult(
              currentFileEntity,
              this.context.accessToken,
              true,
              true,
            ).then(async existingFileData => {
              try {
                const fileContent = await getFileHandleContent(
                  existingFileData.fileHandle!,
                  existingFileData.preSignedURL!,
                )
                formData = JSON.parse(fileContent)
              } catch (e) {
                console.log('getExistingFileData: Error setting form data', e)
              }
            })
          }
          // else we're done
          return Promise.resolve()
        })
      })
      .finally(() => {
        this.setState({
          formData,
          currentFileEntity,
          formSchema: formSchemaContent,
          formUiSchema: formUiSchemaContent,
        })
      })
  }

  getTargetContainer = async (userprofile: UserProfile, token: string) => {
    const entityLookupRequest: EntityLookupRequest = {
      entityName: userprofile.ownerId,
      parentId: this.props.parentContainerId,
    }
    try {
      const entityId = await SynapseClient.lookupChildEntity(
        entityLookupRequest,
        token,
      )
      // ok, found an entity of the same name.
      console.log(
        `EntityForm uploading to https://www.synapse.org/Synapse:${entityId.id}`,
      )
      this.setState({
        userprofile,
        containerId: entityId.id,
        isLoading: false,
      })
      return entityId.id
    } catch (error) {
      if (error.status === 404) {
        return this.onError(
          new Error(
            'Your folder has not yet been set up, please retry in a few minutes.',
          ),
        )
      }
      // else
      return this.onError(error)
    }
  }

  finishedProcessing = () => {
    this.setState({
      isLoading: false,
      successfullyUploaded: true,
    })
  }

  onError = (error: any) => {
    this.setState({
      error,
      isLoading: false,
      successfullyUploaded: false,
    })
  }

  onSubmit = ({ formData }: any) => {
    this.setState({
      isLoading: true,
      successfullyUploaded: false,
    })

    const submissionFileAndForm: Blob = new Blob([JSON.stringify(formData)], {
      type: 'text/json',
    })
    this.createEntityFile(submissionFileAndForm)
  }

  createEntityFile = (fileContentsBlob: Blob) => {
    const fileName = `${this.state.formSchema.title}.json`
    SynapseClient.uploadFile(
      this.context.accessToken,
      fileName,
      fileContentsBlob,
    )
      .then(fileUploadComplete => {
        // do we need to create a new file entity, or update an existing file entity?
        const newFileHandleId = fileUploadComplete.fileHandleId
        if (this.state.currentFileEntity) {
          const updatedFileEntity = {
            ...this.state.currentFileEntity,
            dataFileHandleId: newFileHandleId,
          }
          this.setState({
            currentFileEntity: updatedFileEntity,
          })
          return SynapseClient.updateEntity(
            updatedFileEntity,
            this.context.accessToken,
          )
        }
        // else, it's a new file entity
        const newFileEntity: FileEntity = {
          parentId: this.state.containerId!,
          name: fileName,
          concreteType: 'org.sagebionetworks.repo.model.FileEntity',
          dataFileHandleId: newFileHandleId,
        }
        return SynapseClient.createEntity(
          newFileEntity,
          this.context.accessToken,
        )
      })
      .then(fileEntity => {
        // by this point we've either found and updated the existing file entity, or created a new one.
        this.finishedProcessing()
        if (this.props.synIdCallback) {
          this.props.synIdCallback(fileEntity.id!)
        }
      })
      .catch((error: any) => {
        this.onError(error)
      })
  }

  render() {
    return (
      <div>
        {this.state.error && (
          <div className="panel panel-danger errors">
            <div className="panel-heading">
              <h3 className="panel-title">Error</h3>
            </div>
            <ul className="list-group">
              <li className="list-group-item text-danger">
                {this.state.error.name} {this.state.error.reason}
                {this.state.error.message}
              </li>
            </ul>
          </div>
        )}
        {this.context.accessToken &&
          !this.state.isLoading &&
          !this.state.successfullyUploaded &&
          this.state.formSchema &&
          this.state.formUiSchema &&
          !this.state.error && (
            <Form
              validator={validator}
              formData={this.state.formData}
              schema={this.state.formSchema}
              uiSchema={this.state.formUiSchema}
              onSubmit={this.onSubmit}
              ref={this.formRef}
            >
              <div style={{ display: 'none' }}>
                <button type="submit" className="btn btn-info">
                  Submit
                </button>
              </div>
            </Form>
          )}
        {!this.state.error &&
          this.context.accessToken &&
          this.state.isLoading && (
            <>
              <span>Saving&hellip;</span>
              <span style={{ marginLeft: '2px' }} className={'spinner'} />
            </>
          )}
      </div>
    )
  }
}

export default EntityForm
