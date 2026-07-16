import { Tooltip, Typography } from '@mui/material'
import GetAppTwoTone from '@mui/icons-material/GetAppTwoTone'
import PublicOutlined from '@mui/icons-material/PublicOutlined'
import OpenInNew from '@mui/icons-material/OpenInNew'
import LayersOutlined from '@mui/icons-material/LayersOutlined'
import BlockOutlined from '@mui/icons-material/BlockOutlined'
import AssuredWorkloadOutlined from '@mui/icons-material/AssuredWorkloadOutlined'
import LoginOutlined from '@mui/icons-material/LoginOutlined'
import { ReactNode, RefObject, useState } from 'react'
import { createPortal } from 'react-dom'
import { TargetEnum } from '@/utils/html/TargetEnum'
import { SRC_SIGN_IN_CLASS } from '@/utils/SynapseConstants'
import { useSynapseContext } from '@/utils'
import GenericCardActionButton from '../GenericCard/GenericCardActionButton'
import { EntityDownloadConfirmation } from '../EntityDownloadConfirmation'
import {
  DATASET_HOSTING_CONFIG,
  DatasetHostingConfig,
  DatasetHostingType,
  fillRepository,
  normalizeHosting,
} from './DatasetHosting'

const ICONS = {
  download: GetAppTwoTone,
  cloud: AssuredWorkloadOutlined,
  external: PublicOutlined,
  launch: OpenInNew,
  mixed: LayersOutlined,
  unavailable: BlockOutlined,
} as const

export type DatasetDownloadButtonProps = {
  /** The dataset entity id (synId); required to offer the download action. */
  entityId?: string
  /** The dataset name, shown in the download confirmation. */
  name: string
  /** The dataset version to add to the download list, if any. */
  version?: number
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
  /** Portal target for the download-confirmation dialog (see EntityDownloadConfirmation). */
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
// inherit` lets the label take the button's color so text and icon always match.
const LABEL_SX = {
  ...ELLIPSIS,
  textTransform: 'none',
  color: 'inherit',
} as const

/**
 * The hosting-aware primary action for a dataset. `hosting` only modulates the
 * standard download affordance; it never invents a parallel download path:
 *  - downloadable types add the dataset to the user's download list (the only
 *    download path); when signed out, the button stays clickable and flips to a
 *    red "Sign in to download" call-to-action that opens the app's sign-in modal
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
    version,
    hosting,
    repository,
    externalUrl,
    disabled,
    downloadConfirmationContainer,
  } = props
  const { isAuthenticated } = useSynapseContext()
  const config = DATASET_HOSTING_CONFIG[normalizeHosting(hosting)]

  const label = resolveLabel(config, repository)
  const caveat = fillRepository(config.tooltip, repository)
  const Icon = ICONS[config.icon]

  const [showConfirmation, setShowConfirmation] = useState(false)
  const [isAdding, setIsAdding] = useState(false)
  const [signInPrompt, setSignInPrompt] = useState(false)

  const labelEl = (
    <Typography variant="buttonLink" sx={LABEL_SX}>
      {label}
    </Typography>
  )
  // Every card's button shows the same visible label ("Download"), so include the
  // dataset name in the accessible name to distinguish them for screen readers.
  const ariaLabel = `${label}, ${name}`

  // Downloadable: a single button that adds the dataset to the download list.
  if (config.downloadable && entityId) {
    // Signed out: keep the button clickable as a call to action rather than
    // greying it out. The first click flips it to a red "Sign in to download"
    // prompt that opens the app's sign-in modal (SRC_SIGN_IN_CLASS).
    if (!isAuthenticated) {
      const PromptIcon = signInPrompt ? LoginOutlined : Icon
      const promptLabel = signInPrompt ? 'Sign in to download' : label
      const button = (
        <GenericCardActionButton
          variant="outlined"
          color={signInPrompt ? 'error' : 'primary'}
          aria-label={`${promptLabel}, ${name}`}
          className={signInPrompt ? SRC_SIGN_IN_CLASS : undefined}
          startIcon={<PromptIcon sx={{ fontSize: '16px' }} />}
          onClick={event => {
            if (!signInPrompt) {
              // Swallow this first click: React adds SRC_SIGN_IN_CLASS during the
              // flush, before the event bubbles to the window-level sign-in
              // handler, which would otherwise fire on this same click. The next
              // click on the red CTA bubbles through and triggers sign-in.
              event.stopPropagation()
              setSignInPrompt(true)
            }
          }}
          sx={{ maxWidth: MAX_WIDTH, textTransform: 'none' }}
        >
          <Typography variant="buttonLink" sx={LABEL_SX}>
            {promptLabel}
          </Typography>
        </GenericCardActionButton>
      )
      // Before the prompt, keep the hosting caveat tooltip; once prompting, the
      // red label is the notice, so no tooltip.
      return !signInPrompt && caveat ? (
        <Tooltip title={caveat} arrow placement="top">
          <span>{button}</span>
        </Tooltip>
      ) : (
        button
      )
    }

    // Signed in: add the dataset to the download list.
    const button = (
      <GenericCardActionButton
        variant="outlined"
        aria-label={ariaLabel}
        startIcon={<Icon sx={{ fontSize: '16px' }} />}
        onClick={() => setShowConfirmation(value => !value)}
        disabled={disabled || isAdding}
        sx={{ maxWidth: MAX_WIDTH, textTransform: 'none' }}
      >
        {labelEl}
      </GenericCardActionButton>
    )
    const confirmation = showConfirmation ? (
      <EntityDownloadConfirmation
        entityId={entityId}
        versionNumber={version}
        onIsLoadingChange={setIsAdding}
        handleClose={() => setShowConfirmation(false)}
      />
    ) : null
    return (
      <>
        {caveat ? (
          <Tooltip title={caveat} arrow placement="top">
            <span>{button}</span>
          </Tooltip>
        ) : (
          button
        )}
        {confirmation &&
          (downloadConfirmationContainer?.current
            ? createPortal(confirmation, downloadConfirmationContainer.current)
            : confirmation)}
      </>
    )
  }

  // Not downloadable: link out to the external repository, or a disabled indicator.
  const control: ReactNode =
    config.isExternalLink && externalUrl ? (
      <GenericCardActionButton
        variant="outlined"
        aria-label={ariaLabel}
        href={externalUrl}
        target={TargetEnum.NEW_WINDOW}
        rel="noopener noreferrer"
        startIcon={<Icon sx={{ fontSize: '16px' }} />}
        sx={{
          maxWidth: MAX_WIDTH,
          textTransform: 'none',
          // As an <a>, a visited link would otherwise darken to primary.dark
          // (theme rule); keep the resting color consistent with the buttons.
          '&:visited': { color: 'primary.main' },
        }}
      >
        {labelEl}
      </GenericCardActionButton>
    ) : (
      <GenericCardActionButton
        variant="outlined"
        aria-label={ariaLabel}
        disabled
        startIcon={<Icon sx={{ fontSize: '16px' }} />}
        sx={{ maxWidth: MAX_WIDTH, textTransform: 'none' }}
      >
        {labelEl}
      </GenericCardActionButton>
    )

  return caveat ? (
    <Tooltip title={caveat} arrow placement="top">
      {/* span lets the tooltip work even when the control is disabled */}
      <span>{control}</span>
    </Tooltip>
  ) : (
    control
  )
}

export default DatasetDownloadButton
