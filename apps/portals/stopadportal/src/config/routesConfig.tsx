import App from '@sage-bionetworks/synapse-portal-framework/App'
import Header from '@sage-bionetworks/synapse-portal-framework/components/Header'
import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'
import { RouteObject } from 'react-router-dom'
import {
  Markdown,
  SynapseFormSubmissionGrid,
  SynapseFormWrapper,
} from 'synapse-react-client'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <>
            <Header />
            <SectionLayout ContainerProps={{ className: 'stop-ad-home-page' }}>
              <Markdown ownerId="syn20717442" wikiId="595390" />
            </SectionLayout>
          </>
        ),
      },
      {
        path: 'Apply',
        element: (
          <SectionLayout>
            <Markdown ownerId="syn20717442" wikiId="595813" />
            <SynapseFormSubmissionGrid
              pathpart="/Apply/FormSubmission"
              formGroupId="9"
              itemNoun="Compound"
              formClass="drug-upload-tool"
            />
          </SectionLayout>
        ),
      },
      {
        path: 'Apply/FormSubmission',
        element: (
          <SectionLayout>
            <SynapseFormWrapper
              formSchemaEntityId="syn20680102"
              fileNamePath="naming.compound_name"
              formUiSchemaEntityId="syn20693568"
              formNavSchemaEntityId="syn20680027"
              formTitle="Your Submission"
              formClass="drug-upload-tool"
            />
          </SectionLayout>
        ),
      },
      {
        path: 'Help/How It Works',
        element: (
          <SectionLayout title="How It Works">
            <Markdown ownerId="syn20717442" wikiId="595391" />
          </SectionLayout>
        ),
      },
      {
        path: 'Help/Data Requirements',
        element: (
          <SectionLayout title="Data Requirements">
            <Markdown ownerId="syn20717442" wikiId="595544" />
          </SectionLayout>
        ),
      },
      {
        path: 'Terms',
        element: (
          <SectionLayout>
            <Markdown ownerId="syn20717442" wikiId="596040" />
          </SectionLayout>
        ),
      },
      {
        path: 'Contact Us',
        element: (
          <SectionLayout>
            <Markdown ownerId="syn20717442" wikiId="596047" />
          </SectionLayout>
        ),
      },
    ],
  },
]

export default routes
