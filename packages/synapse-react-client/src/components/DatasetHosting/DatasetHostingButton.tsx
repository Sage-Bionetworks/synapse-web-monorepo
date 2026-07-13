import {
  Box,
  ButtonGroup,
  Chip,
  CircularProgress,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Tooltip,
} from '@mui/material'
import GetAppTwoTone from '@mui/icons-material/GetAppTwoTone'
import PublicOutlined from '@mui/icons-material/PublicOutlined'
import OpenInNew from '@mui/icons-material/OpenInNew'
import LayersOutlined from '@mui/icons-material/LayersOutlined'
import BlockOutlined from '@mui/icons-material/BlockOutlined'
import AddShoppingCartOutlined from '@mui/icons-material/AddShoppingCartOutlined'
import ArrowDropDown from '@mui/icons-material/ArrowDropDown'
import { ComponentType, MouseEvent, ReactNode, useState } from 'react'
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

const ADD_TO_CART_LABEL = 'Add to Download Cart'

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
  /**
   * Direct-download action for a downloadable dataset. When supplied together with
   * `onAddToCartClick`, the control becomes a split button offering both actions.
   */
  onDownloadClick?: () => void
  /**
   * Add-to-download-cart action for a downloadable dataset. When supplied together
   * with `onDownloadClick`, the control becomes a split button offering both actions.
   */
  onAddToCartClick?: () => void
  /**
   * Which action the split button's primary (main) click performs. Only relevant
   * when both `onDownloadClick` and `onAddToCartClick` are provided.
   * @default 'cart'
   */
  primaryAction?: 'download' | 'cart'
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

type SplitAction = {
  key: 'download' | 'cart'
  label: string
  Icon: ComponentType<{ sx?: object }>
  onClick: () => void
}

/**
 * A split button offering two download actions: the primary runs on the main
 * click; the caret opens a menu listing both so the user can pick either.
 * Renders as a `Chip` (chip style) or a MUI `ButtonGroup` (button style).
 */
function DownloadSplitControl(props: {
  style: 'chip' | 'button'
  primary: SplitAction
  actions: SplitAction[]
  loading?: boolean
}) {
  const { style, primary, actions, loading } = props
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const openMenu = (e: MouseEvent<HTMLElement>) => setAnchorEl(e.currentTarget)
  const closeMenu = () => setAnchorEl(null)

  const control =
    style === 'chip' ? (
      <Box
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 0.25,
          maxWidth: MAX_WIDTH,
        }}
      >
        <Chip
          color="primary"
          clickable
          onClick={primary.onClick}
          disabled={loading}
          icon={
            loading ? (
              <CircularProgress size={14} color="inherit" />
            ) : (
              <primary.Icon sx={{ fontSize: '16px' }} />
            )
          }
          label={primary.label}
          sx={{
            fontWeight: 700,
            height: '32px',
            px: 0.5,
            minWidth: 0,
            '& .MuiChip-label': ELLIPSIS,
          }}
        />
        <IconButton
          aria-label="More download options"
          size="small"
          color="primary"
          onClick={openMenu}
          disabled={loading}
        >
          <ArrowDropDown />
        </IconButton>
      </Box>
    ) : (
      <ButtonGroup variant="outlined" sx={{ maxWidth: MAX_WIDTH }}>
        <GenericCardActionButton
          variant="outlined"
          onClick={primary.onClick}
          loading={loading}
          startIcon={<primary.Icon sx={{ fontSize: '16px' }} />}
        >
          <span style={ELLIPSIS}>{primary.label}</span>
        </GenericCardActionButton>
        <GenericCardActionButton
          variant="outlined"
          aria-label="More download options"
          onClick={openMenu}
          sx={{ px: 0, minWidth: '32px' }}
        >
          <ArrowDropDown />
        </GenericCardActionButton>
      </ButtonGroup>
    )

  return (
    <>
      {control}
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={closeMenu}>
        {actions.map(action => (
          <MenuItem
            key={action.key}
            selected={action.key === primary.key}
            onClick={() => {
              closeMenu()
              action.onClick()
            }}
          >
            <ListItemIcon>
              <action.Icon sx={{ fontSize: '20px' }} />
            </ListItemIcon>
            <ListItemText>{action.label}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}

/**
 * The primary hosting-aware action for a dataset. It communicates how the dataset
 * is hosted and performs the right action: downloadable types trigger the download
 * flow; non-downloadable external types link out ("Access at {repository}"); and
 * `unavailable` is a non-actionable indicator.
 *
 * When a downloadable dataset supplies both `onDownloadClick` and `onAddToCartClick`,
 * the control becomes a split button: the primary click performs `primaryAction`
 * (add-to-cart by default) and a caret menu offers both actions.
 *
 * Its appearance follows the nearest `CardActionButtonStyleContext`:
 *  - `'chip'`   → a colored pill Chip
 *  - `'button'` → the standard outlined GenericCardActionButton (default)
 *
 * Repository names can be long, so the label is capped and ellipsized in both
 * modes, with the full text in the tooltip.
 */
export function DatasetHostingButton(props: DatasetHostingButtonProps) {
  const {
    hosting,
    repository,
    externalUrl,
    onDownloadClick,
    onAddToCartClick,
    primaryAction = 'cart',
    downloadLoading,
  } = props
  const buttonStyle = useCardActionButtonStyle()
  const config = DATASET_HOSTING_CONFIG[normalizeHosting(hosting)]

  const label = resolveLabel(config, repository)
  const tooltip = fillRepository(config.tooltip, repository)
  const Icon = ICONS[config.icon]

  // A downloadable dataset that supplies both actions gets a split button.
  const hasBothActions = Boolean(onDownloadClick && onAddToCartClick)
  // A single action falls back to whichever handler was provided.
  const singleDownloadHandler = onDownloadClick ?? onAddToCartClick

  let control: ReactNode
  if (config.downloadable && hasBothActions) {
    const downloadAction: SplitAction = {
      key: 'download',
      label,
      Icon,
      onClick: onDownloadClick!,
    }
    const cartAction: SplitAction = {
      key: 'cart',
      label: ADD_TO_CART_LABEL,
      Icon: AddShoppingCartOutlined,
      onClick: onAddToCartClick!,
    }
    control = (
      <DownloadSplitControl
        style={buttonStyle}
        primary={primaryAction === 'download' ? downloadAction : cartAction}
        actions={[cartAction, downloadAction]}
        loading={downloadLoading}
      />
    )
  } else if (buttonStyle === 'chip') {
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
        // Match the 32px height of the pill-style GenericCardActionButton so all
        // chip-mode action buttons line up.
        height: '32px',
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
          onClick={singleDownloadHandler}
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
          onClick={singleDownloadHandler}
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
