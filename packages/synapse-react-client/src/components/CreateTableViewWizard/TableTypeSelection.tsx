import React from 'react'
import WizardChoiceButtonGroup from '../WizardChoiceButton/WizardChoiceButtonGroup'
import WizardChoiceButton from '../WizardChoiceButton/WizardChoiceButton'
import WizardChoiceButtonDescription from '../WizardChoiceButton/WizardChoiceButtonDescription'
import { Link } from '@mui/material'

const TABLE_DESCRIPTION = (
  <>
    <WizardChoiceButtonDescription>
      Synapse tables are used to organize web-accessible, sharable, and
      queryable data. Tables may be queried and edited with the Synapse UI, as
      well as with the Synapse programmatic clients.
    </WizardChoiceButtonDescription>
    <Link
      href={
        'https://help.synapse.org/docs/Organizing-Data-With-Tables.2011038095.html'
      }
      target="_blank"
      onClick={e => {
        e.stopPropagation()
      }}
    >
      More about Tables
    </Link>
  </>
)

const VIEW_DESCRIPTION = (
  <>
    <WizardChoiceButtonDescription>
      Views allow you to see and query groups of other objects in Synapse, such
      as files, tables, projects, or submissions and any associated annotations
      about those items.
    </WizardChoiceButtonDescription>
    <Link
      href={'https://help.synapse.org/docs/Views.2011070739.html'}
      target="_blank"
      onClick={e => {
        e.stopPropagation()
      }}
    >
      More about Views
    </Link>
  </>
)

export type TableTypeSelectionProps = {
  /* Callback invoked if the user selects "Table" */
  onTableSelected: () => void
  /* Callback invoked if the user selects the "View" group, which will show more options */
  onViewSelected: () => void
}

/**
 * React component for the first step of creating a new table or view.
 * The user will decide if they want to create a Table or a View
 */
export default function TableTypeSelection(props: TableTypeSelectionProps) {
  const { onTableSelected, onViewSelected } = props
  return (
    <WizardChoiceButtonGroup>
      <WizardChoiceButton
        title={'Table'}
        description={TABLE_DESCRIPTION}
        onClick={() => {
          onTableSelected()
        }}
      />
      <WizardChoiceButton
        title={'View'}
        description={VIEW_DESCRIPTION}
        onClick={onViewSelected}
      />
    </WizardChoiceButtonGroup>
  )
}
