import { createI18n } from 'vue-i18n'
import en from '../locales/en.json'
import zhTW from '../locales/zhTW.json'

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'zhTW',
    messages: {
      en,
      zhTW
    }
  })

  vueApp.use(i18n)
})
