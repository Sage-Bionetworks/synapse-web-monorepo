import App from '@sage-bionetworks/synapse-portal-framework/App'
import { FullWidthAlert } from 'synapse-react-client'

function RootApp() {
  return (
    <App>
      <FullWidthAlert
        sx={{ m: 0 }}
        isGlobal={false}
        variant={'success'}
        show={true}
        title={"You're Using a Beta Version!"}
        description={
          'This is an early version of the portal. Things might break, and your feedback helps us build a better experience. Try it out and let us know what you think!'
        }
        secondaryButtonConfig={{
          text: 'Give Feedback',
          href: 'https://github.com/bridge2ai/b2ai-standards-registry/issues/new?template=feedback.yml',
        }}
      />
    </App>
  )
}

export default RootApp
