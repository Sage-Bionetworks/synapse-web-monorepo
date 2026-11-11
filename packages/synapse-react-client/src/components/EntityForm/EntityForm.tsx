// EntityForm:
import SynapseClient from '@/synapse-client'
import { SynapseContext } from '@/utils/context/SynapseContext'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
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
import { Alert, Stack, Typography } from '@mui/material'
import { Component, ContextType, createRef } from 'react'
import { SynapseSpinner } from '../LoadingScreen/LoadingScreen'

export type EntityFormProps = {
  // Provide the parent container (folder/project), that should contain a folder (named <user_id>) that this user can write to.
  parentContainerId: string
  formSchemaEntityId: string // Synapse file that contains the form schema.
  formUiSchemaEntityId: string // Synapse file that contains the form ui schema.
  initFormData: boolean // If true, it indicates that you’d like to download and pre-fill the form with the user's previous response.
  synIdCallback: (synId: string) => void // callback.  Once the form output has been saved to a FileEntity, will send synID back
}
type EntityFormState = {
  error?: Error
  isLoading: boolean // loading the schemas and the user's target folder
  isSaving: boolean // uploading the user's form data
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
  hasStartedLoading = false

  constructor(props: EntityFormProps) {
    super(props)
    this.formRef = createRef()
    this.state = {
      isLoading: true,
      isSaving: false,
      successfullyUploaded: false,
    }
  }

  componentDidMount() {
    this.refresh()
  }

  componentDidUpdate() {
    // The session may not be available on the first render
    if (!this.hasStartedLoading) {
      this.refresh()
    }
  }

  submitForm = () => {
    // No-op until the form has loaded (or while it is saving)
    this.formRef.current?.submit()
  }

  refresh = () => {
    const { isAuthenticated, accessToken } = this.context
    if (!isAuthenticated || !accessToken) {
      return
    }
    this.hasStartedLoading = true
    this.loadForm(accessToken).catch(error => {
      this.onError(error)
    })
  }

  loadForm = async (accessToken: string) => {
    const [userprofile, formSchemaFileEntity, formUiSchemaFileEntity] =
      await Promise.all([
        SynapseClient.getUserProfile(accessToken),
        SynapseClient.getEntity<FileEntity>(
          accessToken,
          this.props.formSchemaEntityId,
        ),
        SynapseClient.getEntity<FileEntity>(
          accessToken,
          this.props.formUiSchemaEntityId,
        ),
      ])
    const targetContainerId = await this.getTargetContainer(
      userprofile,
      accessToken,
    )
    const [formSchemaContent, formUiSchemaContent] = await Promise.all([
      this.getJsonFileContent(formSchemaFileEntity, accessToken),
      this.getJsonFileContent(formUiSchemaFileEntity, accessToken),
    ])
    if (!formSchemaContent?.title) {
      throw new Error(
        `The form JSON schema (${this.props.formSchemaEntityId}) must define a "title". It is used to name the file that stores the form data.`,
      )
    }
    const { currentFileEntity, formData } = await this.getExistingFileData(
      targetContainerId,
      formSchemaContent,
      accessToken,
    )
    this.setState({
      isLoading: false,
      formData,
      currentFileEntity,
      formSchema: formSchemaContent,
      formUiSchema: formUiSchemaContent,
    })
  }

  getJsonFileContent = async (fileEntity: FileEntity, accessToken: string) => {
    const fileResult = await SynapseClient.getFileResult(
      fileEntity,
      accessToken,
      true,
      true,
    )
    const content = await SynapseClient.getFileHandleContent(
      fileResult.fileHandle!,
      fileResult.preSignedURL!,
    )
    try {
      return JSON.parse(content)
    } catch (e) {
      throw new Error(`${fileEntity.id} does not contain valid JSON: ${e}`)
    }
  }

  getExistingFileData = async (
    targetFolderId: string,
    formSchemaContent: { title: string },
    accessToken: string,
  ): Promise<{ currentFileEntity?: FileEntity; formData?: unknown }> => {
    // if data already exists, save a reference to the existing entity and prefill the form
    const entityLookupRequest: EntityLookupRequest = {
      entityName: `${formSchemaContent.title}.json`,
      parentId: targetFolderId,
    }
    let entityId: EntityId
    try {
      entityId = await SynapseClient.lookupChildEntity(
        entityLookupRequest,
        accessToken,
      )
    } catch (error) {
      if (error instanceof SynapseClientError && error.status === 404) {
        // first submission, no existing data
        return {}
      }
      throw error
    }
    const currentFileEntity = await SynapseClient.getEntity<FileEntity>(
      accessToken,
      entityId.id,
    )
    let formData: unknown
    if (this.props.initFormData) {
      try {
        formData = await this.getJsonFileContent(currentFileEntity, accessToken)
      } catch (e) {
        console.log('getExistingFileData: Error setting form data', e)
      }
    }
    return { currentFileEntity, formData }
  }

  getTargetContainer = async (
    userprofile: UserProfile,
    token: string,
  ): Promise<string> => {
    const entityLookupRequest: EntityLookupRequest = {
      entityName: userprofile.ownerId,
      parentId: this.props.parentContainerId,
    }
    try {
      const entityId = await SynapseClient.lookupChildEntity(
        entityLookupRequest,
        token,
      )
      this.setState({
        userprofile,
        containerId: entityId.id,
      })
      return entityId.id
    } catch (error) {
      if (error instanceof SynapseClientError && error.status === 404) {
        throw new Error(
          `Your submission folder has not been set up yet. The challenge organizers must create a folder named "${userprofile.ownerId}" in ${this.props.parentContainerId} that you can edit.`,
        )
      }
      throw error
    }
  }

  finishedProcessing = () => {
    this.setState({
      isSaving: false,
      successfullyUploaded: true,
    })
  }

  onError = (error: unknown) => {
    this.setState({
      error: error instanceof Error ? error : new Error(String(error)),
      isLoading: false,
      isSaving: false,
      successfullyUploaded: false,
    })
  }

  onSubmit = ({ formData }: any) => {
    this.setState({
      isSaving: true,
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
      .catch((error: unknown) => {
        this.onError(error)
      })
  }

  render() {
    return (
      <div>
        {this.state.error && (
          <Alert severity="error">{this.state.error.message}</Alert>
        )}
        {!this.context.isAuthenticated && (
          <Alert severity="info">
            You must be signed in to fill out this form.
          </Alert>
        )}
        {this.context.isAuthenticated &&
          !this.state.isLoading &&
          !this.state.isSaving &&
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
          this.context.isAuthenticated &&
          (this.state.isLoading || this.state.isSaving) && (
            <Stack direction="row" alignItems="center" gap={1} sx={{ my: 2 }}>
              <SynapseSpinner margin="0" />
              <Typography variant="body1">
                {this.state.isSaving ? 'Saving' : 'Loading form'}&hellip;
              </Typography>
            </Stack>
          )}
      </div>
    )
  }
}

export default EntityForm
