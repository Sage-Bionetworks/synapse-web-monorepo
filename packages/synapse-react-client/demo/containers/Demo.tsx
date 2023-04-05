import * as React from 'react'
import { SynapseVersion } from '../../src/lib/utils/synapseTypes/'
import { SynapseClient } from '../../src/lib/utils/'
import Uploader from './Uploader'
import FileContentDownloadUploadDemo from './FileContentDownloadUploadDemo'
import StatisticsPlot from '../../src/lib/containers/StatisticsPlot'
import { testDownloadSpeed } from '../../src/lib/utils/functions/testDownloadSpeed'
import { HasAccessV2 as HasAccess } from '../../src/lib/containers/access_requirements/HasAccessV2'
import { SynapseContextProvider } from '../../src/lib/utils/SynapseContext'
import FullContextProvider from '../../src/lib/utils/FullContextProvider'
// import { useDetectSSOCode } from '../../src/lib/utils/hooks/useDetectSSOCode'

type DemoState = {
  token: string | null
  ownerId: string
  isLoading: boolean
  showMarkdown: boolean
  version: number
  userFormDataSynId?: string
  estimatedDownloadBytesPerSecond?: number
}

type DemoProps = {
  forceSamePage?: boolean
}
/**
 * Demo of features that can be used from src/demo/utils/SynapseClient
 * module

 */
class Demo extends React.Component<DemoProps, DemoState> {
  entityFormRef: any
  searchParamsProps: any
  /**
   * Maintain internal state of user session
   */
  constructor(props: DemoProps) {
    super(props)
    this.entityFormRef = React.createRef()
    this.state = {
      isLoading: true,
      ownerId: '',
      showMarkdown: true,
      token: '',
      version: 0,
    }
    this.getVersion = this.getVersion.bind(this)
    this.onRunDownloadSpeedTest = this.onRunDownloadSpeedTest.bind(this)
    this.searchParamsProps = {}
    const searchParams = new URLSearchParams(window.location.search)
    searchParams.forEach((value, key) => {
      this.searchParamsProps[key] = value
    })
  }

  public onSubmitEntityForm() {
    this.entityFormRef.current.submitForm()
  }

  public onEntityFormSubmitted(synId: string) {
    this.setState({ userFormDataSynId: synId })
  }

  public onRunDownloadSpeedTest() {
    const { token } = this.state
    if (token) {
      testDownloadSpeed(token)
        .then((estimatedDownloadBytesPerSecond: number) => {
          this.setState({ estimatedDownloadBytesPerSecond })
        })
        .catch((error: any) => {
          console.error('estimate download speed failed', error)
        })
    }
  }

  /**
   * Get the current version of Synapse
   */
  public getVersion(): void {
    // IMPORTANT: Your component should have a property (with default) to change the endpoint.  This is necessary for Synapse.org integration.
    // Pass your endpoint through to the rpc call:
    // SynapseClient.getVersion('https://repo-staging.prod.sagebase.org')
    SynapseClient.getVersion()
      .then((data: SynapseVersion) => this.setState({ version: data.version }))
      .catch((error: any) => {
        // Handle HTTPError.  Has status and message.
        console.error('Get version failed', error)
      })
  }

  public componentDidMount() {
    // Note:  All portals should do this once on the initial app load.
    // This looks for the access token cookie (HttpOnly, unable to directly access), and initialize the session if it does exists.
    // TODO: Convert to function component to use this hook. Until then, SSO will not work.
    // useDetectSSOCode()
    SynapseClient.getAccessTokenFromCookie()
      .then(accessToken => {
        this.setState({
          token: accessToken,
        })
      })
      .catch((error: any) => {
        console.error(error)
      })
    this.getVersion()
  }
  public render(): JSX.Element {
    const { token, estimatedDownloadBytesPerSecond } = this.state
    return (
      <FullContextProvider
        synapseContext={{
          accessToken: this.state.token ?? undefined,
          isInExperimentalMode: SynapseClient.isInSynapseExperimentalMode(),
          utcTime: SynapseClient.getUseUtcTimeFromCookie(),
          downloadCartPageUrl: '',
        }}
      >
        <div>
          <p className="App-intro text-center">
            Synapse production version: {this.state.version}
          </p>
          {token && (
            <div className="container">
              <button
                className="btn btn-default"
                onClick={this.onRunDownloadSpeedTest}
              >
                Run Download Speed Test
              </button>
              <hr />
            </div>
          )}
          {estimatedDownloadBytesPerSecond && (
            <div className="container">
              <h5>
                Estimated Download Speed:{' '}
                {(estimatedDownloadBytesPerSecond / 1000000).toFixed(2)} MBps
              </h5>
              <hr />
            </div>
          )}
          {token && (
            <div className="container">
              <h5>Upload File(s) Demo</h5>
              <Uploader parentContainerId="syn18987891" />
              <hr />
            </div>
          )}
          {token && (
            <div className="container">
              <h5>Download File Content Demo (syn12196718)</h5>
              <FileContentDownloadUploadDemo targetEntityId="syn12196718" />
              <hr />
            </div>
          )}
          {
            <div className="container">
              <h5>Public Folder - HasAccess widget</h5>
              <HasAccess entityId={'syn7122428'} />
              <h5>A Controlled Access Folder - HasAccess widget</h5>
              <HasAccess entityId={'syn7383419'} />
              <h5>Open Data</h5>
              <HasAccess entityId={'syn5481758'} />
              <h5>Acces Requirements required Data</h5>
              <HasAccess entityId={'syn2426398'} />
              <h5>
                Acces Requirements required Data without unsupported requirement
              </h5>
              <HasAccess entityId={'syn4993293'} />

              <hr />
            </div>
          }
          {token && (
            <div className="container">
              <h5>Project Statistics Demo</h5>
              <StatisticsPlot
                request={{
                  concreteType:
                    'org.sagebionetworks.repo.model.statistics.ProjectFilesStatisticsRequest',
                  objectId: 'syn2580853',
                  fileDownloads: true,
                  fileUploads: true,
                }}
              />
              <StatisticsPlot
                request={{
                  concreteType:
                    'org.sagebionetworks.repo.model.statistics.ProjectFilesStatisticsRequest',
                  objectId: 'syn5585645',
                  fileDownloads: true,
                  fileUploads: true,
                }}
              />
              <hr />
            </div>
          )}
        </div>
      </FullContextProvider>
    )
  }
}
export default Demo
