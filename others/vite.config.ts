import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    vueJsx({}),
  ],
  server: {
    host: "0.0.0.0"
  },
  css: {
    modules: {
      scopeBehaviour: "local"
    },
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/style/tools.scss";' // 添加公共样式
      }
    }
  },
  build: {
    target: 'es2015'
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src')
      }
    ]
  }
})
