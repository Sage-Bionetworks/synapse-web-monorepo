import { useContext } from 'react'
import { useGetFeatureFlag } from 'synapse-react-client/synapse-queries/index'
import { FeatureFlagEnum } from 'synapse-react-client/utils/featureflag/FeatureFlags'
import { useChatDialogContext } from '../ChatDialogContext'
import { PortalContext } from '../PortalContext'

export function useIsCurieLauncherAvailable(): boolean {
  const portalContext = useContext(PortalContext)
  const chatDialogContext = useChatDialogContext()
  const isPortalChatEnabled = useGetFeatureFlag(FeatureFlagEnum.PORTAL_CHAT)
  const isCurieWidgetEnabled = useGetFeatureFlag(
    FeatureFlagEnum.CURIE_CHAT_WIDGET,
  )

  return (
    !!chatDialogContext?.isChatAvailable &&
    (portalContext?.isCurieLauncherEnabled ??
      (isPortalChatEnabled && isCurieWidgetEnabled))
  )
}
