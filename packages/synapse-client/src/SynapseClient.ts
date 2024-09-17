import {
  AccessApprovalServicesApi,
  AccessRequirementServicesApi,
  ActivityServicesApi,
  AgentChatServicesApi,
  AsynchronousJobServicesApi,
  AuthenticationServices2FAApi,
  AuthenticationServicesApi,
  BaseAPI,
  CertifiedUserServicesApi,
  ChallengeServicesApi,
  Configuration,
  DataAccessServicesApi,
  DiscussionServicesApi,
  DockerAuthorizationServicesApi,
  DockerCommitServicesApi,
  DockerRegistryEventServicesApi,
  DOIServicesApi,
  DownloadListServicesApi,
  DrsServicesApi,
  EntityBundleServicesV2Api,
  EntityServicesApi,
  EvaluationServicesApi,
  FileServicesApi,
  FormServicesApi,
  JSONSchemaServicesApi,
  LogServiceApi,
  MembershipInvitationServicesApi,
  MembershipRequestServicesApi,
  MessageServicesApi,
  OpenIDConnectServicesApi,
  PrincipalServicesApi,
  ProjectSettingsServicesApi,
  RecycleBinServicesApi,
  SearchServicesApi,
  StatisticsServicesApi,
  StorageReportServicesApi,
  SubscriptionServicesApi,
  TableServicesApi,
  TeamServicesApi,
  UserGroupServicesApi,
  UserProfileServicesApi,
  VerificationServicesApi,
  WebhookServicesApi,
  WikiPageServices2Api,
  WikiPageServicesApi,
} from './generated'
import { fetchWithExponentialTimeout } from './util/fetchWithExponentialTimeout'

const DEFAULT_CONFIG = new Configuration({
  fetchApi: fetchWithExponentialTimeout,
})

/**
 * Creates one class that encapsulates all sets of Synapse API services.
 */
export class SynapseClient extends BaseAPI {
  public accessApprovalServicesClient: AccessApprovalServicesApi
  public accessRequirementServicesClient: AccessRequirementServicesApi
  public activityServicesClient: ActivityServicesApi
  public agentChatServicesClient: AgentChatServicesApi
  public asynchronousJobServicesClient: AsynchronousJobServicesApi
  public authenticationServices2FAClient: AuthenticationServices2FAApi
  public authenticationServicesClient: AuthenticationServicesApi
  public certifiedUserServicesClient: CertifiedUserServicesApi
  public challengeServicesClient: ChallengeServicesApi
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
  public jsonSchemaServicesClient: JSONSchemaServicesApi
  public logServiceClient: LogServiceApi
  public membershipInvitationServicesClient: MembershipInvitationServicesApi
  public membershipRequestServicesClient: MembershipRequestServicesApi
  public messageServicesClient: MessageServicesApi
  public openIDConnectServicesClient: OpenIDConnectServicesApi
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

  constructor(protected configuration = DEFAULT_CONFIG) {
    // Merge the default configuration with the provided configuration
    configuration = new Configuration({
      ...DEFAULT_CONFIG.config,
      ...configuration.config,
    })

    super(configuration)

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
