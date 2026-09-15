import { ColumnModel, FacetColumnResult } from '@sage-bionetworks/synapse-types'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ReactNode } from 'react'
import { vi } from 'vitest'
import { FilterConditionRow } from './FilterConditionRow'
import { FilterGroupNode } from './FilterGroupNode'
import {
  QueryBuilderInternalContext,
  QueryBuilderInternalContextType,
} from './QueryBuilderInternalContext'
import { defaultQBGroup, newBlankCondition } from './QueryBuilderStore'
import { QBGroup } from './QueryBuilderTypes'

function makeContext(
  overrides: Partial<QueryBuilderInternalContextType> = {},
): QueryBuilderInternalContextType {
  return {
    columnModels: [],
    facetResults: [],
    onlyFacetedColumns: false,
    getColumnDisplayName: (name: string) => name,
    addConditionAt: vi.fn(),
    addChildGroupAt: vi.fn(),
    clearGroupAt: vi.fn(),
    updateGroupAt: vi.fn(),
    removeGroupAt: vi.fn(),
    updateConditionAt: vi.fn(),
    removeConditionAt: vi.fn(),
    ...overrides,
  }
}

function renderWithContext(
  ui: ReactNode,
  overrides?: Partial<QueryBuilderInternalContextType>,
) {
  const contextValue = makeContext(overrides)
  const utils = render(
    <QueryBuilderInternalContext.Provider value={contextValue}>
      {ui}
    </QueryBuilderInternalContext.Provider>,
  )
  return { ...utils, contextValue }
}

const sexColumnModel: ColumnModel = {
  id: '1',
  name: 'Sex',
  columnType: 'STRING',
  facetType: 'enumeration',
}

const ageColumnModel: ColumnModel = {
  id: '2',
  name: 'Age',
  columnType: 'INTEGER',
}

const sexFacetResult: FacetColumnResult = {
  concreteType: 'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
  columnName: 'Sex',
  facetType: 'enumeration',
  facetValues: [
    { value: 'Female', count: 100, isSelected: false },
    { value: 'Male', count: 100, isSelected: false },
    { value: 'Unknown', count: 20, isSelected: false },
  ],
}

describe('FilterGroupNode', () => {
  const rootAnd: QBGroup = defaultQBGroup()

  it('renders combinator (AND selected), NOT toggle (unpressed), and action buttons', () => {
    renderWithContext(<FilterGroupNode group={rootAnd} isRoot />)

    // AND / OR combinator (MUI ToggleButtons render as role='button' + aria-pressed)
    const andButton = screen.getByRole('button', { name: 'AND' })
    const orButton = screen.getByRole('button', { name: 'OR' })
    expect(andButton).toHaveAttribute('aria-pressed', 'true')
    expect(orButton).toHaveAttribute('aria-pressed', 'false')

    // NOT toggle (unpressed)
    const notToggle = screen.getByRole('button', {
      name: 'Negate this group',
    })
    expect(notToggle).toHaveAttribute('aria-pressed', 'false')

    // Action row
    expect(
      screen.getByRole('button', { name: /^\+ Condition$/ }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /^\+ Condition Group$/ }),
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /^Clear$/ })).toBeInTheDocument()
  })

  it('root group does not offer a Delete Condition Group action', () => {
    renderWithContext(<FilterGroupNode group={rootAnd} isRoot />)
    expect(
      screen.queryByRole('button', { name: /Delete Condition Group/ }),
    ).not.toBeInTheDocument()
  })

  it('nested group exposes Delete Condition Group', () => {
    const nested: QBGroup = {
      kind: 'group',
      id: 'nested',
      combinator: 'AND',
      not: false,
      children: [],
    }
    const root: QBGroup = { ...defaultQBGroup(), children: [nested] }
    renderWithContext(<FilterGroupNode group={root} isRoot />)
    // Delete-group button is on the nested group only.
    expect(
      screen.getByRole('button', { name: /Delete Condition Group/ }),
    ).toBeInTheDocument()
  })

  it('renders an empty-state message when a group has no children', () => {
    const empty: QBGroup = {
      kind: 'group',
      id: 'empty-root',
      combinator: 'AND',
      not: false,
      children: [],
    }
    renderWithContext(<FilterGroupNode group={empty} isRoot />)
    expect(
      screen.getByText('No conditions yet, add one above'),
    ).toBeInTheDocument()
  })

  it('dispatches addConditionAt when + Condition is clicked', async () => {
    const user = userEvent.setup()
    const { contextValue } = renderWithContext(
      <FilterGroupNode group={rootAnd} isRoot />,
    )
    await user.click(screen.getByRole('button', { name: /^\+ Condition$/ }))
    expect(contextValue.addConditionAt).toHaveBeenCalledWith(rootAnd.id)
  })

  it('dispatches addChildGroupAt when + Condition Group is clicked', async () => {
    const user = userEvent.setup()
    const { contextValue } = renderWithContext(
      <FilterGroupNode group={rootAnd} isRoot />,
    )
    await user.click(
      screen.getByRole('button', { name: /^\+ Condition Group$/ }),
    )
    expect(contextValue.addChildGroupAt).toHaveBeenCalledWith(rootAnd.id)
  })

  it('dispatches updateGroupAt with combinator: "OR" when OR is picked', async () => {
    const user = userEvent.setup()
    const { contextValue } = renderWithContext(
      <FilterGroupNode group={rootAnd} isRoot />,
    )
    await user.click(screen.getByRole('button', { name: 'OR' }))
    expect(contextValue.updateGroupAt).toHaveBeenCalledWith(rootAnd.id, {
      combinator: 'OR',
    })
  })

  it('dispatches updateGroupAt toggling not when Exclude (NOT) is clicked', async () => {
    const user = userEvent.setup()
    const { contextValue } = renderWithContext(
      <FilterGroupNode group={rootAnd} isRoot />,
    )
    await user.click(screen.getByRole('button', { name: 'Negate this group' }))
    expect(contextValue.updateGroupAt).toHaveBeenCalledWith(rootAnd.id, {
      not: true,
    })
  })

  it('renders a Filter condition row for each child condition', () => {
    const c1 = newBlankCondition('Sex', 'STRING')
    const c2 = newBlankCondition('Age', 'INTEGER')
    const root: QBGroup = { ...defaultQBGroup(), children: [c1, c2] }
    renderWithContext(<FilterGroupNode group={root} isRoot />, {
      columnModels: [sexColumnModel, ageColumnModel],
    })
    const conditionRows = screen.getAllByRole('group', {
      name: /Filter condition/,
    })
    expect(conditionRows).toHaveLength(2)
  })
})

describe('FilterConditionRow', () => {
  const blankCondition = newBlankCondition(null, null)

  it('exposes an accessible property picker + drag/remove buttons', () => {
    renderWithContext(<FilterConditionRow condition={blankCondition} />, {
      columnModels: [sexColumnModel, ageColumnModel],
    })
    expect(
      screen.getByRole('button', { name: 'Drag to reorder condition' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'Remove condition' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('combobox', { name: 'Property' }),
    ).toBeInTheDocument()
  })

  it('dispatches removeConditionAt when trash is clicked', async () => {
    const user = userEvent.setup()
    const { contextValue } = renderWithContext(
      <FilterConditionRow condition={blankCondition} />,
    )
    await user.click(screen.getByRole('button', { name: 'Remove condition' }))
    expect(contextValue.removeConditionAt).toHaveBeenCalledWith(
      blankCondition.id,
    )
  })

  it('renders enum pills sourced from facet results when a faceted column is picked', () => {
    const condition = {
      ...newBlankCondition('Sex', 'STRING'),
      op: 'is_any_of' as const,
    }
    renderWithContext(<FilterConditionRow condition={condition} />, {
      columnModels: [sexColumnModel],
      facetResults: [sexFacetResult],
    })
    const pillGroup = screen.getByRole('group', {
      name: /Selected values/,
    })
    within(pillGroup).getByRole('button', { name: 'Female' })
    within(pillGroup).getByRole('button', { name: 'Male' })
    within(pillGroup).getByRole('button', { name: 'Unknown' })
  })

  it('selecting a pill dispatches updateConditionAt with the new values array', async () => {
    const user = userEvent.setup()
    const condition = {
      ...newBlankCondition('Sex', 'STRING'),
      op: 'is_any_of' as const,
    }
    const { contextValue } = renderWithContext(
      <FilterConditionRow condition={condition} />,
      {
        columnModels: [sexColumnModel],
        facetResults: [sexFacetResult],
      },
    )
    await user.click(screen.getByRole('button', { name: 'Female' }))
    expect(contextValue.updateConditionAt).toHaveBeenCalledWith(condition.id, {
      values: ['Female'],
    })
  })

  it('renders range inputs for INTEGER + between', () => {
    const condition = {
      ...newBlankCondition('Age', 'INTEGER'),
      op: 'between' as const,
    }
    renderWithContext(<FilterConditionRow condition={condition} />, {
      columnModels: [ageColumnModel],
    })
    expect(screen.getByRole('textbox', { name: 'Minimum' })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: 'Maximum' })).toBeInTheDocument()
  })

  it('renders no value input for has_value', () => {
    const condition = {
      ...newBlankCondition('Sex', 'STRING'),
      op: 'has_value' as const,
    }
    renderWithContext(<FilterConditionRow condition={condition} />, {
      columnModels: [sexColumnModel],
    })
    expect(
      screen.queryByRole('textbox', { name: /Value/i }),
    ).not.toBeInTheDocument()
    expect(
      screen.queryByRole('group', { name: /Selected values/ }),
    ).not.toBeInTheDocument()
  })

  it('offers only faceted columns when onlyFacetedColumns is true', async () => {
    const user = userEvent.setup()
    renderWithContext(<FilterConditionRow condition={blankCondition} />, {
      columnModels: [sexColumnModel, ageColumnModel],
      facetResults: [sexFacetResult],
      onlyFacetedColumns: true,
    })
    await user.click(screen.getByRole('combobox', { name: 'Property' }))
    expect(screen.getByRole('option', { name: 'Sex' })).toBeInTheDocument()
    expect(
      screen.queryByRole('option', { name: 'Age' }),
    ).not.toBeInTheDocument()
  })
})
