import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    vue(),
    dts({
      entryRoot: resolve(__dirname),
      include: ['components/**/*.vue', 'components/**/*.ts', 'index.ts'],
      outDir: 'dist',
      tsconfigPath: resolve(__dirname, './tsconfig.json')
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'index.ts'),
      name: 'RocUI',
      fileName: (format) => `index.${format === 'es' ? 'mjs' : 'js'}`
    },
    rollupOptions: {
      external: ['vue', 'element-plus'],
      output: {
        globals: {
          vue: 'Vue',
          'element-plus': 'ElementPlus'
        },
        exports: 'named'
      }
    }
  }
}) 