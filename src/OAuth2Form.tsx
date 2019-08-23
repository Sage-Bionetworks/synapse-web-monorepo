import * as React from 'react'
import { SynapseClient } from 'synapse-react-client'
import { default as Form } from 'react-jsonschema-form'
import { JSONSchema6 } from 'json-schema'
import Login from 'synapse-react-client/dist/containers/Login'
import { TokenContext } from './AppInitializer'
import { UserProfile } from 'synapse-react-client/dist/utils/jsonResponses/UserProfile';
import { lookupChildEntity, createEntity } from 'synapse-react-client/dist/utils/SynapseClient';

type OAuth2FormState = {
    token?: string,
    error?: any,
    isLoading?: boolean
}

export type OAuth2FormProps = {
}

export default class OAuth2Form
    extends React.Component<OAuth2FormProps, OAuth2FormState> {

    constructor(props: OAuth2FormProps) {
        super(props)
        this.state = {
            isLoading: true
        }
    }

    finishedProcessing = () => {
        this.setState(
            {
                isLoading: false
            })
    }

    onError = (error: any) => {
        this.setState({
            error,
            isLoading: false
        })
    }

    onSubmit = ({ formData }: any) => {
        this.setState(
            {
                isLoading: true
            })

        this.createEntityFile(submissionFileAndForm)
    }

    componentDidMount() {
        this.getUserProfile()
    }

    componentDidUpdate() {
        this.getUserProfile()
    }

    getURLParam = (keyName: string) => {
      let currentUrl: URL | null | string = new URL(window.location.href)
      // in test environment the searchParams isn't defined
      const { searchParams } = currentUrl
      if (searchParams) {
        return searchParams.get(keyName)
      }
    }

    render() {
        return (
            <div>
                {
                    !this.state.error &&
                    this.state.token &&
                    !this.state.isLoading &&
                    <React.Fragment>
                      //todo
                    </React.Fragment>
                }
                {
                    !this.state.error &&
                    this.state.token &&
                    this.state.isLoading &&
                    <React.Fragment>
                        <span style={{ marginLeft: '2px' }} className={'spinner'} />
                    </React.Fragment>
                }
                {
                    !this.state.error &&
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
                        Error: {this.state.error.name || this.state.error.reason}
                    </p>
                }
            </div>
        )
    }
}

OAuth2Form.contextType = TokenContext