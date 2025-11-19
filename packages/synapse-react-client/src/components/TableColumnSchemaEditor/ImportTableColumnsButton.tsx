import SynapseClient from '@/synapse-client'
import { useSynapseContext } from '@/utils'
import { EntityTypeGroup } from '@/utils/functions/EntityTypeUtils'
import { DownloadTwoTone } from '@mui/icons-material'
import Button, { ButtonProps } from '@/react-ui/components/Button'
import { EntityType } from '@sage-bionetworks/synapse-client'
import { ColumnModel, Reference } from '@sage-bionetworks/synapse-types'
import { useCallback, useState } from 'react'
import { SetOptional } from 'type-fest'
import { EntityFinderModal } from '../EntityFinder/EntityFinderModal'
import { FinderScope } from '../EntityFinder/tree/EntityTree'
import { VersionSelectionType } from '../EntityFinder/VersionSelectionType'
import { displayToast } from '../ToastMessage'

export type ImportTableColumnsButtonProps = Omit<ButtonProps, 'onClick'> & {
  initialFinderProjectId?: string
  onAddColumns: (columnModels: SetOptional<ColumnModel, 'id'>[]) => void
}

export default function ImportTableColumnsButton(
  props: ImportTableColumnsButtonProps,
) {
  const { initialFinderProjectId, onAddColumns, ...buttonProps } = props
  const [showFinder, setShowFinder] = useState(false)
  const { accessToken } = useSynapseContext()

  const fetchColumnModels = useCallback(
    async (reference: Reference): Promise<SetOptional<ColumnModel, 'id'>[]> => {
      const { tableBundle } = await SynapseClient.getEntityBundleV2(
        reference.targetId,
        { includeTableBundle: true },
        reference.targetVersionNumber,
        accessToken,
      )
      return tableBundle!.columnModels.map(columnModel => ({
        ...columnModel,
        id: undefined,
      }))
    },
    [accessToken],
  )

  const onConfirmEntityFinder = useCallback(
    async (selected: Reference[]) => {
      try {
        const selectedEntity = selected[0]

        if (selectedEntity) {
          // Get the column models from the selected table
          const columnModels = await fetchColumnModels(selectedEntity)
          onAddColumns(columnModels)
        }
      } catch (err) {
        console.error(err)
        displayToast(err.message, 'danger')
      } finally {
        setShowFinder(false)
      }
    },
    [fetchColumnModels, onAddColumns],
  )

  return (
    <>
      <EntityFinderModal
        configuration={{
          initialScope: initialFinderProjectId
            ? FinderScope.CURRENT_PROJECT
            : FinderScope.ALL_PROJECTS,
          initialContainer: initialFinderProjectId ?? 'root',
          selectMultiple: false,
          selectableTypes: EntityTypeGroup.ALL_TABLES,
          visibleTypesInTree: [EntityType.project],
          versionSelection: VersionSelectionType.UNTRACKED,
        }}
        show={showFinder}
        title={'Import Columns from Table'}
        promptCopy={'Find Tables to import columns'}
        titleHelpPopoverProps={{
          markdownText:
            'Search or Browse Synapse to find an existing Table in order to import columns into this Table',
        }}
        onConfirm={selected => {
          onConfirmEntityFinder(selected)
        }}
        confirmButtonCopy={'Import Columns'}
        onCancel={() => {
          setShowFinder(false)
        }}
      />
      <Button
        variant={'outlined'}
        onClick={() => {
          setShowFinder(true)
        }}
        startIcon={<DownloadTwoTone />}
        {...buttonProps}
      >
        Import Columns
      </Button>
    </>
  )
}
