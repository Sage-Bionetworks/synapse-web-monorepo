import * as React from 'react'
import { SynapseClient } from 'synapse-react-client'
import { default as Form } from 'react-jsonschema-form'
import { JSONSchema6 } from 'json-schema'
import Login from 'synapse-react-client/dist/containers/Login'
import { TokenContext } from './AppInitializer'
import { UserProfile } from 'synapse-react-client/dist/utils/jsonResponses/UserProfile';
import { lookupChildEntity, createEntity } from 'synapse-react-client/dist/utils/SynapseClient';
// 2. Create Special Project for user submissions to this challenge (iff it does not exist)
// 3. Refactor schema definitions into different config file.
// 4. Create actual submission (configure with evaluation queue ID)
const schema: JSONSchema6 = {
    title: 'IDG DREAM Round 2 Survey',
    type: 'object',
    required: ['file'],
    properties: {
        file: {
            type: 'string',
            format: 'data-url',
            title: 'Submission File'
        },
        custom: {
            type: 'string', title: 'If you used any \'named\' algorithms or methods, please list them here',
            default: ''
        },
        multipleChoicesList: {
            type: 'array',
            title: 'What public training data did you use?',
            items: {
                type: 'string',
                enum: [
                    'DrugTargetCommons',
                    'IDG Pharos',
                    'ChEMBL',
                    'Drug-Target Explorer'
                ]
            },
            uniqueItems: true
        },
        toggle: {
            title: 'Did you use any private data?',
            type: 'boolean',
            oneOf: [
                {
                    title: 'Yes',
                    const: true
                },
                {
                    title: 'No',
                    const: false
                }
            ]
        }
    }
}
const uiSchema = {
    multipleChoicesList: {
        'ui:widget': 'checkboxes'
    },
    toggle: {
        'ui:widget': 'radio'
    }
}
type DemoChallengeSubmissionFormState = {
    token?: string,
    error?: Error,
    isUploading?: boolean,
    successfullyUploaded: boolean,
    userprofile?: UserProfile,
    submissionContainerId?: string
}

export type DemoChallengeSubmissionFormProps = {
    parentContainerId: string
    evaluationQueueId: string
}

export default class DemoChallengeSubmissionForm
    extends React.Component<DemoChallengeSubmissionFormProps, DemoChallengeSubmissionFormState> {
    private readonly inputOpenFileRef: React.RefObject<HTMLInputElement>

    constructor(props: DemoChallengeSubmissionFormProps) {
        super(props)
        this.state = {
            isUploading: false,
            successfullyUploaded: false,
        }
        this.inputOpenFileRef = React.createRef()
    }

    showOpenFileDlg = () => {
        if (this.inputOpenFileRef && this.inputOpenFileRef.current) {
            this.inputOpenFileRef.current.click()
        }
    }

    finishedProcessing = () => {
        this.setState(
            {
                isUploading: false,
                successfullyUploaded: true
            })
    }

    onError = (error: any) => {
        this.finishedProcessing()
        this.setState({ error })
    }

    onSubmit = ({ formData }: any) => {
        this.setState(
            {
                isUploading: true,
                successfullyUploaded: false
            })

        const submissionFileAndForm: Blob = new Blob([JSON.stringify(formData)], {
            type: 'text/json'
        })
        this.createEntityFile(submissionFileAndForm)
    }

    createEntityFile = (fileContentsBlob: Blob) => {
        const newFileEntity: any = {
            parentId: this.state.submissionContainerId,
            name: `${Math.floor(Date.now() / 1000).toString()}.json`,
            concreteType: 'org.sagebionetworks.repo.model.FileEntity',
            dataFileHandleId: '',
        }
        SynapseClient.uploadFile(this.state.token, newFileEntity.name, fileContentsBlob).then(
            (fileUploadComplete: any) => {
                newFileEntity.dataFileHandleId = fileUploadComplete.fileHandleId
                SynapseClient.createEntity(newFileEntity, this.state.token).then(() => {
                    this.finishedProcessing()
                })
            }).catch((error: any) => {
                this.onError(error)
            })
    }

    componentDidMount() {
        this.getUserProfile()
    }

    componentDidUpdate() {
        this.getUserProfile()
    }

    getUserProfile = () => {
        const newToken = this.context
        if (newToken && (!this.state.userprofile || this.state.token !== newToken)) {
            SynapseClient.getUserProfile(newToken, 'https://repo-prod.prod.sagebase.org').then((profile: any) => {
                if (profile.profilePicureFileHandleId) {
                    profile.clientPreSignedURL = `https://www.synapse.org/Portal/filehandleassociation?associatedObjectId=${profile.ownerId}&associatedObjectType=UserProfileAttachment&fileHandleId=${profile.profilePicureFileHandleId}`
                }
                this.getTargetFolder(profile, newToken)
            }).catch((_err) => {
                console.log('user profile could not be fetched ', _err)
            })
        }
    }

    getTargetFolder = (userprofile: UserProfile, token: string) => {
        const folderName = `${userprofile.userName} - ${schema.title} (submissions)`
        const entityLookupRequest = { entityName: folderName, parentId: this.props.parentContainerId }
        lookupChildEntity(entityLookupRequest, token).then((entityId) => {
            // ok, found an entity of the same name.
            this.setState({
                token,
                userprofile,
                submissionContainerId: entityId.id
            })
        }).catch((error: any) => {
            if (error.statusCode === 404) {
                // great, it's a new project!
                const newEntity = {
                    name: folderName,
                    parentId: this.props.parentContainerId,
                    concreteType: 'org.sagebionetworks.repo.model.Folder'
                }
                return createEntity(newEntity, token).then((entity) => {
                    this.setState({
                        token,
                        userprofile,
                        submissionContainerId: entity.id
                    })
                }).catch((error: any) => {
                    this.onError(error)
                })
            } else {
                this.onError(error)
            }
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.token &&
                    !this.state.isUploading &&
                    !this.state.successfullyUploaded &&
                    <Form
                        schema={schema}
                        uiSchema={uiSchema}
                        onSubmit={this.onSubmit}
                        showErrorList={true}
                    />
                }
                {
                    this.state.token &&
                    this.state.isUploading &&
                    <React.Fragment>
                        <span style={{ marginLeft: '2px' }} className={'spinner'} />
                    </React.Fragment>
                }
                {
                    this.state.token &&
                    this.state.successfullyUploaded &&
                    <span style={{ marginLeft: '10px' }}>
                        Successfully created your submission!
                        <a style={{ marginLeft: '2px' }} href={`https://www.synapse.org/#!Synapse:${this.state.submissionContainerId}`} target="_blank">{this.state.submissionContainerId}</a>
                    </span>
                }
                {
                    !this.state.token &&
                    <Login
                        token={this.state.token}
                        theme={'light'}
                        icon={true}
                    />
                }
                {
                    this.state.error &&
                    <p>
                        There's an error with the submission: {this.state.error.name}
                    </p>
                }
            </div>
        )
    }
}

DemoChallengeSubmissionForm.contextType = TokenContext