// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'url'
import VueI18nVitePlugin from '@intlify/unplugin-vue-i18n/vite'

export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false,
  typescript: {
    typeCheck: true
  },
  build: {
    transpile: ['vue-i18n']
  },
  modules: [
    '@element-plus/nuxt',
    '@vueuse/nuxt',
    [
      'nuxt-security',
      {
        nonce: true,
        ssg: {
          hashScripts: true, // Enables CSP hash support for scripts in SSG mode
          hashStyles: true // Disables CSP hash support for styles in SSG mode (recommended)
        },
        sri: true,
        headers: {
          contentSecurityPolicy: {
            'style-src': ["'self'", "'unsafe-inline'"],
            'script-src': ["'self'", "'nonce-{{nonce}}'", "'strict-dynamic'"],
            'script-src-attr': ["'self'", "'nonce-{{nonce}}'", "'strict-dynamic'"]
          },
          xFrameOptions: 'DENY'
        }
      }
    ],
    ['@pinia/nuxt', { autoImports: ['defineStore', 'storeToRefs'] }]
  ],
  app: {
    head: {
      title: 'TestTool',
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        {
          charset: 'utf-8'
        },
        {
          'http-equiv': 'X-UA-Compatible',
          content: 'IE=edge'
        }
      ],
      link: [],
      style: [],
      script: [],
      noscript: [{ children: 'JS是執行網頁必要的，請不要禁止他！！' }]
    },
    baseURL: '/Nuxt3-testApp/',
    buildAssetsDir: 'static'
  },
  devServer: {
    port: 3000
  },
  vite: {
    build: {
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      }
    },
    plugins: [
      VueI18nVitePlugin({
        include: [resolve(dirname(fileURLToPath(import.meta.url)), './locales/*.json')]
      })
    ]
  },
  imports: { dirs: ['stores'] }
})
