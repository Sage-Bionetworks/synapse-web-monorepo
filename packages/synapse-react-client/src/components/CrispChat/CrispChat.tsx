import './CrispTypes'
import React, { useEffect } from 'react'
import { FeatureFlagEnum } from '@sage-bionetworks/synapse-types'
import { useGetFeatureFlag } from '@/synapse-queries'

// Ensure script is only loaded once
let isScriptLoaded = false

/**
 * CrispChat component that loads the Crisp chat widget when the CRISP_CHAT feature flag is enabled.
 * The script is only loaded once, even if the component is mounted multiple times.
 */
export function CrispChat(): React.ReactNode {
  const isCrispChatEnabled = useGetFeatureFlag(FeatureFlagEnum.CRISP_CHAT)

  useEffect(() => {
    if (isCrispChatEnabled && !isScriptLoaded) {
      // Initialize Crisp
      window.$crisp = window.$crisp || []
      window.CRISP_WEBSITE_ID = 'c9bf8451-61b5-4b7e-b564-5772f85d54bd'

      // Create and append the script
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = 'https://client.crisp.chat/l.js'
      script.async = true

      const target = document.head ?? document.body
      target?.appendChild(script)

      isScriptLoaded = true
    }
  }, [isCrispChatEnabled])

  return null
}

export default CrispChat
