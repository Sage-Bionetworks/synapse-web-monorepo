import { sourceAppConfigTableID } from '../resources'
import { SourceAppConfig } from './SourceAppConfigs'
import { useSourceAppConfigs } from './useSourceAppConfigs'

export const useSourceApp = (
  targetSourceAppId?: string,
): SourceAppConfig | undefined => {
  const sourceAppId = targetSourceAppId ?? localStorage.getItem('sourceAppId')
  const sourceAppConfigs = useSourceAppConfigs()

  // PORTALS-2746: Find target source app.  Fallback to Sage Bionetworks source app if target not found.
  const sourceApp = sourceAppConfigs?.find(
    config => config.appId === sourceAppId,
  )
  const defaultSageSourceApp = sourceAppConfigs?.find(
    config => config.appId === 'SAGE',
  )
  if (sourceAppConfigs !== undefined && sourceApp == undefined) {
    console.error(
      `Source appId '${sourceAppId}' not found in the Synapse configuration table (${sourceAppConfigTableID})!`,
    )
    localStorage.setItem('sourceAppId', 'SAGE')
  }
  return sourceApp ?? defaultSageSourceApp
}
