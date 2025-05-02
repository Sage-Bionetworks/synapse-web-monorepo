import DownloadCartPage from 'synapse-react-client/components/DownloadCart/DownloadCartPage'

function DownloadCart() {
  return (
    <DownloadCartPage
      onViewSharingSettingsClicked={benefactorEntityId => {
        window.open(
          `https://www.synapse.org/Synapse:${benefactorEntityId}`,
          '_blank',
        )
      }}
    />
  )
}

export default DownloadCart
