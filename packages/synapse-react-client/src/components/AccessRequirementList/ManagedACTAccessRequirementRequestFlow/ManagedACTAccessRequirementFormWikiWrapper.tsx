import { useGetAccessRequirementWikiPageKey } from '@/synapse-queries'
import { GridLegacy as Grid, Typography } from '@mui/material'
import { PropsWithChildren } from 'react'
import MarkdownSynapse from '../../Markdown/MarkdownSynapse/MarkdownSynapse'
import { useCanShowManagedACTWikiInWizard } from '../AccessRequirementListUtils'

type ManagedACTAccessRequirementFormWikiWrapperProps = PropsWithChildren<{
  managedACTAccessRequirementId: string
}>

/**
 * Renders the child content next to the wiki associated with the provided ManagedACTAccessRequirement. Utilizes a grid
 * layout where the wiki content will not appear on small screen sizes.
 *
 * @param props
 * @constructor
 */
export default function ManagedACTAccessRequirementFormWikiWrapper(
  props: ManagedACTAccessRequirementFormWikiWrapperProps,
) {
  const { children, managedACTAccessRequirementId } = props
  const { data: wikiPage } = useGetAccessRequirementWikiPageKey(
    managedACTAccessRequirementId,
    {
      enabled: !!managedACTAccessRequirementId,
    },
  )

  const canShowWiki = useCanShowManagedACTWikiInWizard()

  return (
    <Grid container spacing={5}>
      <Grid
        item
        xs={12}
        md={6}
        lg={5}
        sx={{
          maxHeight: '500px',
          overflow: 'auto',
          pr: {
            xs: 0,
            md: 1,
          },
        }}
      >
        {children}
      </Grid>
      {canShowWiki && (
        <Grid
          item
          md={6}
          lg={7}
          sx={{
            maxHeight: '500px',
            overflowY: 'scroll',
            pr: 1,
          }}
        >
          <Typography variant={'headline3'} sx={{ mb: 2 }}>
            Instructions
          </Typography>
          {wikiPage && (
            <MarkdownSynapse
              wikiId={wikiPage.wikiPageId}
              ownerId={wikiPage.ownerObjectId}
              objectType={wikiPage.ownerObjectType}
              loadingSkeletonRowCount={15}
            />
          )}
        </Grid>
      )}
    </Grid>
  )
}
