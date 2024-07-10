import { generateCenteredSequence, getYDataForDotPlotOffset } from './DotPlot'

describe('DotPlot', () => {
  describe('generateCenteredSequence', () => {
    test.each([
      [0, []],
      [1, [0]],
      [2, [-0.5, 0.5]],
      [3, [-1, 0, 1]],
      [4, [-1.5, -0.5, 0.5, 1.5]],
    ])('generateCenteredSequence(%i)', (n, expected) => {
      expect(generateCenteredSequence(n)).toEqual(expected)
    })
  })

  describe('getYDataForDotPlotOffset', () => {
    test('No duplicates', () => {
      const xDataByGroup = {
        group1: [1],
        group2: [2],
      }

      const expected = {
        group1: [0],
        group2: [0],
      }

      expect(getYDataForDotPlotOffset(xDataByGroup)).toEqual(expected)
    })

    test('Pair of duplicates', () => {
      const xDataByGroup = {
        group1: [1],
        group2: [1],
      }

      const expected = {
        group1: [-0.5],
        group2: [0.5],
      }

      expect(getYDataForDotPlotOffset(xDataByGroup)).toEqual(expected)
    })

    test('Triple of duplicates', () => {
      const xDataByGroup = {
        group1: [1],
        group2: [1],
        group3: [1],
      }

      const expected = {
        group1: [-1],
        group2: [0],
        group3: [1],
      }

      expect(getYDataForDotPlotOffset(xDataByGroup)).toEqual(expected)
    })

    test('Even number of duplicates', () => {
      const xDataByGroup = {
        group1: [1],
        group2: [1],
        group3: [1],
        group4: [1],
      }

      const expected = {
        group1: [-1.5],
        group2: [-0.5],
        group3: [0.5],
        group4: [1.5],
      }

      expect(getYDataForDotPlotOffset(xDataByGroup)).toEqual(expected)
    })

    test('Odd number of duplicates', () => {
      const xDataByGroup = {
        group1: [1],
        group2: [1],
        group3: [1],
        group4: [1],
        group5: [1],
      }

      const expected = {
        group1: [-2],
        group2: [-1],
        group3: [0],
        group4: [1],
        group5: [2],
      }

      expect(getYDataForDotPlotOffset(xDataByGroup)).toEqual(expected)
    })

    test('Mixed sets of duplicates', () => {
      const xDataByGroup = {
        // Pair of 1s
        group1: [1],
        group2: [1],
        // Three 2s
        group3: [2],
        group4: [2],
        group5: [2],
        // Pair of 3s
        group6: [3],
        group7: [3],
      }

      const expected = {
        // Pair of 1s offset by 0.5
        group1: [-0.5],
        group2: [0.5],
        // Three 2s offset by 1
        group3: [-1],
        group4: [0],
        group5: [1],
        // Pair of 3s offset by 0.5, distinct from the pair of 1s
        group6: [-0.5],
        group7: [0.5],
      }

      expect(getYDataForDotPlotOffset(xDataByGroup)).toEqual(expected)
    })
  })
})
