import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    dts({
      include: ['src/components/**/*.{ts,tsx,vue}'],
      outDir: 'dist/types'
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    port: 3000,
    open: true
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/components/index.ts'),
      name: 'CComponent',
      fileName: (format) => `c-component.${format}.js`
    },
    rollupOptions: {
      external: ['vue', 'element-plus', '@vueuse/core'],
      output: {
        globals: {
          vue: 'Vue',
          'element-plus': 'ElementPlus',
          '@vueuse/core': 'VueUse'
        },
        assetFileNames: 'style.css'
      }
    },
    sourcemap: true,
    cssCodeSplit: false
  }
})