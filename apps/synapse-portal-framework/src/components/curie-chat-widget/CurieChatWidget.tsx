import styles from './CurieChatWidget.module.scss'
import { ReactComponent as CurieLogo } from '../assets/curie.svg'
import { useChatDialogContext } from '../ChatDialogContext'
import { useIsCurieLauncherAvailable } from './useIsCurieLauncherAvailable'

function CurieChatDialogLauncher() {
  const chatDialogContext = useChatDialogContext()
  const canShowCurie = useIsCurieLauncherAvailable()

  if (!canShowCurie || !chatDialogContext) {
    return null
  }

  // Open the chat for everyone. If the agent isn't open to anonymous chat, SynapseChat redirects
  // the user to log in when it fails to create a session.
  const onClick = () => {
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
      <span className={styles.speechBubble}>Hi! How can I help you?</span>
      <CurieLogo className={styles.curieLogo} />
    </button>
  )
}

export default CurieChatDialogLauncher
