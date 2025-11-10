import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { EntityType } from '@sage-bionetworks/synapse-client'
import { render, screen } from '@testing-library/react'
import SqlDefinedTableEditor, {
  SqlDefinedTableEditorProps,
} from './SqlDefinedTableEditor'

describe('SqlDefinedTableEditor tests', () => {
  function renderComponent(props: SqlDefinedTableEditorProps) {
    return render(<SqlDefinedTableEditor {...props} />, {
      wrapper: createWrapper(),
    })
  }

  it('shows MaterializedView help text when entityType is MATERIALIZED_VIEW', () => {
    renderComponent({ entityType: EntityType.materializedview })

    screen.getByText(
      'A materialized view is a type of Synapse table that is defined using a Synapse SQL statement',
      { exact: false },
    )
  })
  it('does not show help for virtual table', () => {
    renderComponent({ entityType: EntityType.virtualtable })

    expect(
      screen.queryByText(
        'A materialized view is a type of Synapse table that is defined using a Synapse SQL statement',
        { exact: false },
      ),
    ).not.toBeInTheDocument()
  })
})
