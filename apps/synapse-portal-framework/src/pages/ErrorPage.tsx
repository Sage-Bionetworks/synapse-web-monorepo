import SynapseErrorPage, {
  SynapseErrorType,
} from 'synapse-react-client/components/error/ErrorPage'

function ErrorPage() {
  return (
    <SynapseErrorPage
      type={SynapseErrorType.NOT_FOUND}
      message={''}
      gotoPlace={() => {
        // not necessary for NOT_FOUND page
      }}
    />
  )
}

export default ErrorPage
