/**
 * Classifies a dataset by where its files are hosted and whether they can be
 * downloaded through Synapse clients. Portals supply this value from a dataset
 * annotation column (e.g. `hostingType`) since dataset cards are query/annotation
 * driven and do not have access to the underlying file handles.
 *
 * The four values map onto two orthogonal realities:
 *  - WHERE the files live (Synapse-managed storage vs. a third-party location)
 *  - WHETHER Synapse clients can download them (yes vs. access is handled elsewhere)
 *
 * They are collapsed into a single enum so a card can show one predictable,
 * scannable signal.
 */
export type DatasetHostingType =
  /** Files are in Synapse/Sage-managed storage (S3/GCP). Standard, fast download. The default. */
  | 'synapse'
  /**
   * Files are in a cloud bucket owned by a third party (non-Sage S3/GCP, external
   * object store). Downloadable identically to Synapse-hosted files, but the bucket
   * owner could remove them.
   */
  | 'external-cloud'
  /**
   * Dataset links to files in an external repository (e.g. GEO, ENA) that are
   * directly downloadable through Synapse clients, but served from an external
   * server — so downloads may be slow or links could become dead over time.
   */
  | 'external-download'
  /**
   * Dataset links to data that is NOT downloadable through Synapse (e.g. dbGaP,
   * EGA). Records are placeholders for data held behind an external access
   * process. No download is offered; the user is sent to the external repository.
   */
  | 'external-access'
  /**
   * Files in the dataset span more than one location — some are downloadable
   * through Synapse and some are hosted/controlled externally. Download is still
   * offered (it retrieves the Synapse-available subset), but the label and tooltip
   * flag that the rest must be obtained separately.
   */
  | 'mixed'
  /**
   * The dataset is a record/placeholder whose data is not downloadable through
   * Synapse, and there is no external repository to send the user to either
   * (unlike `external-access`). No download or link action is offered — the card
   * just signals that the data isn't available for download.
   */
  | 'unavailable'

export type DatasetHostingConfig = {
  /** Whether the dataset's files can be downloaded through Synapse clients. */
  downloadable: boolean
  /**
   * If true (and not downloadable), the primary action links out to an external
   * repository (uses externalUrl). If false/absent and not downloadable, the card
   * shows a non-actionable "not available" chip instead of a link.
   */
  isExternalLink?: boolean
  /**
   * Label shown on the chip-style action button. `{repository}` is substituted
   * with the repository name when provided; if the template references
   * `{repository}` but none is given, `labelWithoutRepository` is used instead.
   */
  label: string
  /** Fallback label when the template needs a repository but none was provided. */
  labelWithoutRepository?: string
  /** Tooltip summarizing the hosting/download caveat. `{repository}` is substituted. */
  tooltip?: string
  /** MUI Chip color used for the button. `default` = neutral/non-actionable. */
  color: 'primary' | 'warning' | 'default'
  /**
   * Icon shown on the button, encoding where the data lives relative to Synapse:
   *  - `download`: native, stored in Synapse
   *  - `cloud`: third-party managed cloud bucket
   *  - `external`: hosted outside Synapse but still downloadable
   *  - `launch`: not downloadable here — the user leaves Synapse to access it
   *  - `mixed`: files live in more than one location
   *  - `unavailable`: not available for download, with no external destination
   */
  icon: 'download' | 'cloud' | 'external' | 'launch' | 'mixed' | 'unavailable'
}

export const DATASET_HOSTING_CONFIG: Record<
  DatasetHostingType,
  DatasetHostingConfig
> = {
  synapse: {
    downloadable: true,
    label: 'Download',
    color: 'primary',
    icon: 'download',
    // No caveat — the default, expected experience.
  },
  'external-cloud': {
    downloadable: true,
    label: 'Download',
    color: 'primary',
    icon: 'cloud',
    tooltip:
      'Files are stored in a cloud bucket maintained by a third party. They download the same way as Synapse-hosted files, but the bucket owner could remove them in the future.',
  },
  'external-download': {
    downloadable: true,
    label: 'Download from {repository}',
    labelWithoutRepository: 'Download from external repository',
    color: 'primary',
    icon: 'external',
    tooltip:
      'Files are downloaded from an external repository ({repository}). Downloads route through that repository, so they may be slower or occasionally unavailable.',
  },
  'external-access': {
    downloadable: false,
    isExternalLink: true,
    label: 'Access at {repository}',
    labelWithoutRepository: 'Access externally',
    color: 'warning',
    icon: 'launch',
    tooltip:
      'These data are not downloadable through Synapse. Access is managed by {repository} and requires a separate application or process.',
  },
  mixed: {
    downloadable: true,
    label: 'Download available files',
    color: 'primary',
    icon: 'mixed',
    tooltip:
      'Files in this dataset live in more than one location. Some download through Synapse; others are hosted externally and must be obtained separately from {repository}.',
  },
  unavailable: {
    downloadable: false,
    label: 'Not available for download',
    color: 'default',
    icon: 'unavailable',
    tooltip:
      'This dataset is indexed for discovery, but its data is not available for download through Synapse.',
  },
}

/**
 * Coerces a raw annotation value (which is frequently blank, null, or absent for
 * Synapse-hosted/legacy datasets, and could be an unrecognized string) into a
 * valid hosting type. Anything not explicitly recognized falls back to
 * `synapse` — the safe default, which shows a standard Download button and no badge.
 */
export function normalizeHosting(value?: string | null): DatasetHostingType {
  const trimmed = value?.trim()
  if (trimmed && trimmed in DATASET_HOSTING_CONFIG) {
    return trimmed as DatasetHostingType
  }
  return 'synapse'
}

/** Substitutes the `{repository}` token, falling back to a generic phrase. */
export function fillRepository(
  template: string | undefined,
  repository?: string,
): string | undefined {
  if (!template) {
    return template
  }
  return template.replaceAll(
    '{repository}',
    repository ?? 'the external repository',
  )
}
