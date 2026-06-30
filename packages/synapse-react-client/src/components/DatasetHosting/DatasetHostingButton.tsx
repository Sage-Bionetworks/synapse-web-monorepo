import { Chip, CircularProgress, Tooltip } from '@mui/material'
import GetAppTwoTone from '@mui/icons-material/GetAppTwoTone'
import PublicOutlined from '@mui/icons-material/PublicOutlined'
import OpenInNew from '@mui/icons-material/OpenInNew'
import LayersOutlined from '@mui/icons-material/LayersOutlined'
import BlockOutlined from '@mui/icons-material/BlockOutlined'
import { TargetEnum } from '@/utils/html/TargetEnum'
import GenericCardActionButton from '../GenericCard/GenericCardActionButton'
import { useCardActionButtonStyle } from '../GenericCard/CardActionButtonStyleContext'
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

export type DatasetHostingButtonProps = {
  /**
   * The dataset's hosting type. Accepts a raw annotation value (possibly blank,
   * null, or unrecognized); anything unrecognized is treated as `synapse`, which
   * shows a standard Download button.
   */
  hosting?: DatasetHostingType | string | null
  /** Name of the external repository (e.g. "GEO", "dbGaP"), shown in the label/tooltip. */
  repository?: string
  /** Destination for the action when the dataset is not downloadable (e.g. dbGaP/EGA). */
  externalUrl?: string
  /** Invoked when the user clicks the button for a downloadable dataset. */
  onDownloadClick?: () => void
  /** Whether the button should show a loading state (downloadable datasets only). */
  downloadLoading?: boolean
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

const MAX_WIDTH = '260px'

const ELLIPSIS = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  minWidth: 0,
} as const

/**
 * The primary hosting-aware action for a dataset. It communicates how the dataset
 * is hosted and performs the right action: downloadable types trigger the download
 * flow; non-downloadable external types link out ("Access at {repository}"); and
 * `unavailable` is a non-actionable indicator.
 *
 * Its appearance follows the nearest `CardActionButtonStyleContext`:
 *  - `'chip'`   → a colored pill Chip
 *  - `'button'` → the standard outlined GenericCardActionButton (default)
 *
 * Repository names can be long, so the label is capped and ellipsized in both
 * modes, with the full text in the tooltip.
 */
export function DatasetHostingButton(props: DatasetHostingButtonProps) {
  const { hosting, repository, externalUrl, onDownloadClick, downloadLoading } =
    props
  const buttonStyle = useCardActionButtonStyle()
  const config = DATASET_HOSTING_CONFIG[normalizeHosting(hosting)]

  const label = resolveLabel(config, repository)
  const tooltip = fillRepository(config.tooltip, repository)
  const Icon = ICONS[config.icon]

  let control: React.ReactNode
  if (buttonStyle === 'chip') {
    const icon = downloadLoading ? (
      <CircularProgress size={14} color="inherit" />
    ) : (
      <Icon sx={{ fontSize: '16px' }} />
    )
    const commonProps = {
      label,
      icon,
      color: config.color,
      clickable: true,
      sx: {
        fontWeight: 700,
        px: 0.5,
        textDecoration: 'none',
        maxWidth: MAX_WIDTH,
        '& .MuiChip-label': ELLIPSIS,
        // The `warning` palette only defines `main` (gold); force readable dark
        // text + icon (and avoid the anchor's blue link color).
        ...(config.color === 'warning' && {
          color: 'rgba(0, 0, 0, 0.87)',
          '& .MuiChip-label': { ...ELLIPSIS, color: 'rgba(0, 0, 0, 0.87)' },
          '& .MuiChip-icon': { color: 'rgba(0, 0, 0, 0.87)' },
        }),
      },
    } as const

    if (config.downloadable) {
      control = (
        <Chip
          {...commonProps}
          onClick={onDownloadClick}
          disabled={downloadLoading}
        />
      )
    } else if (config.isExternalLink) {
      control = (
        <Chip
          {...commonProps}
          component="a"
          href={externalUrl}
          target={TargetEnum.NEW_WINDOW}
          rel="noopener noreferrer"
          disabled={!externalUrl}
        />
      )
    } else {
      control = <Chip {...commonProps} clickable={false} disabled />
    }
  } else {
    // Button style: the standard outlined action button.
    const startIcon = <Icon sx={{ fontSize: '16px' }} />
    const labelEl = <span style={ELLIPSIS}>{label}</span>
    const sx = { maxWidth: MAX_WIDTH }

    if (config.downloadable) {
      control = (
        <GenericCardActionButton
          variant="outlined"
          startIcon={startIcon}
          onClick={onDownloadClick}
          loading={downloadLoading}
          sx={sx}
        >
          {labelEl}
        </GenericCardActionButton>
      )
    } else if (config.isExternalLink && externalUrl) {
      control = (
        <GenericCardActionButton
          variant="outlined"
          href={externalUrl}
          target={TargetEnum.NEW_WINDOW}
          rel="noopener noreferrer"
          startIcon={startIcon}
          sx={sx}
        >
          {labelEl}
        </GenericCardActionButton>
      )
    } else {
      control = (
        <GenericCardActionButton
          variant="outlined"
          disabled
          startIcon={startIcon}
          sx={sx}
        >
          {labelEl}
        </GenericCardActionButton>
      )
    }
  }

  return tooltip ? (
    <Tooltip title={tooltip} arrow placement="top">
      {/* span lets the tooltip work even when the control is disabled */}
      <span>{control}</span>
    </Tooltip>
  ) : (
    control
  )
}

export default DatasetHostingButton
