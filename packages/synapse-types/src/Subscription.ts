import { SortDirection } from './AccessApproval'

export interface Topic {
  objectId: string
  objectType: SubscriptionObjectType
}

export enum SubscriptionObjectType {
  FORUM = 'FORUM',
  THREAD = 'THREAD',
  DATA_ACCESS_SUBMISSION = 'DATA_ACCESS_SUBMISSION',
  DATA_ACCESS_SUBMISSION_STATUS = 'DATA_ACCESS_SUBMISSION_STATUS',
}

export interface Subscription {
  subscriptionId: string
  subscriberId: string
  objectId: string
  objectType: SubscriptionObjectType
  createdOn: string
}

export interface SubscriptionRequest {
  objectType: SubscriptionObjectType
  idList: string[]
  sortByType: SortByType
  sortDirection: SortDirection
}

export enum SortByType {
  SUBSCRIPTION_ID = 'SUBSCRIPTION_ID',
  SUBSCRIBER_ID = 'SUBSCRIBER_ID',
  OBJECT_ID = 'OBJECT_ID',
  OBJECT_TYPE = 'OBJECT_TYPE',
  CREATED_ON = 'CREATED_ON',
}

export interface SubscriptionPagedResults {
  results: Subscription[]
  totalNumberOfResults: number
}

export interface SubscriberPagedResults {
  subscribers: string[]
  nextPageToken?: string
}

/**
 * Represents query parameters for https://rest-docs.synapse.org/rest/GET/subscription/all.html
 */
export type SubscriptionQuery = {
  objectType: SubscriptionObjectType
  sortBy?: string
  sortDirection?: SortDirection
}
