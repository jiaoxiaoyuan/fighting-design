import vue from '@vitejs/plugin-vue'
import vueSetupExtend from 'unplugin-vue-setup-extend-plus/vite'
import { resolve } from 'path'
import type { UserConfigExport } from 'vite'

export default (): UserConfigExport => {
  return {
    base: './',
    plugins: [vue(), vueSetupExtend()],
    server: {
      port: 1216
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, '../packages/fighting-design') // 使用 @ 访问 src 目录
      }
    }
  }
}
