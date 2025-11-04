import {
  useGetCurrentUserProfile,
  useGetNotificationEmail,
} from '@/synapse-queries/user/useUserBundle'
import { useSynapseContext } from '@/utils/context/SynapseContext'
import { useEffect } from 'react'

type IssueCollector = 'SWC' | 'Flagged Content' | 'Request Access'

const ISSUE_COLLECTOR_URL_MAP: Record<IssueCollector, string> = {
  SWC: 'https://sagebionetworks.jira.com/s/d41d8cd98f00b204e9800998ecf8427e-T/-bhcm7i/b/6/e73395c53c3b10fde2303f4bf74ffbf6/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs.js?locale=en-US&collectorId=ddc881b3',
  'Flagged Content':
    'https://sagebionetworks.jira.com/s/d41d8cd98f00b204e9800998ecf8427e-T/g39zuk/b/41/e73395c53c3b10fde2303f4bf74ffbf6/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs.js?locale=en-US&collectorId=d0abcfa9',
  'Request Access':
    'https://sagebionetworks.jira.com/s/d41d8cd98f00b204e9800998ecf8427e-T/-2rg9hj/b/25/e73395c53c3b10fde2303f4bf74ffbf6/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs.js?locale=en-US&collectorId=bd4dc1e5',
}

declare global {
  interface Window {
    jQuery?: any
    ATL_JQ_PAGE_PROPS: any
  }
}

type JiraIssueCollectorConfig = {
  issueCollector: IssueCollector
  issueSummary: string
  issueDescription: string
  issuePriority: '1' | '2' | '3' | '4' | '5'
  accessRequirementId?: string
  synapseDataObjectId?: string
  componentId?: string
  principalId: string
  userDisplayName?: string
  userEmailAddress?: string
}

/**
 * Shows the Jira issue collector when invoked.
 * @param config
 */
export function showJiraIssueCollector(config: JiraIssueCollectorConfig): void {
  const {
    issueCollector,
    issueSummary,
    issueDescription,
    principalId,
    userDisplayName,
    userEmailAddress,
    synapseDataObjectId,
    componentId,
    accessRequirementId,
    issuePriority,
  } = config
  try {
    if (window.jQuery == null) {
      throw new Error(
        'jQuery is not present. Jira Issue Collector will not be shown.',
      )
    }
    // Requires jQuery!
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    window.jQuery.ajax({
      url: ISSUE_COLLECTOR_URL_MAP[issueCollector],
      type: 'get',
      cache: true,
      dataType: 'script',
    })

    window.ATL_JQ_PAGE_PROPS = {
      triggerFunction: function (showCollectorDialog: () => void) {
        showCollectorDialog()
      },

      fieldValues: {
        summary: issueSummary,
        description: issueDescription,
        priority: issuePriority,
        customfield_10840: userEmailAddress,
        email: userEmailAddress,
        customfield_10841: accessRequirementId,
        customfield_10740: principalId,
        customfield_10741: userDisplayName,
        customfield_10742: synapseDataObjectId,
        fullname: userDisplayName,
        components: componentId,
        // Component ID of the component added to the Jira Governance Project
      },
    }
  } catch (err) {
    console.error(err)
  }
}

type UseJiraIssueCollectorConfig = Omit<
  JiraIssueCollectorConfig,
  'principalId' | 'userDisplayName' | 'userEmailAddress'
> & {
  show: boolean
}

/**
 * Hook used to show the Jira issue collector within Synapse. The collector will only be shown if the user is logged in.
 * @requires SynapseContext to be an ancestor in the component tree
 */
export function useJiraIssueCollector(config: UseJiraIssueCollectorConfig) {
  const {
    show,
    issueCollector,
    issueSummary,
    issueDescription,
    issuePriority,
    accessRequirementId,
    synapseDataObjectId,
    componentId,
  } = config

  const { accessToken, isAuthenticated } = useSynapseContext()

  const { data: currentUser, isLoading: profileIsLoading } =
    useGetCurrentUserProfile({
      enabled: isAuthenticated,
    })
  const { data: notificationEmail, isLoading: emailIsLoading } =
    useGetNotificationEmail({
      enabled: isAuthenticated,
    })

  useEffect(() => {
    if (show && accessToken) {
      if (currentUser && notificationEmail) {
        showJiraIssueCollector({
          issueCollector,
          issueSummary,
          issueDescription,
          synapseDataObjectId,
          componentId,
          accessRequirementId,
          issuePriority,
          principalId: currentUser.ownerId,
          userDisplayName: currentUser.displayName,
          userEmailAddress: notificationEmail.email,
        })
      } else {
        console.warn('Fetching profile data to display Jira popup')
      }
    } else if (show && !accessToken) {
      console.error('User not logged in, not showing Jira popup')
    }
    // - Don't re-run the effect when currentUser or notificationEmail change -- if they are refetched, we'll end up in a bad state with two pop-ups
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show, accessToken, profileIsLoading, emailIsLoading])
}
