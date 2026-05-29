import { renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import type { SynapseEntityConfig } from './TableRowGenericCard'
import { useResolvedSynapseEntity } from './useResolvedSynapseEntity'

function createGetColumnValue(values: Record<string, string | undefined>) {
  return (columnName?: string) =>
    columnName ? values[columnName] ?? undefined : undefined
}

describe('useResolvedSynapseEntity', () => {
  it('returns undefined values when configuration is not provided', () => {
    const getColumnValue = createGetColumnValue({})
    const { result } = renderHook(() =>
      useResolvedSynapseEntity({
        synapseEntityConfig: undefined,
        getColumnValue,
      }),
    )

    expect(result.current).toEqual({
      entityId: undefined,
      entityVersionNumber: undefined,
    })
  })

  it('resolves values from row metadata when configured', () => {
    const getColumnValue = createGetColumnValue({})
    const config: SynapseEntityConfig = {
      id: { source: 'rowId' },
      version: { source: 'rowVersionNumber' },
    }

    const { result } = renderHook(() =>
      useResolvedSynapseEntity({
        synapseEntityConfig: config,
        getColumnValue,
        rowId: 123,
        rowVersionNumber: 4,
      }),
    )

    expect(result.current).toEqual({
      entityId: 'syn123',
      entityVersionNumber: 4,
    })
  })

  it('resolves values from columns when configured', () => {
    const getColumnValue = createGetColumnValue({
      entityId: 'syn999',
      entityVersion: '12',
    })
    const config: SynapseEntityConfig = {
      id: { source: 'column', columnName: 'entityId' },
      version: { source: 'column', columnName: 'entityVersion' },
    }

    const { result } = renderHook(() =>
      useResolvedSynapseEntity({
        synapseEntityConfig: config,
        getColumnValue,
      }),
    )

    expect(result.current).toEqual({
      entityId: 'syn999',
      entityVersionNumber: 12,
    })
  })

  it('ignores non-integer version values from a column', () => {
    const getColumnValue = createGetColumnValue({ entityVersion: '12.5' })
    const config: SynapseEntityConfig = {
      id: { source: 'column', columnName: 'entityId' },
      version: { source: 'column', columnName: 'entityVersion' },
    }

    const { result } = renderHook(() =>
      useResolvedSynapseEntity({
        synapseEntityConfig: config,
        getColumnValue,
      }),
    )

    expect(result.current).toEqual({
      entityId: undefined,
      entityVersionNumber: undefined,
    })
  })
})
