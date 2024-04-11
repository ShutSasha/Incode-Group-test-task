import { describe, expect, test } from 'vitest'
import { getHowManyDaysAgo } from '../../shared/lib/transform-date/transform-date'

describe('get how many days it was', () => {
   test('2024-04-10', () => {
      const now = new Date('2024-04-20T19:13:49Z')
      expect(getHowManyDaysAgo('2024-04-10T19:13:49Z', now)).toBe(10)
   })

   test('2024-04-01', () => {
      const now = new Date('2024-04-20T19:13:49Z')
      expect(getHowManyDaysAgo('2024-04-01T19:13:49Z', now)).toBe(19)
   })

   test('Same day', () => {
      const now = new Date('2024-04-20T19:13:49Z')
      expect(getHowManyDaysAgo('2024-04-20T19:13:49Z', now)).toBe(0)
   })

   test('Future date', () => {
      const now = new Date('2024-04-20T19:13:49Z')
      expect(getHowManyDaysAgo('2024-04-21T19:13:49Z', now)).toBe(-1)
   })
})
