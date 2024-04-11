import { describe, expect, test } from 'vitest'
import { getOwnerAndRepoName } from '../../shared/lib'

describe('test getOwnerAndRepoName func', () => {
   test('getOwnerAndRepoName with valid URL', () => {
      const url = 'https://github.com/owner/repo'
      const result = getOwnerAndRepoName(url)

      expect(result.owner).toBe('owner')
      expect(result.repo).toBe('repo')
   })

   test('getOwnerAndRepoName with URL without "http"', () => {
      const url = 'github.com/owner/repo'
      const result = getOwnerAndRepoName(url)

      expect(result.owner).toBe('owner')
      expect(result.repo).toBe('repo')
   })

   test('getOwnerAndRepoName with URL containing extra paths', () => {
      const url = 'https://github.com/owner/repo/extra/path'
      const result = getOwnerAndRepoName(url)

      expect(result.owner).toBe('owner')
      expect(result.repo).toBe('repo')
   })
})
