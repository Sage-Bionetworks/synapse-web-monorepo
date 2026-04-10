import PortalHomePageHeader from 'synapse-react-client/components/PortalHomePageHeader/PortalHomePageHeader'

export default function Homepage() {
  return (
    <>
      <PortalHomePageHeader
        backgroundCss={`linear-gradient(90deg, #F6FCFF 11.06%, #DCEFF9 100%)`}
        title={'Advancing NAMs through shared dialogue'}
        subTitle={''}
        description={
          'Explore Data, Models, and more generated from the New Approach Methodologies (NAMs) in the Complement-ARIE NAMHub'
        }
      />
    </>
  )
}
