/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config.ts'

export default mergeConfig(
   viteConfig,
   defineConfig({
      test: {
         globals: true,
         environment: 'jsdom',
         setupFiles: ['./src/tests/setupTests.ts'],
         css: true,
      },
   }),
)
