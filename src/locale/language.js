import { ref, computed } from 'vue'
import en from './en'
import de from './de.json'
import hu from './hu'

const availableLanguages = [
  {
    code: 'EN',
    name: 'English',
    file: en,
  },
  {
    code: 'DE',
    name: 'Deutsch',
    file: de,
  },
  {
    code: 'Hu',
    name: 'Magyar',
    file: hu,
  },

]

// Current Language Code
const currentLanguageCode = ref('EN')

// Current Language File
const t = computed(
  () => availableLanguages.find((lang) => lang.code === currentLanguageCode.value).file
)

// Set Language
const setLanguage = (code) => {
  currentLanguageCode.value = code
  localStorage.setItem('language', code)
}

// Remember Language
if (localStorage.getItem('language')) {
  setLanguage(localStorage.getItem('language'))
}

export { availableLanguages, currentLanguageCode, t, setLanguage }