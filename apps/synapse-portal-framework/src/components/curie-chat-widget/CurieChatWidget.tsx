import styles from './CurieChatWidget.module.scss'
import { ReactComponent as CurieLogo } from '../assets/curie.svg'
import { useSynapseContext } from 'synapse-react-client'
import { useChatDialogContext } from '../ChatDialogContext'
import { useOneSageURL } from 'synapse-react-client/utils/hooks/useOneSageURL'
import { storeRedirectURLForOneSageLoginAndGotoURL } from 'synapse-react-client/utils/AppUtils/index'
import { useIsCurieLauncherAvailable } from './useIsCurieLauncherAvailable'

function CurieChatDialogLauncher() {
  const { isAuthenticated } = useSynapseContext()
  const chatDialogContext = useChatDialogContext()
  const oneSageUrl = useOneSageURL()
  const canShowCurie = useIsCurieLauncherAvailable()

  if (!canShowCurie || !chatDialogContext) {
    return null
  }

  const onClick = () => {
    if (!isAuthenticated) {
      storeRedirectURLForOneSageLoginAndGotoURL(oneSageUrl.toString())
      return
    }

    chatDialogContext.openChat('', {
      variant: 'curie',
    })
  }

  return (
    <button
      type="button"
      className={styles.widget}
      onClick={onClick}
      aria-label="Open Curie chat"
    >
      <CurieLogo className={styles.curieLogo} />
    </button>
  )
}

export default CurieChatDialogLauncher
