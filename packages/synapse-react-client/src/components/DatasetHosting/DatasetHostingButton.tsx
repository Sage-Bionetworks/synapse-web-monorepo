import { Chip, CircularProgress, Tooltip } from '@mui/material'
import GetAppTwoTone from '@mui/icons-material/GetAppTwoTone'
import PublicOutlined from '@mui/icons-material/PublicOutlined'
import OpenInNew from '@mui/icons-material/OpenInNew'
import LayersOutlined from '@mui/icons-material/LayersOutlined'
import BlockOutlined from '@mui/icons-material/BlockOutlined'
import { TargetEnum } from '@/utils/html/TargetEnum'
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

/**
 * A single chip-style button that both communicates how a dataset is hosted and
 * performs the right action for it:
 *  - downloadable datasets → a "Download" / "Download from {repository}" chip that
 *    triggers the download flow (the hosting caveat lives in the tooltip)
 *  - non-downloadable datasets (e.g. dbGaP/EGA) → an "Access at {repository}" chip
 *    that links out to the external repository
 *
 * Collapsing the badge and the action into one control keeps the card uncluttered
 * and guarantees a non-downloadable dataset never shows a download affordance that
 * wouldn't work. The same control governs cards and detail headers.
 */
export function DatasetHostingButton(props: DatasetHostingButtonProps) {
  const { hosting, repository, externalUrl, onDownloadClick, downloadLoading } =
    props
  const config = DATASET_HOSTING_CONFIG[normalizeHosting(hosting)]

  const label = resolveLabel(config, repository)
  const tooltip = fillRepository(config.tooltip, repository)
  const Icon = ICONS[config.icon]
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
      // The `warning` palette only defines `main` (gold), so MUI's auto contrast
      // text is low-contrast; and as an anchor the chip would otherwise inherit the
      // browser's blue link color. Force a dark, readable label + icon on the gold.
      ...(config.color === 'warning' && {
        color: 'rgba(0, 0, 0, 0.87)',
        '& .MuiChip-label': { color: 'rgba(0, 0, 0, 0.87)' },
        '& .MuiChip-icon': { color: 'rgba(0, 0, 0, 0.87)' },
      }),
    },
  } as const

  let chip
  if (config.downloadable) {
    chip = (
      <Chip
        {...commonProps}
        onClick={onDownloadClick}
        disabled={downloadLoading}
      />
    )
  } else if (config.isExternalLink) {
    // The external repository is the only access path, so require a URL to act.
    chip = (
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
    // No action available (e.g. `unavailable`): a non-clickable, disabled chip.
    chip = <Chip {...commonProps} clickable={false} disabled />
  }

  return tooltip ? (
    <Tooltip title={tooltip} arrow placement="top">
      {/* span lets the tooltip work even when the chip is disabled */}
      <span>{chip}</span>
    </Tooltip>
  ) : (
    chip
  )
}

export default DatasetHostingButton
