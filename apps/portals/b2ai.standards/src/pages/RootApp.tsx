import App from '@sage-bionetworks/synapse-portal-framework/App'
import FullWidthAlert from 'synapse-react-client/components/FullWidthAlert/FullWidthAlert'

function RootApp() {
  return (
    <App>
      <FullWidthAlert
        sx={{ m: 0 }}
        isGlobal={false}
        variant={'success'}
        show={true}
        title={'You are using Standard Explorer v1 🎉'}
        description={
          'This is an early version of the portal. Your feedback helps us build a better experience. Try it out and let us know what you think!'
        }
        secondaryButtonConfig={{
          text: 'Give Feedback',
          href: 'https://forms.gle/aqTKsk7LZ2u7Zxbd8',
        }}
      />
    </App>
  )
}

export default RootApp
