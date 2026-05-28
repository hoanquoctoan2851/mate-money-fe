import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useLocaleStore = defineStore('locale', () => {
  const savedLocale = localStorage.getItem('locale') || 'vi'
  const locale = ref<string>(savedLocale)

  function setLocale(lang: string) {
    locale.value = lang
  }

  watch(locale, (val) => {
    localStorage.setItem('locale', val)
  })

  return { locale, setLocale }
})

