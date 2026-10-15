import { useGetAccessRequirementWikiPageKey } from '@/synapse-queries'
import { GridLegacy as Grid, Typography } from '@mui/material'
import { PropsWithChildren } from 'react'
import MarkdownSynapse from '../../Markdown/MarkdownSynapse'
import { useShowAccessRequirementWikiInWizard } from '../AccessRequirementListUtils'
import { RequestFlowAccessRequirement } from './requestFlowTypes'

type ManagedACTAccessRequirementFormWikiWrapperProps = PropsWithChildren<{
  accessRequirement: RequestFlowAccessRequirement
}>

/**
 * Renders the child content next to the wiki associated with the provided access requirement. When the wiki cannot be
 * shown (see {@link useShowAccessRequirementWikiInWizard}), only the children are rendered, at full width.
 *
 * @param props
 * @constructor
 */
export default function ManagedACTAccessRequirementFormWikiWrapper(
  props: ManagedACTAccessRequirementFormWikiWrapperProps,
) {
  const { children, accessRequirement } = props
  const showWiki = useShowAccessRequirementWikiInWizard(accessRequirement)
  const { data: wikiPage } = useGetAccessRequirementWikiPageKey(
    String(accessRequirement.id),
    { enabled: showWiki },
  )

  if (!showWiki) {
    return <>{children}</>
  }

  return (
    <Grid container spacing={5}>
      <Grid
        item
        xs={12}
        md={6}
        lg={5}
        sx={{
          overflow: 'auto',
          pr: {
            xs: 0,
            md: 1,
          },
        }}
      >
        {children}
      </Grid>
      <Grid
        item
        md={6}
        lg={7}
        sx={{
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
    </Grid>
  )
}
