import { ObjectType } from './ObjectType'

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/dao/WikiPageKey.html
export type WikiPageKey = {
  wikiPageId: string //The ID of the wiki page.
  ownerObjectId: string //The owner of this page.
  ownerObjectType: ObjectType //JSON enum for the types of objects in Synapse.
}
