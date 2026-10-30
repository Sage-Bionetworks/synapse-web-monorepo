import { useGetFeatureFlags } from '@/synapse-queries/featureflags/useGetFeatureFlag'
import { useIsCurrentUserACTMember } from '@/synapse-queries/user/useUserBundle'
import { useSynapseContext } from '@/utils/context/SynapseContext'
import {
  ExperimentalFeatureScope,
  FEATURE_FLAG_CONFIG,
  FeatureFlagEnum,
} from '@/utils/featureflag/FeatureFlags'
import { useMemo, useState } from 'react'
import ExperimentalFeaturesButton from './ExperimentalFeaturesButton'
import ExperimentalFeaturesDialog from './ExperimentalFeaturesDialog'
import { useExperimentalFeaturePreferences } from '@/utils/featureflag/useExperimentalFeaturePreferences'

export type ExperimentalFeaturesProps = {
  /** The apps whose flags this menu lists; a flag is listed if it's declared for any of them */
  scopes: ExperimentalFeatureScope[]
  /** Called after the user's choices are saved; the app should reload so flags re-resolve */
  onPreferencesSaved: () => void
}

function ExperimentalFeatures({
  scopes,
  onPreferencesSaved,
}: ExperimentalFeaturesProps) {
  const { isAuthenticated } = useSynapseContext()
  const { isEnableAllOn, enabledFeatures, savePreferences } =
    useExperimentalFeaturePreferences()
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
          config.scopes.some(s => scopes.includes(s)) &&
          (!config.actMembersOnly || isACTMember)
        )
      }),
    [serverFlags, scopes, isACTMember],
  )

  const savedMenuOptIns = enabledFeatures.filter(flag =>
    menuFeatures.includes(flag),
  )

  const count = isEnableAllOn ? menuFeatures.length : savedMenuOptIns.length

  const handleOpen = () => {
    setDialogKey(prev => prev + 1)
    setOpen(true)
  }

  const handleSave = (enableAll: boolean, enabledFlags: FeatureFlagEnum[]) => {
    savePreferences(enableAll, enabledFlags, menuFeatures)
    setOpen(false)
    onPreferencesSaved()
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
