import { FullWidthAlert } from 'synapse-react-client/components/FullWidthAlert'

export type RepositoryUnderReviewAlertProps = {
  portalSpecificDisclaimer: string
}

function RepositoryUnderReviewAlert({ portalSpecificDisclaimer }) {
  return (
    <>
      <FullWidthAlert
        sx={{ m: 0 }}
        isGlobal={false}
        variant={'warning'}
        show={true}
        title={''}
        description={
          'This repository is under review for potential modification in compliance with Administration directives.'
        }
      />
      <FullWidthAlert
        sx={{ m: 0 }}
        isGlobal={false}
        variant={'info'}
        show={true}
        title={''}
        description={portalSpecificDisclaimer}
      />
    </>
  )
}

export default RepositoryUnderReviewAlert
