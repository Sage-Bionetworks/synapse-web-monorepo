/**
 * The three transfer formats a DAR submission (`RequestPost.transfer_type`) can request.
 * Gated per-dataset by `DatasetSettings.allow_{type}` (e.g. `allow_clear`); see
 * `AridhiaDarWizard.tsx`'s `TRANSFER_TYPE_PRIORITY` for the derivation. A fourth format,
 * `token`, exists in Aridhia but only applies to Federated Node datasources and is never a
 * legal `RequestPost.transfer_type` value, so it's intentionally absent here. See
 * https://knowledgebase.aridhia.io/fair-data-services/managing-data/dataset-administration/available-data-delivery-formats/
 */
export type TransferType = 'clear' | 'pseudonymised' | 'manual'
