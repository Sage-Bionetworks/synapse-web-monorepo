/**
 * A single form field, normalized from either of the two shapes the FAIR API sends. See
 * `parseFairFormSections` (in `components/Aridhia/fairFormToRjsf.ts`, which re-exports this
 * type). Structurally close to the generated `WorkflowField` and
 * `WorkspaceFormSectionsWorkspaceFieldsInner` models, but declared independently here. Those
 * two generated types use different, incompatible string-literal enums for `type`, and no
 * single OpenAPI schema covers both wire shapes plus the items-envelope-or-not variance on top
 * of them. So `FairFormPayload` stays a locally-declared structural type instead of consuming
 * either generated model directly.
 */
export type FairField = {
  name?: string
  type?: string
  label?: string
  defaultValue?: string
  default_options?: string
  placeholder?: string
  options?: Array<{ text?: string; value?: string; description?: string }>
  validation?: { minimum?: string; maximum?: string; required?: boolean }
}

/**
 * The raw body shape of the two FAIR form-definition responses `parseFairFormSections`
 * consumes: `GET /workflows/{code}` and `GET /workspaces-forms/{code}`. Both are fetched via
 * `*GetRaw` plus a manual `.json()` call; see `useGetAridhiaWorkflow` and
 * `useGetAridhiaWorkspaceRequestForm` for why the generated model deserializer is bypassed.
 * `sections` and `fields` are both optional on one type rather than split into a discriminated
 * union. Real payloads only ever populate one of them, and nothing on the wire marks which one
 * is coming, so a real union would just force `in`-narrowing at every read site for no benefit.
 */
export type FairFormPayload = {
  sections?: Record<string, { label?: string; fields?: FairField[] }>
  fields?: Record<string, FairField[]>
}
