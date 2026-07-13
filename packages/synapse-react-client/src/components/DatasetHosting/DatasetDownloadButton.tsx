import { Tooltip, Typography } from '@mui/material'
import GetAppTwoTone from '@mui/icons-material/GetAppTwoTone'
import PublicOutlined from '@mui/icons-material/PublicOutlined'
import OpenInNew from '@mui/icons-material/OpenInNew'
import LayersOutlined from '@mui/icons-material/LayersOutlined'
import BlockOutlined from '@mui/icons-material/BlockOutlined'
import ArrowDropDown from '@mui/icons-material/ArrowDropDown'
import { ReactNode, RefObject } from 'react'
import { EntityType } from '@sage-bionetworks/synapse-client'
import { TargetEnum } from '@/utils/html/TargetEnum'
import GenericCardActionButton from '../GenericCard/GenericCardActionButton'
import { EntityDownloadButton } from '../EntityDownloadButton/EntityDownloadButton'
import {
  DATASET_HOSTING_CONFIG,
  DatasetHostingConfig,
  DatasetHostingType,
  fillRepository,
  normalizeHosting,
} from './DatasetHosting'

const ICONS = {
  download: GetAppTwoTone,
  external: PublicOutlined,
  launch: OpenInNew,
  mixed: LayersOutlined,
  unavailable: BlockOutlined,
} as const

export type DatasetDownloadButtonProps = {
  /** The dataset entity id (synId); required to offer download options. */
  entityId?: string
  /** The dataset name, shown in the download dialogs. */
  name: string
  /**
   * The dataset's hosting type. Accepts a raw annotation value (possibly blank,
   * null, or unrecognized); anything unrecognized is treated as `synapse`.
   */
  hosting?: DatasetHostingType | string | null
  /** Name of the external repository (e.g. "GEO", "dbGaP"), shown in the label/tooltip. */
  repository?: string
  /** Destination for the action when the dataset is not downloadable (e.g. dbGaP/EGA). */
  externalUrl?: string
  disabled?: boolean
  /** Portal target for the download-confirmation dialog (see EntityDownloadButton). */
  downloadConfirmationContainer?: RefObject<HTMLElement | null>
}

function resolveLabel(
  config: DatasetHostingConfig,
  repository?: string,
): string {
  if (config.label.includes('{repository}') && !repository) {
    return config.labelWithoutRepository ?? config.label
  }
  return fillRepository(config.label, repository) ?? config.label
}

const MAX_WIDTH = '320px'

const ELLIPSIS = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  minWidth: 0,
} as const

// The composed labels ("Download from GEO", "Access at dbGaP") are already
// sentence-cased, so opt out of the theme button's capitalize transform. `color:
// inherit` lets the label take the button's color so text and icon always match
// (the buttonLink typography would otherwise force its own dark color).
const LABEL_SX = {
  ...ELLIPSIS,
  textTransform: 'none',
  color: 'inherit',
} as const

/**
 * The hosting-aware primary action for a dataset. `hosting` only modulates the
 * standard download affordance; it never invents a parallel download path:
 *  - downloadable types render the shared {@link EntityDownloadButton} — identical
 *    options (Add to Download List, Programmatic Access, Export Table) and behavior
 *    across portals — with the hosting label/icon and the caveat in the tooltip
 *  - `external-access` swaps in an "Access at {repository}" link-out
 *  - `unavailable` is a disabled, non-actionable indicator
 *
 * Its appearance follows the nearest `CardActionButtonStyleContext` (via
 * `GenericCardActionButton`), so it matches the card's other action buttons.
 */
export function DatasetDownloadButton(props: DatasetDownloadButtonProps) {
  const {
    entityId,
    name,
    hosting,
    repository,
    externalUrl,
    disabled,
    downloadConfirmationContainer,
  } = props
  const config = DATASET_HOSTING_CONFIG[normalizeHosting(hosting)]

  const label = resolveLabel(config, repository)
  const tooltip = fillRepository(config.tooltip, repository)
  const Icon = ICONS[config.icon]

  if (config.downloadable && entityId) {
    return (
      <EntityDownloadButton
        entityId={entityId}
        name={name}
        entityType={EntityType.dataset}
        disabled={disabled}
        hideExportTable
        downloadConfirmationContainer={downloadConfirmationContainer}
        dropdownButtonText={label}
        buttonTooltip={tooltip}
        ButtonComponent={GenericCardActionButton}
        buttonProps={{
          startIcon: <Icon sx={{ fontSize: '16px' }} />,
          endIcon: <ArrowDropDown />,
          sx: {
            maxWidth: MAX_WIDTH,
            textTransform: 'none',
            '& .MuiTypography-root': LABEL_SX,
          },
        }}
      />
    )
  }

  const labelEl = (
    <Typography variant="buttonLink" sx={LABEL_SX}>
      {label}
    </Typography>
  )
  const control: ReactNode =
    config.isExternalLink && externalUrl ? (
      <GenericCardActionButton
        variant="outlined"
        href={externalUrl}
        target={TargetEnum.NEW_WINDOW}
        rel="noopener noreferrer"
        startIcon={<Icon sx={{ fontSize: '16px' }} />}
        sx={{
          maxWidth: MAX_WIDTH,
          textTransform: 'none',
          // As an <a>, a visited link would otherwise darken to primary.dark
          // (theme rule), making it look different from the button-rendered
          // download actions. Keep the resting color consistent.
          '&:visited': { color: 'primary.main' },
        }}
      >
        {labelEl}
      </GenericCardActionButton>
    ) : (
      <GenericCardActionButton
        variant="outlined"
        disabled
        startIcon={<Icon sx={{ fontSize: '16px' }} />}
        sx={{ maxWidth: MAX_WIDTH, textTransform: 'none' }}
      >
        {labelEl}
      </GenericCardActionButton>
    )

  return tooltip ? (
    <Tooltip title={tooltip} arrow placement="top">
      {/* span lets the tooltip work even when the control is disabled */}
      <span>{control}</span>
    </Tooltip>
  ) : (
    control
  )
}

export default DatasetDownloadButton
