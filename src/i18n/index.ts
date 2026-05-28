import { createI18n } from 'vue-i18n'
import vi from './vi'
import en from './en'

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('locale') || 'vi',
  fallbackLocale: 'en',
  messages: {
    vi,
    en,
  },
})

export default i18n

