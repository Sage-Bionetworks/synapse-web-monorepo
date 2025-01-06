import { getSlotProps, mergeSlotProps } from './SlotUtils'

describe('SlotUtils', () => {
  describe('getSlotProps', () => {
    it('should return props when propsOrFn is an object', () => {
      const props = { prop1: 'value1', prop2: 'value2' }
      const ownerState = {}
      const result = getSlotProps(props, ownerState)
      expect(result).toEqual(props)
    })

    it('should return props when propsOrFn is a function', () => {
      const propsFn = (ownerState: { stateProp: string }) => ({
        prop1: ownerState.stateProp,
        prop2: 'value2',
      })
      const ownerState = { stateProp: 'value1' }
      const result = getSlotProps(propsFn, ownerState)
      expect(result).toEqual({ prop1: 'value1', prop2: 'value2' })
    })
  })

  describe('mergeSlotProps', () => {
    it('should merge two objects', () => {
      const object1 = { prop1: 'value1', prop2: 'value2' }
      const object2 = { prop2: 'newValue2', prop3: 'value3' }
      const result = mergeSlotProps(object1, object2)
      expect(result).toEqual({
        prop1: 'value1',
        prop2: 'newValue2',
        prop3: 'value3',
      })
    })

    it('should merge two functions', () => {
      const object1 = (ownerState: { stateProp: string }) => ({
        prop1: ownerState.stateProp,
        prop2: 'value2',
      })
      const object2 = (ownerState: { stateProp: string }) => ({
        prop2: 'newValue2',
        prop3: ownerState.stateProp,
      })
      const mergedFn = mergeSlotProps(object1, object2)
      const ownerState = { stateProp: 'value1' }
      const result = mergedFn(ownerState)
      expect(result).toEqual({
        prop1: 'value1',
        prop2: 'newValue2',
        prop3: 'value1',
      })
    })

    it('should merge an object and a function', () => {
      const object1 = { prop1: 'value1', prop2: 'value2' }
      const object2 = (ownerState: { stateProp: string }) => ({
        prop2: 'newValue2',
        prop3: ownerState.stateProp,
      })
      const mergedFn = mergeSlotProps(object1, object2)
      const ownerState = { stateProp: 'value1' }
      const result = mergedFn(ownerState)
      expect(result).toEqual({
        prop1: 'value1',
        prop2: 'newValue2',
        prop3: 'value1',
      })
    })

    it('should merge a function and an object', () => {
      const object1 = (ownerState: { stateProp: string }) => ({
        prop1: ownerState.stateProp,
        prop2: 'value2',
      })
      const object2 = { prop2: 'newValue2', prop3: 'value3' }
      const mergedFn = mergeSlotProps(object1, object2)
      const ownerState = { stateProp: 'value1' }
      const result = mergedFn(ownerState)
      expect(result).toEqual({
        prop1: 'value1',
        prop2: 'newValue2',
        prop3: 'value3',
      })
    })
  })
})
