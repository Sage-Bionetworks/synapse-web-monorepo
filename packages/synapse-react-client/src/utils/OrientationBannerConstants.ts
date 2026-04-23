const OrientationBannerNameStrings = [
  'Challenges',
  'CohortBuilder',
  'DataAccessManagement',
  'Datasets',
  'Discussions',
  'Docker',
  'Favorites',
  'Files',
  'Following',
  'Projects',
  'Tables',
  'Teams',
  'TrashCan',
  'Wikis',
  'Donate',
  'UnderConstruction',
] as const
export type OrientationBannerName =
  (typeof OrientationBannerNameStrings)[number]

export function getOrientationBannerKey(name: OrientationBannerName) {
  return 'orientation_banner_' + name.toLowerCase() + '_dismissed'
}

export const ORIENTATION_BANNER_KEYS = OrientationBannerNameStrings.map(el =>
  getOrientationBannerKey(el),
)
