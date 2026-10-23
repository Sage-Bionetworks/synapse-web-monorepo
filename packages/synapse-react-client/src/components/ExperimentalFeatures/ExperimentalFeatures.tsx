import { useGetFeatureFlags } from '@/synapse-queries/featureflags/useGetFeatureFlag'
import { useIsCurrentUserACTMember } from '@/synapse-queries/user/useUserBundle'
import { useSynapseContext } from '@/utils/context/SynapseContext'
import { saveExperimentalFeaturePreferences } from '@/utils/featureflag/experimentalFeatureCookies'
import {
  ExperimentalFeatureScope,
  FEATURE_FLAG_CONFIG,
  FeatureFlagEnum,
} from '@/utils/featureflag/FeatureFlags'
import { useMemo, useState } from 'react'
import ExperimentalFeaturesButton from './ExperimentalFeaturesButton'
import ExperimentalFeaturesDialog from './ExperimentalFeaturesDialog'

export type ExperimentalFeaturesProps = {
  /** The app this menu is in; only flags declared for this scope are listed */
  scope: ExperimentalFeatureScope
  /** Called after the user's choices are saved; the app should reload so flags re-resolve */
  onSave: () => void
}

function ExperimentalFeatures({ scope, onSave }: ExperimentalFeaturesProps) {
  const {
    isAuthenticated,
    isInExperimentalMode: isEnableAllOn,
    enabledExperimentalFeatures,
  } = useSynapseContext()
  const { data: serverFlags, isLoading } = useGetFeatureFlags()
  const { data: isACTMember = false } = useIsCurrentUserACTMember({
    enabled: isAuthenticated,
  })

  const [open, setOpen] = useState(false)
  const [dialogKey, setDialogKey] = useState(0)

  const menuFeatures = useMemo(
    () =>
      Object.values(FeatureFlagEnum).filter(flag => {
        const config = FEATURE_FLAG_CONFIG[flag]
        return (
          serverFlags?.[flag] == null &&
          config.scopes.includes(scope) &&
          (!config.actMembersOnly || isACTMember)
        )
      }),
    [serverFlags, scope, isACTMember],
  )

  const savedMenuOptIns = enabledExperimentalFeatures.filter(flag =>
    menuFeatures.includes(flag),
  )

  const count = isEnableAllOn ? menuFeatures.length : savedMenuOptIns.length

  const handleOpen = () => {
    setDialogKey(prev => prev + 1)
    setOpen(true)
  }

  const handleSave = (enableAll: boolean, enabledFlags: FeatureFlagEnum[]) => {
    saveExperimentalFeaturePreferences(enableAll, enabledFlags, menuFeatures)
    setOpen(false)
    onSave()
  }

  return (
    <>
      <ExperimentalFeaturesButton
        isActive={isEnableAllOn || count > 0}
        count={count}
        onClick={handleOpen}
      />
      <ExperimentalFeaturesDialog
        key={dialogKey}
        open={open}
        isLoading={isLoading}
        features={menuFeatures}
        initialEnableAll={isEnableAllOn}
        initialEnabledFlags={savedMenuOptIns}
        onCancel={() => setOpen(false)}
        onSave={handleSave}
      />
    </>
  )
}

export default ExperimentalFeatures
