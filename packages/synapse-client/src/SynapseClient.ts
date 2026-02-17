import { AccessApprovalServicesApi } from './generated/apis/AccessApprovalServicesApi'
import { AccessRequirementServicesApi } from './generated/apis/AccessRequirementServicesApi'
import { ActivityServicesApi } from './generated/apis/ActivityServicesApi'
import { AgentChatServicesApi } from './generated/apis/AgentChatServicesApi'
import { AsynchronousJobServicesApi } from './generated/apis/AsynchronousJobServicesApi'
import { AuthenticationServices2FAApi } from './generated/apis/AuthenticationServices2FAApi'
import { AuthenticationServicesApi } from './generated/apis/AuthenticationServicesApi'
import { CertifiedUserServicesApi } from './generated/apis/CertifiedUserServicesApi'
import { ChallengeServicesApi } from './generated/apis/ChallengeServicesApi'
import { CurationTaskServicesApi } from './generated/apis/CurationTaskServicesApi'
import { DataAccessServicesApi } from './generated/apis/DataAccessServicesApi'
import { DiscussionServicesApi } from './generated/apis/DiscussionServicesApi'
import { DockerAuthorizationServicesApi } from './generated/apis/DockerAuthorizationServicesApi'
import { DockerCommitServicesApi } from './generated/apis/DockerCommitServicesApi'
import { DockerRegistryEventServicesApi } from './generated/apis/DockerRegistryEventServicesApi'
import { DOIServicesApi } from './generated/apis/DOIServicesApi'
import { DownloadListServicesApi } from './generated/apis/DownloadListServicesApi'
import { DrsServicesApi } from './generated/apis/DrsServicesApi'
import { EntityBundleServicesV2Api } from './generated/apis/EntityBundleServicesV2Api'
import { EntityServicesApi } from './generated/apis/EntityServicesApi'
import { EvaluationServicesApi } from './generated/apis/EvaluationServicesApi'
import { FileServicesApi } from './generated/apis/FileServicesApi'
import { FormServicesApi } from './generated/apis/FormServicesApi'
import { GridServicesApi } from './generated/apis/GridServicesApi'
import { JSONSchemaServicesApi } from './generated/apis/JSONSchemaServicesApi'
import { LogServiceApi } from './generated/apis/LogServiceApi'
import { MembershipInvitationServicesApi } from './generated/apis/MembershipInvitationServicesApi'
import { MembershipRequestServicesApi } from './generated/apis/MembershipRequestServicesApi'
import { MessageServicesApi } from './generated/apis/MessageServicesApi'
import { OpenIDConnectServicesApi } from './generated/apis/OpenIDConnectServicesApi'
import { PortalsServicesApi } from './generated/apis/PortalsServicesApi'
import { PrincipalServicesApi } from './generated/apis/PrincipalServicesApi'
import { ProjectSettingsServicesApi } from './generated/apis/ProjectSettingsServicesApi'
import { RecycleBinServicesApi } from './generated/apis/RecycleBinServicesApi'
import { SearchServicesApi } from './generated/apis/SearchServicesApi'
import { StatisticsServicesApi } from './generated/apis/StatisticsServicesApi'
import { StorageReportServicesApi } from './generated/apis/StorageReportServicesApi'
import { SubscriptionServicesApi } from './generated/apis/SubscriptionServicesApi'
import { TableServicesApi } from './generated/apis/TableServicesApi'
import { TeamServicesApi } from './generated/apis/TeamServicesApi'
import { UserGroupServicesApi } from './generated/apis/UserGroupServicesApi'
import { UserProfileServicesApi } from './generated/apis/UserProfileServicesApi'
import { VerificationServicesApi } from './generated/apis/VerificationServicesApi'
import { WebhookServicesApi } from './generated/apis/WebhookServicesApi'
import { WikiPageServices2Api } from './generated/apis/WikiPageServices2Api'
import { WikiPageServicesApi } from './generated/apis/WikiPageServicesApi'
import { ErrorResponse } from './generated/models/ErrorResponse'
import {
  Configuration,
  ConfigurationParameters,
  ErrorContext,
  ResponseContext,
} from './generated/runtime'
import { NETWORK_UNAVAILABLE_MESSAGE } from './util/Constants'
import { synapseFetchWithRetry } from './util/synapseClientFetch'
import { SynapseClientError } from './util/SynapseClientError'

const DEFAULT_CONFIG_PARAMETERS: ConfigurationParameters = {
  fetchApi: synapseFetchWithRetry,
  middleware: [
    {
      async post(context: ResponseContext): Promise<Response | void> {
        const { response, url } = context
        if (!response.ok) {
          const error = await response.json()
          if (
            error !== null &&
            typeof error === 'object' &&
            'reason' in error
          ) {
            throw new SynapseClientError(
              response.status,
              (error as ErrorResponse).reason!,
              url,
              error as ErrorResponse,
            )
          } else {
            throw new SynapseClientError(
              response.status,
              JSON.stringify(error),
              url,
            )
          }
        }
      },
      // Convert error objects to our SynapseClientError
      onError(context: ErrorContext): Promise<Response | void> {
        const { response, error } = context
        console.error(error)
        throw new SynapseClientError(
          0,
          NETWORK_UNAVAILABLE_MESSAGE,
          response?.url!,
        )
      },
    },
  ],
}

/**
 * Creates one class that encapsulates all sets of Synapse API services.
 */
export class SynapseClient {
  public accessApprovalServicesClient: AccessApprovalServicesApi
  public accessRequirementServicesClient: AccessRequirementServicesApi
  public activityServicesClient: ActivityServicesApi
  public agentChatServicesClient: AgentChatServicesApi
  public asynchronousJobServicesClient: AsynchronousJobServicesApi
  public authenticationServices2FAClient: AuthenticationServices2FAApi
  public authenticationServicesClient: AuthenticationServicesApi
  public certifiedUserServicesClient: CertifiedUserServicesApi
  public challengeServicesClient: ChallengeServicesApi
  public curationTaskServicesClient: CurationTaskServicesApi
  public dataAccessServicesClient: DataAccessServicesApi
  public discussionServicesClient: DiscussionServicesApi
  public dockerAuthorizationServicesClient: DockerAuthorizationServicesApi
  public dockerCommitServicesClient: DockerCommitServicesApi
  public dockerRegistryEventServicesClient: DockerRegistryEventServicesApi
  public doiServicesClient: DOIServicesApi
  public downloadListServicesClient: DownloadListServicesApi
  public drsServicesClient: DrsServicesApi
  public entityBundleServicesV2Client: EntityBundleServicesV2Api
  public entityServicesClient: EntityServicesApi
  public evaluationServicesClient: EvaluationServicesApi
  public fileServicesClient: FileServicesApi
  public formServicesClient: FormServicesApi
  public gridServicesClient: GridServicesApi
  public jsonSchemaServicesClient: JSONSchemaServicesApi
  public logServiceClient: LogServiceApi
  public membershipInvitationServicesClient: MembershipInvitationServicesApi
  public membershipRequestServicesClient: MembershipRequestServicesApi
  public messageServicesClient: MessageServicesApi
  public openIDConnectServicesClient: OpenIDConnectServicesApi
  public portalsServicesClient: PortalsServicesApi
  public principalServicesClient: PrincipalServicesApi
  public projectSettingsServicesClient: ProjectSettingsServicesApi
  public recycleBinServicesClient: RecycleBinServicesApi
  public searchServicesClient: SearchServicesApi
  public statisticsServicesClient: StatisticsServicesApi
  public storageReportServicesClient: StorageReportServicesApi
  public subscriptionServicesClient: SubscriptionServicesApi
  public tableServicesClient: TableServicesApi
  public teamServicesClient: TeamServicesApi
  public userGroupServicesClient: UserGroupServicesApi
  public userProfileServicesClient: UserProfileServicesApi
  public verificationServicesClient: VerificationServicesApi
  public webhookServicesClient: WebhookServicesApi
  public wikiPageServices2Client: WikiPageServices2Api
  public wikiPageServicesClient: WikiPageServicesApi

  constructor(configurationParameters?: ConfigurationParameters) {
    // Merge the default configuration with the provided configuration
    const configuration = new Configuration({
      ...DEFAULT_CONFIG_PARAMETERS,
      ...configurationParameters,
    })

    this.accessApprovalServicesClient = new AccessApprovalServicesApi(
      configuration,
    )
    this.accessRequirementServicesClient = new AccessRequirementServicesApi(
      configuration,
    )
    this.activityServicesClient = new ActivityServicesApi(configuration)
    this.agentChatServicesClient = new AgentChatServicesApi(configuration)
    this.asynchronousJobServicesClient = new AsynchronousJobServicesApi(
      configuration,
    )
    this.authenticationServices2FAClient = new AuthenticationServices2FAApi(
      configuration,
    )
    this.authenticationServicesClient = new AuthenticationServicesApi(
      configuration,
    )
    this.certifiedUserServicesClient = new CertifiedUserServicesApi(
      configuration,
    )
    this.challengeServicesClient = new ChallengeServicesApi(configuration)
    this.curationTaskServicesClient = new CurationTaskServicesApi(configuration)
    this.dataAccessServicesClient = new DataAccessServicesApi(configuration)
    this.discussionServicesClient = new DiscussionServicesApi(configuration)
    this.dockerAuthorizationServicesClient = new DockerAuthorizationServicesApi(
      configuration,
    )
    this.dockerCommitServicesClient = new DockerCommitServicesApi(configuration)
    this.dockerRegistryEventServicesClient = new DockerRegistryEventServicesApi(
      configuration,
    )
    this.doiServicesClient = new DOIServicesApi(configuration)
    this.downloadListServicesClient = new DownloadListServicesApi(configuration)
    this.drsServicesClient = new DrsServicesApi(configuration)
    this.entityBundleServicesV2Client = new EntityBundleServicesV2Api(
      configuration,
    )
    this.entityServicesClient = new EntityServicesApi(configuration)
    this.evaluationServicesClient = new EvaluationServicesApi(configuration)
    this.fileServicesClient = new FileServicesApi(configuration)
    this.formServicesClient = new FormServicesApi(configuration)
    this.gridServicesClient = new GridServicesApi(configuration)
    this.jsonSchemaServicesClient = new JSONSchemaServicesApi(configuration)
    this.logServiceClient = new LogServiceApi(configuration)
    this.membershipInvitationServicesClient =
      new MembershipInvitationServicesApi(configuration)
    this.membershipRequestServicesClient = new MembershipRequestServicesApi(
      configuration,
    )
    this.messageServicesClient = new MessageServicesApi(configuration)
    this.openIDConnectServicesClient = new OpenIDConnectServicesApi(
      configuration,
    )
    this.portalsServicesClient = new PortalsServicesApi(configuration)
    this.principalServicesClient = new PrincipalServicesApi(configuration)
    this.projectSettingsServicesClient = new ProjectSettingsServicesApi(
      configuration,
    )
    this.recycleBinServicesClient = new RecycleBinServicesApi(configuration)
    this.searchServicesClient = new SearchServicesApi(configuration)
    this.statisticsServicesClient = new StatisticsServicesApi(configuration)
    this.storageReportServicesClient = new StorageReportServicesApi(
      configuration,
    )
    this.subscriptionServicesClient = new SubscriptionServicesApi(configuration)
    this.tableServicesClient = new TableServicesApi(configuration)
    this.teamServicesClient = new TeamServicesApi(configuration)
    this.userGroupServicesClient = new UserGroupServicesApi(configuration)
    this.userProfileServicesClient = new UserProfileServicesApi(configuration)
    this.verificationServicesClient = new VerificationServicesApi(configuration)
    this.webhookServicesClient = new WebhookServicesApi(configuration)
    this.wikiPageServices2Client = new WikiPageServices2Api(configuration)
    this.wikiPageServicesClient = new WikiPageServicesApi(configuration)
  }
}
