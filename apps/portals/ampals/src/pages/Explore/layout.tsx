import ExploreWrapper from '@sage-bionetworks/synapse-portal-framework/components/Explore/ExploreWrapper'

function ExploreLayout() {
  return (
    <ExploreWrapper
      explorePaths={[
        {
          path: 'Programs',
        },
        {
          path: 'Collections',
        },
        {
          path: 'Datasets',
        },
        {
          path: 'Files',
        },
      ]}
    />
  )
}

export default ExploreLayout
