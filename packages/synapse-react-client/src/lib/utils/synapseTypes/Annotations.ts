// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/annotation/v2/Annotations.html
export type Annotations = {
  id: string
  etag: string
  annotations: {
    [key: string]: AnnotationsValue
  }
}

export type AnnotationsValue = {
  type: AnnotationsValueType
  value: string[] | number[]
}

export enum AnnotationsValueType {
  'STRING',
  'DOUBLE',
  'LONG',
  'TIMESTAMP_MS',
}
