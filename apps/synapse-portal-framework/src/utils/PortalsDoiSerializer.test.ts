import PortalsDoiIdSerializer from '@/utils/PortalsDoiIdSerializer'
import { describe, expect, it } from 'vitest'

describe('PortalsDoiSerializer', () => {
  type TestResourceTypes = 'STUDY' | 'DATASET'
  const serializer = new PortalsDoiIdSerializer<TestResourceTypes>({
    resourceTypeOrderedRequiredAttributes: {
      STUDY: ['studyId'],
      DATASET: ['foo', 'bar'],
    },
  })

  describe('serialize', () => {
    it('serializes a single key', () => {
      const expected = '{"__type":"STUDY","studyId":"syn123"}'
      const actual = serializer.serialize('STUDY', {
        studyId: 'syn123',
      })
      expect(actual).toEqual(expected)
    })

    it('ignores extra keys', () => {
      const expected = '{"__type":"STUDY","studyId":"syn123"}'
      const actual = serializer.serialize('STUDY', {
        studyId: 'syn123',
        extraKey: 'extraValue',
      })
      expect(actual).toEqual(expected)
    })

    it('consistently serializes a composite key, regardless of order', () => {
      const expected = '{"__type":"DATASET","foo":"123","bar":"456"}'
      const actual1 = serializer.serialize('DATASET', {
        bar: '456',
        foo: '123',
      })
      expect(actual1).toEqual(expected)

      // reorder
      const actual2 = serializer.serialize('DATASET', {
        foo: '123',
        bar: '456',
      })
      expect(actual2).toEqual(expected)
    })

    it('throws an error if a key is missing', () => {
      expect(() => {
        serializer.serialize('STUDY', { someOtherAttribute: 'syn123' })
      }).toThrow(
        'Missing key(s) studyId in resource attributes for STUDY. Passed attributes: {"someOtherAttribute":"syn123"}',
      )
    })

    it('properly escapes reserved characters', () => {
      const expected = '{"__type":"STUDY","studyId":"syn\\"123"}'
      const actual = serializer.serialize('STUDY', { studyId: 'syn"123' })
      expect(actual).toEqual(expected)
    })
  })

  describe('deserialize', () => {
    it('deserializes a single key', () => {
      const expected = ['STUDY', { studyId: 'syn123' }]
      const actual = serializer.deserialize(
        '{"__type":"STUDY","studyId":"syn123"}',
      )
      expect(actual).toEqual(expected)
    })

    it('deserializes a composite key', () => {
      const expected = ['DATASET', { foo: '123', bar: '456' }]
      const actual = serializer.deserialize(
        '{"__type":"DATASET","foo":"123","bar":"456"}',
      )
      expect(actual).toEqual(expected)
    })

    it('deserializes with an escaped character', () => {
      const expected = ['STUDY', { studyId: 'syn"123' }]
      const actual = serializer.deserialize(
        '{"__type":"STUDY","studyId":"syn\\"123"}',
      )
      expect(actual).toEqual(expected)
    })
  })
})
