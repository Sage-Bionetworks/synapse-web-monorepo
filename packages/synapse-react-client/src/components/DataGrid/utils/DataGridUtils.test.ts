import { describe, it, expect } from 'vitest'
import {
  parseQueryInput,
  rowsAreIdentical,
  removeNoOpOperations,
} from './DataGridUtils'
import { DataGridRow, Operation } from '../DataGridTypes'

describe('DataGridUtils', () => {
  describe('parseQueryInput', () => {
    it('returns type empty for empty string', () => {
      expect(parseQueryInput('')).toEqual({ type: 'empty', input: '' })
      expect(parseQueryInput('   ')).toEqual({ type: 'empty', input: '' })
    })
    it('returns type sql for SQL queries (case-insensitive)', () => {
      expect(parseQueryInput('SELECT * FROM foo')).toEqual({
        type: 'sql',
        input: 'SELECT * FROM foo',
      })
      expect(parseQueryInput(' select * from bar')).toEqual({
        type: 'sql',
        input: 'select * from bar',
      })
      expect(parseQueryInput('\nSELECT id FROM t')).toEqual({
        type: 'sql',
        input: 'SELECT id FROM t',
      })
    })
    it('returns type sessionId for session id pattern', () => {
      expect(parseQueryInput('A1234=')).toEqual({
        type: 'sessionId',
        input: 'A1234=',
      })
    })
    it('returns type unknown for anything else', () => {
      expect(parseQueryInput('foo')).toEqual({ type: 'unknown', input: 'foo' })
      expect(parseQueryInput('12345')).toEqual({
        type: 'unknown',
        input: '12345',
      })
      expect(parseQueryInput('UPDATE something')).toEqual({
        type: 'unknown',
        input: 'UPDATE something',
      })
    })
  })

  describe('rowsAreIdentical', () => {
    it('returns true for identical rows', () => {
      const a: DataGridRow = { id: 1, name: 'foo', active: true }
      const b: DataGridRow = { id: 1, name: 'foo', active: true }
      expect(rowsAreIdentical(a, b)).toBe(true)
    })
    it('returns false for different keys', () => {
      const a: DataGridRow = { id: 1, name: 'foo' }
      const b: DataGridRow = { id: 1, name: 'foo', extra: 42 }
      expect(rowsAreIdentical(a, b)).toBe(false)
    })
    it('returns false for different values', () => {
      const a: DataGridRow = { id: 1, name: 'foo' }
      const b: DataGridRow = { id: 2, name: 'foo' }
      expect(rowsAreIdentical(a, b)).toBe(false)
    })
    it('treats null, undefined, and empty string as equivalent', () => {
      const a: DataGridRow = { a: null, b: undefined, c: '' }
      const b: DataGridRow = { a: '', b: null, c: undefined }
      expect(rowsAreIdentical(a, b)).toBe(true)
    })
    it('returns false for different string representations', () => {
      const a: DataGridRow = { a: 1 }
      const b: DataGridRow = { a: '2' }
      expect(rowsAreIdentical(a, b)).toBe(false)
    })
  })

  describe('removeNoOpOperations', () => {
    it('removes UPDATE operations that do not change any values', () => {
      const oldRows: DataGridRow[] = [
        { id: 1, name: 'foo' },
        { id: 2, name: 'bar' },
      ]
      const newRows: DataGridRow[] = [
        { id: 1, name: 'foo' },
        { id: 2, name: 'bar' },
      ]
      const ops: Operation[] = [
        { type: 'UPDATE', fromRowIndex: 0, toRowIndex: 2 },
        { type: 'DELETE', fromRowIndex: 0, toRowIndex: 1 },
      ]
      const result = removeNoOpOperations(newRows, oldRows, ops)
      expect(result).toEqual([
        { type: 'DELETE', fromRowIndex: 0, toRowIndex: 1 },
      ])
    })
    it('keeps UPDATE operations that actually change values', () => {
      const oldRows: DataGridRow[] = [
        { id: 1, name: 'foo' },
        { id: 2, name: 'bar' },
      ]
      const newRows: DataGridRow[] = [
        { id: 1, name: 'foo' },
        { id: 2, name: 'baz' },
      ]
      const ops: Operation[] = [
        { type: 'UPDATE', fromRowIndex: 1, toRowIndex: 2 },
      ]
      const result = removeNoOpOperations(newRows, oldRows, ops)
      expect(result).toEqual([
        { type: 'UPDATE', fromRowIndex: 1, toRowIndex: 2 },
      ])
    })
    it('does not remove non-UPDATE operations', () => {
      const oldRows: DataGridRow[] = [{ id: 1 }]
      const newRows: DataGridRow[] = [{ id: 1 }]
      const ops: Operation[] = [
        { type: 'DELETE', fromRowIndex: 0, toRowIndex: 1 },
        { type: 'CREATE', fromRowIndex: 0, toRowIndex: 1 },
      ]
      const result = removeNoOpOperations(newRows, oldRows, ops)
      expect(result).toEqual(ops)
    })
    it('handles empty operations array', () => {
      const oldRows: DataGridRow[] = []
      const newRows: DataGridRow[] = []
      const ops: Operation[] = []
      expect(removeNoOpOperations(newRows, oldRows, ops)).toEqual([])
    })
    it('handles UPDATE with empty slices', () => {
      const oldRows: DataGridRow[] = []
      const newRows: DataGridRow[] = []
      const ops: Operation[] = [
        { type: 'UPDATE', fromRowIndex: 0, toRowIndex: 0 },
      ]
      expect(removeNoOpOperations(newRows, oldRows, ops)).toEqual([])
    })
  })
})
