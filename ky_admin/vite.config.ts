import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// mock
import {viteMockServe} from 'vite-plugin-mock'
import createRequireTransform from 'vite-plugin-require-transform'

export default defineConfig({
  plugins: [
      vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
      dirs: ['src/components','src/views/components'],
      // global imports to register
      imports: [
        'vue',
        'vue-router',
        'pinia'
      ],
      dts:'./types/auto-imports.d.ts'
    }),
    Components({
      resolvers: [ElementPlusResolver()],
      dirs: ['src/components','src/views/components'],
      dts:'./types/components.d.ts'
    }),
    viteMockServe(),
    createRequireTransform()
  ],
})
