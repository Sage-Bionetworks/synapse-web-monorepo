import { getJsonSchemaVersionsQuery } from '@/synapse-queries'
import { useSynapseContext } from '@/utils/context/SynapseContext'
import {
  JsonSchemaInfo,
  JsonSchemaVersionInfo,
} from '@sage-bionetworks/synapse-client'
import {
  functionalUpdate,
  OnChangeFn,
  RowSelectionState,
} from '@tanstack/react-table'
import { useQueryClient } from '@tanstack/react-query'
import { useMemo, useRef, useState } from 'react'
import { VersionSelectionType } from './VersionSelectionType'

export type JsonSchemaSelection = {
  $id?: string
  versionInfo?: JsonSchemaVersionInfo
}

export function getSchemaId(schema: JsonSchemaInfo): string {
  return schema.schemaId ?? schema.schemaName ?? ''
}

function buildUnversionedSchemaId(schema: JsonSchemaInfo): string {
  return `${schema.organizationName}-${schema.schemaName}`
}

/**
 * Computes the `JsonSchemaSelection` to report to the consumer for a given schema/version/
 * VersionSelectionType combination.
 */
function resolveSelection(
  schema: JsonSchemaInfo | undefined,
  versionInfo: JsonSchemaVersionInfo | undefined,
  versionSelectionType: VersionSelectionType,
): JsonSchemaSelection | undefined {
  if (!schema) {
    return undefined
  }
  if (versionSelectionType === VersionSelectionType.REQUIRED && !versionInfo) {
    // Waiting for a numbered version to be resolved before reporting a selection.
    return undefined
  }
  if (versionInfo) {
    return { $id: versionInfo.$id, versionInfo }
  }
  return { $id: buildUnversionedSchemaId(schema), versionInfo: undefined }
}

export type UseJsonSchemaSelectionParams = {
  schemas: JsonSchemaInfo[]
  versionSelectionType: VersionSelectionType
  onSelectionChange: (selection: JsonSchemaSelection | undefined) => void
  /**
   * The initially-selected schema/version, e.g. when editing an existing selection. Only
   * consulted on mount (via useState's lazy initializer) -- to react to a changed
   * `initialSelected`, remount this hook's consumer with a new `key`, rather than updating this
   * prop in place.
   */
  initialSelected?: JsonSchemaSelection
}

/**
 * Manages which JsonSchema (and, depending on `versionSelectionType`, which version of that
 * schema) is currently selected, and reports the resolved selection to `onSelectionChange`.
 *
 * Under {@link VersionSelectionType.REQUIRED}, selecting a schema with no version yet chosen
 * kicks off a fetch of every version, and auto-selects the latest one once it resolves.
 */
export function useJsonSchemaSelection(params: UseJsonSchemaSelectionParams) {
  const { schemas, versionSelectionType, onSelectionChange, initialSelected } =
    params
  const { synapseClient, keyFactory } = useSynapseContext()
  const queryClient = useQueryClient()

  const [rowSelection, setRowSelection] = useState<RowSelectionState>(() => {
    const initialSchemaId = initialSelected?.versionInfo
      ? (initialSelected.versionInfo.schemaId ??
        initialSelected.versionInfo.schemaName)
      : undefined
    return initialSchemaId ? { [initialSchemaId]: true } : {}
  })
  const [selectedVersionInfo, setSelectedVersionInfo] = useState<
    JsonSchemaVersionInfo | undefined
  >(initialSelected?.versionInfo)

  // Mirror the state above so the async continuation in handleRowSelectionChange (below) can
  // check the *current* selection when its fetch resolves, rather than the (possibly stale)
  // values closed over at the time the fetch was kicked off.
  const rowSelectionRef = useRef(rowSelection)
  rowSelectionRef.current = rowSelection
  const selectedVersionInfoRef = useRef(selectedVersionInfo)
  selectedVersionInfoRef.current = selectedVersionInfo

  const selectedSchema = useMemo(() => {
    const id = Object.keys(rowSelection).find(key => rowSelection[key])
    return schemas.find(schema => getSchemaId(schema) === id)
  }, [rowSelection, schemas])

  const applyVersionSelection = (
    schema: JsonSchemaInfo | undefined,
    versionInfo: JsonSchemaVersionInfo | undefined,
  ) => {
    setSelectedVersionInfo(versionInfo)
    onSelectionChange(
      resolveSelection(schema, versionInfo, versionSelectionType),
    )
  }

  const handleVersionChange = (
    versionInfo: JsonSchemaVersionInfo | undefined,
  ) => {
    applyVersionSelection(selectedSchema, versionInfo)
  }

  const handleRowSelectionChange: OnChangeFn<
    RowSelectionState
  > = updaterOrValue => {
    const newRowSelection = functionalUpdate(updaterOrValue, rowSelection)
    const newSelectedId = Object.keys(newRowSelection).find(
      key => newRowSelection[key],
    )
    const newSelectedSchema = schemas.find(
      schema => getSchemaId(schema) === newSelectedId,
    )

    setRowSelection(newRowSelection)
    setSelectedVersionInfo(undefined)
    onSelectionChange(
      resolveSelection(newSelectedSchema, undefined, versionSelectionType),
    )

    if (
      newSelectedSchema &&
      versionSelectionType === VersionSelectionType.REQUIRED
    ) {
      const schemaId = getSchemaId(newSelectedSchema)
      void queryClient
        .fetchQuery(
          getJsonSchemaVersionsQuery(
            newSelectedSchema.organizationName ?? '',
            newSelectedSchema.schemaName ?? '',
            { synapseClient, keyFactory },
          ),
        )
        .then(versions => {
          const stillSelected = rowSelectionRef.current[schemaId] === true
          const noManualPickYet = selectedVersionInfoRef.current == null
          // The API returns versions lowest-to-highest, so the latest is the last element.
          const latest = versions.at(-1)
          if (stillSelected && noManualPickYet && latest) {
            // Apply against the schema this fetch was for -- not `selectedSchema`, whose
            // closure here is fixed to this render and may be stale by the time this resolves.
            applyVersionSelection(newSelectedSchema, latest)
          }
        })
        .catch(() => {
          // Swallow -- JsonSchemaVersionCell's own query for the same key surfaces the error
          // in the UI; this fetch only exists to opportunistically auto-select "latest."
        })
    }
  }

  return {
    rowSelection,
    selectedVersionInfo,
    selectedSchema,
    handleRowSelectionChange,
    handleVersionChange,
  }
}
