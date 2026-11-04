import HelpIcon from '@mui/icons-material/Help'
import { alpha, Button, SxProps, Theme } from '@mui/material'
import { useState } from 'react'
import { ActionPanel } from '../ActionPanel/ActionPanel'
import { ConfirmationDialog } from '../ConfirmationDialog/ConfirmationDialog'

export const COHORT_DISCOVERY_TITLE = 'Cohort Discovery'

export const COHORT_DISCOVERY_DESCRIPTION =
  'Use the Cohort Builder to define your custom research cohort. Filter for human research participants based on demographic or clinical attributes, browse their associated data files, then refine your selection using specific dataset or file-level properties. Once you have identified the data you need, add the files to your download list or send results to an analysis platform.'

export const HOW_TO_USE_COHORT_BUILDER_TITLE = 'How to Use Cohort Builder'

export const HOW_TO_USE_COHORT_BUILDER_CONFIRM_TEXT = 'Got it'

const howToUseButtonSx: SxProps<Theme> = theme => {
  const colors = {
    color: theme.palette.primary.main,
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
  }
  return {
    ...colors,
    flexShrink: 0,
    fontWeight: 700,
    // The theme's contained hover style switches to the contrast text color, which is unreadable on this light fill.
    '&:hover, &:visited': {
      ...colors,
      backgroundColor: alpha(theme.palette.primary.main, 0.2),
    },
  }
}

const confirmButtonSx: SxProps<Theme> = {
  backgroundColor: 'greyV2.100',
  color: 'grey.900',
  '&:hover, &:visited': { backgroundColor: 'greyV2.200', color: 'grey.900' },
}

function HowToUseCohortBuilderContent() {
  return (
    <ul>
      <li>
        <strong>Condition groups</strong> combine their items with one AND or OR
        — mixed logic is expressed by nesting a condition group, not by mixing
        operators in one list.
      </li>
      <li>
        Add <strong>NOT</strong> to a condition group to exclude everything
        inside it; for a single condition, use the &quot;is none of&quot;
        operator instead.
      </li>
      <li>
        A <strong>condition</strong> filters one property — click its property,
        operator, or values to change them.
      </li>
      <li>
        <strong>Drag</strong> rows to reorder them or move them into a different
        condition group; moving into a different condition group changes the
        logic.
      </li>
      <li>
        The <strong>Query Summary</strong> section above the tree always shows
        the whole query in plain English or SQL.
      </li>
      <li>
        Click <strong>Update Results</strong> below the tree to run your edits
        against the results — Results and Results Distribution update then, not
        while you’re still editing.
      </li>
    </ul>
  )
}

/**
 * Introduces the Cohort Builder, with a button that opens instructions for using its Query Builder.
 */
export function CohortDiscoveryBanner() {
  const [isHelpOpen, setIsHelpOpen] = useState(false)
  return (
    <>
      <ActionPanel
        title={COHORT_DISCOVERY_TITLE}
        description={COHORT_DISCOVERY_DESCRIPTION}
        action={
          <Button
            variant="contained"
            disableElevation
            startIcon={<HelpIcon />}
            sx={howToUseButtonSx}
            onClick={() => setIsHelpOpen(true)}
          >
            {HOW_TO_USE_COHORT_BUILDER_TITLE}
          </Button>
        }
      />
      <ConfirmationDialog
        open={isHelpOpen}
        title={HOW_TO_USE_COHORT_BUILDER_TITLE}
        content={<HowToUseCohortBuilderContent />}
        hasCloseButton={false}
        hasCancelButton={false}
        onCancel={() => setIsHelpOpen(false)}
        onConfirm={() => setIsHelpOpen(false)}
        confirmButtonProps={{
          children: HOW_TO_USE_COHORT_BUILDER_CONFIRM_TEXT,
          disableElevation: true,
          sx: confirmButtonSx,
        }}
      />
    </>
  )
}
