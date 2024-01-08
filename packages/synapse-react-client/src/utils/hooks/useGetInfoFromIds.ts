import { chunk, uniq, without } from 'lodash-es'
import { useEffect, useState } from 'react'
import useDeepCompareEffect from 'use-deep-compare-effect'
import { SynapseConstants } from '../index'
import {
  getEntityHeaders,
  getEvaluations,
  getGroupHeadersBatch,
} from '../../synapse-client'
import { useSynapseContext } from '../context/SynapseContext'
import {
  EntityHeader,
  Evaluation,
  Reference,
  ReferenceList,
  UserGroupHeader,
} from '@sage-bionetworks/synapse-types'

export type UseGetInfoFromIdsProps<
  T extends EntityHeader | UserGroupHeader | Evaluation,
  THookType = T extends EntityHeader
    ? 'ENTITY_HEADER'
    : T extends UserGroupHeader
    ? 'USER_PROFILE'
    : T extends Evaluation
    ? 'EVALUATION_QUEUE'
    : never,
> = {
  ids: string[]
  type: THookType
}

type LookupRequestType = string | Reference

const UserGroupHeaderTemplate: UserGroupHeader = {
  ownerId: '', // A foreign key to the ID of the 'principal' object for the user
  firstName: 'Unknown', // This person's given name (forename)
  lastName: 'Unknown', // This person's family name (surname)
  userName: 'Unknown', // A name chosen by the user that uniquely identifies them
  isIndividual: false,
}

const entityHeaderTemplate: EntityHeader = {
  name: 'Unknown', //	The name of the entity
  id: 'unknown', //	The id of the entity
  type: 'org.sagebionetworks.repo.model.FileEntity', //	The type of the entity
  versionNumber: 0, //	The version number of the entity
  versionLabel: 'placeholder', //	The user defined version label of the entity
  benefactorId: 0, //	The ID of the entity that this Entity's ACL is inherited from.
  createdOn: 'null', //	The date this entity was created.
  modifiedOn: 'null', //	The date this entity was last modified.
  createdBy: 'null', //	The ID of the user that created this entity.
  modifiedBy: 'null', //	The ID of the user that last modified this entity.
  isLatestVersion: true, // If this version is the latest version of the entity
}

const evaluationTemplate: Evaluation = {
  id: 'unknown', // The unique immutable ID for this Evaluation.
  etag: 'Unknown', // Synapse employs an Optimistic Concurrency Control (OCC) scheme to handle concurrent updates. The eTag changes every time an Evaluation is updated; it is used to detect when a client's copy of an Evaluation is out-of-date.
  name: 'Unknown', // The name of this Evaluation
  description: 'Unknown', // A text description of this Evaluation.
  ownerId: 'null', // The ID of the Synapse user who created this Evaluation.
  createdOn: 'null', //	The date on which Evaluation was created.
  contentSource: 'Unknown', // The Synapse ID of the Entity to which this Evaluation belongs, e.g. a reference to a Synapse project.
  submissionInstructionsMessage: 'Unknown', // Message to display to users detailing acceptable formatting for Submissions to this Evaluation.
  submissionReceiptMessage: 'Unknown', // Message to display to users upon successful submission to this Evaluation.
}

const getEntityHeaderItems = async (
  lookupList: ReferenceList,
  token: string | undefined,
): Promise<EntityHeader[]> => {
  const newData = await getEntityHeaders(lookupList, token)
  const notFound = lookupList.filter(
    item => newData.results.map(item => item.id).indexOf(item.targetId) === -1,
  )
  const notFoundPlaceholders = notFound.map(item => ({
    ...entityHeaderTemplate,
    id: item.targetId,
    name: `${item.targetId}`,
  }))

  return [...newData.results, ...notFoundPlaceholders]
}

const getUserGroupHeaderItems = async (
  lookupList: string[],
): Promise<UserGroupHeader[]> => {
  const newData = (await getGroupHeadersBatch(lookupList)).children
  const notFound = lookupList.filter(
    item => newData.map(item => item.ownerId).indexOf(item) === -1,
  )
  const notFoundPlaceholders = notFound.map(item => ({
    ...UserGroupHeaderTemplate,
    ownerId: item,
    name: `Unknown User (${item})`,
  }))

  return [...newData, ...notFoundPlaceholders]
}

const getEvaluationItems = async (
  lookupList: string[],
  token: string | undefined,
): Promise<Evaluation[]> => {
  const newData = await getEvaluations({ evaluationIds: lookupList }, token)
  const notFound = lookupList.filter(
    item => newData.results.map(item => item.id).indexOf(item) === -1,
  )
  const notFoundPlaceholders = notFound.map(item => ({
    ...evaluationTemplate,
    id: item,
    name: item,
  }))

  return [...newData.results, ...notFoundPlaceholders]
}

/**
 * React hook to get user profiles or entities or evaluation queues. Utilizes a custom cache in sessionStorage.
 *
 * For fetching just one entity or usergroup, see useGetEntity/useGetUserGroupHeader hooks powered by react-query
 * @returns
 */
export default function useGetInfoFromIds<
  T extends EntityHeader | UserGroupHeader | Evaluation,
>(props: UseGetInfoFromIdsProps<T>): T[] {
  const { ids, type } = props
  const { accessToken } = useSynapseContext()

  const [data, setData] = useState<Array<T>>([])

  const idKey = (type === 'USER_PROFILE' ? 'ownerId' : 'id') as keyof T

  const getStorageKey = (type: UseGetInfoFromIdsProps<T>['type']) => {
    switch (type) {
      case 'USER_PROFILE':
        return SynapseConstants.USER_PROFILE_STORAGE_KEY
      case 'ENTITY_HEADER':
        return SynapseConstants.ENTITY_HEADER_STORAGE_KEY
      case 'EVALUATION_QUEUE':
        return SynapseConstants.EVALUATIONS_STORAGE_KEY
      default:
        return ''
    }
  }
  const storageKey: string = getStorageKey(type)

  // look at current list of data, see if incoming ids has new data,
  // if so grab those ids
  const curList = data.map(el => el[idKey]) as string[]
  const incomingList = ids.filter(el => el !== SynapseConstants.VALUE_NOT_SET)
  const newValues = uniq(without(incomingList, ...curList))

  useEffect(() => {
    const saveToSessionStorage = (data: T[]) => {
      if (!data.length) {
        return
      }
      //get what's there
      const dataInStorage = sessionStorage.getItem(storageKey)
      try {
        const dataInStorageAsObjectArr: T[] = dataInStorage
          ? JSON.parse(dataInStorage)
          : []
        //get an array of ids for items already in storage
        const ids = dataInStorageAsObjectArr.map(item => item[idKey])
        //push all the new data if ids are new
        for (const dataObject of data) {
          if (!ids.includes(dataObject[idKey])) {
            dataInStorageAsObjectArr.push(dataObject)
          }
        }
        sessionStorage.setItem(
          storageKey,
          JSON.stringify(dataInStorageAsObjectArr),
        )
      } catch (e) {
        sessionStorage.setItem(storageKey, JSON.stringify(data))
      }
    }
    saveToSessionStorage(data)
  }, [data, idKey, storageKey])

  // Alina TODO: check if the items are already in Local Storage before making server call.

  // Michael TODO: There's a bug where the data held in useGetInfoFromIds will be stale if the user token changes,
  // this can be solved by using the useCompare hook on the token to track when it changes
  useDeepCompareEffect(() => {
    let isCancelled = false
    const getData = async () => {
      if (newValues.length > 0) {
        try {
          const newIds = Array.from<string>(newValues)
          const newReferences: LookupRequestType[] =
            type === 'ENTITY_HEADER'
              ? newIds.map(el => ({ targetId: el }))
              : newIds
          const newReferencesChunks = chunk(newReferences, 45)
          const totalData: T[] = []
          for (const newReferences of newReferencesChunks) {
            let newData: T[] = []
            switch (type) {
              case 'USER_PROFILE':
                newData = (await getUserGroupHeaderItems(
                  newReferences as string[],
                )) as T[]
                break
              case 'ENTITY_HEADER':
                newData = (await getEntityHeaderItems(
                  newReferences as ReferenceList,
                  accessToken,
                )) as T[]
                break
              case 'EVALUATION_QUEUE':
                newData = (await getEvaluationItems(
                  newReferences as string[],
                  accessToken,
                )) as T[]
                break
            }
            totalData.push(...newData)
          }
          if (!isCancelled) {
            setData(oldData => oldData.concat(...totalData))
          }
        } catch (error) {
          console.error('Error on data retrieval', error)
        }
      }
    }
    getData()
    return () => {
      isCancelled = true
    }
  }, [accessToken, type, newValues])
  return data
}
