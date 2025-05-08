import SynapseDownloadCartPage from 'synapse-react-client/components/DownloadCart/DownloadCartPage'

function DownloadCartPage() {
  return (
    <SynapseDownloadCartPage
      onViewSharingSettingsClicked={benefactorEntityId => {
        window.open(
          `https://www.synapse.org/Synapse:${benefactorEntityId}`,
          '_blank',
        )
      }}
    />
  )
}

export default DownloadCartPage
