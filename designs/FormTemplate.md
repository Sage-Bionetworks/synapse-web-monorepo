Corresponding ticket: [PLFM-9449](https://sagebionetworks.jira.com/browse/PLFM-9449)

This document describes extending the Synapse API so Access Requirements (ARs) can describe additional, flexible information that must be collected from end users in data access requests. The solution provides services that facilitate managing the AR questionnaires.

The proposed solution involves adding new services for the Synapse Access and Compliance Team (ACT) to create and manage 'form template' objects, which describe how a registered JSON Schema is rendered to requesters as a multi-step form. A new Access Requirement type is added that references both a registered JSON Schema (the data contract) and a form template (the presentation). New services facilitate generating a JSON Schema and UI Schema for such an access requirement, which can be presented to a user as a form with validation rules when they initiate a data access request.

## Background

Sensitive data in Synapse can be protected using one or more Access Requirements (ARs). When an AR is applied to a resource (e.g. FileEntity) in Synapse, end users must meet the terms of the AR to access the resource (e.g., download the file). Many ARs are "Managed" ARs, where information is collected from a requester in a "Data Access Request" (DAR). The DAR is then reviewed by a Data Access Committee (DAC). Using the information provided by the requester, the committee may approve or reject the DAR. Requester(s) meet the terms of the AR when their corresponding DAR is approved.

While many of our projects have diverse governance and data adjudication needs, Access Requirements currently only support prompting a requester with a subset of predefined questions, which makes it difficult to gather and review specific information from data requesters. To better support these scenarios, we propose a design that extends the existing Access Requirement/Data Access Request flow to use JSON Schema to describe additional information to gather in an Data Access Request.

For more information and use case information, see [PSI-1](https://sagebionetworks.jira.com/browse/PSI-1) and [TECH-184](https://sagebionetworks.jira.com/browse/TECH-184).

### Goals

- Extend access requirement and data access submission services to collect custom data within the existing data access request flow
- For a given Access Requirement, ACT can describe additional form data that should be collected in a data access request.
- Custom information is gathered via a form presented to requester
  - ACT can provide an optional 'UI Schema' to customize form appearance
  - Support custom attachments (form fields with type `file`)
  - Form can be split into multiple steps to simplify and streamline interface for requesters
- Submission reviewers can review custom form data
- Requesters can save partial form progress and resume in a later session
- Add a path to using schemas for existing Access Requirements/approvals (support a one-time migration step from the existing `ManagedACTAccessRequirement`)
- Reviewer and submitter can export a PDF of the created submission (client side logic)
- Expose publicly-disclosable information from approved submissions (functionality extending or similar to [POST /accessRequirement/{arId}/approvedSubmissionInfo](https://rest-docs.synapse.org/rest/POST/accessRequirement/requirementId/approvedSubmissionInfo.html))
- Support [eDUC](https://sagebionetworks.jira.com/wiki/spaces/PLFM/pages/4600299533) workflows

### Non-Goals

See [PSI-1](https://sagebionetworks.jira.com/browse/PSI-1).

- Supporting all types of form data (e.g. nested objects)
- Conditional logic (see Appendix)
- Enabling interoperability with other platforms (see Appendix)
- Coalescing requests to multiple ARs into one form (see Appendix)

## Proposal Summary

Today, every Managed ACT Access Requirement collects the same fixed set of fields from a data requester. If a project requires asking for additional information not captured by the Managed ACT Access Requirement, there's no way to capture it inside the standard DAR flow. Workarounds exist, such as asking users to upload additional files described in the wiki, or requiring a specific format for the "Intended Data Use" statement, but data requesters often fail to properly follow these instructions.

This proposal extends the AR/DAR flow so ACT can attach a registered JSON Schema (the data contract for the request) and a Form Template (the presentation layer that maps schema properties to UI) to an Access Requirement. A requester's answers are validated against that schema, stored on the Submission, and presented to reviewers as a structured form. A new AR type (`JsonSchemaAccessRequirement`) utilizes this behavior; existing `ManagedACTAccessRequirement`s continue to work unchanged unless ACT explicitly migrates them.

### Summary of New Objects and Services

- **JSON Schema** describes the shape of the data collected from a requester, including per-property type, validation rules, and which properties are required. Schemas are registered and versioned in the existing Synapse JSON Schema registry. Multiple Access Requirements may reference the same schema.
- `FormTemplate` is a versioned, ACT-managed object that defines how a referenced JSON Schema is rendered as a multi-step form. It carries an ordered list of steps (display title, description), and within each step, an ordered list of field slots. Each field slot binds a JSON pointer into the schema to a UI definition (and, for file-upload fields, a template file handle). A template is pinned to one schema version; updating a template creates a new template version. Multiple Access Requirements may reference the same `FormTemplate` (N:1).
- `JsonSchemaAccessRequirement` is a new AR type that references a `FormTemplate` (by id and version). The template's pinned schema is the AR's data contract — there is no separate schema reference on the AR. Otherwise behaves like `ManagedACTAccessRequirement` (same accessor flow, expirations, approvals).
- Schema generation service resolves the AR's `FormTemplate` and the schema it references, and emits a per-step (jsonSchema, uiSchema) bundle. The UI uses this bundle to render the form for requesters or as a read-only display for reviewers. The same service can render a draft template body to support previewing during template authoring.
- Schema submission service accepts the requester's answers, validates them against the schema referenced by the AR's pinned template (filtered by the active `requestType`), and creates a Submission whose `schemaData` holds the validated payload.
- For `JsonSchemaAccessRequirement`, `submissionData` includes the schematized data submitted by the user. Fields not used by other services (e.g. research project, IDU statement, supplemental attachments, publications, summary of use) are no longer first-class properties. Equivalent functionality can now expressed as schema properties. Reviewer UI for these submissions reads from `schemaData` in addition to the first-class fields on the `Submission` object. The migration step (see below) does not modify past submissions, so the UI needs to support showing data from any field.

### Example Workflow

ACT registers a JSON Schema in the existing schema registry that captures the data contract for an AR. They author a `FormTemplate` that pins to that schema and arranges its properties into one or more steps with UI hints. They preview the resulting form, save the template, and create a `JsonSchemaAccessRequirement` that references the template. Updating the form (renaming a step, regrouping fields, changing UI hints) is a single transactional update to the template; updating the data contract (changing types, adding/removing properties, changing validation) is a schema bump (which requires publishing a new template version pinned to the new schema). Updates to a template do not automatically cascade to ARs that reference it; ACT explicitly bumps an AR to a new template version.

Requester side: When a user wants access to a resource gated by a `JsonSchemaAccessRequirement`, the client calls the schema generation service for that AR version. The response is a multi-step JSON Schema + UI Schema bundle. The user fills out the form with their responses. Request data can be saved any time in the `RequestInterface` object using `POST /dataAccessRequest` (this is the existing flow for `ManagedACTAccessRequirement`s). Once ready to submit, the submission service validates the payload against the schema pinned by the AR version and either creates the Submission or returns validation errors.

In our initial implementation, the validation errors will be unstructured; clients should do client-side validation to generate structured error messages. In the future, we can provide a validation service, if it is useful.

Reviewer side: A reviewer opens a submission as they do today. The submission carries `schemaData` plus a reference to the AR version it was submitted against; the UI re-runs schema generation for that AR version to render a read-only form filled with the requester's answers. The reviewer adjudicates the submission the same as they would adjudicate a submission against a `ManagedACTAccessRequirement`.

### First-class vs Schema-driven Fields

In general, a field is kept first-class only if a server-side workflow or an external integration utilizes that field. This includes:

- The [eDUC](https://sagebionetworks.jira.com/wiki/spaces/PLFM/pages/4600299533) workflow, including traditional DUC fallback (institution, principal investigator, signing official, ducFileHandleId, eDucSignatureEnvelopeId)
- The accessor/renewal lifecycle (accessorChanges)

Other fields become schema-driven. Reviewer UIs always render any present first-class fields in addition to schema fields; they must never infer that a schematized AR lacks first-class data (even those fields that are 'schematized', because an AR could be migrated from `ManagedACTAccessRequirement` to `JsonSchemaAccessRequirement`).

## API Design

We propose adding the following new services and new/changed objects.

### Services

| Endpoint                                                         | Request Body                             | Response                         | Notes                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Authorization Required |
| ---------------------------------------------------------------- | ---------------------------------------- | -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| POST /accessRequirement/formTemplate                             | FormTemplate                             | FormTemplate                     | Used to create a form template. The submitted body must include a `schemaRef` pointing to a registered JSON Schema version. At create time, the system validates that (1) every field slot's `schemaPath` resolves to a leaf property in the resolved schema, (2) every property declared `required` in the schema is covered by exactly one field slot, (3) no two field slots share the same `schemaPath`, and (4) each slot's UI hints are compatible with its target property's type/format. Validation failures return an error and no template is created.                                                                                                                                                                                                                                                                                                                                   | ACT only               |
| POST /accessRequirement/formTemplate/{id}                        | FormTemplate                             | FormTemplate                     | Used to update a form template by its ID. Templates are versioned and immutable per version; any change creates a new version. The update is validated against the new body's `schemaRef` using the same rules as create. ARs that reference this template do **not** automatically roll forward; ACT explicitly bumps an AR by updating it to reference the new template version.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | ACT only               |
| GET /accessRequirement/formTemplate/{id}                         | None                                     | FormTemplate                     | Used to retrieve the latest version of a form template by its ID.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | None                   |
| GET /accessRequirement/formTemplate/{id}/version/{versionNumber} | None                                     | FormTemplate                     | Used to retrieve a specific version of a form template.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | None                   |
| POST /accessRequirement/formTemplate/search                      | FormTemplateSearchRequest                | FormTemplateSearchResponse       | Search all registered form templates in the system. Only the latest versions of templates are returned.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | None                   |
| POST /dataAccessSubmission/schema/generate/async/start           | GenerateDataAccessSchemaRequestInterface | AsyncJobId                       | Given an Access Requirement ID and version (or a draft FormTemplate body for preview), generate the JSON Schema and UI Schema for the form, broken up by step. The output is produced by resolving the source FormTemplate, resolving its referenced schema (with `$ref`s expanded), filtering field slots by `submissionContext` against the request's `requestType` (REQUEST or RENEWAL), and emitting one (jsonSchema, uiSchema) pair per step. Each step's jsonSchema slices the referenced schema to the properties targeted by that step's surviving field slots and preserves their `required` declarations (with required properties pruned if filtered out by context).                                                                                                                                                                                                                   | None                   |
| GET /dataAccessSubmission/schema/generate/async/get/{asyncToken} | None                                     | GenerateDataAccessSchemaResponse |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | None                   |
| POST /accessRequirement/{id}/migrateToJsonSchema                 | None                                     | None                             | The `id` must be the ID of a ManagedACTAccessRequirement. One-time step that registers a bootstrapped JSON Schema mirroring the existing ManagedACTAccessRequirement submission requirements, creates a corresponding bootstrapped FormTemplate, and converts the AR to a JsonSchemaAccessRequirement referencing the template. Past submissions are not modified. This service initiates an eventual, asynchronous migration. The response is immediate, indicating only that migration has started.                                                                                                                                                                                                                                                                                                                                                                                              | ACT/Admin only         |
| POST /accessRequirement/{id}/publicSubmissionInfo                | PublicSubmissionInfoPageRequest          | PublicSubmissionInfoPage         | Response is identical for all users (diverges from [the existing analogous service](https://rest-docs.synapse.org/rest/POST/accessRequirement/requirementId/approvedSubmissionInfo.html), which today displays private information to ACT). Only fields with their FormTemplateField's `isPublic` set to `true` are returned. accessorChanges and private answers are never included. For JsonSchemaAccessRequirements, a field is public is snapshotted at submit time from the FormTemplate version the submission was made against; flipping isPublic on a newer template version does not retroactively expose older submissions. This differs from how IDU statements are exposed today, which only depends on the current state of the `ManagedACTAccessRequirement.isIDUPublic`. This service will also support `ManagedACTAccessRequirement`, so clients can replace the existing service. | None                   |
| POST /accessRequirement/{requirementId}/approvedSubmissionInfo   | SubmissionInfoPageRequest (no change)    | SubmissionInfoPage (no change)   | If called with a JsonSchemaAccessRequirement's ID, 400 will be returned with guidance to use POST /accessRequirement/{id}/publicSubmissionInfo (above)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | None                   |

### Objects

```mermaid
classDiagram
      direction LR

      class JsonSchemaAccessRequirement {
          id
          versionNumber
          formTemplateRef
      }

      class FormTemplate {
          id
          versionNumber
          schemaRef
      }

      class JsonSchema {
          $id
          version
      }

      class FormTemplateStep {
          title
          description
      }

      class FormTemplateField {
          schemaPath
          uiDefinition
          submissionContext
          isPublic
      }

      JsonSchemaAccessRequirement "*" --> "1" FormTemplate : pins
      FormTemplate "*" --> "1" JsonSchema : pins
      FormTemplate "1" *-- "1..*" FormTemplateStep : ordered
      FormTemplateStep "1" *-- "1..*" FormTemplateField : ordered
      FormTemplateField ..> JsonSchema : schemaPath resolves to a property
```

`org.sagebionetworks.repo.model.dataaccess.schema.FormTemplate`

```json
{
  "title": "Form Template",
  "description": "Defines how a referenced JSON Schema is rendered to a requester as a multi-step form. A template is pinned to a single JSON Schema version. Updating a template creates a new version; the schema reference and the steps/fields it contains are immutable per version. Multiple Access Requirements may reference the same template version (N:1).",
  "implements": [
    {
      "$ref": "org.sagebionetworks.repo.model.Versionable"
    }
  ],
  "properties": {
    "id": {
      "type": "string",
      "description": "The unique identifier of this template. Stable across versions."
    },
    "name": {
      "type": "string",
      "description": "The internal name of this template. Used by ACT to identify and find the template; not displayed to requesters."
    },
    "etag": {
      "type": "string",
      "description": "Synapse employs an Optimistic Concurrency Control (OCC) scheme to handle concurrent updates. Since the E-Tag changes every time a resource is updated it is used to detect when a client's current representation of a resource is out-of-date."
    },
    "schema$id": {
      "type": "string",
      "description": "Reference to the registered JSON Schema and version that this template renders. The reference MUST be pinned to a specific version. The schema is the source of truth for property types, validation rules, and which properties are required."
    },
    "steps": {
      "type": "array",
      "description": "Ordered list of steps in the form. Each step renders as a page or section. Order is determined by array position.",
      "items": {
        "$ref": "org.sagebionetworks.repo.model.dataaccess.schema.FormTemplateStep"
      }
    },
    "deprecated": {
      "type": "boolean",
      "description": "Marking a template as deprecated will hide it from search results by default. It does not affect Access Requirements that already reference this template. Default is `false`."
    }
  },
  "required": ["name", "schemaRef", "steps"]
}
```

`org.sagebionetworks.repo.model.dataaccess.schema.FormTemplateStep`

```json
{
  "title": "Form Template Step",
  "description": "A logical grouping of fields rendered as a single page or section in a multi-step form. Steps are part of the FormTemplate version; changes to a step's title, description, or contained fields produce a new template version.",
  "properties": {
    "title": {
      "type": "string",
      "description": "Display title shown to the user (e.g., 'Institutional Information')."
    },
    "description": {
      "type": "string",
      "description": "Instructions shown at the top of the page/section."
    },
    "fields": {
      "type": "array",
      "description": "Ordered list of field slots within this step. Each slot binds a JSON pointer in the schema to a UI definition.",
      "items": {
        "$ref": "org.sagebionetworks.repo.model.dataaccess.schema.FormTemplateField"
      }
    }
  },
  "required": ["title", "fields"]
}
```

`org.sagebionetworks.repo.model.dataaccess.schema.FormTemplateField`

```json
{
  "title": "Form Template Field",
  "description": "A single field slot in a form template step. Maps a JSON pointer in the referenced schema to a UI definition. Validation that the slot resolves to a real leaf property in the schema, that the slot's UI definition is compatible with the property's type/format, and that no two slots in the template share a schemaPath, is performed when the template is created or updated.",
  "properties": {
    "schemaPath": {
      "type": "string",
      "description": "JSON pointer (RFC 6901) into the template's referenced schema, identifying the leaf property this slot renders. Example: `/institution`. The pointer is resolved against the schema with `$ref`s expanded."
    },
    "uiDefinition": {
      "type": "object",
      "description": "Defines the appearance of this slot in the form UI. Defined by <a href=\"https://rjsf-team.github.io/react-jsonschema-form/docs/api-reference/uiSchema\">react-jsonschema-form</a>."
    },
    "submissionContext": {
      "type": "string",
      "enum": ["ALWAYS", "REQUEST_ONLY", "RENEWAL_ONLY"],
      "description": "Controls whether this slot appears (and the underlying schema property is collected) for an initial REQUEST, a RENEWAL, or both. Default is `ALWAYS`. The schema's `required` declaration only binds for contexts in which the property is included; if a required property is excluded for the active context, it is treated as not required."
    },
    "templateFileHandleId": {
      "type": "integer",
      "description": "A Synapse FileHandle ID used to download a template file for this slot. Intended only for slots whose target schema property uses the `synapse-filehandle-id` format. The file can be downloaded using FileHandleAssociateType.AccessRequirementAttachment."
    },
    "isPublic": {
      "type": "boolean",
      "description": "When true, responses to this field will be publicly viewable after approval. Default is false."
    }
  },
  "required": ["schemaPath", "uiDefinition"]
}
```

Custom JSON Schema definition for File Handles (example for a schema property targeted by a `FormTemplateField`):

To denote a JSON Schema property as a Synapse file upload:

- it must be of `number` type
- it must use the custom format `synapse-filehandle-id`

```json
{
  "title": "Custom File Upload Field",
  "type": "number",
  "format": "synapse-filehandle-id"
}
```

The file can be downloaded via the file handle ID by using the existing `FileHandleAssociateType.DataAccessRequestAttachment`.

`org.sagebionetworks.repo.model.dataaccess.schema.FormTemplateReference`

```json
{
  "title": "Form Template Reference",
  "description": "Used to reference a specific FormTemplate id and version.",
  "properties": {
    "templateId": {
      "type": "string",
      "description": "The unique identifier of the form template."
    },
    "templateVersionNumber": {
      "type": "integer",
      "description": "The version number of the form template."
    }
  },
  "required": ["templateId", "templateVersionNumber"]
}
```

`org.sagebionetworks.repo.model.dataaccess.schema.FormTemplateSearchRequest`

```json
{
  "title": "Form Template Search Request",
  "description": "A request body to search form templates. Only the latest versions of form templates can be retrieved.",
  "properties": {
    "name": {
      "type": "string",
      "description": "Filter by the internal name of the FormTemplate using case-insensitive substring matching."
    },
    "includeDeprecated": {
      "type": "boolean",
      "description": "Whether to include deprecated templates in the results. Default is `false`."
    },
    "nextPageToken": {
      "type": "string",
      "description": "A token used to get the next page of a request."
    }
  }
}
```

`org.sagebionetworks.repo.model.dataaccess.schema.FormTemplateSearchResponse`

```json
{
  "title": "Form Template Search Response",
  "description": "A response body containing form template search results.",
  "properties": {
    "results": {
      "type": "array",
      "items": {
        "$ref": "org.sagebionetworks.repo.model.dataaccess.schema.FormTemplate"
      },
      "description": "The matching Form Templates corresponding to the search parameters."
    },
    "nextPageToken": {
      "type": "string",
      "description": "A token used to get the next page of a particular search query."
    }
  }
}
```

`org.sagebionetworks.repo.model.dataaccess.schema.GenerateDataAccessSchemaRequestInterface`

```json
{
  "title": "Generate Data Access Schema Request",
  "type": "interface",
  "description": "Request body to generate the JSON Schema and UI Schema for a form.",
  "implements": [
    {
      "$ref": "org.sagebionetworks.repo.model.asynch.AsynchronousRequestBody"
    }
  ],
  "properties": {
    "requestType": {
      "type": "string",
      "description": "The type of request being made. May affect the final set of included form fields.",
      "enum": ["REQUEST", "RENEWAL"]
    },
    "concreteType": {
      "type": "string",
      "description": "Indicates which implementation this object represents."
    }
  },
  "required": ["concreteType", "requestType"]
}
```

`org.sagebionetworks.repo.model.dataaccess.schema.GenerateDataAccessSchemaFromAccessRequirement`

```json
{
  "title": "Generate Data Access Schema From Access Requirement",
  "description": "Request body to generate the JSON Schema and UI Schema for a form. Intended to support data requesters in the data access request flow.",
  "implements": [
    {
      "$ref": "org.sagebionetworks.repo.model.dataaccess.schema.GenerateDataAccessSchemaRequestInterface"
    }
  ],
  "properties": {
    "accessRequirement": {
      "$ref": "org.sagebionetworks.repo.model.AccessRequirementReference",
      "description": "The AR ID and version number used to generate a schema to describe a data access request."
    }
  },
  "required": ["accessRequirement"]
}
```

`org.sagebionetworks.repo.model.dataaccess.schema.GenerateDataAccessSchemaFromTemplateDraft`

```json
{
  "title": "Generate Data Access Schema From Template Draft",
  "description": "Request body to generate the JSON Schema and UI Schema from a draft FormTemplate body. Intended to support previewing the rendered form during template authoring.",
  "implements": [
    {
      "$ref": "org.sagebionetworks.repo.model.dataaccess.schema.GenerateDataAccessSchemaRequestInterface"
    }
  ],
  "properties": {
    "templateDraft": {
      "$ref": "org.sagebionetworks.repo.model.dataaccess.schema.FormTemplate",
      "description": "The draft template body to render. The draft is validated against its schemaRef using the same rules applied at template create/update time. The draft is not persisted."
    }
  },
  "required": ["templateDraft"]
}
```

`org.sagebionetworks.repo.model.dataaccess.schema.GenerateDataAccessSchemaResponse`

```json
{
  "title": "Generate Data Access Schema Response",
  "description": "Response body for a Generate Data Access Schema request. Returns one (jsonSchema, uiSchema) pair per step in the source FormTemplate.",
  "implements": [
    {
      "$ref": "org.sagebionetworks.repo.model.asynch.AsynchronousResponseBody"
    }
  ],
  "properties": {
    "steps": {
      "type": "array",
      "description": "An ordered list of schema information used to render the form, one element per step in the source template. Each element's jsonSchema validates the slice of submission data corresponding to that step's fields.",
      "items": {
        "type": "object",
        "properties": {
          "jsonSchema": {
            "$ref": "org.sagebionetworks.repo.model.schema.JsonSchema"
          },
          "uiSchema": {
            "type": "object"
          }
        },
        "required": ["jsonSchema", "uiSchema"]
      }
    }
  },
  "required": ["steps"]
}
```

`org.sagebionetworks.repo.model.dataaccess.RequestInterface`

```json
{
  "description": "This is the base interface that all Request implements.",
  "type": "interface",
  "properties": {
    // ... existing properties
    "schemaData": {
      "type": "object",
      "description": "Request data that was provided using the associated JSON Schema."
    }
  }
}
```

`org.sagebionetworks.repo.model.AccessRequirementReference`

```json
{
  "title": "Access Requirement Reference",
  "description": "Used to reference a specific access requirement and version.",
  "properties": {
    "accessRequirementId": {
      "type": "string",
      "description": "The unique identifier of this access requirement."
    },
    "accessRequirementVersionNumber": {
      "type": "integer",
      "description": "The version number of this access requirement."
    }
  },
  "required": ["accessRequirementId", "accessRequirementVersionNumber"]
}
```

`org.sagebionetworks.repo.model.HasExpiration`

- interface factored out of `ManagedACTAccessRequirement` for reuse

```json
{
  "title": "Has Expiration",
  "type": "interface",
  "description": "Used to describe an access requirement for which AccessApprovals will expire after some duration.",
  "properties": {
    "expirationPeriod": {
      "type": "integer",
      "description": "After an AccessApproval is granted for this AccessRequirement, it will be expired after expirationPeriod milliseconds. Set this value to 0 to indicate that AccessApproval will never be expired."
    }
  }
}
```

`org.sagebionetworks.repo.model.HasDataUseCertificate`

- interface factored out of `ManagedACTAccessRequirement` for reuse

```json
{
  "title": "Has Data Use Certificate",
  "description": "Describes an Access Requirement that may utilize a Data Use Certificate requirement.",
  "properties": {
    "isDUCRequired": {
      "type": "boolean",
      "description": "If true, then accessor needs to fill, sign, and submit a Data Use Certificate (DUC) to gain access to the data."
    },
    "ducTemplateFileHandleId": {
      "type": "string",
      "description": "If the Data Use Certificate (DUC) is required, creator of this requirement needs to upload a Data Use Certificate (DUC) template. Users have to download this template, fill out, sign and submit it."
    },
    "eDucTemplateId": {
      "type": "string",
      "description": "The ID of the electronic Data Use Certificate (eDUC) template to fill out for data access requests."
    }
  }
}
```

`org.sagebionetworks.repo.model.JsonSchemaAccessRequirement`

```json
{
  "title": "JSON Schema Access Requirement",
  "description": "A Synapse 'Access Control Team' controlled Access Requirement, a 'tier 3' Access Requirement. In addition to the functionality provided by the Managed ACT Access Requirement, this Access Requirement type also supports collecting information described by a JSON Schema and rendered using a FormTemplate. The data contract (JSON Schema) is resolved transitively through the referenced FormTemplate.",
  "implements": [
    {
      "$ref": "org.sagebionetworks.repo.model.ACTAccessRequirementInterface"
    },
    {
      "$ref": "org.sagebionetworks.repo.model.HasAccessorRequirement"
    },
    {
      "$ref": "org.sagebionetworks.repo.model.HasExpiration"
    },
    {
      "$ref": "org.sagebionetworks.repo.model.HasDataUseCertificate"
    }
  ],
  "properties": {
    "formTemplateRef": {
      "$ref": "org.sagebionetworks.repo.model.dataaccess.schema.FormTemplateReference",
      "description": "Reference to the FormTemplate version used to render the form for this AR. The template's pinned schema is the AR's data contract. Multiple ARs may reference the same FormTemplate version."
    }
  },
  "required": ["formTemplateRef"]
}
```

`org.sagebionetworks.repo.model.dataaccess.Submission`

The submission already includes the `accessRequirementId` and `accessRequirementVersion`, which can be used to get the schema this data was submitted against. For reviewers, the UI can display a 'read-only' version of the schema form filled in with the `schemaData`.

For submissions created against a `JsonSchemaAccessRequirement`:

- `schemaData` carries the validated submission payload.
- `requestId` is populated, and `schemaData` is snapshotted onto the `Submission` at submit-time.
- `researchProjectSnapshot` is null — its fields (institution, project lead, IDU, etc.) are now expressed as schema properties and live inside `schemaData`.
  - NOTE: The migration step will _not_ backfill `schemaData` for historical ManagedACT submissions. The reviewer UI should support showing the first class properties and/or `schemaData` regardless of AR type.

```json
{
  "description": "A submission to request access to controlled data.",
  "properties": {
    // Existing properties omitted for brevity
    "schemaData": {
      "type": "object",
      "description": "Additional data provided by the submitter, validated against the JSON Schema referenced by the AR version recorded on this submission. Property keys correspond to top-level property names defined in that schema."
    }
  }
}
```

`org.sagebionetworks.repo.model.dataaccess.schema.PublicSubmissionInfoPageRequest`

```json
{
  "title": "Public Submission Info Page Request",
  "description": "A request body to list publicly-disclosable information from approved submissions for a JsonSchemaAccessRequirement. Only fields whose FormTemplateField is marked isPublic (as of the FormTemplate version each submission was made against) are returned.",
  "properties": {
    "accessRequirementId": {
      "type": "string",
      "description": "The ID of the JsonSchemaAccessRequirement whose approved submissions should be listed."
    },
    "nextPageToken": {
      "type": "string",
      "description": "A token used to get the next page of a particular list request."
    }
  },
  "required": ["accessRequirementId"]
}
```

`org.sagebionetworks.repo.model.dataaccess.schema.PublicSubmissionInfoPage`

```json
{
  "title": "Public Submission Info Page",
  "description": "A single page of publicly-disclosable information from approved submissions. Field definitions are deduplicated by FormTemplate version (templateBundles) since many submissions typically share few template versions; each result row carries only its public values plus a reference to the applicable bundle.",
  "properties": {
    "templateBundles": {
      "type": "array",
      "description": "The form schema/UI bundles for each distinct FormTemplate version referenced by the results on this page. One entry per distinct template version. A result row is joined to its bundle by matching templateRef.",
      "items": {
        "$ref": "org.sagebionetworks.repo.model.dataaccess.schema.PublicSubmissionTemplateBundle"
      }
    },
    "results": {
      "type": "array",
      "description": "The public submission info rows for this page.",
      "items": {
        "$ref": "org.sagebionetworks.repo.model.dataaccess.schema.PublicSubmissionInfo"
      }
    },
    "nextPageToken": {
      "type": "string",
      "description": "A token used to get the next page of a particular list request."
    }
  },
  "required": ["templateBundles", "results"]
}
```

`org.sagebionetworks.repo.model.dataaccess.schema.PublicSubmissionTemplateBundle`

```json
{
  "title": "Public Submission Template Bundle",
  "description": "The rendered form schema and UI Schema for a single FormTemplate version, reused across all result rows that were submitted against that version. Reuses the same GenerateDataAccessSchemaResponse shape returned by the schema generation service so clients can render public submission info through the identical path as the live form. Includes definitions for all fields (both public and private); privacy is enforced solely by which values appear in each row's publicValues.",
  "properties": {
    "templateRef": {
      "$ref": "org.sagebionetworks.repo.model.dataaccess.schema.FormTemplateReference",
      "description": "The FormTemplate id and version this bundle describes."
    },
    "generatedSchema": {
      "$ref": "org.sagebionetworks.repo.model.dataaccess.schema.GenerateDataAccessSchemaResponse",
      "description": "The per-step (jsonSchema, uiSchema) bundle for this template version. The server performs no label/title computation; enum and oneOf label resolution is the client's responsibility."
    }
  },
  "required": ["templateRef", "generatedSchema"]
}
```

`org.sagebionetworks.repo.model.dataaccess.schema.PublicSubmissionInfo`

```json
{
  "title": "Public Submission Info",
  "description": "Publicly-disclosable information from a single approved submission. Contains only values whose FormTemplateField was marked isPublic as of the FormTemplate version this submission was made against (snapshot semantics: later changes to a template's isPublic flags do not retroactively affect this submission). Sensitive information such as accessorChanges is never included.",
  "properties": {
    "templateRef": {
      "$ref": "org.sagebionetworks.repo.model.dataaccess.schema.FormTemplateReference",
      "description": "The FormTemplate id and version this submission was made against. Used to locate the applicable bundle in templateBundles."
    },
    "publicValues": {
      "type": "object",
      "description": "A sparse map of the submission's public answers. Keys are top-level property names (schema paths) that were marked isPublic; values are the submitter's answers for those properties. Non-public properties are omitted entirely."
    },
    "submittedBy": {
      "type": "string",
      "description": "The ID of the user that submitted this submission."
    },
    "modifiedOn": {
      "type": "string",
      "format": "date-time",
      "description": "The date the submission was last modified."
    }
  },
  "required": ["templateRef", "publicValues"]
}
```

### Sequence Diagram Examples

```mermaid
sequenceDiagram
    participant ACT as ACT User
    participant Schema as JSON Schema Service
    participant API as Synapse API

    note over ACT, API: Step 1: Register the JSON Schema for the AR's custom questions (e.g. intendedDataUse)

    ACT->>Schema: POST /schema (existing service)<br/>{schema with intendedDataUse + custom fields}
    Schema-->>ACT: JsonSchemaVersionInfo<br/>{$id: "org.sagebionetworks.example.dar", semanticVersion: "1.0.0"}

    note over ACT, API: Note: institution / PI / signing official are NOT in the schema

    note over ACT, API: Step 2 (optional): Preview the form before saving the template

    ACT->>API: POST /dataAccessSubmission/schema/generate/async/start<br/>GenerateDataAccessSchemaFromTemplateDraft<br/>{templateDraft: {schemaRef, steps: [...]}}
    API-->>ACT: AsyncJobId {token: "job-1"}
    ACT->>API: GET /dataAccessSubmission/schema/generate/async/get/job-1
    API-->>ACT: {steps: [{jsonSchema, uiSchema}, ...]}

    note over ACT, API: Step 3: Save the form template

    ACT->>API: POST /accessRequirement/formTemplate<br/>{name, schemaRef, steps: [...]}
    API-->>ACT: FormTemplate {id: "T1", versionNumber: 1, ...}

    note over ACT, API: Step 4: Create the AR referencing the template<br/>(DUC capability optional, via HasDataUseCertificate interface)

    ACT->>API: POST /accessRequirement<br/>JsonSchemaAccessRequirement<br/>{formTemplateRef: {templateId: "T1", templateVersionNumber: 1},<br/>isDUCRequired: true, eDucTemplateId: "D1", ...}
    API-->>ACT: JsonSchemaAccessRequirement {id: "9000", versionNumber: 1, ...}

    note over ACT, API: A second AR can share the same template (N:1)<br/>and may enable/disable DUC independently

    ACT->>API: POST /accessRequirement<br/>JsonSchemaAccessRequirement<br/>{formTemplateRef: {templateId: "T1", templateVersionNumber: 1},<br/>isDUCRequired: false, ...}
    API-->>ACT: JsonSchemaAccessRequirement {id: "9001", versionNumber: 1, ...}

    note over ACT, API: Later: update the form (relabel a step, add a UI hint)

    ACT->>API: POST /accessRequirement/formTemplate/T1<br/>{etag, name, schemaRef, steps: [updated...]}
    API-->>ACT: FormTemplate {id: "T1", versionNumber: 2, ...}

    note over ACT, API: ARs do not auto-roll. ACT explicitly bumps each AR.

    ACT->>API: PUT /accessRequirement/9000<br/>{formTemplateRef: {templateId: "T1", templateVersionNumber: 2}, ...}
    API-->>ACT: JsonSchemaAccessRequirement {id: "9000", versionNumber: 2, ...}
```

```mermaid
sequenceDiagram
    participant User as Data Requester
    participant UI as Client / UI
    participant API as Synapse API
    participant Worker as Async Worker

    note over User, Worker: Setup: AR 9000 v2 references template T1 v2 (which pins schema S1)

    User->>UI: Wants to download a file protected by AR 9000

    note over User, Worker: Step 1: Determine unmet requirements

    UI->>API: GET /accessRequirement/9000/status
    API-->>UI: AccessRequirementStatus (unmet)

    note over User, Worker: Step 2: Generate the form schema (custom questions only)

    UI->>API: POST /dataAccessSubmission/schema/generate/async/start<br/>GenerateDataAccessSchemaFromAccessRequirement<br/>{accessRequirement: {accessRequirementId: "9000",<br/>accessRequirementVersionNumber: 2}}
    API->>Worker: dispatch job
    API-->>UI: AsyncJobId {token: "job-3"}

    Worker->>Worker: Resolve AR 9000 v2 → template T1 v2 → schema S1
    Worker->>Worker: For each step, slice schema and emit (jsonSchema, uiSchema)
    Worker-->>API: GenerateDataAccessSchemaResponse

    UI->>API: GET /dataAccessSubmission/schema/generate/async/get/job-3
    API-->>UI: {steps: [{jsonSchema, uiSchema}, ...]}

    note over User, Worker: Step 3: User fills out the wizard

    UI->>User: Render fixed section (institution, PI, signing official, accessors)<br/>+ schema-driven steps (jsonSchema + uiSchema)
    User->>UI: Fills first-class fields + custom fields step by step

    note over User, Worker: Step 4: Save draft = create/update the Request (resumable, one per user+AR)

    UI->>API: POST /dataAccessRequest (create-or-update)<br/>{accessRequirementId: "9000", institution, principalInvestigator,<br/>signingOfficial, accessorChanges, schemaData: {intendedDataUse, ...}}
    API-->>UI: Request {id: "R1", etag, ...}

    note over User, Worker: Step 5: (optional) choose eDUC or traditional DUC, then submit synchronously

    UI->>API: POST /dataAccessRequest/R1/submission<br/>CreateSubmissionRequest {requestEtag}

    alt Validation succeeds
        API->>API: Resolve AR 9000 v2 → schema S1<br/>Validate Request.schemaData against S1
        API->>API: Create Submission (requestId = R1,<br/>schemaData snapshotted, researchProjectSnapshot = null)
        API-->>UI: SubmissionStatus {submissionId: "sub-1", state: SUBMITTED}
        UI->>User: Submission created successfully
    else Validation fails
        API->>API: Validate Request.schemaData against S1 → invalid
        API-->>UI: HTTP 400 {reason: "concatenated schema validation messages"}
        UI->>User: Show inline validation errors (client-side, from RJSF)
    end
```

## UI Mockups

The following images are for demonstration purposes only and are subject to change. They may be out-of-date as this design is updated.
![[Pasted image 20260506134426.png]]

Video Demonstration: a video demonstration was added to the Confluence source for this section; it is not recoverable as a static Markdown asset from this export. See the [Confluence page](https://sagebionetworks.jira.com/wiki/spaces/PLFM/pages/4585324546) for the video.

## Open Questions

- Access Requirement updates can now substantially impact the submission requirements (new properties or validation rules may be added, the form layout may be reorganized, etc). How should we handle the following sequence?
  1.  User begins to fill out the data access request form for AR 123, v4 (with a saved draft).
  2.  AR 123 is updated to v5, which references a new schema or template version that adds required properties.
  3.  User creates the submission with AR 123 v4 data.
      - Should the submission be accepted for review by the system? Should we only allow submission against the latest version of the AR (forcing the user to restart)?
      - What about the case where the submission is created, but has not been reviewed, before the AR update?
      - How should the draft service surface drift? (Likely the UI compares the draft's `accessRequirement.accessRequirementVersionNumber` against the current AR version and warns the user, but the contract should be explicit.)

### Preventing duplicate inputs for fields required by eDUC

To support the eDUC flow, we must prompt for certain first-class fields, including PI name, PI email, institution, etc. Should these first-class form fields always be presented statically?

Or must we design a way for the JSON Schema to somehow customize these fields? If the fields must be dynamically controlled by the schema, options include

- eDUC-compatible ARs must include a `$ref` to a schema that describes the eDUC-required fields
- eDUC-compatible ARs must use a JSON Schema that includes properties matching eDUC-required fields.

## Appendix

### GA4GH Passport Visa

The research spike ticket includes the following "bonus" acceptance criteria":

> Assess whether JSON submission can be stored/exchanged on Passport Visa

My assessment is that form responses _could technically_ be encoded in a GA4GH Passport [Custom Visa](https://github.com/ga4gh-duri/ga4gh-duri.github.io/blob/master/researcher_ids/ga4gh_passport_v1.md#custom-visa-types), which is a signed JWT. However, this may not be the best approach to disseminating access request responses. For example, the set of user responses could be very large. Using the Visa protocol to disseminate this kind of information seems counter to the intent of the specification.

### Extension: Conditional Logic and Dynamic Requiredness

At a later date, we could extend the schema/template model to capture richer behaviors that are out of scope for v1:

- Conditional logic (show/hide a property based on other answers)
- Dynamically changing the 'requiredness' of a property based on other answers
- Cross-property validation (e.g. one of two properties must be filled in)

These would likely be expressed in the JSON Schema (using `if`/`then`/`else`, `oneOf`, etc.) with the FormTemplate's UI hints adapting to the schema's conditional structure.

### Extension: Streamlined/Deduplicated Form

A future extension lets a requester applying to multiple ARs fill out one merged form. The v1 design enables this without breaking changes — the cases below describe what the extension would handle.

**Case 1 — same FormTemplate.** ARs sharing a template share a schema and a form. We display a single form, validate against the shared schema, and create one Submission per AR.

**Case 2 — different templates, overlapping questions.** AR1 asks A, B, C; AR2 asks A, B, D; merged form asks A–D once. Question identity is determined by using the same `$ref`s to a registered sub-schema: properties `$ref`'d from the same sub-schema dedupe; properties defined inline do not. Fields without a shared `$ref` are asked once per AR. The client is responsible for facilitating subschema reuse.

We must still decide how to handle UI hint conflicts and step ordering mismatches, but it seems reasonable to just take the first value.
